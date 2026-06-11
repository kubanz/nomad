import type { Metadata } from "next";
import CholponAtaToBishkek from "../../../src/views/CholponAtaToBishkek";

export const metadata: Metadata = {
  title: "Cholpon-Ata to Bishkek Private Transfer | Taxi & Shuttle from $97 | English Driver | Nomad Transfer",
  description:
    "Book private transfer Cholpon-Ata to Bishkek with English-speaking support. Sedan $97, Minivan $128. Scenic route via Issyk-Kul lake. Optional stops: Boom Gorge, Burana Tower. Fixed price, no hidden fees. Free cancellation 24h. WhatsApp booking in 1-2 min.",
  keywords: [
    "cholpon-ata to bishkek transfer",
    "cholpon-ata bishkek taxi",
    "cholpon-ata bishkek private car",
    "cholpon-ata to bishkek shuttle",
    "cholpon-ata bishkek driver",
    "issyk-kul to bishkek",
    "boom gorge photo stop",
    "burana tower stop",
    "cholpon-ata to bishkek day trip",
    "private driver kyrgyzstan",
    "english speaking driver kyrgyzstan",
    "nomad transfer kyrgyzstan",
  ],
  openGraph: {
    title: "Cholpon-Ata to Bishkek Private Transfer | Issyk-Kul North Shore",
    description:
      "Scenic north shore route via Boom Gorge and Issyk-Kul. Sedan $97, Minivan $128. Private transfer, not a group tour.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Cholpon-Ata to Bishkek transfer via Issyk-Kul",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/cholpon-ata-to-bishkek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cholpon-Ata to Bishkek Private Transfer",
    description: "Private transfer via Issyk-Kul north shore. Sedan $97, Minivan $128.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/cholpon-ata-to-bishkek",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "Transfers", "item": "https://nomad-transfer.com/transfers" },
        { "@type": "ListItem", "position": 3, "name": "Cholpon-Ata to Bishkek", "item": "https://nomad-transfer.com/transfers/cholpon-ata-to-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Cholpon-Ata to Bishkek Private Transfer",
      "description":
        "Private transfer from Cholpon-Ata to Bishkek along the Issyk-Kul north shore. Optional stops: Boom Gorge, Burana Tower. English-speaking support available.",
      "url": "https://nomad-transfer.com/transfers/cholpon-ata-to-bishkek",
      "touristType": "Transfer, Scenic",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "97",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
          "price": "128",
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
          "name": "How much does a private transfer from Cholpon-Ata to Bishkek cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan (up to 4 passengers) $97, Minivan (6-7 passengers) $128. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the drive from Cholpon-Ata to Bishkek take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 4-5 hours without stops (~250 km). With optional stops at Boom Gorge and Burana Tower, allow 5-6 hours. No border crossing required.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I stop at Burana Tower on the way to Bishkek?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Burana Tower is a 10th-century minaret located just off the main route. You can add this stop for +$15 (sedan) or +$20 (minivan). Mention it when booking via WhatsApp.",
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
      <CholponAtaToBishkek initialLang="en" />
    </>
  );
}
