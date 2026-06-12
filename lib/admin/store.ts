// Хранилище данных админки (JSON-документы) без отдельной БД.
//
// Два драйвера:
//  - "fs"   — файлы в .data/admin/ (локальная разработка, Docker/VPS);
//  - "blob" — Vercel Blob (продакшен на Vercel, где файловая система не сохраняется).
//
// Блобы Vercel публичны по URL, поэтому содержимое шифруется AES-256-GCM
// ключом, выведенным из ADMIN_AUTH_SECRET.

import { createCipheriv, createDecipheriv, createHash, randomBytes } from "node:crypto";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const FS_DIR = path.join(process.cwd(), ".data", "admin");
const BLOB_PREFIX = "admin-data/";

type Driver = "fs" | "blob";

function getDriver(): Driver {
  const forced = process.env.ADMIN_STORE;
  if (forced === "fs" || forced === "blob") return forced;
  // В деве — файлы, чтобы не трогать продакшен-данные в Blob.
  if (process.env.NODE_ENV === "development") return "fs";
  return process.env.BLOB_READ_WRITE_TOKEN ? "blob" : "fs";
}

// --- Шифрование для blob-драйвера ---

function encryptionKey(): Buffer {
  const secret = process.env.ADMIN_AUTH_SECRET;
  if (!secret) throw new Error("ADMIN_AUTH_SECRET не задан");
  return createHash("sha256").update(`${secret}:admin-store`).digest();
}

function encrypt(plaintext: string): string {
  const iv = randomBytes(12);
  const cipher = createCipheriv("aes-256-gcm", encryptionKey(), iv);
  const data = Buffer.concat([cipher.update(plaintext, "utf8"), cipher.final()]);
  return JSON.stringify({
    v: 1,
    iv: iv.toString("base64"),
    tag: cipher.getAuthTag().toString("base64"),
    data: data.toString("base64"),
  });
}

function decrypt(envelope: string): string {
  const { iv, tag, data } = JSON.parse(envelope) as {
    iv: string;
    tag: string;
    data: string;
  };
  const decipher = createDecipheriv(
    "aes-256-gcm",
    encryptionKey(),
    Buffer.from(iv, "base64"),
  );
  decipher.setAuthTag(Buffer.from(tag, "base64"));
  return Buffer.concat([
    decipher.update(Buffer.from(data, "base64")),
    decipher.final(),
  ]).toString("utf8");
}

// --- Драйверы ---

async function fsRead(name: string): Promise<string | null> {
  try {
    return await readFile(path.join(FS_DIR, `${name}.json`), "utf8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") return null;
    throw error;
  }
}

async function fsWrite(name: string, content: string): Promise<void> {
  await mkdir(FS_DIR, { recursive: true });
  await writeFile(path.join(FS_DIR, `${name}.json`), content, "utf8");
}

async function blobRead(name: string): Promise<string | null> {
  const { list } = await import("@vercel/blob");
  const pathname = `${BLOB_PREFIX}${name}.json`;
  const { blobs } = await list({ prefix: pathname, limit: 1 });
  const blob = blobs.find((b) => b.pathname === pathname);
  if (!blob) return null;
  const response = await fetch(blob.url, { cache: "no-store" });
  if (!response.ok)
    throw new Error(`Не удалось прочитать ${pathname}: ${response.status}`);
  return decrypt(await response.text());
}

async function blobWrite(name: string, content: string): Promise<void> {
  const { put } = await import("@vercel/blob");
  await put(`${BLOB_PREFIX}${name}.json`, encrypt(content), {
    access: "public",
    addRandomSuffix: false,
    contentType: "application/json",
    // Минимально допустимый TTL кеша CDN у Vercel Blob — 60 секунд.
    cacheControlMaxAge: 60,
  });
}

// --- Публичный API ---

export async function readDocument<T>(name: string): Promise<T | null> {
  const raw =
    getDriver() === "blob" ? await blobRead(name) : await fsRead(name);
  if (raw === null) return null;
  return JSON.parse(raw) as T;
}

export async function writeDocument<T>(name: string, value: T): Promise<void> {
  const raw = JSON.stringify(value, null, 2);
  if (getDriver() === "blob") await blobWrite(name, raw);
  else await fsWrite(name, raw);
}
