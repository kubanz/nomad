"use client";

// Клиентские формы входа и первичной настройки (useActionState для показа ошибок).

import { useActionState } from "react";
import { loginAction, setupAction, type FormState } from "../auth-actions";

const initialState: FormState = { error: null };

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500";
const labelClass = "mb-1 block text-sm font-medium text-slate-700";
const buttonClass =
  "w-full rounded-lg bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60";

function ErrorBox({ error }: { error: string | null }) {
  if (!error) return null;
  return (
    <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
      {error}
    </p>
  );
}

export function LoginForm({ nextPath }: { nextPath: string }) {
  const [state, action, pending] = useActionState(loginAction, initialState);
  return (
    <form action={action} className="space-y-4">
      <input type="hidden" name="next" value={nextPath} />
      <div>
        <label htmlFor="username" className={labelClass}>
          Логин
        </label>
        <input
          id="username"
          name="username"
          autoComplete="username"
          required
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="password" className={labelClass}>
          Пароль
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={inputClass}
        />
      </div>
      <ErrorBox error={state.error} />
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? "Вход…" : "Войти"}
      </button>
    </form>
  );
}

export function SetupForm() {
  const [state, action, pending] = useActionState(setupAction, initialState);
  return (
    <form action={action} className="space-y-4">
      <div>
        <label htmlFor="name" className={labelClass}>
          Имя
        </label>
        <input id="name" name="name" required className={inputClass} />
      </div>
      <div>
        <label htmlFor="username" className={labelClass}>
          Логин
        </label>
        <input
          id="username"
          name="username"
          autoComplete="username"
          required
          pattern="[a-zA-Z0-9._\-]{3,32}"
          title="3–32 символа: латиница, цифры, точка, дефис, подчёркивание"
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="password" className={labelClass}>
          Пароль
        </label>
        <input
          id="password"
          name="password"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          className={inputClass}
        />
      </div>
      <div>
        <label htmlFor="passwordRepeat" className={labelClass}>
          Пароль ещё раз
        </label>
        <input
          id="passwordRepeat"
          name="passwordRepeat"
          type="password"
          autoComplete="new-password"
          required
          minLength={8}
          className={inputClass}
        />
      </div>
      <ErrorBox error={state.error} />
      <button type="submit" disabled={pending} className={buttonClass}>
        {pending ? "Создание…" : "Создать администратора"}
      </button>
    </form>
  );
}
