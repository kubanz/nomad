import type { Metadata } from "next";
import Link from "next/link";
import {
  Shield,
  DollarSign,
  MessageCircle,
  Clock,
  Award,
  Users,
  CheckCircle,
  Star,
  Globe,
  MapPin
} from "lucide-react";

export const metadata: Metadata = {
  title: "Why Choose Nomad Transfer | Best Private Transfer Service in Kyrgyzstan",
  description:
    "Fixed prices, English-speaking WhatsApp support, 20+ vehicles, and experienced local drivers. Learn why travelers choose Nomad Transfer.",
  keywords: [
    "why choose nomad transfer",
    "best transfer kyrgyzstan",
    "private transfer benefits",
    "reliable transfer kyrgyzstan",
    "fixed price transfer",
    "no hidden fees",
    "english support kyrgyzstan",
  ],
  openGraph: {
    title: "Why Choose Nomad Transfer | Best Private Transfer Service in Kyrgyzstan",
    description: "Fixed prices. English support. Licensed drivers. 1000+ happy customers. 4.9/5 rating.",
    type: "website",
    url: "https://nomad-transfer.com/why-choose-us",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/why-choose-us",
  },
};

export default function WhyChooseUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-teal-600 to-teal-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Why Choose Nomad Transfer?</h1>
            <p className="mt-6 text-xl text-teal-50">
              Fixed prices. English support. Professional drivers. Zero hassle. Here's why 1000+ travelers trust us.
            </p>
          </div>
        </div>
      </section>

      {/* Top Reasons */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Top Reasons to Choose Us</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-8 shadow-sm">
            <DollarSign className="mb-4 h-12 w-12 text-teal-600" />
            <h3 className="mb-3 text-xl font-bold text-slate-900">Fixed Prices, No Hidden Fees</h3>
            <p className="mb-4 text-slate-600">
              The price you see is the price you pay. No surge pricing, no "extra fees" at the end. Fuel, tolls, parking — all included.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" />
                <span>Price confirmed upfront via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" />
                <span>No surprise charges at drop-off</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-teal-600" />
                <span>Fuel, tolls, parking included</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-green-200 bg-gradient-to-br from-green-50 to-white p-8 shadow-sm">
            <MessageCircle className="mb-4 h-12 w-12 text-green-600" />
            <h3 className="mb-3 text-xl font-bold text-slate-900">English-Speaking Support</h3>
            <p className="mb-4 text-slate-600">
              Book in minutes via WhatsApp. English-speaking team available 24/7 to answer questions and coordinate your transfer.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>Instant booking confirmation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>Real-time driver tracking</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-green-600" />
                <span>Support available anytime</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-8 shadow-sm">
            <Shield className="mb-4 h-12 w-12 text-blue-600" />
            <h3 className="mb-3 text-xl font-bold text-slate-900">Licensed & Insured</h3>
            <p className="mb-4 text-slate-600">
              All drivers are licensed, vetted, and insured. Every vehicle undergoes regular safety inspections. Your safety is our priority.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span>Commercial driver licenses verified</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span>Full insurance coverage included</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span>Background checks on all drivers</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-white p-8 shadow-sm">
            <Award className="mb-4 h-12 w-12 text-amber-600" />
            <h3 className="mb-3 text-xl font-bold text-slate-900">Experienced Drivers</h3>
            <p className="mb-4 text-slate-600">
              Many drivers have 10+ years of experience in tourist and long-distance transport, including mountain roads and border routes.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                <span>Minimum 5 years experience required</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                <span>Mountain road specialists</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-amber-600" />
                <span>Local knowledge & insights</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-purple-200 bg-gradient-to-br from-purple-50 to-white p-8 shadow-sm">
            <Clock className="mb-4 h-12 w-12 text-purple-600" />
            <h3 className="mb-3 text-xl font-bold text-slate-900">Free Cancellation</h3>
            <p className="mb-4 text-slate-600">
              Plans change. We get it. Free cancellation up to 24 hours before your transfer. No questions asked.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                <span>Cancel free up to 24h before</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                <span>Easy modification via WhatsApp</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-purple-600" />
                <span>Full refund, no penalties</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-rose-200 bg-gradient-to-br from-rose-50 to-white p-8 shadow-sm">
            <Star className="mb-4 h-12 w-12 text-rose-600" />
            <h3 className="mb-3 text-xl font-bold text-slate-900">1000+ Happy Customers</h3>
            <p className="mb-4 text-slate-600">
              Rated 4.9/5 by travelers from around the world. Real reviews from real customers. Join our community.
            </p>
            <ul className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-600" />
                <span>4.9/5 average rating</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-600" />
                <span>Verified customer reviews</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-rose-600" />
                <span>Operating since 2024</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">How We Compare</h2>
          <div className="mx-auto max-w-5xl overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="p-4 text-left font-semibold">Feature</th>
                    <th className="p-4 text-center font-semibold">Nomad Transfer</th>
                    <th className="p-4 text-center font-semibold">Local Taxi</th>
                    <th className="p-4 text-center font-semibold">Shared Marshrutka</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Fixed Price</td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-amber-500">~</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">English Support</td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">WhatsApp Booking</td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Door-to-Door</td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Free Cancellation</td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Licensed & Insured</td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-amber-500">~</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-amber-500">~</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Private Vehicle</td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="p-4 font-medium text-slate-900">Photo Stops Allowed</td>
                    <td className="p-4 text-center"><span className="text-2xl text-green-600">✓</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-amber-500">~</span></td>
                    <td className="p-4 text-center"><span className="text-2xl text-red-500">✗</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            ✓ = Yes | ✗ = No | ~ = Sometimes/Maybe
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">What Travelers Say</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mb-4 text-slate-700">
              "So much better than dealing with taxi drivers who don't speak English. Fixed price, no haggling, professional service. Will definitely use again!"
            </p>
            <p className="font-semibold text-slate-900">Sarah M. <span className="font-normal text-slate-500">🇺🇸 USA</span></p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mb-4 text-slate-700">
              "WhatsApp booking was incredibly easy. Driver was waiting at the airport with my name on a sign. Clean vehicle, smooth ride to Karakol. Exactly as promised."
            </p>
            <p className="font-semibold text-slate-900">David K. <span className="font-normal text-slate-500">🇬🇧 UK</span></p>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-4 flex gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
            </div>
            <p className="mb-4 text-slate-700">
              "The price was upfront and clear. No surprises at the end. Driver stopped at Boom Gorge for photos without me even asking. Highly recommend!"
            </p>
            <p className="font-semibold text-slate-900">Emma L. <span className="font-normal text-slate-500">🇦🇺 Australia</span></p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-teal-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Experience the Nomad Transfer Difference</h2>
          <p className="mt-4 text-xl text-teal-50">
            Join 1000+ satisfied travelers. Book your transfer in 1-2 minutes.
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
  );
}
