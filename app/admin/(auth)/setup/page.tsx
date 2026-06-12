import { redirect } from "next/navigation";
import { hasAnyUsers } from "@/lib/admin/db";
import { SetupForm } from "../../_components/AuthForms";

export const metadata = { title: "Первичная настройка — Админ-панель" };

export default async function SetupPage() {
  // Страница доступна только до создания первого пользователя.
  if (await hasAnyUsers()) redirect("/admin/login");

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
