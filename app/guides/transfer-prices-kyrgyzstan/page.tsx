import type { Metadata } from "next";
import Link from "next/link";
import { DollarSign, TrendingDown, AlertCircle, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Transfer Prices in Kyrgyzstan 2026 | Private Car, Taxi & Marshrutka Costs",
  description:
    "How much do transfers cost in Kyrgyzstan? Private transfer $97-298, shared taxi $10-30, marshrutka $5-15. Fixed pricing guide for all major routes: Bishkek-Karakol $136, Almaty-Bishkek $127, airport transfers. What's included, hidden fees to avoid, booking tips.",
  keywords: [
    "kyrgyzstan transfer prices",
    "how much transfer kyrgyzstan",
    "bishkek karakol cost",
    "private car kyrgyzstan price",
    "taxi prices kyrgyzstan",
  ],
  openGraph: {
    title: "Transfer Prices in Kyrgyzstan 2026 | Complete Pricing Guide",
    description: "Fixed price transfers $97-298. All routes, what's included, hidden fees to avoid.",
    url: "https://nomad-transfer.com/guides/transfer-prices-kyrgyzstan",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/guides/transfer-prices-kyrgyzstan",
  },
};

export default function TransferPricesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <section className="relative bg-gradient-to-r from-teal-600 to-green-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold md:text-5xl">Transfer Prices in Kyrgyzstan 2026</h1>
            <p className="mt-6 text-xl text-teal-50">
              Complete pricing guide for private transfers, taxis, and marshrutkas. Fixed prices, no hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-slate lg:prose-lg max-w-none">
            <h2>Quick Price Overview</h2>

            <div className="not-prose mb-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-2xl border-2 border-teal-300 bg-teal-50 p-6 text-center">
                <DollarSign className="mx-auto mb-3 h-12 w-12 text-teal-600" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">Private Transfer</h3>
                <p className="text-3xl font-extrabold text-teal-600">$97-298</p>
                <p className="mt-2 text-sm text-slate-600">Fixed price, door-to-door, English support</p>
              </div>

              <div className="rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 text-center">
                <DollarSign className="mx-auto mb-3 h-12 w-12 text-amber-600" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">Shared Taxi</h3>
                <p className="text-3xl font-extrabold text-amber-600">$10-30</p>
                <p className="mt-2 text-sm text-slate-600">Per person, wait time, cramped</p>
              </div>

              <div className="rounded-2xl border-2 border-blue-300 bg-blue-50 p-6 text-center">
                <DollarSign className="mx-auto mb-3 h-12 w-12 text-blue-600" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">Marshrutka (Bus)</h3>
                <p className="text-3xl font-extrabold text-blue-600">$5-15</p>
                <p className="mt-2 text-sm text-slate-600">Cheapest, fixed schedule, no flexibility</p>
              </div>
            </div>

            <h2>Private Transfer Prices by Route</h2>

            <p>All prices below are for private transfers with Nomad Transfer. Prices are <strong>fixed</strong> — what you see is what you pay. No hidden fees, no surge pricing.</p>

            <div className="not-prose my-8 overflow-hidden rounded-2xl border border-slate-200 shadow-lg">
              <table className="w-full">
                <thead className="bg-teal-600 text-white">
                  <tr>
                    <th className="p-3 text-left">Route</th>
                    <th className="p-3 text-center">Distance</th>
                    <th className="p-3 text-center">Sedan (4 pax)</th>
                    <th className="p-3 text-center">Minivan (6-7 pax)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-sm">
                  <tr>
                    <td className="p-3"><Link href="/transfers/bishkek-to-cholpon-ata" className="font-medium text-teal-600 hover:underline">Bishkek → Cholpon-Ata</Link></td>
                    <td className="p-3 text-center">~250 km</td>
                    <td className="p-3 text-center font-bold">$97</td>
                    <td className="p-3 text-center font-bold">$128</td>
                  </tr>
                  <tr>
                    <td className="p-3"><Link href="/transfers/bishkek-to-karakol" className="font-medium text-teal-600 hover:underline">Bishkek → Karakol</Link></td>
                    <td className="p-3 text-center">~360 km</td>
                    <td className="p-3 text-center font-bold">$136</td>
                    <td className="p-3 text-center font-bold">$167</td>
                  </tr>
                  <tr>
                    <td className="p-3"><Link href="/transfers/manas-airport-to-karakol" className="font-medium text-teal-600 hover:underline">Manas Airport → Karakol</Link></td>
                    <td className="p-3 text-center">~390 km</td>
                    <td className="p-3 text-center font-bold">$147</td>
                    <td className="p-3 text-center font-bold">$178</td>
                  </tr>
                  <tr>
                    <td className="p-3"><Link href="/transfers/almaty-to-bishkek" className="font-medium text-teal-600 hover:underline">Almaty → Bishkek</Link></td>
                    <td className="p-3 text-center">~230 km</td>
                    <td className="p-3 text-center font-bold">$127</td>
                    <td className="p-3 text-center font-bold">$158</td>
                  </tr>
                  <tr>
                    <td className="p-3"><Link href="/transfers/almaty-to-karakol" className="font-medium text-teal-600 hover:underline">Almaty → Karakol</Link></td>
                    <td className="p-3 text-center">~430 km</td>
                    <td className="p-3 text-center font-bold">$232</td>
                    <td className="p-3 text-center font-bold">$277</td>
                  </tr>
                  <tr>
                    <td className="p-3"><Link href="/transfers/bishkek-to-osh" className="font-medium text-teal-600 hover:underline">Bishkek → Osh</Link></td>
                    <td className="p-3 text-center">~650 km</td>
                    <td className="p-3 text-center font-bold">$298</td>
                    <td className="p-3 text-center font-bold">$345</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="not-prose text-sm italic text-slate-600">
              💡 <strong>Reverse routes same price:</strong> Karakol → Bishkek costs the same as Bishkek → Karakol. Check our <Link href="/#transfers" className="text-teal-600 hover:underline">full route list</Link> for all directions.
            </p>

            <h2>What's Included in Transfer Price?</h2>

            <div className="not-prose space-y-3">
              <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Fuel</h4>
                  <p className="text-sm text-slate-700">All fuel costs included. No extra charges for mountain routes or long distances.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Hotel Pickup & Drop-off</h4>
                  <p className="text-sm text-slate-700">Driver picks you up from your hotel/address and drops you at your destination. No meeting points.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Tolls & Parking</h4>
                  <p className="text-sm text-slate-700">Any road tolls or parking fees are included (though tolls are rare in Kyrgyzstan).</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-bold text-slate-900">English WhatsApp Support</h4>
                  <p className="text-sm text-slate-700">Real-time support team available via WhatsApp. Booking confirmation, driver tracking, any questions.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Photo Stops</h4>
                  <p className="text-sm text-slate-700">2-3 free photo stops along the way (Boom Gorge, scenic viewpoints). Driver will suggest best spots.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Winter Equipment (Nov-Mar)</h4>
                  <p className="text-sm text-slate-700">Winter tires and snow chains included during winter months. No extra fees for winter transfers.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl bg-green-50 p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Border Assistance (for cross-border routes)</h4>
                  <p className="text-sm text-slate-700">Driver helps with border paperwork and procedures at Korday/Karkara checkpoints. Included in price.</p>
                </div>
              </div>
            </div>

            <h2>What's NOT Included (Optional Add-ons)</h2>

            <ul>
              <li><strong>Burana Tower stop:</strong> +$15 (sedan) / +$20 (minivan) — 10th-century minaret detour</li>
              <li><strong>Cholpon-Ata lunch stop:</strong> +$20 — extended stop (1-2 hours) for meal</li>
              <li><strong>Child seats:</strong> Free on request (mention when booking)</li>
              <li><strong>Extra luggage/ski equipment:</strong> Usually fits in standard vehicles, mention when booking</li>
            </ul>

            <h2>Hidden Fees to Avoid (Freelance Taxis)</h2>

            <div className="not-prose rounded-xl border-l-4 border-red-600 bg-red-50 p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-red-900">
                <AlertCircle className="h-5 w-5" />
                Common Taxi Scams in Kyrgyzstan
              </h3>
              <ul className="space-y-2 text-red-800">
                <li>• <strong>"Border tax":</strong> Driver demands $20-30 at border (no such tax exists)</li>
                <li>• <strong>"Mountain pass fee":</strong> Extra $10-15 for going through mountains (included in legitimate transfers)</li>
                <li>• <strong>"Night surcharge":</strong> Extra 50% for pickups before 7 AM or after 8 PM</li>
                <li>• <strong>"Luggage fee":</strong> $5-10 per bag beyond first bag</li>
                <li>• <strong>"Waiting fee":</strong> Charged if you're not ready exactly at pickup time</li>
              </ul>
              <p className="mt-4 font-semibold text-red-900">
                ✓ Solution: Book with licensed transfer companies that quote fixed all-inclusive prices upfront.
              </p>
            </div>

            <h2>Shared Taxi vs Private Transfer: Cost Comparison</h2>

            <p><strong>Example: Bishkek to Karakol (360 km)</strong></p>

            <div className="not-prose my-6">
              <div className="mb-4 rounded-xl border-2 border-amber-300 bg-amber-50 p-6">
                <h4 className="mb-3 font-bold text-amber-900">Shared Taxi (Marshrutka)</h4>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li>• <strong>Price:</strong> $15-20 per person</li>
                  <li>• <strong>For 4 people:</strong> $60-80 total</li>
                  <li>• <strong>Wait time:</strong> 1-3 hours until vehicle fills up</li>
                  <li>• <strong>Comfort:</strong> Cramped (4 people in back seat), no AC</li>
                  <li>• <strong>Luggage:</strong> 1 bag per person max, extra bags = extra fee</li>
                  <li>• <strong>Stops:</strong> Only when driver decides (usually 1-2 quick restroom breaks)</li>
                  <li>• <strong>Total time:</strong> 7-9 hours (including wait + slower driving)</li>
                </ul>
              </div>

              <div className="rounded-xl border-2 border-teal-300 bg-teal-50 p-6">
                <h4 className="mb-3 font-bold text-teal-900">Private Transfer (Nomad Transfer)</h4>
                <ul className="space-y-2 text-sm text-teal-800">
                  <li>• <strong>Price:</strong> $136 sedan (up to 4 people)</li>
                  <li>• <strong>For 4 people:</strong> $136 total ($34/person)</li>
                  <li>• <strong>Wait time:</strong> 0 — depart when YOU want</li>
                  <li>• <strong>Comfort:</strong> Spacious sedan, AC/heating, comfortable seats</li>
                  <li>• <strong>Luggage:</strong> 2-3 large bags + backpacks included</li>
                  <li>• <strong>Stops:</strong> Whenever you want (photo stops, meals, restrooms)</li>
                  <li>• <strong>Total time:</strong> 6-7 hours (direct, no waiting)</li>
                </ul>
              </div>

              <p className="mt-4 text-center font-bold text-slate-900">
                Private transfer costs only $16 more per person, but saves 1-2 hours and offers much better comfort!
              </p>
            </div>

            <h2>Budget Tips: How to Save Money</h2>

            <h3>1. Travel in Groups</h3>
            <p>Private transfer price is per vehicle, not per person. Split $136 among 4 people = $34 each. Cheaper than shared taxi ($15-20) when you factor in comfort and time saved.</p>

            <h3>2. Book Round-Trip</h3>
            <p>Some routes offer 5-10% discount for round-trip bookings. Ask when booking via WhatsApp.</p>

            <h3>3. Travel Off-Season</h3>
            <p>Prices are same year-round, but accommodation is 30-50% cheaper in shoulder seasons (Apr-May, Oct-Nov). Save on hotels, not transfers.</p>

            <h3>4. Avoid Last-Minute Bookings</h3>
            <p>Book 2-3 days in advance. Last-minute bookings (same-day) may have limited availability, forcing you to use more expensive options.</p>

            <h3>5. Share with Other Travelers</h3>
            <p>Post in hostel Facebook groups or travel forums to find others going the same route. Split private transfer 3-4 ways.</p>

            <h2>Payment Methods</h2>

            <ul>
              <li><strong>Cash (preferred):</strong> USD, KGS, or KZT accepted. Pay driver at end of journey.</li>
              <li><strong>Bank transfer:</strong> Available for advance payment. Request details via WhatsApp.</li>
              <li><strong>Card payment:</strong> Can be arranged in advance for some bookings.</li>
              <li><strong>No upfront payment required:</strong> Most transfers booked via WhatsApp don't require prepayment.</li>
            </ul>

            <h2>Cancellation Policy</h2>

            <ul>
              <li><strong>Free cancellation:</strong> Up to 24 hours before pickup time — full refund, no questions asked</li>
              <li><strong>Within 24 hours:</strong> 50% cancellation fee</li>
              <li><strong>No-show:</strong> Full charge</li>
              <li><strong>Weather/road closures:</strong> Free reschedule or full refund if we can't operate safely</li>
            </ul>
          </article>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-teal-600 to-green-600 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">See All Routes & Prices</h2>
            <p className="mb-6 text-lg text-teal-50">
              Fixed prices. No hidden fees. Book in 1-2 minutes via WhatsApp.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/996552291808?text=Hi!%20I%20need%20a%20transfer%20in%20Kyrgyzstan"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white px-8 py-4 font-semibold text-teal-600 hover:bg-slate-100"
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
        </div>
      </section>
    </div>
  );
}
