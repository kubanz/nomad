"use client";

import { useRouter } from "next/navigation";
import dynamic from "next/dynamic";
import { Car, CheckCircle, Clock, MapPin, MessageCircle, Plane, ShieldCheck, Users } from "lucide-react";
import SiteHeader from "../components/SiteHeader";
import FAQSection from "../components/FAQSection";
import RelatedRoutes from "../components/RelatedRoutes";
import type { MapStop } from "../components/InteractiveRouteMap";

const InteractiveRouteMap = dynamic(() => import("../components/InteractiveRouteMap"), { ssr: false });

type Lang = "en" | "ru" | "ko";

const languageRoutes: Record<Lang, string> = {
  en: "/transfers/bishkek-to-manas-airport",
  ru: "/ru/transfers/bishkek-to-manas-airport",
  ko: "/ko/transfers/bishkek-to-manas-airport",
};

const mapStops: MapStop[] = [
  { id: 0, lat: 42.8746, lng: 74.5698, name: "Bishkek", desc: "Start · Hotel or address pickup", day: 1, time: "Scheduled", type: "start" },
  { id: 1, lat: 43.0613, lng: 74.4776, name: "Manas Airport (FRU)", desc: "End · Terminal drop-off", day: 1, time: "+40 min", type: "end" },
];

const content = {
  en: {
    eyebrow: "Private airport transfer · 24/7",
    title: "Bishkek to Manas Airport (FRU) Private Transfer",
    subtitle: "Hotel pickup · Flight-time planning · Terminal drop-off · 30-40 minutes",
    introTitle: "Reach Manas Airport on Time",
    intro: "We pick you up from your hotel, apartment, or another address in Bishkek and take you directly to the correct terminal at Manas International Airport. Send us your flight number and departure time so we can recommend a pickup time with a suitable traffic and check-in buffer.",
    timingTitle: "When should I leave Bishkek?",
    timing: "For international flights, we normally recommend leaving Bishkek about 3 hours before departure. For domestic flights, about 2 hours is usually suitable. Morning and evening traffic, weather, baggage, and airline requirements may require extra time.",
    route: ["~25-30 km", "~30-40 min", "Sedan $25", "Minivan $30"],
    included: ["Pickup from your Bishkek address", "Direct terminal drop-off", "Flight-time planning assistance", "Fuel and standard road costs", "Child seat on request", "24/7 booking support"],
    faq: [
      { question: "How much is a transfer from Bishkek to Manas Airport?", answer: "A private sedan costs $25 and a minivan costs $30 per vehicle. A 15% surcharge applies for pickups between 22:00 and 06:00." },
      { question: "What pickup time should I book?", answer: "Send us your flight number and departure time. We normally recommend leaving about 3 hours before an international flight or 2 hours before a domestic flight, with extra time during heavy traffic or bad weather." },
      { question: "Where can you pick me up in Bishkek?", answer: "We can collect you from a hotel, apartment, office, or another agreed address within Bishkek." },
      { question: "Can I book an early-morning airport transfer?", answer: "Yes. Transfers operate 24/7. The pickup address, time, vehicle, and night surcharge are confirmed before travel." },
    ],
    cta: "Book Bishkek to Manas Airport",
  },
  ru: {
    eyebrow: "Приватный трансфер в аэропорт · 24/7",
    title: "Трансфер Бишкек — аэропорт Манас (FRU)",
    subtitle: "Подача к отелю · Расчёт времени · До терминала · 30-40 минут",
    introTitle: "Приезжайте в аэропорт вовремя",
    intro: "Заберём вас из отеля, квартиры или другого адреса в Бишкеке и доставим прямо к нужному терминалу аэропорта Манас. Отправьте номер рейса и время вылета, чтобы мы рекомендовали время подачи с учётом регистрации и пробок.",
    timingTitle: "Когда выезжать из Бишкека?",
    timing: "Для международных рейсов обычно рекомендуем выезжать примерно за 3 часа до вылета, для внутренних — за 2 часа. В часы пик, зимой или при большом багаже лучше добавить запас.",
    route: ["~25-30 км", "~30-40 мин", "Седан $25", "Минивэн $30"],
    included: ["Подача по адресу в Бишкеке", "Доставка к терминалу", "Помощь с расчётом времени", "Топливо и дорожные расходы", "Детское кресло по запросу", "Поддержка 24/7"],
    faq: [
      { question: "Сколько стоит трансфер Бишкек — аэропорт Манас?", answer: "Приватный седан стоит $25, минивэн — $30 за автомобиль. Для подачи с 22:00 до 06:00 действует доплата 15%." },
      { question: "На какое время заказывать машину?", answer: "Отправьте номер рейса и время вылета. Обычно рекомендуем выезд за 3 часа до международного рейса или за 2 часа до внутреннего, с дополнительным запасом в часы пик и плохую погоду." },
      { question: "Откуда можно забрать в Бишкеке?", answer: "Заберём из отеля, квартиры, офиса или другого согласованного адреса в пределах Бишкека." },
      { question: "Можно заказать ранний утренний трансфер?", answer: "Да, работаем 24/7. Адрес, время подачи, автомобиль и ночная доплата подтверждаются заранее." },
    ],
    cta: "Заказать трансфер в Манас",
  },
  ko: {
    eyebrow: "프라이빗 공항 이동 · 24시간",
    title: "비슈케크에서 마나스 공항(FRU) 프라이빗 이동",
    subtitle: "숙소 픽업 · 항공편 시간 계획 · 터미널 하차 · 30-40분",
    introTitle: "공항에 여유 있게 도착하세요",
    intro: "비슈케크의 호텔, 아파트 또는 지정 주소에서 픽업하여 마나스 국제공항 터미널까지 직접 이동합니다. 항공편 번호와 출발 시간을 보내주시면 체크인과 교통 상황을 고려한 픽업 시간을 안내합니다.",
    timingTitle: "비슈케크에서 언제 출발해야 하나요?",
    timing: "국제선은 보통 출발 약 3시간 전, 국내선은 약 2시간 전 비슈케크 출발을 권장합니다. 출퇴근 교통, 날씨, 수하물 및 항공사 규정에 따라 추가 여유 시간이 필요할 수 있습니다.",
    route: ["~25-30 km", "~30-40분", "세단 $25", "미니밴 $30"],
    included: ["비슈케크 주소 픽업", "공항 터미널 직접 하차", "항공편 시간 계획 지원", "연료 및 기본 도로 비용", "요청 시 어린이 카시트", "24시간 예약 지원"],
    faq: [
      { question: "비슈케크에서 마나스 공항 이동 요금은 얼마인가요?", answer: "프라이빗 세단은 차량당 $25, 미니밴은 $30입니다. 22:00~06:00 픽업에는 15% 야간 할증이 적용됩니다." },
      { question: "몇 시에 픽업을 예약해야 하나요?", answer: "항공편 번호와 출발 시간을 보내주세요. 국제선은 약 3시간 전, 국내선은 약 2시간 전 출발을 권장하며 교통과 날씨에 따라 여유 시간을 추가합니다." },
      { question: "비슈케크 어디에서 픽업할 수 있나요?", answer: "비슈케크 내 호텔, 아파트, 사무실 또는 합의한 주소에서 픽업합니다." },
      { question: "이른 아침 공항 이동도 가능한가요?", answer: "네, 24시간 운영합니다. 픽업 주소, 시간, 차량 및 야간 할증을 출발 전에 확인합니다." },
    ],
    cta: "마나스 공항 이동 예약",
  },
};

export default function BishkekToManasAirport({ initialLang }: { initialLang: Lang }) {
  const router = useRouter();
  const t = content[initialLang];
  const waLink = `https://wa.me/996552291808?text=${encodeURIComponent(
    initialLang === "ru"
      ? "Здравствуйте! Нужен трансфер Бишкек → аэропорт Манас. Номер рейса: ____. Время вылета: ____."
      : initialLang === "ko"
        ? "안녕하세요! 비슈케크 → 마나스 공항 이동이 필요합니다. 항공편: ____. 출발 시간: ____."
        : "Hi! I need a Bishkek → Manas Airport transfer. Flight number: ____. Departure time: ____."
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <SiteHeader lang={initialLang} waLink={waLink} onLangChange={(lang) => router.push(languageRoutes[lang])} activeNav="transfers" />
      <main>
        <section className="bg-gradient-to-br from-blue-700 via-indigo-700 to-violet-700 py-12 text-white md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-100">{t.eyebrow}</p>
            <h1 className="mt-3 max-w-4xl text-3xl font-bold md:text-5xl">{t.title}</h1>
            <p className="mt-4 text-blue-100">{t.subtitle}</p>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-blue-700">
              <MessageCircle className="h-5 w-5" />{t.cta}
            </a>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12">
          <section className="grid gap-5 md:grid-cols-4">
            {t.route.map((item, index) => {
              const icons = [MapPin, Clock, Car, Users];
              const Icon = icons[index];
              return <div key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><Icon className="h-6 w-6 text-blue-700" /><p className="mt-3 font-bold">{item}</p></div>;
            })}
          </section>

          <section className="my-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-3xl bg-white p-7 shadow-sm">
              <Plane className="h-9 w-9 text-blue-700" />
              <h2 className="mt-4 text-2xl font-bold">{t.introTitle}</h2>
              <p className="mt-4 leading-relaxed text-slate-600">{t.intro}</p>
            </div>
            <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7">
              <Clock className="h-9 w-9 text-amber-700" />
              <h2 className="mt-4 text-2xl font-bold">{t.timingTitle}</h2>
              <p className="mt-4 leading-relaxed text-slate-700">{t.timing}</p>
            </div>
          </section>

          <InteractiveRouteMap lang={initialLang} stops={mapStops} />

          <section className="my-12">
            <h2 className="text-center text-2xl font-bold md:text-3xl">{initialLang === "ru" ? "Что включено" : initialLang === "ko" ? "포함 사항" : "What Is Included"}</h2>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {t.included.map((item) => <div key={item} className="flex gap-3 rounded-2xl border border-slate-200 bg-white p-5"><CheckCircle className="h-5 w-5 flex-none text-emerald-600" /><p className="text-sm">{item}</p></div>)}
            </div>
          </section>

          <FAQSection faqs={t.faq} lang={initialLang} />

          <section className="mb-14 rounded-3xl bg-slate-900 p-7 text-white md:p-10">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
              <div><ShieldCheck className="h-8 w-8 text-emerald-400" /><h2 className="mt-3 text-2xl font-bold">{t.cta}</h2><p className="mt-2 text-slate-300">Sedan $25 · Minivan $30 · 24/7</p></div>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3 font-semibold"><MessageCircle className="h-5 w-5" />WhatsApp</a>
            </div>
          </section>

          <RelatedRoutes currentSlug="bishkek-to-manas-airport" lang={initialLang} />
        </div>
      </main>
    </div>
  );
}
