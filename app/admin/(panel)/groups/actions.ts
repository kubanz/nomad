"use server";

// Серверные экшены управления группами и их правами.

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requirePermission } from "@/lib/admin/auth";
import { createGroup, deleteGroup, updateGroup } from "@/lib/admin/db";
import { isValidPermission } from "@/lib/admin/rbac";
import type { Permission } from "@/lib/admin/types";
import type { FormState } from "../../auth-actions";

function readPermissions(formData: FormData): Permission[] {
  const values = formData.getAll("permissions").map(String);
  const valid = values.filter(isValidPermission);
  // "*" поглощает остальные права.
  return valid.includes("*") ? ["*"] : valid;
}

export async function createGroupAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    await requirePermission("groups", "create");
    const name = String(formData.get("name") ?? "").trim();
    if (!name) return { error: "Укажите название группы" };
    await createGroup({
      name,
      description: String(formData.get("description") ?? "").trim(),
      permissions: readPermissions(formData),
    });
  } catch (error) {
    return { error: (error as Error).message };
  }
  revalidatePath("/admin/groups");
  redirect("/admin/groups");
}

export async function updateGroupAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  try {
    await requirePermission("groups", "edit");
    const id = String(formData.get("id") ?? "");
    const name = String(formData.get("name") ?? "").trim();
    if (!name) return { error: "Укажите название группы" };
    await updateGroup(id, {
      name,
      description: String(formData.get("description") ?? "").trim(),
      permissions: readPermissions(formData),
    });
  } catch (error) {
    return { error: (error as Error).message };
  }
  revalidatePath("/admin/groups");
  redirect("/admin/groups");
}

export async function deleteGroupAction(formData: FormData): Promise<void> {
  await requirePermission("groups", "delete");
  await deleteGroup(String(formData.get("id") ?? ""));
  revalidatePath("/admin/groups");
}
