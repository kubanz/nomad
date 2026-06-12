import React from "react";

type Lang = "en" | "ru" | "ko";

interface Route {
  slug: string;
  price: number;
  name: { en: string; ru: string; ko: string };
  desc: { en: string; ru: string; ko: string };
  badge: { en: string; ru: string; ko: string };
}

const ROUTES: Route[] = [
  {
    slug: "bishkek-to-karakol",
    price: 136,
    name: { en: "Bishkek → Karakol", ru: "Бишкек → Каракол", ko: "비슈케크 → 카라콜" },
    desc: { en: "Via Burana Tower & Boom Gorge", ru: "Через Башню Бурана и Боомское ущелье", ko: "부라나 탑 & 붐 협곡 경유" },
    badge: { en: "~4–6 h", ru: "~4–6 ч", ko: "~4–6시간" },
  },
  {
    slug: "almaty-to-karakol",
    price: 235,
    name: { en: "Almaty → Karakol", ru: "Алматы → Каракол", ko: "알마티 → 카라콜" },
    desc: { en: "Via Charyn Canyon & Kegen Border", ru: "Через Чарынский каньон и переход Кеген", ko: "차린 협곡 & 케겐 국경 경유" },
    badge: { en: "~8–9 h", ru: "~8–9 ч", ko: "~8–9시간" },
  },
  {
    slug: "manas-airport-to-karakol",
    price: 146,
    name: { en: "Manas Airport → Karakol", ru: "Аэропорт Манас → Каракол", ko: "마나스 공항 → 카라콜" },
    desc: { en: "Direct airport pickup, door-to-door", ru: "Прямо из аэропорта, до отеля", ko: "공항 픽업, 도어 투 도어" },
    badge: { en: "~5–6 h", ru: "~5–6 ч", ko: "~5–6시간" },
  },
  {
    slug: "almaty-to-bishkek",
    price: 90,
    name: { en: "Almaty → Bishkek", ru: "Алматы → Бишкек", ko: "알마티 → 비슈케크" },
    desc: { en: "Scenic cross-border mountain route", ru: "Живописный горный маршрут через границу", ko: "경치 좋은 산악 국경 노선" },
    badge: { en: "~4–5 h", ru: "~4–5 ч", ko: "~4–5시간" },
  },
  {
    slug: "bishkek-to-cholpon-ata",
    price: 115,
    name: { en: "Bishkek → Cholpon-Ata", ru: "Бишкек → Чолпон-Ата", ko: "비슈케크 → 촐폰-아타" },
    desc: { en: "Issyk-Kul resort town, north shore", ru: "Курортный город Иссык-Куля, северный берег", ko: "이식쿨 북쪽 해안 휴양 도시" },
    badge: { en: "~3–4 h", ru: "~3–4 ч", ko: "~3–4시간" },
  },
  {
    slug: "bishkek-to-osh",
    price: 290,
    name: { en: "Bishkek → Osh", ru: "Бишкек → Ош", ko: "비슈케크 → 오시" },
    desc: { en: "South Kyrgyzstan, over Taldyk Pass", ru: "Юг Кыргызстана, через перевал Талдык", ko: "남 키르기스스탄, 탈딕 패스 경유" },
    badge: { en: "~10–11 h", ru: "~10–11 ч", ko: "~10–11시간" },
  },
  {
    slug: "manas-airport-to-bishkek",
    price: 35,
    name: { en: "Manas Airport → Bishkek", ru: "Аэропорт Манас → Бишкек", ko: "마나스 공항 → 비슈케크" },
    desc: { en: "City centre pickup, meet & greet included", ru: "В центр города, встреча с табличкой", ko: "시내 픽업, 이름판 환영 포함" },
    badge: { en: "~30–40 min", ru: "~30–40 мин", ko: "~30–40분" },
  },
  {
    slug: "bishkek-to-manas-airport",
    price: 35,
    name: { en: "Bishkek → Manas Airport", ru: "Бишкек → Аэропорт Манас", ko: "비슈케크 → 마나스 공항" },
    desc: { en: "Hotel pickup and direct terminal drop-off", ru: "Подача к отелю и доставка к терминалу", ko: "숙소 픽업 및 터미널 직접 하차" },
    badge: { en: "~30–40 min", ru: "~30–40 мин", ko: "~30–40분" },
  },
];

const LABELS = {
  heading: { en: "Other Routes", ru: "Другие маршруты", ko: "다른 노선" },
  from:    { en: "from", ru: "от", ko: "부터" },
  sedan:   { en: "sedan", ru: "седан", ko: "세단" },
  view:    { en: "View route →", ru: "Посмотреть →", ko: "노선 보기 →" },
};

function langPrefix(lang: Lang) {
  return lang === "en" ? "" : `/${lang}`;
}

interface Props {
  currentSlug: string;
  lang: Lang;
}

export default function RelatedRoutes({ currentSlug, lang }: Props) {
  const routes = ROUTES.filter((r) => r.slug !== currentSlug);

  return (
    <section className="mb-14">
      <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
        {LABELS.heading[lang]}
      </p>
      <h2 className="mt-1 mb-6 text-2xl font-bold md:text-3xl">
        {lang === "ru"
          ? "Другие направления"
          : lang === "ko"
          ? "다른 이동 노선"
          : "More Transfer Routes"}
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {routes.map((route) => (
          <a
            key={route.slug}
            href={`${langPrefix(lang)}/transfers/${route.slug}`}
            className="group flex flex-col rounded-2xl border border-slate-100 bg-white p-5 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
          >
            <div className="mb-3 flex items-start justify-between gap-2">
              <span className="text-base font-bold text-slate-900 leading-tight group-hover:text-emerald-700">
                {route.name[lang]}
              </span>
              <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-500">
                {route.badge[lang]}
              </span>
            </div>

            <p className="mb-4 text-sm text-slate-500 leading-relaxed">
              {route.desc[lang]}
            </p>

            <div className="mt-auto flex items-end justify-between">
              <div>
                <span className="text-xs text-slate-400">{LABELS.from[lang]} </span>
                <span className="text-xl font-extrabold text-slate-900">${route.price}</span>
                <span className="ml-1 text-xs text-slate-400">{LABELS.sedan[lang]}</span>
              </div>
              <span className="text-xs font-semibold text-emerald-600 group-hover:underline">
                {LABELS.view[lang]}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
