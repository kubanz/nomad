import type { MetadataRoute } from "next";

const BASE = "https://nomad-transfer.com";

const TRANSFERS = [
  // Original routes
  "bishkek-to-karakol",
  "almaty-to-karakol",
  "manas-airport-to-karakol",
  "almaty-to-bishkek",
  "bishkek-to-cholpon-ata",
  "bishkek-to-osh",
  // Reverse routes
  "karakol-to-bishkek",
  "karakol-to-almaty",
  "karakol-to-manas-airport",
  "cholpon-ata-to-bishkek",
  "osh-to-bishkek",
  "bishkek-to-almaty",
];

const GUIDES = [
  "bishkek-to-karakol-winter",
  "best-time-visit-karakol",
  "almaty-to-bishkek-travel-guide",
  "transfer-prices-kyrgyzstan",
  "kyrgyzstan-kazakhstan-border-crossing",
  "issyk-kul-travel-guide",
  "manas-airport-to-bishkek-city",
];

const EEAT_PAGES = ["about", "drivers", "fleet", "why-choose-us", "pricing"];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
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
      lastModified: now,
      changeFrequency: "weekly",
      priority: lang === "en" ? 1.0 : 0.8,
      alternates: { languages: homeLangs },
    });
  }

  // Tour page (English only)
  entries.push({
    url: `${BASE}/tours/karakol-sonkul-bishkek`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.9,
  });

  // Transfer routes (en / ru / ko)
  for (const slug of TRANSFERS) {
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
        lastModified: now,
        changeFrequency: "monthly",
        priority: lang === "en" ? 0.9 : 0.8,
        alternates: { languages: langs },
      });
    }
  }

  // Guide pages (English only for now)
  for (const slug of GUIDES) {
    entries.push({
      url: `${BASE}/guides/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    });
  }

  // E-E-A-T pages (en / ru / ko)
  for (const slug of EEAT_PAGES) {
    const langs = {
      "x-default": `${BASE}/${slug}`,
      en: `${BASE}/${slug}`,
      ru: `${BASE}/ru/${slug}`,
      ko: `${BASE}/ko/${slug}`,
    };
    for (const [lang, url] of Object.entries(langs)) {
      if (lang === "x-default") continue;
      entries.push({
        url,
        lastModified: now,
        changeFrequency: "monthly",
        priority: lang === "en" ? 0.7 : 0.6,
        alternates: { languages: langs },
      });
    }
  }

  return entries;
}
