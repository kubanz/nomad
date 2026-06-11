"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpDown,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Plane,
  Route,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { transferHref, transferRoutes, type TransferLang, type TransferRoute } from "../data/transferRoutes";

const copy = {
  en: {
    eyebrow: "Routes and prices in one place",
    title: "Where Would You Like to Go?",
    intro: "Choose your pickup point and destination. We will show the available private route, travel time, and price per vehicle.",
    fromLabel: "Pickup",
    toLabel: "Destination",
    choose: "Choose a location",
    find: "Find transfer",
    noRoute: "This route is not listed yet.",
    custom: "Request a custom route",
    result: "Your transfer",
    sedan: "Sedan",
    sedanCapacity: "up to 4 passengers",
    minivan: "Minivan",
    minivanCapacity: "6-7 passengers",
    perVehicle: "per vehicle",
    details: "View route details",
    book: "Book on WhatsApp",
    bookingMessage: "I would like to book a transfer",
    priceFrom: "Price from",
    popularEyebrow: "Top choices",
    popular: "Popular Transfers",
    all: "All Transfer Routes",
    airport: "Airport",
    domestic: "Kyrgyzstan",
    border: "Cross-border",
    allFilter: "All routes",
    distance: "Distance",
    time: "Travel time",
    confirmed: "Price confirmed before pickup",
    private: "Private vehicle for your group",
    support: "WhatsApp booking support",
    quote: "Cannot find your destination?",
    quoteText: "We also arrange custom routes across Kyrgyzstan and Kazakhstan. Send your pickup point, destination, date, passengers, and luggage.",
    quoteButton: "Get a custom quote",
    pricesLink: "See detailed pricing information",
  },
  ru: {
    eyebrow: "Маршруты и цены в одном месте",
    title: "Куда вы хотите поехать?",
    intro: "Выберите место посадки и пункт назначения. Мы покажем доступный приватный маршрут, время в пути и цену за автомобиль.",
    fromLabel: "Откуда",
    toLabel: "Куда",
    choose: "Выберите место",
    find: "Найти трансфер",
    noRoute: "Такого маршрута пока нет в списке.",
    custom: "Запросить индивидуальный маршрут",
    result: "Ваш трансфер",
    sedan: "Седан",
    sedanCapacity: "до 4 пассажиров",
    minivan: "Минивэн",
    minivanCapacity: "6-7 пассажиров",
    perVehicle: "за автомобиль",
    details: "Подробнее о маршруте",
    book: "Забронировать в WhatsApp",
    bookingMessage: "Хочу забронировать трансфер",
    priceFrom: "Цена от",
    popularEyebrow: "Часто выбирают",
    popular: "Популярные трансферы",
    all: "Все направления",
    airport: "Аэропорт",
    domestic: "Кыргызстан",
    border: "Через границу",
    allFilter: "Все маршруты",
    distance: "Расстояние",
    time: "Время в пути",
    confirmed: "Цена подтверждается заранее",
    private: "Приватный автомобиль для вашей группы",
    support: "Поддержка и бронь в WhatsApp",
    quote: "Не нашли нужное направление?",
    quoteText: "Организуем индивидуальные поездки по Кыргызстану и Казахстану. Отправьте место посадки, пункт назначения, дату, пассажиров и багаж.",
    quoteButton: "Получить расчёт",
    pricesLink: "Подробная информация о ценах",
  },
  ko: {
    eyebrow: "노선과 요금을 한곳에서",
    title: "어디로 이동하시나요?",
    intro: "픽업 장소와 목적지를 선택하면 이용 가능한 프라이빗 노선, 이동 시간 및 차량당 요금을 확인할 수 있습니다.",
    fromLabel: "픽업",
    toLabel: "목적지",
    choose: "장소 선택",
    find: "이동 찾기",
    noRoute: "아직 목록에 없는 노선입니다.",
    custom: "맞춤 노선 문의",
    result: "선택한 이동",
    sedan: "세단",
    sedanCapacity: "최대 4명",
    minivan: "미니밴",
    minivanCapacity: "6-7명",
    perVehicle: "차량당",
    details: "노선 상세 보기",
    book: "WhatsApp 예약",
    bookingMessage: "이 이동 서비스를 예약하고 싶습니다",
    priceFrom: "최저 요금",
    popularEyebrow: "많이 찾는 노선",
    popular: "인기 이동",
    all: "전체 이동 노선",
    airport: "공항",
    domestic: "키르기스스탄",
    border: "국경 이동",
    allFilter: "전체 노선",
    distance: "거리",
    time: "이동 시간",
    confirmed: "픽업 전 요금 확정",
    private: "그룹 전용 프라이빗 차량",
    support: "WhatsApp 예약 지원",
    quote: "원하는 목적지가 없나요?",
    quoteText: "키르기스스탄 및 카자흐스탄의 맞춤 노선도 운영합니다. 픽업, 목적지, 날짜, 인원 및 수하물을 보내주세요.",
    quoteButton: "맞춤 견적 받기",
    pricesLink: "상세 요금 안내 보기",
  },
};

type Filter = "all" | TransferRoute["category"];

const popularSlugs = [
  "manas-airport-to-bishkek",
  "bishkek-to-manas-airport",
  "bishkek-to-karakol",
  "almaty-to-karakol",
];

function routeLocationKey(value: Record<TransferLang, string>) {
  return value.en;
}

export default function TransfersCatalog({ lang }: { lang: TransferLang }) {
  const t = copy[lang];
  const [pickup, setPickup] = useState("Manas Airport");
  const [destination, setDestination] = useState("Bishkek");
  const [selectedRoute, setSelectedRoute] = useState<TransferRoute | null>(transferRoutes[0]);
  const [searched, setSearched] = useState(false);
  const [filter, setFilter] = useState<Filter>("all");

  const locations = useMemo(() => {
    const map = new Map<string, Record<TransferLang, string>>();
    transferRoutes.forEach((route) => {
      map.set(routeLocationKey(route.from), route.from);
      map.set(routeLocationKey(route.to), route.to);
    });
    return [...map.entries()].sort((a, b) => a[1][lang].localeCompare(b[1][lang]));
  }, [lang]);

  const destinations = useMemo(() => {
    const available = new Set(
      transferRoutes
        .filter((route) => routeLocationKey(route.from) === pickup)
        .map((route) => routeLocationKey(route.to))
    );
    return locations.filter(([key]) => available.has(key));
  }, [locations, pickup]);

  const filteredRoutes = filter === "all"
    ? transferRoutes
    : transferRoutes.filter((route) => route.category === filter);

  function findRoute() {
    const route = transferRoutes.find(
      (item) => routeLocationKey(item.from) === pickup && routeLocationKey(item.to) === destination
    ) ?? null;
    setSelectedRoute(route);
    setSearched(true);
  }

  function changePickup(value: string) {
    setPickup(value);
    const firstDestination = transferRoutes.find((route) => routeLocationKey(route.from) === value);
    setDestination(firstDestination ? routeLocationKey(firstDestination.to) : "");
    setSearched(false);
  }

  function swapLocations() {
    const reverse = transferRoutes.find(
      (route) => routeLocationKey(route.from) === destination && routeLocationKey(route.to) === pickup
    );
    setPickup(destination);
    setDestination(pickup);
    setSelectedRoute(reverse ?? null);
    setSearched(true);
  }

  const customWa = `https://wa.me/996552291808?text=${encodeURIComponent(
    lang === "ru"
      ? `Здравствуйте! Нужен трансфер ${pickup || "____"} → ${destination || "____"}.`
      : lang === "ko"
        ? `안녕하세요! ${pickup || "____"} → ${destination || "____"} 맞춤 이동이 필요합니다.`
        : `Hi! I need a private transfer from ${pickup || "____"} to ${destination || "____"}.`
  )}`;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header lang={lang} languagePath="/transfers" />
      <main>
        <section className="bg-gradient-to-br from-teal-700 via-cyan-700 to-blue-700 pb-28 pt-14 text-white md:pb-32 md:pt-20">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-cyan-100">{t.eyebrow}</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-3xl font-bold leading-tight md:text-5xl">{t.title}</h1>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-cyan-50 md:text-lg">{t.intro}</p>
          </div>
        </section>

        <section className="relative z-10 mx-auto -mt-20 max-w-5xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-xl md:p-7">
            <div className="grid gap-3 md:grid-cols-[1fr_auto_1fr_auto] md:items-end">
              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700">{t.fromLabel}</span>
                <select value={pickup} onChange={(event) => changePickup(event.target.value)} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-medium outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100">
                  {locations.map(([key, names]) => <option key={key} value={key}>{names[lang]}</option>)}
                </select>
              </label>

              <button onClick={swapLocations} className="mx-auto flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 hover:bg-teal-50 hover:text-teal-700 md:mb-0" aria-label="Swap pickup and destination">
                <ArrowUpDown className="h-5 w-5 md:rotate-90" />
              </button>

              <label>
                <span className="mb-2 block text-sm font-semibold text-slate-700">{t.toLabel}</span>
                <select value={destination} onChange={(event) => { setDestination(event.target.value); setSearched(false); }} className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-base font-medium outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-100">
                  {destinations.length === 0 && <option value="">{t.choose}</option>}
                  {destinations.map(([key, names]) => <option key={key} value={key}>{names[lang]}</option>)}
                </select>
              </label>

              <button onClick={findRoute} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white hover:bg-teal-800">
                <Search className="h-5 w-5" />{t.find}
              </button>
            </div>

            <div className="mt-5 grid gap-3 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {[t.confirmed, t.private, t.support].map((item) => (
                <p key={item} className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle className="h-4 w-4 flex-none text-emerald-600" />{item}
                </p>
              ))}
            </div>
          </div>
        </section>

        {(selectedRoute || searched) && (
          <section className="mx-auto max-w-5xl px-4 py-10">
            {selectedRoute ? (
              <div className="overflow-hidden rounded-3xl border border-teal-200 bg-white shadow-sm">
                <div className="bg-teal-50 p-6 md:p-8">
                  <p className="text-sm font-bold uppercase tracking-widest text-teal-700">{t.result}</p>
                  <h2 className="mt-3 flex flex-wrap items-center gap-3 text-2xl font-bold md:text-3xl">
                    {selectedRoute.from[lang]} <ArrowRight className="h-6 w-6 text-teal-600" /> {selectedRoute.to[lang]}
                  </h2>
                  <div className="mt-5 flex flex-wrap gap-4 text-sm text-slate-600">
                    <span className="inline-flex items-center gap-2"><MapPin className="h-5 w-5 text-teal-700" />{t.distance}: {selectedRoute.distance}</span>
                    <span className="inline-flex items-center gap-2"><Clock className="h-5 w-5 text-teal-700" />{t.time}: {selectedRoute.duration[lang]}</span>
                  </div>
                </div>
                <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
                  <PriceOption icon={Car} name={t.sedan} capacity={t.sedanCapacity} price={selectedRoute.sedan} suffix={t.perVehicle} />
                  <PriceOption icon={Users} name={t.minivan} capacity={t.minivanCapacity} price={selectedRoute.minivan} suffix={t.perVehicle} />
                </div>
                <div className="flex flex-col gap-3 border-t border-slate-100 p-6 sm:flex-row md:px-8">
                  <Link href={transferHref(selectedRoute, lang)} className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border-2 border-teal-700 px-6 py-3 font-semibold text-teal-700 hover:bg-teal-50">
                    {t.details}<ArrowRight className="h-4 w-4" />
                  </Link>
                  <a href={`https://wa.me/996552291808?text=${encodeURIComponent(`${t.bookingMessage}: ${selectedRoute.from[lang]} → ${selectedRoute.to[lang]}`)}`} target="_blank" rel="noopener noreferrer" className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-700">
                    <MessageCircle className="h-5 w-5" />{t.book}
                  </a>
                </div>
              </div>
            ) : (
              <div className="rounded-3xl border border-amber-200 bg-amber-50 p-7 text-center">
                <h2 className="text-xl font-bold">{t.noRoute}</h2>
                <a href={customWa} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white">
                  <MessageCircle className="h-5 w-5" />{t.custom}
                </a>
              </div>
            )}
          </section>
        )}

        <section className="mx-auto max-w-6xl px-4 py-10">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div><p className="text-sm font-bold uppercase tracking-widest text-teal-700">{t.popularEyebrow}</p><h2 className="mt-2 text-2xl font-bold md:text-3xl">{t.popular}</h2></div>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {transferRoutes.filter((route) => popularSlugs.includes(route.slug)).map((route) => (
              <RouteCard key={route.slug} route={route} lang={lang} details={t.details} fromText={t.priceFrom} />
            ))}
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div><p className="text-sm font-bold uppercase tracking-widest text-teal-700">{t.all}</p><h2 className="mt-2 text-2xl font-bold md:text-3xl">{t.all}</h2></div>
              <div className="flex flex-wrap gap-2">
                {([
                  ["all", t.allFilter],
                  ["airport", t.airport],
                  ["kyrgyzstan", t.domestic],
                  ["cross-border", t.border],
                ] as [Filter, string][]).map(([key, label]) => (
                  <button key={key} onClick={() => setFilter(key)} className={`rounded-full px-4 py-2 text-sm font-semibold ${filter === key ? "bg-teal-700 text-white" : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"}`}>
                    {label}
                  </button>
                ))}
              </div>
            </div>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {filteredRoutes.map((route) => <RouteCard key={route.slug} route={route} lang={lang} details={t.details} fromText={t.priceFrom} />)}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="rounded-3xl bg-slate-900 p-7 text-white md:p-10">
            <ShieldCheck className="h-9 w-9 text-emerald-400" />
            <h2 className="mt-4 text-2xl font-bold md:text-3xl">{t.quote}</h2>
            <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">{t.quoteText}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href={customWa} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3 font-semibold">
                <MessageCircle className="h-5 w-5" />{t.quoteButton}
              </a>
              <Link href={lang === "en" ? "/pricing" : `/${lang}/pricing`} className="inline-flex items-center justify-center rounded-full border border-white/30 px-7 py-3 font-semibold text-white hover:bg-white/10">
                {t.pricesLink}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function PriceOption({ icon: Icon, name, capacity, price, suffix }: { icon: typeof Car; name: string; capacity: string; price: number; suffix: string }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 p-5">
      <div className="flex items-center gap-3">
        <span className="rounded-xl bg-slate-100 p-3 text-teal-700"><Icon className="h-6 w-6" /></span>
        <div><p className="font-bold">{name}</p><p className="text-xs text-slate-500">{capacity}</p></div>
      </div>
      <div className="text-right"><p className="text-2xl font-extrabold">${price}</p><p className="text-xs text-slate-500">{suffix}</p></div>
    </div>
  );
}

function RouteCard({ route, lang, details, fromText }: { route: TransferRoute; lang: TransferLang; details: string; fromText: string }) {
  const Icon = route.category === "airport" ? Plane : route.category === "cross-border" ? Route : MapPin;
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <Icon className="h-6 w-6 text-teal-700" />
      <h3 className="mt-4 flex items-center gap-2 font-bold">
        {route.from[lang]} <ArrowRight className="h-4 w-4 text-slate-400" /> {route.to[lang]}
      </h3>
      <div className="mt-3 flex gap-3 text-xs text-slate-500">
        <span>{route.distance}</span><span>·</span><span>{route.duration[lang]}</span>
      </div>
      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="text-xs text-slate-500">{fromText}</p>
        <p className="text-xl font-extrabold">${route.sedan} <span className="text-xs font-normal text-slate-500">Sedan</span></p>
      </div>
      <Link href={transferHref(route, lang)} className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal-700">
        {details}<ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}
