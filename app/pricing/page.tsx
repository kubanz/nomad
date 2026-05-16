import type { Metadata } from "next";
import Link from "next/link";
import { Car, Users, Bus, CheckCircle, ArrowRight, Calculator } from "lucide-react";

export const metadata: Metadata = {
  title: "Transfer Prices Kyrgyzstan 2026 | All Routes, Fixed Pricing, No Hidden Fees | Nomad Transfer",
  description:
    "Complete price list for all transfer routes in Kyrgyzstan. Bishkek-Karakol $136, Almaty-Bishkek $127, airport transfers from $25. Fixed prices, fuel included, free cancellation. Sedan, minivan, bus options. Book via WhatsApp in 1-2 minutes.",
  keywords: [
    "transfer prices kyrgyzstan",
    "bishkek karakol price",
    "almaty bishkek cost",
    "kyrgyzstan taxi prices",
    "private transfer cost",
    "airport transfer price",
    "nomad transfer pricing",
  ],
  openGraph: {
    title: "Transfer Prices Kyrgyzstan 2026 | Fixed Pricing, All Routes",
    description: "Complete price list. Bishkek-Karakol $136, Almaty-Bishkek $127. Fixed prices, no hidden fees.",
    url: "https://nomad-transfer.com/pricing",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/pricing",
    languages: {
      "x-default": "https://nomad-transfer.com/pricing",
      en: "https://nomad-transfer.com/pricing",
      ru: "https://nomad-transfer.com/ru/pricing",
      ko: "https://nomad-transfer.com/ko/pricing",
    },
  },
};

const routes = [
  // Within Kyrgyzstan
  { from: "Bishkek", to: "Cholpon-Ata", distance: "250 km", sedan: 97, minivan: 128, bus: 210, duration: "4-5h", href: "/transfers/bishkek-to-cholpon-ata" },
  { from: "Bishkek", to: "Karakol", distance: "360 km", sedan: 136, minivan: 167, bus: 265, duration: "6-7h", href: "/transfers/bishkek-to-karakol" },
  { from: "Bishkek", to: "Osh", distance: "650 km", sedan: 298, minivan: 345, bus: 485, duration: "10-12h", href: "/transfers/bishkek-to-osh" },
  { from: "Manas Airport", to: "Bishkek City", distance: "30 km", sedan: 25, minivan: 30, bus: null, duration: "30-40min", href: "/guides/manas-airport-to-bishkek-city" },
  { from: "Manas Airport", to: "Karakol", distance: "390 km", sedan: 146, minivan: 177, bus: 275, duration: "6.5-7.5h", href: "/transfers/manas-airport-to-karakol" },
  { from: "Cholpon-Ata", to: "Bishkek", distance: "250 km", sedan: 97, minivan: 128, bus: 210, duration: "4-5h", href: "/transfers/cholpon-ata-to-bishkek" },
  { from: "Karakol", to: "Bishkek", distance: "360 km", sedan: 136, minivan: 167, bus: 265, duration: "6-7h", href: "/transfers/karakol-to-bishkek" },
  { from: "Karakol", to: "Manas Airport", distance: "390 km", sedan: 146, minivan: 177, bus: 275, duration: "6.5-7.5h", href: "/transfers/karakol-to-manas-airport" },
  { from: "Osh", to: "Bishkek", distance: "650 km", sedan: 298, minivan: 345, bus: 485, duration: "10-12h", href: "/transfers/osh-to-bishkek" },

  // Cross-border (Kazakhstan)
  { from: "Almaty", to: "Bishkek", distance: "230 km", sedan: 127, minivan: 158, bus: null, duration: "4-5h", href: "/transfers/almaty-to-bishkek", badge: "Border" },
  { from: "Almaty", to: "Karakol", distance: "430 km", sedan: 232, minivan: 277, bus: null, duration: "7-8h", href: "/transfers/almaty-to-karakol", badge: "Border" },
  { from: "Bishkek", to: "Almaty", distance: "230 km", sedan: 127, minivan: 158, bus: null, duration: "4-5h", href: "/transfers/bishkek-to-almaty", badge: "Border" },
  { from: "Karakol", to: "Almaty", distance: "430 km", sedan: 232, minivan: 277, bus: null, duration: "7-8h", href: "/transfers/karakol-to-almaty", badge: "Border" },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-teal-600 to-blue-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Transfer Pricing</h1>
            <p className="mt-6 text-xl text-teal-50">
              Fixed prices for all routes. No hidden fees, no surge pricing, no surprises. What you see is what you pay.
            </p>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6 text-center">
            <CheckCircle className="mx-auto mb-3 h-10 w-10 text-green-600" />
            <h3 className="mb-2 font-bold text-slate-900">Fixed Prices</h3>
            <p className="text-sm text-slate-700">Price confirmed upfront. No haggling, no surge pricing, no "extra fees" at the end.</p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center">
            <CheckCircle className="mx-auto mb-3 h-10 w-10 text-blue-600" />
            <h3 className="mb-2 font-bold text-slate-900">All Inclusive</h3>
            <p className="text-sm text-slate-700">Fuel, tolls, parking, winter equipment — everything included in the price.</p>
          </div>
          <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 text-center">
            <CheckCircle className="mx-auto mb-3 h-10 w-10 text-purple-600" />
            <h3 className="mb-2 font-bold text-slate-900">Free Cancellation</h3>
            <p className="text-sm text-slate-700">Cancel free up to 24h before pickup. Plans change, we get it.</p>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Choose Your Vehicle</h2>
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Sedan */}
            <div className="rounded-2xl border-2 border-teal-300 bg-white p-8 shadow-lg">
              <Car className="mb-4 h-12 w-12 text-teal-600" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Sedan</h3>
              <ul className="mb-6 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                  <span>Up to 4 passengers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                  <span>2-3 large suitcases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                  <span>Air conditioning</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                  <span>Perfect for couples/small groups</span>
                </li>
              </ul>
              <p className="text-sm text-slate-500">Models: Toyota Camry, Hyundai Sonata, VW Passat</p>
            </div>

            {/* Minivan */}
            <div className="rounded-2xl border-2 border-amber-300 bg-white p-8 shadow-lg">
              <Users className="mb-4 h-12 w-12 text-amber-600" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Minivan</h3>
              <ul className="mb-6 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <span>6-7 passengers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <span>4-6 large suitcases</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <span>Extra luggage space</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                  <span>Ideal for families/groups</span>
                </li>
              </ul>
              <p className="text-sm text-slate-500">Models: Hyundai H1, Toyota Hiace, Mercedes Vito</p>
            </div>

            {/* Bus */}
            <div className="rounded-2xl border-2 border-blue-300 bg-white p-8 shadow-lg">
              <Bus className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-4 text-2xl font-bold text-slate-900">Bus</h3>
              <ul className="mb-6 space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                  <span>Up to 30 passengers</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                  <span>Large luggage compartment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                  <span>Coach seating</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-blue-600" />
                  <span>Perfect for tour groups</span>
                </li>
              </ul>
              <p className="text-sm text-slate-500">Models: Mercedes Sprinter, Hyundai County, Toyota Coaster</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Table */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">All Routes & Prices</h2>

        <div className="mb-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-teal-600 text-white">
                <tr>
                  <th className="p-4 text-left font-semibold">Route</th>
                  <th className="p-4 text-center font-semibold">Distance</th>
                  <th className="p-4 text-center font-semibold">Duration</th>
                  <th className="p-4 text-center font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <Car className="h-4 w-4" />
                      <span>Sedan</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <Users className="h-4 w-4" />
                      <span>Minivan</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-semibold">
                    <div className="flex items-center justify-center gap-2">
                      <Bus className="h-4 w-4" />
                      <span>Bus</span>
                    </div>
                  </th>
                  <th className="p-4 text-center font-semibold">Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {routes.map((route, idx) => (
                  <tr key={idx} className="hover:bg-slate-50">
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="font-medium text-slate-900">{route.from}</span>
                        <ArrowRight className="h-4 w-4 text-slate-400" />
                        <span className="font-medium text-slate-900">{route.to}</span>
                        {route.badge && (
                          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-700">
                            {route.badge}
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="p-4 text-center text-sm text-slate-600">{route.distance}</td>
                    <td className="p-4 text-center text-sm text-slate-600">{route.duration}</td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-teal-600">${route.sedan}</span>
                    </td>
                    <td className="p-4 text-center">
                      <span className="font-bold text-amber-600">${route.minivan}</span>
                    </td>
                    <td className="p-4 text-center">
                      {route.bus ? (
                        <span className="font-bold text-blue-600">${route.bus}</span>
                      ) : (
                        <span className="text-slate-400">—</span>
                      )}
                    </td>
                    <td className="p-4 text-center">
                      <Link
                        href={route.href}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700"
                      >
                        View <ArrowRight className="h-3 w-3" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <p className="text-center text-sm text-slate-500">
          * Prices are per vehicle (not per person). Border crossing routes include assistance with Korday/Karkara checkpoints.
        </p>
      </section>

      {/* What's Included */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">What's Included in Every Transfer</h2>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-4 rounded-xl bg-white p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Fuel</h3>
                  <p className="text-sm text-slate-600">All fuel costs included, no matter the distance or route.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Hotel Pickup & Drop-off</h3>
                  <p className="text-sm text-slate-600">Door-to-door service. We pick you up and drop you off at your exact address.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">English WhatsApp Support</h3>
                  <p className="text-sm text-slate-600">Real-time support team available via WhatsApp. Book in 1-2 minutes.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Photo Stops</h3>
                  <p className="text-sm text-slate-600">2-3 free photo stops at scenic viewpoints (Boom Gorge, Issyk-Kul, etc.)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Winter Equipment</h3>
                  <p className="text-sm text-slate-600">Winter tires & snow chains included Nov-Mar. No extra fees.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Border Assistance</h3>
                  <p className="text-sm text-slate-600">For cross-border routes: driver helps with paperwork and procedures.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Child Seats</h3>
                  <p className="text-sm text-slate-600">Free child seats available on request. Mention when booking.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-xl bg-white p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h3 className="mb-1 font-bold text-slate-900">Tolls & Parking</h3>
                  <p className="text-sm text-slate-600">Any road tolls or parking fees included in the price.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Calculator CTA */}
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-2xl rounded-2xl border-2 border-teal-300 bg-gradient-to-br from-teal-50 to-blue-50 p-8 text-center">
          <Calculator className="mx-auto mb-4 h-12 w-12 text-teal-600" />
          <h2 className="mb-4 text-2xl font-bold text-slate-900">Need a Custom Quote?</h2>
          <p className="mb-6 text-slate-700">
            Not sure which vehicle or route? Have special requirements? Multiple stops? Large group?
          </p>
          <a
            href="https://wa.me/996552291808?text=Hi!%20I%20need%20a%20custom%20quote%20for%20my%20transfer"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600"
          >
            Get Custom Quote via WhatsApp
          </a>
        </div>
      </section>

      {/* Payment & Cancellation */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Payment Methods</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span><strong>Cash (preferred):</strong> USD, KGS, or KZT. Pay driver at end of journey.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span><strong>Bank transfer:</strong> Available for advance payment.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span><strong>Card payment:</strong> Can be arranged in advance.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-teal-600" />
                    <span><strong>No upfront payment:</strong> Most transfers don't require prepayment.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-white p-8 shadow-sm">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Cancellation Policy</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span><strong>Free cancellation:</strong> Up to 24 hours before pickup — full refund.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-amber-600" />
                    <span><strong>Within 24 hours:</strong> 50% cancellation fee applies.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-red-600" />
                    <span><strong>No-show:</strong> Full charge (please notify if you can't make it).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-4 w-4 flex-shrink-0 text-green-600" />
                    <span><strong>Weather/road closures:</strong> Free reschedule or full refund if unsafe.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-teal-600 to-blue-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">Ready to Book Your Transfer?</h2>
          <p className="mb-8 text-xl text-teal-50">
            Fixed prices. No hidden fees. Book in 1-2 minutes via WhatsApp.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
