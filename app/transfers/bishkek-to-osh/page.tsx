import type { Metadata } from "next";
import BishkekToOsh from "../../../src/views/BishkekToOsh";

export const metadata: Metadata = {
  title: "Bishkek to Osh Private Transfer | Too-Ashuu Pass | From $290",
  description:
    "Private transfer Bishkek → Osh via Too-Ashuu Pass (3,200 m), Suusamyr Valley, and Toktogul Reservoir. Sedan $290, Van $340, Bus $590. ~10–12 hours, ~620 km. Scenic alternative to domestic flight.",
  keywords: ["Bishkek to Osh transfer", "Bishkek Osh taxi", "Too-Ashuu Pass", "Toktogul Reservoir transfer", "south Kyrgyzstan transfer", "Osh private car", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/bishkek-to-osh",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-osh",
      en: "https://nomad-transfer.com/transfers/bishkek-to-osh",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-osh",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-osh",
    },
  },
  openGraph: {
    title: "Bishkek → Osh Private Transfer | Mountain Route",
    description: "Bishkek to Osh via Too-Ashuu Pass, Suusamyr Valley, Toktogul Reservoir. Sedan $290, Van $340.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "Bishkek to Osh private transfer" }],
    type: "website",
    url: "https://nomad-transfer.com/transfers/bishkek-to-osh",
  },
  twitter: { card: "summary_large_image", title: "Bishkek → Osh Transfer", description: "Sedan $290, Van $340. ~10–12 hours via Too-Ashuu Pass.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "Transfers", "item": "https://nomad-transfer.com/#transfers" },
      { "@type": "ListItem", "position": 3, "name": "Bishkek to Osh", "item": "https://nomad-transfer.com/transfers/bishkek-to-osh" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "Bishkek to Osh Private Transfer via Too-Ashuu Pass",
      "description": "Private long-distance transfer from Bishkek to Osh across the famous Too-Ashuu mountain pass (3,200 m), Suusamyr Valley, and Toktogul Reservoir. ~620 km, ~10–12 hours. Scenic alternative to domestic flights.",
      "url": "https://nomad-transfer.com/transfers/bishkek-to-osh",
      "touristType": "Long-distance Transfer, Mountain, Scenic",
      "duration": "PT12H",
      "offers": [
        { "@type": "Offer", "name": "Sedan (up to 4)", "price": "290", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Minivan (6-7)",   "price": "340", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Bus (up to 30)",  "price": "590", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996552291808", "url": "https://nomad-transfer.com", "areaServed": ["Kyrgyzstan"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "How much is a private transfer from Bishkek to Osh?", "acceptedAnswer": { "@type": "Answer", "text": "Sedan (up to 4 passengers) $290, Minivan (6-7 passengers) $340, Bus (up to 30 passengers) $590. Price is per vehicle, not per person. Includes fuel, hotel pickup in Bishkek, hotel drop-off in Osh, and lunch stop at Suusamyr Valley." } },
      { "@type": "Question", "name": "How long does the Bishkek to Osh drive take?", "acceptedAnswer": { "@type": "Answer", "text": "Approximately 10–12 hours including stops, ~620 km. The route crosses the Too-Ashuu mountain pass at 3,200 m, follows the Suusamyr Valley, and runs along the Toktogul Reservoir for over an hour." } },
      { "@type": "Question", "name": "Is the Bishkek–Osh road safe in winter?", "acceptedAnswer": { "@type": "Answer", "text": "The road is open year-round but winter conditions (December–February) require experienced drivers and winter tires. We use vehicles equipped for mountain conditions. In bad weather we may delay departure for safety. Snow is possible at the Too-Ashuu Pass year-round." } },
      { "@type": "Question", "name": "Why not just fly Bishkek to Osh?", "acceptedAnswer": { "@type": "Answer", "text": "Domestic flights are faster (~1 hour) but you miss the scenery: Too-Ashuu Pass tunnel, Suusamyr Valley yurt camps, and the turquoise Toktogul Reservoir. The drive shows you the geography of Kyrgyzstan in a way flying cannot. Ideal for travelers with time who want to see the country." } },
      { "@type": "Question", "name": "Can we make extra stops at Jalal-Abad or Uzgen?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Jalal-Abad (mineral spa town) and Uzgen (11th-century minaret and royal mausoleum) are popular optional stops in southern Kyrgyzstan. Add for +$30/$40 (Jalal-Abad) or +$35/$45 (Uzgen). Adds 1–2 hours total." } },
      { "@type": "Question", "name": "Is there a meal stop along the way?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We stop for lunch at a local cafe in the Suusamyr Valley (~2,200 m elevation) — typically Kyrgyz cuisine (besh-barmak, manty, lagman). Meal cost is not included in the transfer price." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <BishkekToOsh initialLang="en" />
  </>);
}
