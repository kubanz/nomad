import type { Metadata } from "next";
import Link from "next/link";
import { Waves, MapPin, Sun, Thermometer, Compass, Bike, Camera, Hotel } from "lucide-react";

export const metadata: Metadata = {
  title: "Issyk-Kul Lake Travel Guide 2026 | Beaches, Towns, Activities & Transportation",
  description:
    "Complete Issyk-Kul Lake travel guide 2026. North shore vs south shore, best beaches, main towns (Cholpon-Ata, Karakol, Bosteri). Water temperature by month, activities, getting around the lake, accommodation. Swimming, horseback riding, petroglyphs, cultural sites.",
  keywords: [
    "issyk-kul lake travel guide",
    "issyk kul beaches",
    "cholpon-ata karakol",
    "issyk kul water temperature",
    "north shore south shore issyk kul",
    "issyk kul activities",
    "getting around issyk kul",
    "kyrgyzstan lake vacation",
  ],
  openGraph: {
    title: "Issyk-Kul Lake Travel Guide 2026 | Complete Beach & Activity Guide",
    description: "Best beaches, towns, water temps, activities. Complete guide to Central Asia's pearl - Issyk-Kul Lake.",
    url: "https://nomad-transfer.com/guides/issyk-kul-travel-guide",
  },
  alternates: {
    canonical: "https://nomad-transfer.com/guides/issyk-kul-travel-guide",
  },
};

export default function IssykKulTravelGuidePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero */}
      <section className="relative bg-gradient-to-r from-blue-600 to-cyan-600 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-blue-900/50 px-4 py-2 text-sm">
              <Waves className="h-4 w-4" />
              <span>Updated May 2026</span>
            </div>
            <h1 className="text-4xl font-bold md:text-5xl">Issyk-Kul Lake Travel Guide</h1>
            <p className="mt-6 text-xl text-blue-50">
              Your complete guide to Central Asia's pearl. Best beaches, charming towns, water activities, and insider tips for exploring the world's second-largest alpine lake.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-blue-200 bg-blue-50 p-6">
            <Waves className="mb-3 h-8 w-8 text-blue-600" />
            <h3 className="mb-2 font-bold text-slate-900">Lake Facts</h3>
            <p className="text-sm text-slate-700">182 km long, 60 km wide. Never freezes. 2nd largest alpine lake globally. Crystal clear water.</p>
          </div>
          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <Sun className="mb-3 h-8 w-8 text-amber-600" />
            <h3 className="mb-2 font-bold text-slate-900">Best Time to Visit</h3>
            <p className="text-sm text-slate-700">June-September for swimming (water 18-22°C). July-August peak season. May & October for fewer crowds.</p>
          </div>
          <div className="rounded-2xl border border-teal-200 bg-teal-50 p-6">
            <MapPin className="mb-3 h-8 w-8 text-teal-600" />
            <h3 className="mb-2 font-bold text-slate-900">Main Towns</h3>
            <p className="text-sm text-slate-700">Cholpon-Ata (resorts), Karakol (cultural hub), Bosteri (beaches), Balykchy (western gateway).</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          <article className="prose prose-slate lg:prose-lg max-w-none">
            <h2>About Issyk-Kul Lake</h2>
            <p>
              Issyk-Kul (Ысык-Көл in Kyrgyz, meaning "warm lake") is one of the world's great natural wonders. At 1,607 meters elevation and surrounded by snow-capped Tian Shan mountains, this 182-kilometer-long lake never freezes - even in winter - thanks to its slight salinity and thermal activity. It's the second-largest alpine lake on Earth (after Lake Titicaca) and a highlight of any Kyrgyzstan itinerary.
            </p>

            <div className="not-prose my-8 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-6 text-white">
              <h3 className="mb-4 text-xl font-bold">Quick Lake Facts</h3>
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <p className="text-sm text-blue-100">Length</p>
                  <p className="text-2xl font-bold">182 km</p>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Width</p>
                  <p className="text-2xl font-bold">60 km</p>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Depth (max)</p>
                  <p className="text-2xl font-bold">668 meters</p>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Elevation</p>
                  <p className="text-2xl font-bold">1,607 m</p>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Shoreline</p>
                  <p className="text-2xl font-bold">688 km</p>
                </div>
                <div>
                  <p className="text-sm text-blue-100">Type</p>
                  <p className="text-2xl font-bold">Slightly saline</p>
                </div>
              </div>
            </div>

            <h2>North Shore vs South Shore: Which is Better?</h2>
            <p>
              The lake has two distinct sides with very different vibes. Most tourists visit the north shore, but the south shore offers a more authentic, rugged experience.
            </p>

            <div className="not-prose my-8 grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border-2 border-blue-300 bg-white p-6">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">North Shore</h3>
                <div className="mb-6 space-y-3 text-sm text-slate-700">
                  <p><strong>Main towns:</strong> Cholpon-Ata, Bosteri, Chon-Sary-Oi</p>
                  <p><strong>Vibe:</strong> Developed, resort-style, touristy</p>
                  <p><strong>Road:</strong> Excellent paved highway (M41)</p>
                  <p><strong>Beaches:</strong> Sandy, organized, beach clubs</p>
                  <p><strong>Accommodation:</strong> Hotels, resorts, guesthouses</p>
                  <p><strong>Infrastructure:</strong> Restaurants, ATMs, shops</p>
                </div>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="text-sm font-bold text-green-900">Best for:</p>
                  <p className="text-sm text-green-800">Families, first-time visitors, comfort seekers, beach clubs, water sports, nightlife</p>
                </div>
              </div>

              <div className="rounded-2xl border-2 border-teal-300 bg-white p-6">
                <h3 className="mb-4 text-2xl font-bold text-slate-900">South Shore</h3>
                <div className="mb-6 space-y-3 text-sm text-slate-700">
                  <p><strong>Main towns:</strong> Bokonbaevo, Kadzhi-Say, Ton</p>
                  <p><strong>Vibe:</strong> Rural, authentic, quiet</p>
                  <p><strong>Road:</strong> Good but narrower, more winding</p>
                  <p><strong>Beaches:</strong> Pebbly, wild, undeveloped</p>
                  <p><strong>Accommodation:</strong> Homestays, yurt camps, eco-lodges</p>
                  <p><strong>Infrastructure:</strong> Limited, basic services only</p>
                </div>
                <div className="rounded-lg bg-purple-50 p-4">
                  <p className="text-sm font-bold text-purple-900">Best for:</p>
                  <p className="text-sm text-purple-800">Adventure seekers, culture lovers, photographers, eagle hunting shows, off-the-beaten-path experiences</p>
                </div>
              </div>
            </div>

            <div className="not-prose rounded-2xl border-l-4 border-blue-600 bg-blue-50 p-6">
              <p className="text-sm text-blue-900">
                <strong>Nomad Transfer Tip:</strong> First-time visitors: do north shore (3-4 days) for beaches and comfort. Return visitors or adventurous travelers: add south shore (2-3 days) for authentic Kyrgyz culture and stunning scenery. The 688 km loop around the entire lake takes about 9-11 hours driving non-stop, but you'll want to spend days exploring.
              </p>
            </div>

            <h2>Main Towns & What They Offer</h2>

            <h3>1. Cholpon-Ata - The Resort Capital</h3>
            <div className="not-prose rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-blue-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Cholpon-Ata</h4>
                  <p className="text-sm text-slate-600">250 km from Bishkek, 110 km from Karakol</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                The largest and most developed town on the north shore. This is where most tourists stay, with the best infrastructure, restaurants, and organized beaches.
              </p>
              <h5 className="mb-2 font-bold text-slate-900">What to Do:</h5>
              <ul className="mb-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Beaches:</strong> Public beach (free), beach clubs with loungers ($5-10/day), water sports</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Petroglyphs:</strong> Ancient rock carvings (3,000+ stones), outdoor museum, $3 entry</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Ruh Ordo Cultural Center:</strong> Spiritual complex with chapels from 5 world religions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600">•</span>
                  <span><strong>Nightlife:</strong> Bars, restaurants, beach parties in summer</span>
                </li>
              </ul>
              <div className="rounded-lg bg-blue-50 p-4 text-sm">
                <p className="font-bold text-blue-900">Accommodation Range:</p>
                <p className="text-blue-800">Budget: $15-25/night (guesthouses), Mid-range: $40-80/night (hotels), Luxury: $100-200/night (resorts)</p>
              </div>
            </div>

            <h3 className="mt-8">2. Karakol - The Cultural Hub</h3>
            <div className="not-prose rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-teal-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Karakol</h4>
                  <p className="text-sm text-slate-600">360 km from Bishkek, eastern end of lake</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                Kyrgyzstan's fourth-largest city and the gateway to eastern adventures. Not directly on the lake (7 km away), but culturally rich and ideal base for hiking, skiing, and exploring.
              </p>
              <h5 className="mb-2 font-bold text-slate-900">What to Do:</h5>
              <ul className="mb-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  <span><strong>Dungan Mosque:</strong> Stunning Chinese-style wooden mosque (1910), no nails used</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  <span><strong>Holy Trinity Cathedral:</strong> Russian Orthodox wooden church with colorful onion domes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  <span><strong>Animal Bazaar:</strong> Sunday morning market (authentic Central Asian experience)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  <span><strong>Przhevalsky Museum:</strong> Dedicated to Russian explorer who mapped Central Asia</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  <span><strong>Hiking base:</strong> Altyn Arashan hot springs, Jeti-Oguz gorge, Karakol National Park</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-teal-600">•</span>
                  <span><strong>Ski resort:</strong> Winter skiing Dec-Mar (7 km from city)</span>
                </li>
              </ul>
              <div className="rounded-lg bg-teal-50 p-4 text-sm">
                <p className="font-bold text-teal-900">Accommodation Range:</p>
                <p className="text-teal-800">Budget: $10-20/night (hostels), Mid-range: $30-60/night (guesthouses), Luxury: $80-150/night (boutique hotels)</p>
              </div>
            </div>

            <h3 className="mt-8">3. Bosteri - Beach Paradise</h3>
            <div className="not-prose rounded-xl border border-slate-200 bg-white p-6">
              <div className="mb-4 flex items-center gap-3">
                <MapPin className="h-6 w-6 text-amber-600" />
                <div>
                  <h4 className="font-bold text-slate-900">Bosteri</h4>
                  <p className="text-sm text-slate-600">240 km from Bishkek, 10 km west of Cholpon-Ata</p>
                </div>
              </div>
              <p className="mb-4 text-sm text-slate-700">
                Smaller resort village known for excellent beaches and calm atmosphere. Less crowded than Cholpon-Ata, but still with good infrastructure.
              </p>
              <h5 className="mb-2 font-bold text-slate-900">What to Do:</h5>
              <ul className="mb-4 space-y-2 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Long sandy beaches:</strong> Some of the best on the north shore</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Beach clubs:</strong> Several modern beach complexes with pools, restaurants</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Paragliding:</strong> Popular spot for tandem flights over the lake</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span><strong>Family-friendly:</strong> Shallow water, gradual depth increase</span>
                </li>
              </ul>
              <div className="rounded-lg bg-amber-50 p-4 text-sm">
                <p className="font-bold text-amber-900">Best For:</p>
                <p className="text-amber-800">Families with kids, pure beach vacation, quieter alternative to Cholpon-Ata</p>
              </div>
            </div>

            <h3 className="mt-8">4. Other Notable Towns</h3>
            <div className="not-prose space-y-4">
              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="mb-2 font-bold text-slate-900">Balykchy (West End)</h4>
                <p className="text-sm text-slate-700">Gateway town where you arrive from Bishkek. Not much to see, but stopping point for gas/food. 160 km from Bishkek.</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="mb-2 font-bold text-slate-900">Bokonbaevo (South Shore)</h4>
                <p className="text-sm text-slate-700">Main town on south shore. Famous for eagle hunting demonstrations. Starting point for treks to Skazka Canyon and Fairy Tale Canyon.</p>
              </div>

              <div className="rounded-xl bg-slate-50 p-4">
                <h4 className="mb-2 font-bold text-slate-900">Grigorievka & Semenovka (North Shore)</h4>
                <p className="text-sm text-slate-700">Small villages with access to beautiful gorges. Popular for horseback riding, yurt stays, and hiking to alpine lakes.</p>
              </div>
            </div>

            <h2>Water Temperature by Month</h2>
            <p>
              One of the most common questions: "Can I swim?" The answer depends on the month and your cold tolerance. The lake never freezes (thanks to slight salinity), but it's only warm enough for comfortable swimming 3-4 months per year.
            </p>

            <div className="not-prose my-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-100">
                    <th className="border border-slate-300 p-3 text-left text-sm font-bold text-slate-900">Month</th>
                    <th className="border border-slate-300 p-3 text-left text-sm font-bold text-slate-900">Water Temp</th>
                    <th className="border border-slate-300 p-3 text-left text-sm font-bold text-slate-900">Swimming</th>
                    <th className="border border-slate-300 p-3 text-left text-sm font-bold text-slate-900">Vibe</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="bg-blue-50">
                    <td className="border border-slate-300 p-3 font-bold">January-March</td>
                    <td className="border border-slate-300 p-3">4-6°C</td>
                    <td className="border border-slate-300 p-3">No (freezing!)</td>
                    <td className="border border-slate-300 p-3">Winter sports season. Ski resort open. Lake frozen-looking but not solid.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold">April</td>
                    <td className="border border-slate-300 p-3">7-9°C</td>
                    <td className="border border-slate-300 p-3">No (too cold)</td>
                    <td className="border border-slate-300 p-3">Spring awakening. Snow melting, flowers blooming. Not beach season yet.</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-slate-300 p-3 font-bold">May</td>
                    <td className="border border-slate-300 p-3">12-14°C</td>
                    <td className="border border-slate-300 p-3">Only for brave!</td>
                    <td className="border border-slate-300 p-3">Shoulder season. Beautiful weather, few tourists. Quick dips possible.</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-slate-300 p-3 font-bold">June</td>
                    <td className="border border-slate-300 p-3">16-18°C</td>
                    <td className="border border-slate-300 p-3">Yes (refreshing)</td>
                    <td className="border border-slate-300 p-3">Beach season starts! Cool but pleasant. Russians love this temp.</td>
                  </tr>
                  <tr className="bg-green-100">
                    <td className="border border-slate-300 p-3 font-bold">July</td>
                    <td className="border border-slate-300 p-3">19-21°C</td>
                    <td className="border border-slate-300 p-3">Yes (perfect!)</td>
                    <td className="border border-slate-300 p-3">Peak season. Warmest water. Most crowded. Best swimming.</td>
                  </tr>
                  <tr className="bg-green-100">
                    <td className="border border-slate-300 p-3 font-bold">August</td>
                    <td className="border border-slate-300 p-3">20-22°C</td>
                    <td className="border border-slate-300 p-3">Yes (warmest!)</td>
                    <td className="border border-slate-300 p-3">Absolute best time. Warmest water of the year. Still crowded.</td>
                  </tr>
                  <tr className="bg-green-50">
                    <td className="border border-slate-300 p-3 font-bold">September</td>
                    <td className="border border-slate-300 p-3">17-19°C</td>
                    <td className="border border-slate-300 p-3">Yes (cooling down)</td>
                    <td className="border border-slate-300 p-3">Early Sep great. Crowds thin out. Water still nice until mid-month.</td>
                  </tr>
                  <tr className="bg-yellow-50">
                    <td className="border border-slate-300 p-3 font-bold">October</td>
                    <td className="border border-slate-300 p-3">13-15°C</td>
                    <td className="border border-slate-300 p-3">Only brave souls</td>
                    <td className="border border-slate-300 p-3">Autumn colors. Empty beaches. Cold but beautiful. Hiking focus.</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="border border-slate-300 p-3 font-bold">November-Dec</td>
                    <td className="border border-slate-300 p-3">8-10°C</td>
                    <td className="border border-slate-300 p-3">No (cold!)</td>
                    <td className="border border-slate-300 p-3">Off-season. Most resorts closed. Locals only. Cheap prices.</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="not-prose my-6 rounded-2xl bg-gradient-to-r from-green-600 to-teal-600 p-6 text-white">
              <h3 className="mb-3 text-xl font-bold">Best Months for Swimming</h3>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="mb-2 text-3xl font-bold">July-Aug</p>
                  <p className="text-sm text-green-100">Warmest water (20-22°C). Peak season. Most facilities open.</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="mb-2 text-3xl font-bold">June + Sep</p>
                  <p className="text-sm text-green-100">Good swimming (16-19°C). Fewer crowds. Better prices.</p>
                </div>
                <div className="rounded-lg bg-white/10 p-4">
                  <p className="mb-2 text-3xl font-bold">May + Oct</p>
                  <p className="text-sm text-green-100">Cold (12-15°C) but beautiful. For scenery, not swimming.</p>
                </div>
              </div>
            </div>

            <h2>Best Beaches</h2>
            <p>
              The north shore has most of the developed beaches. South shore beaches are wilder, pebbly, and more isolated.
            </p>

            <h3>North Shore Beaches (Sandy & Developed)</h3>
            <div className="not-prose space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">1. Bosteri Beach</h4>
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>Near Bosteri village, 240 km from Bishkek</span>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Long sandy beach with gradual entry. Perfect for families. Beach clubs with loungers, restaurants, showers. Public sections and paid zones ($5-10/day for lounger + umbrella).
                </p>
                <div className="grid gap-2 text-xs md:grid-cols-3">
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Sandy</div>
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Shallow water</div>
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Family-friendly</div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">2. Cholpon-Ata Central Beach</h4>
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>Cholpon-Ata town center, 250 km from Bishkek</span>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Main beach in resort capital. Busy and lively. Jet skis, banana boats, parasailing. Beach bars, volleyball courts. Can be crowded in July-Aug.
                </p>
                <div className="grid gap-2 text-xs md:grid-cols-3">
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Water sports</div>
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Infrastructure</div>
                  <div className="rounded bg-amber-50 p-2 text-amber-900">⚠ Crowded</div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">3. Chon-Sary-Oi Beach</h4>
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>Between Cholpon-Ata and Karakol, 280 km from Bishkek</span>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Quieter alternative. Mix of sand and small pebbles. Less commercial. Good for those who want beach without crowds. Limited facilities.
                </p>
                <div className="grid gap-2 text-xs md:grid-cols-3">
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Less crowded</div>
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Good value</div>
                  <div className="rounded bg-blue-50 p-2 text-blue-900">⚠ Fewer amenities</div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">4. Bulan-Sogottu Beach</h4>
                <div className="mb-3 flex items-center gap-2 text-sm text-slate-600">
                  <MapPin className="h-4 w-4" />
                  <span>Near Karakol, eastern end of lake</span>
                </div>
                <p className="mb-3 text-sm text-slate-700">
                  Closest beach to Karakol. Popular with locals on weekends. More relaxed vibe. Mountain views. Basic facilities but authentic atmosphere.
                </p>
                <div className="grid gap-2 text-xs md:grid-cols-3">
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Local vibe</div>
                  <div className="rounded bg-green-50 p-2 text-green-900">✓ Mountain views</div>
                  <div className="rounded bg-blue-50 p-2 text-blue-900">⚠ Basic</div>
                </div>
              </div>
            </div>

            <h3 className="mt-8">South Shore Beaches (Wild & Scenic)</h3>
            <p className="text-base">
              South shore beaches are less developed but stunningly beautiful. Expect pebbles, not sand, and bring your own supplies.
            </p>

            <div className="not-prose mt-4 space-y-4">
              <div className="rounded-xl bg-purple-50 p-6">
                <h4 className="mb-2 font-bold text-purple-900">Near Bokonbaevo</h4>
                <p className="text-sm text-purple-800">Wild beaches with red cliffs. Skazka Canyon nearby. Great for photography. Almost no facilities - bring food/water.</p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6">
                <h4 className="mb-2 font-bold text-purple-900">Barskoon Area</h4>
                <p className="text-sm text-purple-800">Access to Barskoon Waterfalls. Pebble beach. Beautiful mountain backdrop. Yurt camps available for overnight.</p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6">
                <h4 className="mb-2 font-bold text-purple-900">Tamga Beach</h4>
                <p className="text-sm text-purple-800">Small village with beach access. Hot springs nearby. Homestays and yurt camps. More infrastructure than other south shore spots.</p>
              </div>
            </div>

            <h2>Activities & Things to Do</h2>

            <h3>Water Activities</h3>
            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-6">
                <Waves className="mb-3 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-bold text-slate-900">Swimming & Sunbathing</h4>
                <p className="text-sm text-slate-700">June-September. Best beaches: Bosteri, Cholpon-Ata. Water quality excellent. No strong currents.</p>
              </div>

              <div className="rounded-xl bg-cyan-50 p-6">
                <Compass className="mb-3 h-8 w-8 text-cyan-600" />
                <h4 className="mb-2 font-bold text-slate-900">Jet Skiing & Banana Boats</h4>
                <p className="text-sm text-slate-700">Available Cholpon-Ata, Bosteri. $20-40 for 15-30 min. Peak season only (July-Aug).</p>
              </div>

              <div className="rounded-xl bg-teal-50 p-6">
                <Waves className="mb-3 h-8 w-8 text-teal-600" />
                <h4 className="mb-2 font-bold text-slate-900">SUP & Kayaking</h4>
                <p className="text-sm text-slate-700">Stand-up paddleboarding popular. Rentals $10-15/hour. Calm water perfect for beginners.</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <Waves className="mb-3 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-bold text-slate-900">Sailing & Boat Tours</h4>
                <p className="text-sm text-slate-700">Sunset cruises from Cholpon-Ata. $30-50 per person. Private boat charters available.</p>
              </div>
            </div>

            <h3 className="mt-8">Land Activities</h3>
            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-green-50 p-6">
                <Bike className="mb-3 h-8 w-8 text-green-600" />
                <h4 className="mb-2 font-bold text-slate-900">Horseback Riding</h4>
                <p className="text-sm text-slate-700">Into gorges near Grigorievka, Semenovka. Half-day $30-50, full-day $70-100. Kyrgyz specialty!</p>
              </div>

              <div className="rounded-xl bg-amber-50 p-6">
                <Camera className="mb-3 h-8 w-8 text-amber-600" />
                <h4 className="mb-2 font-bold text-slate-900">Petroglyphs</h4>
                <p className="text-sm text-slate-700">Cholpon-Ata open-air museum. 3,000+ ancient rock carvings (Bronze Age). $3 entry. 1-2 hours.</p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6">
                <Compass className="mb-3 h-8 w-8 text-purple-600" />
                <h4 className="mb-2 font-bold text-slate-900">Hiking & Trekking</h4>
                <p className="text-sm text-slate-700">From Karakol: Altyn Arashan (hot springs), Jeti-Oguz (Seven Bulls), alpine lakes. Day trips or multi-day.</p>
              </div>

              <div className="rounded-xl bg-red-50 p-6">
                <Camera className="mb-3 h-8 w-8 text-red-600" />
                <h4 className="mb-2 font-bold text-slate-900">Eagle Hunting Shows</h4>
                <p className="text-sm text-slate-700">Bokonbaevo (south shore). Traditional Kyrgyz eagle hunting demonstration. $50-80 per show. Arrange through guesthouses.</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <MapPin className="mb-3 h-8 w-8 text-blue-600" />
                <h4 className="mb-2 font-bold text-slate-900">Skazka Canyon (Fairy Tale)</h4>
                <p className="text-sm text-slate-700">South shore near Bokonbaevo. Red rock formations. Short hike (1-2 hours). Sunset is magical.</p>
              </div>

              <div className="rounded-xl bg-teal-50 p-6">
                <Sun className="mb-3 h-8 w-8 text-teal-600" />
                <h4 className="mb-2 font-bold text-slate-900">Paragliding</h4>
                <p className="text-sm text-slate-700">Tandem flights from mountains near Bosteri. 20-30 min flights $80-120. Incredible lake views!</p>
              </div>
            </div>

            <h2>Getting Around the Lake</h2>
            <p>
              The lake is huge (688 km shoreline), so you need transport. Here are your options:
            </p>

            <div className="not-prose space-y-4">
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">1. Private Transfer / Taxi</h4>
                <p className="mb-3 text-sm text-slate-700">
                  Most convenient, especially from Bishkek. Nomad Transfer offers door-to-door service to any Issyk-Kul destination.
                </p>
                <div className="grid gap-3 text-sm md:grid-cols-2">
                  <div>
                    <p className="font-semibold text-slate-900">Bishkek → Cholpon-Ata</p>
                    <p className="text-slate-600">$95 sedan, 4-5 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Bishkek → Karakol</p>
                    <p className="text-slate-600">$136 sedan, 6-7 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Karakol → Cholpon-Ata</p>
                    <p className="text-slate-600">$40-50 local taxi, 2 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Full lake loop</p>
                    <p className="text-slate-600">$250-300 full day tour</p>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">2. Marshrutka (Shared Minivan)</h4>
                <p className="mb-3 text-sm text-slate-700">
                  Budget option. Frequent service from Bishkek to main towns. Depart when full.
                </p>
                <div className="grid gap-3 text-sm md:grid-cols-2">
                  <div>
                    <p className="font-semibold text-slate-900">Bishkek → Cholpon-Ata</p>
                    <p className="text-slate-600">300-400 som ($3.5-4.5), 4-5 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Bishkek → Karakol</p>
                    <p className="text-slate-600">450-550 som ($5-6), 6-7 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Cholpon-Ata → Karakol</p>
                    <p className="text-slate-600">150-200 som ($1.7-2.3), 2 hours</p>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">Around the lake</p>
                    <p className="text-slate-600">Multiple changes needed, full day</p>
                  </div>
                </div>
                <p className="mt-3 text-xs text-slate-600">Leave from Bishkek West Bus Station. Can be crowded and cramped.</p>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">3. Rental Car</h4>
                <p className="mb-3 text-sm text-slate-700">
                  Freedom to explore at your pace. Roads around lake are good. Gas stations in major towns.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Cost:</strong> $40-70/day depending on vehicle</p>
                  <p><strong>Requirements:</strong> International driving permit, credit card deposit</p>
                  <p><strong>Pros:</strong> Total flexibility, stop anywhere, visit remote spots</p>
                  <p><strong>Cons:</strong> Driving standards vary, police checkpoints, parking challenges in summer</p>
                </div>
              </div>

              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h4 className="mb-3 font-bold text-slate-900">4. Organized Tour</h4>
                <p className="mb-3 text-sm text-slate-700">
                  Multi-day tours covering highlights. All logistics handled. Good for first-timers.
                </p>
                <div className="space-y-2 text-sm">
                  <p><strong>Cost:</strong> $150-300 per person for 3-day tour (includes accommodation, meals, guide)</p>
                  <p><strong>Book:</strong> Through Bishkek tour agencies or online platforms</p>
                  <p><strong>Typical itinerary:</strong> Cholpon-Ata → Karakol → Jeti-Oguz → Bokonbaevo → back to Bishkek</p>
                </div>
              </div>
            </div>

            <h2>Accommodation Options</h2>

            <div className="not-prose my-8 grid gap-6 md:grid-cols-3">
              <div className="rounded-xl bg-green-50 p-6">
                <h4 className="mb-3 font-bold text-green-900">Budget ($10-30/night)</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Hostels in Karakol</li>
                  <li>• Guesthouses in villages</li>
                  <li>• Homestays (meals included)</li>
                  <li>• Yurt camps (shared facilities)</li>
                </ul>
                <p className="mt-3 text-xs text-green-700">Best for: Backpackers, cultural immersion, budget travelers</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-6">
                <h4 className="mb-3 font-bold text-blue-900">Mid-range ($40-100/night)</h4>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Beach hotels in Cholpon-Ata</li>
                  <li>• Boutique guesthouses</li>
                  <li>• Eco-resorts with lake view</li>
                  <li>• Private yurt camps (deluxe)</li>
                </ul>
                <p className="mt-3 text-xs text-blue-700">Best for: Couples, families, comfort + authenticity balance</p>
              </div>

              <div className="rounded-xl bg-purple-50 p-6">
                <h4 className="mb-3 font-bold text-purple-900">Luxury ($100-300/night)</h4>
                <ul className="space-y-2 text-sm text-purple-800">
                  <li>• Beach resorts with pools</li>
                  <li>• Spa hotels</li>
                  <li>• Luxury yurt camps</li>
                  <li>• Villa rentals</li>
                </ul>
                <p className="mt-3 text-xs text-purple-700">Best for: Honeymoons, luxury travelers, special occasions</p>
              </div>
            </div>

            <h2>Sample Itineraries</h2>

            <h3>3 Days: North Shore Highlights</h3>
            <div className="not-prose rounded-xl bg-blue-50 p-6">
              <div className="space-y-3 text-sm text-slate-700">
                <p><strong>Day 1:</strong> Bishkek → Cholpon-Ata (via Burana Tower). Beach afternoon. Petroglyphs sunset. Night in Cholpon-Ata.</p>
                <p><strong>Day 2:</strong> Beach morning. Ruh Ordo Cultural Center. Drive to Karakol. Explore Dungan Mosque, Russian Cathedral. Night in Karakol.</p>
                <p><strong>Day 3:</strong> Jeti-Oguz gorge half-day trip. Return to Bishkek via north shore. Stop at scenic viewpoints.</p>
              </div>
            </div>

            <h3 className="mt-6">5 Days: Full Lake Experience</h3>
            <div className="not-prose rounded-xl bg-purple-50 p-6">
              <div className="space-y-3 text-sm text-slate-700">
                <p><strong>Day 1:</strong> Bishkek → Cholpon-Ata. Beach, petroglyphs. Night Cholpon-Ata.</p>
                <p><strong>Day 2:</strong> Water sports, paragliding, beach clubs. Night Cholpon-Ata.</p>
                <p><strong>Day 3:</strong> Drive to Karakol via north shore. Hike to Altyn Arashan hot springs (can overnight in valley or return). Night Karakol.</p>
                <p><strong>Day 4:</strong> Explore Karakol city, Sunday animal bazaar if timed right. Drive south shore to Bokonbaevo. Eagle hunting show. Skazka Canyon sunset. Night yurt camp.</p>
                <p><strong>Day 5:</strong> South shore scenic drive. Barskoon Waterfalls. Return to Bishkek via south shore route.</p>
              </div>
            </div>

            <h3 className="mt-6">7 Days: Epic Lake Loop + Mountains</h3>
            <div className="not-prose rounded-xl bg-teal-50 p-6">
              <div className="space-y-3 text-sm text-slate-700">
                <p><strong>Days 1-2:</strong> Cholpon-Ata beach relaxation, water sports, cultural sites.</p>
                <p><strong>Day 3:</strong> Grigorievka gorge horseback riding, overnight in yurt camp.</p>
                <p><strong>Days 4-5:</strong> Karakol base. Day 4: Jeti-Oguz + Skazka Valley. Day 5: Altyn Arashan trek.</p>
                <p><strong>Day 6:</strong> South shore exploration. Bokonbaevo eagle hunting, Fairy Tale Canyon, traditional lunch. Overnight yurt camp.</p>
                <p><strong>Day 7:</strong> Complete south shore drive. Barskoon, Tamga hot springs. Return Bishkek.</p>
              </div>
            </div>

            <h2>Practical Tips</h2>

            <div className="not-prose grid gap-4 md:grid-cols-2">
              <div className="rounded-xl bg-green-50 p-6">
                <h4 className="mb-3 font-bold text-green-900">Best Practices</h4>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>✓ Book accommodation in advance (July-Aug)</li>
                  <li>✓ Bring sun protection (strong UV at altitude)</li>
                  <li>✓ Cash is king (ATMs in main towns only)</li>
                  <li>✓ Try local Karakol dish ashlan-fu</li>
                  <li>✓ Respect when visiting mosques/churches</li>
                  <li>✓ Bargain politely at markets</li>
                </ul>
              </div>

              <div className="rounded-xl bg-amber-50 p-6">
                <h4 className="mb-3 font-bold text-amber-900">Avoid These Mistakes</h4>
                <ul className="space-y-2 text-sm text-amber-800">
                  <li>✕ Coming in May expecting warm water</li>
                  <li>✕ Only visiting Cholpon-Ata (explore more!)</li>
                  <li>✕ Relying on credit cards everywhere</li>
                  <li>✕ Underestimating distances (lake is huge)</li>
                  <li>✕ Skipping Karakol cultural sites</li>
                  <li>✕ Not trying yurt stay experience</li>
                </ul>
              </div>
            </div>

            <h2>Frequently Asked Questions</h2>

            <div className="not-prose space-y-4">
              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Is it safe to swim in Issyk-Kul?
                </summary>
                <p className="mt-3 text-slate-600">
                  Yes, very safe. Water is clean and clear. No strong currents. Gradual depth on north shore beaches. Slight salinity makes you more buoyant. Lifeguards at major beaches in summer. Just avoid swimming far from shore or in bad weather.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Can you drink the water from the lake?
                </summary>
                <p className="mt-3 text-slate-600">
                  No. While the lake is clean, it's slightly saline and not suitable for drinking. Bring bottled water or use tap water in towns (which comes from mountain sources, not the lake). Tap water in Cholpon-Ata and Karakol is generally safe but many travelers stick to bottled.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Do I need a visa to visit Issyk-Kul?
                </summary>
                <p className="mt-3 text-slate-600">
                  Issyk-Kul is in Kyrgyzstan. Most nationalities (60+) get visa-free entry for 60 days, including USA, EU, UK, Canada, Australia, Japan, South Korea. Check Kyrgyz embassy for your specific nationality. No special permission needed for the lake area.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  What's the altitude? Will I get altitude sickness?
                </summary>
                <p className="mt-3 text-slate-600">
                  Lake is at 1,607m (5,272 ft). This is moderate altitude - most people feel fine. You might feel slightly breathless if exercising hard. Drink extra water, take it easy first day. Altitude sickness rare at this elevation. Mountains around the lake go much higher (3,000-4,000m) where you should be more careful.
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Is there WiFi and mobile coverage?
                </summary>
                <p className="mt-3 text-slate-600">
                  Mobile coverage (4G) is good around the lake, especially north shore. Slower on south shore remote sections. Most hotels/guesthouses have WiFi (quality varies). Buy local SIM card in Bishkek for data (MegaCom, Beeline, O! - about $5 for tourist package with data).
                </p>
              </details>

              <details className="group rounded-xl border border-slate-200 bg-white p-6">
                <summary className="cursor-pointer font-bold text-slate-900">
                  Can I do Issyk-Kul as a day trip from Bishkek?
                </summary>
                <p className="mt-3 text-slate-600">
                  Technically yes, but not recommended. It's 3.5-4 hours each way to Cholpon-Ata. You'd have only 2-3 hours at the lake. Better to stay at least one night. If you really must do day trip, go to western shore (Balykchy area, 2.5 hours) - but you'll miss the best parts.
                </p>
              </details>
            </div>
          </article>

          {/* CTA */}
          <div className="mt-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 text-center text-white">
            <h2 className="mb-4 text-3xl font-bold">Explore Issyk-Kul with Nomad Transfer</h2>
            <p className="mb-6 text-lg text-blue-50">
              Comfortable transfers from Bishkek to any Issyk-Kul destination. Hotel pickup, experienced drivers, perfect start to your lake adventure.
            </p>
            <div className="mb-6 flex flex-wrap justify-center gap-4 text-sm">
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <Hotel className="mb-1 inline-block h-5 w-5" /> Door-to-door service
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <MapPin className="mb-1 inline-block h-5 w-5" /> Any lake destination
              </div>
              <div className="rounded-lg bg-white/10 px-4 py-2">
                <Sun className="mb-1 inline-block h-5 w-5" /> Scenic route stops
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://wa.me/996552291808?text=Hi!%20I%20need%20a%20transfer%20to%20Issyk-Kul%20Lake"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600"
              >
                Book via WhatsApp
              </a>
              <Link
                href="/transfers/bishkek-to-cholpon-ata"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-600"
              >
                Bishkek to Cholpon-Ata
              </Link>
              <Link
                href="/transfers/bishkek-to-karakol"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white hover:bg-white hover:text-blue-600"
              >
                Bishkek to Karakol
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
