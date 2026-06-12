"use client";

// Форма создания/редактирования пользователя с выбором групп.

import { useActionState } from "react";
import type { Group, SafeUser } from "@/lib/admin/types";
import { createUserAction, updateUserAction } from "../(panel)/users/actions";
import type { FormState } from "../auth-actions";

const initialState: FormState = { error: null };

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500";
const labelClass = "mb-1 block text-sm font-medium text-slate-700";

export function UserForm({
  user,
  groups,
  isSelf,
}: {
  /** Если не передан — режим создания. */
  user?: SafeUser;
  groups: Group[];
  /** Редактирование собственной учётки: группы и блокировка недоступны. */
  isSelf?: boolean;
}) {
  const [state, action, pending] = useActionState(
    user ? updateUserAction : createUserAction,
    initialState,
  );

  return (
    <form action={action} className="max-w-lg space-y-5">
      {user && <input type="hidden" name="id" value={user.id} />}

      <div>
        <label htmlFor="name" className={labelClass}>
          Имя
        </label>
        <input
          id="name"
          name="name"
          required
          defaultValue={user?.name}
          className={inputClass}
        />
      </div>

      {user ? (
        <div>
          <span className={labelClass}>Логин</span>
          <p className="text-sm text-slate-500">
            @{user.username} (логин изменить нельзя)
          </p>
        </div>
      ) : (
        <div>
          <label htmlFor="username" className={labelClass}>
            Логин
          </label>
          <input
            id="username"
            name="username"
            required
            pattern="[a-zA-Z0-9._\-]{3,32}"
            title="3–32 символа: латиница, цифры, точка, дефис, подчёркивание"
            className={inputClass}
          />
        </div>
      )}

      <div>
        <label htmlFor={user ? "newPassword" : "password"} className={labelClass}>
          {user ? "Новый пароль (оставьте пустым, чтобы не менять)" : "Пароль"}
        </label>
        <input
          id={user ? "newPassword" : "password"}
          name={user ? "newPassword" : "password"}
          type="password"
          autoComplete="new-password"
          required={!user}
          minLength={8}
          className={inputClass}
        />
      </div>

      <fieldset>
        <legend className={labelClass}>Группы</legend>
        {isSelf ? (
          <p className="text-sm text-slate-500">
            Собственные группы изменить нельзя — попросите другого
            администратора.
          </p>
        ) : (
          <div className="space-y-2 rounded-lg border border-slate-200 bg-white p-3">
            {groups.map((group) => (
              <label key={group.id} className="flex items-start gap-2 text-sm">
                <input
                  type="checkbox"
                  name="groupIds"
                  value={group.id}
                  defaultChecked={user?.groupIds.includes(group.id)}
                  className="mt-0.5"
                />
                <span>
                  <span className="font-medium">{group.name}</span>
                  {group.description && (
                    <span className="block text-xs text-slate-500">
                      {group.description}
                    </span>
                  )}
                </span>
              </label>
            ))}
          </div>
        )}
      </fieldset>

      {user && !isSelf && (
        <label className="flex items-center gap-2 text-sm">
          <input
            type="checkbox"
            name="disabled"
            defaultChecked={user.disabled}
          />
          Заблокировать (пользователь не сможет войти)
        </label>
      )}

      {state.error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
      >
        {pending ? "Сохранение…" : user ? "Сохранить" : "Создать пользователя"}
      </button>
    </form>
  );
}
