import { redirect } from "next/navigation";
import { hasAnyUsers } from "@/lib/admin/db";
import { ConfigError } from "../../_components/ConfigError";
import { SetupForm } from "../../_components/AuthForms";

export const metadata = { title: "Первичная настройка — Админ-панель" };

export default async function SetupPage() {
  // Ошибки конфигурации (нет секрета, недоступно хранилище) показываем
  // человеку, а не роняем страницу безликим "Application error".
  let usersExist: boolean;
  try {
    if (!process.env.ADMIN_AUTH_SECRET)
      throw new Error("ADMIN_AUTH_SECRET не задан в переменных окружения.");
    usersExist = await hasAnyUsers();
  } catch (error) {
    return <ConfigError message={(error as Error).message} />;
  }

  // Страница доступна только до создания первого пользователя.
  if (usersExist) redirect("/admin/login");

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-1 text-xl font-bold">Первичная настройка</h1>
        <p className="mb-6 text-sm text-slate-500">
          Создайте первого администратора. Он получит полный доступ ко всем
          разделам панели.
        </p>
        <SetupForm />
      </div>
    </main>
  );
}
