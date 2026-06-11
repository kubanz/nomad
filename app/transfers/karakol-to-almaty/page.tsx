import type { Metadata } from "next";
import KarakolToAlmaty from "../../../src/views/KarakolToAlmaty";

export const metadata: Metadata = {
  title: "Karakol to Almaty Private Transfer | Taxi & Shuttle from $235 | Border Crossing | Nomad Transfer",
  description:
    "Book a private transfer from Karakol to Almaty via the Karkara–Kegen border. Hotel pickup, border guidance, fixed prices from $235, and English-speaking WhatsApp support.",
  keywords: [
    "karakol to almaty transfer",
    "karakol almaty taxi",
    "karakol almaty private car",
    "karakol to almaty shuttle",
    "karakol almaty driver",
    "karkara border crossing",
    "kyrgyzstan to kazakhstan",
    "issyk-kul to almaty",
    "karakol almaty day trip",
    "private driver kyrgyzstan",
    "english speaking driver kyrgyzstan",
    "nomad transfer kyrgyzstan",
  ],
  openGraph: {
    title: "Karakol to Almaty Private Transfer | Karkara Border Crossing",
    description:
      "Border crossing transfer via Karkara. Sedan $235, Minivan $275. Private transfer with border assistance.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Karakol to Almaty transfer via Karkara border",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/transfers/karakol-to-almaty",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karakol to Almaty Private Transfer",
    description: "Private transfer via Karkara border. Sedan $235, Minivan $275.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/transfers/karakol-to-almaty",
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
        { "@type": "ListItem", "position": 3, "name": "Karakol to Almaty", "item": "https://nomad-transfer.com/transfers/karakol-to-almaty" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Karakol to Almaty Private Transfer via Karkara Border",
      "description":
        "Private transfer from Karakol to Almaty via the Karkara–Kegen border crossing, with hotel pickup, border guidance, and English-speaking support.",
      "url": "https://nomad-transfer.com/transfers/karakol-to-almaty",
      "touristType": "Transfer, Border Crossing",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Sedan (up to 4 passengers)",
          "price": "235",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Minivan (6-7 passengers)",
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
        "areaServed": ["Kyrgyzstan", "Kazakhstan"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "How much does a private transfer from Karakol to Almaty cost?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sedan (up to 4 passengers) $235, Minivan (6-7 passengers) $275. Price is per vehicle, not per person. Includes fuel, hotel pickup/drop-off, and border crossing assistance.",
          },
        },
        {
          "@type": "Question",
          "name": "How long does the drive from Karakol to Almaty take?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Allow approximately 7-8 hours for the journey, including the Karkara–Kegen border crossing. Travel and processing times depend on traffic, weather, and the border queue.",
          },
        },
        {
          "@type": "Question",
          "name": "Which border crossing is used for Karakol to Almaty transfer?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "The direct route normally uses the Karkara–Kegen checkpoint. Operating dates and hours can change, so the available crossing and route are confirmed before departure.",
          },
        },
        {
          "@type": "Question",
          "name": "Do I need a visa for the Karkara border crossing?",
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
      <KarakolToAlmaty initialLang="en" />
    </>
  );
}
