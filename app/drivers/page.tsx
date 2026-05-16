import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Award, MessageCircle, MapPin, Star, Languages } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Drivers | Professional Licensed Drivers in Kyrgyzstan | Nomad Transfer",
  description:
    "Meet our team of professional, licensed drivers. Every driver is vetted, experienced with mountain roads, and trained in customer service. English-speaking support available. Average 7+ years driving experience in Kyrgyzstan.",
  keywords: [
    "professional drivers kyrgyzstan",
    "licensed drivers kyrgyzstan",
    "experienced mountain drivers",
    "english speaking drivers",
    "safe drivers kyrgyzstan",
    "private driver kyrgyzstan",
    "professional transfer drivers",
  ],
  openGraph: {
    title: "Our Drivers | Professional Licensed Drivers in Kyrgyzstan",
    description: "Professional, licensed drivers with 7+ years experience. Mountain road experts. English-speaking support.",
    type: "website",
    url: "https://nomad-transfer.com/drivers",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/drivers",
  },
};

export default function DriversPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Our Professional Drivers</h1>
            <p className="mt-6 text-xl text-blue-50">
              Every Nomad Transfer driver is carefully vetted, licensed, and trained. Your safety and comfort are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Driver Requirements */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Driver Requirements & Vetting</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <Shield className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Licensed & Insured</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Valid commercial driver's license</li>
              <li>✓ Clean driving record (no violations)</li>
              <li>✓ Full insurance coverage</li>
              <li>✓ Annual license renewal verification</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <Award className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Experience Required</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Minimum 5 years driving experience</li>
              <li>✓ Mountain road expertise required</li>
              <li>✓ Border crossing experience</li>
              <li>✓ Average driver tenure: 7+ years</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <Star className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Customer Service</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Professional conduct training</li>
              <li>✓ Customer service orientation</li>
              <li>✓ Punctuality requirements</li>
              <li>✓ Rated 4.8+ average by customers</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <Languages className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Language Support</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Russian (native or fluent)</li>
              <li>✓ Basic English for essential communication</li>
              <li>✓ English WhatsApp support team available</li>
              <li>✓ Some drivers speak Turkish, Korean</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <MapPin className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Route Knowledge</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ Expert knowledge of all major routes</li>
              <li>✓ Scenic stop recommendations</li>
              <li>✓ Weather condition awareness</li>
              <li>✓ Alternative route planning</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <MessageCircle className="h-12 w-12 text-blue-600" />
            <h3 className="mt-4 text-xl font-bold text-slate-900">Communication</h3>
            <ul className="mt-4 space-y-2 text-slate-600">
              <li>✓ WhatsApp contact for all transfers</li>
              <li>✓ Real-time location sharing</li>
              <li>✓ Arrival notifications</li>
              <li>✓ 24/7 dispatch support backup</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Driver Training */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Ongoing Training & Standards</h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Safety Training</h3>
                <p className="text-slate-600">
                  All drivers complete annual safety refresher courses covering defensive driving, winter conditions, mountain roads, and emergency procedures. We monitor weather conditions and provide real-time route updates.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Customer Feedback</h3>
                <p className="text-slate-600">
                  Every transfer is reviewed by customers. Drivers maintain a minimum 4.5/5 rating to continue with Nomad Transfer. Feedback is reviewed monthly, and top performers receive recognition and bonuses.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Vehicle Maintenance</h3>
                <p className="text-slate-600">
                  Drivers are responsible for daily vehicle checks and cleanliness. Vehicles undergo professional servicing every 10,000 km and comprehensive inspections every 6 months.
                </p>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Local Expertise</h3>
                <p className="text-slate-600">
                  Our drivers are locals who grew up in Kyrgyzstan. They know hidden gems, best photo stops, local restaurants, and can share insights about Kyrgyz culture and history along the way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Sets Our Drivers Apart */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">What Sets Our Drivers Apart</h2>
        <div className="mx-auto max-w-3xl">
          <div className="space-y-6">
            <div className="rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-slate-900">Mountain Road Expertise</h3>
              <p className="text-slate-700">
                Kyrgyzstan is 90% mountains. Our drivers have years of experience navigating high-altitude passes (up to 3,500m), winter conditions, and narrow mountain roads. They know when to take it slow and when roads are safest.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-teal-600 bg-teal-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-slate-900">Border Crossing Experience</h3>
              <p className="text-slate-700">
                For transfers to Kazakhstan (Almaty, Charyn), our drivers are experts at Korday and Karkara border crossings. They handle paperwork, communicate with border officials, and make the process smooth for you.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-amber-600 bg-amber-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-slate-900">Customer-First Mentality</h3>
              <p className="text-slate-700">
                Unlike taxi drivers who rush to the next fare, our drivers are assigned to you for the entire journey. They'll wait if you want to take photos, recommend stops, and ensure you're comfortable throughout.
              </p>
            </div>

            <div className="rounded-2xl border-l-4 border-purple-600 bg-purple-50 p-6">
              <h3 className="mb-2 text-lg font-bold text-slate-900">Vetted & Verified</h3>
              <p className="text-slate-700">
                We conduct background checks on all drivers, verify licenses and insurance, check driving records, and personally interview each driver before they join our team. Your safety is non-negotiable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Experience the Difference</h2>
          <p className="mt-4 text-xl text-blue-50">
            Travel with confidence. Our professional drivers are ready to take you safely across Kyrgyzstan.
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
              className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-600"
            >
              View All Routes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
