import type { Metadata } from "next";
import Link from "next/link";
import { Globe, MapPin, Clock, FileText, AlertCircle, DollarSign, CheckCircle, Car } from "lucide-react";

export const metadata: Metadata = {
  title: "Kyrgyzstan to Kazakhstan Border Crossing Guide 2026 | Korday & Karkara Checkpoints",
  description:
    "Complete border crossing guide Kyrgyzstan-Kazakhstan 2026. Korday border (Bishkek-Almaty), Karkara (Karakol-Almaty). Visa requirements by nationality, documents needed, crossing times, fees, insurance. Tips for smooth crossing at both checkpoints.",
  keywords: [
    "kyrgyzstan kazakhstan border crossing",
    "korday border crossing",
    "karkara border checkpoint",
    "bishkek almaty border",
    "karakol almaty border",
    "kazakhstan visa requirements",
    "kyrgyzstan border tips",
    "central asia border crossing",
  ],
  openGraph: {
    title: "Kyrgyzstan-Kazakhstan Border Crossing Guide 2026 | Korday & Karkara",
    description: "Visa requirements, documents, crossing times, tips. Complete guide for Korday and Karkara border checkpoints.",
    url: "https://nomad-transfer.com/guides/kyrgyzstan-kazakhstan-border-crossing",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/guides/kyrgyzstan-kazakhstan-border-crossing",
  },
};

export default function KyrgyzstanKazakhstanBorderCrossingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-emerald-600 to-teal-700 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-900/50 px-4 py-2 text-sm">
              <Globe className="h-4 w-4" />
              <span>Updated May 2026</span>
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">Kyrgyzstan to Kazakhstan Border Crossing Guide</h1>
            <p className="mt-6 text-xl text-emerald-50">
              Everything you need to know about crossing from Kyrgyzstan to Kazakhstan at Korday and Karkara checkpoints. Visa requirements, documents, crossing times, and insider tips.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-6">
            <MapPin className="mb-3 h-8 w-8 text-emerald-600" />
            <h3 className="mb-2 font-bold text-slate-900">Two Main Crossings</h3>
            <p className="text-sm text-slate-700">Korday (Bishkek-Almaty route) and Karkara (Karakol-Almaty route). Both open 24/7 year-round.</p>
          </div>
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <Clock className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 font-bold text-slate-900">Crossing Time</h3>
            <p className="text-sm text-slate-700">30-60 min average. Can be 2-3 hours on weekends/holidays. Best times: 6-8 AM or 8-10 PM.</p>
          </div>
          <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6">
            <FileText className="mb-3 h-8 w-8 text-purple-600" />
            <h3 className="mb-2 font-bold text-slate-900">Documents Needed</h3>
            <p className="text-sm text-slate-700">Passport (6+ months validity), Kazakhstan visa (if required), vehicle registration, insurance.</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-slate lg:prose-lg max-w-none">
            <h2>The Two Main Border Crossings: Korday vs Karkara</h2>
            <p>
              There are several border crossings between Kyrgyzstan and Kazakhstan, but for travelers, two are most important: Korday (also called Chon-Kapka on Kyrgyz side) for the Bishkek-Almaty route, and Karkara for the Karakol-Almaty route via the scenic southern route.
            </p>

            <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-emerald-300 bg-white p-6">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Korday Border</h3>
                <div className="space-y-3 text-sm text-slate-700">
                  <p><strong>Location:</strong> 60 km west of Bishkek, 20 km from Almaty</p>
                  <p><strong>Route:</strong> Bishkek to Almaty (main highway)</p>
                  <p><strong>Distance:</strong> 240 km total Bishkek-Almaty</p>
                  <p><strong>Traffic:</strong> Busiest crossing. Heavy truck traffic</p>
                  <p><strong>Facilities:</strong> Cafes, currency exchange, ATMs</p>
                  <p><strong>Best for:</strong> Bishkek-Almaty direct route</p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-teal-300 bg-white p-6">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">Karkara Border</h3>
                <div className="space-y-3 text-sm text-slate-700">
                  <p><strong>Location:</strong> 250 km from Karakol, 350 km from Almaty</p>
                  <p><strong>Route:</strong> Karakol to Almaty (southern route)</p>
                  <p><strong>Distance:</strong> 600 km total Karakol-Almaty</p>
                  <p><strong>Traffic:</strong> Much quieter. Scenic mountain route</p>
                  <p><strong>Facilities:</strong> Basic facilities, limited services</p>
                  <p><strong>Best for:</strong> Karakol-Almaty, nature lovers</p>
                </div>
              </div>
            </div>

            <h2>Visa Requirements by Nationality (2026)</h2>
            <p>
              Kazakhstan has different visa policies than Kyrgyzstan. Many nationalities can enter Kyrgyzstan visa-free but require a visa for Kazakhstan, or vice versa. Always check current requirements as policies change.
            </p>

            <h3>Visa-Free Entry to Kazakhstan (up to 30 days)</h3>
            <div className="not-prose rounded-2xl bg-green-50 p-6">
              <h4 className="mb-3 font-bold text-green-900">Nationals who DO NOT need Kazakhstan visa:</h4>
              <ul className="grid gap-2 text-sm text-green-800 md:grid-cols-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>EU citizens (all 27 countries)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>USA, Canada, Australia</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>UK, New Zealand</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>Japan, South Korea, Singapore</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>UAE, Malaysia, Turkey</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                  <span>Russia, Belarus, Armenia (CIS)</span>
                </li>
              </ul>
              <p className="mt-4 text-sm text-green-900">
                <strong>Note:</strong> Visa-free stay is typically 30 days. For longer stays, you need to register or apply for extension. Check with Kazakhstan embassy for your specific nationality.
              </p>
            </div>

            <h3 className="mt-8">Nationals Who NEED Kazakhstan Visa</h3>
            <div className="not-prose rounded-2xl bg-amber-50 p-6">
              <p className="mb-4 text-sm text-amber-900">
                If you're not on the visa-free list, you need to apply for Kazakhstan visa in advance. This includes citizens of India, Pakistan, Bangladesh, most African countries, and some Asian countries.
              </p>
              <h4 className="mb-3 font-bold text-amber-900">How to get Kazakhstan visa:</h4>
              <ul className="space-y-2 text-sm text-amber-800">
                <li className="flex items-start gap-2">
                  <span className="font-bold">1.</span>
                  <span><strong>E-visa:</strong> Apply online at <a href="https://www.vmp.gov.kz" className="underline">www.vmp.gov.kz</a>. Processing 3-5 days. Cost varies by nationality ($20-160 USD).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">2.</span>
                  <span><strong>Embassy visa:</strong> Apply at Kazakhstan embassy in Bishkek (24 Toktogul St). Requires invitation letter for some nationalities. Processing 5-10 days.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold">3.</span>
                  <span><strong>Business visa:</strong> If traveling for work, easier to get business visa with invitation from Kazakhstan company. 30-90 day options.</span>
                </li>
              </ul>
              <p className="mt-4 text-sm font-bold text-amber-900">
                IMPORTANT: You cannot get Kazakhstan visa at the border. Must be obtained before crossing.
              </p>
            </div>

            <h2>Documents Required for Border Crossing</h2>
            <p>
              Even if you're visa-free, you need proper documentation. Missing documents can result in being denied entry or lengthy delays.
            </p>

            <h3>Personal Documents</h3>
            <div className="not-prose space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">1. Passport</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Must be valid for at least 6 months from entry date</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>At least 2 blank pages for stamps</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-600" />
                    <span>Not damaged or torn (they're strict about this)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">2. Kazakhstan Visa (if required by nationality)</h4>
                <p className="text-sm text-slate-700">
                  Print your e-visa confirmation if you applied online. Officers will check the system, but having printout speeds up the process.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">3. Migration Card (if entering Kyrgyzstan)</h4>
                <p className="text-sm text-slate-700">
                  When you entered Kyrgyzstan, you should have received a migration card. Keep it! You must show it when exiting. If you lost it, report to migration office in Bishkek before going to border.
                </p>
              </div>
            </div>

            <h3 className="mt-8">Vehicle Documents (if in private car or taxi)</h3>
            <div className="not-prose space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">1. Vehicle Registration</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Driver must have vehicle registration documents (technical passport). If you're passenger in organized transfer, driver handles this.
                </p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">2. International Insurance (Green Card)</h4>
                <p className="text-sm text-slate-700 mb-3">
                  Required for entering Kazakhstan. Can be purchased at border (about $15-30 for 15 days). Most Kyrgyz insurance doesn't cover Kazakhstan - need separate policy.
                </p>
                <div className="rounded-lg bg-blue-50 p-4 text-sm text-blue-900">
                  <strong>Tip:</strong> If booking with Nomad Transfer, we include Kazakhstan insurance in the price. You don't need to worry about purchasing separately.
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">3. Power of Attorney (if not owner)</h4>
                <p className="text-sm text-slate-700">
                  If driver is not vehicle owner, need notarized power of attorney. Professional transfer companies have this handled.
                </p>
              </div>
            </div>

            <h2>Border Crossing Process: Step-by-Step</h2>
            <p>
              Understanding the process helps you move through smoothly. Both Korday and Karkara follow similar procedures, though Karkara is typically faster due to less traffic.
            </p>

            <div className="not-prose my-8 space-y-6">
              <div className="rounded-xl border-l-4 border-red-500 bg-red-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-red-600 font-bold text-white">1</div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Exit Kyrgyzstan Side</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      First checkpoint is Kyrgyz exit control. You hand over passport and migration card. Officer checks you're legal to exit.
                    </p>
                    <p className="text-xs text-slate-600"><strong>Time:</strong> 5-15 minutes. Can be longer if passenger line is long.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-orange-500 bg-orange-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-orange-600 font-bold text-white">2</div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Customs Declaration (if applicable)</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      If carrying large amounts of cash (over $10,000 USD), expensive items, or commercial goods, you must declare. Most tourists skip this.
                    </p>
                    <p className="text-xs text-slate-600"><strong>Time:</strong> 0-5 minutes for tourists. Longer for cargo.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-yellow-500 bg-yellow-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-yellow-600 font-bold text-white">3</div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">No Man's Land</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Drive/walk across the buffer zone between countries (1-2 km). There are duty-free shops, currency exchange, and cafes at Korday. Karkara has minimal facilities.
                    </p>
                    <p className="text-xs text-slate-600"><strong>Time:</strong> 5-10 minutes.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-green-500 bg-green-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-green-600 font-bold text-white">4</div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Kazakhstan Entry Control</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Kazakhstan border officer checks passport, visa (if applicable), and asks basic questions (purpose of visit, where staying, etc.). They may check phone or bags randomly.
                    </p>
                    <p className="text-xs text-slate-600"><strong>Time:</strong> 10-30 minutes. This is usually the slowest part.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-teal-500 bg-teal-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-600 font-bold text-white">5</div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Vehicle Inspection & Insurance</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Driver presents vehicle docs. If you don't have Kazakhstan insurance, you buy it here ($15-30). Vehicle may be inspected for contraband (rare for passenger cars).
                    </p>
                    <p className="text-xs text-slate-600"><strong>Time:</strong> 5-15 minutes.</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border-l-4 border-blue-500 bg-blue-50 p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-600 font-bold text-white">6</div>
                  <div>
                    <h4 className="mb-2 font-bold text-slate-900">Final Customs Check</h4>
                    <p className="text-sm text-slate-700 mb-3">
                      Kazakhstan customs may ask if you have anything to declare. Usually wave tourists through. Sometimes random bag checks for alcohol/tobacco (limits: 2L alcohol, 200 cigarettes per person).
                    </p>
                    <p className="text-xs text-slate-600"><strong>Time:</strong> 2-5 minutes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="not-prose my-8 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Total Crossing Time</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="mb-2 text-sm font-bold text-emerald-100">Normal Conditions:</p>
                  <p className="text-3xl font-extrabold">30-60 min</p>
                  <p className="mt-1 text-sm text-emerald-100">Weekday mornings or late evenings</p>
                </div>
                <div>
                  <p className="mb-2 text-sm font-bold text-emerald-100">Peak Times:</p>
                  <p className="text-3xl font-extrabold">2-3 hours</p>
                  <p className="mt-1 text-sm text-emerald-100">Weekends, holidays, Friday-Sunday afternoons</p>
                </div>
              </div>
            </div>

            <h2>Best Times to Cross the Border</h2>
            <p>
              Timing your crossing can save hours. Both Korday and Karkara are open 24/7, but traffic varies dramatically by time of day and week.
            </p>

            <div className="not-prose space-y-4">
              <div className="rounded-xl bg-green-50 p-6">
                <h4 className="mb-2 font-bold text-green-900">Best Times (Fastest Crossing)</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span><strong>6:00-8:00 AM:</strong> Very quiet. Most trucks haven't arrived yet. Border just opened for the day shift.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span><strong>8:00-10:00 PM:</strong> Evening lull. Tourist traffic died down, cargo trucks parked for night.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span><strong>Tuesday-Thursday:</strong> Midweek days are quieter than weekends. Business travelers Monday/Friday, tourists Saturday/Sunday.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-amber-50 p-6">
                <h4 className="mb-2 font-bold text-amber-900">Moderate Times</h4>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span><strong>10:00 AM-2:00 PM:</strong> Moderate traffic. 45-90 min crossing. Acceptable if you can't hit early morning.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span><strong>Late night (11 PM-3 AM):</strong> Quiet but skeleton crew on duty, can be slower processing. Some cargo trucks travel at night.</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-red-50 p-6">
                <h4 className="mb-2 font-bold text-red-900">Avoid These Times (Longest Waits)</h4>
                <ul className="space-y-2 text-sm text-red-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span><strong>Friday 2:00-6:00 PM:</strong> Weekend exodus from Almaty to Bishkek and vice versa. Can be 2-3 hour wait.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span><strong>Sunday 4:00-8:00 PM:</strong> Return traffic after weekend. Everyone heading back to work cities.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span><strong>Public holidays:</strong> Especially Nauryz (Mar 21-22), New Year, Victory Day (May 9). Avoid crossing on these dates if possible.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span><strong>3:00-5:00 PM any day:</strong> Peak afternoon traffic. Buses, taxis, cargo all converge. Worst time slot.</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2>Border Crossing Fees</h2>
            <p>
              Good news: there are no official border crossing fees for tourists at Korday or Karkara. However, there are some costs you might encounter.
            </p>

            <div className="not-prose my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left text-sm font-bold text-slate-900">Item</th>
                    <th className="border border-slate-300 p-3 text-left text-sm font-bold text-slate-900">Cost</th>
                    <th className="border border-slate-300 p-3 text-left text-sm font-bold text-slate-900">Notes</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3">Border Crossing (pedestrian)</td>
                    <td className="border border-slate-300 p-3 font-bold text-green-600">FREE</td>
                    <td className="border border-slate-300 p-3">No fee for crossing on foot or as passenger</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3">Vehicle Insurance (if needed)</td>
                    <td className="border border-slate-300 p-3 font-bold">$15-30</td>
                    <td className="border border-slate-300 p-3">For 15 days coverage in Kazakhstan. Purchased at border.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3">Customs Declaration (if needed)</td>
                    <td className="border border-slate-300 p-3 font-bold text-green-600">FREE</td>
                    <td className="border border-slate-300 p-3">Only if carrying $10k+ cash or commercial goods</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-300 p-3">Vehicle Eco Tax (some periods)</td>
                    <td className="border border-slate-300 p-3 font-bold">$5-10</td>
                    <td className="border border-slate-300 p-3">Rare, but sometimes charged for older vehicles</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3">Currency Exchange</td>
                    <td className="border border-slate-300 p-3 font-bold">Market rate</td>
                    <td className="border border-slate-300 p-3">Available at Korday. Karkara has limited exchange.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose rounded-2xl border-l-4 border-red-600 bg-red-50 p-6">
              <h3 className="mb-3 flex items-center gap-2 font-bold text-red-900">
                <AlertCircle className="h-6 w-6" />
                Warning: Bribery & Scams
              </h3>
              <p className="mb-3 text-sm text-red-800">
                Occasionally corrupt officers ask for "fees" or "fines" that don't exist. Know your rights:
              </p>
              <ul className="space-y-2 text-sm text-red-800">
                <li>• There is NO fee for crossing with valid documents</li>
                <li>• If asked to pay, politely ask for written receipt and official reason</li>
                <li>• Don't hand over passport in exchange for "expedited processing"</li>
                <li>• If pressured, ask to speak to supervisor</li>
                <li>• Report serious issues to your embassy after crossing</li>
              </ul>
              <p className="mt-3 text-sm font-bold text-red-900">
                When booking professional transfer (like Nomad Transfer), your driver handles all interactions and knows how to deal with these situations professionally.
              </p>
            </div>

            <h2>Tips for Smooth Border Crossing</h2>
            <p>
              Based on hundreds of crossings, here are insider tips to make your border experience as painless as possible.
            </p>

            <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-6">
                <h4 className="mb-4 font-bold text-blue-900">Before You Go</h4>
                <ul className="space-y-3 text-sm text-blue-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Check passport validity (6+ months) and blank pages</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Print visa confirmation if you have e-visa</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Have accommodation address ready (hotel name/address in Kazakhstan)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Bring small bills ($1, $5 USD or som) for insurance if needed</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Download offline maps (internet doesn't work at border)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-purple-50 p-6">
                <h4 className="mb-4 font-bold text-purple-900">At the Border</h4>
                <ul className="space-y-3 text-sm text-purple-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Be polite and patient with officers - they see hundreds daily</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Don't take photos of border infrastructure (illegal)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Keep passport and documents easily accessible</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Answer questions simply and honestly (where staying, how long, purpose)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Use restrooms before border (limited facilities, long queues)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-teal-50 p-6">
                <h4 className="mb-4 font-bold text-teal-900">What to Pack</h4>
                <ul className="space-y-3 text-sm text-teal-800">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Water and snacks (especially for kids)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Cash in small denominations (USD, som, or tenge)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Pen for filling forms (sometimes provided, sometimes not)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Layers of clothing (can be cold waiting, hot in sun)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Entertainment for long waits (book, downloaded movies)</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-orange-50 p-6">
                <h4 className="mb-4 font-bold text-orange-900">What NOT to Bring</h4>
                <ul className="space-y-3 text-sm text-orange-800">
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Excessive alcohol/tobacco (limit: 2L alcohol, 200 cigarettes)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Undeclared large cash amounts (over $10,000 USD must declare)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Weapons, including pocket knives over 10cm</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Drones (require special permits for Kazakhstan)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Political or religious materials in large quantities</span>
                  </li>
                </ul>
              </div>
            </div>

            <h2>Common Border Crossing Issues & Solutions</h2>

            <div className="not-prose space-y-4">
              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  What if I lost my migration card from entering Kyrgyzstan?
                </summary>
                <p className="mt-3 text-slate-600">
                  Go to the State Migration Service in Bishkek (242 Chui Ave) before heading to border. They can issue a replacement for small fee (~$5-10). Showing up at border without it can result in fine ($50-100) and lengthy delays while they verify your entry.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Can I cross on foot without a vehicle?
                </summary>
                <p className="mt-3 text-slate-600">
                  At Korday, yes - there's a pedestrian lane. Many people take marshrutka to border, walk across, then take another marshrutka or taxi on Kazakhstan side. At Karkara, this is more difficult as it's a remote location with limited public transport on both sides.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  What if my passport expires in 4 months?
                </summary>
                <p className="mt-3 text-slate-600">
                  Kazakhstan requires 6 months validity. You may be denied entry. Don't risk it - renew passport first, or if urgent, check with Kazakhstan embassy if they'll grant exception. Border officers strictly enforce this rule.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Do they check phones/social media at the border?
                </summary>
                <p className="mt-3 text-slate-600">
                  Rarely, but it happens. Both countries can ask to see your phone, especially if they're suspicious. Don't have VPN apps visible on home screen, avoid political content in recent messages/photos. Most tourists pass through without phone inspection.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Is there WiFi or mobile data at the border?
                </summary>
                <p className="mt-3 text-slate-600">
                  At Korday, there are some WiFi spots in cafes (password protected). Mobile data is spotty - your Kyrgyz SIM stops working, Kazakhstan SIM hasn't activated yet. Best to download maps/info before arriving. Karkara has minimal connectivity.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Can I exchange currency at the border?
                </summary>
                <p className="mt-3 text-slate-600">
                  Korday has multiple exchange points with decent rates (slightly worse than city rates). Karkara has very limited exchange, poor rates. Best to exchange in Bishkek or Almaty city. ATMs available at Korday (accept Visa/Mastercard), none at Karkara.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  What if I'm traveling with children?
                </summary>
                <p className="mt-3 text-slate-600">
                  Children need their own passports. If traveling without both parents, you need notarized letter of consent from the absent parent(s). This is strictly enforced to prevent child abduction. Letter should state parent's permission for child to travel, dates, and countries.
                </p>
              </details>
            </div>

            <h2>Korday vs Karkara: Which Border Should You Use?</h2>
            <p>
              The choice usually depends on your route, but if you have flexibility, here's how they compare:
            </p>

            <div className="not-prose my-8">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-slate-100">
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Factor</th>
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Korday</th>
                      <th className="border border-slate-300 p-3 text-left font-bold text-slate-900">Karkara</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white">
                      <td className="border border-slate-300 p-3 font-semibold">Main Route</td>
                      <td className="border border-slate-300 p-3">Bishkek ↔ Almaty</td>
                      <td className="border border-slate-300 p-3">Karakol/Issyk-Kul ↔ Almaty</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3 font-semibold">Traffic Volume</td>
                      <td className="border border-slate-300 p-3">High (busiest crossing)</td>
                      <td className="border border-slate-300 p-3">Low (quiet, remote)</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-slate-300 p-3 font-semibold">Avg Crossing Time</td>
                      <td className="border border-slate-300 p-3">45-90 min (2-3h peak)</td>
                      <td className="border border-slate-300 p-3">30-45 min (rarely longer)</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3 font-semibold">Facilities</td>
                      <td className="border border-slate-300 p-3">Cafes, ATMs, exchange, shops</td>
                      <td className="border border-slate-300 p-3">Basic facilities only</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-slate-300 p-3 font-semibold">Scenery</td>
                      <td className="border border-slate-300 p-3">Plains, less scenic</td>
                      <td className="border border-slate-300 p-3">Stunning mountains!</td>
                    </tr>
                    <tr className="bg-slate-50">
                      <td className="border border-slate-300 p-3 font-semibold">Winter Conditions</td>
                      <td className="border border-slate-300 p-3">Passable, low elevation</td>
                      <td className="border border-slate-300 p-3">Can be snowy, mountain pass</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="border border-slate-300 p-3 font-semibold">Best For</td>
                      <td className="border border-slate-300 p-3">Quick Bishkek-Almaty trips</td>
                      <td className="border border-slate-300 p-3">Scenic routes, fewer crowds</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h2>Insurance Requirements for Vehicles</h2>
            <p>
              This is one of the most confusing aspects for travelers. Here's what you need to know about vehicle insurance when crossing.
            </p>

            <div className="not-prose rounded-2xl bg-blue-50 p-6">
              <h3 className="mb-4 font-bold text-blue-900">The Simple Version:</h3>
              <p className="mb-4 text-blue-800">
                Kyrgyz vehicle insurance does NOT cover you in Kazakhstan. You need separate Kazakhstan insurance (called "Green Card" or "Border Insurance").
              </p>
              <div className="space-y-3">
                <div className="rounded-lg bg-white p-4">
                  <p className="font-bold text-slate-900">Option 1: Buy at Border</p>
                  <p className="text-sm text-slate-700">Cost: $15-30 for 15 days. Available at insurance desk before Kazakhstan entry. Takes 5-10 min. Accepted everywhere in Kazakhstan.</p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <p className="font-bold text-slate-900">Option 2: Buy in Advance</p>
                  <p className="text-sm text-slate-700">Some insurance companies in Bishkek sell Kazakhstan coverage. Slightly cheaper but requires planning. Check Kyrgyz Insurance, Nur Insurance offices.</p>
                </div>
                <div className="rounded-lg bg-white p-4">
                  <p className="font-bold text-slate-900">Option 3: Use Transfer Service</p>
                  <p className="text-sm text-slate-700">Professional transfers (like Nomad Transfer) include Kazakhstan insurance in the price. Driver handles all paperwork. Easiest option.</p>
                </div>
              </div>
            </div>

            <div className="not-prose mt-6 rounded-2xl border-l-4 border-amber-600 bg-amber-50 p-6">
              <p className="mb-2 font-bold text-amber-900">Important Notes:</p>
              <ul className="space-y-2 text-sm text-amber-800">
                <li>• You cannot enter Kazakhstan without valid vehicle insurance - they will turn you back</li>
                <li>• Keep insurance document in car at all times - police can check</li>
                <li>• If staying longer than 15 days, you can extend at Kazakhstan insurance offices</li>
                <li>• Coverage is third-party only (covers damage you cause to others, not your own vehicle)</li>
              </ul>
            </div>

            <h2>Why Book a Transfer Service?</h2>
            <p>
              Many travelers ask: should I cross independently or book a transfer service? Here's an honest comparison.
            </p>

            <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-amber-300 bg-white p-6">
                <h3 className="mb-4 text-xl font-bold text-slate-900">DIY Crossing</h3>
                <div className="mb-4 space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Cheaper ($20-30 for shared marshrutka + insurance)</span>
                  </p>
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>More adventurous, meet other travelers</span>
                  </p>
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Flexible timing (marshrutkas depart when full)</span>
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-red-700">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Need to handle all paperwork yourself</span>
                  </p>
                  <p className="flex items-start gap-2 text-red-700">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Language barrier with officers</span>
                  </p>
                  <p className="flex items-start gap-2 text-red-700">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>More vulnerable to scams/bribes</span>
                  </p>
                  <p className="flex items-start gap-2 text-red-700">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Takes longer (waiting for marshrutkas to fill)</span>
                  </p>
                  <p className="flex items-start gap-2 text-red-700">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Difficult with lots of luggage</span>
                  </p>
                </div>
              </div>

              <div className="rounded-xl border-2 border-emerald-300 bg-white p-6">
                <h3 className="mb-4 text-xl font-bold text-slate-900">Transfer Service</h3>
                <div className="mb-4 space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Driver handles all border paperwork</span>
                  </p>
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Insurance included in price</span>
                  </p>
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Door-to-door service (no luggage transfers)</span>
                  </p>
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Fixed departure time, predictable schedule</span>
                  </p>
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Driver knows how to deal with issues/scams</span>
                  </p>
                  <p className="flex items-start gap-2 text-green-700">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Faster crossing (no waiting for public transport)</span>
                  </p>
                </div>
                <div className="space-y-2 text-sm">
                  <p className="flex items-start gap-2 text-red-700">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>More expensive ($75-85 Bishkek-Almaty)</span>
                  </p>
                  <p className="flex items-start gap-2 text-red-700">
                    <span className="mt-0.5 text-xl">✕</span>
                    <span>Need to book in advance</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="not-prose my-8 rounded-2xl bg-gradient-to-r from-teal-600 to-emerald-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Nomad Transfer Recommendation:</h3>
              <p className="mb-4 text-teal-50">
                If you're budget traveling, comfortable with uncertainty, speak Russian, and have time - go DIY. If you value convenience, have luggage, limited time, or traveling with family - book a transfer service. The $50-60 difference is worth it for the hassle saved.
              </p>
              <p className="text-sm text-teal-100">
                Our drivers cross the border 20-30 times per month. They know every officer, every procedure, and handle 100% of paperwork while you relax.
              </p>
            </div>

            <h2>Frequently Asked Questions</h2>

            <div className="not-prose space-y-4">
              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Can I enter Kazakhstan without onward ticket?
                </summary>
                <p className="mt-3 text-slate-600">
                  Officially, Kazakhstan can ask for proof of onward travel (ticket out of country). In practice, they rarely check at land borders. More common question at airports. If worried, have a printout of bus/flight booking (doesn't need to be confirmed, just show you have plans).
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Do I need to register in Kazakhstan?
                </summary>
                <p className="mt-3 text-slate-600">
                  If staying over 5 calendar days, yes. Your hotel should register you (ask for confirmation). If staying with friends, they need to register you at migration office. For stays under 5 days, no registration needed. This is separate from border entry.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  What languages are spoken at the border?
                </summary>
                <p className="mt-3 text-slate-600">
                  Officers speak Kyrgyz/Kazakh and Russian. Very limited English. Basic questions in English might work ("Tourism? How long?") but don't expect conversations. Having key phrases written in Russian helps: "я турист" (I'm tourist), "5 дней" (5 days).
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Can I bring my drone to Kazakhstan?
                </summary>
                <p className="mt-3 text-slate-600">
                  Technically allowed but requires import declaration and special permit from Kazakhstan aviation authority. For tourist use, incredibly complicated. Many travelers have drones confiscated at border. Not recommended unless you have all permits pre-arranged.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Are there COVID-19 requirements in 2026?
                </summary>
                <p className="mt-3 text-slate-600">
                  As of 2026, both Kyrgyzstan and Kazakhstan have dropped most COVID restrictions. No vaccination certificates or tests required at land borders. This can change - always check official sources before travel if concerned.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  What if I overstayed my Kazakhstan visa?
                </summary>
                <p className="mt-3 text-slate-600">
                  Serious issue. You'll be fined at exit ($150-500 depending on overstay duration) and potentially banned from re-entry for 1-5 years. If you realize you've overstayed, go to migration office in Almaty ASAP to resolve before trying to exit. Don't show up at border with expired visa.
                </p>
              </details>
            </div>
          </article>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-700 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Hassle-Free Border Crossing with Nomad Transfer</h2>
            <p className="mb-6 text-lg text-emerald-50">
              Let our experienced drivers handle all border formalities. Insurance included. Door-to-door service. Smooth crossing guaranteed.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <Car className="mb-1 inline-block h-5 w-5" /> All paperwork handled
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <CheckCircle className="mb-1 inline-block h-5 w-5" /> Insurance included
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <Clock className="mb-1 inline-block h-5 w-5" /> Fastest crossing
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/996552291808?text=Hi!%20I%20need%20a%20transfer%20from%20Bishkek%20to%20Almaty%20with%20border%20crossing"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600"
              >
                Book via WhatsApp
              </a>
              <Link
                href="/transfers/bishkek-to-almaty"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-emerald-600"
              >
                Bishkek to Almaty Route
              </Link>
              <Link
                href="/transfers/karakol-to-almaty"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-emerald-600"
              >
                Karakol to Almaty Route
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
