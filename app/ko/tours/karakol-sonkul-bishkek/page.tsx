import type { Metadata } from "next";
import KarakolSonkulBishkekClient from "../../../../src/views/KarakolSonkulBishkekClient";

export const metadata: Metadata = {
  title: "카라콜 → 손쿨 → 비슈케크 2일 투어 | 프라이빗 | Nomad Transfer",
  description:
    "카라콜에서 비슈케크까지 손쿨 고산 호수(3,016m), 제티-오구즈 협곡, 스카즈카 협곡, 부라나 탑 경유 2일 프라이빗 투어. 세단 $415(최대 4명), 밴 $465(6-7명).",
  keywords: [
    "카라콜 비슈케크 투어",
    "손쿨 호수 투어",
    "키르기스스탄 프라이빗 투어",
    "키르기스스탄 2일 투어",
    "스카즈카 협곡",
    "부라나 탑",
    "제티-오구즈",
    "nomad transfer",
  ],
  openGraph: {
    title: "카라콜 → 손쿨 → 비슈케크 2일 프라이빗 투어",
    description:
      "협곡, 폭포, 캐니언, 고산 호수. 손쿨에서 유르트 숙박. 세단 $415(최대 4명), 밴 $465(6-7명).",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "손쿨 호수, 키르기스스탄",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ko/tours/karakol-sonkul-bishkek",
    siteName: "Nomad Transfer",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "카라콜 → 손쿨 → 비슈케크 2일 투어",
    description: "프라이빗 2일 투어. 세단 $415, 밴 $465.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/ko/tours/karakol-sonkul-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
      en: "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
      ru: "https://nomad-transfer.com/ru/tours/karakol-sonkul-bishkek",
      ko: "https://nomad-transfer.com/ko/tours/karakol-sonkul-bishkek",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "투어", "item": "https://nomad-transfer.com/#tours" },
        { "@type": "ListItem", "position": 3, "name": "카라콜 → 손쿨 → 비슈케크", "item": "https://nomad-transfer.com/ko/tours/karakol-sonkul-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "카라콜에서 손쿨 호수 경유 비슈케크 프라이빗 투어",
      "description":
        "카라콜에서 비슈케크까지 제티-오구즈 협곡, 바르스쿤 폭포, 스카즈카 협곡, 손쿨 고산 호수(유르트 숙박), 부라나 탑 경유 2일 프라이빗 투어.",
      "url": "https://nomad-transfer.com/ko/tours/karakol-sonkul-bishkek",
      "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "touristType": "어드벤처, 문화, 자연",
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "카라콜 — 호텔 픽업" },
          { "@type": "ListItem", "position": 2, "name": "제티-오구즈 — 붉은 사암 절벽" },
          { "@type": "ListItem", "position": 3, "name": "바르스쿤 — 폭포와 가가린 기념비" },
          { "@type": "ListItem", "position": 4, "name": "스카즈카 협곡" },
          { "@type": "ListItem", "position": 5, "name": "손쿨 호수 — 유르트 캠프 숙박 (3,016m)" },
          { "@type": "ListItem", "position": 6, "name": "코치코르 — 고원 하강" },
          { "@type": "ListItem", "position": 7, "name": "부라나 탑 — 고대 미나렛" },
          { "@type": "ListItem", "position": 8, "name": "비슈케크 — 숙소 하차" },
        ],
      },
      "duration": "P2D",
      "offers": [
        {
          "@type": "Offer",
          "name": "세단 (최대 4명)",
          "price": "415",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "미니밴 (6-7명)",
          "price": "465",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfer",
        "telephone": "+996556080714",
        "url": "https://nomad-transfer.com",
        "areaServed": "키르기스스탄",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "카라콜에서 비슈케크 투어 가격은 얼마인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "세단(최대 4명) $415, 미니밴(6-7명) $465입니다. 차량당 가격이며 모든 정류장, 손쿨 유르트 숙박, 연료, 한국어 지원이 포함됩니다.",
          },
        },
        {
          "@type": "Question",
          "name": "손쿨 호수를 방문하기 가장 좋은 계절은 언제인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "6월부터 9월까지가 최적 시즌입니다. 손쿨(3,016m)로 가는 도로가 열리고 유르트 캠프가 운영됩니다. 겨울(10월~5월)에는 호수가 얼어 접근이 불가능합니다.",
          },
        },
        {
          "@type": "Question",
          "name": "유르트 숙박이 가격에 포함되어 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "손쿨 유르트 캠프 숙박은 기본 이동 가격에 포함되지 않습니다. 현지 유르트 캠프와 협력하여 추가 비용으로 숙박과 저녁 식사를 준비해 드릴 수 있습니다.",
          },
        },
        {
          "@type": "Question",
          "name": "손쿨 호수에서 휴대폰 신호가 잡히나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "손쿨 호수에는 휴대폰 신호나 인터넷이 없습니다. 고도 3,016m의 외딴 고원입니다. 출발 전 오프라인 지도를 다운로드하시길 권장합니다.",
          },
        },
        {
          "@type": "Question",
          "name": "취소 정책은 어떻게 되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "출발 24시간 전까지 무료 취소 가능합니다. 24시간 미만 취소 시 50%가 부과될 수 있습니다. WhatsApp +996 552 291 808으로 문의하세요.",
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
      <KarakolSonkulBishkekClient initialLang="ko" />
    </>
  );
}
