import Link from "next/link";
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { getGroups, getUsers } from "@/lib/admin/db";
import { can } from "@/lib/admin/rbac";
import { DeleteButton } from "../../_components/DeleteButton";
import { deleteUserAction } from "./actions";

export const metadata = { title: "Пользователи — Админ-панель" };

export default async function UsersPage() {
  const auth = (await getAuth())!;
  if (!can(auth.permissions, "users", "view")) redirect("/admin");

  const [users, groups] = await Promise.all([getUsers(), getGroups()]);
  const groupName = (id: string) => groups.find((g) => g.id === id)?.name ?? id;

  return (
    <div className="max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Пользователи</h1>
        {can(auth.permissions, "users", "create") && (
          <Link
            href="/admin/users/new"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            + Добавить
          </Link>
        )}
      </div>

      <div className="overflow-hidden rounded-2xl bg-white shadow-sm">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 text-xs uppercase text-slate-500">
            <tr>
              <th className="px-5 py-3">Пользователь</th>
              <th className="px-5 py-3">Группы</th>
              <th className="px-5 py-3">Статус</th>
              <th className="px-5 py-3">Последний вход</th>
              <th className="px-5 py-3" />
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-5 py-3">
                  <p className="font-medium">{user.name}</p>
                  <p className="text-xs text-slate-500">@{user.username}</p>
                </td>
                <td className="px-5 py-3">
                  {user.groupIds.length > 0
                    ? user.groupIds.map(groupName).join(", ")
                    : "—"}
                </td>
                <td className="px-5 py-3">
                  {user.disabled ? (
                    <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-700">
                      Заблокирован
                    </span>
                  ) : (
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs text-emerald-700">
                      Активен
                    </span>
                  )}
                </td>
                <td className="px-5 py-3 text-slate-500">
                  {user.lastLoginAt
                    ? new Date(user.lastLoginAt).toLocaleString("ru-RU")
                    : "—"}
                </td>
                <td className="px-5 py-3">
                  <div className="flex justify-end gap-2">
                    {can(auth.permissions, "users", "edit") && (
                      <Link
                        href={`/admin/users/${user.id}`}
                        className="rounded-lg border border-slate-300 px-3 py-1.5 hover:bg-slate-50"
                      >
                        Изменить
                      </Link>
                    )}
                    {can(auth.permissions, "users", "delete") &&
                      user.id !== auth.user.id && (
                        <DeleteButton
                          action={deleteUserAction}
                          id={user.id}
                          confirmText={`Удалить пользователя @${user.username}?`}
                        />
                      )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
