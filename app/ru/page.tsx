import type { Metadata } from "next";
import App from "../../src/App";

export const metadata: Metadata = {
  title: "Частные трансферы и туры по Кыргызстану | Nomad Transfer",
  description:
    "Частные трансферы из аэропорта Манас, Бишкека и Алматы в Каракол. Фиксированная цена за машину — седан от $136, минивэн от $167. Ответ в WhatsApp за 1–2 минуты.",
  keywords: [
    "частный трансфер Кыргызстан",
    "трансфер из аэропорта Манас",
    "трансфер Бишкек Каракол",
    "трансфер Алматы Каракол",
    "трансфер Иссык-Куль",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ru",
    languages: {
      "x-default": "https://nomad-transfer.com/",
      en: "https://nomad-transfer.com/",
      ru: "https://nomad-transfer.com/ru",
      ko: "https://nomad-transfer.com/ko",
    },
  },
  openGraph: {
    title: "Nomad Transfer — Частные трансферы и туры по Кыргызстану",
    description:
      "Частные трансферы из аэропорта Манас, Бишкека и Алматы в Каракол. Фиксированная цена за машину. Ответ в WhatsApp за 1–2 минуты.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Nomad Transfer — частные трансферы по Кыргызстану",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ru",
    siteName: "Nomad Transfer",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Transfer — Частные трансферы по Кыргызстану",
    description: "Частные трансферы из аэропорта Манас, Бишкека и Алматы в Каракол. Фиксированная цена за машину.",
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
  "description": "Частные трансферы и однодневные туры по Кыргызстану. Маршруты: аэропорт Манас, Бишкек, Алматы — Каракол.",
  "url": "https://nomad-transfer.com",
  "telephone": "+996557081821",
  "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
  "areaServed": ["Kyrgyzstan", "Kazakhstan"],
  "knowsLanguage": ["en", "ru", "ko"],
  "priceRange": "$$",
  "currenciesAccepted": "USD",
  "paymentAccepted": "Cash, Bank Transfer",
  "serviceType": "Private Transfer",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <App initialLang="ru" />
    </>
  );
}
