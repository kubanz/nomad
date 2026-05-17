"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { MessageCircle, Send } from "lucide-react";
import SiteHeader from "../components/SiteHeader";

const LANG_ROUTES: Record<"en" | "ru" | "ko", string> = {
  en: "/guides/almaty-to-bishkek-travel-guide",
  ru: "/ru/guides/almaty-to-bishkek-travel-guide",
  ko: "/ko/guides/almaty-to-bishkek-travel-guide",
};

const WHATSAPP_PHONE = "+996552291808";
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hi! I need a private transfer from Almaty to Bishkek. Please share availability and price."
)}`;
const WA_LINK_RU = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Здравствуйте! Нужен трансфер из Алматы в Бишкек. Сообщите наличие и стоимость."
)}`;
const WA_LINK_KO = `https://wa.me/${WHATSAPP_PHONE.replace(/\D/g, "")}?text=${encodeURIComponent(
  "안녕하세요! 알마티에서 비슈케크로 이동이 필요합니다. 예약 가능 여부와 가격을 알려주세요."
)}`;

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

const T = {
  en: {
    badge: "Travel Guide",
    h1: "Almaty to Bishkek: Complete Travel Guide",
    intro:
      "Everything you need to know about traveling from Almaty (Kazakhstan) to Bishkek (Kyrgyzstan) — distance, border crossing, transport options, and practical tips.",
    quickFactsTitle: "Quick Facts",
    quickFacts: [
      { label: "Distance", value: "~240 km" },
      { label: "Travel time", value: "~3 hours" },
      { label: "Border", value: "Kordai (Korday) — open 24/7" },
      { label: "Border crossing", value: "20–40 minutes typically" },
      { label: "Visa", value: "Visa-free for EU, US, UK, South Korea, Japan and 60+ nationalities" },
    ],
    transportTitle: "Ways to Travel from Almaty to Bishkek",
    transport: [
      {
        name: "Private Transfer",
        price: "from $90 per car",
        time: "~3 hours",
        pros: ["Door-to-door, hotel pickup", "Fixed price, no haggling", "English-speaking driver", "Border assistance included", "Flexible departure time"],
        cons: ["More expensive than shared taxi"],
        recommended: true,
      },
      {
        name: "Shared Taxi (Marshrutka)",
        price: "$8–15 per person",
        time: "3–4 hours",
        pros: ["Cheapest option", "Departs when full"],
        cons: ["Waits until full (can be 1–2 hrs)", "No guaranteed seat", "Crowded, no luggage space", "No border help"],
        recommended: false,
      },
      {
        name: "Bus",
        price: "$5–10 per person",
        time: "4–5 hours",
        pros: ["Cheapest", "Fixed schedule"],
        cons: ["Very slow, many stops", "Fixed departure times", "Uncomfortable for long trips"],
        recommended: false,
      },
    ],
    borderTitle: "Kordai Border Crossing — What to Expect",
    borderIntro:
      "The Kordai (Korday) border crossing is the main land border between Kazakhstan and Kyrgyzstan, located on the Almaty–Bishkek M-39 highway. It operates 24 hours a day, year-round.",
    borderSteps: [
      { step: "1", title: "Exit Kazakhstan", desc: "Present your passport at the Kazakh exit checkpoint. Typically 5–15 minutes." },
      { step: "2", title: "Cross the border zone", desc: "Walk or drive ~500 m through the neutral zone between the two countries." },
      { step: "3", title: "Enter Kyrgyzstan", desc: "Present your passport at the Kyrgyz entry checkpoint. Usually 10–20 minutes." },
      { step: "4", title: "Continue to Bishkek", desc: "After crossing, it's ~1.5 hours to central Bishkek." },
    ],
    borderTips: [
      "Carry your passport — that's all you need for most nationalities",
      "No need to fill paper forms — electronic system at most checkpoints",
      "Busiest times: Friday evenings and Sunday evenings",
      "Your driver will guide you through — you don't need to know Russian",
      "No currency exchange needed at the border — USD and KZT accepted in Bishkek",
    ],
    visaTitle: "Visa Requirements",
    visaText:
      "Most nationalities get visa-free entry to both Kazakhstan and Kyrgyzstan for 30–90 days. This includes EU/EEA countries, USA, UK, Canada, Australia, Japan, South Korea, Singapore, and many more. Check the official Kyrgyz embassy site for your country's specific rules.",
    stopsTitle: "Optional Stops Along the Way",
    stops: [
      {
        name: "Tamerlan Tower",
        desc: "A medieval watchtower from the Tamerlane era, on the Kyrgyz side near the border. Quick 10-minute photo stop. Ask your driver to include.",
        time: "+15 min",
      },
      {
        name: "Ala-Archa National Park",
        desc: "An alpine gorge 40 km south of Bishkek with stunning Tian Shan mountain scenery. Great for a 1–2 hour walk if you arrive during the day.",
        time: "+2–3 hrs",
      },
    ],
    tipsTitle: "Practical Travel Tips",
    tips: [
      "Best time to travel: mornings on weekdays — border is quietest",
      "Bring snacks and water for the journey",
      "Have some USD or KZT cash — card acceptance varies",
      "Manas Airport (FRU) is on the north side of Bishkek — easy to include as a stop",
      "Book your transfer 1–2 days in advance via WhatsApp for best availability",
    ],
    ctaTitle: "Book a Private Transfer",
    ctaDesc: "Skip the shared taxi queues. Fixed price per car, English-speaking driver, door-to-door service.",
    ctaPrice: "Sedan from $90 · Minivan from $115",
    ctaWa: "Book via WhatsApp",
    ctaTg: "Book via Telegram",
    ctaDetails: "View Full Transfer Details",
    relatedTitle: "Related Transfers & Tours",
    related: [
      { href: "/transfers/almaty-to-bishkek", label: "Almaty → Bishkek Private Transfer" },
      { href: "/transfers/almaty-to-karakol", label: "Almaty → Karakol Private Transfer" },
      { href: "/transfers/bishkek-to-karakol", label: "Bishkek → Karakol Transfer" },
      { href: "/transfers/manas-airport-to-karakol", label: "Manas Airport → Karakol Transfer" },
    ],
  },
  ru: {
    badge: "Путеводитель",
    h1: "Алматы — Бишкек: Полный путеводитель",
    intro:
      "Всё, что нужно знать о поездке из Алматы (Казахстан) в Бишкек (Кыргызстан): расстояние, пограничный переход, варианты транспорта и практические советы.",
    quickFactsTitle: "Коротко о маршруте",
    quickFacts: [
      { label: "Расстояние", value: "~240 км" },
      { label: "Время в пути", value: "~3 часа" },
      { label: "Граница", value: "Кордай — работает 24/7" },
      { label: "Время на границе", value: "20–40 минут в среднем" },
      { label: "Виза", value: "Безвизово для РФ, СНГ и 60+ стран" },
    ],
    transportTitle: "Как добраться из Алматы в Бишкек",
    transport: [
      {
        name: "Приватный трансфер",
        price: "от $90 за машину",
        time: "~3 часа",
        pros: ["От двери до двери", "Фиксированная цена", "Водитель говорит по-русски", "Помощь на границе", "Удобное время отправления"],
        cons: ["Дороже, чем общее такси"],
        recommended: true,
      },
      {
        name: "Общая маршрутка",
        price: "$8–15 с человека",
        time: "3–4 часа",
        pros: ["Самый дешёвый вариант", "Отправляется по мере наполнения"],
        cons: ["Ждёт наполнения 1–2 часа", "Нет гарантии места", "Тесно, мало места для багажа", "Нет помощи на границе"],
        recommended: false,
      },
      {
        name: "Автобус",
        price: "$5–10 с человека",
        time: "4–5 часов",
        pros: ["Самый бюджетный", "Фиксированное расписание"],
        cons: ["Очень медленно, много остановок", "Неудобно для длительной поездки"],
        recommended: false,
      },
    ],
    borderTitle: "Пограничный переход Кордай — как это работает",
    borderIntro:
      "Пограничный переход Кордай (Корday) — главный сухопутный переход между Казахстаном и Кыргызстаном, расположен на трассе Алматы–Бишкек М-39. Работает 24 часа в сутки, круглогодично.",
    borderSteps: [
      { step: "1", title: "Выезд из Казахстана", desc: "Предъявите паспорт на казахском КПП. Обычно 5–15 минут." },
      { step: "2", title: "Нейтральная зона", desc: "Около 500 м между двумя странами — пешком или на авто." },
      { step: "3", title: "Въезд в Кыргызстан", desc: "Паспортный контроль на кыргызской стороне. Обычно 10–20 минут." },
      { step: "4", title: "Дорога в Бишкек", desc: "После границы около 1,5 часов до центра Бишкека." },
    ],
    borderTips: [
      "Достаточно загранпаспорта — гражданам РФ можно по внутреннему",
      "Обычно электронная фиксация данных, бланки заполнять не нужно",
      "Самое загруженное время: пятница вечером и воскресенье вечером",
      "Водитель проведёт через границу — ничего специально знать не нужно",
      "Можно расплачиваться USD и KZT в Бишкеке — менять на границе не обязательно",
    ],
    visaTitle: "Визовые требования",
    visaText:
      "Граждане России и большинства стран СНГ въезжают в Кыргызстан без визы. Гражданам РФ достаточно внутреннего паспорта. Уточните актуальные условия на сайте консульства Кыргызстана для вашей страны.",
    stopsTitle: "Остановки по пути",
    stops: [
      {
        name: "Башня Тамерлана",
        desc: "Средневековая сторожевая башня времён Тамерлана, на кыргызской стороне у границы. Быстрая остановка на 10 минут. Попросите водителя заехать.",
        time: "+15 мин",
      },
      {
        name: "Национальный парк Ала-Арча",
        desc: "Горное ущелье в 40 км к югу от Бишкека с великолепными видами на горы Тянь-Шань. Отличный вариант для прогулки 1–2 часа, если вы приезжаете днём.",
        time: "+2–3 часа",
      },
    ],
    tipsTitle: "Практические советы",
    tips: [
      "Лучшее время: утро в будние дни — граница наименее загружена",
      "Возьмите с собой перекус и воду",
      "Наличные USD или KZT — прием карт нестабильный",
      "Аэропорт Манас (FRU) на севере Бишкека — можно добавить остановку",
      "Бронируйте трансфер за 1–2 дня через WhatsApp",
    ],
    ctaTitle: "Забронировать приватный трансфер",
    ctaDesc: "Без ожиданий маршрутки. Фиксированная цена за машину, водитель говорит по-русски, от двери до двери.",
    ctaPrice: "Седан от $90 · Минивэн от $115",
    ctaWa: "Забронировать в WhatsApp",
    ctaTg: "Забронировать в Telegram",
    ctaDetails: "Подробнее о трансфере",
    relatedTitle: "Связанные маршруты",
    related: [
      { href: "/ru/transfers/almaty-to-bishkek", label: "Алматы → Бишкек: Приватный трансфер" },
      { href: "/ru/transfers/almaty-to-karakol", label: "Алматы → Каракол: Приватный трансфер" },
      { href: "/ru/transfers/bishkek-to-karakol", label: "Бишкек → Каракол: Трансфер" },
      { href: "/ru/transfers/manas-airport-to-karakol", label: "Аэропорт Манас → Каракол" },
    ],
  },
  ko: {
    badge: "여행 가이드",
    h1: "알마티에서 비슈케크까지: 완전 여행 가이드",
    intro:
      "알마티(카자흐스탄)에서 비슈케크(키르기스스탄)까지 여행하는 데 필요한 모든 정보 — 거리, 국경 통과, 교통 옵션, 실용적인 팁.",
    quickFactsTitle: "핵심 정보",
    quickFacts: [
      { label: "거리", value: "약 240km" },
      { label: "소요 시간", value: "약 3시간" },
      { label: "국경", value: "코르다이 — 24시간 운영" },
      { label: "국경 통과 시간", value: "보통 20~40분" },
      { label: "비자", value: "한국, EU, 미국, 영국 등 60개국 이상 무비자" },
    ],
    transportTitle: "알마티에서 비슈케크 가는 방법",
    transport: [
      {
        name: "프라이빗 이동",
        price: "차량당 $90부터",
        time: "약 3시간",
        pros: ["도어 투 도어 서비스", "고정 가격, 흥정 불필요", "영어 가능 기사", "국경 통과 안내 포함", "유연한 출발 시간"],
        cons: ["합승 택시보다 비쌈"],
        recommended: true,
      },
      {
        name: "합승 택시 (마르슈르트카)",
        price: "1인 $8~15",
        time: "3~4시간",
        pros: ["가장 저렴한 옵션", "인원이 차면 출발"],
        cons: ["출발까지 1~2시간 대기", "자리 보장 없음", "좁고 짐 공간 부족", "국경 안내 없음"],
        recommended: false,
      },
      {
        name: "버스",
        price: "1인 $5~10",
        time: "4~5시간",
        pros: ["가장 저렴", "고정 시간표"],
        cons: ["매우 느리고 정류장 많음", "고정 출발 시간", "장거리 이동에 불편"],
        recommended: false,
      },
    ],
    borderTitle: "코르다이 국경 통과 — 절차 안내",
    borderIntro:
      "코르다이(Korday) 국경 검문소는 카자흐스탄과 키르기스스탄 사이의 주요 육로 국경으로, 알마티-비슈케크 M-39 고속도로에 위치합니다. 연중 24시간 운영합니다.",
    borderSteps: [
      { step: "1", title: "카자흐스탄 출국", desc: "카자흐스탄 출국 검문소에서 여권 제시. 보통 5~15분 소요." },
      { step: "2", title: "중립 구역 통과", desc: "두 나라 사이 약 500m 중립 구역을 도보 또는 차로 이동." },
      { step: "3", title: "키르기스스탄 입국", desc: "키르기스스탄 입국 검문소에서 여권 제시. 보통 10~20분 소요." },
      { step: "4", title: "비슈케크로 이동", desc: "국경 통과 후 비슈케크 시내까지 약 1.5시간." },
    ],
    borderTips: [
      "여권만 있으면 됩니다 — 대부분의 국적에 충분",
      "전자 시스템으로 처리 — 별도 서류 작성 불필요",
      "가장 붐비는 시간: 금요일 저녁, 일요일 저녁",
      "기사가 안내해드리니 러시아어를 몰라도 괜찮습니다",
      "비슈케크에서 USD, KZT 사용 가능 — 국경에서 환전 불필요",
    ],
    visaTitle: "비자 요건",
    visaText:
      "한국을 포함한 대부분의 국적은 카자흐스탄과 키르기스스탄 모두 무비자로 30~90일 체류 가능합니다. EU, 미국, 영국, 일본, 싱가포르, 호주 등도 해당됩니다. 정확한 규정은 주한 키르기스스탄 대사관 사이트에서 확인하세요.",
    stopsTitle: "이동 중 선택 정류장",
    stops: [
      {
        name: "타메를란 탑",
        desc: "타메를란 시대의 중세 망루, 국경 키르기스 측에 위치. 10분 사진 정류장. 기사에게 요청하세요.",
        time: "+15분",
      },
      {
        name: "알라-아르차 국립공원",
        desc: "비슈케크 남쪽 40km에 위치한 고산 협곡으로 천산 산맥의 멋진 경치를 볼 수 있습니다. 낮에 도착하면 1~2시간 하이킹 추천.",
        time: "+2~3시간",
      },
    ],
    tipsTitle: "실용적인 여행 팁",
    tips: [
      "최적 이동 시간: 평일 오전 — 국경이 가장 한산",
      "간식과 물을 준비해 가세요",
      "USD 또는 KZT 현금 지참 — 카드 사용이 불안정할 수 있음",
      "마나스 공항(FRU)은 비슈케크 북쪽 — 정류장으로 추가 가능",
      "예약은 WhatsApp으로 1~2일 전에 해두는 게 좋습니다",
    ],
    ctaTitle: "프라이빗 이동 예약",
    ctaDesc: "합승 택시 대기 없이. 차량당 고정 가격, 영어 가능 기사, 도어 투 도어 서비스.",
    ctaPrice: "세단 $90부터 · 미니밴 $115부터",
    ctaWa: "WhatsApp으로 예약",
    ctaTg: "Telegram으로 예약",
    ctaDetails: "이동 전체 정보 보기",
    relatedTitle: "관련 이동 및 투어",
    related: [
      { href: "/ko/transfers/almaty-to-bishkek", label: "알마티 → 비슈케크 프라이빗 이동" },
      { href: "/ko/transfers/almaty-to-karakol", label: "알마티 → 카라콜 프라이빗 이동" },
      { href: "/ko/transfers/bishkek-to-karakol", label: "비슈케크 → 카라콜 이동" },
      { href: "/ko/transfers/manas-airport-to-karakol", label: "마나스 공항 → 카라콜 이동" },
    ],
  },
};

export default function AlmatyToBishkekGuide({ initialLang }: { initialLang?: "en" | "ru" | "ko" }) {
  const [lang, setLang] = useState<"en" | "ru" | "ko">(initialLang ?? pickLang());
  const router = useRouter();
  const t = T[lang];

  function handleLangChange(code: "en" | "ru" | "ko") {
    setLang(code);
    saveLang(code);
    router.push(LANG_ROUTES[code]);
  }

  const waLink = lang === "ru" ? WA_LINK_RU : lang === "ko" ? WA_LINK_KO : WA_LINK;
  const transferHref = lang === "ru"
    ? "/ru/transfers/almaty-to-bishkek"
    : lang === "ko"
    ? "/ko/transfers/almaty-to-bishkek"
    : "/transfers/almaty-to-bishkek";

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader lang={lang} waLink={waLink} onLangChange={handleLangChange} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600">
        <div className="mx-auto max-w-4xl px-4 py-10 text-white md:py-16">
          <div className="mb-3 flex items-center gap-2">
            <Link href="/" className="text-xs text-white/60 hover:text-white/90">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-xs text-white/80">{t.badge}</span>
          </div>
          <span className="mb-3 inline-block rounded-full border border-white/30 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white">
            {t.badge}
          </span>
          <h1 className="mt-2 text-2xl font-bold leading-tight md:text-4xl">{t.h1}</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/85">{t.intro}</p>
        </div>
      </section>

      <main className="mx-auto max-w-4xl px-4 py-10">

        {/* Quick Facts */}
        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-slate-800">{t.quickFactsTitle}</h2>
          <dl className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {t.quickFacts.map(({ label, value }) => (
              <div key={label} className="flex items-start gap-3 rounded-xl bg-slate-50 px-4 py-3">
                <dt className="shrink-0 text-sm font-semibold text-slate-500">{label}:</dt>
                <dd className="text-sm font-medium text-slate-800">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Transport Options */}
        <section className="mb-10">
          <h2 className="mb-5 text-xl font-bold md:text-2xl">{t.transportTitle}</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {t.transport.map((opt) => (
              <div
                key={opt.name}
                className={`relative rounded-2xl border p-5 ${
                  opt.recommended
                    ? "border-emerald-300 bg-emerald-50 shadow-sm"
                    : "border-slate-200 bg-white"
                }`}
              >
                {opt.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold uppercase tracking-wider text-white">
                    Recommended
                  </span>
                )}
                <h3 className="font-bold text-slate-900">{opt.name}</h3>
                <p className="mt-1 text-sm font-semibold text-emerald-700">{opt.price}</p>
                <p className="text-xs text-slate-500">{opt.time}</p>
                <ul className="mt-3 space-y-1">
                  {opt.pros.map((p) => (
                    <li key={p} className="flex items-start gap-1.5 text-xs text-slate-700">
                      <span className="mt-0.5 shrink-0 font-bold text-emerald-600">✓</span> {p}
                    </li>
                  ))}
                  {opt.cons.map((c) => (
                    <li key={c} className="flex items-start gap-1.5 text-xs text-slate-500">
                      <span className="mt-0.5 shrink-0 font-bold text-rose-400">✕</span> {c}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Border Crossing */}
        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm md:p-8">
          <h2 className="mb-2 text-xl font-bold md:text-2xl">{t.borderTitle}</h2>
          <p className="mb-6 text-sm leading-relaxed text-slate-600">{t.borderIntro}</p>

          <div className="mb-6 grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {t.borderSteps.map(({ step, title, desc }) => (
              <div key={step} className="rounded-xl bg-slate-50 p-4">
                <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-sm font-bold text-white">
                  {step}
                </div>
                <p className="text-sm font-semibold text-slate-800">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-slate-500">{desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-amber-700">Border Tips</p>
            <ul className="space-y-1.5">
              {t.borderTips.map((tip) => (
                <li key={tip} className="flex items-start gap-2 text-xs text-amber-900">
                  <span className="mt-0.5 shrink-0">•</span> {tip}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Visa */}
        <section className="mb-10 rounded-2xl border border-sky-100 bg-sky-50 p-6">
          <h2 className="mb-2 text-lg font-bold text-sky-900">{t.visaTitle}</h2>
          <p className="text-sm leading-relaxed text-sky-800">{t.visaText}</p>
        </section>

        {/* Optional Stops */}
        <section className="mb-10">
          <h2 className="mb-5 text-xl font-bold md:text-2xl">{t.stopsTitle}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {t.stops.map((stop) => (
              <div key={stop.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-bold text-slate-900">{stop.name}</h3>
                  <span className="shrink-0 rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-600">
                    {stop.time}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{stop.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Tips */}
        <section className="mb-10 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-bold text-slate-800">{t.tipsTitle}</h2>
          <ul className="space-y-2">
            {t.tips.map((tip) => (
              <li key={tip} className="flex items-start gap-2 text-sm text-slate-700">
                <span className="mt-1 shrink-0 h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {tip}
              </li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="mb-10 overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600 via-teal-600 to-sky-600 px-6 py-8 text-white md:py-10">
          <h2 className="text-xl font-bold md:text-2xl">{t.ctaTitle}</h2>
          <p className="mt-2 text-sm text-white/85">{t.ctaDesc}</p>
          <p className="mt-1 text-base font-semibold">{t.ctaPrice}</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/30"
            >
              <MessageCircle className="h-4 w-4" />
              {t.ctaWa}
            </a>
            <a
              href="https://t.me/nomadtransfer"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white/20 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur hover:bg-white/30"
            >
              <Send className="h-4 w-4" />
              {t.ctaTg}
            </a>
            <Link
              href={transferHref}
              className="inline-flex items-center gap-2 rounded-xl border border-white/40 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              {t.ctaDetails} →
            </Link>
          </div>
        </section>

        {/* Related Links */}
        <section className="mb-10">
          <h2 className="mb-4 text-lg font-bold text-slate-800">{t.relatedTitle}</h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {t.related.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center justify-between rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm hover:border-emerald-300 hover:text-emerald-700"
              >
                {label}
                <span className="text-slate-400">→</span>
              </Link>
            ))}
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t bg-white/80">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} Nomad Transfer</p>
          <div className="flex gap-2">
            <a
              href="https://t.me/nomadtransfer"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500 px-4 py-2 text-sm text-sky-700 hover:bg-sky-50"
            >
              <Send className="h-4 w-4" /> Telegram
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 px-4 py-2 text-sm text-emerald-700 hover:bg-emerald-50"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </footer>

      {/* Mobile CTA */}
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
            href={waLink}
            target="_blank"
            rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-700 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-800"
          >
            <MessageCircle className="h-4 w-4" />
            {t.ctaWa}
          </a>
        </div>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
}
