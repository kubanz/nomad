"use server";

// Серверные экшены входа, выхода и первичной настройки админки.

import { redirect } from "next/navigation";
import { login, logout, setSessionCookie } from "@/lib/admin/auth";
import { ADMIN_GROUP_ID, createUser, getGroups, hasAnyUsers } from "@/lib/admin/db";
import { hashPassword, validatePasswordStrength } from "@/lib/admin/password";
import { createSessionToken } from "@/lib/admin/session";

export interface FormState {
  error: string | null;
}

function safeNextPath(value: unknown): string {
  // Защита от open redirect: разрешаем только внутренние пути админки.
  if (typeof value === "string" && value.startsWith("/admin")) return value;
  return "/admin";
}

export async function loginAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const username = String(formData.get("username") ?? "");
  const password = String(formData.get("password") ?? "");
  if (!username || !password)
    return { error: "Введите логин и пароль" };

  let result: Awaited<ReturnType<typeof login>>;
  try {
    result = await login(username, password);
  } catch (error) {
    // Ошибки конфигурации/хранилища показываем в форме, а не роняем экшен.
    return { error: (error as Error).message };
  }
  if (!result.ok) return { error: result.error };

  redirect(safeNextPath(formData.get("next")));
}

export async function logoutAction(): Promise<void> {
  await logout();
  redirect("/admin/login");
}

/**
 * Первичная настройка: создание первого администратора.
 * Работает только пока в системе нет ни одного пользователя.
 */
export async function setupAction(
  _prev: FormState,
  formData: FormData,
): Promise<FormState> {
  const username = String(formData.get("username") ?? "");
  const name = String(formData.get("name") ?? "");
  const password = String(formData.get("password") ?? "");
  const passwordRepeat = String(formData.get("passwordRepeat") ?? "");

  if (password !== passwordRepeat) return { error: "Пароли не совпадают" };
  const weakness = validatePasswordStrength(password);
  if (weakness) return { error: weakness };

  let userId: string;
  let sessionVersion: number;
  try {
    if (await hasAnyUsers())
      return {
        error: "Администратор уже создан. Войдите через страницу входа.",
      };

    // Гарантируем, что группы по умолчанию созданы.
    await getGroups();

    const user = await createUser({
      username,
      name,
      passwordHash: await hashPassword(password),
      groupIds: [ADMIN_GROUP_ID],
    });
    userId = user.id;
    sessionVersion = user.sessionVersion;
  } catch (error) {
    return { error: (error as Error).message };
  }

  const token = await createSessionToken({ uid: userId, sv: sessionVersion });
  await setSessionCookie(token);
  redirect("/admin");
}
