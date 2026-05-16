import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, DollarSign, Clock, Shield, AlertCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Almaty to Bishkek Travel Guide 2026 | Border Crossing, Transport Options & Prices",
  description:
    "Complete travel guide Almaty to Bishkek. Private transfer $127, shared taxi $25-30, marshrutka $10-15. Border crossing at Korday. Travel time 4-5 hours. Visa requirements, what to expect, booking tips. Kazakhstan to Kyrgyzstan overland route.",
  keywords: [
    "almaty to bishkek",
    "almaty bishkek transfer",
    "almaty to bishkek bus",
    "korday border crossing",
    "kazakhstan to kyrgyzstan",
    "almaty bishkek travel guide",
  ],
  openGraph: {
    title: "Almaty to Bishkek Travel Guide | Transport, Border Crossing & Tips",
    description: "Private transfer $127, 4-5 hours. Complete guide to traveling from Almaty to Bishkek overland.",
    url: "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
  },
};

export default function AlmatyToBishkekGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Almaty to Bishkek Travel Guide</h1>
            <p className="mt-6 text-xl text-purple-50">
              Everything you need to know about traveling from Almaty, Kazakhstan to Bishkek, Kyrgyzstan. Border crossing, transport options, and practical tips.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Quick Facts */}
          <div className="mb-12 grid gap-6 md:grid-cols-4">
            <div className="rounded-xl border border-purple-200 bg-purple-50 p-6 text-center">
              <MapPin className="mx-auto mb-2 h-8 w-8 text-purple-600" />
              <p className="text-2xl font-bold text-slate-900">230 km</p>
              <p className="text-sm text-slate-600">Distance</p>
            </div>
            <div className="rounded-xl border border-blue-200 bg-blue-50 p-6 text-center">
              <Clock className="mx-auto mb-2 h-8 w-8 text-blue-600" />
              <p className="text-2xl font-bold text-slate-900">4-5 hrs</p>
              <p className="text-sm text-slate-600">Travel Time</p>
            </div>
            <div className="rounded-xl border border-teal-200 bg-teal-50 p-6 text-center">
              <DollarSign className="mx-auto mb-2 h-8 w-8 text-teal-600" />
              <p className="text-2xl font-bold text-slate-900">$10-127</p>
              <p className="text-sm text-slate-600">Price Range</p>
            </div>
            <div className="rounded-xl border border-amber-200 bg-amber-50 p-6 text-center">
              <Shield className="mx-auto mb-2 h-8 w-8 text-amber-600" />
              <p className="text-2xl font-bold text-slate-900">Korday</p>
              <p className="text-sm text-slate-600">Border</p>
            </div>
          </div>

          <article className="prose prose-slate lg:prose-lg max-w-none">
            <h2>Overview: Almaty to Bishkek Route</h2>
            <p>
              The journey from Almaty (Kazakhstan) to Bishkek (Kyrgyzstan) is a popular overland route connecting Central Asia's two major cities. At just 230 km apart, it's one of the shortest international journeys in the region — but requires crossing the Korday/Kordai border checkpoint.
            </p>

            <div className="not-prose rounded-xl border-l-4 border-blue-600 bg-blue-50 p-6">
              <h3 className="mb-2 font-bold text-blue-900">Quick Summary</h3>
              <ul className="space-y-1 text-blue-800">
                <li>• <strong>Distance:</strong> ~230 km (143 miles)</li>
                <li>• <strong>Border:</strong> Korday/Kordai checkpoint</li>
                <li>• <strong>Travel time:</strong> 4-5 hours (including border crossing)</li>
                <li>• <strong>Border crossing time:</strong> 30-60 minutes typically</li>
                <li>• <strong>Visa required:</strong> Depends on nationality (most don't need visa)</li>
              </ul>
            </div>

            <h2>Transport Options: Almaty to Bishkek</h2>

            <h3>1. Private Transfer (Recommended)</h3>
            <p><strong>Price:</strong> $127 (sedan), $158 (minivan) | <strong>Time:</strong> 4-5 hours | <strong>Convenience:</strong> ⭐⭐⭐⭐⭐</p>

            <div className="not-prose mb-6 rounded-xl bg-teal-50 p-6">
              <h4 className="mb-3 font-bold text-teal-900">Why Choose Private Transfer?</h4>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Fixed price upfront</strong> — no haggling, no surprises at border</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Door-to-door service</strong> — hotel pickup in Almaty, drop-off in Bishkek</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>English-speaking support</strong> — book via WhatsApp, real-time updates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Border assistance</strong> — driver helps with forms, knows the process</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Luggage space</strong> — no baggage limits, sedan fits 2-3 large bags</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">✓</span>
                  <span><strong>Flexible stops</strong> — restroom breaks, photo stops on request</span>
                </li>
              </ul>
              <div className="mt-4">
                <Link
                  href="/transfers/almaty-to-bishkek"
                  className="inline-block rounded-full bg-teal-600 px-6 py-3 font-semibold text-white hover:bg-teal-700"
                >
                  Book Private Transfer →
                </Link>
              </div>
            </div>

            <h3>2. Shared Taxi (Marshrutka)</h3>
            <p><strong>Price:</strong> $10-15 per person | <strong>Time:</strong> 5-6 hours | <strong>Convenience:</strong> ⭐⭐⭐</p>

            <p><strong>How it works:</strong></p>
            <ul>
              <li>Depart from Sayakhat bus station in Almaty (near Sayran bus terminal)</li>
              <li>Drivers wait until vehicle is full (usually 4-6 passengers)</li>
              <li>No fixed schedule — leave when full (can wait 1-3 hours)</li>
              <li>Limited luggage space (1 bag per person, extra bags = extra fee)</li>
              <li>Stops at border but no assistance with paperwork</li>
            </ul>

            <p><strong>Pros:</strong> Cheapest option, frequent departures once full</p>
            <p><strong>Cons:</strong> Cramped, waiting time unpredictable, language barrier, baggage limits, no AC in older vehicles</p>

            <h3>3. Private Taxi (Non-transfer companies)</h3>
            <p><strong>Price:</strong> $80-120 (negotiable) | <strong>Time:</strong> 4-5 hours | <strong>Convenience:</strong> ⭐⭐⭐⭐</p>

            <div className="not-prose rounded-xl border-l-4 border-amber-600 bg-amber-50 p-6">
              <h4 className="mb-2 flex items-center gap-2 font-bold text-amber-900">
                <AlertCircle className="h-5 w-5" />
                Caution: Freelance Taxis
              </h4>
              <p className="text-amber-800">
                Freelance taxi drivers at Almaty hotels/airport often quote $50-60 but demand extra fees at the border ($20-30 "border tax") or destination. Total cost ends up $80-120. Book with licensed transfer companies to avoid scams.
              </p>
            </div>

            <h3>4. Bus (Almaty to Bishkek)</h3>
            <p><strong>Price:</strong> $12-18 | <strong>Time:</strong> 6-7 hours | <strong>Convenience:</strong> ⭐⭐</p>

            <p>Several bus companies operate Almaty-Bishkek routes:</p>
            <ul>
              <li><strong>Sayakhat:</strong> 2-3 buses daily, modern coaches</li>
              <li><strong>Avtovokzal:</strong> Budget option, older buses</li>
              <li><strong>Departure:</strong> Sayran bus terminal (Almaty)</li>
              <li><strong>Arrival:</strong> West bus station (Bishkek)</li>
            </ul>

            <p><strong>Pros:</strong> Cheap, comfortable seats, luggage included</p>
            <p><strong>Cons:</strong> Fixed schedule (usually morning departures), slower than private transfer, no flexibility for stops</p>

            <h2>Korday Border Crossing</h2>

            <p>
              Korday (Кордай in Russian) is the main border checkpoint between Kazakhstan and Kyrgyzstan on the Almaty-Bishkek route. It operates 24/7 but crossing times vary.
            </p>

            <h3>What to Expect at the Border</h3>

            <div className="not-prose space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">1. Kazakhstan Exit (First Stop)</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Hand passport to border guard</li>
                  <li>• Passport scan + exit stamp (2-5 min)</li>
                  <li>• Customs may check luggage (rare for tourists)</li>
                  <li>• Drive 2-3 km through no-man's land</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">2. Kyrgyzstan Entry (Second Stop)</h4>
                <ul className="space-y-2 text-slate-700">
                  <li>• Fill out arrival card (driver usually has extras)</li>
                  <li>• Passport control + entry stamp (5-10 min)</li>
                  <li>• Vehicle insurance check (driver handles)</li>
                  <li>• Customs declaration if carrying $5000+ cash or valuables</li>
                </ul>
              </div>
            </div>

            <h3>Border Crossing Times</h3>
            <div className="not-prose my-6 overflow-hidden rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-3 text-left">Time/Day</th>
                    <th className="p-3 text-left">Crossing Time</th>
                    <th className="p-3 text-left">Queue Level</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200">
                  <tr>
                    <td className="p-3">Weekdays 8AM-12PM</td>
                    <td className="p-3">30-45 min</td>
                    <td className="p-3 text-green-600">✓ Light</td>
                  </tr>
                  <tr>
                    <td className="p-3">Weekdays 12PM-6PM</td>
                    <td className="p-3">45-60 min</td>
                    <td className="p-3 text-amber-600">~ Moderate</td>
                  </tr>
                  <tr>
                    <td className="p-3">Friday 3PM-8PM</td>
                    <td className="p-3">60-90 min</td>
                    <td className="p-3 text-red-600">✗ Heavy</td>
                  </tr>
                  <tr>
                    <td className="p-3">Weekends (Sat-Sun)</td>
                    <td className="p-3">60-120 min</td>
                    <td className="p-3 text-red-600">✗ Very Heavy</td>
                  </tr>
                  <tr>
                    <td className="p-3">Holidays (KZ/KG national days)</td>
                    <td className="p-3">90-180 min</td>
                    <td className="p-3 text-red-600">✗ Extreme</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="not-prose text-sm italic text-slate-600">
              💡 <strong>Pro tip:</strong> Cross on weekday mornings (8-11 AM) to avoid queues. Fridays and weekends are worst due to locals traveling between countries.
            </p>

            <h3>Visa Requirements</h3>
            <p><strong>Do I need a visa?</strong></p>
            <ul>
              <li><strong>Most nationalities:</strong> No visa needed for both Kazakhstan and Kyrgyzstan (up to 30-60 days)</li>
              <li><strong>USA, Canada, EU, UK, Australia, NZ, Japan, South Korea:</strong> Visa-free for both countries</li>
              <li><strong>Russia, Belarus, Ukraine:</strong> Visa-free</li>
              <li><strong>China, India:</strong> Check current visa requirements (policies change)</li>
            </ul>

            <p><strong>Passport validity:</strong> Must be valid for 6+ months from entry date.</p>

            <h2>Practical Tips</h2>

            <h3>Money & Currency</h3>
            <ul>
              <li><strong>Kazakhstan:</strong> Tenge (KZT). $1 ≈ 450-480 KZT</li>
              <li><strong>Kyrgyzstan:</strong> Som (KGS). $1 ≈ 85-88 KGS</li>
              <li>Change money before crossing (better rates in cities than at border)</li>
              <li>Most transfers accept USD, KZT, or KGS</li>
              <li>ATMs available on both sides of border</li>
            </ul>

            <h3>SIM Cards & Internet</h3>
            <ul>
              <li>Kazakhstan SIM (Activ, Beeline, Tele2) won't work in Kyrgyzstan without roaming ($$$)</li>
              <li>Buy Kyrgyz SIM at Bishkek airport or city (Beeline, Megacom, O! — $3-5 for tourist plans)</li>
              <li>Border has weak/no WiFi — download offline maps before crossing</li>
            </ul>

            <h3>Food & Rest Stops</h3>
            <ul>
              <li>Last good restaurant in Kazakhstan: ~20 km before Korday border</li>
              <li>Border area has basic cafes (instant noodles, tea, snacks)</li>
              <li>First proper restaurant in Kyrgyzstan: ~15 km after border (Kant city)</li>
              <li>Private transfers can stop anywhere on request</li>
            </ul>

            <h3>Luggage</h3>
            <ul>
              <li><strong>Customs limits:</strong> No declaration needed for personal items under $1500 value</li>
              <li><strong>Prohibited items:</strong> Drones require permits, large amounts of cash must be declared</li>
              <li><strong>Typical luggage:</strong> No issues with 1-2 suitcases + backpack per person</li>
            </ul>

            <h2>Transport Comparison Table</h2>

            <div className="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <table className="w-full">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-3 text-left">Option</th>
                    <th className="p-3">Price</th>
                    <th className="p-3">Time</th>
                    <th className="p-3">Comfort</th>
                    <th className="p-3">Flexibility</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  <tr className="bg-teal-50">
                    <td className="p-3 font-semibold">Private Transfer</td>
                    <td className="p-3 text-center">$127</td>
                    <td className="p-3 text-center">4-5h</td>
                    <td className="p-3 text-center text-green-600">⭐⭐⭐⭐⭐</td>
                    <td className="p-3 text-center text-green-600">⭐⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Shared Taxi</td>
                    <td className="p-3 text-center">$10-15</td>
                    <td className="p-3 text-center">5-6h</td>
                    <td className="p-3 text-center text-amber-600">⭐⭐⭐</td>
                    <td className="p-3 text-center text-amber-600">⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Freelance Taxi</td>
                    <td className="p-3 text-center">$80-120</td>
                    <td className="p-3 text-center">4-5h</td>
                    <td className="p-3 text-center text-amber-600">⭐⭐⭐⭐</td>
                    <td className="p-3 text-center text-amber-600">⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-semibold">Bus</td>
                    <td className="p-3 text-center">$12-18</td>
                    <td className="p-3 text-center">6-7h</td>
                    <td className="p-3 text-center text-amber-600">⭐⭐⭐</td>
                    <td className="p-3 text-center text-red-600">⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Recommended Itinerary</h2>

            <p><strong>Depart Almaty:</strong> 9:00 AM (hotel pickup)</p>
            <p><strong>Arrive Korday border:</strong> 11:00 AM (2 hours drive)</p>
            <p><strong>Cross border:</strong> 11:00 AM - 11:45 AM (45 min crossing time)</p>
            <p><strong>Lunch stop:</strong> 12:00 PM - 12:30 PM (Kant or Tokmok)</p>
            <p><strong>Arrive Bishkek:</strong> 1:30-2:00 PM (hotel drop-off)</p>

            <p className="not-prose mt-4 text-sm italic text-slate-600">
              This timing avoids weekend rush, crosses border mid-morning (lighter queues), and arrives Bishkek early afternoon with time to settle in.
            </p>
          </article>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Book Your Almaty to Bishkek Transfer</h2>
            <p className="mb-6 text-lg text-purple-50">
              Fixed price $127. Door-to-door service. Border assistance included. English-speaking support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/996552291808?text=Hi!%20I%20need%20a%20transfer%20from%20Almaty%20to%20Bishkek"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600"
              >
                Book via WhatsApp
              </a>
              <Link
                href="/transfers/almaty-to-bishkek"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-purple-600"
              >
                View Transfer Details
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
