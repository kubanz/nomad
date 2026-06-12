import { redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { can } from "@/lib/admin/rbac";

export const metadata = { title: "Новости — Админ-панель" };

export default async function NewsAdminPage() {
  const auth = (await getAuth())!;
  if (!can(auth.permissions, "news", "view")) redirect("/admin");

  return (
    <div className="max-w-4xl">
      <h1 className="mb-6 text-2xl font-bold">Новости</h1>
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="font-medium">Раздел в разработке</p>
        <p className="mt-1 text-sm text-slate-500">
          Здесь появится публикация новостей и статей. Права на раздел уже
          настраиваются в матрице доступов («Новости»: просмотр, создание,
          редактирование, удаление, публикация).
        </p>
      </div>
    </div>
  );
}
