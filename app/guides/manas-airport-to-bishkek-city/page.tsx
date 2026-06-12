import type { Metadata } from "next";
import Link from "next/link";
import { Plane, Car, Bus, DollarSign, Clock, MapPin, AlertTriangle, Luggage } from "lucide-react";

export const metadata: Metadata = {
  title: "Manas Airport to Bishkek City | Transfer Options, Prices & Travel Time 2026",
  description:
    "Complete guide Manas Airport (FRU) to Bishkek city center 2026. Distance 25-30 km. Private transfer: sedan $35, minivan $45. Compare marshrutka, taxi, and pre-booked transfers.",
  keywords: [
    "manas airport to bishkek",
    "bishkek airport transfer",
    "manas airport taxi",
    "bishkek airport bus",
    "fru airport to city",
    "manas airport transport",
    "bishkek airport marshrutka",
    "kyrgyzstan airport transfer",
  ],
  openGraph: {
    title: "Manas Airport to Bishkek City | All Transfer Options & Prices 2026",
    description: "Private car, taxi, marshrutka, or rental. Complete price comparison, scam warnings, and booking tips.",
    url: "https://nomad-transfer.com/guides/manas-airport-to-bishkek-city",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/guides/manas-airport-to-bishkek-city",
  },
};

export default function ManasAirportToBishkekPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-blue-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-indigo-900/50 px-4 py-2 text-sm">
              <Plane className="h-4 w-4" />
              <span>Updated May 2026</span>
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">Manas Airport to Bishkek City</h1>
            <p className="mt-6 text-xl text-indigo-50">
              Your complete guide to getting from Manas International Airport (FRU) to Bishkek city center. All transport options, prices, travel times, and insider tips to avoid scams.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-indigo-200 bg-indigo-50 p-6">
            <MapPin className="mb-3 h-8 w-8 text-indigo-600" />
            <h3 className="mb-2 font-bold text-slate-900">Distance</h3>
            <p className="text-sm text-slate-700">25-30 km (15-18 miles) north of Bishkek. Airport serves capital city of Kyrgyzstan.</p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <Clock className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 font-bold text-slate-900">Travel Time</h3>
            <p className="text-sm text-slate-700">30-45 minutes depending on traffic. Early morning/late night faster. Rush hour can add 15-20 min.</p>
          </div>
          <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
            <DollarSign className="mb-3 h-8 w-8 text-green-600" />
            <h3 className="mb-2 font-bold text-slate-900">Price Range</h3>
            <p className="text-sm text-slate-700">Marshrutka $1-2, Taxi $15-20, Private transfer $35-45. Pay in som or USD.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-slate lg:prose-lg max-w-none">
            <h2>About Manas International Airport</h2>
            <p>
              Manas International Airport (IATA: FRU, named after Kyrgyz epic hero Manas) is Kyrgyzstan's main international gateway. Located 25-30 km northwest of Bishkek, it serves as the hub for all international arrivals. Despite being a relatively small airport, it handles flights from Istanbul, Moscow, Dubai, Delhi, and seasonal European routes.
            </p>

            <div className="not-prose my-8 rounded-2xl bg-blue-50 p-6">
              <h3 className="mb-4 font-bold text-blue-900">Airport Quick Facts</h3>
              <div className="grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <p className="mb-1 font-semibold text-slate-900">IATA Code:</p>
                  <p className="text-slate-700">FRU</p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-900">Distance to Center:</p>
                  <p className="text-slate-700">25-30 km</p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-900">Terminals:</p>
                  <p className="text-slate-700">2 (Domestic & International)</p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-900">Open:</p>
                  <p className="text-slate-700">24/7</p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-900">WiFi:</p>
                  <p className="text-slate-700">Free (register with passport)</p>
                </div>
                <div>
                  <p className="mb-1 font-semibold text-slate-900">ATMs:</p>
                  <p className="text-slate-700">Yes (arrivals hall)</p>
                </div>
              </div>
            </div>

            <h2>All Transfer Options Compared</h2>
            <p>
              You have four main options to reach Bishkek city. Choose based on your budget, luggage, arrival time, and comfort preference.
            </p>

            <div className="not-prose my-8 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Option</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Price</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Time</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Comfort</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-semibold">Marshrutka (Bus)</td>
                    <td className="border border-slate-300 p-3 text-green-700">$1-2</td>
                    <td className="border border-slate-300 p-3">45-60 min</td>
                    <td className="border border-slate-300 p-3">★☆☆☆☆</td>
                    <td className="border border-slate-300 p-3">Budget travelers, light luggage</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-semibold">Airport Taxi</td>
                    <td className="border border-slate-300 p-3 text-amber-700">$15-20</td>
                    <td className="border border-slate-300 p-3">30-40 min</td>
                    <td className="border border-slate-300 p-3">★★★☆☆</td>
                    <td className="border border-slate-300 p-3">Spontaneous, moderate budget</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-semibold">Private Transfer</td>
                    <td className="border border-slate-300 p-3 text-blue-700">$35-45</td>
                    <td className="border border-slate-300 p-3">30-35 min</td>
                    <td className="border border-slate-300 p-3">★★★★★</td>
                    <td className="border border-slate-300 p-3">First-timers, families, peace of mind</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-semibold">Rental Car</td>
                    <td className="border border-slate-300 p-3 text-purple-700">$35-50/day</td>
                    <td className="border border-slate-300 p-3">25-30 min</td>
                    <td className="border border-slate-300 p-3">★★★★☆</td>
                    <td className="border border-slate-300 p-3">Road trips, long stays, independence</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Option 1: Marshrutka (Shared Minibus)</h2>
            <div className="not-prose my-8 rounded-2xl border-2 border-green-300 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <Bus className="h-8 w-8 text-green-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Marshrutka - The Budget Option</h3>
                  <p className="text-sm text-slate-600">100-150 som ($1-2) | 45-60 minutes</p>
                </div>
              </div>

              <h4 className="mb-3 font-bold text-slate-900">How It Works:</h4>
              <p className="mb-4 text-sm text-slate-700">
                Marshrutkas (маршрутка) are Soviet-era shared minivans, the backbone of public transport in Central Asia. Route numbers serving the airport are <strong>380, 353, and 382</strong>. They run roughly every 30-60 minutes during the day (6 AM - 8 PM).
              </p>

              <h4 className="mb-3 font-bold text-slate-900">Where to Catch It:</h4>
              <div className="mb-4 space-y-3 text-sm">
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="mb-2 font-semibold text-blue-900">Step 1: Exit Arrivals Hall</p>
                  <p className="text-blue-800">After collecting luggage and clearing customs, exit the international arrivals hall to the main parking area.</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="mb-2 font-semibold text-blue-900">Step 2: Walk to Main Road</p>
                  <p className="text-blue-800">Turn left and walk about 200 meters to the main highway (M41). You'll see a small bus stop shelter.</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="mb-2 font-semibold text-blue-900">Step 3: Look for Route Numbers</p>
                  <p className="text-blue-800">Marshrutkas have route numbers in the windshield. Look for <strong>380, 353, or 382</strong>. Wave to flag them down.</p>
                </div>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="mb-2 font-semibold text-blue-900">Step 4: Say Your Destination</p>
                  <p className="text-blue-800">Tell driver "Tsum" (ЦУМ - main department store in city center) or your specific area. Pay driver directly (cash only, som preferred).</p>
                </div>
              </div>

              <h4 className="mb-3 font-bold text-slate-900">Pros & Cons:</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="mb-2 font-bold text-green-900">Pros</p>
                  <ul className="space-y-1 text-sm text-green-800">
                    <li>✓ Extremely cheap ($1-2)</li>
                    <li>✓ Authentic local experience</li>
                    <li>✓ Frequent during daytime</li>
                    <li>✓ Multiple drop-off points in city</li>
                  </ul>
                </div>
                <div className="rounded-lg bg-red-50 p-4">
                  <p className="mb-2 font-bold text-red-900">Cons</p>
                  <ul className="space-y-1 text-sm text-red-800">
                    <li>✗ Very limited luggage space</li>
                    <li>✗ Crowded, uncomfortable</li>
                    <li>✗ No service late night/early morning</li>
                    <li>✗ Confusing for first-timers</li>
                    <li>✗ Route numbers in Cyrillic</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 rounded-lg border-l-4 border-amber-600 bg-amber-50 p-4">
                <p className="text-sm font-bold text-amber-900">Important Note:</p>
                <p className="text-sm text-amber-800">Marshrutkas don't run after 8-9 PM or before 6 AM. If you land late night/early morning, you MUST take a taxi or pre-book private transfer. Don't walk out expecting to find a marshrutka at 11 PM or 4 AM.</p>
              </div>
            </div>

            <h2>Option 2: Airport Taxi</h2>
            <div className="not-prose my-8 rounded-2xl border-2 border-amber-300 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <Car className="h-8 w-8 text-amber-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Airport Taxi - The Convenient Option</h3>
                  <p className="text-sm text-slate-600">1,300-1,800 som ($15-20) | 30-40 minutes</p>
                </div>
              </div>

              <h4 className="mb-3 font-bold text-slate-900">How It Works:</h4>
              <p className="mb-4 text-sm text-slate-700">
                Official airport taxis wait outside arrivals. They charge fixed rates (though you should still confirm before getting in). There are also unofficial taxis - local drivers hoping to make quick money.
              </p>

              <h4 className="mb-3 font-bold text-slate-900">Two Types of Taxis:</h4>
              <div className="mb-4 space-y-4">
                <div className="rounded-xl bg-blue-50 p-4">
                  <h5 className="mb-2 font-bold text-blue-900">1. Official Airport Taxis (Recommended)</h5>
                  <p className="mb-3 text-sm text-blue-800">
                    Look for taxis with "Airport Taxi" signs, usually white/yellow with company logos. Drivers wear uniforms. Dispatcher desk in arrivals hall.
                  </p>
                  <div className="space-y-2 text-sm text-blue-800">
                    <p><strong>Price:</strong> 1,500-1,800 som ($17-20) to city center</p>
                    <p><strong>Payment:</strong> Cash (som or USD) or card (some companies)</p>
                    <p><strong>Pros:</strong> Metered or fixed rate, safer, receipt provided</p>
                    <p><strong>Cons:</strong> Slightly more expensive than unofficial</p>
                  </div>
                </div>

                <div className="rounded-xl bg-purple-50 p-4">
                  <h5 className="mb-2 font-bold text-purple-900">2. Unofficial/Private Taxis</h5>
                  <p className="mb-3 text-sm text-purple-800">
                    Local drivers (often in personal cars) who hang around arrivals offering rides. Can be cheaper but requires negotiation.
                  </p>
                  <div className="space-y-2 text-sm text-purple-800">
                    <p><strong>Price:</strong> 1,000-1,500 som ($12-17) if you negotiate well</p>
                    <p><strong>Payment:</strong> Cash only (som preferred)</p>
                    <p><strong>Pros:</strong> Can be cheaper, more negotiable</p>
                    <p><strong>Cons:</strong> No guarantees, potential for scams, no receipt</p>
                  </div>
                </div>
              </div>

              <h4 className="mb-3 font-bold text-slate-900">Step-by-Step Guide:</h4>
              <div className="space-y-3 text-sm">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-slate-900">Step 1: Exit to Taxi Area</p>
                  <p className="text-slate-700">Look for signs saying "Taxi" in English/Russian. Usually right outside arrivals.</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-slate-900">Step 2: Agree on Price BEFORE Getting In</p>
                  <p className="text-slate-700">Ask "Skolko do tsentra?" (How much to center?). Should be 1,500-1,800 som. If they quote 3,000+, walk away.</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-slate-900">Step 3: Specify Your Hotel/Address</p>
                  <p className="text-slate-700">Have your hotel name and address written down (in Russian if possible). Show it to driver.</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-slate-900">Step 4: Pay Upon Arrival</p>
                  <p className="text-slate-700">Pay the agreed amount when you arrive at destination. Small tip (100-200 som) appreciated but not required.</p>
                </div>
              </div>

              <div className="mt-4 rounded-lg border-l-4 border-red-600 bg-red-50 p-4">
                <h5 className="mb-2 flex items-center gap-2 font-bold text-red-900">
                  <AlertTriangle className="h-5 w-5" />
                  Common Scams to Avoid
                </h5>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• <strong>Inflated prices:</strong> Some drivers quote $50-100 to tourists. Fair price is $15-20. Don't pay more.</li>
                  <li>• <strong>"No change" scam:</strong> Driver claims no change for large bill. Have smaller bills ready (500, 1000 som notes).</li>
                  <li>• <strong>Fake airport taxi:</strong> Personal car with printed "Taxi" sign. Use official dispatcher or get good look at car/driver first.</li>
                  <li>• <strong>Currency confusion:</strong> Quoting in USD but expecting payment in som at bad rate. Clarify currency upfront.</li>
                  <li>• <strong>Detour scam:</strong> Driver takes longer route to justify higher price. Use Google Maps to track.</li>
                </ul>
              </div>
            </div>

            <h2>Option 3: Private Pre-Booked Transfer (Recommended)</h2>
            <div className="not-prose my-8 rounded-2xl border-2 border-blue-300 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <Car className="h-8 w-8 text-blue-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Private Transfer - The Hassle-Free Option</h3>
                  <p className="text-sm text-slate-600">$35-45 | 30-40 minutes | One direct airport-to-address transfer</p>
                </div>
              </div>

              <p className="mb-4 text-sm text-slate-700">
                Book a private transfer in advance (via Nomad Transfer or other services). Driver meets you at arrivals with name sign, helps with luggage, takes you directly to your hotel. Fixed price agreed upfront - no negotiation, no scams, no stress.
              </p>

              <h4 className="mb-3 font-bold text-slate-900">How It Works:</h4>
              <div className="mb-4 space-y-3 text-sm">
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="mb-2 font-semibold text-green-900">Before Your Flight:</p>
                  <p className="text-green-800">Book online or via WhatsApp. Provide flight number, arrival time, hotel address. Pay online or to driver (your choice).</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="mb-2 font-semibold text-green-900">Upon Landing:</p>
                  <p className="text-green-800">Driver tracks your flight. Even if delayed, they wait. No extra charge for wait time.</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="mb-2 font-semibold text-green-900">At Arrivals:</p>
                  <p className="text-green-800">Exit customs, look for driver holding sign with your name. They help with bags and lead you to car.</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="mb-2 font-semibold text-green-900">During Ride:</p>
                  <p className="text-green-800">Comfortable sedan or minivan (depending on group size) with a direct route to your hotel. A SIM card, ATM, or other extra stop can be added for an additional charge confirmed before travel.</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="mb-2 font-semibold text-green-900">At Hotel:</p>
                  <p className="text-green-800">Driver drops you at entrance, helps unload bags. Pay if not pre-paid. That's it!</p>
                </div>
              </div>

              <h4 className="mb-3 font-bold text-slate-900">Pricing:</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="rounded-xl bg-blue-50 p-4 text-center">
                  <p className="mb-2 text-lg font-bold text-slate-900">Sedan (1-4 pax)</p>
                  <p className="mb-3 text-4xl font-extrabold text-blue-600">$35</p>
                  <ul className="space-y-1 text-left text-xs text-blue-800">
                    <li>✓ 3 large suitcases + hand luggage</li>
                    <li>✓ Comfortable sedan (Toyota Camry or similar)</li>
                    <li>✓ Flight tracking included</li>
                    <li>✓ Free wait time up to 60 min</li>
                  </ul>
                </div>

                <div className="rounded-xl bg-purple-50 p-4 text-center">
                  <p className="mb-2 text-lg font-bold text-slate-900">Minivan (5-7 pax)</p>
                  <p className="mb-3 text-4xl font-extrabold text-purple-600">$45</p>
                  <ul className="space-y-1 text-left text-xs text-purple-800">
                    <li>✓ 6-7 large suitcases + hand luggage</li>
                    <li>✓ Spacious minivan (Toyota Alphard or similar)</li>
                    <li>✓ Perfect for families/groups</li>
                    <li>✓ Same perks as sedan</li>
                  </ul>
                </div>
              </div>
              <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
                These prices cover one direct airport pickup and one drop-off address in Bishkek. Extra stops or additional addresses are charged separately and confirmed before travel.
              </p>

              <h4 className="mb-3 mt-6 font-bold text-slate-900">Why Choose Private Transfer?</h4>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 font-semibold text-slate-900">Perfect For:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>✓ First-time visitors to Kyrgyzstan</li>
                    <li>✓ Families with kids or elderly</li>
                    <li>✓ Lots of luggage</li>
                    <li>✓ Late night/early morning arrivals</li>
                    <li>✓ Business travelers wanting efficiency</li>
                    <li>✓ Anyone who values peace of mind</li>
                  </ul>
                </div>
                <div>
                  <p className="mb-2 font-semibold text-slate-900">Advantages:</p>
                  <ul className="space-y-2 text-sm text-slate-700">
                    <li>✓ Fixed price (no haggling, no surprises)</li>
                    <li>✓ Driver speaks English</li>
                    <li>✓ Flight tracking (no stress if delayed)</li>
                    <li>✓ Meet & greet at arrivals</li>
                    <li>✓ Can ask for tips/recommendations</li>
                    <li>✓ Safe, vetted drivers</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-center text-white">
                <h4 className="mb-2 text-lg font-bold">Nomad Transfer Special</h4>
                <p className="mb-4 text-sm text-blue-100">Book your airport pickup and get free tips on Bishkek sent to your WhatsApp before arrival!</p>
                <a
                  href="https://wa.me/996552291808?text=Hi!%20I%20need%20airport%20pickup%20from%20Manas%20to%20Bishkek"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-full bg-green-500 px-6 py-3 font-semibold text-white hover:bg-green-600"
                >
                  Book Airport Pickup via WhatsApp
                </a>
              </div>
            </div>

            <h2>Option 4: Rental Car</h2>
            <div className="not-prose my-8 rounded-2xl border-2 border-purple-300 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <Car className="h-8 w-8 text-purple-600" />
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Car Rental - The Independent Option</h3>
                  <p className="text-sm text-slate-600">$35-50/day | Best for road trips</p>
                </div>
              </div>

              <p className="mb-4 text-sm text-slate-700">
                Several car rental companies operate at Manas Airport. Desks are in the arrivals hall. You can pre-book online or arrange on arrival (though pre-booking is cheaper and guarantees availability).
              </p>

              <h4 className="mb-3 font-bold text-slate-900">Rental Companies at Airport:</h4>
              <div className="mb-4 space-y-3 text-sm">
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-slate-900">Sixt | Europcar | Avis</p>
                  <p className="text-slate-600">International brands. $45-70/day. Better cars, higher prices. Desks open for all international arrivals.</p>
                </div>
                <div className="rounded-lg bg-slate-50 p-3">
                  <p className="font-semibold text-slate-900">Local Companies (Kyrgyz Rent a Car, etc.)</p>
                  <p className="text-slate-600">$35-50/day. Older cars but functional. Sometimes limited hours. Pre-book to ensure car ready.</p>
                </div>
              </div>

              <h4 className="mb-3 font-bold text-slate-900">Requirements:</h4>
              <ul className="mb-4 space-y-2 text-sm text-slate-700">
                <li>• International driving permit (IDP) + your country's license</li>
                <li>• Passport</li>
                <li>• Credit card for deposit (usually $300-500 hold)</li>
                <li>• Age 21+ (some companies require 25+)</li>
              </ul>

              <h4 className="mb-3 font-bold text-slate-900">Driving from Airport to City:</h4>
              <p className="mb-3 text-sm text-slate-700">
                It's straightforward. Exit airport and follow signs for "Bishkek." You'll join the M41 highway heading south. 25-30 km straight drive, hard to get lost. GPS works well in Kyrgyzstan.
              </p>

              <div className="rounded-lg border-l-4 border-amber-600 bg-amber-50 p-4">
                <p className="mb-2 text-sm font-bold text-amber-900">Important Driving Notes:</p>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li>• Drive on the RIGHT side of the road</li>
                  <li>• Speed limit: 60 km/h in city, 90-110 km/h on highways</li>
                  <li>• Police checkpoints common (have documents ready)</li>
                  <li>• Winter (Nov-Mar): winter tires mandatory</li>
                  <li>• Road quality varies (good in Bishkek, rougher in mountains)</li>
                  <li>• Parking: paid zones in city center (50-100 som/hour)</li>
                </ul>
              </div>

              <h4 className="mb-3 mt-4 font-bold text-slate-900">When Rental Car Makes Sense:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✓ Planning road trip around Kyrgyzstan (Issyk-Kul, Osh, Karakol)</li>
                <li>✓ Staying 5+ days and want flexibility</li>
                <li>✓ Traveling with family and lots of gear</li>
                <li>✓ Want to visit remote areas not served by tours</li>
              </ul>

              <h4 className="mb-3 mt-4 font-bold text-slate-900">When It Doesn't:</h4>
              <ul className="space-y-2 text-sm text-slate-700">
                <li>✗ Staying only in Bishkek (public transport/taxis sufficient)</li>
                <li>✗ Not comfortable driving in unfamiliar country</li>
                <li>✗ Short trip (2-3 days) - transfers cheaper</li>
                <li>✗ Winter travel without 4WD experience</li>
              </ul>
            </div>

            <h2>Distance & Route Details</h2>
            <p>
              The route from Manas Airport to Bishkek city center is straightforward, following the M41 highway south.
            </p>

            <div className="not-prose my-8 rounded-2xl bg-slate-50 p-6">
              <h3 className="mb-4 font-bold text-slate-900">Route Breakdown</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">0</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Manas Airport (Start)</h4>
                    <p className="text-sm text-slate-600">International terminal, elevation 627m</p>
                  </div>
                </div>

                <div className="ml-5 border-l-2 border-slate-300 pl-4">
                  <p className="text-sm text-slate-600">↓ M41 Highway (main road) - 20 km ↓</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">20</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Bishkek Outskirts</h4>
                    <p className="text-sm text-slate-600">Residential areas, start seeing city development</p>
                  </div>
                </div>

                <div className="ml-5 border-l-2 border-slate-300 pl-4">
                  <p className="text-sm text-slate-600">↓ Enter city limits - 5 km ↓</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">25</div>
                  <div>
                    <h4 className="font-bold text-slate-900">Northern Bishkek</h4>
                    <p className="text-sm text-slate-600">Residential neighborhoods, local markets</p>
                  </div>
                </div>

                <div className="ml-5 border-l-2 border-slate-300 pl-4">
                  <p className="text-sm text-slate-600">↓ Main streets (Manas Ave, Chui Ave) - 3-5 km ↓</p>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 text-white font-bold">30</div>
                  <div>
                    <h4 className="font-bold text-slate-900">City Center (Destination)</h4>
                    <p className="text-sm text-slate-600">Ala-Too Square, Erkindik Blvd, main hotels area</p>
                  </div>
                </div>
              </div>
            </div>

            <h2>Travel Time by Time of Day</h2>
            <p>
              Traffic in Bishkek varies significantly. Here's what to expect based on when you arrive:
            </p>

            <div className="not-prose my-8 space-y-4">
              <div className="rounded-xl bg-green-50 p-6">
                <h4 className="mb-2 font-bold text-green-900">Fast Times (25-35 min)</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• <strong>Late night (10 PM - 6 AM):</strong> Empty roads, smooth driving</li>
                  <li>• <strong>Mid-morning (10 AM - 12 PM):</strong> Rush hour over, light traffic</li>
                  <li>• <strong>Mid-afternoon (2 PM - 4 PM):</strong> Pre-evening lull</li>
                </ul>
              </div>

              <div className="rounded-xl bg-amber-50 p-6">
                <h4 className="mb-2 font-bold text-amber-900">Moderate Times (35-45 min)</h4>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li>• <strong>Early morning (6 AM - 8 AM):</strong> Light traffic building up</li>
                  <li>• <strong>Evening (7 PM - 10 PM):</strong> Post-rush hour, still some cars</li>
                  <li>• <strong>Weekends:</strong> Generally lighter but shopping areas busy</li>
                </ul>
              </div>

              <div className="rounded-xl bg-red-50 p-6">
                <h4 className="mb-2 font-bold text-red-900">Slow Times (45-60 min)</h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li>• <strong>Morning rush (8 AM - 10 AM):</strong> Everyone heading to work/school</li>
                  <li>• <strong>Evening rush (5 PM - 7 PM):</strong> Worst traffic, everyone leaving work</li>
                  <li>• <strong>Friday afternoons:</strong> Weekend exodus starts early</li>
                </ul>
              </div>
            </div>

            <h2>Luggage Considerations</h2>
            <p>
              Your luggage situation should heavily influence which transport option you choose.
            </p>

            <div className="not-prose my-8">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Transport</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Luggage Capacity</th>
                    <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-semibold">Marshrutka</td>
                    <td className="border border-slate-300 p-3">1 medium bag + backpack</td>
                    <td className="border border-slate-300 p-3">Very limited space. Large bags won't fit. Locals may complain.</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-semibold">Airport Taxi</td>
                    <td className="border border-slate-300 p-3">2-3 large bags + hand luggage</td>
                    <td className="border border-slate-300 p-3">Standard sedan trunk. If 3+ large bags, request larger car.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-semibold">Private Transfer (Sedan)</td>
                    <td className="border border-slate-300 p-3">3 large bags + hand luggage</td>
                    <td className="border border-slate-300 p-3">Spacious trunk. Driver helps load/unload.</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3 font-semibold">Private Transfer (Minivan)</td>
                    <td className="border border-slate-300 p-3">6-7 large bags + hand luggage</td>
                    <td className="border border-slate-300 p-3">Perfect for families, ski equipment, or lots of gear.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-semibold">Rental Car</td>
                    <td className="border border-slate-300 p-3">Depends on vehicle</td>
                    <td className="border border-slate-300 p-3">Sedan: 2-3 bags. SUV: 4-5 bags. You load/unload yourself.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
              <Luggage className="mb-3 h-8 w-8 text-blue-600" />
              <p className="text-sm text-blue-900">
                <strong>Nomad Transfer Tip:</strong> If you have ski equipment, surfboards, or unusually large/heavy luggage, mention this when booking. We'll send a vehicle with roof racks or extra cargo space at no additional charge.
              </p>
            </div>

            <h2>Payment Methods & Currency</h2>
            <p>
              Understanding payment options helps you avoid confusion and potential scams.
            </p>

            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-green-50 p-6">
                <h4 className="mb-3 font-bold text-green-900">Kyrgyz Som (KGS)</h4>
                <p className="mb-3 text-sm text-green-800">
                  Local currency. Best rates and most widely accepted. ATMs in airport arrivals hall.
                </p>
                <div className="text-sm text-green-800">
                  <p className="mb-2"><strong>Exchange rate (May 2026):</strong></p>
                  <p>$1 USD = ~87 som</p>
                  <p>€1 EUR = ~95 som</p>
                </div>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h4 className="mb-3 font-bold text-blue-900">US Dollars (USD)</h4>
                <p className="mb-3 text-sm text-blue-800">
                  Accepted by taxis and private transfers, but at slightly worse rate than official. Bring small bills ($5, $10, $20).
                </p>
                <p className="text-sm text-blue-800">
                  Avoid $100 bills - many drivers can't change them.
                </p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6">
                <h4 className="mb-3 font-bold text-purple-900">Credit Cards</h4>
                <p className="mb-3 text-sm text-purple-800">
                  Accepted by: Official airport taxis (some), pre-booked transfers (online), rental car companies. NOT accepted by: Marshrutkas, unofficial taxis.
                </p>
                <p className="text-sm text-purple-800">
                  Visa and Mastercard work. Amex rarely accepted.
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-6">
                <h4 className="mb-3 font-bold text-amber-900">Mobile Payment (WhatsApp/Online)</h4>
                <p className="text-sm text-amber-800">
                  Nomad Transfer and some services accept payment via WhatsApp (card/PayPal/Wise). Pay before arrival for complete peace of mind.
                </p>
              </div>
            </div>

            <h2>What to Do at the Airport While Waiting</h2>
            <p>
              If your ride is delayed or you have time before your hotel check-in, here's what you can do:
            </p>

            <div className="not-prose space-y-3">
              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="mb-2 font-bold text-slate-900">Get Local SIM Card</h4>
                <p className="text-sm text-slate-700">
                  Beeline, MegaCom, and O! have counters in arrivals. Tourist packages: 500 som (~$6) for 10GB + unlimited local calls. Bring passport for registration.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="mb-2 font-bold text-slate-900">Exchange Money</h4>
                <p className="text-sm text-slate-700">
                  Exchange counter in arrivals (rates okay but not best). ATMs accept Visa/Mastercard. Better rates at exchange offices in city, but airport is convenient for small amounts.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="mb-2 font-bold text-slate-900">Use WiFi</h4>
                <p className="text-sm text-slate-700">
                  Free WiFi in arrivals hall. Need to register with passport number. Good enough for WhatsApp, email, maps download.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="mb-2 font-bold text-slate-900">Grab Coffee/Snack</h4>
                <p className="text-sm text-slate-700">
                  Small cafe in departures (go upstairs). Basic coffee, tea, sandwiches. Not cheap but drinkable. No major restaurants in airport.
                </p>
              </div>

              <div className="rounded-lg bg-slate-50 p-4">
                <h4 className="mb-2 font-bold text-slate-900">Duty-Free Shopping</h4>
                <p className="text-sm text-slate-700">
                  Small duty-free shop. Alcohol, cigarettes, chocolates. Prices average (not amazing deals). More for last-minute gifts.
                </p>
              </div>
            </div>

            <h2>Frequently Asked Questions</h2>

            <div className="not-prose space-y-4">
              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Is Manas Airport safe to arrive at late night?
                </summary>
                <p className="mt-3 text-slate-600">
                  Yes, very safe. Airport operates 24/7. Security is good. Taxis available all night. However, marshrutkas don't run after 8-9 PM, so book private transfer for late arrivals. Recommended to pre-book rather than looking for taxi at 2 AM.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Do I need to book airport transfer in advance?
                </summary>
                <p className="mt-3 text-slate-600">
                  Not required, but highly recommended. Taxis are available on arrival, but prices vary and scams possible. Pre-booking guarantees fixed price, English-speaking driver, and someone waiting for you. Especially important for first-time visitors or late night arrivals.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Can I use Uber or similar ride apps?
                </summary>
                <p className="mt-3 text-slate-600">
                  No Uber in Kyrgyzstan. Local equivalent is Yandex Taxi (Russian app). Works in Bishkek city but NOT reliable for airport pickup (drivers often cancel airport runs). Better to use official taxi or pre-booked transfer for airport.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  How long does it take to get through customs/immigration?
                </summary>
                <p className="mt-3 text-slate-600">
                  For visa-free nationalities: 15-30 minutes typical. If arriving with multiple international flights, can be 45-60 min. Have migration card filled out (given on plane), passport ready. Customs is quick unless you have large amounts to declare. Total airport exit time: 30-60 min from landing.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  What if my flight is delayed?
                </summary>
                <p className="mt-3 text-slate-600">
                  If you pre-booked transfer: Driver tracks your flight and waits (no extra charge). If using airport taxi: They're always there. If planning marshrutka: Check time - if you'll arrive after 8 PM, marshrutkas stop running, you'll need taxi. Always have backup plan.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Is there public transport at night (after 8 PM)?
                </summary>
                <p className="mt-3 text-slate-600">
                  No. Marshrutkas stop running around 8-9 PM. No night buses, no train to airport. Only option is taxi or pre-booked transfer. This catches many travelers off-guard - plan accordingly for evening arrivals!
                </p>
              </details>
            </div>

            <h2>Our Recommendation</h2>
            <p>
              After helping thousands of travelers, here's our honest recommendation based on traveler type:
            </p>

            <div className="not-prose my-8 space-y-4">
              <div className="rounded-xl bg-green-50 p-6">
                <h4 className="mb-3 font-bold text-green-900">First-Time Visitors → Private Transfer ($35-45)</h4>
                <p className="text-sm text-green-800">
                  Don't stress on day 1. Pre-book a transfer, arrive to your name on a sign, and start your trip smoothly. The $15-20 extra over a taxi is worth it for peace of mind. Plus you can ask driver for tips on Bishkek.
                </p>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h4 className="mb-3 font-bold text-blue-900">Budget Backpackers (Daytime Arrival) → Marshrutka ($1-2)</h4>
                <p className="text-sm text-blue-800">
                  If you arrive during the day (before 6 PM), speak basic Russian, and have light luggage, marshrutka is fine. It's an adventure and costs almost nothing. Be prepared for crowded, bumpy ride.
                </p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6">
                <h4 className="mb-3 font-bold text-purple-900">Families/Groups → Private Minivan ($45)</h4>
                <p className="text-sm text-purple-800">
                  With kids, luggage, and multiple people, you want door-to-door service. Split among 4-6 people, it's only $5-7 per person. Way better than cramming into taxi or dealing with marshrutka logistics.
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-6">
                <h4 className="mb-3 font-bold text-amber-900">Night Arrivals (After 8 PM) → Pre-booked Transfer ($35-45)</h4>
                <p className="text-sm text-amber-800">
                  Marshrutkas don't run. Airport taxis can be sketchy late night. Pre-booking means someone is waiting, no matter what time you land. Critical for peace of mind when arriving to unfamiliar city at midnight.
                </p>
              </div>

              <div className="rounded-xl bg-teal-50 p-6">
                <h4 className="mb-3 font-bold text-teal-900">Road Trip Planners → Rental Car ($35-50/day)</h4>
                <p className="text-sm text-teal-800">
                  Planning to drive to Issyk-Kul, Osh, or around Kyrgyzstan? Pick up car at airport and start immediately. Make sure you have international driving permit and are comfortable with local driving style.
                </p>
              </div>
            </div>
          </article>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-indigo-600 to-blue-700 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Book Your Airport Transfer Now</h2>
            <p className="mb-6 text-lg text-indigo-50">
              Stress-free arrival. Fixed price. English-speaking driver. Flight tracking included. Start your Kyrgyzstan adventure smoothly.
            </p>
            <div className="mb-6 grid gap-4 text-sm md:grid-cols-3">
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-2xl font-bold">$35</p>
                <p className="text-indigo-100">Sedan (1-4 pax)</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-2xl font-bold">$45</p>
                <p className="text-indigo-100">Minivan (5-7 pax)</p>
              </div>
              <div className="rounded-lg bg-white/10 p-4">
                <p className="text-2xl font-bold">60 min</p>
                <p className="text-indigo-100">Free wait time</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/996552291808?text=Hi!%20I%20need%20airport%20pickup%20from%20Manas%20Airport%20to%20Bishkek"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600"
              >
                Book via WhatsApp
              </a>
              <Link
                href="/transfers/bishkek-to-almaty"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-indigo-600"
              >
                View All Transfers
              </Link>
            </div>
            <p className="mt-6 text-sm text-indigo-200">
              Questions? WhatsApp us anytime. We respond within 5 minutes.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
