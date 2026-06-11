import type { MetadataRoute } from "next";

const BASE = "https://nomad-transfer.com";

// Original routes — have en/ru/ko versions
// Real last-modified dates taken from git commit history.
// Update when content (prices, FAQ, route details) actually changes.
const TRANSFERS_MULTILANG: { slug: string; lastModified: Date }[] = [
  { slug: "bishkek-to-karakol",       lastModified: new Date("2026-05-15") },
  { slug: "almaty-to-karakol",        lastModified: new Date("2026-06-11") },
  { slug: "manas-airport-to-karakol", lastModified: new Date("2026-05-16") },
  { slug: "manas-airport-to-bishkek", lastModified: new Date("2026-06-11") },
  { slug: "almaty-to-bishkek",        lastModified: new Date("2026-05-15") },
  { slug: "bishkek-to-cholpon-ata",   lastModified: new Date("2026-05-15") },
  { slug: "bishkek-to-osh",           lastModified: new Date("2026-05-15") },
];

// Reverse routes — English only
const TRANSFERS_EN: { slug: string; lastModified: Date }[] = [
  { slug: "karakol-to-bishkek",       lastModified: new Date("2026-05-19") },
  { slug: "karakol-to-almaty",        lastModified: new Date("2026-06-11") },
  { slug: "karakol-to-manas-airport", lastModified: new Date("2026-05-19") },
  { slug: "cholpon-ata-to-bishkek",   lastModified: new Date("2026-05-19") },
  { slug: "osh-to-bishkek",           lastModified: new Date("2026-05-19") },
  { slug: "bishkek-to-almaty",        lastModified: new Date("2026-05-19") },
];

const GUIDES: { slug: string; lastModified: Date }[] = [
  { slug: "bishkek-to-karakol-winter",            lastModified: new Date("2026-05-19") },
  { slug: "best-time-visit-karakol",               lastModified: new Date("2026-05-19") },
  { slug: "almaty-to-bishkek-travel-guide",        lastModified: new Date("2026-05-19") },
  { slug: "transfer-prices-kyrgyzstan",            lastModified: new Date("2026-05-19") },
  { slug: "kyrgyzstan-kazakhstan-border-crossing", lastModified: new Date("2026-05-19") },
  { slug: "issyk-kul-travel-guide",                lastModified: new Date("2026-05-19") },
  { slug: "manas-airport-to-bishkek-city",         lastModified: new Date("2026-05-19") },
];

const EEAT_PAGES: { slug: string; lastModified: Date }[] = [
  { slug: "about",         lastModified: new Date("2026-06-11") },
  { slug: "drivers",       lastModified: new Date("2026-05-19") },
  { slug: "fleet",         lastModified: new Date("2026-05-19") },
  { slug: "why-choose-us", lastModified: new Date("2026-05-19") },
  { slug: "pricing",       lastModified: new Date("2026-06-11") },
];

const HOME_LAST_MODIFIED  = new Date("2026-05-16");
const TOUR_LAST_MODIFIED  = new Date("2026-05-16");
const GUIDE_LAST_MODIFIED = new Date("2026-05-16");

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  // Homepage (en / ru / ko)
  const homeLangs = {
    "x-default": `${BASE}/`,
    en: `${BASE}/`,
    ru: `${BASE}/ru`,
    ko: `${BASE}/ko`,
  };
  for (const [lang, url] of Object.entries(homeLangs)) {
    if (lang === "x-default") continue;
    entries.push({
      url,
      lastModified: HOME_LAST_MODIFIED,
      changeFrequency: "weekly",
      priority: lang === "en" ? 1.0 : 0.8,
      alternates: { languages: homeLangs },
    });
  }

  // Tour page (en / ru / ko)
  const tourLangs = {
    "x-default": `${BASE}/tours/karakol-sonkul-bishkek`,
    en: `${BASE}/tours/karakol-sonkul-bishkek`,
    ru: `${BASE}/ru/tours/karakol-sonkul-bishkek`,
    ko: `${BASE}/ko/tours/karakol-sonkul-bishkek`,
  };
  for (const [lang, url] of Object.entries(tourLangs)) {
    if (lang === "x-default") continue;
    entries.push({
      url,
      lastModified: TOUR_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: lang === "en" ? 0.9 : 0.8,
      alternates: { languages: tourLangs },
    });
  }

  // Guide pages (en / ru / ko)
  const guideLangs = {
    "x-default": `${BASE}/guides/karakol-ski-resort`,
    en: `${BASE}/guides/karakol-ski-resort`,
    ru: `${BASE}/ru/guides/karakol-ski-resort`,
    ko: `${BASE}/ko/guides/karakol-ski-resort`,
  };
  for (const [lang, url] of Object.entries(guideLangs)) {
    if (lang === "x-default") continue;
    entries.push({
      url,
      lastModified: GUIDE_LAST_MODIFIED,
      changeFrequency: "monthly",
      priority: lang === "en" ? 0.8 : 0.7,
      alternates: { languages: guideLangs },
    });
  }

  // Transfer routes — multilang (en / ru / ko) with real dates
  for (const { slug, lastModified } of TRANSFERS_MULTILANG) {
    const langs = {
      "x-default": `${BASE}/transfers/${slug}`,
      en: `${BASE}/transfers/${slug}`,
      ru: `${BASE}/ru/transfers/${slug}`,
      ko: `${BASE}/ko/transfers/${slug}`,
    };
    for (const [lang, url] of Object.entries(langs)) {
      if (lang === "x-default") continue;
      entries.push({
        url,
        lastModified,
        changeFrequency: "monthly",
        priority: lang === "en" ? 0.9 : 0.8,
        alternates: { languages: langs },
      });
    }
  }

  // Transfer routes — reverse routes (English only)
  for (const { slug, lastModified } of TRANSFERS_EN) {
    entries.push({
      url: `${BASE}/transfers/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    });
  }

  // Guide pages (English only for now)
  for (const { slug, lastModified } of GUIDES) {
    entries.push({
      url: `${BASE}/guides/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // E-E-A-T pages (English only)
  for (const { slug, lastModified } of EEAT_PAGES) {
    entries.push({
      url: `${BASE}/${slug}`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
