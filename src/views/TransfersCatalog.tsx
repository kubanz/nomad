import Link from "next/link";
import { ArrowRight, Car, Clock, MapPin, MessageCircle, Plane, Route, Users } from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { transferHref, transferRoutes, type TransferLang } from "../data/transferRoutes";

const copy = {
  en: {
    eyebrow: "Private routes with confirmed prices",
    title: "Private Transfers in Kyrgyzstan and Kazakhstan",
    intro: "Browse airport, domestic, and cross-border routes. Every price is per private vehicle, with pickup and drop-off confirmed before travel.",
    airport: "Airport Transfers",
    domestic: "Transfers Across Kyrgyzstan",
    border: "Kazakhstan and Cross-Border Transfers",
    from: "From",
    details: "View route",
    quote: "Need another destination?",
    quoteText: "Send your pickup point, destination, date, passengers, and luggage. We can arrange transfers to other locations across Kyrgyzstan and Kazakhstan.",
    button: "Request a custom quote",
  },
  ru: {
    eyebrow: "Приватные маршруты с подтверждённой ценой",
    title: "Трансферы по Кыргызстану и Казахстану",
    intro: "Выберите трансфер из аэропорта, маршрут по Кыргызстану или поездку через границу. Цена указана за приватный автомобиль.",
    airport: "Трансферы из аэропорта",
    domestic: "Трансферы по Кыргызстану",
    border: "Трансферы в Казахстан и через границу",
    from: "От",
    details: "Открыть маршрут",
    quote: "Нужен другой маршрут?",
    quoteText: "Отправьте место посадки, пункт назначения, дату, количество пассажиров и багаж. Мы рассчитаем индивидуальный трансфер.",
    button: "Запросить стоимость",
  },
  ko: {
    eyebrow: "확정 요금 프라이빗 노선",
    title: "키르기스스탄 및 카자흐스탄 프라이빗 이동",
    intro: "공항, 키르기스스탄 국내, 국경 이동 노선을 확인하세요. 모든 요금은 프라이빗 차량 한 대 기준입니다.",
    airport: "공항 이동",
    domestic: "키르기스스탄 국내 이동",
    border: "카자흐스탄 및 국경 이동",
    from: "최저",
    details: "노선 보기",
    quote: "다른 목적지가 필요하신가요?",
    quoteText: "픽업 장소, 목적지, 날짜, 인원 및 수하물을 보내주시면 맞춤 이동 견적을 안내해드립니다.",
    button: "맞춤 견적 요청",
  },
};

const categoryIcon = {
  airport: Plane,
  kyrgyzstan: MapPin,
  "cross-border": Route,
};

export default function TransfersCatalog({ lang }: { lang: TransferLang }) {
  const t = copy[lang];
  const groups = [
    { key: "airport" as const, title: t.airport },
    { key: "kyrgyzstan" as const, title: t.domestic },
    { key: "cross-border" as const, title: t.border },
  ];
  const wa = `https://wa.me/996552291808?text=${encodeURIComponent(
    lang === "ru"
      ? "Здравствуйте! Нужен индивидуальный трансфер. Место посадки: ____. Пункт назначения: ____."
      : lang === "ko"
        ? "안녕하세요! 맞춤 이동이 필요합니다. 픽업: ____. 목적지: ____."
        : "Hi! I need a custom private transfer. Pickup: ____. Destination: ____."
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header lang={lang} languagePath="/transfers" />
      <main>
        <section className="bg-gradient-to-br from-teal-700 via-cyan-700 to-blue-700 py-14 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-100">{t.eyebrow}</p>
            <h1 className="mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{t.title}</h1>
            <p className="mt-5 max-w-3xl text-lg leading-relaxed text-cyan-50">{t.intro}</p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-14 px-4 py-12 md:py-16">
          {groups.map(({ key, title }) => {
            const Icon = categoryIcon[key];
            return (
              <section key={key}>
                <h2 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <span className="rounded-xl bg-teal-100 p-2 text-teal-700"><Icon className="h-6 w-6" /></span>
                  {title}
                </h2>
                <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {transferRoutes.filter((route) => route.category === key).map((route) => (
                    <article key={route.slug} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                      <h3 className="flex items-center gap-2 text-lg font-bold">
                        {route.from[lang]} <ArrowRight className="h-4 w-4 text-slate-400" /> {route.to[lang]}
                      </h3>
                      <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-600">
                        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{route.distance}</span>
                        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{route.duration[lang]}</span>
                      </div>
                      <div className="mt-5 grid grid-cols-2 gap-3 rounded-xl bg-slate-50 p-4">
                        <div><p className="flex items-center gap-1 text-xs text-slate-500"><Car className="h-4 w-4" />Sedan</p><p className="mt-1 font-bold">{t.from} ${route.sedan}</p></div>
                        <div><p className="flex items-center gap-1 text-xs text-slate-500"><Users className="h-4 w-4" />Minivan</p><p className="mt-1 font-bold">{t.from} ${route.minivan}</p></div>
                      </div>
                      <Link href={transferHref(route, lang)} className="mt-5 inline-flex items-center gap-2 font-semibold text-teal-700">
                        {t.details} <ArrowRight className="h-4 w-4" />
                      </Link>
                    </article>
                  ))}
                </div>
              </section>
            );
          })}

          <section className="rounded-3xl bg-slate-900 p-7 text-white md:p-10">
            <h2 className="text-2xl font-bold md:text-3xl">{t.quote}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{t.quoteText}</p>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3 font-semibold sm:w-auto">
              <MessageCircle className="h-5 w-5" />{t.button}
            </a>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
