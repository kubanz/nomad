import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Users, Award, Clock, Shield, Star } from "lucide-react";

export const metadata: Metadata = {
  title: "About Nomad Transfer | Licensed Transfer Company in Kyrgyzstan Since 2019",
  description:
    "Nomad Transfer is a licensed private transfer company in Kyrgyzstan. Operating since 2019, we provide safe, reliable transfers across Kyrgyzstan and Kazakhstan. English-speaking support, professional drivers, 1000+ satisfied customers.",
  keywords: [
    "about nomad transfer",
    "kyrgyzstan transfer company",
    "licensed transfer kyrgyzstan",
    "professional drivers kyrgyzstan",
    "private transfer company",
    "kyrgyzstan transportation",
    "reliable transfer service",
    "english speaking drivers",
  ],
  openGraph: {
    title: "About Nomad Transfer | Licensed Transfer Company in Kyrgyzstan",
    description: "Licensed private transfer company since 2019. 1000+ satisfied customers. Professional drivers. English-speaking support.",
    type: "website",
    url: "https://nomad-transfer.com/about",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/about",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Nomad Transfer",
  "url": "https://nomad-transfer.com",
  "logo": "https://nomad-transfer.com/logo.png",
  "foundingDate": "2019",
  "description": "Licensed private transfer company operating in Kyrgyzstan and Kazakhstan since 2019",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "KG",
    "addressLocality": "Bishkek",
  },
  "telephone": "+996552291808",
  "areaServed": ["Kyrgyzstan", "Kazakhstan"],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Transfer Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Private Transfer",
          "description": "Private transfer services across Kyrgyzstan",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Airport Transfer",
          "description": "Airport pickup and drop-off services",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Multi-day Tours",
          "description": "Multi-day tour packages with private driver",
        },
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-600 to-teal-700 py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold md:text-5xl">About Nomad Transfer</h1>
              <p className="mt-6 text-xl text-teal-50">
                Your trusted private transfer partner in Kyrgyzstan since 2019. We connect travelers with safe, reliable transportation across Central Asia.
              </p>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Our Story */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-slate-900">Our Story</h2>
              <div className="space-y-4 text-slate-600">
                <p>
                  Nomad Transfer was founded in 2019 by a team of local travel enthusiasts who saw a gap in reliable, English-speaking transfer services in Kyrgyzstan. We started with just 2 vehicles and a simple mission: make travel across Kyrgyzstan safe, comfortable, and stress-free.
                </p>
                <p>
                  Today, we operate a fleet of 15+ modern vehicles and have served over 1,000 satisfied customers from around the world. Our drivers know every mountain pass, border crossing, and scenic route in Kyrgyzstan and Kazakhstan.
                </p>
                <p>
                  What sets us apart is our commitment to transparency, safety, and customer service. Every transfer is confirmed via WhatsApp with English-speaking support, every price is fixed upfront with no hidden fees, and every driver is vetted, licensed, and experienced.
                </p>
              </div>
            </div>

            {/* Key Stats */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6 text-center">
                <Clock className="mx-auto h-12 w-12 text-teal-600" />
                <p className="mt-4 text-4xl font-bold text-teal-900">5+</p>
                <p className="mt-2 text-sm font-medium text-teal-700">Years Operating</p>
              </div>
              <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6 text-center">
                <Users className="mx-auto h-12 w-12 text-amber-600" />
                <p className="mt-4 text-4xl font-bold text-amber-900">1000+</p>
                <p className="mt-2 text-sm font-medium text-amber-700">Happy Customers</p>
              </div>
              <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
                <MapPin className="mx-auto h-12 w-12 text-blue-600" />
                <p className="mt-4 text-4xl font-bold text-blue-900">15+</p>
                <p className="mt-2 text-sm font-medium text-blue-700">Transfer Routes</p>
              </div>
              <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 text-center">
                <Star className="mx-auto h-12 w-12 text-purple-600" />
                <p className="mt-4 text-4xl font-bold text-purple-900">4.9/5</p>
                <p className="mt-2 text-sm font-medium text-purple-700">Average Rating</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-slate-50 py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Why Travelers Choose Us</h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <Shield className="h-10 w-10 text-teal-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Licensed & Insured</h3>
                <p className="mt-3 text-slate-600">
                  All our vehicles are fully licensed and insured. Our drivers hold commercial licenses and have clean driving records.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <Users className="h-10 w-10 text-teal-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">English Support</h3>
                <p className="mt-3 text-slate-600">
                  Real-time English-speaking support via WhatsApp. Book in minutes, track your driver, communicate easily.
                </p>
              </div>
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <Award className="h-10 w-10 text-teal-600" />
                <h3 className="mt-4 text-xl font-bold text-slate-900">Fixed Pricing</h3>
                <p className="mt-3 text-slate-600">
                  No hidden fees, no surge pricing. The price you see is the price you pay. Free cancellation up to 24h before.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Coverage Map */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Our Coverage</h2>
          <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-8">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">🇰🇬 Kyrgyzstan</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Bishkek (capital city)</li>
                  <li>• Karakol (Issyk-Kul region)</li>
                  <li>• Cholpon-Ata (north shore)</li>
                  <li>• Osh (southern capital)</li>
                  <li>• Manas International Airport</li>
                  <li>• Son-Kul Lake</li>
                  <li>• All major ski resorts</li>
                </ul>
              </div>
              <div>
                <h3 className="mb-4 text-lg font-bold text-slate-900">🇰🇿 Kazakhstan</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>• Almaty (largest city)</li>
                  <li>• Almaty International Airport</li>
                  <li>• Border crossings: Korday, Karkara</li>
                  <li>• Charyn Canyon</li>
                  <li>• Cross-border transfers</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold">Ready to Book Your Transfer?</h2>
            <p className="mt-4 text-xl text-teal-50">
              Join 1000+ satisfied travelers. Book in 1-2 minutes via WhatsApp.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/996552291808?text=Hi!%20I%20need%20a%20transfer%20in%20Kyrgyzstan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600"
              >
                Book via WhatsApp
              </a>
              <Link
                href="/#transfers"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-teal-600"
              >
                View All Routes
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
