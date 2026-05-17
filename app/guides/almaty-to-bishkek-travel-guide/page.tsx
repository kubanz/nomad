import type { Metadata } from "next";
import AlmatyToBishkekGuide from "../../../src/views/AlmatyToBishkekGuide";

export const metadata: Metadata = {
  title: "Almaty to Bishkek Travel Guide 2025 | Border Crossing, Distance & Tips",
  description:
    "Complete guide to traveling from Almaty to Bishkek: ~240 km, ~3 hours via Kordai border (open 24/7). Compare transport options, border crossing tips, visa info. Private transfer from $90.",
  keywords: [
    "almaty to bishkek travel guide",
    "how to get from almaty to bishkek",
    "almaty to bishkek by car",
    "kordai border crossing guide",
    "almaty bishkek distance",
    "almaty to bishkek transfer",
    "kazakhstan kyrgyzstan border crossing",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
    languages: {
      "x-default": "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
      en: "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
      ru: "https://nomad-transfer.com/ru/guides/almaty-to-bishkek-travel-guide",
      ko: "https://nomad-transfer.com/ko/guides/almaty-to-bishkek-travel-guide",
    },
  },
  openGraph: {
    title: "Almaty to Bishkek Travel Guide 2025 | Kordai Border & Transport Options",
    description:
      "How to get from Almaty to Bishkek: distance, border crossing guide, visa requirements, optional stops. Private transfer from $90 per car.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Almaty to Bishkek travel guide",
      },
    ],
    type: "article",
    url: "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
    siteName: "Nomad Transfer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almaty to Bishkek Travel Guide 2025",
    description: "~240 km, ~3 hrs, Kordai border 24/7. Private transfer from $90. Border tips & visa info.",
    images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "Travel Guides", "item": "https://nomad-transfer.com/guides" },
        { "@type": "ListItem", "position": 3, "name": "Almaty to Bishkek Travel Guide", "item": "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide" },
      ],
    },
    {
      "@type": "Article",
      "headline": "Almaty to Bishkek: Complete Travel Guide 2025",
      "description": "Everything you need to know about traveling from Almaty (Kazakhstan) to Bishkek (Kyrgyzstan) — distance, border crossing, transport options, and practical tips.",
      "url": "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
      "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Nomad Transfer",
        "url": "https://nomad-transfer.com",
      },
      "about": {
        "@type": "Trip",
        "name": "Almaty to Bishkek",
        "description": "Road trip from Almaty, Kazakhstan to Bishkek, Kyrgyzstan via Kordai border crossing.",
        "itinerary": {
          "@type": "ItemList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Almaty, Kazakhstan" },
            { "@type": "ListItem", "position": 2, "name": "Kordai Border Crossing" },
            { "@type": "ListItem", "position": 3, "name": "Bishkek, Kyrgyzstan" },
          ],
        },
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How long does it take to travel from Almaty to Bishkek?",
          "acceptedAnswer": { "@type": "Answer", "text": "The journey takes approximately 3 hours, covering ~240 km. This includes 20–40 minutes for passport control at the Kordai border crossing." },
        },
        {
          "@type": "Question",
          "name": "What is the best way to travel from Almaty to Bishkek?",
          "acceptedAnswer": { "@type": "Answer", "text": "A private transfer is the most comfortable option — fixed price per car ($90 sedan, $115 minivan), door-to-door, English-speaking driver, and border assistance included. Shared taxis are cheaper but wait until full and offer no comfort guarantees." },
        },
        {
          "@type": "Question",
          "name": "Is the Kordai border open 24 hours?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes. The Kordai (Korday) border crossing between Kazakhstan and Kyrgyzstan is open 24 hours a day, 365 days a year." },
        },
        {
          "@type": "Question",
          "name": "Do I need a visa to cross from Kazakhstan to Kyrgyzstan?",
          "acceptedAnswer": { "@type": "Answer", "text": "Most nationalities (EU, US, UK, South Korea, Japan, Australia, and 60+ more) get visa-free entry to both Kazakhstan and Kyrgyzstan for 30–90 days. A valid passport is all you need." },
        },
        {
          "@type": "Question",
          "name": "How much does it cost to travel from Almaty to Bishkek?",
          "acceptedAnswer": { "@type": "Answer", "text": "Private transfer: $90 (sedan) or $115 (minivan) per car. Shared taxi: $8–15 per person. Bus: $5–10 per person. Private transfer is recommended for comfort and reliability." },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AlmatyToBishkekGuide initialLang="en" />
    </>
  );
}
