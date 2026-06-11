import type { Metadata } from "next";
import Link from "next/link";
import { Snowflake, AlertTriangle, Calendar, Car, MapPin, DollarSign } from "lucide-react";

export const metadata: Metadata = {
  title: "Bishkek to Karakol in Winter | Snow, Road Conditions & Ski Resort Transfer 2026",
  description:
    "Complete winter transfer guide Bishkek to Karakol. Road conditions Nov-Mar, snow chains required, winter tires mandatory. Karakol ski resort access. Safe transfers $136. Winter weather tips, best departure times, mountain pass conditions.",
  keywords: [
    "bishkek to karakol winter",
    "karakol ski resort transfer",
    "winter road conditions kyrgyzstan",
    "bishkek karakol snow",
    "winter transfer karakol",
    "ski resort transfer kyrgyzstan",
    "winter tires kyrgyzstan",
  ],
  openGraph: {
    title: "Bishkek to Karakol in Winter | Safe Winter Transfers & Ski Resort Access",
    description: "Winter road conditions, snow chains, ski resort transfers. Safe & reliable winter transfers from $136.",
    url: "https://nomad-transfer.com/guides/bishkek-to-karakol-winter",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/guides/bishkek-to-karakol-winter",
  },
};

export default function BishkekToKarakolWinterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/50 px-4 py-2 text-sm">
              <Snowflake className="h-4 w-4" />
              <span>Winter Guide 2025-2026</span>
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">Bishkek to Karakol in Winter</h1>
            <p className="mt-6 text-xl text-blue-50">
              Everything you need to know about winter transfers to Karakol ski resort. Road conditions, safety tips, and reliable transfer options.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <Calendar className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 font-bold text-slate-900">Winter Season</h3>
            <p className="text-sm text-slate-700">November to March. Peak ski season: December-February. Roads maintained but snow common.</p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <Car className="mb-3 h-8 w-8 text-amber-600" />
            <h3 className="mb-2 font-bold text-slate-900">Winter Requirements</h3>
            <p className="text-sm text-slate-700">Winter tires mandatory. Snow chains for mountain passes. 4x4 recommended in heavy snow.</p>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <DollarSign className="mb-3 h-8 w-8 text-teal-600" />
            <h3 className="mb-2 font-bold text-slate-900">Transfer Cost</h3>
            <p className="text-sm text-slate-700">Same price year-round: $136 sedan, $167 minivan. Winter equipment included, no extra fees.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-slate lg:prose-lg max-w-none">
            <h2>Winter Road Conditions: Bishkek to Karakol</h2>
            <p>
              The Bishkek to Karakol route (360 km) remains open year-round, but winter conditions (November-March) require preparation. The route crosses Boom Gorge and follows the Issyk-Kul north shore — both can experience snow, ice, and reduced visibility.
            </p>

            <h3>Road Condition by Section</h3>
            <div className="not-prose space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">1. Bishkek to Boom Gorge (0-80 km)</h4>
                <p className="mb-3 text-slate-700">
                  <strong>Condition:</strong> Generally good. Main highway, regularly cleared. Snow accumulation in Boom Gorge canyon.
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Winter Tips:</strong> Boom Gorge can be icy early morning. Drivers reduce speed through the canyon. Expect 1-1.5 hours for this section in winter vs 1 hour in summer.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">2. Boom Gorge to Cholpon-Ata (80-250 km)</h4>
                <p className="mb-3 text-slate-700">
                  <strong>Condition:</strong> North shore highway. Well-maintained, but wind can blow snow across the road. Lake views often obscured by snow/fog.
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Winter Tips:</strong> Wind from Issyk-Kul lake creates snowdrifts. Highway crews clear regularly, but fresh snow accumulates quickly. Allow 3-3.5 hours for this section.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">3. Cholpon-Ata to Karakol (250-360 km)</h4>
                <p className="mb-3 text-slate-700">
                  <strong>Condition:</strong> Final stretch to Karakol. Elevation increases slightly. More snow as you approach the ski resort area.
                </p>
                <p className="text-sm text-slate-600">
                  <strong>Winter Tips:</strong> Last 30 km can have heavy snow if there's been recent snowfall at the ski resort. Snow chains may be needed. Allow 2-2.5 hours.
                </p>
              </div>
            </div>

            <h2>Karakol Ski Resort Access in Winter</h2>
            <p>
              Karakol is Kyrgyzstan's premier ski resort, operating from mid-December to early March. The ski resort is located 7 km from Karakol city at 2,300-3,040m elevation.
            </p>

            <div className="not-prose rounded-2xl border-l-4 border-teal-600 bg-teal-50 p-6">
              <h3 className="mb-3 text-lg font-bold text-slate-900">Ski Resort Transfer Options</h3>
              <ul className="space-y-2 text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span><strong>Bishkek to Karakol city ($136):</strong> Drop-off in Karakol city center. Arrange local taxi to ski resort (+$5-10).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span><strong>Bishkek to Ski Resort direct ($147):</strong> Direct drop-off at ski resort base. Recommended for heavy ski equipment.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-teal-600">•</span>
                  <span><strong>Round-trip option:</strong> Book both ways upfront for slight discount. Confirm return date in advance.</span>
                </li>
              </ul>
            </div>

            <h2>Winter Safety & Preparation</h2>

            <h3>What Our Drivers Do</h3>
            <p>All Nomad Transfer drivers are experienced with winter mountain driving:</p>
            <ul>
              <li><strong>Winter Tires:</strong> Mandatory Nov 1 - Mar 31. All vehicles switch to winter tires.</li>
              <li><strong>Snow Chains:</strong> Carried in all vehicles. Installed when needed for mountain passes or heavy snow.</li>
              <li><strong>Weather Monitoring:</strong> We check road conditions and weather forecasts before departure. If conditions are dangerous, we'll reschedule free of charge.</li>
              <li><strong>Slower Speeds:</strong> Winter transfers take 7-8 hours vs 6-7 hours in summer. Safety over speed.</li>
              <li><strong>Emergency Kit:</strong> Warm blankets, shovel, tow rope, emergency food/water in every vehicle.</li>
            </ul>

            <h3>What You Should Bring</h3>
            <ul>
              <li>Warm clothing (even inside the car, temps can drop)</li>
              <li>Snacks and water (rest stops may be limited in snow)</li>
              <li>Charged phone + power bank</li>
              <li>Sunglasses (snow glare is intense)</li>
              <li>Motion sickness medication if prone to it (winding roads)</li>
            </ul>

            <h2>Best Departure Times for Winter Transfers</h2>
            <div className="not-prose space-y-4">
              <div className="rounded-xl bg-green-50 p-6">
                <h4 className="mb-2 font-bold text-green-900">✓ Recommended: 8:00-9:00 AM</h4>
                <p className="text-sm text-green-800">
                  Roads are cleared overnight. You arrive Karakol by 4-5 PM with daylight. Avoids morning ice in Boom Gorge (melts by 9 AM).
                </p>
              </div>

              <div className="rounded-xl bg-amber-50 p-6">
                <h4 className="mb-2 font-bold text-amber-900">⚠ Not Ideal: 5:00-7:00 AM</h4>
                <p className="text-sm text-amber-800">
                  Boom Gorge is icy early morning. Roads not yet cleared of overnight snow. Very cold temperatures.
                </p>
              </div>

              <div className="rounded-xl bg-red-50 p-6">
                <h4 className="mb-2 font-bold text-red-900">✗ Avoid: After 12:00 PM</h4>
                <p className="text-sm text-red-800">
                  Arriving Karakol after dark in winter. Mountain roads harder to navigate at night. Limited visibility if snowing.
                </p>
              </div>
            </div>

            <h2>Pricing & Booking</h2>
            <p>
              Winter pricing is the same as summer — no extra fees for winter tires, chains, or slower travel. Our drivers are prepared for winter conditions as part of the standard service.
            </p>

            <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-teal-300 bg-white p-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">Sedan (4 pax)</h3>
                <p className="mb-4 text-4xl font-extrabold text-teal-600">$136</p>
                <ul className="space-y-2 text-left text-sm text-slate-600">
                  <li>✓ Winter tires included</li>
                  <li>✓ Snow chains included</li>
                  <li>✓ Hotel pickup/drop-off</li>
                  <li>✓ Free cancellation 24h</li>
                </ul>
              </div>

              <div className="rounded-2xl border-2 border-amber-300 bg-white p-6 text-center">
                <h3 className="mb-2 text-2xl font-bold text-slate-900">Minivan (6-7 pax)</h3>
                <p className="mb-4 text-4xl font-extrabold text-amber-600">$167</p>
                <ul className="space-y-2 text-left text-sm text-slate-600">
                  <li>✓ Extra space for ski gear</li>
                  <li>✓ Winter equipment included</li>
                  <li>✓ Perfect for families/groups</li>
                  <li>✓ Same winter safety standards</li>
                </ul>
              </div>
            </div>

            <h2>Frequently Asked Questions</h2>

            <div className="not-prose space-y-4">
              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Is the road safe in winter?
                </summary>
                <p className="mt-3 text-slate-600">
                  Yes, but conditions vary. The Bishkek-Karakol highway is a major route and is maintained year-round. Many of our drivers have 10+ years of experience in tourist and long-distance transport. We monitor weather and will reschedule if conditions are too dangerous.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Do you provide 4x4 vehicles?
                </summary>
                <p className="mt-3 text-slate-600">
                  Standard sedans and minivans with winter tires are sufficient for the main highway route. For trips to ski resort base or during heavy snowfall, we can arrange 4x4 vehicles on request (+$20-30). Mention this when booking via WhatsApp.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  What if the road is closed due to snow?
                </summary>
                <p className="mt-3 text-slate-600">
                  The Bishkek-Karakol highway is rarely fully closed, but heavy snow can cause delays. If conditions are dangerous, we'll contact you to reschedule at no charge. If you're already en route and must turn back, you pay only 50% of the fare.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Can you transport ski equipment?
                </summary>
                <p className="mt-3 text-slate-600">
                  Yes! Sedans can fit 2 sets of skis/snowboards + luggage. Minivans fit 4-6 sets. Mention ski equipment when booking so we ensure adequate space.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  How long does the transfer take in winter?
                </summary>
                <p className="mt-3 text-slate-600">
                  7-8 hours with photo/rest stops. In summer it's 6-7 hours. We drive slower in winter for safety. Heavy snowfall can add 1-2 hours. Always allow buffer time if you have plans upon arrival.
                </p>
              </details>
            </div>
          </article>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-teal-600 to-teal-700 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Book Your Winter Transfer to Karakol</h2>
            <p className="mb-6 text-lg text-teal-50">
              Experienced winter drivers. Winter tires & chains included. Safe, reliable transfers to Karakol ski resort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/996552291808?text=Hi!%20I%20need%20a%20winter%20transfer%20from%20Bishkek%20to%20Karakol"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600"
              >
                Book via WhatsApp
              </a>
              <Link
                href="/transfers/bishkek-to-karakol"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-teal-600"
              >
                View Main Route Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
