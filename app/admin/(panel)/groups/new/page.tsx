import { redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { can } from "@/lib/admin/rbac";
import { GroupForm } from "../../../_components/GroupForm";

export const metadata = { title: "Новая группа — Админ-панель" };

export default async function NewGroupPage() {
  const auth = (await getAuth())!;
  if (!can(auth.permissions, "groups", "create")) redirect("/admin/groups");

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Новая группа</h1>
      <GroupForm />
    </div>
  );
}
