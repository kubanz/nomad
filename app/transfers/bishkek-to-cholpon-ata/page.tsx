import type { Metadata } from "next";
import BishkekToCholponAta from "../../../src/views/BishkekToCholponAta";

export const metadata: Metadata = {
  title: "Bishkek to Cholpon-Ata Private Transfer | Issyk-Kul Resort | From $115",
  description:
    "Private transfer from Bishkek to Cholpon-Ata on Issyk-Kul's north shore. Optional stops at Burana Tower and Boom Gorge. Sedan $115, Van $145, Bus $235. ~3–4 hours, ~250 km. WhatsApp reply in 1–2 min.",
  keywords: ["Bishkek to Cholpon-Ata transfer", "Cholpon-Ata taxi", "Issyk-Kul resort transfer", "Bishkek beach Issyk-Kul", "Cholpon-Ata private car", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
      en: "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-cholpon-ata",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-cholpon-ata",
    },
  },
  openGraph: {
    title: "Bishkek → Cholpon-Ata Private Transfer | Issyk-Kul Beach Resort",
    description: "Bishkek to Cholpon-Ata in ~3–4 hours via the Issyk-Kul north shore. Sedan $115, Van $145.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "Bishkek to Cholpon-Ata transfer" }],
    type: "website",
    url: "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
  },
  twitter: { card: "summary_large_image", title: "Bishkek → Cholpon-Ata Transfer", description: "Sedan $115, Van $145. ~3–4 hours.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "Transfers", "item": "https://nomad-transfer.com/#transfers" },
      { "@type": "ListItem", "position": 3, "name": "Bishkek to Cholpon-Ata", "item": "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "Bishkek to Cholpon-Ata Private Transfer",
      "description": "Private transfer from Bishkek to Cholpon-Ata along the Issyk-Kul north shore. Optional stops at Burana Tower and Boom Gorge. ~250 km, ~3–4 hours.",
      "url": "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
      "touristType": "Transfer, Scenic, Beach Resort",
      "duration": "PT4H",
      "offers": [
        { "@type": "Offer", "name": "Sedan (up to 4)", "price": "115", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Minivan (6-7)",   "price": "145", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Bus (up to 30)",  "price": "235", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996552291808", "url": "https://nomad-transfer.com", "areaServed": ["Kyrgyzstan"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "How much is a private transfer from Bishkek to Cholpon-Ata?", "acceptedAnswer": { "@type": "Answer", "text": "Sedan (up to 4 passengers) $115, Minivan (6-7 passengers) $145, Bus (up to 30 passengers) $235. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off." } },
      { "@type": "Question", "name": "How long does the Bishkek to Cholpon-Ata drive take?", "acceptedAnswer": { "@type": "Answer", "text": "Approximately 3–4 hours without stops, ~250 km. With optional stops at Burana Tower or Boom Gorge, allow 4–5 hours. No border crossing required." } },
      { "@type": "Question", "name": "What is there to do in Cholpon-Ata?", "acceptedAnswer": { "@type": "Answer", "text": "Cholpon-Ata is the main beach resort town on Issyk-Kul Lake. Highlights include the Petroglyph open-air museum (1,800-year-old rock carvings), Rukh Ordo Cultural Center, summer beaches with warm water (June–September), and hot springs." } },
      { "@type": "Question", "name": "Can we stop at Burana Tower on the way?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Burana Tower is a 10th-century minaret near the Bishkek–Issyk-Kul highway. Add this stop for +$15 (sedan) or +$20 (minivan). Mention it when booking via WhatsApp." } },
      { "@type": "Question", "name": "When is the best time to visit Cholpon-Ata?", "acceptedAnswer": { "@type": "Answer", "text": "June through September for swimming and beach activities, when the lake water reaches 18–22°C. May and October are good for sightseeing without crowds. Winter is quiet but skiing nearby." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <BishkekToCholponAta initialLang="en" />
  </>);
}
