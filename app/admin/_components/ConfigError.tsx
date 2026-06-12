// Экран ошибки конфигурации админки: показывает причину вместо
// безликого "Application error" с digest.

export function ConfigError({ message }: { message: string }) {
  const secretSet = Boolean(process.env.ADMIN_AUTH_SECRET);
  const blobTokenSet = Boolean(process.env.BLOB_READ_WRITE_TOKEN);

  return (
    <main className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-lg rounded-2xl bg-white p-8 shadow-sm">
        <h1 className="mb-2 text-xl font-bold text-red-700">
          Админ-панель не настроена
        </h1>
        <p className="mb-4 rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {message}
        </p>
        <ul className="mb-4 space-y-1 text-sm text-slate-600">
          <li>
            {secretSet ? "✅" : "❌"} Переменная <code>ADMIN_AUTH_SECRET</code>{" "}
            {secretSet ? "задана" : "не задана"}
          </li>
          <li>
            {blobTokenSet ? "✅" : "❌"} Переменная{" "}
            <code>BLOB_READ_WRITE_TOKEN</code>{" "}
            {blobTokenSet ? "задана" : "не задана"}
          </li>
        </ul>
        <p className="text-sm text-slate-500">
          Задайте переменные в Vercel → Settings → Environment Variables (для
          нужного окружения: Production и Preview) и сделайте редеплой.
          Подробности — в docs/ADMIN.md.
        </p>
      </div>
    </main>
  );
}
