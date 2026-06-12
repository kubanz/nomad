// Репозитории пользователей и групп поверх JSON-хранилища.

import { randomUUID } from "node:crypto";
import { readDocument, writeDocument } from "./store";
import type { Group, Permission, User } from "./types";

const USERS_DOC = "users";
const GROUPS_DOC = "groups";

/** ID системной группы администраторов (создаётся автоматически). */
export const ADMIN_GROUP_ID = "administrators";

const DEFAULT_GROUPS: Group[] = [
  {
    id: ADMIN_GROUP_ID,
    name: "Администраторы",
    description: "Полный доступ ко всем разделам админ-панели.",
    permissions: ["*"],
    system: true,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
  {
    id: "editors",
    name: "Редакторы",
    description: "Создание и редактирование страниц и новостей без публикации.",
    permissions: [
      "pages:view",
      "pages:create",
      "pages:edit",
      "news:view",
      "news:create",
      "news:edit",
      "media:view",
      "media:create",
    ],
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  },
];

// --- Группы ---

export async function getGroups(): Promise<Group[]> {
  const groups = await readDocument<Group[]>(GROUPS_DOC);
  if (groups && groups.length > 0) return groups;
  await writeDocument(GROUPS_DOC, DEFAULT_GROUPS);
  return DEFAULT_GROUPS;
}

export async function getGroup(id: string): Promise<Group | null> {
  return (await getGroups()).find((g) => g.id === id) ?? null;
}

export async function createGroup(data: {
  name: string;
  description: string;
  permissions: Permission[];
}): Promise<Group> {
  const groups = await getGroups();
  const now = new Date().toISOString();
  const group: Group = {
    id: randomUUID(),
    name: data.name,
    description: data.description,
    permissions: data.permissions,
    createdAt: now,
    updatedAt: now,
  };
  await writeDocument(GROUPS_DOC, [...groups, group]);
  return group;
}

export async function updateGroup(
  id: string,
  data: Partial<Pick<Group, "name" | "description" | "permissions">>,
): Promise<Group> {
  const groups = await getGroups();
  const index = groups.findIndex((g) => g.id === id);
  if (index === -1) throw new Error("Группа не найдена");
  const current = groups[index];
  // У системной группы администраторов права менять нельзя.
  const permissions = current.system
    ? current.permissions
    : (data.permissions ?? current.permissions);
  const updated: Group = {
    ...current,
    name: data.name ?? current.name,
    description: data.description ?? current.description,
    permissions,
    updatedAt: new Date().toISOString(),
  };
  groups[index] = updated;
  await writeDocument(GROUPS_DOC, groups);
  return updated;
}

export async function deleteGroup(id: string): Promise<void> {
  const groups = await getGroups();
  const group = groups.find((g) => g.id === id);
  if (!group) throw new Error("Группа не найдена");
  if (group.system) throw new Error("Системную группу нельзя удалить");
  await writeDocument(
    GROUPS_DOC,
    groups.filter((g) => g.id !== id),
  );
  // Убираем удалённую группу у пользователей.
  const users = await getUsers();
  const affected = users.filter((u) => u.groupIds.includes(id));
  if (affected.length > 0) {
    for (const user of users) {
      user.groupIds = user.groupIds.filter((gid) => gid !== id);
    }
    await writeDocument(USERS_DOC, users);
  }
}

// --- Пользователи ---

export async function getUsers(): Promise<User[]> {
  return (await readDocument<User[]>(USERS_DOC)) ?? [];
}

export async function getUser(id: string): Promise<User | null> {
  return (await getUsers()).find((u) => u.id === id) ?? null;
}

export async function getUserByUsername(
  username: string,
): Promise<User | null> {
  const normalized = username.trim().toLowerCase();
  return (await getUsers()).find((u) => u.username === normalized) ?? null;
}

export async function hasAnyUsers(): Promise<boolean> {
  return (await getUsers()).length > 0;
}

export async function createUser(data: {
  username: string;
  name: string;
  passwordHash: string;
  groupIds: string[];
}): Promise<User> {
  const users = await getUsers();
  const username = data.username.trim().toLowerCase();
  if (!/^[a-z0-9._-]{3,32}$/.test(username))
    throw new Error(
      "Логин: 3–32 символа, только латиница, цифры, точка, дефис, подчёркивание",
    );
  if (users.some((u) => u.username === username))
    throw new Error("Пользователь с таким логином уже существует");
  const now = new Date().toISOString();
  const user: User = {
    id: randomUUID(),
    username,
    name: data.name.trim() || username,
    passwordHash: data.passwordHash,
    groupIds: data.groupIds,
    sessionVersion: 1,
    createdAt: now,
    updatedAt: now,
  };
  await writeDocument(USERS_DOC, [...users, user]);
  return user;
}

export async function updateUser(
  id: string,
  data: Partial<
    Pick<User, "name" | "groupIds" | "disabled" | "passwordHash" | "lastLoginAt">
  > & { bumpSessionVersion?: boolean },
): Promise<User> {
  const users = await getUsers();
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) throw new Error("Пользователь не найден");
  const current = users[index];
  const { bumpSessionVersion, ...fields } = data;
  const updated: User = {
    ...current,
    ...fields,
    sessionVersion: bumpSessionVersion
      ? current.sessionVersion + 1
      : current.sessionVersion,
    updatedAt: new Date().toISOString(),
  };
  users[index] = updated;
  await writeDocument(USERS_DOC, users);
  return updated;
}

export async function deleteUser(id: string): Promise<void> {
  const users = await getUsers();
  if (!users.some((u) => u.id === id)) throw new Error("Пользователь не найден");
  await writeDocument(
    USERS_DOC,
    users.filter((u) => u.id !== id),
  );
}
