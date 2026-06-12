"use client";

// Кнопка удаления с подтверждением, вызывает переданный серверный экшен.

export function DeleteButton({
  action,
  id,
  confirmText,
}: {
  action: (formData: FormData) => Promise<void>;
  id: string;
  confirmText: string;
}) {
  return (
    <form
      action={action}
      onSubmit={(event) => {
        if (!window.confirm(confirmText)) event.preventDefault();
      }}
    >
      <input type="hidden" name="id" value={id} />
      <button
        type="submit"
        className="rounded-lg border border-red-200 px-3 py-1.5 text-sm text-red-600 hover:bg-red-50"
      >
        Удалить
      </button>
    </form>
  );
}
