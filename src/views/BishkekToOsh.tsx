"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Car, MessageCircle, Send, Globe, MapPin } from "lucide-react";
import type { MapStop } from "../components/InteractiveRouteMap";
import FAQSection from "../components/FAQSection";
import RelatedRoutesSection from "../components/RelatedRoutesSection";
import {
  bishkekToOshFAQ,
  bishkekToOshRelatedRoutes,
} from "../data/seoContent";

const InteractiveRouteMap = dynamic(
  () => import("../components/InteractiveRouteMap"),
  { ssr: false }
);

const LANG_ROUTES: Record<"en" | "ru" | "ko", string> = {
  en: "/transfers/bishkek-to-osh",
  ru: "/ru/transfers/bishkek-to-osh",
  ko: "/ko/transfers/bishkek-to-osh",
};

const BISHKEK_MAP_STOPS: MapStop[] = [
  { id: 0, lat: 42.8746, lng: 74.5698, name: "Bishkek",            desc: "Start · Hotel pickup",          day: 1, time: "07:00", type: "start" },
  { id: 1, lat: 42.3500, lng: 73.7000, name: "Too-Ashuu Pass",     desc: "Mountain tunnel · 3,200 m",     day: 1, time: "10:00" },
  { id: 2, lat: 42.1556, lng: 73.7833, name: "Suusamyr Valley",    desc: "Alpine valley · lunch stop",    day: 1, time: "11:30" },
  { id: 3, lat: 41.7833, lng: 72.9333, name: "Toktogul Reservoir", desc: "Mountain lake · photo stop",    day: 1, time: "14:00" },
  { id: 4, lat: 40.5283, lng: 72.7985, name: "Osh",                desc: "End · Hotel drop-off",          day: 1, time: "18:00", type: "end" },
];

interface TimelineStop {
  day: string; time: string;
  place: { en: string; ru: string; ko: string };
  sub:   { en: string; ru: string; ko: string };
  type?: "start" | "end" | "overnight";
}

const TIMELINE: TimelineStop[] = [
  { day: "Day 1", time: "07:00", place: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" }, sub: { en: "Start · Hotel pickup", ru: "Старт · Отель", ko: "출발 · 호텔 픽업" }, type: "start" },
  { day: "Day 1", time: "10:00", place: { en: "Too-Ashuu Pass", ru: "Перевал Тоо-Ашуу", ko: "토오-아슈 고개" }, sub: { en: "3,200 m · tunnel", ru: "3,200 м · тоннель", ko: "3,200m · 터널" } },
  { day: "Day 1", time: "11:30", place: { en: "Suusamyr Valley", ru: "Суусамырская долина", ko: "수사미르 계곡" }, sub: { en: "Alpine valley · lunch", ru: "Горная долина · обед", ko: "고산 계곡 · 점심" } },
  { day: "Day 1", time: "14:00", place: { en: "Toktogul Reservoir", ru: "Токтогульское вдхр.", ko: "톡토굴 저수지" }, sub: { en: "Photo stop", ru: "Фотостоп", ko: "포토 스톱" } },
  { day: "Day 1", time: "18:00", place: { en: "Osh", ru: "Ош", ko: "오쉬" }, sub: { en: "End · Hotel drop-off", ru: "Финиш · Отель", ko: "종료 · 호텔 하차" }, type: "end" },
];

interface Stop {
  day: string; time: string;
  title: { en: string; ru: string; ko: string };
  desc:  { en: string; ru: string; ko: string };
  image: string; mapUrl: string;
}

const STOPS: Stop[] = [
  {
    day: "DAY 1", time: "10:00",
    title: { en: "Too-Ashuu Pass & Tunnel", ru: "Перевал Тоо-Ашуу и тоннель", ko: "토오-아슈 고개와 터널" },
    desc: {
      en: "One of the highest road tunnels in Central Asia at 3,200 m. Built in 1964, it cuts through the Kyrgyz Range and connects the Chuy Valley with the Suusamyr Valley. Snow possible year-round at the summit. Brief photo stop.",
      ru: "Один из самых высокогорных автомобильных тоннелей Центральной Азии на отметке 3,200 м. Построен в 1964 г., прорезает Киргизский хребет и соединяет Чуйскую долину с Суусамырской. На вершине возможен снег круглый год. Короткая фото-остановка.",
      ko: "중앙아시아에서 가장 높은 도로 터널 중 하나, 3,200m. 1964년 건설, 키르기스 산맥을 가로질러 추이 계곡과 수사미르 계곡을 연결. 정상에는 연중 눈이 내릴 수 있음. 짧은 사진 정류장.",
    },
    image: "", mapUrl: "#route-map",
  },
  {
    day: "DAY 1", time: "11:30",
    title: { en: "Suusamyr Valley", ru: "Суусамырская долина", ko: "수사미르 계곡" },
    desc: {
      en: "Wide-open alpine valley at 2,200 m, famous for its yurt camps, kumis (mare's milk), and horseback culture in summer. We typically stop here for lunch at a local cafe. Stunning mountain panoramas in every direction.",
      ru: "Просторная высокогорная долина на 2,200 м, известная летом юртовыми лагерями, кумысом и конной культурой. Здесь обычно делаем остановку на обед в местном кафе. Потрясающие горные панорамы.",
      ko: "고도 2,200m의 탁 트인 고산 계곡, 여름에는 유르트 캠프, 쿠미스(말젖), 기마 문화로 유명. 보통 현지 카페에서 점심 정류장. 사방으로 멋진 산악 파노라마.",
    },
    image: "", mapUrl: "#route-map",
  },
  {
    day: "DAY 1", time: "14:00",
    title: { en: "Toktogul Reservoir", ru: "Токтогульское водохранилище", ko: "톡토굴 저수지" },
    desc: {
      en: "Largest reservoir in Kyrgyzstan, formed by the Toktogul hydroelectric dam on the Naryn River. The turquoise water stretches for 65 km between mountain walls. The road runs along the shoreline for over an hour — one of the most scenic sections of the entire trip.",
      ru: "Крупнейшее водохранилище Кыргызстана, образованное Токтогульской ГЭС на реке Нарын. Бирюзовая вода тянется на 65 км между горами. Дорога идёт вдоль берега больше часа — один из самых живописных участков всей поездки.",
      ko: "키르기스스탄 최대 저수지, 나린 강의 톡토굴 수력 발전 댐으로 형성. 산벽 사이로 65km에 걸쳐 청록빛 물이 펼쳐짐. 도로가 한 시간 넘게 해안선을 따라 이어짐 — 전체 여행 중 가장 경치 좋은 구간 중 하나.",
    },
    image: "", mapUrl: "#route-map",
  },
  {
    day: "DAY 1", time: "On request",
    title: { en: "Optional Stops: Jalal-Abad & Uzgen", ru: "Опции: Джалал-Абад и Узген", ko: "선택: 잘랄-아바드 및 우즈겐" },
    desc: {
      en: "Add a stop at Jalal-Abad (regional capital with mineral spas) or Uzgen — an ancient Karakhanid city with an 11th-century minaret and royal mausoleum. Adds 1–2 hours to the trip. Ask for custom pricing via WhatsApp.",
      ru: "Добавьте остановку в Джалал-Абаде (областной центр с минеральными источниками) или Узгене — древний караханидский город с минаретом и мавзолеем XI века. Добавляет 1–2 часа. Цена по запросу в WhatsApp.",
      ko: "잘랄-아바드(광천이 있는 지역 중심지) 또는 우즈겐(11세기 미나렛과 왕실 묘소가 있는 카라한 왕조 고대 도시)에 정류장을 추가하세요. 1~2시간 추가. WhatsApp으로 맞춤 가격 문의.",
    },
    image: "", mapUrl: "#route-map",
  },
];

const WHATSAPP_PHONE = "+996552291808";
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I'm interested in the Bishkek → Osh private transfer. Please share availability and price."
)}`;
const WA_LINK_SIMPLE = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I need a simple transfer from Bishkek to Osh. Please share availability and price."
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

const LANGS = [
  { code: "en" as const, label: "English", flag: "🇬🇧" },
  { code: "ko" as const, label: "Korean",  flag: "🇰🇷" },
  { code: "ru" as const, label: "Russian", flag: "🇷🇺" },
];

// ─── Simple Transfer Block ────────────────────────────────────────────────────

function SimpleTransferBlock({ lang }: { lang: "en" | "ru" | "ko" }) {
  const T = {
    title:   { en: "Bishkek to Osh — Private Transfer", ru: "Бишкек — Ош: Приватный трансфер", ko: "비슈케크 → 오쉬 프라이빗 이동" },
    desc:    { en: "Need to get from Bishkek to Osh quickly and comfortably? We pick you up from your hotel in Bishkek and drop you off at your hotel in Osh. Along the way you can stop 2–3 times for 10–15 min to take photos.", ru: "Нужно быстро добраться из Бишкека в Ош? Забираем из отеля в Бишкеке, довезём до отеля в Оше. По дороге можно остановиться 2–3 раза на 10–15 мин для фотографий.", ko: "비슈케크에서 오쉬까지 빠르고 편안하게 이동하고 싶으신가요? 비슈케크 호텔에서 픽업하여 오쉬 호텔까지 모셔드립니다. 도중에 2~3번 10~15분 포토 정차 가능합니다." },
    sedan:   { en: "SEDAN",   ru: "СЕДАН",   ko: "세단" },
    minivan: { en: "MINIVAN", ru: "МИНИВЭН", ko: "미니밴" },
    per4:    { en: "up to 4 passengers", ru: "до 4 пассажиров", ko: "최대 4명" },
    per7:    { en: "6–7 passengers",     ru: "6–7 пассажиров",  ko: "6–7명" },
    busNote: { en: "For groups of 8+ passengers, bus option available from $590. Ask when booking.", ru: "Для групп от 8 человек — автобус от $590. Уточняйте при бронировании.", ko: "8인 이상 그룹은 버스 옵션 $590부터. 예약 시 문의하세요." },
    wa:      { en: "Book Simple Transfer via WhatsApp", ru: "Забронировать трансфер в WhatsApp", ko: "WhatsApp으로 이동 예약" },
  };

  const pills = [
    { icon: "📍", text: "Bishkek → Osh" },
    { icon: "🕐", text: "~10–12 hours" },
    { icon: "📏", text: "~620 km" },
    { icon: "👤", text: "Private" },
    { icon: "📅", text: "Year-round" },
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
            <span className="rounded-full bg-teal-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">{T.sedan[lang]}</span>
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$290 <span className="text-lg">USD</span></p>
          <p className="mt-1 text-xs text-slate-500">{T.per4[lang]}</p>
        </div>
        <div className="relative rounded-2xl border-2 border-amber-400 bg-white p-5 text-center shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">{T.minivan[lang]}</span>
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$340 <span className="text-lg">USD</span></p>
          <p className="mt-1 text-xs text-slate-500">{T.per7[lang]}</p>
        </div>
      </div>
      <p className="mt-4 text-xs text-slate-500">{T.busNote[lang]}</p>
      <a href={WA_LINK_SIMPLE} target="_blank" rel="noopener"
        className="mt-5 inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600">
        <MessageCircle className="h-4 w-4" />
        {T.wa[lang]}
      </a>
    </section>
  );
}

// ─── Upsell Divider ───────────────────────────────────────────────────────────

function UpsellDivider({ lang }: { lang: "en" | "ru" | "ko" }) {
  const T = {
    headline: { en: "✨ Want more than just a transfer?", ru: "✨ Хотите больше, чем просто поездку?", ko: "✨ 단순한 이동 그 이상을 원하시나요?" },
    body:     { en: "Long drive ahead? Make it count. The Bishkek → Osh route is one of the most scenic in Central Asia: a 3,200 m mountain tunnel, alpine valley with yurt camps, and the turquoise Toktogul Reservoir. Stops for lunch and photos included.", ru: "Долгая дорога? Сделайте её незабываемой. Маршрут Бишкек → Ош — один из самых живописных в Центральной Азии: тоннель на 3,200 м, альпийская долина с юртами и бирюзовое Токтогульское водохранилище. Остановки на обед и фото включены.", ko: "긴 여정이신가요? 의미 있게 만들어보세요. 비슈케크 → 오쉬 노선은 중앙아시아에서 가장 경치 좋은 노선 중 하나: 3,200m 산악 터널, 유르트가 있는 고산 계곡, 청록빛 톡토굴 저수지. 점심과 사진 정류장 포함." },
    btn:      { en: "See the Tour Option ↓", ru: "Смотреть тур ↓", ko: "투어 옵션 보기 ↓" },
  };
  return (
    <div className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500 px-6 py-8 text-center text-white md:py-10">
      <p className="text-lg font-bold md:text-xl">{T.headline[lang]}</p>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/90">{T.body[lang]}</p>
      <button
        onClick={() => { const el = document.getElementById("tour-section"); if (el) el.scrollIntoView({ behavior: "smooth" }); }}
        className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/40 bg-white/20 px-6 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/30"
      >
        {T.btn[lang]}
      </button>
    </div>
  );
}

// ─── Tour Timeline ────────────────────────────────────────────────────────────

function DayRow({ stops, dayLabel, lang }: { stops: TimelineStop[]; dayLabel: string; lang: "en" | "ru" | "ko" }) {
  return (
    <div>
      <div className="mb-4">
        <span className="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-widest text-white">{dayLabel}</span>
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
                  <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-[12px] font-bold shadow-sm ${isStart ? "border-emerald-600 bg-emerald-600 text-white" : isEnd ? "border-slate-900 bg-slate-900 text-white" : "border-slate-300 bg-white text-slate-400"}`}>
                    {isStart ? "▶" : isEnd ? "✓" : "·"}
                  </div>
                  <span className="mt-1.5 text-[11px] font-semibold text-slate-400">{stop.time}</span>
                  <p className={`mt-1 text-center text-[12px] font-bold leading-tight ${isStart ? "text-emerald-600" : isEnd ? "text-slate-900" : "text-slate-700"}`}>{stop.place[lang]}</p>
                  <p className="mt-0.5 text-center text-[10px] leading-tight text-slate-400 px-1">{stop.sub[lang]}</p>
                </div>
                {!isLast && <div className="mt-4 h-px w-8 shrink-0 bg-slate-200 md:flex-1" />}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function TourTimeline({ lang }: { lang: "en" | "ru" | "ko" }) {
  const day1 = TIMELINE.filter(s => s.day === "Day 1");
  return (
    <section className="mb-14">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">{lang === "ru" ? "Программа" : lang === "ko" ? "여정" : "Route Overview"}</p>
        <h2 className="mt-1 text-2xl font-bold md:text-3xl">{lang === "ru" ? "Маршрут по часам" : lang === "ko" ? "시간별 일정" : "Your Journey at a Glance"}</h2>
      </div>
      <div className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <DayRow stops={day1} dayLabel={lang === "ru" ? "День 1" : lang === "ko" ? "1일차" : "Day 1"} lang={lang} />
      </div>
    </section>
  );
}

// ─── Itinerary Card ───────────────────────────────────────────────────────────

const GRADIENT_BY_INDEX = [
  "from-violet-400 via-purple-500 to-indigo-500",
  "from-teal-400 via-cyan-400 to-sky-400",
  "from-emerald-400 via-teal-500 to-sky-500",
  "from-rose-400 via-orange-400 to-amber-300",
];

function ItineraryCard({ stop, idx, lang }: { stop: Stop; idx: number; lang: "en" | "ru" | "ko" }) {
  return (
    <div className="group flex snap-center flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl md:snap-align-none">
      <div className="relative h-56 shrink-0 overflow-hidden">
        {stop.image
          ? <img src={stop.image} alt={stop.title.en} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
          : <div className={`h-full w-full bg-gradient-to-br ${GRADIENT_BY_INDEX[idx % GRADIENT_BY_INDEX.length]}`} />
        }
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-3 top-3">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm">{stop.day} · {stop.time}</span>
        </div>
        <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/20 text-xs font-bold text-white backdrop-blur">{idx + 1}</div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold leading-snug text-slate-900">{stop.title[lang]}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{stop.desc[lang]}</p>
        <a href={stop.mapUrl} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700">
          <MapPin className="h-3.5 w-3.5" />
          {lang === "ru" ? "Открыть на карте" : lang === "ko" ? "지도에서 보기" : "View on Map"}
        </a>
      </div>
    </div>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

const ADDON_DEFS = [
  { key: "jalalabad" as const, price: { sedan: 30, minivan: 40 }, label: { en: "Jalal-Abad stop",  ru: "Остановка в Джалал-Абаде", ko: "잘랄-아바드 정류장" }, sub: { en: "Mineral spa town · ~1 hr",  ru: "Курорт с минводами · ~1 ч",  ko: "광천 도시 · 약 1시간" } },
  { key: "uzgen" as const,    price: { sedan: 35, minivan: 45 }, label: { en: "Uzgen ancient city", ru: "Древний Узген",            ko: "우즈겐 고대 도시" }, sub: { en: "11th-century minaret & mausoleum · ~1.5 hr", ru: "Минарет и мавзолей XI в. · ~1.5 ч", ko: "11세기 미나렛과 묘소 · 약 1.5시간" } },
];
type AddonKey = typeof ADDON_DEFS[number]["key"];

function PricingSection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const [vehicle, setVehicle] = useState<"sedan" | "minivan">("sedan");
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({ jalalabad: false, uzgen: false });

  const BASE = { sedan: 290, minivan: 340 };

  const includedItems = {
    en: ["Professional local driver", "Fuel and all transportation costs", "Hotel pickup in Bishkek", "Hotel drop-off in Osh", "Lunch stop at Suusamyr Valley", "Photo stops along Toktogul Reservoir"],
    ru: ["Профессиональный местный водитель", "Топливо и все транспортные расходы", "Трансфер из отеля в Бишкеке", "Трансфер до отеля в Оше", "Остановка на обед в Суусамырской долине", "Фотостопы у Токтогульского водохранилища"],
    ko: ["전문 현지 드라이버", "연료 및 모든 교통 비용", "비슈케크 호텔 픽업", "오쉬 호텔 하차", "수사미르 계곡 점심 정류장", "톡토굴 저수지 사진 정류장"],
  };
  const notIncluded = {
    en: ["Meals and drinks", "Entry fees to attractions", "Personal travel insurance"],
    ru: ["Питание и напитки", "Входные билеты на достопримечательности", "Личная туристическая страховка"],
    ko: ["식사 및 음료", "관광지 입장료", "개인 여행 보험"],
  };
  const whyChoose = {
    en: ["Private vehicle only", "Professional drivers", "Flexible departure time", "No shared transport", "Door-to-door service", "Custom stops available"],
    ru: ["Только приватный автомобиль", "Профессиональные водители", "Гибкое время отправления", "Без попутчиков", "Трансфер от двери до двери", "Индивидуальные остановки"],
    ko: ["프라이빗 차량 전용", "전문 드라이버", "유연한 출발 시간", "합승 없음", "도어 투 도어 서비스", "맞춤 정류장 가능"],
  };

  const T = {
    title:         { en: "Transfer + Scenic Tour Price",                    ru: "Стоимость трансфера с туром",                    ko: "이동 + 관광 투어 가격" },
    chooseVehicle: { en: "1. Choose your vehicle",                          ru: "1. Выберите автомобиль",                         ko: "1. 차량 선택" },
    sedan:         { en: "SEDAN",                                           ru: "СЕДАН",                                          ko: "세단" },
    minivan:       { en: "MINIVAN",                                         ru: "МИНИВЭН",                                        ko: "미니밴" },
    per4:          { en: "up to 4 passengers",                              ru: "до 4 пассажиров",                                ko: "최대 4명" },
    per7:          { en: "6–7 passengers",                                  ru: "6–7 пассажиров",                                 ko: "6–7명" },
    extras:        { en: "2. Add optional stops",                           ru: "2. Добавьте остановки",                          ko: "2. 선택 정류장 추가" },
    extrasNote:    { en: "Tick the stops you want — the total updates instantly.", ru: "Отметьте нужные остановки — цена обновится.", ko: "원하는 정류장을 선택하면 가격이 즉시 업데이트됩니다." },
    totalLabel:    { en: "3. Your total",                                   ru: "3. Итого",                                       ko: "3. 총 금액" },
    included:      { en: "What's included",                                 ru: "Что включено",                                   ko: "포함 사항" },
    notIncl:       { en: "Not Included",                                    ru: "Не включено",                                    ko: "미포함 사항" },
    why:           { en: "Why Choose This Transfer?",                       ru: "Почему этот трансфер?",                          ko: "이 이동을 선택하는 이유?" },
    wa:            { en: "Book via WhatsApp",                               ru: "Забронировать в WhatsApp",                       ko: "WhatsApp으로 예약" },
    tg:            { en: "Book via Telegram",                               ru: "Забронировать в Telegram",                       ko: "Telegram으로 예약" },
  };

  const basePrice = BASE[vehicle];
  const addonsTotal = ADDON_DEFS.filter(a => addons[a.key]).reduce((sum, a) => sum + a.price[vehicle], 0);
  const total = basePrice + addonsTotal;
  const selectedAddons = ADDON_DEFS.filter(a => addons[a.key]);
  const vehicleLabel = { sedan: { en: "Sedan", ru: "Седан", ko: "세단" }, minivan: { en: "Minivan", ru: "Минивэн", ko: "미니밴" } };
  const extrasLine = selectedAddons.map(a => `${a.label.en} (+$${a.price[vehicle]})`).join(", ");
  const waText = lang === "ru"
    ? `Здравствуйте! Хочу забронировать тур Бишкек → Ош.\nАвтомобиль: ${vehicleLabel[vehicle].ru} ($${basePrice})${extrasLine ? `\nОстановки: ${extrasLine}` : ""}\nИтого: $${total}. Подтвердите наличие.`
    : lang === "ko"
    ? `안녕하세요! 비슈케크→카라콜 투어를 예약하고 싶습니다.\n차량: ${vehicleLabel[vehicle].ko} ($${basePrice})${extrasLine ? `\n정류장: ${extrasLine}` : ""}\n총액: $${total}. 예약 가능 여부 확인 부탁드립니다.`
    : `Hi! I'd like to book the Bishkek → Osh scenic tour transfer.\nVehicle: ${vehicleLabel[vehicle].en} ($${basePrice})${extrasLine ? `\nOptional stops: ${extrasLine}` : ""}\nTotal: $${total}. Please confirm availability.`;
  const waBookLink = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waText)}`;

  return (
    <section className="mb-14">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{T.title[lang]}</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="space-y-4 md:col-span-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-slate-500">{T.chooseVehicle[lang]}</p>
            <div className="grid grid-cols-2 gap-3">
              {(["sedan", "minivan"] as const).map((v) => (
                <button key={v} onClick={() => setVehicle(v)}
                  className={`relative rounded-xl border-2 p-4 text-left transition-all ${vehicle === v ? (v === "sedan" ? "border-teal-400 bg-teal-50" : "border-amber-400 bg-amber-50") : "border-slate-200 bg-white hover:border-slate-300"}`}>
                  <span className={`text-xs font-bold uppercase tracking-widest ${vehicle === v ? (v === "sedan" ? "text-teal-600" : "text-amber-600") : "text-slate-400"}`}>{T[v][lang]}</span>
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">${BASE[v]} <span className="text-sm font-normal text-slate-400">USD</span></p>
                  <p className="text-xs text-slate-500">{v === "sedan" ? T.per4[lang] : T.per7[lang]}</p>
                  {vehicle === v && <span className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white ${v === "sedan" ? "bg-teal-500" : "bg-amber-400"}`}>✓</span>}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-slate-500">{T.extras[lang]}</p>
            <p className="mb-4 text-xs text-slate-400">{T.extrasNote[lang]}</p>
            <div className="space-y-2">
              {ADDON_DEFS.map((addon) => (
                <label key={addon.key}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all ${addons[addon.key] ? "border-emerald-300 bg-emerald-50" : "border-slate-100 bg-slate-50 hover:border-slate-200"}`}>
                  <input type="checkbox" className="sr-only" checked={addons[addon.key]}
                    onChange={(e) => setAddons(prev => ({ ...prev, [addon.key]: e.target.checked }))} />
                  <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${addons[addon.key] ? "border-emerald-500 bg-emerald-500" : "border-slate-300 bg-white"}`}>
                    {addons[addon.key] && <span className="text-[11px] font-bold text-white">✓</span>}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-sm font-semibold text-slate-800">{addon.label[lang]}</span>
                      <span className="shrink-0 text-sm font-bold text-emerald-600">+${addon.price[vehicle]}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-slate-500">{addon.sub[lang]}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700">{T.totalLabel[lang]}</p>
            <div className="flex items-end justify-between gap-4">
              <p className="text-5xl font-extrabold text-slate-900">${total} <span className="text-xl font-normal text-slate-400">USD</span></p>
              <div className="text-right text-xs text-slate-500 space-y-0.5">
                <p className="font-medium">{vehicle === "sedan" ? T.sedan[lang] : T.minivan[lang]}: ${basePrice}</p>
                {selectedAddons.map(a => <p key={a.key}>{a.label[lang]}: +${a.price[vehicle]}</p>)}
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
                <li key={i} className="flex items-center gap-2 text-sm text-teal-700"><span className="font-bold">✓</span> {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA Section ──────────────────────────────────────────────────────────────

function CTASection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const T = {
    headline: { en: "Want to customize your route?", ru: "Хотите настроить маршрут?", ko: "노선을 맞춤 설정하고 싶으신가요?" },
    body:     { en: "Tell us your travel plan and we will build the best route from Bishkek to Osh with stops, timing, and exact pricing.", ru: "Расскажите о своём плане поездки — мы составим лучший маршрут из Бишкека в Ош с остановками, временем и точной ценой.", ko: "여행 계획을 알려주시면 정류장, 타이밍, 정확한 가격이 포함된 최적의 비슈케크→카라콜 노선을 만들어 드립니다." },
  };
  return (
    <section className="mb-14 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-10 text-center text-white md:py-12">
      <h2 className="text-2xl font-bold md:text-3xl">{T.headline[lang]}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">{T.body[lang]}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a href={WA_LINK} target="_blank" rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600">
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-600">
          <Send className="h-4 w-4" /> Telegram
        </a>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BishkekToOsh({ initialLang }: { initialLang?: "en" | "ru" | "ko" }) {
  const [lang, setLang] = useState<"en" | "ru" | "ko">(initialLang ?? pickLang());
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const router = useRouter();

  function handleLangChange(code: "en" | "ru" | "ko") {
    setLang(code); saveLang(code); setShowLangDropdown(false); router.push(LANG_ROUTES[code]);
  }

  useEffect(() => {
    if (!showLangDropdown) return;
    const close = () => setShowLangDropdown(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [showLangDropdown]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-2">
          <div className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            <span className="text-sm font-semibold">{BRAND}</span>
          </div>
          <nav className="hidden items-center justify-center gap-1 md:flex">
            <Link href="/" className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100">{lang === "ru" ? "Главная" : lang === "ko" ? "홈" : "Home"}</Link>
            <Link href="/#curated-tours" className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100">{lang === "ru" ? "Туры" : lang === "ko" ? "투어" : "Tours"}</Link>
            <Link href="/#route-prices" className="rounded-lg px-3 py-1.5 text-sm font-medium text-emerald-600 hover:bg-slate-100">{lang === "ru" ? "Трансферы" : lang === "ko" ? "이동" : "Transfers"}</Link>
          </nav>
          <div className="flex items-center justify-end gap-2">
            <div className="relative">
              <button onClick={(e) => { e.stopPropagation(); setShowLangDropdown(!showLangDropdown); }}
                className="rounded-xl border px-3 py-2 text-xs font-medium hover:bg-slate-50" aria-label="Change language">
                <Globe className="h-4 w-4" />
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 top-full mt-2 w-36 rounded-xl border bg-white shadow-lg z-50">
                  {LANGS.map(({ code, label, flag }) => (
                    <button key={code} onClick={(e) => { e.stopPropagation(); handleLangChange(code); }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl ${lang === code ? "bg-slate-50 font-semibold" : ""}`}>
                      {flag} {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
              className="hidden items-center gap-2 rounded-xl bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-sky-600 md:inline-flex">
              <Send className="h-4 w-4" /> Telegram
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener"
              className="hidden items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 md:inline-flex">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 text-white md:py-14">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            {lang === "ru" ? "Приватный трансфер · круглый год" : lang === "ko" ? "프라이빗 이동 · 연중 운행" : "Private Transfer · Year-round"}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">
            {lang === "ru" ? "Бишкек → Ош: Приватный трансфер через перевал Тоо-Ашуу" : lang === "ko" ? "비슈케크 → 오쉬: 토오-아슈 고개 경유 프라이빗 이동" : "Bishkek to Osh Private Transfer via Too-Ashuu Pass"}
          </h1>
          <p className="mt-2 text-sm text-white/80">
            {lang === "ru" ? "Через высокогорный тоннель, Суусамырскую долину и Токтогульское вдхр. · ~620 км · ~10–12 часов" : lang === "ko" ? "고산 터널, 수사미르 계곡, 톡토굴 저수지 경유 · ~620km · ~10~12시간" : "Through a high-altitude tunnel, Suusamyr Valley, and Toktogul Reservoir · ~620 km · ~10–12 hours"}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(lang === "ru" ? ["Приватный трансфер", "Гибкие остановки", "10–12 часов", "Круглый год"] : lang === "ko" ? ["프라이빗 이동", "유연한 정류장", "10~12시간", "연중 운행"] : ["Private transfer", "Flexible stops", "4–6 hours", "Year-round service"]).map(badge => (
              <span key={badge} className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">{badge}</span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/30">
              <MessageCircle className="h-4 w-4" />
              {lang === "ru" ? "Забронировать" : lang === "ko" ? "예약하기" : "Book Now"}
            </a>
            <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20">
              <Send className="h-4 w-4" /> Telegram
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <div id="tour-section" />
        <SimpleTransferBlock lang={lang} />
        <UpsellDivider lang={lang} />

        <section className="mb-12">
          <h2 className="mb-3 text-xl font-bold md:text-2xl">{lang === "ru" ? "Обзор тура" : lang === "ko" ? "투어 개요" : "Tour Overview"}</h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate-600">
            {lang === "ru" ? (
              <>
                <p>Приватный трансфер из Бишкека в Ош — самый комфортный способ преодолеть 620 км между севером и югом Кыргызстана. Маршрут идёт через перевал Тоо-Ашуу (3,200 м), Суусамырскую долину и Токтогульское водохранилище.</p>
                <p>В отличие от общественного транспорта, это сервис «от двери до двери» с гибкими остановками и индивидуальным маршрутом.</p>
                <p>Для групп от 8 человек — приватный микроавтобус (от $590). Свяжитесь с нами для индивидуального расчёта цены и планирования маршрута.</p>
              </>
            ) : lang === "ko" ? (
              <>
                <p>비슈케크에서 오쉬까지의 프라이빗 이동은 키르기스스탄의 북부와 남부 사이 620km를 가장 편안하게 이동하는 방법입니다. 노선은 토오-아슈 고개(3,200m), 수사미르 계곡, 톡토굴 저수지를 지납니다.</p>
                <p>대중교통과 달리 유연한 정류장과 맞춤 일정을 갖춘 도어 투 도어 서비스입니다.</p>
                <p>8인 이상 그룹의 경우 프라이빗 미니버스($590부터)가 있습니다. 그룹 가격 및 노선 계획 문의는 연락해 주세요.</p>
              </>
            ) : (
              <>
                <p>Private transfer from Bishkek to Osh is the most comfortable way to cross the 620 km between northern and southern Kyrgyzstan. The route passes through the Too-Ashuu Pass (3,200 m), Suusamyr Valley, and Toktogul Reservoir.</p>
                <p>Unlike public transport, this is a door-to-door service with flexible stops and personalized itinerary.</p>
                <p>For groups of 8+ passengers, private minibus available from $590. Please contact us for custom group pricing and route planning.</p>
              </>
            )}
          </div>
        </section>

        <TourTimeline lang={lang} />

        <section className="mb-14">
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">{lang === "ru" ? "Остановки" : lang === "ko" ? "정류장" : "Stops"}</p>
            <h2 className="mt-1 text-2xl font-bold md:text-3xl">{lang === "ru" ? "Что вас ждёт" : lang === "ko" ? "주요 정류장" : "What to Expect"}</h2>
          </div>
          <div className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:px-0 md:pb-0">
            {STOPS.map((stop, i) => (
              <div key={i} className="w-[82vw] shrink-0 md:w-auto">
                <ItineraryCard stop={stop} idx={i} lang={lang} />
              </div>
            ))}
          </div>
        </section>

        <InteractiveRouteMap lang={lang} stops={BISHKEK_MAP_STOPS} />
        <PricingSection lang={lang} />
        <CTASection lang={lang} />

        <section className="mb-14 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-600">
            {lang === "ru"
              ? "Трансфер Бишкек — Ош — самый удобный способ добраться на юг Кыргызстана. Маршрут проходит через знаменитый тоннель Тоо-Ашуу на высоте 3,200 м, Суусамырскую долину и Токтогульское водохранилище. Альтернатива внутреннему перелёту для тех, кто хочет увидеть страну."
              : lang === "ko"
              ? "비슈케크에서 오쉬까지의 프라이빗 이동은 키르기스스탄 남부에 도달하는 가장 편안한 방법입니다. 노선은 유명한 토오-아슈 터널(3,200m), 수사미르 계곡, 톡토굴 저수지를 지납니다. 국내선 항공편 대신 나라를 보고 싶은 여행자에게 좋은 대안입니다."
              : "Bishkek to Osh private transfer is the most comfortable way to reach southern Kyrgyzstan. The route passes through the famous Too-Ashuu tunnel at 3,200 m, the Suusamyr Valley, and Toktogul Reservoir. A great alternative to domestic flights for travelers who want to see the country."}
          </p>
        </section>

        {/* SEO Sections */}
        <FAQSection
          faqs={bishkekToOshFAQ[lang].length > 0 ? bishkekToOshFAQ[lang] : bishkekToOshFAQ.en}
          lang={lang}
        />

        <RelatedRoutesSection
          routes={bishkekToOshRelatedRoutes[lang].length > 0 ? bishkekToOshRelatedRoutes[lang] : bishkekToOshRelatedRoutes.en}
          lang={lang}
        />

      </main>

      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
          <p className="text-xs opacity-80">© {new Date().getFullYear()} {BRAND}</p>
          <nav className="flex flex-col gap-2 text-center text-xs opacity-80 md:text-left">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/transfers/bishkek-to-osh" className="hover:text-emerald-600">EN: Bishkek → Osh</a>
              <a href="/transfers/almaty-to-karakol" className="hover:text-emerald-600">EN: Almaty → Karakol</a>
              <a href="/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">EN: Manas → Karakol</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ru/transfers/bishkek-to-osh" className="hover:text-emerald-600">RU: Бишкек → Ош</a>
              <a href="/ru/transfers/almaty-to-karakol" className="hover:text-emerald-600">RU: Алматы → Каракол</a>
              <a href="/ru/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">RU: Манас → Каракол</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ko/transfers/bishkek-to-osh" className="hover:text-emerald-600">KO: 비슈케크 → 오쉬</a>
              <a href="/ko/transfers/almaty-to-karakol" className="hover:text-emerald-600">KO: 알마티 → 카라콜</a>
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

      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 shadow-2xl md:hidden">
        <div className="flex gap-2">
          <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-3 py-3 text-sm font-semibold text-white hover:bg-sky-600">
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
