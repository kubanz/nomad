"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { MessageCircle, Send, MapPin } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import type { MapStop } from "../components/InteractiveRouteMap";
import RelatedRoutes from "../components/RelatedRoutes";

const InteractiveRouteMap = dynamic(
  () => import("../components/InteractiveRouteMap"),
  { ssr: false }
);

const LANG_ROUTES: Record<"en" | "ru" | "ko", string> = {
  en: "/transfers/bishkek-to-cholpon-ata",
  ru: "/ru/transfers/bishkek-to-cholpon-ata",
  ko: "/ko/transfers/bishkek-to-cholpon-ata",
};

const BISHKEK_MAP_STOPS: MapStop[] = [
  { id: 0, lat: 42.8746, lng: 74.5698, name: "Bishkek",               desc: "Start · Hotel pickup",        day: 1, time: "09:00", type: "start" },
  { id: 1, lat: 42.7394, lng: 75.2525, name: "Burana Tower",          desc: "Optional stop · ~40 min",     day: 1, time: "10:30" },
  { id: 2, lat: 42.5978, lng: 75.8500, name: "Boom Gorge",            desc: "Scenic canyon · photo stop",  day: 1, time: "12:00" },
  { id: 3, lat: 42.6000, lng: 76.9000, name: "Issyk-Kul North Shore", desc: "Panoramic lake drive",         day: 1, time: "13:30" },
  { id: 4, lat: 42.6505, lng: 77.0817, name: "Cholpon-Ata",               desc: "End · Hotel drop-off",         day: 1, time: "14:00", type: "end" },
];

interface TimelineStop {
  day: string; time: string;
  place: { en: string; ru: string; ko: string };
  sub:   { en: string; ru: string; ko: string };
  type?: "start" | "end" | "overnight";
}

const TIMELINE: TimelineStop[] = [
  { day: "Day 1", time: "09:00", place: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" }, sub: { en: "Start · Hotel pickup", ru: "Старт · Отель", ko: "출발 · 호텔 픽업" }, type: "start" },
  { day: "Day 1", time: "10:30", place: { en: "Burana Tower", ru: "Башня Бурана", ko: "부라나 탑" }, sub: { en: "Optional stop · +$15", ru: "Опция · +$15", ko: "선택 정류장 · +$15" } },
  { day: "Day 1", time: "12:00", place: { en: "Boom Gorge", ru: "Боомское ущелье", ko: "붐 협곡" }, sub: { en: "Scenic canyon · photo stop", ru: "Живописный каньон · фотостоп", ko: "경치 협곡 · 포토 스톱" } },
  { day: "Day 1", time: "13:30", place: { en: "Issyk-Kul North Shore", ru: "Сев. берег Иссык-Куля", ko: "이식쿨 북쪽 해안" }, sub: { en: "Panoramic lake drive", ru: "Панорамный вид озера", ko: "호수 파노라마 드라이브" } },
  { day: "Day 1", time: "16:00", place: { en: "Cholpon-Ata", ru: "Чолпон-Ата", ko: "촐폰아타" }, sub: { en: "End · Hotel drop-off", ru: "Финиш · Отель", ko: "종료 · 호텔 하차" }, type: "end" },
];

interface Stop {
  day: string; time: string;
  title: { en: string; ru: string; ko: string };
  desc:  { en: string; ru: string; ko: string };
  image: string; mapUrl: string;
}

const STOPS: Stop[] = [
  {
    day: "DAY 1", time: "10:30",
    title: { en: "Burana Tower", ru: "Башня Бурана", ko: "부라나 탑" },
    desc: {
      en: "An 11th-century minaret near the ancient city of Balasagun — one of the oldest surviving structures in Central Asia. Small open-air museum with ancient stone sculptures (balbals). Add this stop for +$15 (sedan) or +$20 (minivan).",
      ru: "Минарет XI века у стен древнего города Баласагун — одно из старейших сооружений Центральной Азии. Небольшой музей под открытым небом с древними балбалами. +$15 (седан) или +$20 (минивэн).",
      ko: "발라사군 고대 도시 근처의 11세기 미나렛 — 중앙아시아에서 가장 오래된 건축물 중 하나. 발발(고대 석상) 야외 박물관. +$15(세단) 또는 +$20(미니밴) 추가.",
    },
    image: "", mapUrl: "#route-map",
  },
  {
    day: "DAY 1", time: "12:00",
    title: { en: "Boom Gorge", ru: "Боомское ущелье", ko: "붐 협곡" },
    desc: {
      en: "A dramatic river canyon where the Chu River cuts through the Kyrgyz Range. The road winds between towering rock walls with the turquoise river below. One of the most scenic stretches of the Bishkek–Cholpon-Ata highway. Photo stop included.",
      ru: "Живописное ущелье, где река Чу прорезает Киргизский хребет. Дорога петляет между скалами, а внизу — бирюзовая река. Один из красивейших участков трассы Бишкек–Чолпон-Ата. Фотостоп включён.",
      ko: "추 강이 키르기스 산맥을 가로지르는 극적인 협곡. 도로가 높은 암벽 사이를 구불구불 지나며 청록빛 강이 흐릅니다. 비슈케크-촐폰아타 고속도로에서 가장 경치 좋은 구간. 포토 스톱 포함.",
    },
    image: "", mapUrl: "#route-map",
  },
  {
    day: "DAY 1", time: "13:30",
    title: { en: "Issyk-Kul North Shore Drive", ru: "Северный берег Иссык-Куля", ko: "이식쿨 북쪽 해안 드라이브" },
    desc: {
      en: "The northern shore of Issyk-Kul Lake offers panoramic views of Central Asia's largest alpine lake. Crystal-clear water stretching to the horizon, framed by snow-capped Tien-Shan peaks. One of the most beautiful drives in Kyrgyzstan.",
      ru: "Северный берег Иссык-Куля открывает панорамные виды на крупнейшее горное озеро Центральной Азии. Кристально чистая вода и заснеженные вершины Тянь-Шаня. Один из красивейших маршрутов Кыргызстана.",
      ko: "이식쿨 호수 북쪽 해안은 중앙아시아 최대의 고산 호수 전경을 제공합니다. 수평선까지 맑은 물과 눈 덮인 천산 봉우리. 키르기스스탄에서 가장 아름다운 드라이브 코스.",
    },
    image: "", mapUrl: "#route-map",
  },
  {
    day: "DAY 1", time: "On request",
    title: { en: "Premium Optional Stops", ru: "Дополнительные остановки", ko: "프리미엄 선택 정류장" },
    desc: {
      en: "Cholpon-Ata Petroglyphs, Rukh Ordo Cultural Center, Grigoriev Gorge, Semenov Gorge, or Jeti-Oguz (extended route). Available on request — ask us for custom pricing via WhatsApp.",
      ru: "Петроглифы Чолпон-Аты, «Рух Ордо», ущелья Григорьевское и Семёновское, или Джеты-Огуз. По запросу — уточняйте цену в WhatsApp.",
      ko: "촐폰-아타 암각화, 루흐 오르도 문화센터, 그리고리예프·세묘노프 협곡, 제티-오구즈(연장). WhatsApp으로 맞춤 가격 문의.",
    },
    image: "", mapUrl: "#route-map",
  },
];

const WHATSAPP_PHONE = "+996552291808";
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I'm interested in the Bishkek → Cholpon-Ata private transfer. Please share availability and price."
)}`;
const WA_LINK_SIMPLE = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I need a simple transfer from Bishkek to Cholpon-Ata. Please share availability and price."
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
    title:   { en: "Bishkek to Cholpon-Ata — Private Transfer", ru: "Бишкек — Чолпон-Ата: Приватный трансфер", ko: "비슈케크 → 촐폰아타 프라이빗 이동" },
    desc:    { en: "Need to get from Bishkek to Cholpon-Ata quickly and comfortably? We pick you up from your hotel in Bishkek and drop you off at your hotel in Cholpon-Ata. Along the way you can stop 2–3 times for 10–15 min to take photos.", ru: "Нужно быстро добраться из Бишкека в Чолпон-Ату? Забираем из отеля в Бишкеке, довезём до отеля в Чолпон-Ате. По дороге можно остановиться 2–3 раза на 10–15 мин для фотографий.", ko: "비슈케크에서 촐폰아타까지 빠르고 편안하게 이동하고 싶으신가요? 비슈케크 호텔에서 픽업하여 촐폰아타 호텔까지 모셔드립니다. 도중에 2~3번 10~15분 포토 정차 가능합니다." },
    sedan:   { en: "SEDAN",   ru: "СЕДАН",   ko: "세단" },
    minivan: { en: "MINIVAN", ru: "МИНИВЭН", ko: "미니밴" },
    per4:    { en: "up to 4 passengers", ru: "до 4 пассажиров", ko: "최대 4명" },
    per7:    { en: "6–7 passengers",     ru: "6–7 пассажиров",  ko: "6–7명" },
    busNote: { en: "For groups of 8+ passengers, bus option available from $235. Ask when booking.", ru: "Для групп от 8 человек — автобус от $235. Уточняйте при бронировании.", ko: "8인 이상 그룹은 버스 옵션 $235부터. 예약 시 문의하세요." },
    wa:      { en: "Book Simple Transfer via WhatsApp", ru: "Забронировать трансфер в WhatsApp", ko: "WhatsApp으로 이동 예약" },
  };

  const pills = [
    { icon: "📍", text: "Bishkek → Cholpon-Ata" },
    { icon: "🕐", text: "~3–4 hours" },
    { icon: "📏", text: "~250 km" },
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
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$115 <span className="text-lg">USD</span></p>
          <p className="mt-1 text-xs text-slate-500">{T.per4[lang]}</p>
        </div>
        <div className="relative rounded-2xl border-2 border-amber-400 bg-white p-5 text-center shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">{T.minivan[lang]}</span>
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$145 <span className="text-lg">USD</span></p>
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
    body:     { en: "Turn your Bishkek → Cholpon-Ata drive into an adventure. Stop at Burana Tower, drive through Boom Gorge, cruise along Issyk-Kul's northern shore. Same route — unforgettable experience.", ru: "Превратите поездку из Бишкека в Чолпон-Ату в незабываемое приключение. Башня Бурана, Боомское ущелье, северный берег Иссык-Куля. Тот же маршрут — незабываемые впечатления.", ko: "비슈케크에서 촐폰아타까지의 드라이브를 모험으로 만들어보세요. 부라나 탑, 붐 협곡, 이식쿨 북쪽 해안. 같은 노선 — 잊을 수 없는 경험." },
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
  { key: "burana" as const,  price: { sedan: 15, minivan: 20 }, label: { en: "Burana Tower stop", ru: "Остановка у Башни Бурана", ko: "부라나 탑 정류장" }, sub: { en: "11th-century minaret · ~40 min visit", ru: "Минарет XI века · ~40 мин", ko: "11세기 미나렛 · 약 40분" } },
  { key: "cholpon" as const, price: { sedan: 20, minivan: 25 }, label: { en: "Cholpon-Ata sightseeing", ru: "Осмотр Чолпон-Аты", ko: "촐폰-아타 관광" }, sub: { en: "Petroglyphs or Rukh Ordo Cultural Center", ru: "Петроглифы или «Рух Ордо»", ko: "암각화 또는 루흐 오르도 문화센터" } },
];
type AddonKey = typeof ADDON_DEFS[number]["key"];

function PricingSection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const [vehicle, setVehicle] = useState<"sedan" | "minivan">("sedan");
  const [addons, setAddons] = useState<Record<AddonKey, boolean>>({ burana: false, cholpon: false });

  const BASE = { sedan: 115, minivan: 145 };

  const includedItems = {
    en: ["Professional local driver", "Fuel and all transportation costs", "Hotel pickup in Bishkek", "Hotel drop-off in Cholpon-Ata", "Scenic Issyk-Kul north shore drive"],
    ru: ["Профессиональный местный водитель", "Топливо и все транспортные расходы", "Трансфер из отеля в Бишкеке", "Трансфер до отеля в Чолпон-Ате", "Живописная дорога по северному берегу Иссык-Куля"],
    ko: ["전문 현지 드라이버", "연료 및 모든 교통 비용", "비슈케크 호텔 픽업", "촐폰아타 호텔 하차", "이식쿨 북쪽 해안 경관 드라이브"],
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
    ? `Здравствуйте! Хочу забронировать тур Бишкек → Чолпон-Ата.\nАвтомобиль: ${vehicleLabel[vehicle].ru} ($${basePrice})${extrasLine ? `\nОстановки: ${extrasLine}` : ""}\nИтого: $${total}. Подтвердите наличие.`
    : lang === "ko"
    ? `안녕하세요! 비슈케크→카라콜 투어를 예약하고 싶습니다.\n차량: ${vehicleLabel[vehicle].ko} ($${basePrice})${extrasLine ? `\n정류장: ${extrasLine}` : ""}\n총액: $${total}. 예약 가능 여부 확인 부탁드립니다.`
    : `Hi! I'd like to book the Bishkek → Cholpon-Ata scenic tour transfer.\nVehicle: ${vehicleLabel[vehicle].en} ($${basePrice})${extrasLine ? `\nOptional stops: ${extrasLine}` : ""}\nTotal: $${total}. Please confirm availability.`;
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
    body:     { en: "Tell us your travel plan and we will build the best route from Bishkek to Cholpon-Ata with stops, timing, and exact pricing.", ru: "Расскажите о своём плане поездки — мы составим лучший маршрут из Бишкека в Чолпон-Ату с остановками, временем и точной ценой.", ko: "여행 계획을 알려주시면 정류장, 타이밍, 정확한 가격이 포함된 최적의 비슈케크→카라콜 노선을 만들어 드립니다." },
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
          className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-800">
          <Send className="h-4 w-4" /> Telegram
        </a>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BishkekToCholponAta({ initialLang }: { initialLang?: "en" | "ru" | "ko" }) {
  const [lang, setLang] = useState<"en" | "ru" | "ko">(initialLang ?? pickLang());
  const router = useRouter();

  function handleLangChange(code: "en" | "ru" | "ko") {
    setLang(code); saveLang(code); router.push(LANG_ROUTES[code]);
  }

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader lang={lang} waLink={WA_LINK} onLangChange={handleLangChange} activeNav="transfers" />

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 text-white md:py-14">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            {lang === "ru" ? "Приватный трансфер · круглый год" : lang === "ko" ? "프라이빗 이동 · 연중 운행" : "Private Transfer · Year-round"}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">
            {lang === "ru" ? "Бишкек → Чолпон-Ата: Приватный трансфер через Бурану" : lang === "ko" ? "비슈케크 → 촐폰아타: 부라나 경유 프라이빗 이동" : "Private Transfer from Bishkek to Cholpon-Ata via Burana"}
          </h1>
          <p className="mt-2 text-sm text-white/80">
            {lang === "ru" ? "Комфортная поездка через регион Иссык-Куля с живописными остановками · ~250 км · ~3–4 часов" : lang === "ko" ? "이식쿨 지역을 경유하는 편안한 여행 · ~250km · ~3~4시간" : "Comfortable door-to-door journey through Issyk-Kul region with scenic stops along the way · ~270 km · ~4–6 hours"}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(lang === "ru" ? ["Приватный трансфер", "Гибкие остановки", "3–4 часов", "Круглый год"] : lang === "ko" ? ["프라이빗 이동", "유연한 정류장", "3~4시간", "연중 운행"] : ["Private transfer", "Flexible stops", "4–6 hours", "Year-round service"]).map(badge => (
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
                <p>Приватный трансфер из Бишкека в Чолпон-Ату — самый комфортный способ путешествия по Кыргызстану. Маршрут проходит через живописные горные пейзажи, северный берег Иссык-Куля и исторические достопримечательности.</p>
                <p>В отличие от общественного транспорта, это сервис «от двери до двери» с гибкими остановками и индивидуальным маршрутом.</p>
                <p>Для групп от 8 человек — приватный микроавтобус (от $235). Свяжитесь с нами для индивидуального расчёта цены и планирования маршрута.</p>
              </>
            ) : lang === "ko" ? (
              <>
                <p>비슈케크에서 촐폰아타까지의 프라이빗 이동은 키르기스스탄을 여행하는 가장 편안한 방법입니다. 경치 좋은 산악 경관, 이식쿨 북쪽 해안, 역사적 명소를 지나는 노선입니다.</p>
                <p>대중교통과 달리 유연한 정류장과 맞춤 일정을 갖춘 도어 투 도어 서비스입니다.</p>
                <p>8인 이상 그룹의 경우 프라이빗 미니버스($235부터)가 있습니다. 그룹 가격 및 노선 계획 문의는 연락해 주세요.</p>
              </>
            ) : (
              <>
                <p>Private transfer from Bishkek to Cholpon-Ata is the most comfortable way to travel across Kyrgyzstan. The route passes through scenic mountain landscapes, the northern shore of Issyk-Kul Lake, and historic landmarks along the way.</p>
                <p>Unlike public transport, this is a door-to-door service with flexible stops and personalized itinerary.</p>
                <p>For groups of 8+ passengers, private minibus available from $235. Please contact us for custom group pricing and route planning.</p>
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
              ? "Трансфер Бишкек — Чолпон-Ата — самый удобный способ добраться до Иссык-Куля. Маршрут проходит через Башню Бурана, Боомское ущелье и живописный северный берег Иссык-Куля. Гибкие остановки и приватный транспорт делают этот вариант лучшим для семей и путешественников, ценящих комфорт."
              : lang === "ko"
              ? "비슈케크에서 촐폰아타까지의 프라이빗 이동은 이식쿨 지역에 도달하는 가장 편안한 방법입니다. 부라나 탑, 붐 협곡, 이식쿨 북쪽 해안선을 지나는 노선입니다. 유연한 정류장과 프라이빗 이동으로 가족과 편안함을 원하는 여행자에게 최고의 선택입니다."
              : "Bishkek to Cholpon-Ata private transfer is the most comfortable way to reach Cholpon-Ata on Issyk-Kul. The route passes through Burana Tower, Boom Gorge, and scenic northern Issyk-Kul coastline. Flexible stops and private transport make this the best option for families and travelers seeking comfort."}
          </p>
        </section>

        <RelatedRoutes currentSlug="bishkek-to-cholpon-ata" lang={lang} />
      </main>

      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
          <p className="text-xs opacity-80">© {new Date().getFullYear()} {BRAND}</p>
          <nav className="flex flex-col gap-2 text-center text-xs opacity-80 md:text-left">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/transfers/bishkek-to-cholpon-ata" className="hover:text-emerald-600">EN: Bishkek → Cholpon-Ata</a>
              <a href="/transfers/almaty-to-karakol" className="hover:text-emerald-600">EN: Almaty → Karakol</a>
              <a href="/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">EN: Manas → Karakol</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ru/transfers/bishkek-to-cholpon-ata" className="hover:text-emerald-600">RU: Бишкек → Чолпон-Ата</a>
              <a href="/ru/transfers/almaty-to-karakol" className="hover:text-emerald-600">RU: Алматы → Каракол</a>
              <a href="/ru/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">RU: Манас → Каракол</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ko/transfers/bishkek-to-cholpon-ata" className="hover:text-emerald-600">KO: 비슈케크 → 촐폰아타</a>
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
