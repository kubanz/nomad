import Link from "next/link";
import { getAuth } from "@/lib/admin/auth";
import { getGroups, getUsers } from "@/lib/admin/db";
import { can } from "@/lib/admin/rbac";

export default async function AdminDashboard() {
  const auth = (await getAuth())!;
  const [users, groups] = await Promise.all([getUsers(), getGroups()]);
  const userGroups = groups.filter((g) => auth.user.groupIds.includes(g.id));

  return (
    <div className="max-w-4xl">
      <h1 className="mb-1 text-2xl font-bold">
        Здравствуйте, {auth.user.name}!
      </h1>
      <p className="mb-8 text-sm text-slate-500">
        Ваши группы:{" "}
        {userGroups.length > 0
          ? userGroups.map((g) => g.name).join(", ")
          : "не назначены"}
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {can(auth.permissions, "users", "view") && (
          <Link
            href="/admin/users"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <p className="text-3xl font-bold">{users.length}</p>
            <p className="mt-1 font-medium">Пользователи</p>
            <p className="mt-1 text-sm text-slate-500">
              Учётные записи сотрудников и их группы
            </p>
          </Link>
        )}
        {can(auth.permissions, "groups", "view") && (
          <Link
            href="/admin/groups"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <p className="text-3xl font-bold">{groups.length}</p>
            <p className="mt-1 font-medium">Группы и права</p>
            <p className="mt-1 text-sm text-slate-500">
              Матрица доступов: кто и что может делать
            </p>
          </Link>
        )}
        {can(auth.permissions, "pages", "view") && (
          <Link
            href="/admin/pages"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <p className="text-3xl font-bold">—</p>
            <p className="mt-1 font-medium">Страницы</p>
            <p className="mt-1 text-sm text-slate-500">
              Управление страницами сайта (скоро)
            </p>
          </Link>
        )}
        {can(auth.permissions, "news", "view") && (
          <Link
            href="/admin/news"
            className="rounded-2xl bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <p className="text-3xl font-bold">—</p>
            <p className="mt-1 font-medium">Новости</p>
            <p className="mt-1 text-sm text-slate-500">
              Публикация новостей и статей (скоро)
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
