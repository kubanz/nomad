import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Car, Plane, Mountain, Route, MessageCircle, CheckCircle2, ChevronDown, Send } from "lucide-react";

// ===== A/B бренд =====
const BRAND_VARIANTS = { nomad: "Nomad Transfers KG", tienshan: "TienShan Transfers" };
function pickBrand() {
  const p = new URLSearchParams(typeof window !== "undefined" ? window.location.search : "");
  const q = p.get("brand");
  if (q && BRAND_VARIANTS[q as keyof typeof BRAND_VARIANTS]) return BRAND_VARIANTS[q as keyof typeof BRAND_VARIANTS];
  return Math.random() < 0.5 ? BRAND_VARIANTS.nomad : BRAND_VARIANTS.tienshan;
}

// ===== Язык =====
function pickLang() {
  if (typeof navigator !== "undefined") {
    const l = navigator.language?.toLowerCase() || "";
    if (l.startsWith("ko")) return "ko";
    if (l.startsWith("ru")) return "ru";
  }
  return "ko";
}

// ===== WhatsApp & Messengers =====
const WHATSAPP_PHONE = "+996701250222";
const KAKAO_PHONE = "+996557081821";

// ===== Тексты =====
const TXT = {
  en: {
    badge1: "English-speaking support (WhatsApp)",
    badge2: "Free cancel 24h",
    badge3: "Fixed per car",
    heroTitle: "Private Airport Transfer & Day Trips",
    heroSubtitle: "Meet & Greet at Manas (name board). Sedan / SUV / Van. Short photo stops included.",
    heroBtnWA: "WhatsApp: 1–2 min quote",
    heroBtnPrices: "See prices",
    swipe: "Swipe → to see more",
    routesTitle: "Popular routes",
    r1: "Airport → Issyk-Kul (north shore)",
    r1s: "From $95 per car • 60-min free waiting",
    r2: "Burana & Skazka (1-day)",
    r2s: "Flexible timing • Optional eagle show",
    r3: "Song-Kol overnight (summer)",
    r3s: "Yurt stay via partners • No mobile signal",
    howTitle: "How it works",
    how1: "Date/time, route, group size & luggage — via WhatsApp. We reply in minutes.",
    how2: "Clear total per car (Sedan / SUV / Van). Free cancel up to 24h.",
    how3: "Name board at arrivals. 60-min free waiting at the airport.",
    howS1: "Send trip details",
    howS2: "Get a fixed price",
    howS3: "Meet your driver",
    pricesTitle: "Fixed prices (per car)",
    thRoute: "Route",
    thSedan: "Sedan",
    thSUV: "SUV",
    thVan: "Van",
    showAll: "Show all prices",
    showLess: "Show less",
    notes1: "• Free waiting: 60 min at airport, 30 min in city. Extra waiting $8/h.",
    notes2: "• Night rides 22:00–06:00: +15% surcharge.",
    notes3: "• Song-Kol trips: summer only; cold nights, no mobile signal; free cancel ≥48h.",
    bookWA: "Book on WhatsApp",
    inclTitle: "What's included",
    inclHdr: "Included",
    notInclHdr: "Not included",
    included: [
      "Private car & English-speaking support (driver with basic EN on request)",
      "Fuel, parking fees",
      "Meet & Greet (name board)",
      "60-min free waiting at airport",
      "Bottled water • Child seat on request",
    ],
    notIncl: "Entrance tickets, meals, long detours/off-road, yurt overnights.",
    footerWA: "WhatsApp",
    reply: "Reply ~",
    minutes: "min",
    langBtn: "RU",
    heroBullets: ["60 min free waiting (airport)", "Child seat on request", "Pay on the day"],
    faqTitle: "Frequently Asked Questions",
    faq1q: "How much is a transfer from Manas Airport to Karakol?",
    faq1a: "Private transfer from Manas Airport to Karakol costs $140 for a Sedan, $170 for an SUV, and $210 for a Van (per car, not per person). The price includes 60-min free airport waiting, meet & greet with name board, and English-speaking support.",
    faq2q: "How long is the drive from Manas Airport to Karakol?",
    faq2a: "The drive from Manas Airport (FRU) to Karakol takes approximately 4-5 hours (400 km) depending on traffic and stops. We include short photo stops along the scenic route around Issyk-Kul lake.",
    faq3q: "Do you offer airport pickup with a name board?",
    faq3a: "Yes! All our airport transfers include Meet & Greet service with a name board at the arrivals area. We also include 60 minutes of free waiting time at Manas Airport, so you don't need to rush through customs.",
    faq4q: "Can I cancel my transfer booking?",
    faq4a: "Yes, you can cancel your transfer for free up to 24 hours before the scheduled pickup time. For Song-Kol trips, we require at least 48 hours notice for free cancellation.",
    faq5q: "Is the price per person or per car?",
    faq5a: "All our prices are per car (private vehicle), not per person. This makes our service very economical for families and groups. A Sedan fits up to 3 passengers, SUV up to 4, and Van up to 6 passengers.",
    faq6q: "Do you provide child seats?",
    faq6a: "Yes, we provide child seats upon request at no extra charge. Please mention this when booking via WhatsApp so we can prepare the appropriate seat for your child's age and weight.",
  },
  ru: {
    badge1: "Поддержка на англ. в WhatsApp",
    badge2: "Отмена бесплатно 24ч",
    badge3: "Фикс за авто",
    heroTitle: "Частный трансфер и однодневные туры",
    heroSubtitle: "Встреча в Манасе с табличкой. Седан / SUV / Минивэн. Короткие фото-стопы включены.",
    heroBtnWA: "WhatsApp: расчёт за 1–2 мин",
    heroBtnPrices: "Смотреть цены",
    swipe: "Свайпните →",
    routesTitle: "Популярные маршруты",
    r1: "Аэропорт → Иссык-Куль (север)",
    r1s: "От $95 за авто • 60 мин ожидания бесплатно",
    r2: "Бурана и Каньон Сказка (1 день)",
    r2s: "Гибкий график • Шоу беркута — по желанию",
    r3: "Ночёвка на Сон-Кёле (летом)",
    r3s: "Юрты у партнеров • Связи нет",
    howTitle: "Как это работает",
    how1: "Дата/время, маршрут, состав и багаж — в WhatsApp. Ответим за минуты.",
    how2: "Чёткая цена за авто (Sedan / SUV / Van). Отмена бесплатно до 24ч.",
    how3: "Встреча с табличкой у прилёта. 60 мин ожидания бесплатно.",
    howS1: "Напишите детали поездки",
    howS2: "Получите фикс-цену",
    howS3: "Встреча с водителем",
    pricesTitle: "Фикс-цены (за авто)",
    thRoute: "Маршрут",
    thSedan: "Седан",
    thSUV: "SUV",
    thVan: "Минивэн",
    showAll: "Показать все цены",
    showLess: "Свернуть",
    notes1: "• Бесплатное ожидание: 60 мин аэропорт, 30 мин город. Далее $8/ч.",
    notes2: "• Ночной тариф 22:00–06:00: +15%.",
    notes3: "• Сон-Кёль: только летом; холодные ночи; отмена ≥48ч бесплатно.",
    bookWA: "Забронировать в WhatsApp",
    inclTitle: "Что включено",
    inclHdr: "Включено",
    notInclHdr: "Не включено",
    included: [
      "Частный авто и англ. поддержка (водитель с базовым EN — по запросу)",
      "Топливо, парковки",
      "Встреча с табличкой",
      "60 мин ожидания в аэропорту",
      "Вода • Детское кресло по запросу",
    ],
    notIncl: "Входные билеты, питание, длинные объезды/оффроуд, ночёвки в юрте.",
    footerWA: "WhatsApp",
    reply: "Ответ ~",
    minutes: "мин",
    langBtn: "KO",
    heroBullets: ["60 мин ожидания (аэропорт)", "Детское кресло по запросу", "Оплата в день поездки"],
    faqTitle: "Частые вопросы",
    faq1q: "Сколько стоит трансфер из аэропорта Манас в Каракол?",
    faq1a: "Частный трансфер из аэропорта Манас в Каракол стоит $140 за Седан, $170 за SUV и $210 за Минивэн (цена за авто, не за человека). В цену включено 60 мин бесплатного ожидания в аэропорту, встреча с табличкой и англоязычная поддержка.",
    faq2q: "Сколько времени занимает дорога из Манаса в Каракол?",
    faq2a: "Дорога из аэропорта Манас в Каракол занимает примерно 4-5 часов (400 км) в зависимости от трафика и остановок. Мы включаем короткие фото-стопы на живописном маршруте вдоль озера Иссык-Куль.",
    faq3q: "Вы встречаете в аэропорту с табличкой?",
    faq3a: "Да! Все наши трансферы включают встречу с табличкой в зоне прилёта. Также включено 60 минут бесплатного ожидания в аэропорту Манас, так что вам не нужно торопиться на таможне.",
    faq4q: "Можно ли отменить бронирование?",
    faq4a: "Да, вы можете бесплатно отменить трансфер за 24 часа до запланированного времени встречи. Для поездок на Сон-Кёль требуется уведомление минимум за 48 часов для бесплатной отмены.",
    faq5q: "Цена за человека или за автомобиль?",
    faq5a: "Все наши цены указаны за автомобиль (частный транспорт), а не за человека. Это делает наш сервис очень выгодным для семей и групп. Седан вмещает до 3 пассажиров, SUV до 4, Минивэн до 6 пассажиров.",
    faq6q: "Вы предоставляете детские кресла?",
    faq6a: "Да, мы предоставляем детские кресла по запросу без дополнительной платы. Пожалуйста, упомяните об этом при бронировании через WhatsApp, чтобы мы могли подготовить подходящее кресло для возраста и веса вашего ребёнка.",
  },
  ko: {
    badge1: "영어 지원 (WhatsApp)",
    badge2: "24시간 전 무료취소",
    badge3: "차량당 고정 요금",
    heroTitle: "전용 공항 픽업 & 당일 투어",
    heroSubtitle: "마나스 공항 피켓 미팅. 세단 / SUV / 밴. 짧은 포토 스톱 포함.",
    heroBtnWA: "WhatsApp: 1–2분 견적",
    heroBtnPrices: "요금 보기",
    swipe: "더 보려면 → 스와이프",
    routesTitle: "인기 노선",
    r1: "공항 → 이식쿨(북안)",
    r1s: "차량당 $95부터 • 공항 대기 60분 무료",
    r2: "부라나 & 스카즈카(당일)",
    r2s: "유연한 일정 • 독수리쇼 선택",
    r3: "송쿨 1박(여름)",
    r3s: "파트너 유르트 숙박 • 통신 불가",
    howTitle: "이용 방법",
    how1: "날짜/시간, 노선, 인원/짐 — WhatsApp으로 보내주세요. 몇 분 내 답장합니다.",
    how2: "차량당 명확한 총액(세단/SUV/밴). 24시간 전까지 무료취소.",
    how3: "도착장 피켓 미팅. 공항 대기 60분 무료.",
    howS1: "여정 정보 보내기",
    howS2: "고정 요금 받기",
    howS3: "기사 미팅",
    pricesTitle: "고정 요금(차량당)",
    thRoute: "노선",
    thSedan: "세단",
    thSUV: "SUV",
    thVan: "밴",
    showAll: "모든 요금 보기",
    showLess: "접기",
    notes1: "• 무료 대기: 공항 60분, 시내 30분. 이후 대기는 $8/시간.",
    notes2: "• 야간(22:00–06:00): +15% 할증.",
    notes3: "• 송쿨: 여름만 운영; 밤에는 춥고 통신 없음; 48시간 이전 무료취소.",
    bookWA: "WhatsApp로 예약",
    inclTitle: "포함 사항",
    inclHdr: "포함",
    notInclHdr: "불포함",
    included: [
      "전용 차량 & 영어 지원(기본 영어 운전자는 요청 시)",
      "연료, 주차비",
      "피켓 미팅(네임보드)",
      "공항 대기 60분 무료",
      "생수 • 유아용 시트(요청 시)",
    ],
    notIncl: "입장료, 식사, 장거리 우회/오프로드, 유르트 1박.",
    footerWA: "WhatsApp",
    reply: "응답 ~",
    minutes: "분",
    langBtn: "EN",
    heroBullets: ["공항 대기 60분 무료", "유아용 시트(요청 시)", "당일 결제"],
    faqTitle: "자주 묻는 질문",
    faq1q: "마나스 공항에서 카라콜까지 얼마인가요?",
    faq1a: "마나스 공항에서 카라콜까지 전용 차량 요금은 세단 $140, SUV $170, 밴 $210입니다 (차량당 가격, 인당 아님). 60분 무료 공항 대기, 네임보드 미팅, 영어 지원 포함.",
    faq2q: "마나스에서 카라콜까지 얼마나 걸리나요?",
    faq2a: "마나스 공항에서 카라콜까지는 약 4-5시간(400km) 소요됩니다. 교통 상황과 휴게소에 따라 달라질 수 있습니다. 이식쿨 호수 주변의 경치 좋은 곳에서 짧은 포토 스톱을 포함합니다.",
    faq3q: "공항 픽업 시 네임보드를 들고 계시나요?",
    faq3a: "네! 모든 공항 트랜스퍼는 도착장에서 네임보드를 들고 미팅하는 서비스가 포함됩니다. 또한 마나스 공항에서 60분 무료 대기 시간이 포함되어 있어 세관 통과를 서두를 필요가 없습니다.",
    faq4q: "예약을 취소할 수 있나요?",
    faq4a: "네, 예정된 픽업 시간 24시간 전까지 무료로 취소할 수 있습니다. 송쿨 여행의 경우 무료 취소를 위해 최소 48시간 전 통보가 필요합니다.",
    faq5q: "가격이 인당인가요, 차량당인가요?",
    faq5a: "모든 가격은 차량당(전용 차량) 가격이며, 인당 가격이 아닙니다. 가족 및 그룹에게 매우 경제적입니다. 세단은 최대 3명, SUV는 최대 4명, 밴은 최대 6명까지 탑승 가능합니다.",
    faq6q: "유아용 시트를 제공하나요?",
    faq6a: "네, 요청 시 추가 비용 없이 유아용 시트를 제공합니다. WhatsApp으로 예약 시 자녀의 나이와 체중에 맞는 시트를 준비할 수 있도록 알려주세요.",
  },
} as const;

const BASE_PRICES_BY_LANG: Record<"en"|"ru"|"ko", { route: string; sedan: number; suv: number; van: number }[]> = {
  en: [
    { route: "Manas → Bishkek (center)", sedan: 25, suv: 30, van: 45 },
    { route: "Manas → Cholpon-Ata", sedan: 95, suv: 120, van: 150 },
    { route: "Manas → Karakol", sedan: 140, suv: 170, van: 210 }
  ],
  ru: [
    { route: "Манас → Бишкек (центр)", sedan: 25, suv: 30, van: 45 },
    { route: "Манас → Чолпон-Ата", sedan: 95, suv: 120, van: 150 },
    { route: "Манас → Каракол", sedan: 140, suv: 170, van: 210 }
  ],
  ko: [
    { route: "마나스 → 비슈케크(센터)", sedan: 25, suv: 30, van: 45 },
    { route: "마나스 → 촐폰아타", sedan: 95, suv: 120, van: 150 },
    { route: "마나스 → 카라콜", sedan: 140, suv: 170, van: 210 }
  ]
};

const MORE_PRICES_BY_LANG: Record<"en"|"ru"|"ko", { route: string; sedan: number; suv: number; van: number }[]> = {
  en: [{ route: "Bishkek → Song-Kol (yurt area)", sedan: 180, suv: 220, van: 270 }],
  ru: [{ route: "Бишкек → Сон-Кёль (юрты)", sedan: 180, suv: 220, van: 270 }],
  ko: [{ route: "비슈케크 → 송쿨(유르트 지역)", sedan: 180, suv: 220, van: 270 }]
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur">
    {children}
  </span>
);

const SectionTitle = ({ children }: { children: React.ReactNode }) => (
  <h2 className="text-xl font-semibold tracking-tight md:text-3xl">{children}</h2>
);

const Card = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <div className={`rounded-2xl border bg-white/80 p-4 shadow-sm backdrop-blur-sm ${className}`}>{children}</div>
);

const Accordion = ({ title, children, defaultOpen = false }: { title: string; children: React.ReactNode; defaultOpen?: boolean }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="rounded-xl border bg-white">
      <button onClick={() => setOpen((v) => !v)} className="flex w-full items-center justify-between px-4 py-3 text-left" aria-expanded={open}>
        <span className="font-semibold">{title}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="border-t px-4 py-3 text-sm text-slate-700">{children}</div>}
    </div>
  );
};

const RouteCard = ({ title, subtitle, icon: Icon }: { title: string; subtitle: string; icon: any }) => (
  <div className="snap-start min-w-[260px] shrink-0 rounded-2xl border bg-white p-4 shadow-sm">
    <div className="flex items-start gap-3">
      <div className="rounded-xl bg-slate-100 p-2"><Icon className="h-5 w-5" /></div>
      <div>
        <h4 className="text-base font-semibold">{title}</h4>
        <p className="mt-1 text-xs text-slate-600">{subtitle}</p>
      </div>
    </div>
  </div>
);

const PriceTable = ({ items, headers }: { items: { route: string; sedan: number; suv: number; van: number }[]; headers: { route: string; sedan: string; suv: string; van: string } }) => (
  <div className="overflow-hidden rounded-xl border bg-white">
    <table className="min-w-full text-sm">
      <thead className="bg-slate-50">
        <tr>
          <th className="px-3 py-2 text-left font-semibold">{headers.route}</th>
          <th className="px-3 py-2 text-left font-semibold">{headers.sedan}</th>
          <th className="px-3 py-2 text-left font-semibold">{headers.suv}</th>
          <th className="px-3 py-2 text-left font-semibold">{headers.van}</th>
        </tr>
      </thead>
      <tbody className="divide-y">
        {items.map((p) => (
          <tr key={p.route}>
            <td className="px-3 py-2">{p.route}</td>
            <td className="px-3 py-2 font-medium">${p.sedan}</td>
            <td className="px-3 py-2 font-medium">${p.suv}</td>
            <td className="px-3 py-2 font-medium">${p.van}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

function MobileCTA({ text, reply, lang }: { text: string; reply: string; lang: "en" | "ru" | "ko" }) {
  const [sec, setSec] = useState(120);
  useEffect(() => {
    const id = setInterval(() => setSec((s) => (s <= 60 ? 120 : s - 1)), 1000);
    return () => clearInterval(id);
  }, []);
  const mm = String(Math.floor(sec / 60)).padStart(2, "0");
  const ss = String(sec % 60).padStart(2, "0");
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 shadow-2xl md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`https://open.kakao.com/me/nomadtransfers`}
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-xl bg-yellow-400 px-3 py-3 text-sm font-semibold text-slate-900 hover:bg-yellow-500"
          aria-label="Contact via KakaoTalk"
          title={`KakaoTalk: ${KAKAO_PHONE}`}
        >
          <MessageCircle className="h-4 w-4" />
        </a>
        <a
          href={`https://t.me/` + WHATSAPP_PHONE.replace(/[^0-9]/g, "")}
          target="_blank"
          className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-3 py-3 text-sm font-semibold text-white hover:bg-sky-600"
          aria-label="Contact via Telegram"
        >
          <Send className="h-4 w-4" />
        </a>
        <a
          href={`https://wa.me/` + WHATSAPP_PHONE.replace(/[^0-9+]/g, "") + `?text=${encodeURIComponent(text)}`}
          target="_blank"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          aria-label="Open WhatsApp to get a quick quote"
        >
          <MessageCircle className="h-4 w-4" /> {reply}
        </a>
        <div className="rounded-xl border px-2 py-2 text-[11px] leading-none text-slate-700">
          ⏱ {mm}:{ss}
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [lang, setLang] = useState(pickLang() as "en" | "ru" | "ko");
  const [brand] = useState(pickBrand());
  const [showMorePrices, setShowMorePrices] = useState(false);

  const t = TXT[lang];
  const WA_TEXT = lang === "en"
    ? `Hi! I need a private transfer/day trip in Kyrgyzstan. Please share price & availability.
Brand: ${brand}
Lang: EN`
    : lang === "ru"
    ? `Здравствуйте! Нужен частный трансфер/однодневка по Кыргызстану. Пришлите цену и доступность.
Бренд: ${brand}
Язык: RU`
    : `안녕하세요! 키르기스스탄 전용 차량(공항 픽업/당일투어) 문의드립니다. 요금과 가능 여부 부탁드립니다.
브랜드: ${brand}
언어: KO`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16 md:pb-0">
      <MobileCTA text={WA_TEXT} reply={`${t.footerWA} — ${t.reply} 1–2 ${t.minutes}`} lang={lang} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-2">
            <Car className="h-5 w-5" />
            <span className="text-sm font-semibold md:text-base">{brand}</span>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setLang(lang === "en" ? "ru" : lang === "ru" ? "ko" : "en")} className="rounded-xl border px-3 py-2 text-xs font-medium hover:bg-slate-50">
              {t.langBtn}
            </button>
            <a
              href={`https://open.kakao.com/me/nomadtransfers`}
              target="_blank"
              className="hidden items-center gap-2 rounded-xl bg-yellow-400 px-3 py-2 text-sm font-medium text-slate-900 hover:bg-yellow-500 md:inline-flex"
              aria-label="Contact via KakaoTalk"
              title={`KakaoTalk: ${KAKAO_PHONE}`}
            >
              <MessageCircle className="h-4 w-4" />
            </a>
            <a
              href={`https://t.me/` + WHATSAPP_PHONE.replace(/[^0-9]/g, "")}
              target="_blank"
              className="hidden items-center gap-2 rounded-xl bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-sky-600 md:inline-flex"
              aria-label="Contact via Telegram"
            >
              <Send className="h-4 w-4" />
            </a>
            <a
              href={`https://wa.me/` + WHATSAPP_PHONE.replace(/[^0-9+]/g, "") + `?text=${encodeURIComponent(WA_TEXT)}`}
              target="_blank"
              className="hidden items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 md:inline-flex"
            >
              <MessageCircle className="h-4 w-4" /> {t.footerWA}
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500" />
        <div className="relative mx-auto grid max-w-6xl gap-6 px-4 py-12 md:grid-cols-2 md:py-20">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="text-white">
            <div className="flex flex-wrap gap-2">
              <Badge>{t.badge1}</Badge>
              <Badge>{t.badge2}</Badge>
              <Badge>{t.badge3}</Badge>
            </div>
            <h1 className="mt-4 text-3xl font-bold leading-tight md:text-5xl">{t.heroTitle}</h1>
            <p className="mt-2 text-white/90 md:max-w-xl">{t.heroSubtitle}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={`https://wa.me/` + WHATSAPP_PHONE.replace(/[^0-9+]/g, "") + `?text=${encodeURIComponent(WA_TEXT)}`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-slate-900 hover:bg-white/90"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
              <a
                href={`https://t.me/` + WHATSAPP_PHONE.replace(/[^0-9]/g, "")}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-4 py-3 text-sm font-medium text-white hover:bg-sky-600"
                aria-label="Contact via Telegram"
              >
                <Send className="h-4 w-4" /> Telegram
              </a>
              <a
                href={`https://open.kakao.com/me/nomadtransfers`}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-4 py-3 text-sm font-medium text-slate-900 hover:bg-yellow-500"
                aria-label="Contact via KakaoTalk"
                title={`KakaoTalk: ${KAKAO_PHONE}`}
              >
                <MessageCircle className="h-4 w-4" /> KakaoTalk
              </a>
              <a href="#prices" className="inline-flex items-center gap-2 rounded-xl bg-black/20 px-4 py-3 text-sm font-medium text-white hover:bg-black/30">
                {t.heroBtnPrices}
              </a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/80">
              {t.heroBullets.map((b, i) => (
                <span key={i} className="flex items-center">
                  {i > 0 && <span className="mx-2 opacity-70">•</span>}
                  <span>{b}</span>
                </span>
              ))}
            </div>
          </motion.div>
          <div className="hidden md:block" />
        </div>
      </section>

      {/* Routes */}
      <section id="routes" className="mx-auto max-w-6xl px-4 py-10">
        <div className="mb-3">
          <SectionTitle>{t.routesTitle}</SectionTitle>
          <p className="text-sm text-slate-600">{t.swipe}</p>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
          <RouteCard title={t.r1} subtitle={t.r1s} icon={Plane} />
          <RouteCard title={t.r2} subtitle={t.r2s} icon={Route} />
          <RouteCard title={t.r3} subtitle={t.r3s} icon={Mountain} />
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="mx-auto max-w-6xl space-y-3 px-4 py-10">
        <SectionTitle>{t.howTitle}</SectionTitle>
        <Accordion title={`1) ${t.howS1}`} defaultOpen>{t.how1}</Accordion>
        <Accordion title={`2) ${t.howS2}`}>{t.how2}</Accordion>
        <Accordion title={`3) ${t.howS3}`}>{t.how3}</Accordion>
      </section>

      {/* Prices */}
      <section id="prices" className="mx-auto max-w-6xl px-4 py-10">
        <SectionTitle>{t.pricesTitle}</SectionTitle>
        <PriceTable items={BASE_PRICES_BY_LANG[lang]} headers={{ route: t.thRoute, sedan: t.thSedan, suv: t.thSUV, van: t.thVan }} />
        {showMorePrices ? (
          <div className="mt-3 space-y-3">
            <PriceTable items={MORE_PRICES_BY_LANG[lang]} headers={{ route: t.thRoute, sedan: t.thSedan, suv: t.thSUV, van: t.thVan }} />
            <button onClick={() => setShowMorePrices(false)} className="mt-2 w-full rounded-xl border px-4 py-3 text-sm font-medium hover:bg-slate-50">
              {t.showLess}
            </button>
          </div>
        ) : (
          <button onClick={() => setShowMorePrices(true)} className="mt-3 w-full rounded-xl border px-4 py-3 text-sm font-medium hover:bg-slate-50">
            {t.showAll}
          </button>
        )}
        <ul className="mt-3 space-y-1 text-xs text-slate-600">
          <li>{t.notes1}</li>
          <li>{t.notes2}</li>
          <li>{t.notes3}</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`https://wa.me/` + WHATSAPP_PHONE.replace(/[^0-9+]/g, "") + `?text=${encodeURIComponent(WA_TEXT)}`}
            target="_blank"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white hover:bg-emerald-700"
          >
            <MessageCircle className="h-4 w-4" /> {t.bookWA}
          </a>
          <a href="#how" className="inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold hover:bg-slate-50">
            {t.howTitle}
          </a>
        </div>
      </section>

      {/* Inclusions */}
      <section id="inclusions" className="mx-auto max-w-6xl space-y-3 px-4 py-10">
        <SectionTitle>{t.inclTitle}</SectionTitle>
        <Accordion title={t.inclHdr} defaultOpen>
          <ul className="space-y-2">
            {t.included.map((line, i) => (
              <li key={i} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-600" /> {line}
              </li>
            ))}
          </ul>
        </Accordion>
        <Accordion title={t.notInclHdr}>{t.notIncl}</Accordion>
      </section>

      {/* FAQ */}
      <section id="faq" className="mx-auto max-w-6xl space-y-3 px-4 py-10">
        <SectionTitle>{t.faqTitle}</SectionTitle>
        <Accordion title={t.faq1q} defaultOpen>{t.faq1a}</Accordion>
        <Accordion title={t.faq2q}>{t.faq2a}</Accordion>
        <Accordion title={t.faq3q}>{t.faq3a}</Accordion>
        <Accordion title={t.faq4q}>{t.faq4a}</Accordion>
        <Accordion title={t.faq5q}>{t.faq5a}</Accordion>
        <Accordion title={t.faq6q}>{t.faq6a}</Accordion>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white/80">
	  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 md:flex-row">
		<p className="text-xs opacity-80">© {new Date().getFullYear()} {brand}</p>
		<nav className="text-xs opacity-80 flex gap-3">
		  <a href="/en/manas-to-karakol-transfer.html">EN: Manas → Karakol</a>
		  <a href="/ru/manas-karakol-transfer.html">RU: Манас → Каракол</a>
		  <a href="/ko/manas-karakol-transfer.html">KO: 마나스 → 카라콜</a>
		</nav>
		<div className="flex gap-2">
		  <a href={`https://open.kakao.com/me/nomadtransfers`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border border-yellow-400 px-4 py-2 text-sm text-yellow-600 hover:bg-yellow-50" title={`KakaoTalk: ${KAKAO_PHONE}`}>
			<MessageCircle className="h-4 w-4" /> KakaoTalk
		  </a>
		  <a href={`https://t.me/996701250222`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border border-sky-500 px-4 py-2 text-sm text-sky-600 hover:bg-sky-50">
			<Send className="h-4 w-4" /> Telegram
		  </a>
		  <a href={`https://wa.me/996701250222?text=Hi!%20Manas%20%E2%86%94%20Karakol`} target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50">
			<MessageCircle className="h-4 w-4" /> WhatsApp
		  </a>
		</div>
	  </div>
	</footer>

    </div>
  );
}
