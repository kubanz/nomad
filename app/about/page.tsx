import type { Metadata } from "next";
import Link from "next/link";
import {
  Calendar,
  Car,
  CheckCircle,
  Clock,
  MapPin,
  MessageCircle,
  Route,
  Shield,
  TentTree,
  Users,
  Wrench,
} from "lucide-react";

const pageUrl = "https://nomad-transfer.com/about";
const whatsappUrl =
  "https://wa.me/996552291808?text=Hi!%20I%20need%20a%20private%20transfer%20in%20Kyrgyzstan";

export const metadata: Metadata = {
  title: "About Nomad Transfer | Family Transfer Service in Kyrgyzstan",
  description:
    "Meet Nomad Transfer, a family-run service founded in 2024 with 20+ vehicles and experienced drivers serving routes across Kyrgyzstan and Kazakhstan.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "About Nomad Transfer | Family Transfer Service in Kyrgyzstan",
    description:
      "Learn how Nomad Transfer grew from one car and one Bishkek-Karakol route into a network of 20+ vehicles.",
    type: "website",
    url: pageUrl,
    siteName: "Nomad Transfer",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Travel in Kyrgyzstan with Nomad Transfer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Nomad Transfer",
    description:
      "A family-run private transfer service with 20+ vehicles serving routes across Kyrgyzstan and Kazakhstan.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
};

const faqItems = [
  {
    question: "When was Nomad Transfer founded?",
    answer:
      "Nomad Transfer was founded in 2024 as a family-run service. We began with one car and one route between Bishkek and Karakol.",
  },
  {
    question: "What vehicles are available?",
    answer:
      "Our network includes more than 20 vehicles of different types, including sedans, SUVs, minivans, and larger vehicles for groups.",
  },
  {
    question: "How experienced are your drivers?",
    answer:
      "Many of our drivers have more than 10 years of experience in tourist and long-distance passenger transport. They know the main roads, mountain routes, and popular destinations in Kyrgyzstan.",
  },
  {
    question: "How do you maintain your vehicles?",
    answer:
      "Vehicles receive scheduled maintenance on time, and drivers perform checks before long-distance trips. We select a suitable vehicle for the route, passenger count, and luggage.",
  },
  {
    question: "Will you offer yurt bookings?",
    answer:
      "Yurt booking is a planned future service. We intend to add selected yurt camps to our website so travelers can organize transport and accommodation in one place.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://nomad-transfer.com/#organization",
      name: "Nomad Transfer",
      url: "https://nomad-transfer.com",
      foundingDate: "2024",
      description:
        "Family-run private transfer service operating in Kyrgyzstan and Kazakhstan.",
      telephone: "+996552291808",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bishkek",
        addressCountry: "KG",
      },
      areaServed: [
        { "@type": "Country", name: "Kyrgyzstan" },
        { "@type": "Country", name: "Kazakhstan" },
      ],
      sameAs: ["https://t.me/nomadtransfer"],
      knowsLanguage: ["en", "ru", "ko"],
    },
    {
      "@type": "AboutPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: "About Nomad Transfer",
      description:
        "The story, team, vehicles, safety standards, and future plans of Nomad Transfer.",
      inLanguage: "en",
      about: {
        "@id": "https://nomad-transfer.com/#organization",
      },
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://nomad-transfer.com/#website",
        url: "https://nomad-transfer.com",
        name: "Nomad Transfer",
      },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://nomad-transfer.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "About Us",
          item: pageUrl,
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  ],
};

const facts = [
  {
    icon: Calendar,
    value: "2024",
    label: "Family business founded",
  },
  {
    icon: Car,
    value: "20+",
    label: "Vehicles of different types",
  },
  {
    icon: Clock,
    value: "10+ years",
    label: "Experience of many drivers",
  },
  {
    icon: MapPin,
    value: "KG & KZ",
    label: "Main service area",
  },
];

const steps = [
  "Tell us your route, travel date, passenger count, and luggage.",
  "We recommend a suitable vehicle and confirm the price before the trip.",
  "You receive the booking and driver details through WhatsApp.",
  "The driver picks you up at the agreed address and takes you to your destination.",
];

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <main className="min-h-screen bg-white">
        <section className="bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-600 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl">
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-teal-100">
                Family-run since 2024
              </p>
              <h1 className="text-4xl font-bold leading-tight md:text-6xl">
                About Nomad Transfer
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-teal-50 md:text-xl">
                We are a family-run private transfer service helping travelers
                explore Kyrgyzstan and Kazakhstan with comfortable vehicles,
                experienced local drivers, and clear communication.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/#route-prices"
                  className="rounded-full bg-white px-7 py-3 font-semibold text-teal-700 transition hover:bg-teal-50"
                >
                  View Routes
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-teal-700"
                >
                  <MessageCircle className="h-5 w-5" />
                  Book via WhatsApp
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-slate-900">
              Who We Are
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Nomad Transfer is a family-run service founded in Bishkek in
              2024. We organize private airport, intercity, tourist, and
              cross-border transfers. Our network includes sedans, SUVs,
              minivans, and larger vehicles, allowing us to match each trip to
              the route, group size, and luggage.
            </p>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {facts.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center"
              >
                <Icon className="mx-auto h-9 w-9 text-teal-600" />
                <p className="mt-4 text-3xl font-bold text-slate-900">
                  {value}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto grid items-start gap-12 px-4 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="rounded-3xl bg-teal-700 p-8 text-white lg:sticky lg:top-24">
              <Route className="h-12 w-12 text-teal-100" />
              <p className="mt-8 text-sm font-semibold uppercase tracking-widest text-teal-100">
                Where we started
              </p>
              <p className="mt-3 text-3xl font-bold">
                One car. One route.
              </p>
              <p className="mt-3 text-lg text-teal-50">
                Bishkek to Karakol was the first route in our family business.
              </p>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-slate-900">Our Story</h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-600">
                <p>
                  Nomad Transfer began with our father. He worked as a taxi
                  driver, accepted private bookings, and helped people reach
                  destinations across Kyrgyzstan. By watching his work, we saw
                  where the travel experience could be better organized, more
                  comfortable, and more convenient for passengers.
                </p>
                <p>
                  In 2024, we decided to put those ideas into practice. We
                  wanted to find out whether we could build a service around
                  reliable communication, suitable vehicles, and genuine care
                  for each journey. We started with one car and one route:
                  Bishkek to Karakol.
                </p>
                <p>
                  Today, our network includes more than 20 vehicles of
                  different types. Many of our drivers bring more than 10
                  years of experience in tourist and long-distance passenger
                  transport. They know the local roads, mountain routes, and
                  popular destinations that visitors travel to.
                </p>
                <p>
                  We are still growing. We continue to add routes, improve the
                  booking experience, and develop services that make planning
                  a journey through Kyrgyzstan easier.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-8 lg:grid-cols-2">
            <article className="rounded-3xl border border-slate-200 p-8">
              <Wrench className="h-11 w-11 text-teal-600" />
              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Vehicles and Maintenance
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Every vehicle receives scheduled maintenance on time. Before
                long-distance trips, drivers check the vehicle&apos;s condition
                and essential equipment. We choose a vehicle based on the
                route, passenger count, road conditions, and luggage.
              </p>
              <Link
                href="/fleet"
                className="mt-6 inline-flex font-semibold text-teal-700 hover:underline"
              >
                Explore our vehicle categories
              </Link>
            </article>

            <article className="rounded-3xl border border-slate-200 p-8">
              <Users className="h-11 w-11 text-teal-600" />
              <h2 className="mt-5 text-2xl font-bold text-slate-900">
                Experienced Local Drivers
              </h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Many of our drivers have more than 10 years of experience in
                tourist and long-distance transport. They understand mountain
                roads, changing weather conditions, border routes, and the
                needs of international travelers.
              </p>
              <Link
                href="/drivers"
                className="mt-6 inline-flex font-semibold text-teal-700 hover:underline"
              >
                Learn about our drivers
              </Link>
            </article>
          </div>
        </section>

        <section className="bg-teal-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <Shield className="mx-auto h-12 w-12 text-teal-700" />
                <h2 className="mt-5 text-3xl font-bold text-slate-900">
                  How We Organize Your Transfer
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-slate-600">
                  A simple process with the route, vehicle, and price agreed
                  before your journey.
                </p>
              </div>

              <ol className="mt-10 grid gap-5 md:grid-cols-2">
                {steps.map((step, index) => (
                  <li
                    key={step}
                    className="flex gap-4 rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-teal-700 font-bold text-white">
                      {index + 1}
                    </span>
                    <p className="pt-1 leading-relaxed text-slate-700">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl bg-slate-900 p-8 text-white md:grid-cols-[auto_1fr] md:p-12">
            <TentTree className="h-14 w-14 text-amber-300" />
            <div>
              <p className="text-sm font-semibold uppercase tracking-widest text-amber-300">
                What comes next
              </p>
              <h2 className="mt-3 text-3xl font-bold">Our Plans</h2>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-300">
                We are expanding our routes and improving the tools available
                on our website. One of our next planned services is yurt
                booking. We intend to add selected yurt camps so travelers can
                arrange transport and accommodation in one place.
              </p>
              <p className="mt-4 text-sm text-slate-400">
                Yurt booking is planned and is not yet available on the
                website.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-3xl font-bold text-slate-900">
                Frequently Asked Questions
              </h2>
              <div className="mt-10 space-y-4">
                {faqItems.map((item) => (
                  <details
                    key={item.question}
                    className="group rounded-2xl border border-slate-200 bg-white p-6"
                  >
                    <summary className="cursor-pointer list-none font-semibold text-slate-900">
                      <span className="flex items-center justify-between gap-4">
                        {item.question}
                        <CheckCircle className="h-5 w-5 flex-none text-teal-600" />
                      </span>
                    </summary>
                    <p className="mt-4 leading-relaxed text-slate-600">
                      {item.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-gradient-to-r from-teal-700 to-emerald-600 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Planning a Trip?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-teal-50">
              Tell us your route, travel date, number of passengers, and
              luggage. We will recommend a suitable vehicle and confirm the
              price before your trip.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 font-semibold text-teal-700 transition hover:bg-teal-50"
              >
                <MessageCircle className="h-5 w-5" />
                Book via WhatsApp
              </a>
              <Link
                href="/pricing"
                className="rounded-full border-2 border-white px-7 py-3 font-semibold transition hover:bg-white hover:text-teal-700"
              >
                View Prices
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
