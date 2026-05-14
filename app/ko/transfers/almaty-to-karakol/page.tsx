import type { Metadata } from "next";
import AlmatyToKarakol from "../../../src/views/AlmatyToKarakol";

export const metadata: Metadata = {
  title: "알마티 카라콜 전용 이동 | 차린 협곡 정류장 | $235부터 | Nomad Transfer",
  description:
    "케겐 국경 경유 알마티→카라콜 프라이빗 이동. 선택 정류장: 차린 협곡(+$35), 카인디 호수, 콜사이 호수. 세단 $235, 밴 $275. WhatsApp 1~2분 내 답변.",
  keywords: [
    "알마티 카라콜 이동",
    "알마티 카라콜 전용 차량",
    "차린 협곡 정류장",
    "케겐 국경",
    "카자흐스탄 키르기스스탄 이동",
    "nomad transfer",
  ],
  openGraph: {
    title: "알마티 → 카라콜 케겐 경유 이동",
    description:
      "차린 협곡, 케겐 국경, 카르카라 계곡을 지나는 경치 좋은 산악 노선. 세단 $235, 밴 $275. 프라이빗 이동, 그룹 투어 아님.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "알마티 카라콜 케겐 산악 노선 이동",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ko/transfers/almaty-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "알마티 → 카라콜 케겐 경유 이동",
    description: "프라이빗 이동. 세단 $235, 밴 $275.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/ko/transfers/almaty-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/almaty-to-karakol",
      en: "https://nomad-transfer.com/transfers/almaty-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/almaty-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/almaty-to-karakol",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "name": "알마티 카라콜 케겐 경유 프라이빗 이동",
      "description":
        "케겐 산악 고개 경유 알마티→카라콜 프라이빗 1일 이동. 선택 정류장: 차린 협곡(+$35), 카인디 호수, 콜사이 호수.",
      "url": "https://nomad-transfer.com/ko/transfers/almaty-to-karakol",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "세단 (최대 4명)",
          "price": "235",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "미니밴 (6-7명)",
          "price": "275",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfers KG",
        "telephone": "+996552291808",
        "url": "https://nomad-transfer.com",
        "areaServed": ["키르기스스탄", "카자흐스탄"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "알마티에서 카라콜까지 전용 이동 요금은 얼마인가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "세단(최대 4명) $235, 미니밴(6-7명) $275입니다. 인당이 아닌 차량당 가격이며, 연료, 알마티 호텔 픽업, 카라콜 호텔 하차가 포함됩니다.",
          },
        },
        {
          "@type": "Question",
          "name": "알마티에서 카라콜 가는 길에 차린 협곡에 들를 수 있나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네. 차린 협곡은 알마티-카라콜 메인 도로에서 12km 떨어져 있습니다. +$35로 이 정류장을 추가할 수 있습니다. WhatsApp 예약 시 말씀해 주세요.",
          },
        },
        {
          "@type": "Question",
          "name": "케겐 국경은 연중 개방되나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "아니요. 케겐-카르카라 검문소는 5월~10월, 매일 오전 8시~오후 6시만 운영됩니다. 겨울(11월~4월)에는 비슈케크 경유 북쪽 노선으로 이동합니다.",
          },
        },
        {
          "@type": "Question",
          "name": "케겐 국경 통과에 여권이 필요한가요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "네. 카자흐스탄, 키르기스스탄 국민 및 모든 외국인에게 유효한 여권이 필요합니다. 드라이버가 국경 통과 절차를 안내해 드립니다.",
          },
        },
        {
          "@type": "Question",
          "name": "알마티에서 카라콜까지 얼마나 걸리나요?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "정류장 없이 약 6시간(~350km)입니다. 차린 협곡 정류장 포함 시 7-8시간. 국경 통과는 보통 20-40분 소요됩니다.",
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
      <AlmatyToKarakol initialLang="ko" />
    </>
  );
}
