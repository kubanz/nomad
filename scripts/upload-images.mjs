/**
 * Загружает фото туров в Vercel Blob и выводит обновлённые URL.
 *
 * Как использовать:
 *   1. Скопируй .env.example → .env и вставь BLOB_READ_WRITE_TOKEN
 *   2. Положи фото в папку scripts/tour-images/ с именами:
 *        son-kul.jpg, jeti-oguz.jpg, tash-rabat.jpg, burana.jpg, yurt-camp.jpg
 *   3. npm install   (если ещё не делал)
 *   4. node scripts/upload-images.mjs
 *
 * После запуска скрипт выведет новые URL — вставь их в src/App.tsx → поле image="..."
 */

import { put } from "@vercel/blob";
import { readFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import { config } from "dotenv";

config(); // читаем .env

const token = process.env.BLOB_READ_WRITE_TOKEN;
if (!token) {
  console.error("❌  BLOB_READ_WRITE_TOKEN не задан. Скопируй .env.example → .env и добавь токен.");
  process.exit(1);
}

const IMAGES_DIR = new URL("./tour-images/", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

let files;
try {
  files = readdirSync(IMAGES_DIR).filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f));
} catch {
  console.error(`❌  Папка не найдена: ${IMAGES_DIR}\nСоздай её и положи туда фото туров.`);
  process.exit(1);
}

if (files.length === 0) {
  console.warn("⚠️   В папке tour-images/ нет изображений.");
  process.exit(0);
}

console.log(`📤  Загружаю ${files.length} файл(ов)...\n`);

const results = {};

for (const file of files) {
  const filePath = join(IMAGES_DIR, file);
  const buffer = readFileSync(filePath);
  const mimeType = file.match(/\.png$/i)
    ? "image/png"
    : file.match(/\.webp$/i)
    ? "image/webp"
    : file.match(/\.avif$/i)
    ? "image/avif"
    : "image/jpeg";

  const blobPath = `tours/${basename(file)}`;
  const { url } = await put(blobPath, buffer, { access: "public", token, contentType: mimeType });

  const tourId = basename(file, file.match(/\.[^.]+$/)[0]);
  results[tourId] = url;
  console.log(`✅  ${file} → ${url}`);
}

console.log("\n─────────────────────────────────────────────────────────");
console.log("Скопируй эти URL в src/App.tsx → поле image=\"...\":\n");
for (const [id, url] of Object.entries(results)) {
  console.log(`  ${id}: "${url}"`);
}
