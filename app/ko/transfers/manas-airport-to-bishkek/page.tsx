import type { Metadata } from "next";
import ManasAirportToBishkek from "../../../../src/views/ManasAirportToBishkek";

export const metadata: Metadata = {
  title: "마나스 공항 (FRU) → 비슈케크 이동 | 24시간 Meet & Greet | $25부터",
  description:
    "마나스 공항(FRU)에서 비슈케크 시내까지 프라이빗 이동. 도착장 이름판 환영, 60분 무료 대기, 항공편 추적. 세단 $25, 미니밴 $30. 고정 요금. WhatsApp 24시간.",
  keywords: [
    "마나스 공항 비슈케크 이동",
    "FRU 비슈케크 트랜스퍼",
    "비슈케크 공항 픽업",
    "마나스 공항 택시",
    "키르기스스탄 공항 이동",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ko/transfers/manas-airport-to-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
      en: "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
      ru: "https://nomad-transfer.com/ru/transfers/manas-airport-to-bishkek",
      ko: "https://nomad-transfer.com/ko/transfers/manas-airport-to-bishkek",
    },
  },
  openGraph: {
    title: "마나스 공항 (FRU) → 비슈케크 프라이빗 이동 | 24시간 Meet & Greet",
    description:
      "마나스 도착장에서 이름판 환영, 60분 무료 대기, 항공편 추적. 세단 $25, 미니밴 $30. 비슈케크 호텔까지 도어 투 도어.",
    type: "website",
    url: "https://nomad-transfer.com/ko/transfers/manas-airport-to-bishkek",
  },
  twitter: {
    card: "summary_large_image",
    title: "마나스 공항 (FRU) → 비슈케크 이동",
    description: "이름판 환영. 세단 $25, 미니밴 $30. 24시간 공항 픽업.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈",    item: "https://nomad-transfer.com/" },
        { "@type": "ListItem", position: 2, name: "이동",  item: "https://nomad-transfer.com/#transfers" },
        { "@type": "ListItem", position: 3, name: "마나스 공항 → 비슈케크", item: "https://nomad-transfer.com/ko/transfers/manas-airport-to-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "마나스 공항 (FRU) → 비슈케크 프라이빗 이동",
      description:
        "마나스 국제공항(FRU)에서 비슈케크 시내까지 도착장 환영, 60분 무료 대기, 항공편 추적 포함 프라이빗 이동. 24시간 도어 투 도어 서비스.",
      url: "https://nomad-transfer.com/ko/transfers/manas-airport-to-bishkek",
      touristType: "공항 이동, 프라이빗",
      duration: "PT40M",
      offers: [
        { "@type": "Offer", name: "세단 (최대 4명)",  price: "25", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        { "@type": "Offer", name: "미니밴 (6-7명)", price: "30", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      ],
      provider: {
        "@type": "LocalBusiness",
        name: "Nomad Transfer",
        telephone: "+996552291808",
        url: "https://nomad-transfer.com",
        areaServed: ["키르기스스탄"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "마나스 공항에서 비슈케크까지 이동 요금은 얼마인가요?",
          acceptedAnswer: { "@type": "Answer", text: "세단(최대 4명) $25, 미니밴(6-7명) $30. 차량당 요금(인당 아님). 야간 할증 22:00–06:00 +15%. 연료, 도착장 환영, 60분 무료 대기 포함." },
        },
        {
          "@type": "Question",
          name: "마나스 공항에서 기사를 어떻게 찾나요?",
          acceptedAnswer: { "@type": "Answer", text: "기사가 입국장(여권 심사 및 수하물 수취 후)에서 이름판을 들고 기다립니다. 사전에 WhatsApp으로 항공편 번호를 보내주시면 도착을 추적합니다." },
        },
        {
          "@type": "Question",
          name: "항공편이 지연되면 어떻게 되나요?",
          acceptedAnswer: { "@type": "Answer", text: "항공편 번호로 비행을 추적하므로 실제 착륙 시간 기준으로 기사가 대기합니다. 60분 무료 대기가 포함되어 있습니다." },
        },
        {
          "@type": "Question",
          name: "마나스 공항에서 비슈케크까지 얼마나 걸리나요?",
          acceptedAnswer: { "@type": "Answer", text: "약 30–40분, ~25–30km. 교통 상황에 따라 달라지며 출퇴근 시간대에는 10–20분 추가될 수 있습니다." },
        },
        {
          "@type": "Question",
          name: "야간 항공편도 픽업 가능한가요?",
          acceptedAnswer: { "@type": "Answer", text: "네, 야간 항공편 포함 24시간 운영합니다. 22:00~06:00 픽업에는 야간 할증 +15%가 적용됩니다." },
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
      <ManasAirportToBishkek initialLang="ko" />
    </>
  );
}
