import type { Metadata } from "next";
import AlmatyToBishkekGuide from "../../../../src/views/AlmatyToBishkekGuide";

export const metadata: Metadata = {
  title: "알마티에서 비슈케크까지 여행 가이드 2025 | 국경 통과, 거리 및 팁",
  description:
    "알마티(카자흐스탄)에서 비슈케크(키르기스스탄)까지 완전 가이드: 약 240km, 약 3시간, 코르다이 국경(24시간 운영). 교통 옵션 비교, 국경 통과 팁, 비자 정보. 프라이빗 이동 $90부터.",
  keywords: [
    "알마티 비슈케크 여행 가이드",
    "알마티에서 비슈케크 가는 방법",
    "알마티 비슈케크 자동차",
    "코르다이 국경 통과 방법",
    "알마티 비슈케크 거리",
    "알마티 비슈케크 이동",
    "카자흐스탄 키르기스스탄 국경",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ko/guides/almaty-to-bishkek-travel-guide",
    languages: {
      "x-default": "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
      en: "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
      ru: "https://nomad-transfer.com/ru/guides/almaty-to-bishkek-travel-guide",
      ko: "https://nomad-transfer.com/ko/guides/almaty-to-bishkek-travel-guide",
    },
  },
  openGraph: {
    title: "알마티 → 비슈케크 여행 가이드 2025 | 코르다이 국경 및 교통 옵션",
    description:
      "알마티에서 비슈케크까지: 거리, 국경 통과 가이드, 비자 요건, 선택 정류장. 프라이빗 이동 차량당 $90부터.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "알마티에서 비슈케크 여행 가이드",
      },
    ],
    type: "article",
    url: "https://nomad-transfer.com/ko/guides/almaty-to-bishkek-travel-guide",
    siteName: "Nomad Transfer",
    locale: "ko_KR",
  },
  twitter: {
    card: "summary_large_image",
    title: "알마티 → 비슈케크 여행 가이드 2025",
    description: "약 240km, 약 3시간, 코르다이 국경 24시간. 프라이빗 이동 $90부터. 국경 팁 및 비자 정보.",
    images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "여행 가이드", "item": "https://nomad-transfer.com/ko/guides" },
        { "@type": "ListItem", "position": 3, "name": "알마티 → 비슈케크 여행 가이드", "item": "https://nomad-transfer.com/ko/guides/almaty-to-bishkek-travel-guide" },
      ],
    },
    {
      "@type": "Article",
      "headline": "알마티에서 비슈케크까지: 완전 여행 가이드 2025",
      "description": "알마티(카자흐스탄)에서 비슈케크(키르기스스탄)까지 여행하는 데 필요한 모든 정보 — 거리, 국경 통과, 교통 옵션, 실용적인 팁.",
      "url": "https://nomad-transfer.com/ko/guides/almaty-to-bishkek-travel-guide",
      "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Nomad Transfer",
        "url": "https://nomad-transfer.com",
      },
      "inLanguage": "ko",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "알마티에서 비슈케크까지 얼마나 걸리나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "약 3시간, 약 240km 거리입니다. 코르다이 국경에서 여권 심사로 20~40분이 포함됩니다." },
        },
        {
          "@type": "Question",
          "name": "알마티에서 비슈케크 가는 가장 좋은 방법은?",
          "acceptedAnswer": { "@type": "Answer", "text": "프라이빗 이동이 가장 편안한 옵션입니다 — 차량당 고정 가격(세단 $90, 미니밴 $115), 도어 투 도어, 영어 가능 기사, 국경 통과 안내 포함. 합승 택시는 저렴하지만 인원이 찰 때까지 기다려야 합니다." },
        },
        {
          "@type": "Question",
          "name": "코르다이 국경은 24시간 운영하나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "네. 카자흐스탄과 키르기스스탄 사이의 코르다이(Korday) 국경 검문소는 연중 24시간 운영합니다." },
        },
        {
          "@type": "Question",
          "name": "카자흐스탄에서 키르기스스탄으로 가려면 비자가 필요한가요?",
          "acceptedAnswer": { "@type": "Answer", "text": "한국을 포함한 대부분의 국적은 카자흐스탄과 키르기스스탄 모두 무비자로 30~90일 체류 가능합니다. 유효한 여권만 있으면 됩니다." },
        },
        {
          "@type": "Question",
          "name": "알마티에서 비슈케크까지 비용이 얼마나 드나요?",
          "acceptedAnswer": { "@type": "Answer", "text": "프라이빗 이동: 차량당 $90(세단) 또는 $115(미니밴). 합승 택시: 1인 $8~15. 버스: 1인 $5~10." },
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
      <AlmatyToBishkekGuide initialLang="ko" />
    </>
  );
}
