import type { Metadata } from "next";
import Link from "next/link";
import { Car, Users, Package, Snowflake, Shield, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Fleet | Modern Vehicles for Kyrgyzstan Transfers | Nomad Transfer",
  description:
    "15+ modern, well-maintained vehicles. Sedans (4 passengers), Minivans (6-7 passengers), Buses (up to 30). All vehicles fully insured, air-conditioned, winter-ready. Regular maintenance every 10,000 km. Toyota Camry, Hyundai H1, Mercedes Sprinter.",
  keywords: [
    "transfer vehicles kyrgyzstan",
    "modern fleet kyrgyzstan",
    "private car kyrgyzstan",
    "minivan rental kyrgyzstan",
    "bus rental kyrgyzstan",
    "comfortable vehicles",
    "air-conditioned cars kyrgyzstan",
  ],
  openGraph: {
    title: "Our Fleet | Modern Vehicles for Kyrgyzstan Transfers",
    description: "15+ modern vehicles. Sedans, Minivans, Buses. Fully insured. Air-conditioned. Winter-ready.",
    type: "website",
    url: "https://nomad-transfer.com/fleet",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/fleet",
    languages: {
      "x-default": "https://nomad-transfer.com/fleet",
      en: "https://nomad-transfer.com/fleet",
      ru: "https://nomad-transfer.com/ru/fleet",
      ko: "https://nomad-transfer.com/ko/fleet",
    },
  },
};

export default function FleetPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-amber-600 to-amber-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Our Modern Fleet</h1>
            <p className="mt-6 text-xl text-amber-50">
              15+ well-maintained vehicles ready to take you anywhere in Kyrgyzstan. Comfortable, safe, and winter-ready.
            </p>
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Vehicle Categories</h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sedan */}
          <div className="rounded-2xl border-2 border-teal-300 bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">Sedan</h3>
              <Car className="h-12 w-12 text-teal-600" />
            </div>

            <div className="mb-6 space-y-3 text-slate-600">
              <p className="flex items-center gap-2">
                <Users className="h-5 w-5 text-teal-600" />
                <span>Up to 4 passengers</span>
              </p>
              <p className="flex items-center gap-2">
                <Package className="h-5 w-5 text-teal-600" />
                <span>2-3 large suitcases</span>
              </p>
            </div>

            <div className="mb-6 rounded-xl bg-teal-50 p-4">
              <p className="mb-2 font-semibold text-slate-900">Popular Models:</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Toyota Camry (2018-2023)</li>
                <li>• Hyundai Sonata (2019-2023)</li>
                <li>• Volkswagen Passat (2018-2022)</li>
              </ul>
            </div>

            <div className="space-y-2 text-sm text-slate-600">
              <p>✓ Air conditioning / Heating</p>
              <p>✓ AUX / Bluetooth audio</p>
              <p>✓ Child seats available</p>
              <p>✓ Winter tires (Nov-Mar)</p>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-center">
              <p className="text-sm text-slate-500">Starting from</p>
              <p className="text-3xl font-bold text-slate-900">$97</p>
              <p className="text-xs text-slate-500">per transfer</p>
            </div>
          </div>

          {/* Minivan */}
          <div className="rounded-2xl border-2 border-amber-300 bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">Minivan</h3>
              <Users className="h-12 w-12 text-amber-600" />
            </div>

            <div className="mb-6 space-y-3 text-slate-600">
              <p className="flex items-center gap-2">
                <Users className="h-5 w-5 text-amber-600" />
                <span>6-7 passengers</span>
              </p>
              <p className="flex items-center gap-2">
                <Package className="h-5 w-5 text-amber-600" />
                <span>4-6 large suitcases</span>
              </p>
            </div>

            <div className="mb-6 rounded-xl bg-amber-50 p-4">
              <p className="mb-2 font-semibold text-slate-900">Popular Models:</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Hyundai H1 / Starex (2018-2023)</li>
                <li>• Toyota Hiace (2017-2022)</li>
                <li>• Mercedes Vito (2019-2023)</li>
              </ul>
            </div>

            <div className="space-y-2 text-sm text-slate-600">
              <p>✓ Air conditioning / Heating</p>
              <p>✓ Extra luggage space</p>
              <p>✓ Reclining seats</p>
              <p>✓ Perfect for families/groups</p>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-center">
              <p className="text-sm text-slate-500">Starting from</p>
              <p className="text-3xl font-bold text-slate-900">$128</p>
              <p className="text-xs text-slate-500">per transfer</p>
            </div>
          </div>

          {/* Bus */}
          <div className="rounded-2xl border-2 border-blue-300 bg-white p-8 shadow-lg">
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-slate-900">Bus</h3>
              <Users className="h-12 w-12 text-blue-600" />
            </div>

            <div className="mb-6 space-y-3 text-slate-600">
              <p className="flex items-center gap-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span>Up to 30 passengers</span>
              </p>
              <p className="flex items-center gap-2">
                <Package className="h-5 w-5 text-blue-600" />
                <span>Large luggage compartment</span>
              </p>
            </div>

            <div className="mb-6 rounded-xl bg-blue-50 p-4">
              <p className="mb-2 font-semibold text-slate-900">Popular Models:</p>
              <ul className="space-y-1 text-sm text-slate-700">
                <li>• Mercedes Sprinter (2018-2023)</li>
                <li>• Hyundai County (2017-2022)</li>
                <li>• Toyota Coaster (2016-2021)</li>
              </ul>
            </div>

            <div className="space-y-2 text-sm text-slate-600">
              <p>✓ Air conditioning / Heating</p>
              <p>✓ Comfortable coach seating</p>
              <p>✓ PA system available</p>
              <p>✓ Ideal for tour groups</p>
            </div>

            <div className="mt-6 rounded-xl bg-slate-50 p-4 text-center">
              <p className="text-sm text-slate-500">Starting from</p>
              <p className="text-3xl font-bold text-slate-900">$265</p>
              <p className="text-xs text-slate-500">per transfer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance & Safety */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-slate-900">Maintenance & Safety Standards</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <Shield className="mb-4 h-10 w-10 text-amber-600" />
              <h3 className="mb-3 text-xl font-bold text-slate-900">Regular Servicing</h3>
              <p className="text-slate-600">
                Every vehicle undergoes professional servicing every 10,000 km (approximately every 2 months). Oil changes, brake checks, tire rotations — all by certified mechanics.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <Award className="mb-4 h-10 w-10 text-amber-600" />
              <h3 className="mb-3 text-xl font-bold text-slate-900">Safety Inspections</h3>
              <p className="text-slate-600">
                Comprehensive safety inspections every 6 months. We check brakes, suspension, steering, lights, seatbelts, and all safety equipment. Vehicles must pass to remain in service.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <Snowflake className="mb-4 h-10 w-10 text-amber-600" />
              <h3 className="mb-3 text-xl font-bold text-slate-900">Winter Readiness</h3>
              <p className="text-slate-600">
                All vehicles switch to winter tires from November to March. We carry snow chains for high mountain passes and monitor weather conditions for route safety.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <Car className="mb-4 h-10 w-10 text-amber-600" />
              <h3 className="mb-3 text-xl font-bold text-slate-900">Daily Checks</h3>
              <p className="text-slate-600">
                Drivers conduct daily pre-trip inspections: tire pressure, fluid levels, lights, brakes. Vehicles are washed and cleaned interior before each transfer.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <Shield className="mb-4 h-10 w-10 text-amber-600" />
              <h3 className="mb-3 text-xl font-bold text-slate-900">Full Insurance</h3>
              <p className="text-slate-600">
                Every vehicle carries comprehensive insurance covering passengers, third-party liability, and vehicle damage. Insurance certificates available on request.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <Package className="mb-4 h-10 w-10 text-amber-600" />
              <h3 className="mb-3 text-xl font-bold text-slate-900">Emergency Equipment</h3>
              <p className="text-slate-600">
                All vehicles equipped with: first aid kit, fire extinguisher, warning triangle, spare tire, jack, emergency contact numbers, and basic repair tools.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vehicle Features */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900">Standard Features in All Vehicles</h2>
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6">
              <span className="text-2xl">❄️</span>
              <div>
                <h3 className="font-bold text-slate-900">Climate Control</h3>
                <p className="mt-1 text-sm text-slate-600">Air conditioning in summer, heating in winter. Comfortable temperature year-round.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6">
              <span className="text-2xl">🎵</span>
              <div>
                <h3 className="font-bold text-slate-900">Audio System</h3>
                <p className="mt-1 text-sm text-slate-600">Bluetooth, AUX, USB connectivity. Play your own music or enjoy local radio.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6">
              <span className="text-2xl">👶</span>
              <div>
                <h3 className="font-bold text-slate-900">Child Seats</h3>
                <p className="mt-1 text-sm text-slate-600">Free child seats available on request. Mention ages/weights when booking.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6">
              <span className="text-2xl">🧳</span>
              <div>
                <h3 className="font-bold text-slate-900">Luggage Space</h3>
                <p className="mt-1 text-sm text-slate-600">Ample trunk space. Can accommodate ski equipment with advance notice.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6">
              <span className="text-2xl">📱</span>
              <div>
                <h3 className="font-bold text-slate-900">Phone Chargers</h3>
                <p className="mt-1 text-sm text-slate-600">USB charging ports available. Keep your devices powered during long trips.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl bg-slate-50 p-6">
              <span className="text-2xl">💺</span>
              <div>
                <h3 className="font-bold text-slate-900">Comfortable Seating</h3>
                <p className="mt-1 text-sm text-slate-600">Modern, clean seats. Reclining available in minivans for long journeys.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-amber-600 to-amber-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold">Ready to Experience Our Modern Fleet?</h2>
          <p className="mt-4 text-xl text-amber-50">
            Choose the vehicle that fits your group size and enjoy a comfortable journey across Kyrgyzstan.
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
              className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-amber-600"
            >
              View All Routes
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
