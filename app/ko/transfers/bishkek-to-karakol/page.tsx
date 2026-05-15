import type { Metadata } from "next";
import BishkekToKarakol from "../../../../src/views/BishkekToKarakol";

export const metadata: Metadata = {
  title: "비슈케크 카라콜 전용 이동 | 부라나 탑 & 붐 협곡 | $125부터 | Nomad Transfer",
  description:
    "이식쿨 북쪽 해안 경유 비슈케크→카라콜 프라이빗 이동. 선택 정류장: 부라나 탑(+$15), 붐 협곡(+$10), 촐폰아타(+$20). 세단 $125, 밴 $145. WhatsApp 1~2분 내 답변.",
  keywords: [
    "비슈케크 카라콜 이동",
    "비슈케크 카라콜 전용 차량",
    "부라나 탑 정류장",
    "붐 협곡 이식쿨",
    "비슈케크 카라콜 당일 투어",
    "nomad transfer 키르기스스탄",
  ],
  openGraph: {
    title: "비슈케크 → 카라콜 이동 | 이식쿨 북쪽 해안",
    description:
      "부라나 탑, 붐 협곡, 이식쿨을 지나는 경치 좋은 북쪽 해안 노선. 세단 $125, 밴 $145. 프라이빗 이동, 그룹 투어 아님.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "비슈케크 카라콜 이식쿨 북쪽 해안 이동",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ko/transfers/bishkek-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "비슈케크 → 카라콜 프라이빗 이동",
    description: "프라이빗 이동. 세단 $125, 밴 $145.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/ko/transfers/bishkek-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-karakol",
      en: "https://nomad-transfer.com/transfers/bishkek-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-karakol",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "name": "비슈케크 카라콜 이식쿨 경유 프라이빗 이동",
      "description":
        "이식쿨 북쪽 해안 경유 비슈케크→카라콜 프라이빗 1일 이동. 선택 정류장: 부라나 탑(+$15), 붐 협곡(+$10), 촐폰아타(+$20).",
      "url": "https://nomad-transfer.com/ko/transfers/bishkek-to-karakol",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "세단 (최대 4명)",
          "price": "125",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "미니밴 (6-7명)",
          "price": "145",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "버스 (최대 30명)",
          "price": "265",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfers KG",
        "telephone": "+996552291808",
        "url": "https://nomad-transfer.com",
        "areaServed": ["키르기스스탄"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "비슈케크에서 카라콜까지 전용 이동 요금은 얼마인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "세단(최대 4명) $125, 미니밴(6-7명) $145, 버스(최대 30명) $265입니다. 인당이 아닌 차량당 가격이며, 연료 및 호텔 픽업/하차가 포함됩니다.",
          },
        },
        {
          "@type": "Question",
          "name": "카라콜 가는 길에 부라나 탑에 들를 수 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네. 부라나 탑은 10세기 첨탑으로 비슈케크–카라콜 도로 바로 옆에 위치합니다. +$15(세단) 또는 +$20(밴)으로 추가할 수 있습니다. WhatsApp 예약 시 말씀해 주세요.",
          },
        },
        {
          "@type": "Question",
          "name": "비슈케크에서 카라콜까지 얼마나 걸리나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "정류장 없이 약 6-7시간(~360km)입니다. 부라나 탑과 붐 협곡 포함 시 7-8시간. 국경 통과가 없어 연중 이용 가능합니다.",
          },
        },
        {
          "@type": "Question",
          "name": "비슈케크–카라콜 이동은 연중 가능한가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네. 비슈케크–카라콜 노선은 이식쿨 북쪽 해안 도로를 따라 연중 운영됩니다. 국경 통과가 없어 모든 계절에 이용 가능합니다.",
          },
        },
        {
          "@type": "Question",
          "name": "붐 협곡은 무엇이며 들를 가치가 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "붐 협곡은 추 강이 암벽을 뚫고 흐르는 극적인 협곡으로, 비슈케크에서 약 80km 동쪽에 있습니다. 20-30분 정류장이며 사진 촬영에 매우 좋습니다. +$10(세단) 또는 +$15(밴)으로 추가하세요.",
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
      <BishkekToKarakol initialLang="ko" />
    </>
  );
}
