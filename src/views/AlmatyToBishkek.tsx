"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { MessageCircle, Send, MapPin } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import type { MapStop } from "../components/InteractiveRouteMap";
import RelatedRoutes from "../components/RelatedRoutes";

const LANG_ROUTES: Record<"en" | "ru" | "ko", string> = {
  en: "/transfers/almaty-to-bishkek",
  ru: "/ru/transfers/almaty-to-bishkek",
  ko: "/ko/transfers/almaty-to-bishkek",
};

const InteractiveRouteMap = dynamic(
  () => import("../components/InteractiveRouteMap"),
  { ssr: false }
);

// ─── Map stops ────────────────────────────────────────────────────────────────

const ALMATY_MAP_STOPS: MapStop[] = [
  { id: 0, lat: 43.2220, lng: 76.8512, name: "Almaty",        desc: "Start · Hotel pickup",        day: 1, time: "09:00", type: "start" },
  { id: 1, lat: 43.0539, lng: 74.9892, name: "Kordai Border", desc: "Passport control · 24/7",     day: 1, time: "10:30" },
  { id: 2, lat: 42.8746, lng: 74.5698, name: "Bishkek",       desc: "End · Hotel drop-off",         day: 1, time: "12:00", type: "end" },
];

// ─── Timeline data ────────────────────────────────────────────────────────────

interface TimelineStop {
  day: string;
  time: string;
  place: { en: string; ru: string; ko: string };
  sub: { en: string; ru: string; ko: string };
  type?: "start" | "end" | "overnight";
}

const TIMELINE: TimelineStop[] = [
  {
    day: "Day 1", time: "09:00",
    place: { en: "Almaty", ru: "Алматы", ko: "알마티" },
    sub: { en: "Start · Hotel pickup", ru: "Старт · Отель", ko: "출발 · 호텔 픽업" },
    type: "start",
  },
  {
    day: "Day 1", time: "10:30",
    place: { en: "Kordai Border", ru: "Граница Кордай", ko: "코르다이 국경" },
    sub: { en: "Passport control · open 24/7", ru: "Паспортный контроль · 24/7", ko: "여권 심사 · 24시간" },
  },
  {
    day: "Day 1", time: "12:00",
    place: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    sub: { en: "End · Hotel drop-off", ru: "Финиш · Отель", ko: "종료 · 호텔 하차" },
    type: "end",
  },
];

// ─── Itinerary data ────────────────────────────────────────────────────────────

interface Stop {
  day: string;
  time: string;
  title: { en: string; ru: string; ko: string };
  desc: { en: string; ru: string; ko: string };
  image: string;
  mapUrl: string;
  photos?: string[];
}

const STOPS: Stop[] = [
  {
    day: "DAY 1",
    time: "10:30",
    title: { en: "Kordai Border Crossing", ru: "Пограничный переход Кордай", ko: "코르다이 국경 통과" },
    desc: {
      en: "The main border crossing between Kazakhstan and Kyrgyzstan, open 24/7 year-round. Located on the Almaty–Bishkek highway. Your driver will guide you through passport control — typically 20–40 minutes. Both EU and most Asian passports get visa-free entry.",
      ru: "Главный пограничный переход между Казахстаном и Кыргызстаном, работает 24/7 круглый год. Расположен на трассе Алматы–Бишкек. Водитель поможет пройти паспортный контроль — обычно 20–40 минут. Большинство паспортов проходят безвизово.",
      ko: "카자흐스탄과 키르기스스탄 사이의 주요 국경 검문소, 연중 24시간 운영. 알마티-비슈케크 고속도로에 위치. 기사가 여권 심사를 안내해드립니다 — 보통 20~40분 소요. 대부분의 여권은 무비자 입국 가능.",
    },
    image: "",
    mapUrl: "#route-map",
  },
  {
    day: "DAY 1",
    time: "Optional",
    title: { en: "Tamerlan Tower (Optional)", ru: "Башня Тамерлана (опция)", ko: "타메를란 탑 (선택)" },
    desc: {
      en: "A medieval watchtower from the era of Tamerlane, located near the Kyrgyz side of the border. A quick photo stop for history buffs. Ask the driver to include — no extra charge.",
      ru: "Средневековая сторожевая башня времён Тамерлана, на кыргызской стороне у границы. Быстрая остановка для любителей истории. Попросите водителя включить — без доплаты.",
      ko: "타메를란 시대의 중세 망루, 국경의 키르기스 측에 위치. 역사 애호가를 위한 짧은 사진 정류장. 기사에게 요청하시면 추가 요금 없이 포함됩니다.",
    },
    image: "",
    mapUrl: "#route-map",
  },
  {
    day: "DAY 1",
    time: "Arrival",
    title: { en: "Bishkek — Capital of Kyrgyzstan", ru: "Бишкек — столица Кыргызстана", ko: "비슈케크 — 키르기스스탄 수도" },
    desc: {
      en: "Door-to-door drop-off at your hotel in Bishkek. We can also drop you at Manas Airport, the bus station, or any specific address. Driver speaks English and can recommend places to eat or visit on arrival.",
      ru: "Трансфер от двери до двери до отеля в Бишкеке. Также можем довезти до аэропорта Манас, автовокзала или любого адреса. Водитель говорит по-английски и подскажет места для еды и прогулок.",
      ko: "비슈케크 호텔까지 도어 투 도어 하차. 마나스 공항, 버스 터미널 또는 원하는 주소까지도 가능. 영어 가능 기사가 식당과 관광지를 추천해드립니다.",
    },
    image: "",
    mapUrl: "#route-map",
  },
];

const WHATSAPP_PHONE = "+996552291808";
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I'm interested in the Almaty → Bishkek private transfer. Please share availability and price."
)}`;
const WA_LINK_SIMPLE = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I need a simple transfer from Almaty to Bishkek. Please share availability and price."
)}`;
const BRAND = "Nomad Transfer";

function pickLang(): "en" | "ru" | "ko" {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("lang");
    if (saved === "en" || saved === "ru" || saved === "ko") return saved;
  }
  if (typeof navigator !== "undefined") {
    const l = navigator.language?.toLowerCase() || "";
    if (l.startsWith("ko")) return "ko";
    if (l.startsWith("ru")) return "ru";
  }
  return "en";
}
function saveLang(code: "en" | "ru" | "ko") {
  if (typeof window !== "undefined") localStorage.setItem("lang", code);
}

const LANGS: { code: "en" | "ru" | "ko"; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ko", label: "Korean", flag: "🇰🇷" },
  { code: "ru", label: "Russian", flag: "🇷🇺" },
];

// ─── Simple Transfer Block ────────────────────────────────────────────────────

function SimpleTransferBlock({ lang }: { lang: "en" | "ru" | "ko" }) {
  const T = {
    title: {
      en: "Almaty to Bishkek — Private Transfer",
      ru: "Алматы — Бишкек: Приватный трансфер",
      ko: "알마티 → 비슈케크 프라이빗 이동",
    },
    desc: {
      en: "Need to get from Almaty to Bishkek quickly and comfortably? We pick you up from your hotel in Almaty and drop you off at your hotel in Bishkek. Professional driver, comfortable car, no hidden fees.",
      ru: "Нужно просто добраться из Алматы в Бишкек? Забираем из отеля в Алматы, довезём до отеля в Бишкеке. Профессиональный водитель, комфортный автомобиль, никаких скрытых платежей.",
      ko: "알마티에서 비슈케크까지 빠르고 편안하게 이동하고 싶으신가요? 알마티 호텔에서 픽업하여 비슈케크 호텔까지 편안하게 모셔드립니다.",
    },
    sedan:   { en: "SEDAN",   ru: "СЕДАН",   ko: "세단" },
    minivan: { en: "MINIVAN", ru: "МИНИВЭН", ko: "미니밴" },
    per4:    { en: "up to 4 passengers",  ru: "до 4 пассажиров",   ko: "최대 4명" },
    per7:    { en: "6–7 passengers",      ru: "6–7 пассажиров",    ko: "6–7명" },
    busNote: {
      en: "For groups of 8+ passengers, bus option available from $220. Ask when booking.",
      ru: "Для групп от 8 человек — автобус от $220. Уточняйте при бронировании.",
      ko: "8인 이상 그룹은 버스 옵션 $220부터. 예약 시 문의하세요.",
    },
    wa: {
      en: "Book Simple Transfer via WhatsApp",
      ru: "Забронировать трансфер в WhatsApp",
      ko: "WhatsApp으로 이동 예약",
    },
  };

  const pills = [
    { icon: "📍", text: "Almaty → Bishkek" },
    { icon: "🕐", text: "~3 hours" },
    { icon: "📏", text: "~240 km" },
    { icon: "👤", text: "Private" },
  ];

  return (
    <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
      <h2 className="text-2xl font-bold md:text-3xl">{T.title[lang]}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">{T.desc[lang]}</p>

      <div className="mt-5 flex flex-wrap gap-2">
        {pills.map(({ icon, text }) => (
          <span key={text} className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700">
            {icon} {text}
          </span>
        ))}
      </div>

      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="relative rounded-2xl border-2 border-teal-400 bg-white p-5 text-center shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-teal-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {T.sedan[lang]}
            </span>
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$90 <span className="text-lg">USD</span></p>
          <p className="mt-1 text-xs text-slate-500">{T.per4[lang]}</p>
        </div>
        <div className="relative rounded-2xl border-2 border-amber-400 bg-white p-5 text-center shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
              {T.minivan[lang]}
            </span>
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$115 <span className="text-lg">USD</span></p>
          <p className="mt-1 text-xs text-slate-500">{T.per7[lang]}</p>
        </div>
      </div>

      <p className="mt-4 text-xs text-slate-500">{T.busNote[lang]}</p>

      <a
        href={WA_LINK_SIMPLE}
        target="_blank"
        rel="noopener"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600"
      >
        <MessageCircle className="h-4 w-4" />
        {T.wa[lang]}
      </a>
    </section>
  );
}

// ─── Upsell Divider ───────────────────────────────────────────────────────────

function UpsellDivider({ lang }: { lang: "en" | "ru" | "ko" }) {
  const T = {
    headline: {
      en: "✨ Want more than just a transfer?",
      ru: "✨ Хотите больше, чем просто поездку?",
      ko: "✨ 단순한 이동 그 이상을 원하시나요?",
    },
    body: {
      en: "Going further than Bishkek? We can extend your transfer to Issyk-Kul, Karakol, or Ala-Archa National Park. One driver, one car, door-to-door — easier than booking separate transfers.",
      ru: "Едете дальше Бишкека? Продлим трансфер до Иссык-Куля, Каракола или нацпарка Ала-Арча. Один водитель, одна машина, от двери до двери — проще, чем отдельные трансферы.",
      ko: "비슈케크 이상으로 가시나요? 이식쿨, 카라콜 또는 알라-아르차 국립공원까지 이동을 연장해드립니다. 한 명의 기사, 한 대의 차량, 도어 투 도어 — 별도 예약보다 간편합니다.",
    },
    btn: {
      en: "See the Tour Option ↓",
      ru: "Смотреть тур ↓",
      ko: "투어 옵션 보기 ↓",
    },
  };

  return (
    <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 px-6 py-8 text-center text-white md:py-10">
      <p className="text-lg font-bold md:text-xl">{T.headline[lang]}</p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/90">{T.body[lang]}</p>
      <button
        onClick={() => {
          const el = document.getElementById("tour-section");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/30"
      >
        {T.btn[lang]}
      </button>
    </div>
  );
}

// ─── Notice Banner ────────────────────────────────────────────────────────────

function NoticeBanner({ lang }: { lang: "en" | "ru" | "ko" }) {
  const text = {
    en: "Kordai border crossing is open 24/7 year-round. Passport required. Visa-free entry for EU, US, UK, South Korea, Japan and most countries (60–90 days). Average crossing time: 20–40 minutes.",
    ru: "Граница Кордай работает 24/7 круглогодично. Необходим паспорт. Безвизовый въезд для большинства стран (60–90 дней). Среднее время прохождения: 20–40 минут.",
    ko: "코르다이 국경 검문소는 연중 24시간 운영. 여권 필수. EU, 미국, 영국, 한국, 일본 등 대부분 국가는 무비자 입국(60~90일). 평균 통과 시간: 20~40분.",
  };
  return (
    <div className="mb-10 rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <div className="flex items-start gap-3">
        <span className="shrink-0 text-2xl">⚠️</span>
        <p className="text-sm leading-relaxed text-amber-900">{text[lang]}</p>
      </div>
    </div>
  );
}

// ─── Tour Timeline ────────────────────────────────────────────────────────────

function DayRow({
  stops,
  dayLabel,
  lang,
}: {
  stops: TimelineStop[];
  dayLabel: string;
  lang: "en" | "ru" | "ko";
}) {
  return (
    <div>
      <div className="mb-4">
        <span className="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">
          {dayLabel}
        </span>
      </div>
      <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:overflow-visible md:px-0">
        <div className="flex min-w-max items-start md:min-w-0 md:w-full">
          {stops.map((stop, i) => {
            const isLast = i === stops.length - 1;
            const isStart = stop.type === "start";
            const isEnd = stop.type === "end";
            return (
              <React.Fragment key={i}>
                <div className="flex w-16 shrink-0 flex-col items-center md:w-20">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-[12px] font-bold shadow-sm
                      ${isStart ? "border-emerald-600 bg-emerald-600 text-white" :
                        isEnd   ? "border-slate-900 bg-slate-900 text-white" :
                        "border-slate-300 bg-white text-slate-400"}`}
                  >
                    {isStart ? "▶" : isEnd ? "✓" : "·"}
                  </div>
                  <span className="mt-1.5 text-[11px] font-semibold text-slate-400">{stop.time}</span>
                  <p className={`mt-1 text-center text-[12px] font-bold leading-tight
                    ${isStart ? "text-emerald-600" : isEnd ? "text-slate-900" : "text-slate-700"}`}>
                    {stop.place[lang]}
                  </p>
                  <p className="mt-0.5 text-center text-[10px] leading-tight text-slate-400 px-1">
                    {stop.sub[lang]}
                  </p>
                </div>
                {!isLast && (
                  <div className="mt-4 h-px w-8 shrink-0 bg-slate-200 md:flex-1" />
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TourTimeline({ lang }: { lang: "en" | "ru" | "ko" }) {
  const day1 = TIMELINE.filter((s) => s.day === "Day 1");
  return (
    <section className="mb-14">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
          {lang === "ru" ? "Программа" : lang === "ko" ? "여정" : "Route Overview"}
        </p>
        <h2 className="mt-1 text-2xl font-bold md:text-3xl">
          {lang === "ru" ? "Маршрут по часам" : lang === "ko" ? "시간별 일정" : "Your Journey at a Glance"}
        </h2>
      </div>
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <DayRow
          stops={day1}
          dayLabel={lang === "ru" ? "День 1" : lang === "ko" ? "1일차" : "Day 1"}
          lang={lang}
        />
      </div>
    </section>
  );
}

// ─── Itinerary Card ───────────────────────────────────────────────────────────

const GRADIENT_BY_INDEX = [
  "from-rose-400 via-orange-400 to-amber-300",
  "from-teal-400 via-cyan-400 to-sky-400",
  "from-violet-400 via-purple-400 to-pink-400",
  "from-emerald-400 via-teal-500 to-sky-500",
];

function ItineraryCard({ stop, idx, lang }: { stop: Stop; idx: number; lang: "en" | "ru" | "ko" }) {
  return (
    <div className="group flex snap-center flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl md:snap-align-none">
      {/* Image */}
      <div className="relative h-56 shrink-0 overflow-hidden">
        {stop.image ? (
          <img src={stop.image} alt={stop.title.en} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${GRADIENT_BY_INDEX[idx % GRADIENT_BY_INDEX.length]}`} />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">
            {stop.day} · {stop.time}
          </span>
        </div>
        <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-xs font-bold text-white backdrop-blur">
          {idx + 1}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-slate-900">{stop.title[lang]}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{stop.desc[lang]}</p>
        <a
          href={stop.mapUrl}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
        >
          <MapPin className="h-3.5 w-3.5" />
          {lang === "ru" ? "Открыть на карте" : lang === "ko" ? "지도에서 보기" : "View on Map"}
        </a>
      </div>
    </div>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

const ADDON_DEFS = [
  {
    key: "manas" as const,
    price: { sedan: 15, minivan: 20 },
    label: { en: "Drop-off at Manas Airport", ru: "Высадка в аэропорту Манас", ko: "마나스 공항 하차" },
    sub:   { en: "If you have an onward flight from Bishkek", ru: "Если у вас рейс из Бишкека", ko: "비슈케크 출발 항공편이 있는 경우" },
  },
  {
    key: "alaarcha" as const,
    price: { sedan: 30, minivan: 40 },
    label: { en: "Ala-Archa National Park visit", ru: "Заезд в нацпарк Ала-Арча", ko: "알라-아르차 국립공원 방문" },
    sub:   { en: "Alpine gorge 40 km from Bishkek · 2-hr stop", ru: "Горное ущелье в 40 км от Бишкека · 2 часа", ko: "비슈케크에서 40km · 2시간 정류장" },
  },
];

type AddonKey = typeof ADDON_DEFS[number]["key"];

function PricingSection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const [vehicle, setVehicle] = useState<"sedan" | "minivan">("sedan");
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({ manas: false, alaarcha: false });

  const BASE = { sedan: 90, minivan: 115 };

  const includedItems = {
    en: ["Professional local driver", "Fuel and all transportation costs", "Hotel pickup in Almaty", "Hotel drop-off in Bishkek", "Border crossing guidance"],
    ru: ["Профессиональный местный водитель", "Топливо и все транспортные расходы", "Трансфер из отеля в Алматы", "Трансфер до отеля в Бишкеке", "Помощь при прохождении границы"],
    ko: ["전문 현지 드라이버", "연료 및 모든 교통 비용", "알마티 호텔 픽업", "비슈케크 호텔 하차", "국경 통과 안내"],
  };
  const notIncluded = {
    en: ["Meals and drinks", "Kazakhstan and Kyrgyzstan entry fees (if applicable)", "Personal travel insurance"],
    ru: ["Питание и напитки", "Въездные сборы КЗ и КГ (при наличии)", "Личная туристическая страховка"],
    ko: ["식사 및 음료", "카자흐스탄 및 키르기스스탄 입국 수수료 (해당 시)", "개인 여행 보험"],
  };
  const whyChoose = {
    en: ["Private transfer — not a group tour", "Flexible stops along the way", "Direct Kordai highway route", "Trusted local drivers", "Direct WhatsApp communication", "No hidden fees"],
    ru: ["Приватный трансфер — не групповой тур", "Гибкие остановки по пути", "Прямой маршрут через Кордай", "Надёжные местные водители", "Прямая связь через WhatsApp", "Никаких скрытых платежей"],
    ko: ["프라이빗 이동 — 그룹 투어 아님", "이동 중 유연한 정류장", "코르다이 직통 노선", "신뢰할 수 있는 현지 드라이버", "WhatsApp 직접 소통", "숨겨진 요금 없음"],
  };

  const T = {
    title:         { en: "Transfer + Scenic Tour Price",    ru: "Стоимость трансфера с туром",      ko: "이동 + 관광 투어 가격" },
    chooseVehicle: { en: "1. Choose your vehicle",          ru: "1. Выберите автомобиль",            ko: "1. 차량 선택" },
    sedan:         { en: "SEDAN",                           ru: "СЕДАН",                             ko: "세단" },
    minivan:       { en: "MINIVAN",                         ru: "МИНИВЭН",                           ko: "미니밴" },
    per4:          { en: "up to 4 passengers",              ru: "до 4 пассажиров",                   ko: "최대 4명" },
    per7:          { en: "6–7 passengers",                  ru: "6–7 пассажиров",                    ko: "6–7명" },
    extras:        { en: "2. Add optional stops",           ru: "2. Добавьте остановки",             ko: "2. 선택 정류장 추가" },
    extrasNote:    { en: "Tick the stops you want — the total updates instantly.", ru: "Отметьте нужные остановки — цена обновится.", ko: "원하는 정류장을 선택하면 가격이 즉시 업데이트됩니다." },
    totalLabel:    { en: "3. Your total",                   ru: "3. Итого",                          ko: "3. 총 금액" },
    included:      { en: "What's included",                 ru: "Что включено",                      ko: "포함 사항" },
    notIncl:       { en: "Not Included",                    ru: "Не включено",                       ko: "미포함 사항" },
    why:           { en: "Why Choose This Transfer?",       ru: "Почему этот трансфер?",             ko: "이 이동을 선택하는 이유?" },
    wa:            { en: "Book via WhatsApp",               ru: "Забронировать в WhatsApp",          ko: "WhatsApp으로 예약" },
    tg:            { en: "Book via Telegram",               ru: "Забронировать в Telegram",          ko: "Telegram으로 예약" },
  };

  const basePrice = BASE[vehicle];
  const addonsTotal = ADDON_DEFS
    .filter(a => addons[a.key])
    .reduce((sum, a) => sum + a.price[vehicle], 0);
  const total = basePrice + addonsTotal;
  const selectedAddons = ADDON_DEFS.filter(a => addons[a.key]);

  const vehicleLabel = { sedan: { en: "Sedan", ru: "Седан", ko: "세단" }, minivan: { en: "Minivan", ru: "Минивэн", ko: "미니밴" } };
  const extrasLine = selectedAddons.length > 0
    ? selectedAddons.map(a => `${a.label.en} (+$${a.price[vehicle]})`).join(", ")
    : "";
  const waText = lang === "ru"
    ? `Здравствуйте! Хочу забронировать тур Алматы → Бишкек.\nАвтомобиль: ${vehicleLabel[vehicle].ru} ($${basePrice})${extrasLine ? `\nОстановки: ${extrasLine}` : ""}\nИтого: $${total}. Подтвердите наличие.`
    : lang === "ko"
    ? `안녕하세요! 알마티→비슈케크 투어를 예약하고 싶습니다.\n차량: ${vehicleLabel[vehicle].ko} ($${basePrice})${extrasLine ? `\n정류장: ${extrasLine}` : ""}\n총액: $${total}. 예약 가능 여부 확인 부탁드립니다.`
    : `Hi! I'd like to book the Almaty → Bishkek scenic tour transfer.\nVehicle: ${vehicleLabel[vehicle].en} ($${basePrice})${extrasLine ? `\nOptional stops: ${extrasLine}` : ""}\nTotal: $${total}. Please confirm availability.`;
  const waBookLink = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waText)}`;

  return (
    <section className="mb-14">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{T.title[lang]}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">

        {/* ── Calculator (2-col) ─────────────────────────────────────────── */}
        <div className="space-y-4 md:col-span-2">

          {/* Step 1: vehicle */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">{T.chooseVehicle[lang]}</p>
            <div className="grid grid-cols-2 gap-3">
              {(["sedan", "minivan"] as const).map((v) => (
                <button
                  key={v}
                  onClick={() => setVehicle(v)}
                  className={`relative rounded-xl border-2 p-4 text-left transition-all ${
                    vehicle === v
                      ? v === "sedan" ? "border-teal-400 bg-teal-50" : "border-amber-400 bg-amber-50"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <span className={`text-xs font-bold uppercase tracking-widest ${vehicle === v ? (v === "sedan" ? "text-teal-600" : "text-amber-600") : "text-slate-400"}`}>
                    {T[v][lang]}
                  </span>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">${BASE[v]} <span className="text-sm font-normal text-slate-400">USD</span></p>
                  <p className="text-xs text-slate-500">{v === "sedan" ? T.per4[lang] : T.per7[lang]}</p>
                  {vehicle === v && (
                    <span className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white ${v === "sedan" ? "bg-teal-500" : "bg-amber-400"}`}>
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: optional stops */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">{T.extras[lang]}</p>
            <p className="mb-4 text-xs text-slate-400">{T.extrasNote[lang]}</p>
            <div className="space-y-2">
              {ADDON_DEFS.map((addon) => (
                <label
                  key={addon.key}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${
                    addons[addon.key] ? "border-emerald-300 bg-emerald-50" : "border-slate-100 bg-slate-50 hover:border-slate-200"
                  }`}
                >
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={addons[addon.key]}
                    onChange={(e) => setAddons(prev => ({ ...prev, [addon.key]: e.target.checked }))}
                  />
                  <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                    addons[addon.key] ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-white"
                  }`}>
                    {addons[addon.key] && <span className="text-[11px] font-bold text-white">✓</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-800">{addon.label[lang]}</span>
                      <span className="shrink-0 text-sm font-bold text-emerald-600">
                        +${addon.price[vehicle]}
                      </span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">{addon.sub[lang]}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          {/* Step 3: total + CTA */}
          <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700">{T.totalLabel[lang]}</p>
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-5xl font-extrabold text-slate-900">
                  ${total} <span className="text-xl font-normal text-slate-400">USD</span>
                </p>
              </div>
              <div className="text-right text-xs text-slate-500 space-y-0.5">
                <p className="font-medium">{vehicle === "sedan" ? T.sedan[lang] : T.minivan[lang]}: ${basePrice}</p>
                {selectedAddons.map(a => (
                  <p key={a.key}>{a.label[lang]}: +${a.price[vehicle]}</p>
                ))}
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a href={waBookLink} target="_blank" rel="noopener"
                className="flex items-center justify-center gap-2 rounded-full bg-green-500 py-3 text-sm font-semibold text-white hover:bg-green-600">
                📱 {T.wa[lang]}
              </a>
              <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
                className="flex items-center justify-center gap-2 rounded-full bg-indigo-700 py-3 text-sm font-semibold text-white hover:bg-indigo-800">
                ✈️ {T.tg[lang]}
              </a>
            </div>
          </div>
        </div>

        {/* ── Right column ───────────────────────────────────────────────── */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-sm font-bold text-slate-800">{T.included[lang]}</h3>
            <ul className="space-y-0">
              {includedItems[lang].map((item, i) => (
                <li key={i} className="flex items-center gap-2 border-b border-slate-100 py-2 last:border-0">
                  <span className="text-sm font-bold text-teal-500">✓</span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-sm font-bold text-rose-500">{T.notIncl[lang]}</h3>
            <ul className="space-y-0">
              {notIncluded[lang].map((item, i) => (
                <li key={i} className="flex items-center gap-2 border-b border-slate-100 py-2 last:border-0">
                  <span className="text-sm font-bold text-rose-400">✕</span>
                  <span className="text-sm text-slate-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <h3 className="mb-3 text-sm font-bold text-slate-800">{T.why[lang]}</h3>
            <ul className="space-y-1">
              {whyChoose[lang].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-teal-700">
                  <span className="font-bold">✓</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AlmatyToBishkek({ initialLang }: { initialLang?: "en" | "ru" | "ko" }) {
  const [lang, setLang] = useState<"en" | "ru" | "ko">(initialLang ?? pickLang());
  const router = useRouter();

  function handleLangChange(code: "en" | "ru" | "ko") {
    setLang(code);
    saveLang(code);
    router.push(LANG_ROUTES[code]);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader lang={lang} waLink={WA_LINK} onLangChange={handleLangChange} activeNav="transfers" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 text-white md:py-14">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            {lang === "ru" ? "Приватный трансфер · 1 день" : lang === "ko" ? "프라이빗 이동 · 1일" : "Private Transfer · 1 Day"}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">
            {lang === "ru"
              ? "Алматы → Бишкек: Приватный трансфер через границу Кордай"
              : lang === "ko"
              ? "알마티 → 비슈케크: 코르다이 국경 경유 프라이빗 이동"
              : "Almaty to Bishkek Private Transfer via Kordai Border"}
          </h1>
          <p className="mt-2 text-sm text-white/80">
            {lang === "ru"
              ? "Граница Кордай 24/7 · Безвизово для большинства стран · ~240 км · ~3 часа"
              : lang === "ko"
              ? "코르다이 국경 24시간 · 대부분 무비자 · ~240km · ~3시간"
              : "Kordai border 24/7 · Visa-free for most nationalities · ~240 km · ~3 hours"}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/30">
              <MessageCircle className="h-4 w-4" />
              {lang === "ru" ? "Забронировать" : lang === "ko" ? "예약하기" : "Book Now"}
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-12">

        {/* Notice */}
        <NoticeBanner lang={lang} />

        {/* Simple Transfer */}
        <SimpleTransferBlock lang={lang} />

        {/* Upsell */}
        <UpsellDivider lang={lang} />

        {/* Scroll anchor for upsell button */}
        <div id="tour-section" />

        {/* Overview */}
        <section className="mb-12">
          <h2 className="mb-3 text-xl font-bold md:text-2xl">
            {lang === "ru" ? "Обзор тура" : lang === "ko" ? "투어 개요" : "Tour Overview"}
          </h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate-600">
            {lang === "ru" ? (
              <>
                <p>Приватный трансфер из Алматы в Бишкек — самый быстрый и комфортный способ пересечь казахстанско-кыргызскую границу. Маршрут проходит по главной трассе через пограничный переход Кордай (работает 24/7) и занимает около 3 часов с учётом паспортного контроля.</p>
                <p>В отличие от такси на рынке, у нас фиксированная цена за машину, профессиональный водитель с английским и помощь на границе. Подходит для пересадки с международного рейса в Алматы и продолжения путешествия по Кыргызстану.</p>
                <p>Для групп от 8 человек — приватный микроавтобус (от $220). При необходимости продлим трансфер до Иссык-Куля, Каракола или нацпарка Ала-Арча.</p>
              </>
            ) : lang === "ko" ? (
              <>
                <p>알마티에서 비슈케크까지의 프라이빗 이동은 카자흐스탄과 키르기스스탄 국경을 가장 빠르고 편안하게 넘는 방법입니다. 노선은 메인 고속도로를 따라 코르다이 국경 검문소(24시간 운영)를 통과하며, 여권 심사 포함 약 3시간 소요됩니다.</p>
                <p>일반 택시와 달리 차량당 고정 가격, 영어 가능 전문 드라이버, 국경 통과 안내를 제공합니다. 알마티 국제 항공편에서 환승해 키르기스스탄으로 여행을 이어가는 분들에게 적합합니다.</p>
                <p>8인 이상 그룹의 경우 프라이빗 미니버스($220부터)가 있습니다. 필요시 이식쿨, 카라콜, 알라-아르차 국립공원까지 이동을 연장해드립니다.</p>
              </>
            ) : (
              <>
                <p>Private transfer from Almaty to Bishkek is the fastest and most comfortable way to cross the Kazakhstan–Kyrgyzstan border. The route runs along the main highway through the Kordai border crossing (open 24/7) and takes around 3 hours including passport control.</p>
                <p>Unlike informal taxis, we offer a fixed price per car, professional English-speaking drivers, and assistance at the border. Ideal for travelers connecting from international flights in Almaty who want to continue their journey across Kyrgyzstan.</p>
                <p>For groups of 8+ passengers, private minibus available from $220. We can also extend the transfer to Issyk-Kul, Karakol, or Ala-Archa National Park on request.</p>
              </>
            )}
          </div>
        </section>

        {/* Timeline */}
        <TourTimeline lang={lang} />

        {/* Itinerary */}
        <section className="mb-14">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              {lang === "ru" ? "Остановки" : lang === "ko" ? "정류장" : "Stops"}
            </p>
            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              {lang === "ru" ? "Что вас ждёт" : lang === "ko" ? "주요 정류장" : "What to Expect"}
            </h2>
          </div>

          <div className="
            -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4
            md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0
          ">
            {STOPS.map((stop, i) => (
              <div key={i} className="w-[82vw] shrink-0 md:w-auto">
                <ItineraryCard stop={stop} idx={i} lang={lang} />
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map */}
        <InteractiveRouteMap lang={lang} stops={ALMATY_MAP_STOPS} />

        {/* Pricing */}
        <PricingSection lang={lang} />

        <RelatedRoutes currentSlug="almaty-to-bishkek" lang={lang} />
      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
          <p className="text-xs opacity-80">© {new Date().getFullYear()} {BRAND}</p>
          <nav className="flex flex-col gap-2 text-center text-xs opacity-80 md:text-left">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/transfers/bishkek-to-karakol" className="hover:text-emerald-600">EN: Bishkek → Karakol</a>
              <a href="/transfers/almaty-to-bishkek" className="hover:text-emerald-600">EN: Almaty → Bishkek</a>
              <a href="/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">EN: Manas Airport → Karakol</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ru/transfers/bishkek-to-karakol" className="hover:text-emerald-600">RU: Бишкек → Каракол</a>
              <a href="/ru/transfers/almaty-to-bishkek" className="hover:text-emerald-600">RU: Алматы → Бишкек</a>
              <a href="/ru/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">RU: Манас → Каракол</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ko/transfers/bishkek-to-karakol" className="hover:text-emerald-600">KO: 비슈케크 → 카라콜</a>
              <a href="/ko/transfers/almaty-to-bishkek" className="hover:text-emerald-600">KO: 알마티 → 비슈케크</a>
              <a href="/ko/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">KO: 마나스 → 카라콜</a>
            </div>
          </nav>
          <div className="flex gap-2">
            <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500 px-4 py-2 text-sm text-sky-600 hover:bg-sky-50">
              <Send className="h-4 w-4" /> Telegram
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 shadow-2xl md:hidden">
        <div className="flex gap-2">
          <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-3 py-3 text-sm font-semibold text-white hover:bg-sky-800"
            aria-label="Telegram">
            <Send className="h-4 w-4" />
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
            <MessageCircle className="h-4 w-4" />
            {lang === "ru" ? "Забронировать в WhatsApp" : lang === "ko" ? "WhatsApp 예약" : "Book on WhatsApp"}
          </a>
        </div>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
}
