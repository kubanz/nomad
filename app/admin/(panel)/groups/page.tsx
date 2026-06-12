import Link from "next/link";
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { getGroups, getUsers } from "@/lib/admin/db";
import { ACTION_LABELS, RESOURCE_LABELS, can } from "@/lib/admin/rbac";
import type { Permission } from "@/lib/admin/types";
import { DeleteButton } from "../../_components/DeleteButton";
import { deleteGroupAction } from "./actions";

export const metadata = { title: "Группы и права — Админ-панель" };

function permissionLabel(permission: Permission): string {
  if (permission === "*") return "Полный доступ";
  const [resource, action] = permission.split(":");
  return `${RESOURCE_LABELS[resource as keyof typeof RESOURCE_LABELS]}: ${ACTION_LABELS[action as keyof typeof ACTION_LABELS].toLowerCase()}`;
}

export default async function GroupsPage() {
  const auth = (await getAuth())!;
  if (!can(auth.permissions, "groups", "view")) redirect("/admin");

  const [groups, users] = await Promise.all([getGroups(), getUsers()]);
  const memberCount = (groupId: string) =>
    users.filter((u) => u.groupIds.includes(groupId)).length;

  return (
    <div className="max-w-4xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Группы и права</h1>
        {can(auth.permissions, "groups", "create") && (
          <Link
            href="/admin/groups/new"
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            + Добавить
          </Link>
        )}
      </div>

      <div className="space-y-4">
        {groups.map((group) => (
          <div key={group.id} className="rounded-2xl bg-white p-6 shadow-sm">
            <div className="mb-2 flex items-start justify-between gap-4">
              <div>
                <h2 className="font-semibold">
                  {group.name}
                  {group.system && (
                    <span className="ml-2 rounded-full bg-slate-100 px-2 py-0.5 text-xs font-normal text-slate-500">
                      системная
                    </span>
                  )}
                </h2>
                <p className="text-sm text-slate-500">{group.description}</p>
              </div>
              <div className="flex shrink-0 gap-2">
                {can(auth.permissions, "groups", "edit") && (
                  <Link
                    href={`/admin/groups/${group.id}`}
                    className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm hover:bg-slate-50"
                  >
                    Изменить
                  </Link>
                )}
                {can(auth.permissions, "groups", "delete") && !group.system && (
                  <DeleteButton
                    action={deleteGroupAction}
                    id={group.id}
                    confirmText={`Удалить группу «${group.name}»? Она будет снята со всех пользователей.`}
                  />
                )}
              </div>
            </div>
            <p className="mb-3 text-xs text-slate-500">
              Участников: {memberCount(group.id)}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {group.permissions.map((permission) => (
                <span
                  key={permission}
                  className={`rounded-full px-2.5 py-1 text-xs ${
                    permission === "*"
                      ? "bg-emerald-100 font-medium text-emerald-800"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  {permissionLabel(permission)}
                </span>
              ))}
              {group.permissions.length === 0 && (
                <span className="text-xs text-slate-400">Прав нет</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
