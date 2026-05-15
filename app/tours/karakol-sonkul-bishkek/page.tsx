import type { Metadata } from "next";
import KarakolSonkulBishkekClient from "../../../src/views/KarakolSonkulBishkekClient";

export const metadata: Metadata = {
  title: "Karakol → Son-Kul → Bishkek 2-Day Private Tour | Nomad Transfer",
  description:
    "Private 2-day tour from Karakol to Bishkek via Son-Kul alpine lake (3,016 m), Djety-Oguz gorge, Skazka Canyon, and Burana Tower. Sedan $415 (up to 4 pax), Minivan $465 (6-7 pax). English support 24/7.",
  keywords: [
    "Karakol to Bishkek tour",
    "Son-Kul Lake tour",
    "Kyrgyzstan private tour",
    "2 day tour Kyrgyzstan",
    "Skazka Canyon",
    "Burana Tower",
    "Djety-Oguz",
    "nomad transfer",
  ],
  openGraph: {
    title: "Karakol → Son-Kul → Bishkek 2-Day Private Tour",
    description:
      "Gorges, waterfalls, canyons, alpine lake. Overnight in a yurt at Son-Kul. Sedan $415 (up to 4 pax), Minivan $465 (6-7 pax).",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Son-Kul Lake Kyrgyzstan",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karakol → Son-Kul → Bishkek 2-Day Tour",
    description: "Private 2-day tour. Sedan $415, Minivan $465.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
      en: "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "Tours", "item": "https://nomad-transfer.com/#tours" },
        { "@type": "ListItem", "position": 3, "name": "Karakol → Son-Kul → Bishkek", "item": "https://nomad-transfer.com/tours/karakol-sonkul-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Karakol to Bishkek Private Tour via Son-Kul Lake",
      "description":
        "2-day private tour from Karakol to Bishkek via Djety-Oguz gorge, Barskoon waterfall, Skazka Canyon, Son-Kul alpine lake (overnight in yurt), and Burana Tower.",
      "url": "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
      "image":
        "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "touristType": "Adventure, Cultural, Nature",
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Karakol — hotel pickup" },
          { "@type": "ListItem", "position": 2, "name": "Djety-Oguz — red sandstone cliffs" },
          { "@type": "ListItem", "position": 3, "name": "Barskoon Valley — waterfall & Gagarin monument" },
          { "@type": "ListItem", "position": 4, "name": "Skazka Canyon — Fairytale Canyon" },
          { "@type": "ListItem", "position": 5, "name": "Son-Kul Lake — overnight in yurt camp (3,016 m)" },
          { "@type": "ListItem", "position": 6, "name": "Kochkor — descent from plateau" },
          { "@type": "ListItem", "position": 7, "name": "Burana Tower — ancient minaret" },
          { "@type": "ListItem", "position": 8, "name": "Bishkek — drop-off at accommodation" },
        ],
      },
      "duration": "P2D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "415",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
          "price": "465",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfer",
        "telephone": "+996552291808",
        "url": "https://nomad-transfer.com",
        "areaServed": "Kyrgyzstan",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does the Karakol to Bishkek tour cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The tour costs $415 for a sedan (up to 4 passengers) or $465 for a minivan (6-7 passengers). The price is per vehicle, one-way, and includes all stops, yurt overnight at Son-Kul, fuel, and English support.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best season to visit Son-Kul Lake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The best season is June through September when the road to Son-Kul (3,016 m) is open and the yurt camps are operating. The lake is frozen and inaccessible in winter (October–May).",
          },
        },
        {
          "@type": "Question",
          "name": "Is accommodation at Son-Kul included in the price?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The yurt camp overnight at Son-Kul is not included in the base transfer price. We work with local yurt camps and can arrange accommodation and dinner for an additional fee — let us know when booking.",
          },
        },
        {
          "@type": "Question",
          "name": "Is there mobile signal at Son-Kul Lake?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "There is no mobile signal or internet at Son-Kul Lake. This is a remote alpine plateau at 3,016 m. We recommend downloading offline maps and informing family of your travel plans before departure.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the cancellation policy?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Free cancellation up to 24 hours before departure. Cancellations less than 24 hours before the trip may incur a 50% charge. Contact us via WhatsApp at +996 552 291 808 to reschedule or cancel.",
          },
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
      <KarakolSonkulBishkekClient />
    </>
  );
}
