// Сессии админки: подписанный HMAC-SHA256 токен в httpOnly-куке.
// Используется Web Crypto, поэтому модуль работает и в Node, и в Edge (middleware).

export const SESSION_COOKIE = "nomad_admin_session";
export const SESSION_TTL_SECONDS = 60 * 60 * 12; // 12 часов

export interface SessionPayload {
  /** ID пользователя. */
  uid: string;
  /** sessionVersion пользователя на момент входа. */
  sv: number;
  /** Unix-время (секунды) истечения сессии. */
  exp: number;
}

function getSecret(): string {
  const secret = process.env.ADMIN_AUTH_SECRET;
  if (!secret || secret.length < 16) {
    throw new Error(
      "ADMIN_AUTH_SECRET не задан (минимум 16 символов). Добавьте его в .env.local / переменные окружения Vercel.",
    );
  }
  return secret;
}

function base64UrlEncode(bytes: Uint8Array): string {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

function base64UrlDecode(text: string): Uint8Array {
  const padded = text.replace(/-/g, "+").replace(/_/g, "/");
  const binary = atob(padded + "=".repeat((4 - (padded.length % 4)) % 4));
  return Uint8Array.from(binary, (c) => c.charCodeAt(0));
}

async function hmac(data: string): Promise<Uint8Array> {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(getSecret()),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(data),
  );
  return new Uint8Array(signature);
}

export async function createSessionToken(
  payload: Omit<SessionPayload, "exp">,
): Promise<string> {
  const full: SessionPayload = {
    ...payload,
    exp: Math.floor(Date.now() / 1000) + SESSION_TTL_SECONDS,
  };
  const body = base64UrlEncode(new TextEncoder().encode(JSON.stringify(full)));
  const signature = base64UrlEncode(await hmac(body));
  return `${body}.${signature}`;
}

/**
 * Проверяет подпись и срок действия. Возвращает payload или null.
 * Никогда не бросает исключений (в т.ч. при отсутствии ADMIN_AUTH_SECRET) —
 * вызывается из middleware, где ошибка уронила бы все страницы сайта.
 */
export async function verifySessionToken(
  token: string,
): Promise<SessionPayload | null> {
  try {
    return await verifySessionTokenUnsafe(token);
  } catch {
    return null;
  }
}

async function verifySessionTokenUnsafe(
  token: string,
): Promise<SessionPayload | null> {
  const [body, signature] = token.split(".");
  if (!body || !signature) return null;
  const expected = base64UrlEncode(await hmac(body));
  // Сравнение фиксированной длины; тайминг-атака на HMAC-вывод непрактична.
  if (expected.length !== signature.length) return null;
  let mismatch = 0;
  for (let i = 0; i < expected.length; i++)
    mismatch |= expected.charCodeAt(i) ^ signature.charCodeAt(i);
  if (mismatch !== 0) return null;

  try {
    const payload = JSON.parse(
      new TextDecoder().decode(base64UrlDecode(body)),
    ) as SessionPayload;
    if (typeof payload.uid !== "string" || typeof payload.exp !== "number")
      return null;
    if (payload.exp < Math.floor(Date.now() / 1000)) return null;
    return payload;
  } catch {
    return null;
  }
}
