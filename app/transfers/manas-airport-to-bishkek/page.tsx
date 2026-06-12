import type { Metadata } from "next";
import ManasAirportToBishkek from "../../../src/views/ManasAirportToBishkek";

export const metadata: Metadata = {
  title: "Manas Airport to Bishkek Transfer from $35 | Nomad Transfer",
  description:
    "Private transfer from Manas Airport to one Bishkek address. Sedan $35, minivan $45. Extra stops cost extra. Meet & Greet, flight tracking, 60-min waiting.",
  keywords: [
    "Manas airport to Bishkek",
    "FRU to Bishkek transfer",
    "Bishkek airport pickup",
    "Manas airport taxi",
    "private transfer Manas Bishkek",
    "airport transfer Kyrgyzstan",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
      en: "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
      ru: "https://nomad-transfer.com/ru/transfers/manas-airport-to-bishkek",
      ko: "https://nomad-transfer.com/ko/transfers/manas-airport-to-bishkek",
    },
  },
  openGraph: {
    title: "Manas Airport (FRU) to Bishkek Private Transfer | 24/7 Meet & Greet",
    description:
      "Meet & Greet with name board, flight tracking, and 60-min free waiting. Sedan $35, minivan $45 for one direct Bishkek drop-off.",
    type: "website",
    url: "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
    images: [{
      url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      width: 1200,
      height: 630,
      alt: "Private transfer from Manas Airport to Bishkek",
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manas Airport (FRU) to Bishkek Transfer",
    description: "Meet & Greet at arrivals. Sedan $35, minivan $45 for one direct Bishkek drop-off.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home",      item: "https://nomad-transfer.com/" },
        { "@type": "ListItem", position: 2, name: "Transfers", item: "https://nomad-transfer.com/transfers" },
        { "@type": "ListItem", position: 3, name: "Manas Airport to Bishkek", item: "https://nomad-transfer.com/transfers/manas-airport-to-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Manas Airport (FRU) to Bishkek Private Airport Transfer",
      description:
        "Private airport transfer from Manas International Airport (FRU) to Bishkek city centre with Meet & Greet at arrivals, 60-min free waiting, and flight tracking. Door-to-door service 24/7.",
      url: "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
      touristType: "Airport Transfer, Private",
      duration: "PT40M",
      offers: [
        {
          "@type": "Offer",
          name: "Sedan (up to 4 passengers)",
          price: "35",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          name: "Minivan (6-7 passengers)",
          price: "45",
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
        },
      ],
      provider: {
        "@type": "LocalBusiness",
        "@id": "https://nomad-transfer.com/#business",
        name: "Nomad Transfer",
        telephone: "+996552291808",
        url: "https://nomad-transfer.com",
        areaServed: ["Kyrgyzstan"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "How much is a transfer from Manas Airport to Bishkek?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sedan (up to 4 passengers) $35, Minivan (6-7 passengers) $45. Price is per vehicle for one direct airport pickup and one Bishkek drop-off. Extra stops or additional addresses cost extra. Night surcharge 22:00–06:00 is +15%.",
          },
        },
        {
          "@type": "Question",
          name: "How will I find the driver at Manas Airport?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Your driver will be waiting in the arrivals hall (after passport control and baggage claim) holding a name board with your name. Send us your flight number via WhatsApp in advance so we can track your arrival.",
          },
        },
        {
          "@type": "Question",
          name: "What if my flight is delayed?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We track your flight by flight number, so the driver arrives based on actual landing time. 60 minutes of free waiting after landing is included for passport control and baggage.",
          },
        },
        {
          "@type": "Question",
          name: "How long is the drive from Manas Airport to Bishkek city?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Approximately 30–40 minutes, ~25–30 km. Travel time depends on traffic — morning and evening rush hours can add 10–20 minutes.",
          },
        },
        {
          "@type": "Question",
          name: "Do you provide child seats?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, child seats and booster seats are available on request — please mention age and weight when booking via WhatsApp. There is no extra charge.",
          },
        },
        {
          "@type": "Question",
          name: "Can you meet night flights?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes, we operate 24/7 including night arrivals. A night surcharge of +15% applies for pickups between 22:00 and 06:00.",
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
      <ManasAirportToBishkek initialLang="en" />
    </>
  );
}
