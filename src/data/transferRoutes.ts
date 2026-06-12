export type TransferLang = "en" | "ru" | "ko";

export type TransferRoute = {
  slug: string;
  from: Record<TransferLang, string>;
  to: Record<TransferLang, string>;
  distance: string;
  duration: Record<TransferLang, string>;
  sedan: number;
  minivan: number;
  category: "airport" | "kyrgyzstan" | "cross-border";
  localized: boolean;
};

export const transferRoutes: TransferRoute[] = [
  {
    slug: "manas-airport-to-bishkek",
    from: { en: "Manas Airport", ru: "Аэропорт Манас", ko: "마나스 공항" },
    to: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    distance: "30 km",
    duration: { en: "30-40 min", ru: "30-40 мин", ko: "30-40분" },
    sedan: 35,
    minivan: 45,
    category: "airport",
    localized: true,
  },
  {
    slug: "bishkek-to-manas-airport",
    from: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    to: { en: "Manas Airport", ru: "Аэропорт Манас", ko: "마나스 공항" },
    distance: "30 km",
    duration: { en: "30-40 min", ru: "30-40 мин", ko: "30-40분" },
    sedan: 35,
    minivan: 45,
    category: "airport",
    localized: true,
  },
  {
    slug: "manas-airport-to-karakol",
    from: { en: "Manas Airport", ru: "Аэропорт Манас", ko: "마나스 공항" },
    to: { en: "Karakol", ru: "Каракол", ko: "카라콜" },
    distance: "390 km",
    duration: { en: "6.5-7.5 h", ru: "6,5-7,5 ч", ko: "6.5-7.5시간" },
    sedan: 146,
    minivan: 177,
    category: "airport",
    localized: true,
  },
  {
    slug: "karakol-to-manas-airport",
    from: { en: "Karakol", ru: "Каракол", ko: "카라콜" },
    to: { en: "Manas Airport", ru: "Аэропорт Манас", ko: "마나스 공항" },
    distance: "390 km",
    duration: { en: "6.5-7.5 h", ru: "6,5-7,5 ч", ko: "6.5-7.5시간" },
    sedan: 146,
    minivan: 177,
    category: "airport",
    localized: false,
  },
  {
    slug: "bishkek-to-karakol",
    from: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    to: { en: "Karakol", ru: "Каракол", ko: "카라콜" },
    distance: "360 km",
    duration: { en: "6-7 h", ru: "6-7 ч", ko: "6-7시간" },
    sedan: 136,
    minivan: 167,
    category: "kyrgyzstan",
    localized: true,
  },
  {
    slug: "karakol-to-bishkek",
    from: { en: "Karakol", ru: "Каракол", ko: "카라콜" },
    to: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    distance: "360 km",
    duration: { en: "6-7 h", ru: "6-7 ч", ko: "6-7시간" },
    sedan: 136,
    minivan: 167,
    category: "kyrgyzstan",
    localized: false,
  },
  {
    slug: "bishkek-to-cholpon-ata",
    from: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    to: { en: "Cholpon-Ata", ru: "Чолпон-Ата", ko: "촐폰아타" },
    distance: "250 km",
    duration: { en: "3-4 h", ru: "3-4 ч", ko: "3-4시간" },
    sedan: 115,
    minivan: 145,
    category: "kyrgyzstan",
    localized: true,
  },
  {
    slug: "cholpon-ata-to-bishkek",
    from: { en: "Cholpon-Ata", ru: "Чолпон-Ата", ko: "촐폰아타" },
    to: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    distance: "250 km",
    duration: { en: "3-4 h", ru: "3-4 ч", ko: "3-4시간" },
    sedan: 115,
    minivan: 145,
    category: "kyrgyzstan",
    localized: false,
  },
  {
    slug: "bishkek-to-osh",
    from: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    to: { en: "Osh", ru: "Ош", ko: "오시" },
    distance: "620 km",
    duration: { en: "10-12 h", ru: "10-12 ч", ko: "10-12시간" },
    sedan: 290,
    minivan: 340,
    category: "kyrgyzstan",
    localized: true,
  },
  {
    slug: "osh-to-bishkek",
    from: { en: "Osh", ru: "Ош", ko: "오시" },
    to: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    distance: "620 km",
    duration: { en: "10-12 h", ru: "10-12 ч", ko: "10-12시간" },
    sedan: 290,
    minivan: 340,
    category: "kyrgyzstan",
    localized: false,
  },
  {
    slug: "almaty-to-bishkek",
    from: { en: "Almaty", ru: "Алматы", ko: "알마티" },
    to: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    distance: "240 km",
    duration: { en: "3-4 h", ru: "3-4 ч", ko: "3-4시간" },
    sedan: 90,
    minivan: 115,
    category: "cross-border",
    localized: true,
  },
  {
    slug: "bishkek-to-almaty",
    from: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    to: { en: "Almaty", ru: "Алматы", ko: "알마티" },
    distance: "240 km",
    duration: { en: "3-4 h", ru: "3-4 ч", ko: "3-4시간" },
    sedan: 90,
    minivan: 115,
    category: "cross-border",
    localized: false,
  },
  {
    slug: "almaty-to-karakol",
    from: { en: "Almaty", ru: "Алматы", ko: "알마티" },
    to: { en: "Karakol", ru: "Каракол", ko: "카라콜" },
    distance: "430 km",
    duration: { en: "7-8 h", ru: "7-8 ч", ko: "7-8시간" },
    sedan: 235,
    minivan: 275,
    category: "cross-border",
    localized: true,
  },
  {
    slug: "karakol-to-almaty",
    from: { en: "Karakol", ru: "Каракол", ko: "카라콜" },
    to: { en: "Almaty", ru: "Алматы", ko: "알마티" },
    distance: "430 km",
    duration: { en: "7-8 h", ru: "7-8 ч", ko: "7-8시간" },
    sedan: 235,
    minivan: 275,
    category: "cross-border",
    localized: false,
  },
];

export function transferHref(route: TransferRoute, lang: TransferLang) {
  const prefix = lang === "en" || !route.localized ? "" : `/${lang}`;
  return `${prefix}/transfers/${route.slug}`;
}
