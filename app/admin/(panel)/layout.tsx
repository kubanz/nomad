import Link from "next/link";
import { redirect } from "next/navigation";
import { getAuth } from "@/lib/admin/auth";
import { can } from "@/lib/admin/rbac";
import type { Resource } from "@/lib/admin/types";
import { logoutAction } from "../auth-actions";

const NAV_ITEMS: { href: string; label: string; resource: Resource }[] = [
  { href: "/admin/pages", label: "Страницы", resource: "pages" },
  { href: "/admin/news", label: "Новости", resource: "news" },
  { href: "/admin/users", label: "Пользователи", resource: "users" },
  { href: "/admin/groups", label: "Группы и права", resource: "groups" },
];

export default async function PanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Middleware проверяет только подпись токена; здесь — полная проверка
  // (блокировка, sessionVersion). Ошибки конфигурации/хранилища не роняют
  // страницу, а уводят на /admin/login, где показывается диагностика.
  let auth: Awaited<ReturnType<typeof getAuth>> = null;
  try {
    auth = await getAuth();
  } catch {
    auth = null;
  }
  if (!auth) redirect("/admin/login");

  const visibleNav = NAV_ITEMS.filter((item) =>
    can(auth.permissions, item.resource, "view"),
  );

  return (
    <div className="flex min-h-screen">
      <aside className="flex w-60 shrink-0 flex-col border-r border-slate-200 bg-white">
        <Link href="/admin" className="border-b border-slate-200 px-5 py-4">
          <span className="text-base font-bold">Nomad Transfer</span>
          <span className="block text-xs text-slate-500">Админ-панель</span>
        </Link>
        <nav className="flex-1 space-y-1 p-3">
          <Link
            href="/admin"
            className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
          >
            Главная
          </Link>
          {visibleNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="border-t border-slate-200 p-4">
          <p className="truncate text-sm font-medium">{auth.user.name}</p>
          <p className="mb-3 truncate text-xs text-slate-500">
            @{auth.user.username}
          </p>
          <form action={logoutAction}>
            <button
              type="submit"
              className="w-full rounded-lg border border-slate-300 px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100"
            >
              Выйти
            </button>
          </form>
        </div>
      </aside>
      <main className="flex-1 p-8">{children}</main>
    </div>
  );
}
