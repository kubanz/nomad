import type { Metadata } from "next";
import App from "../../src/App";

export const metadata: Metadata = {
  title: "키르기스스탄 전용 차량 이동 및 투어 | Nomad Transfer",
  description:
    "마나스 공항, 비슈케크, 알마티에서 카라콜까지 프라이빗 이동. 차량당 고정 요금 — 세단 $136부터, 밴 $167부터. WhatsApp 1~2분 내 답변.",
  keywords: [
    "키르기스스탄 전용 차량",
    "마나스 공항 이동",
    "비슈케크 카라콜 이동",
    "알마티 카라콜 이동",
    "이식쿨 이동",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ko",
    languages: {
      "x-default": "https://nomad-transfer.com/",
      en: "https://nomad-transfer.com/",
      ru: "https://nomad-transfer.com/ru",
      ko: "https://nomad-transfer.com/ko",
    },
  },
  openGraph: {
    title: "Nomad Transfer — 키르기스스탄 전용 차량 이동 및 투어",
    description:
      "마나스 공항, 비슈케크, 알마티에서 카라콜까지 프라이빗 이동. 차량당 고정 요금. WhatsApp 1~2분 내 답변.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Nomad Transfer — 키르기스스탄 전용 차량 이동",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ko",
    siteName: "Nomad Transfer",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nomad Transfer — 키르기스스탄 전용 차량 이동",
    description: "마나스 공항, 비슈케크, 알마티에서 카라콜까지 프라이빗 이동. 차량당 고정 요금.",
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
  "description": "키르기스스탄 전용 차량 이동 및 당일 투어. 노선: 마나스 공항, 비슈케크, 알마티 — 카라콜.",
  "url": "https://nomad-transfer.com",
  "telephone": "+996556080714",
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
      <App initialLang="ko" />
    </>
  );
}
