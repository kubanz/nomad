import { redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { getGroups } from "@/lib/admin/db";
import { can } from "@/lib/admin/rbac";
import { UserForm } from "../../../_components/UserForm";

export const metadata = { title: "Новый пользователь — Админ-панель" };

export default async function NewUserPage() {
  const auth = (await getAuth())!;
  if (!can(auth.permissions, "users", "create")) redirect("/admin/users");

  const groups = await getGroups();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Новый пользователь</h1>
      <UserForm groups={groups} />
    </div>
  );
}
