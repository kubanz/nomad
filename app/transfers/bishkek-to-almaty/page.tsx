import type { Metadata } from "next";
import BishkekToAlmaty from "../../../src/views/BishkekToAlmaty";

export const metadata: Metadata = {
  title: "Bishkek to Almaty Private Transfer | Taxi & Shuttle from $127 | Border Crossing | Nomad Transfer",
  description:
    "Book private transfer Bishkek to Almaty with English-speaking support. Sedan $127, Minivan $158. Via Korday border crossing. Includes border assistance. Fixed price, no hidden fees. Free cancellation 24h. WhatsApp booking in 1-2 min.",
  keywords: [
    "bishkek to almaty transfer",
    "bishkek almaty taxi",
    "bishkek almaty private car",
    "bishkek to almaty shuttle",
    "bishkek almaty driver",
    "korday border crossing",
    "kyrgyzstan to kazakhstan",
    "bishkek almaty day trip",
    "private driver kyrgyzstan",
    "english speaking driver kyrgyzstan",
    "nomad transfer kyrgyzstan",
  ],
  openGraph: {
    title: "Bishkek to Almaty Private Transfer | Korday Border Crossing",
    description:
      "Border crossing transfer via Korday. Sedan $127, Minivan $158. Private transfer with border assistance.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Bishkek to Almaty transfer via Korday border",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/bishkek-to-almaty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishkek to Almaty Private Transfer",
    description: "Private transfer via Korday border. Sedan $127, Minivan $158.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/bishkek-to-almaty",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-almaty",
      en: "https://nomad-transfer.com/transfers/bishkek-to-almaty",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-almaty",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-almaty",
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
        { "@type": "ListItem", "position": 3, "name": "Bishkek to Almaty", "item": "https://nomad-transfer.com/transfers/bishkek-to-almaty" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Bishkek to Almaty Private Transfer via Korday Border",
      "description":
        "Private transfer from Bishkek to Almaty via Korday border crossing. Includes border assistance and all fees. English-speaking support available.",
      "url": "https://nomad-transfer.com/transfers/bishkek-to-almaty",
      "touristType": "Transfer, Border Crossing",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "127",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
          "price": "158",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
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
          "name": "How much does a private transfer from Bishkek to Almaty cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan (up to 4 passengers) $127, Minivan (6-7 passengers) $158. Price is per vehicle, not per person. Includes fuel, hotel pickup/drop-off, and border crossing assistance.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the drive from Bishkek to Almaty take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 4-5 hours including border crossing at Korday (~230 km). Border processing usually takes 30-60 minutes depending on queue.",
          },
        },
        {
          "@type": "Question",
          "name": "Which border crossing is used for Bishkek to Almaty transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "We use the Korday border crossing, which is the closest and most direct route from Bishkek to Almaty. This border operates year-round.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a visa for the Korday border crossing?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Visa requirements depend on your nationality. Citizens of most countries can enter Kazakhstan visa-free for up to 30 days. Please check Kazakhstan visa requirements for your specific country before booking.",
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
      <BishkekToAlmaty initialLang="en" />
    </>
  );
}
