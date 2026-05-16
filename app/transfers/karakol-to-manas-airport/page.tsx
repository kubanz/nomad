import type { Metadata } from "next";
import KarakolToManasAirport from "../../../src/views/KarakolToManasAirport";

export const metadata: Metadata = {
  title: "Karakol to Manas Airport Transfer | Private Taxi from $146 | 24/7 Service | Nomad Transfer",
  description:
    "Book private transfer Karakol to Manas Airport with English-speaking support. Sedan $146, Minivan $177. 24/7 service, flight tracking. Via scenic Issyk-Kul. Fixed price, no hidden fees. Free cancellation 24h. WhatsApp booking in 1-2 min.",
  keywords: [
    "karakol to manas airport transfer",
    "karakol airport taxi",
    "karakol manas private car",
    "karakol to bishkek airport",
    "karakol airport shuttle",
    "manas airport pickup",
    "issyk-kul to airport",
    "karakol airport transfer",
    "private driver kyrgyzstan",
    "english speaking driver kyrgyzstan",
    "nomad transfer kyrgyzstan",
  ],
  openGraph: {
    title: "Karakol to Manas Airport Transfer | 24/7 Service",
    description:
      "Reliable airport transfer via Issyk-Kul. Sedan $146, Minivan $177. Flight tracking included.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Karakol to Manas Airport transfer",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/karakol-to-manas-airport",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karakol to Manas Airport Transfer",
    description: "24/7 airport transfer. Sedan $146, Minivan $177.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/karakol-to-manas-airport",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/karakol-to-manas-airport",
      en: "https://nomad-transfer.com/transfers/karakol-to-manas-airport",
      ru: "https://nomad-transfer.com/ru/transfers/karakol-to-manas-airport",
      ko: "https://nomad-transfer.com/ko/transfers/karakol-to-manas-airport",
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
        { "@type": "ListItem", "position": 3, "name": "Karakol to Manas Airport", "item": "https://nomad-transfer.com/transfers/karakol-to-manas-airport" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Karakol to Manas Airport Private Transfer",
      "description":
        "Private airport transfer from Karakol to Manas International Airport. 24/7 service with flight tracking. Via scenic Issyk-Kul north shore.",
      "url": "https://nomad-transfer.com/transfers/karakol-to-manas-airport",
      "touristType": "Transfer, Airport",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "146",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
          "price": "177",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfer",
        "telephone": "+996552291808",
        "url": "https://nomad-transfer.com",
        "areaServed": ["Kyrgyzstan"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a private transfer from Karakol to Manas Airport cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan (up to 4 passengers) $146, Minivan (6-7 passengers) $177. Price is per vehicle, not per person. Includes fuel and hotel pickup.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the drive from Karakol to Manas Airport take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 6.5-7.5 hours (~390 km) via Issyk-Kul north shore and Boom Gorge. We recommend booking departure flights after 2:00 PM to allow sufficient travel time.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you track flights for airport pickups?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. For airport pickups, we track your flight in real-time. If your flight is delayed, your driver will adjust pickup time accordingly at no extra charge.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the transfer available 24/7?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. We provide 24/7 airport transfer service for early morning and late night flights. Book via WhatsApp anytime.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I cancel my airport transfer booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Free cancellation is available up to 24 hours before your scheduled pickup time. For cancellations within 24 hours, a 50% fee applies. Contact us via WhatsApp to cancel or modify your booking.",
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
      <KarakolToManasAirport initialLang="en" />
    </>
  );
}
