import { notFound, redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { getGroups, getUser } from "@/lib/admin/db";
import { can } from "@/lib/admin/rbac";
import { toSafeUser } from "@/lib/admin/types";
import { UserForm } from "../../../_components/UserForm";

export const metadata = { title: "Пользователь — Админ-панель" };

export default async function EditUserPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const auth = (await getAuth())!;
  if (!can(auth.permissions, "users", "edit")) redirect("/admin/users");

  const { id } = await params;
  const user = await getUser(id);
  if (!user) notFound();

  const groups = await getGroups();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">
        Пользователь: {user.name}
      </h1>
      <UserForm
        user={toSafeUser(user)}
        groups={groups}
        isSelf={auth.user.id === user.id}
      />
    </div>
  );
}
