// Серверные хелперы авторизации: текущий пользователь, проверка прав, вход/выход.

import { cookies } from "next/headers";
import { getGroups, getUser, getUserByUsername, updateUser } from "./db";
import { verifyPassword } from "./password";
import {
  SESSION_COOKIE,
  SESSION_TTL_SECONDS,
  createSessionToken,
  verifySessionToken,
} from "./session";
import { can, effectivePermissions } from "./rbac";
import type { Action, Permission, Resource, User } from "./types";

export interface AuthContext {
  user: User;
  permissions: Set<Permission>;
}

/**
 * Возвращает текущего пользователя по куке сессии.
 * Проверяет подпись токена, срок действия, блокировку и sessionVersion.
 */
export async function getAuth(): Promise<AuthContext | null> {
  const token = (await cookies()).get(SESSION_COOKIE)?.value;
  if (!token) return null;
  const payload = await verifySessionToken(token);
  if (!payload) return null;
  const user = await getUser(payload.uid);
  if (!user || user.disabled || user.sessionVersion !== payload.sv) return null;
  const groups = await getGroups();
  return { user, permissions: effectivePermissions(user, groups) };
}

/** Бросает ошибку, если нет сессии. Для серверных экшенов. */
export async function requireAuth(): Promise<AuthContext> {
  const auth = await getAuth();
  if (!auth) throw new Error("Требуется вход в админ-панель");
  return auth;
}

/** Бросает ошибку, если у пользователя нет права на действие. */
export async function requirePermission(
  resource: Resource,
  action: Action,
): Promise<AuthContext> {
  const auth = await requireAuth();
  if (!can(auth.permissions, resource, action))
    throw new Error("Недостаточно прав для этого действия");
  return auth;
}

/** Проверяет логин/пароль и устанавливает куку сессии. */
export async function login(
  username: string,
  password: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const user = await getUserByUsername(username);
  // При неизвестном логине всё равно тратим время на хеш — одинаковый ответ по времени.
  const valid = user
    ? await verifyPassword(password, user.passwordHash)
    : await verifyPassword(password, FAKE_HASH).then(() => false);
  if (!user || !valid) return { ok: false, error: "Неверный логин или пароль" };
  if (user.disabled)
    return { ok: false, error: "Учётная запись заблокирована" };

  const token = await createSessionToken({
    uid: user.id,
    sv: user.sessionVersion,
  });
  await setSessionCookie(token);
  await updateUser(user.id, { lastLoginAt: new Date().toISOString() });
  return { ok: true };
}

export async function logout(): Promise<void> {
  (await cookies()).delete(SESSION_COOKIE);
}

export async function setSessionCookie(token: string): Promise<void> {
  (await cookies()).set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: SESSION_TTL_SECONDS,
  });
}

// Валидный scrypt-хеш случайного пароля — для выравнивания времени ответа.
const FAKE_HASH =
  "scrypt:16384:8:1:WkVjUk1vRGRMb1hUcUJpUg==:K1B2dGhXUk1vRGRMb1hUcUJpUkVjUk1vRGRMb1hUcUJpUkVjUk1vRGRMb1hUcUJpUkVjUk1vRGRMb1g=";
