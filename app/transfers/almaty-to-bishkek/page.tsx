import type { Metadata } from "next";
import AlmatyToBishkek from "../../../src/views/AlmatyToBishkek";

export const metadata: Metadata = {
  title: "Almaty to Bishkek Private Transfer | Kordai Border 24/7 | From $90",
  description:
    "Private transfer from Almaty to Bishkek via Kordai border (open 24/7). Fixed price per car, English-speaking driver, border assistance. Sedan $90, Van $115, Bus $220. ~3 hours, ~240 km. WhatsApp reply in 1–2 min.",
  keywords: ["Almaty to Bishkek transfer", "Almaty Bishkek taxi", "Kordai border crossing", "Kazakhstan Kyrgyzstan transfer", "Almaty Bishkek private car", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/almaty-to-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/almaty-to-bishkek",
      en: "https://nomad-transfer.com/transfers/almaty-to-bishkek",
      ru: "https://nomad-transfer.com/ru/transfers/almaty-to-bishkek",
      ko: "https://nomad-transfer.com/ko/transfers/almaty-to-bishkek",
    },
  },
  openGraph: {
    title: "Almaty → Bishkek Private Transfer | Kordai Border 24/7",
    description: "Fixed-price private transfer Almaty to Bishkek via Kordai border. Sedan $90, Van $115. ~3 hours.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "Almaty to Bishkek private transfer" }],
    type: "website",
    url: "https://nomad-transfer.com/transfers/almaty-to-bishkek",
  },
  twitter: { card: "summary_large_image", title: "Almaty → Bishkek Transfer", description: "Sedan $90, Van $115. Kordai border 24/7.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "Transfers", "item": "https://nomad-transfer.com/#transfers" },
      { "@type": "ListItem", "position": 3, "name": "Almaty to Bishkek", "item": "https://nomad-transfer.com/transfers/almaty-to-bishkek" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "Almaty to Bishkek Private Transfer via Kordai Border",
      "description": "Private cross-border transfer from Almaty (Kazakhstan) to Bishkek (Kyrgyzstan) via the Kordai border crossing. Fixed price per vehicle, English-speaking driver, border assistance. ~240 km, ~3 hours.",
      "url": "https://nomad-transfer.com/transfers/almaty-to-bishkek",
      "touristType": "Transfer, Cross-border",
      "duration": "PT3H",
      "offers": [
        { "@type": "Offer", "name": "Sedan (up to 4)",  "price": "90",  "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Minivan (6-7)",    "price": "115", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Bus (up to 30)",   "price": "220", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996557081821", "url": "https://nomad-transfer.com", "areaServed": ["Kazakhstan", "Kyrgyzstan"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "How much is a private transfer from Almaty to Bishkek?", "acceptedAnswer": { "@type": "Answer", "text": "Sedan (up to 4 passengers) $90, Minivan (6-7 passengers) $115, Bus (up to 30 passengers) $220. Price is per vehicle, not per person. Includes fuel, hotel pickup in Almaty, hotel drop-off in Bishkek, and assistance at the Kordai border." } },
      { "@type": "Question", "name": "How long does the Almaty to Bishkek transfer take?", "acceptedAnswer": { "@type": "Answer", "text": "Approximately 3 hours, ~240 km. This includes 20–40 minutes for passport control at the Kordai border. The route runs along the main M-39 highway." } },
      { "@type": "Question", "name": "Is the Kordai border open 24/7?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Kordai (Korday) border crossing between Kazakhstan and Kyrgyzstan is open 24 hours a day, year-round. The most common crossing for travelers between Almaty and Bishkek." } },
      { "@type": "Question", "name": "Do I need a visa for the border crossing?", "acceptedAnswer": { "@type": "Answer", "text": "Most nationalities (EU, US, UK, South Korea, Japan, Singapore, Australia, and many more) get visa-free entry to both Kazakhstan and Kyrgyzstan for 30–90 days. Carry your passport — that's all you need." } },
      { "@type": "Question", "name": "Can you pick me up from Almaty Airport (ALA)?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can pick you up from Almaty International Airport (ALA), any hotel, or any address in Almaty. Send your flight number or address via WhatsApp when booking." } },
      { "@type": "Question", "name": "Can the transfer continue to Issyk-Kul or Karakol?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We can extend the transfer beyond Bishkek to Issyk-Kul, Cholpon-Ata, or Karakol with the same driver and vehicle. Ask for combined pricing via WhatsApp." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <AlmatyToBishkek initialLang="en" />
  </>);
}
