import type { MetadataRoute } from "next";

const BASE = "https://nomad-transfer.com";

const TRANSFERS = [
  "bishkek-to-karakol",
  "almaty-to-karakol",
  "manas-airport-to-karakol",
  "almaty-to-bishkek",
  "bishkek-to-cholpon-ata",
  "bishkek-to-osh",
];

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

  return entries;
}
