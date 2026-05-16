import type { Metadata } from "next";
import AlmatyToKarakol from "../../../src/views/AlmatyToKarakol";

export const metadata: Metadata = {
  title: "Transfer from Almaty to Karakol | Private Car with Charyn Canyon Stop | From $235",
  description:
    "Book private transfer from Almaty to Karakol, Kazakhstan to Kyrgyzstan. Scenic route via Charyn Canyon & Kegen border. Sedan $235, Van $275. English-speaking driver. Fixed price per car. WhatsApp reply in 1-2 min. Daily departures.",
  keywords: [
    "from almaty to karakol",
    "transfer from almaty to karakol",
    "almaty to karakol private transfer",
    "almaty to karakol car",
    "almaty karakol taxi",
    "charyn canyon stop",
    "kegen border crossing",
    "kazakhstan to kyrgyzstan transfer",
    "almaty karakol price",
    "nomad transfer",
  ],
  openGraph: {
    title: "Private Transfer from Almaty to Karakol | Charyn Canyon Stop | $235",
    description:
      "Daily transfers from Almaty to Karakol via scenic Kegen border. Charyn Canyon, Karkara Valley stops. Sedan $235, Van $275. English-speaking driver.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Private transfer from Almaty Kazakhstan to Karakol Kyrgyzstan via Charyn Canyon",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/almaty-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Almaty  to  Karakol Transfer via Kegen",
    description: "Private transfer. Sedan $235, Minivan $275. Optional Charyn Canyon stop.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/almaty-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/almaty-to-karakol",
      en: "https://nomad-transfer.com/transfers/almaty-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/almaty-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/almaty-to-karakol",
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
        { "@type": "ListItem", "position": 2, "name": "Transfers", "item": "https://nomad-transfer.com/#transfers" },
        { "@type": "ListItem", "position": 3, "name": "Almaty to Karakol", "item": "https://nomad-transfer.com/transfers/almaty-to-karakol" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Private Transfer from Almaty to Karakol via Charyn Canyon & Kegen Border",
      "description":
        "Private 1-day transfer from Almaty, Kazakhstan to Karakol, Kyrgyzstan via the scenic Kegen mountain pass and Charyn Canyon. English-speaking driver, daily departures. Fixed price per car: Sedan $235, Van $275. Optional stops: Charyn Canyon (+$35), Kaindy Lake, Kolsai Lakes.",
      "url": "https://nomad-transfer.com/transfers/almaty-to-karakol",
      "touristType": "Adventure, Transfer, Scenic, Cross-Border",
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Almaty — hotel pickup" },
          { "@type": "ListItem", "position": 2, "name": "Charyn Canyon — optional stop (+$35)" },
          { "@type": "ListItem", "position": 3, "name": "Kegen border crossing (open 8am–6pm, May–Oct)" },
          { "@type": "ListItem", "position": 4, "name": "Karkara Valley — scenic mountain valley" },
          { "@type": "ListItem", "position": 5, "name": "Kaindy Lake — optional detour (price on request)" },
          { "@type": "ListItem", "position": 6, "name": "Karakol — hotel drop-off" },
        ],
      },
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "235",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://nomad-transfer.com/transfers/almaty-to-karakol",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
          "price": "275",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
          "url": "https://nomad-transfer.com/transfers/almaty-to-karakol",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfer",
        "telephone": "+996552291808",
        "url": "https://nomad-transfer.com",
        "areaServed": ["Kyrgyzstan", "Kazakhstan"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much is a private transfer from Almaty to Karakol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A sedan (up to 4 passengers) costs $235 and a minivan (6-7 passengers) costs $275. The price is per vehicle, not per person, and includes fuel, hotel pickup in Almaty, and hotel drop-off in Karakol.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I visit Charyn Canyon on the way from Almaty to Karakol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Charyn Canyon is just 12 km off the main Almaty–Karakol road. We can add this stop for an extra $35. Just mention it when booking via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Kegen border crossing open year-round?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The Kegen–Karkara border checkpoint is open May to October, daily from 8:00 AM to 6:00 PM. In winter months (November–April), transfers from Almaty to Karakol travel via the northern route through Bishkek.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a passport for the Kegen border crossing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, a valid passport is required for both Kazakhstan and Kyrgyzstan citizens, as well as all foreign nationals. Your driver will guide you through the crossing procedure.",
          },
        },
        {
          "@type": "Question",
          "name": "How long is the drive from Almaty to Karakol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 6 hours without stops along the ~350 km route. With a Charyn Canyon stop, expect 7-8 hours. Border crossing time varies but is typically 20-40 minutes.",
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
      <AlmatyToKarakol initialLang="en" />
    </>
  );
}
