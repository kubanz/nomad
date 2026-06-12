import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Админ-панель — Nomad Transfer",
  robots: { index: false, follow: false },
};

// Админка всегда рендерится динамически: читает куки и хранилище.
export const dynamic = "force-dynamic";

export default function AdminRootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-slate-100 text-slate-900">{children}</div>;
}
