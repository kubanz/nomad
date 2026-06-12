"use client";

// Форма группы с редактором матрицы доступов (ресурсы × действия).

import { useActionState, useState } from "react";
import {
  ACTION_LABELS,
  RESOURCE_LABELS,
  actionsForResource,
} from "@/lib/admin/rbac";
import { ACTIONS, RESOURCES, type Group } from "@/lib/admin/types";
import { createGroupAction, updateGroupAction } from "../(panel)/groups/actions";
import type { FormState } from "../auth-actions";

const initialState: FormState = { error: null };

const inputClass =
  "w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-emerald-500 focus:outline-none focus:ring-1 focus:ring-emerald-500";
const labelClass = "mb-1 block text-sm font-medium text-slate-700";

export function GroupForm({ group }: { group?: Group }) {
  const [state, action, pending] = useActionState(
    group ? updateGroupAction : createGroupAction,
    initialState,
  );
  const [superAccess, setSuperAccess] = useState(
    group?.permissions.includes("*") ?? false,
  );
  const locked = Boolean(group?.system);

  return (
    <form action={action} className="max-w-3xl space-y-5">
      {group && <input type="hidden" name="id" value={group.id} />}

      <div>
        <label htmlFor="name" className={labelClass}>
          Название
        </label>
        <input
          id="name"
          name="name"
          required
          defaultValue={group?.name}
          className={inputClass}
        />
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>
          Описание
        </label>
        <input
          id="description"
          name="description"
          defaultValue={group?.description}
          className={inputClass}
        />
      </div>

      <fieldset disabled={locked}>
        <legend className={labelClass}>Матрица доступов</legend>
        {locked && (
          <p className="mb-3 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
            Это системная группа — её права изменить нельзя.
          </p>
        )}

        <label className="mb-3 flex items-center gap-2 text-sm font-medium">
          <input
            type="checkbox"
            name="permissions"
            value="*"
            checked={superAccess}
            onChange={(event) => setSuperAccess(event.target.checked)}
          />
          Полный доступ (все разделы и действия)
        </label>

        <div
          className={`overflow-hidden rounded-2xl bg-white shadow-sm ${superAccess ? "pointer-events-none opacity-40" : ""}`}
        >
          <table className="w-full text-left text-sm">
            <thead className="border-b border-slate-200 text-xs uppercase text-slate-500">
              <tr>
                <th className="px-4 py-3">Раздел</th>
                {ACTIONS.map((actionName) => (
                  <th key={actionName} className="px-3 py-3 text-center">
                    {ACTION_LABELS[actionName]}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {RESOURCES.map((resource) => {
                const allowed = actionsForResource(resource);
                return (
                  <tr key={resource}>
                    <td className="px-4 py-3 font-medium">
                      {RESOURCE_LABELS[resource]}
                    </td>
                    {ACTIONS.map((actionName) => (
                      <td key={actionName} className="px-3 py-3 text-center">
                        {allowed.includes(actionName) ? (
                          <input
                            type="checkbox"
                            name="permissions"
                            value={`${resource}:${actionName}`}
                            defaultChecked={group?.permissions.includes(
                              `${resource}:${actionName}`,
                            )}
                            disabled={superAccess}
                          />
                        ) : (
                          <span className="text-slate-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </fieldset>

      {state.error && (
        <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-700 disabled:opacity-60"
      >
        {pending ? "Сохранение…" : group ? "Сохранить" : "Создать группу"}
      </button>
    </form>
  );
}
