// Матрица доступов (RBAC): проверка прав пользователя через его группы.

import {
  ACTIONS,
  RESOURCES,
  type Action,
  type Group,
  type Permission,
  type Resource,
  type User,
} from "./types";

/** Подписи ресурсов для интерфейса админки. */
export const RESOURCE_LABELS: Record<Resource, string> = {
  users: "Пользователи",
  groups: "Группы и права",
  pages: "Страницы",
  news: "Новости",
  media: "Медиафайлы",
  settings: "Настройки сайта",
};

/** Подписи действий для интерфейса админки. */
export const ACTION_LABELS: Record<Action, string> = {
  view: "Просмотр",
  create: "Создание",
  edit: "Редактирование",
  delete: "Удаление",
  publish: "Публикация",
};

/** Не все действия осмысленны для каждого ресурса. */
const RESOURCE_ACTIONS: Record<Resource, readonly Action[]> = {
  users: ["view", "create", "edit", "delete"],
  groups: ["view", "create", "edit", "delete"],
  pages: ACTIONS,
  news: ACTIONS,
  media: ["view", "create", "delete"],
  settings: ["view", "edit"],
};

export function actionsForResource(resource: Resource): readonly Action[] {
  return RESOURCE_ACTIONS[resource];
}

export function isValidPermission(value: string): value is Permission {
  if (value === "*") return true;
  const [resource, action] = value.split(":");
  return (
    RESOURCES.includes(resource as Resource) &&
    (RESOURCE_ACTIONS[resource as Resource] as readonly string[]).includes(
      action,
    )
  );
}

/** Собирает действующий набор прав пользователя из всех его групп. */
export function effectivePermissions(
  user: Pick<User, "groupIds" | "disabled">,
  groups: Group[],
): Set<Permission> {
  const result = new Set<Permission>();
  if (user.disabled) return result;
  for (const group of groups) {
    if (!user.groupIds.includes(group.id)) continue;
    for (const permission of group.permissions) result.add(permission);
  }
  return result;
}

/** Проверяет право на действие. "*" покрывает всё. */
export function can(
  permissions: Set<Permission>,
  resource: Resource,
  action: Action,
): boolean {
  return permissions.has("*") || permissions.has(`${resource}:${action}`);
}
