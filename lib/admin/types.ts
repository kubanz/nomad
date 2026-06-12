// Типы данных админ-панели: пользователи, группы, права.

/** Ресурсы, которыми управляет админка. Новые разделы (страницы, новости) уже заложены. */
export const RESOURCES = [
  "users",
  "groups",
  "pages",
  "news",
  "media",
  "settings",
] as const;

export type Resource = (typeof RESOURCES)[number];

/** Действия над ресурсом. */
export const ACTIONS = ["view", "create", "edit", "delete", "publish"] as const;

export type Action = (typeof ACTIONS)[number];

/** Право — строка вида "news:edit". "*" — суперправо (все ресурсы и действия). */
export type Permission = `${Resource}:${Action}` | "*";

export interface Group {
  id: string;
  name: string;
  description: string;
  /** Список прав группы. */
  permissions: Permission[];
  /** Системную группу нельзя удалить (например, "Администраторы"). */
  system?: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  /** Логин (уникальный, нижний регистр). */
  username: string;
  /** Отображаемое имя. */
  name: string;
  /** scrypt-хеш в формате "scrypt:N:r:p:salt:hash" (base64). */
  passwordHash: string;
  /** ID групп, в которых состоит пользователь. */
  groupIds: string[];
  /** Заблокированный пользователь не может войти. */
  disabled?: boolean;
  /**
   * Версия сессий: увеличивается при смене пароля или блокировке —
   * все ранее выданные сессии становятся недействительными.
   */
  sessionVersion: number;
  createdAt: string;
  updatedAt: string;
  lastLoginAt?: string;
}

/** Пользователь без секретов — для передачи в клиентские компоненты. */
export type SafeUser = Omit<User, "passwordHash">;

export function toSafeUser(user: User): SafeUser {
  const { passwordHash: _passwordHash, ...safe } = user;
  return safe;
}
