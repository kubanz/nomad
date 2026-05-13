"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Car, MessageCircle, Send, Globe, ChevronLeft, MapPin } from "lucide-react";
import PhotoGalleryModal from "../components/PhotoGalleryModal";

const InteractiveRouteMap = dynamic(
  () => import("../components/InteractiveRouteMap"),
  { ssr: false }
);

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
    place: { en: "Karakol", ru: "Каракол", ko: "카라콜" },
    sub: { en: "Start · Hotel pickup", ru: "Старт · Отель", ko: "출발 · 호텔 픽업" },
    type: "start",
  },
  {
    day: "Day 1", time: "10:00",
    place: { en: "Djety-Oguz", ru: "Джеты-Огуз", ko: "제티-오구즈" },
    sub: { en: "Red sandstone cliffs", ru: "Красные скалы", ko: "붉은 사암 절벽" },
  },
  {
    day: "Day 1", time: "12:00",
    place: { en: "Barskoon Valley", ru: "Барскоон", ko: "바르스쿤" },
    sub: { en: "Waterfall & Gagarin monument", ru: "Водопад и монумент", ko: "폭포와 기념비" },
  },
  {
    day: "Day 1", time: "14:00",
    place: { en: "Skazka Canyon", ru: "Каньон Сказка", ko: "스카즈카 협곡" },
    sub: { en: "Fairytale Canyon", ru: "Сказочный каньон", ko: "동화 협곡" },
  },
  {
    day: "Day 1", time: "17:00",
    place: { en: "Son-Kul Lake", ru: "Сон-Кёль", ko: "손쿨 호수" },
    sub: { en: "Alpine lake · Overnight yurt", ru: "Горное озеро · Ночь в юрте", ko: "고산 호수 · 유르트 숙박" },
    type: "overnight",
  },
  {
    day: "Day 2", time: "07:00",
    place: { en: "Son-Kul Morning", ru: "Утро на Сон-Кёле", ko: "손쿨 아침" },
    sub: { en: "Sunrise walk · Yurt breakfast", ru: "Восход · Завтрак в юрте", ko: "일출 산책 · 유르트 아침" },
  },
  {
    day: "Day 2", time: "10:00",
    place: { en: "Orto-Tokoi", ru: "Орто-Токой", ko: "오르토-토코이" },
    sub: { en: "Scenic mountain reservoir", ru: "Горное водохранилище", ko: "산악 저수지" },
  },
  {
    day: "Day 2", time: "14:00",
    place: { en: "Burana Tower", ru: "Башня Бурана", ko: "부라나 타워" },
    sub: { en: "Silk Road minaret XI c.", ru: "Минарет XI века", ko: "실크로드 첨탑" },
  },
  {
    day: "Day 2", time: "18:00",
    place: { en: "Bishkek", ru: "Бишкек", ko: "비슈케크" },
    sub: { en: "End · Hotel / Airport drop", ru: "Финиш · Отель / Аэропорт", ko: "종료 · 호텔/공항 하차" },
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
    time: "10:00",
    title: { en: "Djety-Oguz Gorge", ru: "Ущелье Джеты-Огуз", ko: "제티-오구즈 협곡" },
    desc: {
      en: "Our first stop is the famous red sandstone cliffs known as the Seven Bulls. One of the most iconic natural landmarks near Karakol — perfect for short walks and photography.",
      ru: "Первая остановка — знаменитые красные скалы «Семь быков». Одно из самых узнаваемых природных мест Каракола — идеально для прогулок и фото.",
      ko: "첫 번째 정류장은 '일곱 마리 황소'로 알려진 유명한 붉은 사암 절벽입니다. 카라콜 근처에서 가장 상징적인 자연 랜드마크 중 하나입니다.",
    },
    image: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/jeti-oguz.jpg",
    mapUrl: "#route-map",
  },
  {
    day: "DAY 1",
    time: "12:00",
    title: { en: "Barskoon Gorge & Waterfalls", ru: "Ущелье Барскоон и водопады", ko: "바르스쿤 협곡과 폭포" },
    desc: {
      en: "Barskoon Valley — pine forests, mountain rivers, and several beautiful waterfalls. Visit the Yuri Gagarin memorial monument along the way.",
      ru: "Долина Барскоон — сосновые леса, горные реки и красивые водопады. По пути — мемориал Юрия Гагарина.",
      ko: "바르스쿤 계곡 — 소나무 숲, 산악 강, 아름다운 폭포들. 유리 가가린 기념비도 방문합니다.",
    },
    image: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Barskoon.jpg",
    mapUrl: "#route-map",
    photos: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Barskoon.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Barskoon%202.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Barskoon%203.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Barskoon%204.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Barskoon%205.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Barskoon%206.jpg",
    ],
  },
  {
    day: "DAY 1",
    time: "14:00",
    title: { en: "Skazka Canyon", ru: "Каньон Сказка", ko: "스카즈카 협곡" },
    desc: {
      en: "Wind and water created colorful rock formations that look like castles, dragons, and fantasy landscapes. Perfect for short hikes and amazing photos.",
      ru: "Ветер и вода создали цветные скальные формы — замки, драконы, фантастические пейзажи. Отлично для прогулок и фото.",
      ko: "바람과 물이 만들어낸 다채로운 암석 지형 — 성, 용, 환상적인 풍경. 짧은 하이킹과 멋진 사진 촬영에 완벽합니다.",
    },
    image: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Canyon%20Skazka.jpg",
    mapUrl: "#route-map",
    photos: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/Canyon%20Skazka.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/skazka%202.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/skazka%203.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/skazka%204.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/skazka%205.jpg",
    ],
  },
  {
    day: "DAY 1",
    time: "Overnight",
    title: { en: "Son-Kul Lake", ru: "Озеро Сон-Кёль", ko: "손쿨 호수" },
    desc: {
      en: "Drive through mountain passes to the breathtaking Son-Kul alpine lake at 3,016 m. Spend the night in a traditional yurt camp and experience the peaceful Kyrgyz nomadic life.",
      ru: "Горные перевалы и озеро Сон-Кёль на высоте 3 016 м. Ночь в юрточном лагере — живая традиция кочевой жизни.",
      ko: "해발 3,016m의 손쿨 고산 호수까지 산길을 달립니다. 전통 유르트 캠프에서 하룻밤을 보내며 키르기스 유목 생활을 경험합니다.",
    },
    image: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    mapUrl: "#route-map",
    photos: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul%202.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul%203.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul%204.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul%205.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul%206.jpg",
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul%207.jpg",
    ],
  },
  {
    day: "DAY 2",
    time: "10:00",
    title: { en: "Orto-Tokoi Reservoir", ru: "Водохранилище Орто-Токой", ko: "오르토-토코이 저수지" },
    desc: {
      en: "A beautiful mountain reservoir surrounded by open landscapes and dramatic mountain views. A great scenic stop on the road to Bishkek.",
      ru: "Красивое горное водохранилище с панорамными видами. Отличная живописная остановка по дороге в Бишкек.",
      ko: "탁 트인 풍경과 극적인 산악 전망으로 둘러싸인 아름다운 산악 저수지. 비슈케크로 가는 길에 멋진 경치 정류장입니다.",
    },
    image: "",
    mapUrl: "#route-map",
  },
  {
    day: "DAY 2",
    time: "14:00",
    title: { en: "Burana Tower", ru: "Башня Бурана", ko: "부라나 타워" },
    desc: {
      en: "Before Bishkek, visit the 11th-century Burana Tower — one of Kyrgyzstan's oldest Silk Road monuments. Climb the tower and explore the surrounding balbals (ancient stone carvings).",
      ru: "Перед Бишкеком — башня Бурана XI века, один из старейших памятников Шёлкового пути. Поднимитесь на башню и осмотрите балбалы.",
      ko: "비슈케크 전 마지막 방문지 — 11세기 부라나 타워. 탑에 올라 주변의 발발(고대 석조 조각)을 탐험하세요.",
    },
    image: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/burana.jpg",
    mapUrl: "#route-map",
  },
];

const WHATSAPP_PHONE = "+996552291808";
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I'm interested in the Karakol → Son-Kul → Bishkek 2-day tour. Please share availability and price."
)}`;
const BRAND = "Nomad Transfers KG";

function pickLang(): "en" | "ru" | "ko" {
  if (typeof navigator !== "undefined") {
    const l = navigator.language?.toLowerCase() || "";
    if (l.startsWith("ko")) return "ko";
    if (l.startsWith("ru")) return "ru";
  }
  return "en";
}

const LANGS: { code: "en" | "ru" | "ko"; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ko", label: "Korean", flag: "🇰🇷" },
  { code: "ru", label: "Russian", flag: "🇷🇺" },
];

// ─── Tour Timeline ────────────────────────────────────────────────────────────

function DayRow({
  stops,
  dayLabel,
  dayColor,
  lang,
}: {
  stops: TimelineStop[];
  dayLabel: string;
  dayColor: "emerald" | "indigo";
  lang: "en" | "ru" | "ko";
}) {
  const accent = dayColor === "emerald" ? "bg-emerald-600 text-white" : "bg-indigo-600 text-white";
  return (
    <div>
      {/* Day badge */}
      <div className="mb-4">
        <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold uppercase tracking-widest ${accent}`}>
          {dayLabel}
        </span>
      </div>

      {/* Single row: stop column + flex connector */}
      <div className="-mx-4 overflow-x-auto px-4 md:mx-0 md:overflow-visible md:px-0">
        <div className="flex min-w-max items-start md:min-w-0 md:w-full">
          {stops.map((stop, i) => {
            const isLast = i === stops.length - 1;
            const isOvernight = stop.type === "overnight";
            const isStart = stop.type === "start";
            const isEnd = stop.type === "end";
            return (
              <React.Fragment key={i}>
                {/* Stop column */}
                <div className="flex w-16 shrink-0 flex-col items-center md:w-20">
                  <div
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-[12px] font-bold shadow-sm
                      ${isStart     ? "border-emerald-600 bg-emerald-600 text-white" :
                        isEnd       ? "border-slate-900 bg-slate-900 text-white" :
                        isOvernight ? "border-indigo-500 bg-indigo-500 text-white" :
                        "border-slate-300 bg-white text-slate-400"}`}
                  >
                    {isStart ? "▶" : isEnd ? "✓" : isOvernight ? "🌙" : "·"}
                  </div>
                  <span className="mt-1.5 text-[11px] font-semibold text-slate-400">{stop.time}</span>
                  <p className={`mt-1 text-center text-[12px] font-bold leading-tight
                    ${isStart ? "text-emerald-600" : isEnd ? "text-slate-900" : isOvernight ? "text-indigo-600" : "text-slate-700"}`}>
                    {stop.place[lang]}
                  </p>
                  <p className="mt-0.5 text-center text-[10px] leading-tight text-slate-400 px-1">
                    {stop.sub[lang]}
                  </p>
                </div>

                {/* Flexible connector */}
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
  const day2 = TIMELINE.filter((s) => s.day === "Day 2");

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

      <div className="space-y-8 rounded-2xl border border-slate-100 bg-white p-5 shadow-sm">
        <DayRow
          stops={day1}
          dayLabel={lang === "ru" ? "День 1" : lang === "ko" ? "1일차" : "Day 1"}
          dayColor="emerald"
          lang={lang}
        />
        <div className="border-t border-dashed border-slate-200" />
        <DayRow
          stops={day2}
          dayLabel={lang === "ru" ? "День 2" : lang === "ko" ? "2일차" : "Day 2"}
          dayColor="indigo"
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
  "from-sky-400 via-blue-400 to-indigo-400",
  "from-amber-400 via-orange-400 to-red-400",
];

function ItineraryCard({ stop, idx, lang }: { stop: Stop; idx: number; lang: "en" | "ru" | "ko" }) {
  const isOvernight = stop.time === "Overnight";
  const [galleryOpen, setGalleryOpen] = useState(false);
  const hasPhotos = stop.photos && stop.photos.length > 0;

  return (
    <>
    <div className="group flex snap-center flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl md:snap-align-none">
      {/* Image */}
      <div
        className={`relative h-56 shrink-0 overflow-hidden ${hasPhotos ? "cursor-pointer" : ""}`}
        onClick={() => hasPhotos && setGalleryOpen(true)}
      >
        {stop.image ? (
          <img src={stop.image} alt={stop.title.en} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${GRADIENT_BY_INDEX[idx % GRADIENT_BY_INDEX.length]}`} />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        {/* Day · Time badge */}
        <div className="absolute left-3 top-3">
          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur-sm ${isOvernight ? "bg-indigo-600/90 text-white" : "bg-white/15 text-white border border-white/30"}`}>
            {stop.day} · {stop.time}
          </span>
        </div>
        {/* Photo count badge */}
        {hasPhotos && (
          <div className="absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-black/50 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur-sm">
            📷 {stop.photos!.length}
          </div>
        )}
        {/* Stop number */}
        <div className="absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 backdrop-blur text-xs font-bold text-white border border-white/30">
          {idx + 1}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-bold text-slate-900 leading-snug">{stop.title[lang]}</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{stop.desc[lang]}</p>
        <a
          href={stop.mapUrl}
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-700"
        >
          <MapPin className="h-3.5 w-3.5" />
          {lang === "ru" ? "Открыть на карте" : lang === "ko" ? "지도에서 보기" : "View on Map"}
        </a>
      </div>
    </div>
    {galleryOpen && hasPhotos && (
      <PhotoGalleryModal
        photos={stop.photos!}
        onClose={() => setGalleryOpen(false)}
      />
    )}
    </>
  );
}

// ─── Pricing ──────────────────────────────────────────────────────────────────

function PricingSection({ lang }: { lang: "en" | "ru" | "ko" }) {
  const included = {
    en: ["Comfortable 4×4 vehicle", "Professional local driver", "Fuel and all transportation costs", "Hotel pickup in Karakol", "Hotel / Airport drop-off in Bishkek"],
    ru: ["Комфортный внедорожник 4×4", "Профессиональный местный водитель", "Топливо и все транспортные расходы", "Трансфер из отеля в Каракол", "Трансфер до отеля / аэропорта в Бишкеке"],
    ko: ["쾌적한 4×4 차량", "전문 현지 드라이버", "연료 및 모든 교통 비용", "카라콜 호텔 픽업", "비슈케크 호텔/공항 하차"],
  };
  const notIncluded = {
    en: ["Meals and drinks", "Entrance tickets (if required)", "Horse riding activities", "Personal travel insurance"],
    ru: ["Питание и напитки", "Входные билеты (при необходимости)", "Конные прогулки", "Личная туристическая страховка"],
    ko: ["식사 및 음료", "입장권 (필요시)", "승마 활동", "개인 여행 보험"],
  };
  const whyChoose = {
    en: ["Private transfer — not a group tour", "Flexible stops and custom timing", "Comfortable long-distance travel", "Trusted local drivers", "Direct WhatsApp communication", "No hidden fees"],
    ru: ["Приватный трансфер — не групповой тур", "Гибкие остановки и индивидуальный график", "Комфортные длинные перегоны", "Надёжные местные водители", "Прямая связь через WhatsApp", "Никаких скрытых платежей"],
    ko: ["프라이빗 이동 — 그룹 투어 아님", "유연한 정류장 및 맞춤 일정", "장거리 편안한 이동", "신뢰할 수 있는 현지 드라이버", "WhatsApp 직접 소통", "숨겨진 요금 없음"],
  };

  const T = {
    title:    { en: "Private Tour Price", ru: "Стоимость тура", ko: "프라이빗 투어 가격" },
    best:     { en: "BEST VALUE", ru: "ЛУЧШАЯ ЦЕНА", ko: "최고 가치" },
    per:      { en: "per vehicle (up to 4 passengers)", ru: "за автомобиль (до 4 пассажиров)", ko: "차량당 (최대 4명)" },
    included: { en: "What's Included", ru: "Что включено", ko: "포함 사항" },
    notIncl:  { en: "Not Included", ru: "Не включено", ko: "미포함 사항" },
    why:      { en: "Why Choose This Tour?", ru: "Почему этот тур?", ko: "이 투어를 선택하는 이유?" },
    wa:       { en: "Book via WhatsApp", ru: "Забронировать в WhatsApp", ko: "WhatsApp으로 예약" },
    tg:       { en: "Book via Telegram", ru: "Забронировать в Telegram", ko: "Telegram으로 예약" },
  };

  return (
    <section className="mb-14">
      <div className="mb-6 text-center">
        <h2 className="text-2xl font-bold md:text-3xl">{T.title[lang]}</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Left: price card */}
        <div className="relative rounded-2xl border-2 border-teal-400 bg-white p-6 shadow-sm">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
            <span className="rounded-full bg-teal-500 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
              {T.best[lang]}
            </span>
          </div>

          <p className="mt-2 text-4xl font-extrabold text-slate-900">$550 <span className="text-2xl">USD</span></p>
          <p className="mt-1 text-sm text-slate-500">{T.per[lang]}</p>

          <div className="mt-5">
            <p className="mb-3 text-sm font-bold text-slate-800">{T.included[lang]}</p>
            <ul className="space-y-0">
              {included[lang].map((item, i) => (
                <li key={i} className="flex items-center gap-2 border-b border-slate-100 py-2 last:border-0">
                  <span className="text-teal-500 font-bold text-sm">✓</span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-col gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener"
              className="flex items-center justify-center gap-2 rounded-full bg-green-500 py-3 text-sm font-semibold text-white hover:bg-green-600">
              📱 {T.wa[lang]}
            </a>
            <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
              className="flex items-center justify-center gap-2 rounded-full bg-indigo-700 py-3 text-sm font-semibold text-white hover:bg-indigo-800">
              ✈️ {T.tg[lang]}
            </a>
          </div>
        </div>

        {/* Right: not included + why choose */}
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
            <h3 className="mb-3 text-lg font-bold text-teal-600">{T.notIncl[lang]}</h3>
            <ul className="space-y-0">
              {notIncluded[lang].map((item, i) => (
                <li key={i} className="flex items-center gap-2 border-b border-slate-100 py-2 last:border-0">
                  <span className="text-rose-400 font-bold text-sm">✕</span>
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

export default function KarakolSonkulBishkek() {
  const [lang, setLang] = useState<"en" | "ru" | "ko">(pickLang());
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    if (!showLangDropdown) return;
    const close = () => setShowLangDropdown(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [showLangDropdown]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium hover:bg-slate-50">
              <ChevronLeft className="h-3.5 w-3.5" />
              {lang === "ru" ? "Главная" : lang === "ko" ? "홈" : "Home"}
            </Link>
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              <span className="hidden text-sm font-semibold md:block">{BRAND}</span>
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              <Link href="/#curated-tours" className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100">
                {lang === "ru" ? "Туры" : lang === "ko" ? "투어" : "Tours"}
              </Link>
              <Link href="/#route-prices" className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100">
                {lang === "ru" ? "Трансферы" : lang === "ko" ? "이동" : "Transfers"}
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="relative">
              <button
                onClick={(e) => { e.stopPropagation(); setShowLangDropdown(!showLangDropdown); }}
                className="rounded-xl border px-3 py-2 text-xs font-medium hover:bg-slate-50"
                aria-label="Change language"
              >
                <Globe className="h-4 w-4" />
              </button>
              {showLangDropdown && (
                <div className="absolute right-0 top-full mt-2 w-36 rounded-xl border bg-white shadow-lg z-50">
                  {LANGS.map(({ code, label, flag }) => (
                    <button
                      key={code}
                      onClick={(e) => { e.stopPropagation(); setLang(code); setShowLangDropdown(false); }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl ${lang === code ? "font-semibold bg-slate-50" : ""}`}
                    >
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

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500" />
        <img
          src="https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"
          alt="Son-Kul Lake"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-6xl px-4 py-10 text-white md:py-14">
          <p className="text-xs font-medium uppercase tracking-widest text-white/70">
            {lang === "ru" ? "Приватный тур · 2 дня" : lang === "ko" ? "프라이빗 투어 · 2일" : "Private Tour · 2 Days"}
          </p>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">
            {lang === "ru"
              ? "Каракол — Бишкек: тур через Сон-Кёль и башню Бурана"
              : lang === "ko"
              ? "카라콜 → 비슈케크: 손쿨 호수 & 부라나 타워 경유"
              : "Karakol to Bishkek Private Tour via Son-Kul Lake & Burana Tower"}
          </h1>
          <p className="mt-2 text-sm text-white/80">
            {lang === "ru"
              ? "Ущелья, водопады, каньоны, горные озёра"
              : lang === "ko"
              ? "협곡, 폭포, 협곡, 고산 호수"
              : "Gorges, waterfalls, canyons, alpine lakes"}
          </p>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-6xl px-4 py-12">

        {/* Tour Overview */}
        <section className="mb-12">
          <h2 className="mb-3 text-xl font-bold md:text-2xl">
            {lang === "ru" ? "Обзор тура" : lang === "ko" ? "투어 개요" : "Tour Overview"}
          </h2>
          <div className="space-y-1 text-sm text-slate-600 leading-relaxed max-w-2xl">
            {lang === "ru" ? (
              <>
                <p>Этот приватный 2-дневный трансфер-тур из Каракола в Бишкек создан для путешественников, которые хотят большего, чем просто поездка.</p>
                <p>Вы проедете через одни из самых красивых природных и исторических мест Кыргызстана, комфортно двигаясь в сторону Бишкека.</p>
                <p>Маршрут включает знаменитые красные скалы, водопады, горные озёра, каньоны, древние памятники Шёлкового пути и незабываемую ночёвку в юрточном лагере у озера Сон-Кёль.</p>
                <p>Это идеальный вариант для пар, семей, фотографов и путешественников, которые хотят увидеть настоящий Кыргызстан.</p>
              </>
            ) : lang === "ko" ? (
              <>
                <p>이 프라이빗 2일 트랜스퍼 투어는 카라콜에서 비슈케크로 이동하면서 단순한 이동 그 이상을 원하는 여행자를 위해 설계되었습니다.</p>
                <p>키르기스스탄의 가장 아름다운 자연과 역사적인 장소들을 지나며 비슈케크로 편안하게 이동합니다.</p>
                <p>코스에는 유명한 붉은 암석, 폭포, 고산 호수, 협곡, 고대 실크로드 유적, 그리고 손쿨 호수 근처 유르트 캠프에서의 잊을 수 없는 하룻밤이 포함됩니다.</p>
                <p>커플, 가족, 사진작가, 그리고 진짜 키르기스스탄을 경험하고 싶은 여행자에게 완벽한 옵션입니다.</p>
              </>
            ) : (
              <>
                <p>This private 2-day transfer-tour from Karakol to Bishkek is designed for travelers who want more than just transportation.</p>
                <p>You will travel through some of the most beautiful natural and historical places in Kyrgyzstan while comfortably moving toward Bishkek.</p>
                <p>The route includes famous red rock formations, waterfalls, alpine lakes, canyons, ancient Silk Road monuments, and one unforgettable overnight stay in a traditional yurt camp near Son-Kul Lake.</p>
                <p>This is the perfect option for couples, families, photographers, and travelers who want to experience real Kyrgyzstan.</p>
              </>
            )}
          </div>
        </section>

        {/* Timeline */}
        <TourTimeline lang={lang} />

        {/* Itinerary */}
        <section>
          <div className="mb-6">
            <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
              {lang === "ru" ? "Маршрут" : lang === "ko" ? "일정" : "Itinerary"}
            </p>
            <h2 className="mt-1 text-2xl font-bold md:text-3xl">
              {lang === "ru" ? "День за днём" : lang === "ko" ? "일정 상세" : "Day by Day"}
            </h2>
          </div>

          {/* Mobile: horizontal swipe | Desktop: 3-col grid */}
          <div className="
            -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4
            md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 md:pb-0
          ">
            {STOPS.map((stop, i) => (
              <div key={i} className="w-[82vw] shrink-0 md:w-auto">
                <ItineraryCard stop={stop} idx={i} lang={lang} />
              </div>
            ))}
          </div>
        </section>

        {/* Interactive Map */}
        <div className="mt-14">
          <InteractiveRouteMap lang={lang} />
        </div>

        {/* Pricing */}
        <PricingSection lang={lang} />

      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
          <p className="text-xs opacity-80">© {new Date().getFullYear()} {BRAND}</p>
          <nav className="flex flex-col gap-2 text-center text-xs opacity-80 md:text-left">
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/en/bishkek-to-karakol.html" className="hover:text-emerald-600">EN: Bishkek → Karakol</a>
              <a href="/en/almaty-to-karakol.html" className="hover:text-emerald-600">EN: Almaty → Karakol</a>
              <a href="/en/manas-airport-to-karakol.html" className="hover:text-emerald-600">EN: Manas Airport → Karakol</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ru/bishkek-karakol.html" className="hover:text-emerald-600">RU: Бишкек → Каракол</a>
              <a href="/ru/almaty-karakol.html" className="hover:text-emerald-600">RU: Алматы → Каракол</a>
              <a href="/ru/manas-karakol.html" className="hover:text-emerald-600">RU: Манас → Каракол</a>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              <a href="/ko/bishkek-karakol.html" className="hover:text-emerald-600">KO: 비슈케크 → 카라콜</a>
              <a href="/ko/almaty-karakol.html" className="hover:text-emerald-600">KO: 알마티 → 카라콜</a>
              <a href="/ko/manas-karakol.html" className="hover:text-emerald-600">KO: 마나스 → 카라콜</a>
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
