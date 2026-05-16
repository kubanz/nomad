import type { Metadata } from "next";
import ManasToKarakol from "../../../src/views/ManasToKarakol";

export const metadata: Metadata = {
  title: "Manas Airport (FRU) to Karakol Transfer | Meet & Greet 24/7 | From $135",
  description:
    "Private airport transfer from Manas (FRU) to Karakol. Meet & Greet with name board at arrivals, 60-min free waiting, flight tracking. Sedan $135, Van $155, Bus $275. WhatsApp 24/7.",
  keywords: [
    "Manas airport transfer",
    "FRU to Karakol",
    "Bishkek airport to Karakol",
    "Manas airport taxi",
    "Karakol airport pickup",
    "Issyk-Kul airport transfer",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
      en: "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/manas-airport-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/manas-airport-to-karakol",
    },
  },
  openGraph: {
    title: "Manas Airport (FRU)  to  Karakol Private Transfer | 24/7 Meet & Greet",
    description:
      "Meet & Greet with name board at Manas arrivals, 60-min free waiting, flight tracking. Sedan $135, Van $155. Door-to-door to your hotel in Karakol.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Manas Airport to Karakol private transfer",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manas Airport (FRU)  to  Karakol Transfer",
    description: "Meet & Greet at arrivals. Sedan $135, Van $155. 24/7 airport pickups.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
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
        { "@type": "ListItem", "position": 3, "name": "Manas Airport to Karakol", "item": "https://nomad-transfer.com/transfers/manas-airport-to-karakol" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Manas Airport (FRU) to Karakol Private Airport Transfer",
      "description":
        "Private airport transfer from Manas International Airport (FRU) to Karakol with Meet & Greet at arrivals, 60-min free waiting, and flight tracking. Door-to-door service 24/7.",
      "url": "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
      "touristType": "Airport Transfer, Private",
      "duration": "PT5H",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "135",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
          "price": "155",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Bus (up to 30 passengers)",
          "price": "275",
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
          "name": "How much is a transfer from Manas Airport to Karakol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan (up to 4 passengers) $135, Minivan (6-7 passengers) $155, Bus (up to 30 passengers) $275. Price is per vehicle, not per person. Night surcharge 22:00–06:00 is +15%. Includes fuel, Meet & Greet at arrivals, and 60 minutes free waiting.",
          },
        },
        {
          "@type": "Question",
          "name": "How will I find the driver at Manas Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Your driver will be waiting in the arrivals hall (after passport control and baggage claim) holding a name board with your name. Send us your flight number via WhatsApp in advance so we can track your arrival.",
          },
        },
        {
          "@type": "Question",
          "name": "What if my flight is delayed?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We track your flight by flight number, so the driver arrives based on actual landing time. 60 minutes of free waiting after landing is included for passport control and baggage. Additional waiting is charged per hour — but rarely needed.",
          },
        },
        {
          "@type": "Question",
          "name": "How long is the drive from Manas Airport to Karakol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 5 hours, ~410 km. The route bypasses central Bishkek via the northern highway and follows the Issyk-Kul north shore to Karakol. No border crossing required.",
          },
        },
        {
          "@type": "Question",
          "name": "Do you provide child seats?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, child seats and booster seats are available on request — please mention age and weight when booking via WhatsApp. There is no extra charge.",
          },
        },
        {
          "@type": "Question",
          "name": "Can you meet night flights?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we operate 24/7 including night arrivals. A night surcharge of +15% applies for pickups between 22:00 and 06:00.",
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
      <ManasToKarakol initialLang="en" />
    </>
  );
}
