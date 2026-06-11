import type { Metadata } from "next";
import BishkekToKarakol from "../../../src/views/BishkekToKarakol";

export const metadata: Metadata = {
  title: "Bishkek to Karakol Private Transfer | Taxi & Shuttle from $136 | English Driver | Nomad Transfer",
  description:
    "Book private transfer Bishkek to Karakol with English-speaking support. Sedan $136, Minivan $167. Scenic route via Issyk-Kul lake. Optional stops: Burana Tower, Boom Gorge. Fixed price, no hidden fees. Free cancellation 24h. WhatsApp booking in 1-2 min.",
  keywords: [
    "bishkek to karakol transfer",
    "bishkek karakol taxi",
    "bishkek karakol private car",
    "bishkek to karakol shuttle",
    "bishkek karakol driver",
    "burana tower stop",
    "boom gorge photo stop",
    "issyk-kul north shore",
    "bishkek karakol day trip",
    "karakol ski resort transfer",
    "bishkek to issyk-kul transfer",
    "private driver kyrgyzstan",
    "english speaking driver kyrgyzstan",
    "nomad transfer kyrgyzstan",
  ],
  openGraph: {
    title: "Bishkek to Karakol Private Transfer | Issyk-Kul North Shore",
    description:
      "Scenic north shore route via Burana Tower, Boom Gorge, and Issyk-Kul. Sedan $136, Minivan $167. Private transfer, not a group tour.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Bishkek to Karakol transfer via Issyk-Kul north shore",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/bishkek-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bishkek to Karakol Private Transfer",
    description: "Private transfer via Issyk-Kul north shore. Sedan $136, Minivan $167.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/bishkek-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-karakol",
      en: "https://nomad-transfer.com/transfers/bishkek-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-karakol",
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
        { "@type": "ListItem", "position": 2, "name": "Transfers", "item": "https://nomad-transfer.com/transfers" },
        { "@type": "ListItem", "position": 3, "name": "Bishkek to Karakol", "item": "https://nomad-transfer.com/transfers/bishkek-to-karakol" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Bishkek to Karakol Private Transfer via Issyk-Kul",
      "description":
        "Private 1-day transfer from Bishkek to Karakol along the Issyk-Kul north shore. Optional stops: Burana Tower (+$15), Cholpon-Ata (+$20). Free photo stops at Boom Gorge along the way.",
      "url": "https://nomad-transfer.com/transfers/bishkek-to-karakol",
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
        "@id": "https://nomad-transfer.com/#business",
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
          "name": "How much does a private transfer from Bishkek to Karakol cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan (up to 4 passengers) $136, Minivan (6-7 passengers) $167, Bus (up to 30 passengers) $265. Price is per vehicle, not per person. Includes fuel and hotel pickup/drop-off.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I stop at Burana Tower on the way from Bishkek to Karakol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Burana Tower is a 10th-century minaret located just off the main Bishkek–Karakol road. You can add this stop for +$15 (sedan) or +$20 (minivan). Mention it when booking via WhatsApp.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the drive from Bishkek to Karakol take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Approximately 6-7 hours without stops (~360 km). With optional stops at Burana Tower and Boom Gorge, allow 7-8 hours. No border crossing required.",
          },
        },
        {
          "@type": "Question",
          "name": "Is the Bishkek to Karakol transfer available year-round?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. The Bishkek–Karakol route runs year-round along the Issyk-Kul north shore highway. There is no border crossing, so it operates in all seasons.",
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
          "name": "Do you provide child seats for the Bishkek to Karakol transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, child seats are available on request at no extra charge. Please mention your child's age and weight when booking via WhatsApp so we can prepare the appropriate seat.",
          },
        },
        {
          "@type": "Question",
          "name": "Can I book a one-way transfer from Bishkek to Karakol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, all our transfers are available as one-way or round-trip. The prices shown ($136 sedan, $167 minivan) are for one-way travel. For round-trip, simply double the price or ask for a custom quote.",
          },
        },
        {
          "@type": "Question",
          "name": "What is the best time of year to travel from Bishkek to Karakol?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The route is scenic year-round. Summer (June-September) offers warm weather and green landscapes. Winter (December-March) is ideal for ski resort access. Spring (April-May) features blooming flowers, and autumn (October-November) showcases golden foliage.",
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
          "name": "Can I cancel my Bishkek to Karakol transfer booking?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes. Free cancellation is available up to 24 hours before your scheduled pickup time. For cancellations within 24 hours, a 50% fee applies. Contact us via WhatsApp to cancel or modify your booking.",
          },
        },
        {
          "@type": "Question",
          "name": "Are there luggage restrictions for the transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan can accommodate 2-3 large suitcases plus carry-ons. Minivan can fit 4-6 large suitcases plus backpacks. If you're traveling with ski equipment or extra luggage, mention this when booking so we can arrange appropriate vehicle space.",
          },
        },
        {
          "@type": "Question",
          "name": "What payment methods do you accept for the Bishkek to Karakol transfer?",
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
      <BishkekToKarakol initialLang="en" />
    </>
  );
}
