import { redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { can } from "@/lib/admin/rbac";

export const metadata = { title: "Страницы — Админ-панель" };

export default async function PagesAdminPage() {
  const auth = (await getAuth())!;
  if (!can(auth.permissions, "pages", "view")) redirect("/admin");

  return (
    <div className="max-w-4xl">
      <h1 className="mb-6 text-2xl font-bold">Страницы</h1>
      <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
        <p className="font-medium">Раздел в разработке</p>
        <p className="mt-1 text-sm text-slate-500">
          Здесь появится управление страницами сайта. Права на раздел уже
          настраиваются в матрице доступов («Страницы»: просмотр, создание,
          редактирование, удаление, публикация).
        </p>
      </div>
    </div>
  );
}
