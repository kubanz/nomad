"use server";

// Серверные экшены управления пользователями. Каждый проверяет права через RBAC.

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePermission } from "@/lib/admin/auth";
import { createUser, deleteUser, getUser, updateUser } from "@/lib/admin/db";
import { hashPassword, validatePasswordStrength } from "@/lib/admin/password";
import type { FormState } from "../../auth-actions";

function readGroupIds(formData: FormData): string[] {
  return formData.getAll("groupIds").map(String);
}

export async function createUserAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    await requirePermission("users", "create");
    const password = String(formData.get("password") ?? "");
    const weakness = validatePasswordStrength(password);
    if (weakness) return { error: weakness };
    await createUser({
      username: String(formData.get("username") ?? ""),
      name: String(formData.get("name") ?? ""),
      passwordHash: await hashPassword(password),
      groupIds: readGroupIds(formData),
    });
  } catch (error) {
    return { error: (error as Error).message };
  }
  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function updateUserAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    const auth = await requirePermission("users", "edit");
    const id = String(formData.get("id") ?? "");
    const target = await getUser(id);
    if (!target) return { error: "Пользователь не найден" };

    const isSelf = auth.user.id === id;
    const disabled = formData.get("disabled") === "on";
    // Себя нельзя заблокировать и нельзя менять собственные группы —
    // иначе можно случайно отрезать себе доступ.
    if (isSelf && disabled)
      return { error: "Нельзя заблокировать собственную учётную запись" };
    const groupIds = isSelf ? target.groupIds : readGroupIds(formData);

    const newPassword = String(formData.get("newPassword") ?? "");
    let passwordHash: string | undefined;
    if (newPassword) {
      const weakness = validatePasswordStrength(newPassword);
      if (weakness) return { error: weakness };
      passwordHash = await hashPassword(newPassword);
    }

    await updateUser(id, {
      name: String(formData.get("name") ?? "") || target.name,
      groupIds,
      disabled: isSelf ? target.disabled : disabled,
      ...(passwordHash ? { passwordHash } : {}),
      // Смена пароля или блокировка сбрасывает чужие активные сессии.
      bumpSessionVersion: Boolean(passwordHash) || disabled !== !!target.disabled,
    });
  } catch (error) {
    return { error: (error as Error).message };
  }
  revalidatePath("/admin/users");
  redirect("/admin/users");
}

export async function deleteUserAction(formData: FormData): Promise<void> {
  const auth = await requirePermission("users", "delete");
  const id = String(formData.get("id") ?? "");
  if (auth.user.id === id)
    throw new Error("Нельзя удалить собственную учётную запись");
  await deleteUser(id);
  revalidatePath("/admin/users");
}
