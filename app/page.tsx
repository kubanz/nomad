import type { Metadata } from "next";
import App from "../src/App";

export const metadata: Metadata = {
  title: "Private Transfers & Tours in Kyrgyzstan | Nomad Transfer",
  description:
    "Private transfers from Manas Airport, Bishkek, and Almaty to Karakol. Fixed price per car — sedan from $136, minivan from $167. WhatsApp reply in 1–2 min.",
  keywords: [
    "private transfer Kyrgyzstan",
    "Manas airport transfer",
    "Bishkek to Karakol transfer",
    "Almaty to Karakol transfer",
    "Issyk-Kul transfer",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/",
    languages: {
      "x-default": "https://nomad-transfer.com/",
      en: "https://nomad-transfer.com/",
      ru: "https://nomad-transfer.com/ru",
      ko: "https://nomad-transfer.com/ko",
    },
  },
  openGraph: {
    title: "Nomad Transfer — Private Transfers & Tours in Kyrgyzstan",
    description:
      "Private transfers from Manas Airport, Bishkek, and Almaty to Karakol. Fixed price per car. WhatsApp reply in 1–2 min.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Nomad Transfer — Private Transfers in Kyrgyzstan",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/",
    siteName: "Nomad Transfer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Transfer — Private Transfers in Kyrgyzstan",
    description: "Private transfers from Manas Airport, Bishkek, and Almaty to Karakol. Fixed price per car.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nomad-transfer.com/#business",
  "name": "Nomad Transfer",
  "description": "Private transfers and day tours in Kyrgyzstan. Routes: Manas Airport, Bishkek, Almaty to Karakol. Fixed price per car, English-speaking drivers.",
  "url": "https://nomad-transfer.com",
  "telephone": "+996552291808",
  "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
  "areaServed": [
    { "@type": "Country", "name": "Kyrgyzstan" },
    { "@type": "Country", "name": "Kazakhstan" },
  ],
  "knowsLanguage": ["en", "ru", "ko"],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Bank Transfer",
  "openingHours": "Mo-Su 00:00-24:00",
  "sameAs": ["https://t.me/nomadtransfer"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "4",
    "bestRating": "5",
    "worstRating": "1",
  },
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Samuel Dow Thomson" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Transfer from Almaty to Karakol. Communication was smooth and fast. They picked us up right where we needed and got us again exactly where we needed. 100% recommended!",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Ana Isa Correia" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "I used their transfer service from Bishkek airport to Karakol. They were always prompt to respond, super helpful and nice. The car was spacious, comfortable and warm, and the driver was good. The fees are according to the website. You can pay by money transfer or cash when you arrive. I really enjoyed it and will use their services again. I recommend for anyone coming.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Kasper Valtonen" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Great customer service throughout from reserving the trip to getting to destination! Really easy way of getting from Almaty to Karakol and seeing the Charyn Canyon.",
    },
    {
      "@type": "Review",
      "author": { "@type": "Person", "name": "Madina Z" },
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
      "reviewBody": "Excellent service! Low prices, experienced drivers, comfortable cars, clients oriented service. We're pleased with this company.",
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Private Transfer Routes",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bishkek to Karakol Transfer", "url": "https://nomad-transfer.com/transfers/bishkek-to-karakol" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Almaty to Karakol Transfer", "url": "https://nomad-transfer.com/transfers/almaty-to-karakol" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Manas Airport to Karakol Transfer", "url": "https://nomad-transfer.com/transfers/manas-airport-to-karakol" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Almaty to Bishkek Transfer", "url": "https://nomad-transfer.com/transfers/almaty-to-bishkek" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bishkek to Cholpon-Ata Transfer", "url": "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Bishkek to Osh Transfer", "url": "https://nomad-transfer.com/transfers/bishkek-to-osh" } },
    ],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App initialLang="en" />
    </>
  );
}
