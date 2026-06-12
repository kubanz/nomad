import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Banknote,
  Bus,
  Car,
  CheckCircle,
  Clock,
  Luggage,
  MapPin,
  MessageCircle,
  Route,
  ShieldCheck,
  Users,
} from "lucide-react";

const pageUrl = "https://nomad-transfer.com/pricing";
const whatsappUrl =
  "https://wa.me/996552291808?text=Hi!%20I%20need%20a%20quote%20for%20a%20private%20transfer";

export const metadata: Metadata = {
  title: "Private Transfer Prices in Kyrgyzstan | Nomad Transfer",
  description:
    "Compare fixed private transfer prices across Kyrgyzstan and Kazakhstan. Prices are per vehicle and include fuel, pickup, drop-off, and route support.",
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "Private Transfer Prices in Kyrgyzstan | Nomad Transfer",
    description:
      "Clear prices per vehicle for private transfers across Kyrgyzstan and Kazakhstan.",
    type: "website",
    url: pageUrl,
    siteName: "Nomad Transfer",
    images: [{
      url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      width: 1200,
      height: 630,
      alt: "Private transfer routes and prices in Kyrgyzstan",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Private Transfer Prices in Kyrgyzstan",
    description: "Fixed prices per vehicle for routes across Kyrgyzstan and Kazakhstan.",
    images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"],
  },
};

type TransferRoute = {
  from: string;
  to: string;
  distance: string;
  duration: string;
  sedan: number;
  minivan: number;
  group: number | null;
  href: string;
  region: "Kyrgyzstan" | "Cross-border";
};

const routes: TransferRoute[] = [
  { from: "Bishkek", to: "Cholpon-Ata", distance: "250 km", duration: "3-4h", sedan: 115, minivan: 145, group: 235, href: "/transfers/bishkek-to-cholpon-ata", region: "Kyrgyzstan" },
  { from: "Bishkek", to: "Karakol", distance: "360 km", duration: "6-7h", sedan: 136, minivan: 167, group: 265, href: "/transfers/bishkek-to-karakol", region: "Kyrgyzstan" },
  { from: "Bishkek", to: "Osh", distance: "620 km", duration: "10-12h", sedan: 290, minivan: 340, group: 590, href: "/transfers/bishkek-to-osh", region: "Kyrgyzstan" },
  { from: "Manas Airport", to: "Bishkek", distance: "30 km", duration: "30-40min", sedan: 35, minivan: 45, group: null, href: "/transfers/manas-airport-to-bishkek", region: "Kyrgyzstan" },
  { from: "Bishkek", to: "Manas Airport", distance: "30 km", duration: "30-40min", sedan: 35, minivan: 45, group: null, href: "/transfers/bishkek-to-manas-airport", region: "Kyrgyzstan" },
  { from: "Manas Airport", to: "Karakol", distance: "390 km", duration: "6.5-7.5h", sedan: 146, minivan: 177, group: 275, href: "/transfers/manas-airport-to-karakol", region: "Kyrgyzstan" },
  { from: "Cholpon-Ata", to: "Bishkek", distance: "250 km", duration: "3-4h", sedan: 115, minivan: 145, group: 235, href: "/transfers/cholpon-ata-to-bishkek", region: "Kyrgyzstan" },
  { from: "Karakol", to: "Bishkek", distance: "360 km", duration: "6-7h", sedan: 136, minivan: 167, group: 265, href: "/transfers/karakol-to-bishkek", region: "Kyrgyzstan" },
  { from: "Karakol", to: "Manas Airport", distance: "390 km", duration: "6.5-7.5h", sedan: 146, minivan: 177, group: 275, href: "/transfers/karakol-to-manas-airport", region: "Kyrgyzstan" },
  { from: "Osh", to: "Bishkek", distance: "620 km", duration: "10-12h", sedan: 290, minivan: 340, group: 590, href: "/transfers/osh-to-bishkek", region: "Kyrgyzstan" },
  { from: "Almaty", to: "Bishkek", distance: "240 km", duration: "3-4h", sedan: 90, minivan: 115, group: 220, href: "/transfers/almaty-to-bishkek", region: "Cross-border" },
  { from: "Bishkek", to: "Almaty", distance: "240 km", duration: "3-4h", sedan: 90, minivan: 115, group: 220, href: "/transfers/bishkek-to-almaty", region: "Cross-border" },
  { from: "Almaty", to: "Karakol", distance: "430 km", duration: "7-8h", sedan: 235, minivan: 275, group: 485, href: "/transfers/almaty-to-karakol", region: "Cross-border" },
  { from: "Karakol", to: "Almaty", distance: "430 km", duration: "7-8h", sedan: 235, minivan: 275, group: 485, href: "/transfers/karakol-to-almaty", region: "Cross-border" },
];

const vehicles = [
  { name: "Sedan", icon: Car, capacity: "Up to 4 passengers", luggage: "2-3 suitcases", best: "Couples, families, and small groups", style: "bg-teal-100 text-teal-700" },
  { name: "Minivan", icon: Users, capacity: "Up to 6-7 passengers", luggage: "4-6 suitcases", best: "Families and groups with luggage", style: "bg-amber-100 text-amber-700" },
  { name: "Group vehicle", icon: Bus, capacity: "Up to 30 passengers", luggage: "Large luggage capacity", best: "Tour groups and organized travel", style: "bg-blue-100 text-blue-700" },
];

const included = [
  "Fuel and standard road costs",
  "Pickup and drop-off at the agreed addresses",
  "Private vehicle for your group",
  "Driver and route coordination",
  "English-speaking WhatsApp support",
  "Short rest and photo stops when possible",
  "Winter equipment when required",
  "Border-route guidance for Kazakhstan transfers",
];

const faqItems = [
  { question: "Are prices per person or per vehicle?", answer: "All prices are per vehicle for a private one-way transfer, not per passenger. Your group does not share the vehicle with other travelers." },
  { question: "What is included in the price?", answer: "The listed price includes the vehicle, driver, fuel, standard road costs, pickup, and drop-off. Attractions, meals, overnight stays, and major detours may cost extra." },
  { question: "Can I request a route that is not listed?", answer: "Yes. Send us your pickup point, destination, date, passenger count, and luggage for an individual quote across Kyrgyzstan or Kazakhstan." },
  { question: "Can the confirmed price change?", answer: "The confirmed price stays fixed unless you request a different route, additional stops, another vehicle, or extra services." },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "CollectionPage", "@id": `${pageUrl}#webpage`, url: pageUrl, name: "Private Transfer Prices in Kyrgyzstan", description: "Fixed private transfer prices per vehicle for routes across Kyrgyzstan and Kazakhstan.", inLanguage: "en", about: { "@id": "https://nomad-transfer.com/#organization" } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nomad-transfer.com/" },
      { "@type": "ListItem", position: 2, name: "Transfer Prices", item: pageUrl },
    ] },
    { "@type": "ItemList", name: "Nomad Transfer routes and prices", numberOfItems: routes.length, itemListElement: routes.map((route, index) => ({
      "@type": "ListItem", position: index + 1, url: `https://nomad-transfer.com${route.href}`,
      item: { "@type": "Service", name: `${route.from} to ${route.to} private transfer`, provider: { "@id": "https://nomad-transfer.com/#organization" }, offers: { "@type": "Offer", price: route.sedan, priceCurrency: "USD", description: "Starting price for a private sedan transfer" } },
    })) },
    { "@type": "FAQPage", mainEntity: faqItems.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) },
  ],
};

function Price({ value }: { value: number | null }) {
  return value === null
    ? <span className="text-xs text-slate-400">On request</span>
    : <span className="font-bold text-slate-900">${value}</span>;
}

function RouteCard({ route }: { route: TransferRoute }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-semibold uppercase tracking-wider text-teal-700">{route.region}</p>
      <h3 className="mt-2 flex flex-wrap items-center gap-2 text-lg font-bold text-slate-900">
        {route.from}<ArrowRight className="h-4 w-4 text-slate-400" />{route.to}
      </h3>
      <div className="mt-3 flex gap-4 text-sm text-slate-600">
        <span className="inline-flex items-center gap-1"><MapPin className="h-4 w-4" />{route.distance}</span>
        <span className="inline-flex items-center gap-1"><Clock className="h-4 w-4" />{route.duration}</span>
      </div>
      <div className="mt-5 grid grid-cols-3 gap-2 border-y border-slate-100 py-4 text-center text-sm">
        <div><Car className="mx-auto h-4 w-4 text-teal-600" /><p className="my-1 text-xs text-slate-500">Sedan</p><Price value={route.sedan} /></div>
        <div><Users className="mx-auto h-4 w-4 text-amber-600" /><p className="my-1 text-xs text-slate-500">Minivan</p><Price value={route.minivan} /></div>
        <div><Bus className="mx-auto h-4 w-4 text-blue-600" /><p className="my-1 text-xs text-slate-500">Group</p><Price value={route.group} /></div>
      </div>
      <Link href={route.href} className="mt-4 inline-flex items-center gap-2 font-semibold text-teal-700">
        Route details <ArrowRight className="h-4 w-4" />
      </Link>
    </article>
  );
}

function RouteTable({ items, crossBorder = false }: { items: TransferRoute[]; crossBorder?: boolean }) {
  return (
    <>
      <div className="grid gap-4 md:hidden">
        {items.map((route) => <RouteCard key={`${route.from}-${route.to}`} route={route} />)}
      </div>
      <div className="hidden overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm md:block">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px]">
            <thead className={crossBorder ? "bg-amber-700 text-white" : "bg-slate-900 text-white"}>
              <tr>
                {["Route", "Distance", "Time", "Sedan", "Minivan", "Group", "Details"].map((label) => (
                  <th key={label} className={`p-4 text-sm font-semibold ${label === "Route" ? "text-left" : label === "Details" ? "text-right" : "text-center"}`}>{label}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {items.map((route) => (
                <tr key={`${route.from}-${route.to}`} className="hover:bg-slate-50">
                  <td className="p-4"><div className="flex items-center gap-2 font-semibold text-slate-900">{route.from}<ArrowRight className="h-4 w-4 text-slate-400" />{route.to}</div></td>
                  <td className="p-4 text-center text-sm text-slate-600">{route.distance}</td>
                  <td className="p-4 text-center text-sm text-slate-600">{route.duration}</td>
                  <td className="p-4 text-center"><Price value={route.sedan} /></td>
                  <td className="p-4 text-center"><Price value={route.minivan} /></td>
                  <td className="p-4 text-center"><Price value={route.group} /></td>
                  <td className="p-4 text-right"><Link href={route.href} className={crossBorder ? "font-semibold text-amber-700" : "font-semibold text-teal-700"}>View route</Link></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default function PricingPage() {
  const domestic = routes.filter((route) => route.region === "Kyrgyzstan");
  const crossBorder = routes.filter((route) => route.region === "Cross-border");

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-teal-700 via-cyan-700 to-blue-700 py-12 text-white md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-100">Clear prices before you travel</p>
              <h1 className="mt-4 text-3xl font-bold leading-tight sm:text-4xl md:text-6xl">Private Transfer Prices</h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-cyan-50 md:text-xl">
                Compare private transfer prices across Kyrgyzstan and Kazakhstan. Every listed price is for the whole vehicle, not per passenger.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="#routes" className="w-full rounded-full bg-white px-7 py-3 text-center font-semibold text-teal-700 sm:w-auto">View Route Prices</a>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white px-7 py-3 font-semibold sm:w-auto">
                  <MessageCircle className="h-5 w-5" />Request a Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { icon: Banknote, title: "Price per vehicle", text: "The price is not multiplied by the number of passengers.", style: "border-emerald-200 bg-emerald-50 text-emerald-700" },
              { icon: ShieldCheck, title: "Confirmed before pickup", text: "We confirm the route, vehicle, included services, and total.", style: "border-blue-200 bg-blue-50 text-blue-700" },
              { icon: Route, title: "Custom routes available", text: "Send your itinerary if your destination is not listed.", style: "border-amber-200 bg-amber-50 text-amber-700" },
            ].map(({ icon: Icon, title, text, style }) => (
              <div key={title} className={`rounded-2xl border p-5 sm:p-6 ${style}`}>
                <Icon className="h-9 w-9" />
                <h2 className="mt-4 font-bold text-slate-900">{title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Choose the Right Vehicle</h2>
              <p className="mx-auto mt-4 max-w-2xl text-slate-600">Capacity depends on passenger count and luggage. We confirm the best option before booking.</p>
            </div>
            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {vehicles.map(({ name, icon: Icon, capacity, luggage, best, style }) => (
                <article key={name} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                  <div className={`inline-flex rounded-2xl p-3 ${style}`}><Icon className="h-8 w-8" /></div>
                  <h3 className="mt-5 text-2xl font-bold text-slate-900">{name}</h3>
                  <ul className="mt-5 space-y-3 text-sm text-slate-600">
                    <li className="flex gap-3"><Users className="h-5 w-5 flex-none" />{capacity}</li>
                    <li className="flex gap-3"><Luggage className="h-5 w-5 flex-none" />{luggage}</li>
                    <li className="flex gap-3"><CheckCircle className="h-5 w-5 flex-none text-emerald-600" />{best}</li>
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="routes" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Routes and Prices</h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-600">One-way prices in USD for a private vehicle. Optional stops and major route changes are quoted separately.</p>
          </div>
          <div className="mt-10 space-y-12">
            <div>
              <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-slate-900"><MapPin className="h-6 w-6 text-teal-700" />Transfers within Kyrgyzstan</h3>
              <RouteTable items={domestic} />
            </div>
            <div>
              <h3 className="mb-5 flex items-center gap-3 text-xl font-bold text-slate-900"><Route className="h-6 w-6 text-amber-700" />Kazakhstan and cross-border transfers</h3>
              <RouteTable items={crossBorder} crossBorder />
            </div>
          </div>
          <div className="mt-8 rounded-2xl border border-teal-200 bg-teal-50 p-5 text-sm leading-relaxed text-slate-700">
            <strong>Important:</strong> prices are for a private one-way transfer. Entrance tickets, meals, accommodation, and optional detours are not included unless stated.
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-6xl px-4">
            <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">Included in Your Transfer</h2>
            <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-2">
              {included.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                  <CheckCircle className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
                  <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-12 md:py-16">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">Custom destination or itinerary</p>
              <h2 className="mt-3 text-2xl font-bold md:text-3xl">Need an Individual Quote?</h2>
              <p className="mt-4 leading-relaxed text-slate-300">Send your pickup, destination, date, passenger count, luggage, and planned stops. We will recommend a vehicle and calculate the price.</p>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-7 py-3 font-semibold sm:w-auto">
                <MessageCircle className="h-5 w-5" />Request via WhatsApp
              </a>
            </div>
            <div className="rounded-3xl border border-slate-200 p-6 sm:p-8">
              <h2 className="text-xl font-bold text-slate-900">To calculate your price</h2>
              <ol className="mt-6 space-y-4">
                {["Pickup and destination", "Date, time, and passengers", "Luggage and planned stops", "Vehicle option and confirmed total"].map((step, index) => (
                  <li key={step} className="flex gap-3"><span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-teal-100 font-bold text-teal-700">{index + 1}</span><p className="pt-1 text-sm text-slate-700">{step}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-12 md:py-16">
          <div className="mx-auto max-w-4xl px-4">
            <h2 className="text-center text-2xl font-bold text-slate-900 md:text-3xl">Pricing Questions</h2>
            <div className="mt-10 space-y-4">
              {faqItems.map((item) => (
                <details key={item.question} className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <summary className="cursor-pointer list-none font-semibold text-slate-900"><span className="flex items-center justify-between gap-4">{item.question}<CheckCircle className="h-5 w-5 flex-none text-teal-600" /></span></summary>
                  <p className="mt-4 leading-relaxed text-slate-600">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-700 to-blue-700 py-12 text-white md:py-16">
          <div className="mx-auto max-w-6xl px-4 text-center">
            <h2 className="text-2xl font-bold md:text-3xl">Ready to Plan Your Transfer?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-cyan-50">Choose a listed route or send us your itinerary for an individual quote.</p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mx-auto mt-8 inline-flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-teal-700 sm:w-auto">
              <MessageCircle className="h-5 w-5" />Request a Quote
            </a>
          </div>
        </section>
      </main>
    </>
  );
}
