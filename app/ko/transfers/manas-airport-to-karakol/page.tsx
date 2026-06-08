import type { Metadata } from "next";
import ManasToKarakol from "../../../../src/views/ManasToKarakol";

export const metadata: Metadata = {
  title: "마나스 공항 (FRU) → 카라콜 이동 | 24시간 환영 | $146부터",
  description:
    "마나스(FRU) → 카라콜 프라이빗 공항 이동. 도착장에서 이름판 환영, 60분 무료 대기, 항공편 추적. 세단 $146, 밴 $177, 버스 $275. WhatsApp 24시간.",
  keywords: [
    "마나스 공항 이동",
    "FRU 카라콜",
    "비슈케크 공항 카라콜",
    "마나스 공항 택시",
    "카라콜 공항 픽업",
    "이식쿨 공항 이동",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ko/transfers/manas-airport-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
      en: "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/manas-airport-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/manas-airport-to-karakol",
    },
  },
  openGraph: {
    title: "마나스 공항 (FRU) → 카라콜 프라이빗 이동 | 24시간 환영",
    description: "마나스 도착장에서 이름판 환영, 60분 무료 대기, 항공편 추적. 세단 $146, 밴 $177. 카라콜 호텔까지.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "마나스 공항에서 카라콜로 가는 이동",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ko/transfers/manas-airport-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "마나스 공항 → 카라콜 이동",
    description: "이름판 환영. 세단 $146, 밴 $177. 24시간.",
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
        { "@type": "ListItem", "position": 2, "name": "전용 이동", "item": "https://nomad-transfer.com/#transfers" },
        { "@type": "ListItem", "position": 3, "name": "마나스 공항 → 카라콜", "item": "https://nomad-transfer.com/ko/transfers/manas-airport-to-karakol" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "마나스 공항(FRU)→카라콜 프라이빗 공항 이동",
      "description":
        "마나스 국제공항(FRU)에서 카라콜까지 프라이빗 공항 이동. 도착장 이름판 환영, 60분 무료 대기, 항공편 추적. 24시간 도어 투 도어 서비스.",
      "url": "https://nomad-transfer.com/ko/transfers/manas-airport-to-karakol",
      "touristType": "공항 이동, 프라이빗",
      "duration": "PT5H",
      "offers": [
        { "@type": "Offer", "name": "세단 (최대 4명)", "price": "146", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "미니밴 (6-7명)", "price": "177", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "버스 (최대 30명)", "price": "275", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfer",
        "telephone": "+996557081821",
        "url": "https://nomad-transfer.com",
        "areaServed": ["키르기스스탄"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "마나스 공항에서 카라콜까지 이동 요금은 얼마인가요?",
          "acceptedAnswer": { "@type": "Answer", "text": "세단(최대 4명) $146, 미니밴(6-7명) $177, 버스(최대 30명) $275입니다. 차량당 가격이며 야간(22:00~06:00) 할증 +15%. 연료, 이름판 환영, 60분 무료 대기 포함." },
        },
        {
          "@type": "Question",
          "name": "마나스 공항에서 기사를 어떻게 만나나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "도착장(여권 심사 및 수하물 찾은 후)에서 기사가 이름판을 들고 기다립니다. WhatsApp으로 항공편 번호를 미리 보내주시면 도착을 추적해드립니다." },
        },
        {
          "@type": "Question",
          "name": "항공편이 지연되면 어떻게 되나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "항공편 번호로 비행을 추적해 실제 착륙 시간에 맞춰 기사가 도착합니다. 착륙 후 60분 무료 대기 포함 (여권 심사 및 수하물 시간)." },
        },
        {
          "@type": "Question",
          "name": "마나스에서 카라콜까지 얼마나 걸리나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "약 5시간, ~410km. 비슈케크 중심을 우회해 북쪽 고속도로와 이식쿨 북쪽 해안을 따라 카라콜로 이동합니다. 국경 통과 없음." },
        },
        {
          "@type": "Question",
          "name": "어린이 카시트가 있나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "네, 어린이 카시트 및 부스터 시트는 요청 시 제공됩니다 — WhatsApp 예약 시 나이와 체중을 알려주세요. 추가 요금 없음." },
        },
        {
          "@type": "Question",
          "name": "야간 항공편도 환영하나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "네, 야간 도착 포함 24시간 운영합니다. 22:00~06:00 픽업은 +15% 야간 할증이 적용됩니다." },
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
      <ManasToKarakol initialLang="ko" />
    </>
  );
}
