import type { MetadataRoute } from "next";

const BASE = "https://nomad-transfer.com";

// Original routes — have en/ru/ko versions
const TRANSFERS_MULTILANG = [
  "bishkek-to-karakol",
  "almaty-to-karakol",
  "manas-airport-to-karakol",
  "almaty-to-bishkek",
  "bishkek-to-cholpon-ata",
  "bishkek-to-osh",
];

// Reverse routes — English only
const TRANSFERS_EN = [
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
      lastModified: now,
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
      lastModified: now,
      changeFrequency: "monthly",
      priority: lang === "en" ? 0.8 : 0.7,
      alternates: { languages: guideLangs },
    });
  }

  // Transfer routes — multilang (en / ru / ko)
  for (const slug of TRANSFERS_MULTILANG) {
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

  // Transfer routes — reverse routes (English only)
  for (const slug of TRANSFERS_EN) {
    entries.push({
      url: `${BASE}/transfers/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    });
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

  // E-E-A-T pages (English only)
  for (const slug of EEAT_PAGES) {
    entries.push({
      url: `${BASE}/${slug}`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  return entries;
}
