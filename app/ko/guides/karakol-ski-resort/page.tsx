import type { Metadata } from "next";
import KarakolSkiResortGuide from "../../../../src/views/KarakolSkiResortGuide";

export const metadata: Metadata = {
  title: "카라콜 스키장 완벽 가이드 2025 | 리프트권 가격·설질·교통",
  description:
    "키르기스스탄 카라콜 스키장 완벽 가이드: 리프트권 가격($15–25), 설질, 스키 시즌, 비슈케크·알마티에서 가는 방법. 개인 차량 이동 세단 $146부터.",
  keywords: [
    "카라콜 스키장",
    "카라콜 스키장 가이드",
    "키르기스스탄 스키",
    "중앙아시아 최고 스키 리조트",
    "카라콜 리프트권 가격",
    "카라콜 스키장 가는 방법",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ko/guides/karakol-ski-resort",
    languages: {
      "x-default": "https://nomad-transfer.com/guides/karakol-ski-resort",
      en: "https://nomad-transfer.com/guides/karakol-ski-resort",
      ru: "https://nomad-transfer.com/ru/guides/karakol-ski-resort",
      ko: "https://nomad-transfer.com/ko/guides/karakol-ski-resort",
    },
  },
  openGraph: {
    title: "카라콜 스키장 완벽 가이드 2025 | 중앙아시아 최고 스키 리조트",
    description:
      "리프트권 $15–25/일, 고도 2300–3050 m의 파우더 눈, 현대적 리프트. 비슈케크/마나스에서 이동 세단 $146부터.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "카라콜 스키장 — 키르기스스탄",
      },
    ],
    type: "article",
    url: "https://nomad-transfer.com/ko/guides/karakol-ski-resort",
    siteName: "Nomad Transfer",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "카라콜 스키장 완벽 가이드 2025",
    description: "중앙아시아 최고 스키 리조트. 리프트권 $15–25. 이동 $146부터.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "카라콜 스키장 가이드", "item": "https://nomad-transfer.com/ko/guides/karakol-ski-resort" },
      ],
    },
    {
      "@type": "SkiResort",
      "name": "카라콜 스키장",
      "description": "키르기스스탄 최고의 스키 리조트. 현대적 리프트, 우수한 파우더 눈, 고도 2300–3050 m의 모든 레벨 슬로프.",
      "url": "https://nomad-transfer.com/ko/guides/karakol-ski-resort",
      "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "카라콜",
        "addressRegion": "이식쿨 주",
        "addressCountry": "KG",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.4906",
        "longitude": "78.3931",
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "17:00",
      },
      "priceRange": "$15–$25",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "카라콜 스키장 리프트권 가격은 얼마인가요?",
          "acceptedAnswer": { "@type": "Answer", "text": "1일 리프트권은 시즌에 따라 약 $15–25입니다. 복수일 패스는 할인된 가격으로 제공됩니다." },
        },
        {
          "@type": "Question",
          "name": "비슈케크에서 카라콜 스키장까지 어떻게 가나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "가장 편리한 방법은 개인 차량 이동입니다(4–5시간, 400 km). Nomad Transfer는 세단 $146부터, 밴 $177부터(차량당) 고정 가격으로 한국어 지원과 마나스 공항 미팅 서비스를 제공합니다." },
        },
        {
          "@type": "Question",
          "name": "카라콜의 스키 시즌은 언제인가요?",
          "acceptedAnswer": { "@type": "Answer", "text": "12월부터 3월까지이며, 최상의 눈 상태는 1월과 2월입니다. 고도 2300–3050 m는 안정적인 적설량을 보장합니다." },
        },
        {
          "@type": "Question",
          "name": "카라콜 스키장은 초보자에게 적합한가요?",
          "acceptedAnswer": { "@type": "Answer", "text": "네! 초보자를 위한 완만한 슬로프와 한국어 가능 강사가 있습니다. 붐비지 않는 슬로프는 학습에 이상적입니다." },
        },
        {
          "@type": "Question",
          "name": "카라콜에서 스키 장비를 렌탈할 수 있나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "네, 베이스에서 부츠, 스키/보드, 폴 포함 하루 $10–20에 렌탈 가능합니다." },
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
      <KarakolSkiResortGuide initialLang="ko" />
    </>
  );
}
