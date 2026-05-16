import type { Metadata } from "next";
import OshToBishkek from "../../../src/views/OshToBishkek";

export const metadata: Metadata = {
  title: "Osh to Bishkek Private Transfer | Taxi & Shuttle from $298 | Mountain Route | Nomad Transfer",
  description:
    "Book private transfer Osh to Bishkek with English-speaking support. Sedan $298, Minivan $345. Scenic mountain route via Kara-Balta. Optional stops: Suusamyr Valley, Ala-Archa. Fixed price, no hidden fees. Free cancellation 24h. WhatsApp booking in 1-2 min.",
  keywords: [
    "osh to bishkek transfer",
    "osh bishkek taxi",
    "osh bishkek private car",
    "osh to bishkek shuttle",
    "osh bishkek driver",
    "suusamyr valley stop",
    "mountain pass kyrgyzstan",
    "osh to bishkek day trip",
    "private driver kyrgyzstan",
    "english speaking driver kyrgyzstan",
    "nomad transfer kyrgyzstan",
  ],
  openGraph: {
    title: "Osh to Bishkek Private Transfer | Mountain Route",
    description:
      "Scenic mountain route via Suusamyr Valley. Sedan $298, Minivan $345. Private transfer, not a group tour.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Osh to Bishkek transfer via mountains",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/osh-to-bishkek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osh to Bishkek Private Transfer",
    description: "Private transfer via mountain route. Sedan $298, Minivan $345.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/osh-to-bishkek",
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
        { "@type": "ListItem", "position": 3, "name": "Osh to Bishkek", "item": "https://nomad-transfer.com/transfers/osh-to-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Osh to Bishkek Private Transfer via Mountain Route",
      "description":
        "Private transfer from Osh to Bishkek via scenic mountain route. Optional stops: Suusamyr Valley, mountain passes. English-speaking support available.",
      "url": "https://nomad-transfer.com/transfers/osh-to-bishkek",
      "touristType": "Transfer, Scenic, Mountain",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "298",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
          "price": "345",
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
          "name": "How much does a private transfer from Osh to Bishkek cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan (up to 4 passengers) $298, Minivan (6-7 passengers) $345. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the drive from Osh to Bishkek take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 10-12 hours depending on road conditions and mountain passes (~650 km). This is a long-distance transfer through scenic mountain terrain. No border crossing required.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Osh to Bishkek route available year-round?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The route is available year-round, but winter conditions (November-March) may require additional travel time due to snow and mountain passes. We monitor road conditions and will inform you of any delays.",
          },
        },
        {
          "@type": "Question",
          "name": "Is English-speaking support available for the transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Our WhatsApp support team speaks English and can communicate in real-time during your transfer. Drivers have basic English for essential communication, and you can reach our English-speaking team anytime via WhatsApp.",
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
      <OshToBishkek initialLang="en" />
    </>
  );
}
