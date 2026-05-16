import type { Metadata } from "next";
import KarakolToBishkek from "../../../src/views/KarakolToBishkek";

export const metadata: Metadata = {
  title: "Karakol to Bishkek Private Transfer | Taxi & Shuttle from $136 | English Driver | Nomad Transfer",
  description:
    "Book private transfer Karakol to Bishkek with English-speaking support. Sedan $136, Minivan $167. Scenic route via Issyk-Kul lake. Optional stops: Cholpon-Ata, Boom Gorge. Fixed price, no hidden fees. Free cancellation 24h. WhatsApp booking in 1-2 min.",
  keywords: [
    "karakol to bishkek transfer",
    "karakol bishkek taxi",
    "karakol bishkek private car",
    "karakol to bishkek shuttle",
    "karakol bishkek driver",
    "cholpon-ata stop",
    "boom gorge photo stop",
    "issyk-kul north shore",
    "karakol bishkek day trip",
    "karakol to bishkek transfer",
    "karakol to issyk-kul transfer",
    "private driver kyrgyzstan",
    "english speaking driver kyrgyzstan",
    "nomad transfer kyrgyzstan",
  ],
  openGraph: {
    title: "Karakol to Bishkek Private Transfer | Issyk-Kul North Shore",
    description:
      "Scenic north shore route via Cholpon-Ata, Boom Gorge, and Issyk-Kul. Sedan $136, Minivan $167. Private transfer, not a group tour.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Karakol to Bishkek transfer via Issyk-Kul north shore",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/karakol-to-bishkek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karakol to Bishkek Private Transfer",
    description: "Private transfer via Issyk-Kul north shore. Sedan $136, Minivan $167.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/karakol-to-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/karakol-to-bishkek",
      en: "https://nomad-transfer.com/transfers/karakol-to-bishkek",
      ru: "https://nomad-transfer.com/ru/transfers/karakol-to-bishkek",
      ko: "https://nomad-transfer.com/ko/transfers/karakol-to-bishkek",
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
        { "@type": "ListItem", "position": 3, "name": "Karakol to Bishkek", "item": "https://nomad-transfer.com/transfers/karakol-to-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Karakol to Bishkek Private Transfer via Issyk-Kul",
      "description":
        "Private 1-day transfer from Karakol to Bishkek along the Issyk-Kul north shore. Optional stops: Cholpon-Ata (+$20), Boom Gorge photo stops included. English-speaking support available.",
      "url": "https://nomad-transfer.com/transfers/karakol-to-bishkek",
      "touristType": "Transfer, Scenic, Cultural",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "136",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
          "price": "167",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Bus (up to 30 passengers)",
          "price": "265",
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
          "name": "How much does a private transfer from Karakol to Bishkek cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan (up to 4 passengers) $136, Minivan (6-7 passengers) $167, Bus (up to 30 passengers) $265. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the drive from Karakol to Bishkek take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 6-7 hours without stops (~360 km). With optional stops at Cholpon-Ata and Boom Gorge, allow 7-8 hours. No border crossing required.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I stop at Cholpon-Ata on the way from Karakol to Bishkek?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Cholpon-Ata is a popular resort town on the Issyk-Kul north shore. You can add this stop for +$20 (sedan/minivan). Mention it when booking via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Karakol to Bishkek transfer available year-round?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Karakol–Bishkek route runs year-round along the Issyk-Kul north shore highway. There is no border crossing, so it operates in all seasons.",
          },
        },
        {
          "@type": "Question",
          "name": "What is Boom Gorge and can we stop there?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Boom Gorge is a dramatic canyon where the Chu River cuts through rocky cliffs, located about 80 km east of Bishkek. Drivers stop 2–3 times along the way for free 10–15 minute photo breaks at scenic spots like Boom Gorge — no extra charge.",
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
        {
          "@type": "Question",
          "name": "Can I cancel my Karakol to Bishkek transfer booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Free cancellation is available up to 24 hours before your scheduled pickup time. For cancellations within 24 hours, a 50% fee applies. Contact us via WhatsApp to cancel or modify your booking.",
          },
        },
        {
          "@type": "Question",
          "name": "What payment methods do you accept for the Karakol to Bishkek transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cash payment (USD or KGS) is preferred and paid directly to the driver at the end of your journey. Bank transfer and card payments can be arranged in advance via WhatsApp. No upfront payment required for most bookings.",
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
      <KarakolToBishkek initialLang="en" />
    </>
  );
}
