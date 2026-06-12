import { notFound, redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { getGroup } from "@/lib/admin/db";
import { can } from "@/lib/admin/rbac";
import { GroupForm } from "../../../_components/GroupForm";

export const metadata = { title: "Группа — Админ-панель" };

export default async function EditGroupPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const auth = (await getAuth())!;
  if (!can(auth.permissions, "groups", "edit")) redirect("/admin/groups");

  const { id } = await params;
  const group = await getGroup(id);
  if (!group) notFound();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold">Группа: {group.name}</h1>
      <GroupForm group={group} />
    </div>
  );
}
