"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { MessageCircle, Send } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import type { MapStop } from "../components/InteractiveRouteMap";
import RelatedRoutes from "../components/RelatedRoutes";
import FAQSection from "../components/FAQSection";

const InteractiveRouteMap = dynamic(
  () => import("../components/InteractiveRouteMap"),
  { ssr: false }
);

const LANG_ROUTES: Record<"en" | "ru" | "ko", string> = {
  en: "/transfers/manas-airport-to-bishkek",
  ru: "/ru/transfers/manas-airport-to-bishkek",
  ko: "/ko/transfers/manas-airport-to-bishkek",
};

const MAP_STOPS: MapStop[] = [
  { id: 0, lat: 43.0613, lng: 74.4776, name: "Manas Airport (FRU)", desc: "Start · Meet & Greet at arrivals", day: 1, time: "On arrival", type: "start" },
  { id: 1, lat: 42.8746, lng: 74.5698, name: "Bishkek City Centre",  desc: "End · Hotel drop-off",             day: 1, time: "+40 min",   type: "end"   },
];

const WHATSAPP_PHONE = "+996552291808";
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I need an airport transfer from Manas (FRU) to Bishkek city. Flight number: ____. Please confirm Meet & Greet and price."
)}`;

const BRAND = "Nomad Transfer";

const AIRPORT_FAQ = {
  en: [
    { question: "How much is a transfer from Manas Airport to Bishkek?", answer: "A private sedan costs $35 and a minivan costs $45 per vehicle for one direct airport pickup and one Bishkek drop-off. Extra stops or additional drop-off addresses cost extra. A 15% surcharge applies to pickups between 22:00 and 06:00." },
    { question: "How will I find the driver at Manas Airport?", answer: "The driver waits in the arrivals hall after passport control and baggage claim with a name board. Send your flight number before travel." },
    { question: "What happens if my flight is delayed?", answer: "We track the flight number and adjust the pickup to the actual landing time. The service includes 60 minutes of free waiting after landing." },
    {
      question: "Can I book the return transfer from Bishkek to Manas Airport?",
      answer: "Yes. Open the return route page to see the price and plan pickup time around your flight departure and check-in.",
      href: "/transfers/bishkek-to-manas-airport",
      linkLabel: "View Bishkek to Manas Airport transfer",
    },
  ],
  ru: [
    { question: "Сколько стоит трансфер из аэропорта Манас в Бишкек?", answer: "Приватный седан стоит $35, минивэн — $45 за автомобиль при прямой поездке из аэропорта до одного адреса в Бишкеке. Дополнительные заезды и адреса оплачиваются отдельно. Для пикапов с 22:00 до 06:00 действует доплата 15%." },
    { question: "Как найти водителя в аэропорту?", answer: "Водитель ждёт в зоне прилёта после паспортного контроля и багажа с табличкой с вашим именем. Заранее отправьте номер рейса." },
    { question: "Что будет при задержке рейса?", answer: "Мы отслеживаем номер рейса и корректируем время встречи по фактической посадке. Включено 60 минут бесплатного ожидания." },
    {
      question: "Можно заказать обратный трансфер Бишкек — Манас?",
      answer: "Да. Откройте страницу обратного маршрута, чтобы посмотреть цену и рассчитать время подачи относительно вылета и регистрации.",
      href: "/ru/transfers/bishkek-to-manas-airport",
      linkLabel: "Открыть трансфер Бишкек — аэропорт Манас",
    },
  ],
  ko: [
    { question: "마나스 공항에서 비슈케크 이동 요금은 얼마인가요?", answer: "공항 픽업 후 비슈케크의 한 주소까지 직접 이동하는 차량당 요금은 세단 $35, 미니밴 $45입니다. 추가 경유지나 하차 주소는 별도 요금이 적용됩니다. 22:00~06:00 픽업에는 15% 야간 할증이 적용됩니다." },
    { question: "마나스 공항에서 기사를 어떻게 찾나요?", answer: "기사가 여권 심사와 수하물 수취 후 도착장에서 이름판을 들고 기다립니다. 출발 전에 항공편 번호를 보내주세요." },
    { question: "항공편이 지연되면 어떻게 되나요?", answer: "항공편 번호를 추적하여 실제 착륙 시간에 맞춰 픽업을 조정합니다. 착륙 후 60분 무료 대기가 포함됩니다." },
    {
      question: "비슈케크에서 마나스 공항으로 돌아가는 이동도 예약할 수 있나요?",
      answer: "네. 돌아가는 노선 페이지에서 요금을 확인하고 항공편 출발 및 체크인 시간에 맞춰 픽업 시간을 계획할 수 있습니다.",
      href: "/ko/transfers/bishkek-to-manas-airport",
      linkLabel: "비슈케크 → 마나스 공항 이동 보기",
    },
  ],
};

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

// ─── Route Info ───────────────────────────────────────────────────────────────

function RouteInfoSection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const T = {
    en: {
      title: "Route Details",
      items: [
        { icon: "🛫", label: "From",        value: "Manas International Airport (FRU)" },
        { icon: "📍", label: "To",          value: "Bishkek city centre" },
        { icon: "📏", label: "Distance",    value: "30 km" },
        { icon: "🕐", label: "Drive Time",  value: "~30–40 min (traffic-dependent)" },
        { icon: "💵", label: "Price",       value: "Sedan $35 · Minivan $45" },
        { icon: "🌙", label: "Night Hours", value: "22:00–06:00 surcharge +15%" },
      ],
    },
    ru: {
      title: "Информация о маршруте",
      items: [
        { icon: "🛫", label: "Откуда",        value: "Международный аэропорт Манас (FRU)" },
        { icon: "📍", label: "Куда",          value: "Центр Бишкека" },
        { icon: "📏", label: "Расстояние",    value: "30 км" },
        { icon: "🕐", label: "Время в пути",  value: "~30–40 мин (зависит от пробок)" },
        { icon: "💵", label: "Цена",          value: "Седан $35 · Минивэн $45" },
        { icon: "🌙", label: "Ночные часы",   value: "22:00–06:00 доплата +15%" },
      ],
    },
    ko: {
      title: "노선 정보",
      items: [
        { icon: "🛫", label: "출발지",    value: "마나스 국제공항 (FRU)" },
        { icon: "📍", label: "도착지",    value: "비슈케크 시내" },
        { icon: "📏", label: "거리",      value: "30 km" },
        { icon: "🕐", label: "소요시간",  value: "~30–40분 (교통 상황에 따라)" },
        { icon: "💵", label: "요금",      value: "세단 $35 · 미니밴 $45" },
        { icon: "🌙", label: "야간 시간", value: "22:00–06:00 할증 +15%" },
      ],
    },
  };
  const t = T[lang];
  return (
    <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-5 text-xl font-bold">{t.title}</h2>
      <dl className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {t.items.map(({ icon, label, value }) => (
          <div key={label} className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">
            <span className="text-2xl">{icon}</span>
            <div>
              <dt className="text-xs font-bold uppercase tracking-wide text-slate-400">{label}</dt>
              <dd className="mt-0.5 text-sm font-semibold text-slate-800">{value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function PricingSection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const [vehicle, setVehicle] = useState<"sedan" | "minivan">("sedan");

  const BASE = { sedan: 35, minivan: 45 };

  const includedItems = {
    en: [
      "Professional English-speaking driver",
      "Meet & Greet with name board at arrivals",
      "60 minutes free waiting (flight delays)",
      "Fuel and all transportation costs",
      "Door-to-door drop-off at your hotel in Bishkek",
      "Flight tracking via your flight number",
    ],
    ru: [
      "Профессиональный водитель с английским",
      "Встреча с табличкой в зоне прилёта",
      "60 минут бесплатного ожидания (задержки)",
      "Топливо и все транспортные расходы",
      "Трансфер до отеля в Бишкеке",
      "Отслеживание рейса по номеру",
    ],
    ko: [
      "영어 가능 전문 드라이버",
      "도착장에서 이름판 환영",
      "60분 무료 대기 (항공편 지연)",
      "연료 및 모든 교통 비용",
      "비슈케크 호텔까지 도어 투 도어",
      "항공편 번호로 비행 추적",
    ],
  };

  const notIncluded = {
    en: ["Meals and drinks", "Entry fees to attractions", "Personal travel insurance"],
    ru: ["Питание и напитки", "Входные билеты на достопримечательности", "Личная туристическая страховка"],
    ko: ["식사 및 음료", "관광지 입장료", "개인 여행 보험"],
  };

  const whyChoose = {
    en: ["24/7 airport pickups", "Flight tracking included", "60-min free waiting", "Name-board Meet & Greet", "Fixed price — no surge", "Child seats available"],
    ru: ["Встречаем 24/7", "Отслеживание рейса", "60 мин ожидания бесплатно", "Табличка с именем", "Фиксированная цена", "Детские кресла"],
    ko: ["24시간 공항 픽업", "항공편 추적 포함", "60분 무료 대기", "이름판 환영", "직행 기준 고정 요금", "어린이 카시트 가능"],
  };

  const T = {
    title:         { en: "Transfer Price",              ru: "Стоимость трансфера",      ko: "이동 요금" },
    chooseVehicle: { en: "Choose your vehicle",          ru: "Выберите автомобиль",       ko: "차량 선택" },
    sedan:         { en: "SEDAN",                       ru: "СЕДАН",                    ko: "세단" },
    minivan:       { en: "MINIVAN",                     ru: "МИНИВЭН",                  ko: "미니밴" },
    per4:          { en: "up to 4 passengers",          ru: "до 4 пассажиров",           ko: "최대 4명" },
    per7:          { en: "6–7 passengers",              ru: "6–7 пассажиров",            ko: "6–7명" },
    nightNote:     { en: "Night surcharge (22:00–06:00): +15%", ru: "Ночная доплата (22:00–06:00): +15%", ko: "야간 할증 (22:00~06:00): +15%" },
    directNote:    {
      en: "Price covers one direct airport pickup and one drop-off address in Bishkek. Extra stops or additional addresses are charged separately. Group vehicle price is available on request.",
      ru: "Цена действует для прямой поездки из аэропорта до одного адреса в Бишкеке. Дополнительные заезды и адреса оплачиваются отдельно. Цена группового транспорта — по запросу.",
      ko: "요금은 공항 픽업 후 비슈케크의 한 주소까지 직접 이동하는 기준입니다. 추가 경유지나 주소는 별도 요금이 적용됩니다. 단체 차량 요금은 문의해 주세요.",
    },
    totalLabel:    { en: "Your total",                  ru: "Итого",                    ko: "총 금액" },
    included:      { en: "What's included",             ru: "Что включено",              ko: "포함 사항" },
    notIncl:       { en: "Not Included",                ru: "Не включено",               ko: "미포함 사항" },
    why:           { en: "Why Choose This Transfer?",   ru: "Почему этот трансфер?",     ko: "이 이동을 선택하는 이유?" },
    wa:            { en: "Book via WhatsApp",           ru: "Забронировать в WhatsApp", ko: "WhatsApp으로 예약" },
    tg:            { en: "Book via Telegram",           ru: "Забронировать в Telegram", ko: "Telegram으로 예약" },
  };

  const total = BASE[vehicle];
  const vehicleLabel = { sedan: { en: "Sedan", ru: "Седан", ko: "세단" }, minivan: { en: "Minivan", ru: "Минивэн", ko: "미니밴" } };

  const waText =
    lang === "ru"
      ? `Здравствуйте! Бронирую трансфер Манас (FRU) → Бишкек.\nНомер рейса: ____\nАвтомобиль: ${vehicleLabel[vehicle].ru} ($${total}). Подтвердите наличие.`
      : lang === "ko"
      ? `안녕하세요! 마나스(FRU) → 비슈케크 이동 예약합니다.\n항공편 번호: ____\n차량: ${vehicleLabel[vehicle].ko} ($${total}). 예약 가능 여부 확인 부탁드립니다.`
      : `Hi! I'd like to book the Manas Airport (FRU) → Bishkek transfer.\nFlight number: ____\nVehicle: ${vehicleLabel[vehicle].en} ($${total}). Please confirm availability.`;
  const waBookLink = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(waText)}`;

  return (
    <section className="mb-14">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{T.title[lang]}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Left column: vehicle picker + total */}
        <div className="space-y-4 md:col-span-2">
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
                  <p className="mt-1 text-2xl font-extrabold text-slate-900">
                    ${BASE[v]} <span className="text-sm font-normal text-slate-400">USD</span>
                  </p>
                  <p className="text-xs text-slate-500">{v === "sedan" ? T.per4[lang] : T.per7[lang]}</p>
                  {vehicle === v && (
                    <span className={`absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full text-[11px] font-bold text-white ${v === "sedan" ? "bg-teal-500" : "bg-amber-400"}`}>
                      ✓
                    </span>
                  )}
                </button>
              ))}
            </div>
            <p className="mt-3 text-xs text-slate-400">{T.nightNote[lang]}</p>
            <p className="mt-3 rounded-xl border border-amber-200 bg-amber-50 p-3 text-sm leading-relaxed text-amber-950">{T.directNote[lang]}</p>
          </div>

          <div className="rounded-2xl border-2 border-emerald-400 bg-emerald-50 p-6">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-emerald-700">{T.totalLabel[lang]}</p>
            <div className="flex items-end justify-between gap-4">
              <p className="text-5xl font-extrabold text-slate-900">
                ${total} <span className="text-xl font-normal text-slate-400">USD</span>
              </p>
              <div className="text-right text-xs text-slate-500">
                <p className="font-medium">{vehicle === "sedan" ? T.sedan[lang] : T.minivan[lang]}: ${total}</p>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href={waBookLink}
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 rounded-full bg-green-500 py-3 text-sm font-semibold text-white hover:bg-green-600"
              >
                📱 {T.wa[lang]}
              </a>
              <a
                href="https://t.me/nomadtransfer"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 rounded-full bg-indigo-700 py-3 text-sm font-semibold text-white hover:bg-indigo-800"
              >
                ✈️ {T.tg[lang]}
              </a>
            </div>
          </div>
        </div>

        {/* Right column: included / not included / why */}
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

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const T = {
    headline: {
      en: "Have a flight number? Send it to us.",
      ru: "Знаете номер рейса? Отправьте нам.",
      ko: "항공편 번호가 있으신가요? 보내주세요.",
    },
    body: {
      en: "Send your flight number via WhatsApp and we'll track your arrival, prepare the Meet & Greet, and confirm the exact pickup time. Available 24/7 — including night flights.",
      ru: "Отправьте номер рейса в WhatsApp — отследим прилёт, подготовим встречу с табличкой и подтвердим точное время. Работаем 24/7, в том числе ночные рейсы.",
      ko: "WhatsApp으로 항공편 번호를 보내주시면 도착을 추적하고 이름판 환영 준비와 정확한 픽업 시간을 확정해드립니다. 야간 항공편 포함 24시간 운영.",
    },
  };
  return (
    <section className="mb-14 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 px-6 py-10 text-center text-white md:py-12">
      <h2 className="text-2xl font-bold md:text-3xl">{T.headline[lang]}</h2>
      <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-white/80">{T.body[lang]}</p>
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 text-sm font-semibold text-white hover:bg-green-600"
        >
          <MessageCircle className="h-4 w-4" /> WhatsApp
        </a>
        <a
          href="https://t.me/nomadtransfer"
          target="_blank"
          rel="noopener"
          className="inline-flex items-center gap-2 rounded-full bg-sky-700 px-6 py-3 text-sm font-semibold text-white hover:bg-sky-800"
        >
          <Send className="h-4 w-4" /> Telegram
        </a>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ManasAirportToBishkek({ initialLang }: { initialLang?: "en" | "ru" | "ko" }) {
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
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700" />
        <div className="relative mx-auto max-w-6xl px-4 py-10 text-white md:py-14">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            {lang === "ru" ? "Аэропортовый трансфер · 24/7" : lang === "ko" ? "공항 이동 · 24시간" : "Airport Transfer · 24/7"}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">
            {lang === "ru"
              ? "Аэропорт Манас (FRU) → Бишкек: Приватный трансфер"
              : lang === "ko"
              ? "마나스 공항 (FRU) → 비슈케크: 프라이빗 이동"
              : "Manas Airport (FRU) to Bishkek Private Transfer"}
          </h1>
          <p className="mt-2 text-sm text-white/80">
            {lang === "ru"
              ? "Встреча с табличкой в зоне прилёта · 60 мин бесплатного ожидания · ~25–30 км · ~30–40 минут"
              : lang === "ko"
              ? "도착장에서 이름판 환영 · 60분 무료 대기 · ~25–30km · ~30–40분"
              : "Meet & Greet at arrivals with name board · 60-min free waiting · ~25–30 km · ~30–40 minutes"}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {(lang === "ru"
              ? ["Meet & Greet", "Отслеживание рейса", "60 мин ожидания", "24/7"]
              : lang === "ko"
              ? ["Meet & Greet", "항공편 추적", "60분 대기", "24시간"]
              : ["Meet & Greet", "Flight tracking", "60-min waiting", "24/7 service"]
            ).map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur"
              >
                {badge}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/30"
            >
              <MessageCircle className="h-4 w-4" />
              {lang === "ru" ? "Забронировать" : lang === "ko" ? "예약하기" : "Book Now"}
            </a>
            <a
              href="https://t.me/nomadtransfer"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/20"
            >
              <Send className="h-4 w-4" /> Telegram
            </a>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-12">
        <RouteInfoSection lang={lang} />

        {/* About */}
        <section className="mb-10">
          <h2 className="mb-3 text-xl font-bold md:text-2xl">
            {lang === "ru" ? "О трансфере" : lang === "ko" ? "이동 소개" : "About This Transfer"}
          </h2>
          <div className="max-w-2xl space-y-3 text-sm leading-relaxed text-slate-600">
            {lang === "ru" ? (
              <>
                <p>
                  Приватный трансфер из аэропорта Манас (FRU) в Бишкек — самый удобный способ добраться до города после прилёта.
                  Расстояние всего 25–30 км, но аэропортовые такси без предварительного бронирования часто завышают цену для туристов.
                </p>
                <p>
                  С Nomad Transfer вы получаете фиксированную цену, встречу с именной табличкой в зоне прилёта и 60 минут бесплатного
                  ожидания. Водитель отслеживает рейс по номеру — вы не потеряетесь, даже если рейс задержали.
                </p>
                <p>Сервис работает 24/7, включая ночные рейсы. Ночная доплата 22:00–06:00 +15%.</p>
              </>
            ) : lang === "ko" ? (
              <>
                <p>
                  마나스 공항(FRU)에서 비슈케크 시내까지의 프라이빗 이동은 도착 후 가장 편안하게 이동하는 방법입니다.
                  거리는 25–30km에 불과하지만, 사전 예약 없이 공항 택시를 이용하면 관광객에게 바가지 요금이 자주 발생합니다.
                </p>
                <p>
                  Nomad Transfer를 이용하면 고정 요금, 도착장에서 이름판 환영, 60분 무료 대기가 제공됩니다.
                  기사가 항공편 번호로 비행을 추적하므로 항공편이 지연돼도 걱정 없습니다.
                </p>
                <p>야간 항공편 포함 24시간 운영. 야간 할증(22:00–06:00) +15%.</p>
              </>
            ) : (
              <>
                <p>
                  Private transfer from Manas Airport (FRU) to Bishkek city is the most convenient way to reach the city after landing.
                  The distance is just 25–30 km, but airport taxis without pre-booking often overcharge tourists.
                </p>
                <p>
                  With Nomad Transfer you get a fixed price, Meet & Greet with a name board at arrivals, and 60 minutes of free waiting.
                  The driver tracks your flight by number — no stress even if your flight is delayed.
                </p>
                <p>Service operates 24/7 including night flights. Night surcharge 22:00–06:00 +15%.</p>
              </>
            )}
          </div>
        </section>

        <InteractiveRouteMap lang={lang} stops={MAP_STOPS} />
        <PricingSection lang={lang} />
        <CTASection lang={lang} />

        <FAQSection faqs={AIRPORT_FAQ[lang]} lang={lang} />

        {/* SEO text */}
        <section className="mb-14 rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
          <p className="text-sm leading-relaxed text-slate-600">
            {lang === "ru"
              ? "Трансфер из аэропорта Манас (FRU) в Бишкек с встречей в зоне прилёта, отслеживанием рейса и фиксированной ценой за автомобиль. Идеально для первого визита в Кыргызстан: водитель поможет с багажом и ответит на вопросы о городе."
              : lang === "ko"
              ? "마나스 공항(FRU)에서 비슈케크까지 도착장 환영, 항공편 추적, 차량당 고정 가격으로 제공되는 이동 서비스. 키르기스스탄 첫 방문자에게 이상적입니다."
              : "Manas Airport (FRU) to Bishkek city transfer with Meet & Greet at arrivals, flight tracking, and fixed price per vehicle. Ideal for first-time visitors to Kyrgyzstan — your driver helps with luggage and can answer questions about the city."}
          </p>
        </section>

        <RelatedRoutes currentSlug="manas-airport-to-bishkek" lang={lang} />
      </main>

      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
          <p className="text-xs opacity-80">© {new Date().getFullYear()} {BRAND}</p>
          <nav className="flex flex-col gap-2 text-center text-xs opacity-80 md:text-left">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/transfers/manas-airport-to-bishkek" className="hover:text-emerald-600">EN: Manas → Bishkek</a>
              <a href="/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">EN: Manas → Karakol</a>
              <a href="/transfers/bishkek-to-karakol" className="hover:text-emerald-600">EN: Bishkek → Karakol</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ru/transfers/manas-airport-to-bishkek" className="hover:text-emerald-600">RU: Манас → Бишкек</a>
              <a href="/ru/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">RU: Манас → Каракол</a>
              <a href="/ru/transfers/bishkek-to-karakol" className="hover:text-emerald-600">RU: Бишкек → Каракол</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ko/transfers/manas-airport-to-bishkek" className="hover:text-emerald-600">KO: 마나스 → 비슈케크</a>
              <a href="/ko/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">KO: 마나스 → 카라콜</a>
              <a href="/ko/transfers/bishkek-to-karakol" className="hover:text-emerald-600">KO: 비슈케크 → 카라콜</a>
            </div>
          </nav>
          <div className="flex gap-2">
            <a
              href="https://t.me/nomadtransfer"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500 px-4 py-2 text-sm text-sky-600 hover:bg-sky-50"
            >
              <Send className="h-4 w-4" /> Telegram
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 shadow-2xl md:hidden">
        <div className="flex gap-2">
          <a
            href="https://t.me/nomadtransfer"
            target="_blank"
            rel="noopener"
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-700 px-3 py-3 text-sm font-semibold text-white hover:bg-sky-800"
            aria-label="Telegram"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" />
            {lang === "ru" ? "Забронировать в WhatsApp" : lang === "ko" ? "WhatsApp 예약" : "Book on WhatsApp"}
          </a>
        </div>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
}
