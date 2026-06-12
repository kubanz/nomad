import { redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { hasAnyUsers } from "@/lib/admin/db";
import { LoginForm } from "../../_components/AuthForms";

export const metadata = { title: "Вход — Админ-панель Nomad Transfer" };

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  // Пока нет ни одного пользователя — отправляем на первичную настройку.
  if (!(await hasAnyUsers())) redirect("/admin/setup");
  if (await getAuth()) redirect("/admin");

  const { next } = await searchParams;
  const nextPath = next && next.startsWith("/admin") ? next : "/admin";

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-1 text-xl font-bold">Админ-панель</h1>
        <p className="mb-6 text-sm text-slate-500">
          Nomad Transfer — вход для сотрудников
        </p>
        <LoginForm nextPath={nextPath} />
      </div>
    </main>
  );
}
