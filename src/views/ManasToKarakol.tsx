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
  en: "/transfers/manas-airport-to-karakol",
  ru: "/ru/transfers/manas-airport-to-karakol",
  ko: "/ko/transfers/manas-airport-to-karakol",
};

const BISHKEK_MAP_STOPS: MapStop[] = [
  { id: 0, lat: 43.0613, lng: 74.4776, name: "Manas Airport (FRU)",   desc: "Start · Meet & Greet at arrivals",  day: 1, time: "On arrival", type: "start" },
  { id: 1, lat: 42.7394, lng: 75.2525, name: "Burana Tower",          desc: "Optional stop · ~40 min",           day: 1, time: "+2h" },
  { id: 2, lat: 42.5978, lng: 75.8500, name: "Boom Gorge",            desc: "Scenic canyon · photo stop",        day: 1, time: "+3h" },
  { id: 3, lat: 42.6000, lng: 76.9000, name: "Issyk-Kul North Shore", desc: "Panoramic lake drive",              day: 1, time: "+4h" },
  { id: 4, lat: 42.4900, lng: 78.3936, name: "Karakol",               desc: "End · Hotel drop-off",              day: 1, time: "+5h", type: "end" },
];

interface TimelineStop {
  day: string; time: string;
  place: { en: string; ru: string; ko: string };
  sub:   { en: string; ru: string; ko: string };
  type?: "start" | "end" | "overnight";
}

const TIMELINE: TimelineStop[] = [
  { day: "Day 1", time: "Arrival", place: { en: "Manas Airport (FRU)", ru: "Аэропорт Манас (FRU)", ko: "마나스 공항 (FRU)" }, sub: { en: "Meet & Greet · name board", ru: "Встреча · табличка", ko: "환영 · 이름판" }, type: "start" },
  { day: "Day 1", time: "+2h", place: { en: "Burana Tower", ru: "Башня Бурана", ko: "부라나 탑" }, sub: { en: "Optional stop · +$15", ru: "Опция · +$15", ko: "선택 정류장 · +$15" } },
  { day: "Day 1", time: "+3h", place: { en: "Boom Gorge", ru: "Боомское ущелье", ko: "붐 협곡" }, sub: { en: "Scenic canyon · photo stop", ru: "Живописный каньон · фотостоп", ko: "경치 협곡 · 포토 스톱" } },
  { day: "Day 1", time: "+4h", place: { en: "Issyk-Kul North Shore", ru: "Сев. берег Иссык-Куля", ko: "이식쿨 북쪽 해안" }, sub: { en: "Panoramic lake drive", ru: "Панорамный вид озера", ko: "호수 파노라마 드라이브" } },
  { day: "Day 1", time: "+5h", place: { en: "Karakol", ru: "Каракол", ko: "카라콜" }, sub: { en: "End · Hotel drop-off", ru: "Финиш · Отель", ko: "종료 · 호텔 하차" }, type: "end" },
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
      en: "A dramatic river canyon where the Chu River cuts through the Kyrgyz Range. The road winds between towering rock walls with the turquoise river below. One of the most scenic stretches of the Bishkek–Karakol highway. Photo stop included.",
      ru: "Живописное ущелье, где река Чу прорезает Киргизский хребет. Дорога петляет между скалами, а внизу — бирюзовая река. Один из красивейших участков трассы Бишкек–Каракол. Фотостоп включён.",
      ko: "추 강이 키르기스 산맥을 가로지르는 극적인 협곡. 도로가 높은 암벽 사이를 구불구불 지나며 청록빛 강이 흐릅니다. 비슈케크-카라콜 고속도로에서 가장 경치 좋은 구간. 포토 스톱 포함.",
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
  "Hi! I'm interested in the Manas Airport → Karakol private transfer. My flight number is: ____. Please share availability and price."
)}`;
const WA_LINK_SIMPLE = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I need an airport transfer from Manas (FRU) to Karakol. Flight number: ____. Please confirm Meet & Greet and price."
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
    title:   { en: "Manas Airport → Karakol — Private Transfer", ru: "Аэропорт Манас → Каракол: Приватный трансфер", ko: "마나스 공항 → 카라콜 프라이빗 이동" },
    desc:    { en: "Land at Manas (FRU) and head straight to Karakol. Driver meets you at arrivals with a name board, helps with luggage, and drives door-to-door to your hotel in Karakol. 60-minute free waiting included for flight delays. Available 24/7.", ru: "Прилетели в Манас (FRU) — сразу едем в Каракол. Водитель встречает вас в зоне прилёта с табличкой, помогает с багажом и довозит до отеля в Каракол. Бесплатное ожидание 60 минут на случай задержки рейса. Сервис 24/7.", ko: "마나스(FRU)에 도착하면 바로 카라콜로 출발. 기사가 도착 게이트에서 이름판을 들고 마중 나와 짐을 도와드리고 카라콜 호텔까지 도어 투 도어로 모셔드립니다. 항공편 지연 대비 60분 무료 대기 포함. 24시간 운영." },
    sedan:   { en: "SEDAN",   ru: "СЕДАН",   ko: "세단" },
    minivan: { en: "MINIVAN", ru: "МИНИВЭН", ko: "미니밴" },
    per4:    { en: "up to 4 passengers", ru: "до 4 пассажиров", ko: "최대 4명" },
    per7:    { en: "6–7 passengers",     ru: "6–7 пассажиров",  ko: "6–7명" },
    busNote: { en: "For groups of 8+ passengers, bus option available from $275. Night surcharge 22:00–06:00 +15%. Ask when booking.", ru: "Для групп от 8 человек — автобус от $275. Ночная доплата 22:00–06:00 +15%. Уточняйте при бронировании.", ko: "8인 이상 그룹은 버스 옵션 $275부터. 야간 할증 22:00~06:00 +15%. 예약 시 문의하세요." },
    wa:      { en: "Book Simple Transfer via WhatsApp", ru: "Забронировать трансфер в WhatsApp", ko: "WhatsApp으로 이동 예약" },
  };

  const pills = [
    { icon: "✈️", text: "Manas (FRU) → Karakol" },
    { icon: "🕐", text: "~5 hours" },
    { icon: "📏", text: "~410 km" },
    { icon: "🛂", text: "Meet & Greet" },
    { icon: "📅", text: "24/7" },
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
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$146 <span className="text-lg">USD</span></p>
          <p className="mt-1 text-xs text-slate-500">{T.per4[lang]}</p>
        </div>
        <div className="relative rounded-2xl border-2 border-amber-400 bg-white p-5 text-center shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-amber-400 px-4 py-1 text-xs font-bold uppercase tracking-widest text-slate-900">{T.minivan[lang]}</span>
          </div>
          <p className="mt-3 text-3xl font-extrabold text-slate-900">$177 <span className="text-lg">USD</span></p>
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
    headline: { en: "✨ Turn your airport ride into a journey", ru: "✨ Превратите трансфер в путешествие", ko: "✨ 공항 이동을 여행으로 만들어보세요" },
    body:     { en: "Already flying into Manas? Make the drive to Karakol unforgettable. Stop at Burana Tower, drive through Boom Gorge, cruise along Issyk-Kul's northern shore. Same route — first taste of Kyrgyzstan.", ru: "Прилетели в Манас? Сделайте дорогу до Каракола незабываемой. Башня Бурана, Боомское ущелье, северный берег Иссык-Куля — первое знакомство с Кыргызстаном уже в пути.", ko: "마나스에 도착하셨나요? 카라콜까지의 드라이브를 잊을 수 없게 만들어보세요. 부라나 탑, 붐 협곡, 이식쿨 북쪽 해안 — 키르기스스탄의 첫인상을 이동 중에 만끽하세요." },
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

  const BASE = { sedan: 146, minivan: 177 };

  const includedItems = {
    en: ["Professional English-speaking driver", "Meet & Greet with name board at arrivals", "60 minutes free waiting (flight delays)", "Fuel and all transportation costs", "Door-to-door drop-off at Karakol hotel", "Flight tracking via your flight number"],
    ru: ["Профессиональный водитель с английским", "Встреча с табличкой в зоне прилёта", "60 минут бесплатного ожидания (задержки)", "Топливо и все транспортные расходы", "Трансфер до отеля в Каракол", "Отслеживание рейса по номеру"],
    ko: ["영어 가능 전문 드라이버", "도착장에서 이름판 환영", "60분 무료 대기 (항공편 지연)", "연료 및 모든 교통 비용", "카라콜 호텔까지 도어 투 도어", "항공편 번호로 비행 추적"],
  };
  const notIncluded = {
    en: ["Meals and drinks", "Entry fees to attractions", "Personal travel insurance"],
    ru: ["Питание и напитки", "Входные билеты на достопримечательности", "Личная туристическая страховка"],
    ko: ["식사 및 음료", "관광지 입장료", "개인 여행 보험"],
  };
  const whyChoose = {
    en: ["24/7 airport pickups", "Flight tracking included", "60-min free waiting", "Name-board Meet & Greet", "Fixed price — no surge", "Child seats available"],
    ru: ["Встречаем 24/7", "Отслеживание рейса", "60 мин ожидания бесплатно", "Табличка с именем", "Фиксированная цена", "Детские кресла"],
    ko: ["24시간 공항 픽업", "항공편 추적 포함", "60분 무료 대기", "이름판 환영", "고정 가격 — 추가 없음", "어린이 카시트 가능"],
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
    ? `Здравствуйте! Бронирую трансфер Манас (FRU) → Каракол.\nНомер рейса: ____\nАвтомобиль: ${vehicleLabel[vehicle].ru} ($${basePrice})${extrasLine ? `\nОстановки: ${extrasLine}` : ""}\nИтого: $${total}. Подтвердите наличие.`
    : lang === "ko"
    ? `안녕하세요! 마나스(FRU) → 카라콜 이동 예약합니다.\n항공편 번호: ____\n차량: ${vehicleLabel[vehicle].ko} ($${basePrice})${extrasLine ? `\n정류장: ${extrasLine}` : ""}\n총액: $${total}. 예약 가능 여부 확인 부탁드립니다.`
    : `Hi! I'd like to book the Manas Airport (FRU) → Karakol transfer.\nFlight number: ____\nVehicle: ${vehicleLabel[vehicle].en} ($${basePrice})${extrasLine ? `\nOptional stops: ${extrasLine}` : ""}\nTotal: $${total}. Please confirm availability.`;
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
    headline: { en: "Have a flight number? Send it to us.", ru: "Знаете номер рейса? Отправьте нам.", ko: "항공편 번호가 있으신가요? 보내주세요." },
    body:     { en: "Send your flight number via WhatsApp and we'll track your arrival, prepare the Meet & Greet, and confirm the exact pickup time. Available 24/7 — including night flights.", ru: "Отправьте номер рейса в WhatsApp — отследим прилёт, подготовим встречу с табличкой и подтвердим точное время. Работаем 24/7, в том числе ночные рейсы.", ko: "WhatsApp으로 항공편 번호를 보내주시면 도착을 추적하고 이름판 환영 준비와 정확한 픽업 시간을 확정해드립니다. 야간 항공편 포함 24시간 운영." },
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

export default function ManasToKarakol({ initialLang }: { initialLang?: "en" | "ru" | "ko" }) {
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
            {lang === "ru" ? "Аэропортовый трансфер · 24/7" : lang === "ko" ? "공항 이동 · 24시간" : "Airport Transfer · 24/7"}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">
            {lang === "ru" ? "Аэропорт Манас (FRU) → Каракол: Приватный трансфер" : lang === "ko" ? "마나스 공항 (FRU) → 카라콜: 프라이빗 이동" : "Manas Airport (FRU) to Karakol Private Transfer"}
          </h1>
          <p className="mt-2 text-sm text-white/80">
            {lang === "ru" ? "Встреча с табличкой в зоне прилёта · 60 мин бесплатного ожидания · ~410 км · ~5 часов" : lang === "ko" ? "도착장에서 이름판 환영 · 60분 무료 대기 · ~410km · ~5시간" : "Meet & Greet at arrivals with name board · 60-min free waiting · ~410 km · ~5 hours"}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(lang === "ru" ? ["Meet & Greet", "Отслеживание рейса", "60 мин ожидания", "24/7"] : lang === "ko" ? ["Meet & Greet", "항공편 추적", "60분 대기", "24시간"] : ["Meet & Greet", "Flight tracking", "60-min waiting", "24/7 service"]).map(badge => (
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
                <p>Приватный аэропортовый трансфер из Манаса (FRU) в Каракол — самый удобный способ начать путешествие по Кыргызстану после прилёта. Мы отслеживаем рейс по номеру, встречаем в зоне прилёта с табличкой и довозим до отеля в Каракол.</p>
                <p>Бесплатное ожидание 60 минут на случай задержки рейса или прохождения паспортного контроля. Маршрут идёт в обход Бишкека через северный берег Иссык-Куля — около 410 км и 5 часов в пути.</p>
                <p>Сервис работает 24/7, включая ночные рейсы (доплата 22:00–06:00 +15%). Для групп от 8 человек — автобус от $275. Принимаем флайт-номер заранее в WhatsApp.</p>
              </>
            ) : lang === "ko" ? (
              <>
                <p>마나스(FRU)에서 카라콜까지의 프라이빗 공항 이동은 키르기스스탄 도착 후 가장 편안하게 여행을 시작하는 방법입니다. 항공편 번호로 비행을 추적하고, 도착장에서 이름판으로 환영하며, 카라콜 호텔까지 모셔드립니다.</p>
                <p>항공편 지연이나 입국 심사 대비 60분 무료 대기 포함. 노선은 비슈케크를 우회해 이식쿨 북쪽 해안을 따라 약 410km, 5시간 소요.</p>
                <p>야간 항공편(22:00~06:00 +15%) 포함 24시간 운영. 8인 이상 그룹은 버스 $275부터. WhatsApp으로 항공편 번호를 미리 보내주세요.</p>
              </>
            ) : (
              <>
                <p>Private airport transfer from Manas (FRU) to Karakol is the most comfortable way to start your trip in Kyrgyzstan. We track your flight by number, meet you at arrivals with a name board, and drive you door-to-door to your hotel in Karakol.</p>
                <p>60 minutes of free waiting is included for flight delays or passport control. The route bypasses Bishkek along the scenic northern shore of Issyk-Kul — about 410 km and 5 hours total.</p>
                <p>Service operates 24/7, including night flights (22:00–06:00 surcharge +15%). For groups of 8+, bus option from $275. Send us your flight number in advance via WhatsApp.</p>
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
              ? "Аэропортовый трансфер Манас (FRU) — Каракол с встречей в зоне прилёта, отслеживанием рейса и фиксированной ценой за автомобиль. Идеальный выбор для прибывающих ночными или утренними рейсами в Бишкек, кто хочет сразу попасть на Иссык-Куль без пересадок и такси."
              : lang === "ko"
              ? "마나스 공항(FRU)→카라콜 이동은 도착장 환영, 항공편 추적, 차량당 고정 가격으로 제공됩니다. 비슈케크에 야간 또는 아침 항공편으로 도착해 환승과 택시 없이 바로 이식쿨로 가고 싶은 여행자에게 이상적입니다."
              : "Manas Airport (FRU) to Karakol transfer with Meet & Greet at arrivals, flight tracking, and fixed price per vehicle. The ideal choice for travelers landing in Bishkek on night or early-morning flights who want to head straight to Issyk-Kul without taxis or transfers."}
          </p>
        </section>

        <RelatedRoutes currentSlug="manas-airport-to-karakol" lang={lang} />
      </main>

      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
          <p className="text-xs opacity-80">© {new Date().getFullYear()} {BRAND}</p>
          <nav className="flex flex-col gap-2 text-center text-xs opacity-80 md:text-left">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/transfers/bishkek-to-karakol" className="hover:text-emerald-600">EN: Bishkek → Karakol</a>
              <a href="/transfers/almaty-to-karakol" className="hover:text-emerald-600">EN: Almaty → Karakol</a>
              <a href="/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">EN: Manas → Karakol</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ru/transfers/bishkek-to-karakol" className="hover:text-emerald-600">RU: Бишкек → Каракол</a>
              <a href="/ru/transfers/almaty-to-karakol" className="hover:text-emerald-600">RU: Алматы → Каракол</a>
              <a href="/ru/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">RU: Манас → Каракол</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ko/transfers/bishkek-to-karakol" className="hover:text-emerald-600">KO: 비슈케크 → 카라콜</a>
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
