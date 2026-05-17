"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { MessageCircle, Send, MapPin } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import type { MapStop } from "../components/InteractiveRouteMap";
import FAQSection from "../components/FAQSection";
import CustomerReviewsSection from "../components/CustomerReviewsSection";
import TravelTipsSection from "../components/TravelTipsSection";
import RelatedRoutesSection from "../components/RelatedRoutesSection";
import {
  almatyToKarakolFAQ,
  almatyToKarakolReviews,
  almatyToKarakolTravelTips,
  almatyToKarakolRelatedRoutes,
} from "../data/seoContent";

const LANG_ROUTES: Record<"en" | "ru" | "ko", string> = {
  en: "/transfers/almaty-to-karakol",
  ru: "/ru/transfers/almaty-to-karakol",
  ko: "/ko/transfers/almaty-to-karakol",
};

const InteractiveRouteMap = dynamic(
  () => import("../components/InteractiveRouteMap"),
  { ssr: false }
);

// ─── Map stops ────────────────────────────────────────────────────────────────

const ALMATY_MAP_STOPS: MapStop[] = [
  { id: 0, lat: 43.2220, lng: 76.8512, name: "Almaty",         desc: "Start · Hotel pickup",         day: 1, time: "08:00", type: "start" },
  { id: 1, lat: 43.3547, lng: 79.0833, name: "Charyn Canyon",  desc: "Optional stop · +$35",          day: 1, time: "10:30" },
  { id: 2, lat: 42.9833, lng: 79.2167, name: "Kegen Border",   desc: "Passport control · 8am–6pm",   day: 1, time: "12:00" },
  { id: 3, lat: 42.5833, lng: 79.0833, name: "Karkara Valley", desc: "Scenic mountain valley",         day: 1, time: "13:30" },
  { id: 4, lat: 42.4900, lng: 78.3936, name: "Karakol",        desc: "End · Hotel drop-off",           day: 1, time: "17:00", type: "end" },
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
    day: "Day 1", time: "08:00",
    place: { en: "Almaty", ru: "Алматы", ko: "알마티" },
    sub: { en: "Start · Hotel pickup", ru: "Старт · Отель", ko: "출발 · 호텔 픽업" },
    type: "start",
  },
  {
    day: "Day 1", time: "10:30",
    place: { en: "Charyn Canyon", ru: "Чарынский каньон", ko: "차린 협곡" },
    sub: { en: "Optional stop · +$35", ru: "Опция · +$35", ko: "선택 정류장 · +$35" },
  },
  {
    day: "Day 1", time: "12:00",
    place: { en: "Kegen Border", ru: "Граница Кеген", ko: "케겐 국경" },
    sub: { en: "Passport control · 8am–6pm", ru: "Паспортный контроль · 8:00–18:00", ko: "여권 심사 · 오전8시~오후6시" },
  },
  {
    day: "Day 1", time: "13:30",
    place: { en: "Karkara Valley", ru: "Долина Каркара", ko: "카르카라 계곡" },
    sub: { en: "Scenic mountain valley", ru: "Живописная долина", ko: "풍경 좋은 산악 계곡" },
  },
  {
    day: "Day 1", time: "15:00",
    place: { en: "Kaindy Lake", ru: "Озеро Каинды", ko: "카인디 호수" },
    sub: { en: "Optional · Price on request", ru: "Опция · Цена по запросу", ko: "선택 · 가격 문의" },
  },
  {
    day: "Day 1", time: "17:00",
    place: { en: "Karakol", ru: "Каракол", ko: "카라콜" },
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
    title: { en: "Charyn Canyon", ru: "Чарынский каньон", ko: "차린 협곡" },
    desc: {
      en: "One of Central Asia's most spectacular canyons — dramatic red rock formations carved by wind and water over millions of years. A short detour of 12 km from the main Almaty–Karakol road. Add this stop for +$35.",
      ru: "Один из самых впечатляющих каньонов Центральной Азии — красные скалы, вырезанные ветром и водой. Небольшой крюк 12 км от основной дороги. Добавьте эту остановку за +$35.",
      ko: "중앙아시아에서 가장 장관을 이루는 협곡 중 하나 — 수백만 년에 걸쳐 바람과 물이 만들어낸 극적인 붉은 암석. 알마티-카라콜 메인 도로에서 12km 우회. +$35 추가.",
    },
    image: "",
    mapUrl: "#route-map",
  },
  {
    day: "DAY 1",
    time: "12:00",
    title: { en: "Kegen Border Crossing", ru: "Пограничный переход Кеген", ko: "케겐 국경 통과" },
    desc: {
      en: "Cross from Kazakhstan into Kyrgyzstan at the scenic Kegen–Karkara checkpoint. Open daily 8am–6pm. Passport required. Your driver will guide you through the process.",
      ru: "Переход из Казахстана в Кыргызстан через живописный КПП Кеген–Каркара. Открыт ежедневно с 8:00 до 18:00. Необходим паспорт. Водитель поможет с прохождением.",
      ko: "케겐-카르카라 검문소에서 카자흐스탄에서 키르기스스탄으로 입국합니다. 매일 오전 8시~오후 6시 운영. 여권 필수. 드라이버가 안내해 드립니다.",
    },
    image: "",
    mapUrl: "#route-map",
  },
  {
    day: "DAY 1",
    time: "13:30",
    title: { en: "Karkara Valley", ru: "Долина Каркара", ko: "카르카라 계곡" },
    desc: {
      en: "A breathtaking high-altitude valley on the Kyrgyz side of the border. Surrounded by snow-capped Tien-Shan peaks, wide open steppe and a crystal-clear river. Perfect for a short stop and photos.",
      ru: "Живописная высокогорная долина на кыргызской стороне границы. Горные вершины, широкая степь и кристально чистая река. Отличное место для короткой остановки.",
      ko: "국경의 키르기스 측에 있는 숨막히는 고지대 계곡. 설산으로 둘러싸인 탁 트인 초원과 맑은 강. 짧은 정차와 사진 촬영에 완벽합니다.",
    },
    image: "",
    mapUrl: "#route-map",
  },
  {
    day: "DAY 1",
    time: "15:00",
    title: { en: "Kaindy Lake (Optional)", ru: "Озеро Каинды (опционально)", ko: "카인디 호수 (선택)" },
    desc: {
      en: "A unique submerged forest lake created by a 1911 earthquake. Ghostly tree trunks rise from the turquoise water. Available as an optional detour — ask for price when booking.",
      ru: "Уникальное затопленное озеро, образованное землетрясением 1911 года. Стволы деревьев поднимаются из бирюзовой воды. Доступно как опция — уточните цену при бронировании.",
      ko: "1911년 지진으로 생긴 독특한 수몰 숲 호수. 청록빛 물에서 유령 같은 나무 줄기가 솟아 있습니다. 선택적 우회 가능 — 예약 시 가격 문의.",
    },
    image: "",
    mapUrl: "#route-map",
  },
];

const WHATSAPP_PHONE = "+996552291808";
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I'm interested in the Almaty  to  Karakol private transfer. Please share availability and price."
)}`;
const WA_LINK_SIMPLE = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I need a simple transfer from Almaty to Karakol. Please share availability and price."
)}`;
const BRAND = "Nomad Transfers KG";

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
      en: "Almaty to Karakol — Private Transfer",
      ru: "Алматы — Каракол: Приватный трансфер",
      ko: "알마티  to  카라콜 프라이빗 이동",
    },
    desc: {
      en: "Need to get from Almaty to Karakol quickly and comfortably? We pick you up from your hotel in Almaty and drop you off at your hotel in Karakol. Professional driver, comfortable car, no hidden fees.",
      ru: "Нужно просто добраться из Алматы в Каракол? Забираем из отеля в Алматы, довезём до отеля в Каракол. Профессиональный водитель, комфортный автомобиль, никаких скрытых платежей.",
      ko: "알마티에서 카라콜까지 빠르고 편안하게 이동하고 싶으신가요? 알마티 호텔에서 픽업하여 카라콜 호텔까지 편안하게 모셔드립니다.",
    },
    sedan:   { en: "SEDAN",   ru: "СЕДАН",   ko: "세단" },
    minivan: { en: "MINIVAN", ru: "МИНИВЭН", ko: "미니밴" },
    per4:    { en: "up to 4 passengers",  ru: "до 4 пассажиров",   ko: "최대 4명" },
    per7:    { en: "6–7 passengers",      ru: "6–7 пассажиров",    ko: "6–7명" },
    busNote: {
      en: "For groups of 8+ passengers, bus option available from $485. Ask when booking.",
      ru: "Для групп от 8 человек — автобус от $485. Уточняйте при бронировании.",
      ko: "8인 이상 그룹은 버스 옵션 $485부터. 예약 시 문의하세요.",
    },
    wa: {
      en: "Book Simple Transfer via WhatsApp",
      ru: "Забронировать трансфер в WhatsApp",
      ko: "WhatsApp으로 이동 예약",
    },
  };

  const pills = [
    { icon: "📍", text: "Almaty  to  Karakol" },
    { icon: "🕐", text: "~6 hours" },
    { icon: "📏", text: "~350 km" },
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
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$235 <span className="text-lg">USD</span></p>
          <p className="mt-1 text-xs text-slate-500">{T.per4[lang]}</p>
        </div>
        <div className="relative rounded-2xl border-2 border-amber-400 bg-white p-5 text-center shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">
              {T.minivan[lang]}
            </span>
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$275 <span className="text-lg">USD</span></p>
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
      en: "Turn your Almaty  to  Karakol drive into an adventure. Stop at Charyn Canyon, cross the scenic Kegen mountain pass, visit Kaindy Lake. Same route — unforgettable experience.",
      ru: "Превратите дорогу из Алматы в Каракол в приключение. Остановка в Чарынском каньоне, живописный перевал Кеген, озеро Каинды. Тот же маршрут — незабываемые впечатления.",
      ko: "알마티에서 카라콜까지의 드라이브를 모험으로 만들어보세요. 차린 협곡, 케겐 산악 고개, 카인디 호수. 같은 노선 — 잊을 수 없는 경험.",
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
    en: "Border at Kegen is open daily 8:00 AM – 6:00 PM. Passport required. This route operates May–October. In winter, transfer goes via Bishkek (northern route).",
    ru: "Граница Кеген открыта ежедневно с 8:00 до 18:00. Необходим паспорт. Маршрут работает май–октябрь. Зимой трансфер идёт через Бишкек (северный маршрут).",
    ko: "케겐 국경은 매일 오전 8시~오후 6시 운영. 여권 필수. 이 노선은 5월~10월 운영됩니다. 겨울에는 비슈케크 경유 북쪽 노선으로 이동합니다.",
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
    key: "charyn" as const,
    price: { sedan: 25, minivan: 35 },
    label: { en: "Charyn Canyon stop", ru: "Остановка в Чарынском каньоне", ko: "차린 협곡 정류장" },
    sub:   { en: "12 km off the main road · ~1.5 hrs", ru: "12 км от основной дороги · ~1.5 ч", ko: "메인 도로에서 12km · 약 1.5시간" },
  },
  {
    key: "kaindy" as const,
    price: { sedan: 45, minivan: 57 },
    label: { en: "Kaindy Lake detour", ru: "Крюк к озеру Каинды", ko: "카인디 호수 우회" },
    sub:   { en: "Submerged forest lake", ru: "Затопленный лес", ko: "수몰 숲 호수" },
  },
  {
    key: "kolsai" as const,
    price: { sedan: 53, minivan: 68 },
    label: { en: "Kolsai Lakes detour", ru: "Крюк к Кольсайским озёрам", ko: "콜사이 호수 우회" },
    sub:   { en: "Mountain lakes", ru: "Горные озёра", ko: "산악 호수" },
  },
];

type AddonKey = typeof ADDON_DEFS[number]["key"];

function PricingSection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const [vehicle, setVehicle] = useState<"sedan" | "minivan">("sedan");
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({ charyn: false, kaindy: false, kolsai: false });

  const BASE = { sedan: 235, minivan: 275 };

  const includedItems = {
    en: ["Professional local driver", "Fuel and all transportation costs", "Hotel pickup in Almaty", "Hotel drop-off in Karakol", "Border crossing guidance"],
    ru: ["Профессиональный местный водитель", "Топливо и все транспортные расходы", "Трансфер из отеля в Алматы", "Трансфер до отеля в Каракол", "Помощь при прохождении границы"],
    ko: ["전문 현지 드라이버", "연료 및 모든 교통 비용", "알마티 호텔 픽업", "카라콜 호텔 하차", "국경 통과 안내"],
  };
  const notIncluded = {
    en: ["Meals and drinks", "Kazakhstan and Kyrgyzstan entry fees (if applicable)", "Personal travel insurance"],
    ru: ["Питание и напитки", "Въездные сборы КЗ и КГ (при наличии)", "Личная туристическая страховка"],
    ko: ["식사 및 음료", "카자흐스탄 및 키르기스스탄 입국 수수료 (해당 시)", "개인 여행 보험"],
  };
  const whyChoose = {
    en: ["Private transfer — not a group tour", "Flexible stops along the way", "Scenic Kegen route through mountains", "Trusted local drivers", "Direct WhatsApp communication", "No hidden fees"],
    ru: ["Приватный трансфер — не групповой тур", "Гибкие остановки по пути", "Живописный маршрут через горы Кеген", "Надёжные местные водители", "Прямая связь через WhatsApp", "Никаких скрытых платежей"],
    ko: ["프라이빗 이동 — 그룹 투어 아님", "이동 중 유연한 정류장", "케겐 산악 경관 노선", "신뢰할 수 있는 현지 드라이버", "WhatsApp 직접 소통", "숨겨진 요금 없음"],
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
    ? `Здравствуйте! Хочу забронировать тур Алматы  to  Каракол.\nАвтомобиль: ${vehicleLabel[vehicle].ru} ($${basePrice})${extrasLine ? `\nОстановки: ${extrasLine}` : ""}\nИтого: $${total}. Подтвердите наличие.`
    : lang === "ko"
    ? `안녕하세요! 알마티 to 카라콜 투어를 예약하고 싶습니다.\n차량: ${vehicleLabel[vehicle].ko} ($${basePrice})${extrasLine ? `\n정류장: ${extrasLine}` : ""}\n총액: $${total}. 예약 가능 여부 확인 부탁드립니다.`
    : `Hi! I'd like to book the Almaty  to  Karakol scenic tour transfer.\nVehicle: ${vehicleLabel[vehicle].en} ($${basePrice})${extrasLine ? `\nOptional stops: ${extrasLine}` : ""}\nTotal: $${total}. Please confirm availability.`;
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

export default function AlmatyToKarakol({ initialLang }: { initialLang?: "en" | "ru" | "ko" }) {
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
              ? "Алматы  to  Каракол: трансфер через перевал Кеген"
              : lang === "ko"
              ? "알마티  to  카라콜: 케겐 고개 경유 이동"
              : "Almaty to Karakol — Private Transfer via Kegen"}
          </h1>
          <p className="mt-2 text-sm text-white/80">
            {lang === "ru"
              ? "Чарынский каньон · Граница Кеген · Долина Каркара · ~350 км · ~6 часов"
              : lang === "ko"
              ? "차린 협곡 · 케겐 국경 · 카르카라 계곡 · ~350km · ~6시간"
              : "Charyn Canyon · Kegen Border · Karkara Valley · ~350 km · ~6 hours"}
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
                <p>Этот приватный трансфер из Алматы в Каракол — один из самых живописных и комфортных маршрутов в Центральной Азии. Вместо стандартного северного шоссе вы путешествуете через захватывающие горные пейзажи — драматические каньоны, широкие степи, альпийские долины и знаменитый перевал Кеген.</p>
                <p>Маршрут работает с мая по октябрь и предлагает гибкие остановки для осмотра достопримечательностей. Популярные варианты: Чарынский каньон, а также озёра Каинды и Кольсай по запросу.</p>
                <p>Для семей, небольших групп и путешественников, ценящих комфорт, — это самый быстрый и удобный способ добраться до Каракола.</p>
                <p>Для групп от 8 человек — приватный микроавтобус (от $485). Свяжитесь с нами для индивидуального расчёта и планирования маршрута.</p>
              </>
            ) : lang === "ko" ? (
              <>
                <p>알마티에서 카라콜까지의 이 프라이빗 이동은 중앙아시아에서 가장 경치 좋고 편안한 여행 노선 중 하나입니다. 일반적인 북쪽 고속도로 대신, 극적인 협곡, 탁 트인 초원, 고산 계곡, 유명한 케겐 고개를 지나는 숨막히는 산악 경관을 즐길 수 있습니다.</p>
                <p>이 노선은 5월부터 10월까지 운행되며 이동 중 유연한 관광 정류장을 제공합니다. 인기 있는 선택지로는 차린 협곡이 있으며, 카인디 호수와 콜사이 호수도 요청 시 방문 가능합니다.</p>
                <p>가족, 소규모 그룹, 편안함을 원하는 여행자에게 카라콜로 가는 가장 빠르고 편리한 방법입니다.</p>
                <p>8인 이상 그룹의 경우 프라이빗 미니버스($485부터) 옵션이 있습니다. 맞춤 그룹 가격 및 노선 계획은 문의해 주세요.</p>
              </>
            ) : (
              <>
                <p>This private transfer from Almaty to Karakol is one of the most scenic and comfortable travel routes in Central Asia. Instead of the standard northern highway, you journey through breathtaking mountain landscapes — dramatic canyons, wide-open steppe, alpine valleys, and the famous Kegen mountain pass.</p>
                <p>The route is available from May to October and offers flexible sightseeing stops along the way. Popular optional destinations include Charyn Canyon, as well as Kaindy Lake and Kolsai Lakes upon request.</p>
                <p>For families, small groups, and travelers seeking comfort, this is the fastest and most convenient way to reach Karakol.</p>
                <p>For groups of 8+ passengers, private minibus available from $485. Please contact us for custom group pricing and route planning.</p>
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

        {/* SEO Sections */}
        <TravelTipsSection
          tips={almatyToKarakolTravelTips[lang].length > 0 ? almatyToKarakolTravelTips[lang] : almatyToKarakolTravelTips.en}
          lang={lang}
        />

        <CustomerReviewsSection
          reviews={almatyToKarakolReviews[lang].length > 0 ? almatyToKarakolReviews[lang] : almatyToKarakolReviews.en}
          lang={lang}
        />

        <FAQSection
          faqs={almatyToKarakolFAQ[lang].length > 0 ? almatyToKarakolFAQ[lang] : almatyToKarakolFAQ.en}
          lang={lang}
        />

        <RelatedRoutesSection
          routes={almatyToKarakolRelatedRoutes[lang].length > 0 ? almatyToKarakolRelatedRoutes[lang] : almatyToKarakolRelatedRoutes.en}
          lang={lang}
        />

      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
          <p className="text-xs opacity-80">© {new Date().getFullYear()} {BRAND}</p>
          <nav className="flex flex-col gap-2 text-center text-xs opacity-80 md:text-left">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/transfers/bishkek-to-karakol" className="hover:text-emerald-600">EN: Bishkek  to  Karakol</a>
              <a href="/transfers/almaty-to-karakol" className="hover:text-emerald-600">EN: Almaty  to  Karakol</a>
              <a href="/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">EN: Manas Airport  to  Karakol</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ru/transfers/bishkek-to-karakol" className="hover:text-emerald-600">RU: Бишкек  to  Каракол</a>
              <a href="/ru/transfers/almaty-to-karakol" className="hover:text-emerald-600">RU: Алматы  to  Каракол</a>
              <a href="/ru/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">RU: Манас  to  Каракол</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ko/transfers/bishkek-to-karakol" className="hover:text-emerald-600">KO: 비슈케크  to  카라콜</a>
              <a href="/ko/transfers/almaty-to-karakol" className="hover:text-emerald-600">KO: 알마티  to  카라콜</a>
              <a href="/ko/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">KO: 마나스  to  카라콜</a>
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
