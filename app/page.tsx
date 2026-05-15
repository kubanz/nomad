import type { Metadata } from "next";
import App from "../src/App";

export const metadata: Metadata = {
  title: "Nomad Transfer — Private Transfers & Tours in Kyrgyzstan | Bishkek, Karakol, Issyk-Kul",
  description:
    "Private transfers from Manas Airport, Bishkek, and Almaty to Karakol. Fixed price per car — sedan from $135, minivan from $155. WhatsApp reply in 1–2 min.",
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
  "name": "Nomad Transfer",
  "description": "Private transfers and day tours in Kyrgyzstan. Routes: Manas Airport, Bishkek, Almaty to Karakol.",
  "url": "https://nomad-transfer.com",
  "telephone": "+996552291808",
  "areaServed": ["Kyrgyzstan", "Kazakhstan"],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Bank Transfer",
  "serviceType": "Private Transfer",
  "sameAs": [],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App />
    </>
  );
}
