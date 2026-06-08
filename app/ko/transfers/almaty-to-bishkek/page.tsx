import type { Metadata } from "next";
import AlmatyToBishkek from "../../../../src/views/AlmatyToBishkek";

export const metadata: Metadata = {
  title: "알마티 → 비슈케크 프라이빗 이동 | 코르다이 국경 24시간 | $90부터",
  description:
    "알마티 → 비슈케크 프라이빗 이동, 코르다이 국경(24시간 운영) 경유. 차량당 고정 가격, 영어 가능 기사, 국경 안내. 세단 $90, 미니밴 $115, 버스 $220. ~3시간, ~240km. WhatsApp 1~2분 내 답변.",
  keywords: ["알마티 비슈케크 이동", "알마티 비슈케크 택시", "코르다이 국경", "카자흐스탄 키르기스스탄 이동", "알마티 비슈케크 차량", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/ko/transfers/almaty-to-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/almaty-to-bishkek",
      en: "https://nomad-transfer.com/transfers/almaty-to-bishkek",
      ru: "https://nomad-transfer.com/ru/transfers/almaty-to-bishkek",
      ko: "https://nomad-transfer.com/ko/transfers/almaty-to-bishkek",
    },
  },
  openGraph: {
    title: "알마티 → 비슈케크 프라이빗 이동 | 코르다이 국경 24시간",
    description: "고정 가격 프라이빗 이동. 세단 $90, 미니밴 $115. ~3시간.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "알마티 → 비슈케크 프라이빗 이동" }],
    type: "website",
    url: "https://nomad-transfer.com/ko/transfers/almaty-to-bishkek",
  },
  twitter: { card: "summary_large_image", title: "알마티 → 비슈케크 이동", description: "세단 $90, 미니밴 $115. 코르다이 24시간.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "전용 이동", "item": "https://nomad-transfer.com/#transfers" },
      { "@type": "ListItem", "position": 3, "name": "알마티 → 비슈케크", "item": "https://nomad-transfer.com/ko/transfers/almaty-to-bishkek" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "알마티 → 비슈케크 프라이빗 이동 (코르다이 국경 경유)",
      "description": "카자흐스탄-키르기스스탄 국경(코르다이) 경유 프라이빗 이동. 차량당 고정 가격, 영어 가능 기사, 국경 안내. ~240km, ~3시간.",
      "url": "https://nomad-transfer.com/ko/transfers/almaty-to-bishkek",
      "touristType": "이동, 국경 통과",
      "duration": "PT3H",
      "offers": [
        { "@type": "Offer", "name": "세단 (최대 4명)",   "price": "90",  "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "미니밴 (6-7명)",     "price": "115", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "버스 (최대 30명)",   "price": "220", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996552291808", "url": "https://nomad-transfer.com", "areaServed": ["카자흐스탄", "키르기스스탄"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "알마티에서 비슈케크까지 이동 요금은 얼마인가요?", "acceptedAnswer": { "@type": "Answer", "text": "세단(최대 4명) $90, 미니밴(6-7명) $115, 버스(최대 30명) $220. 차량당 가격. 연료, 알마티 호텔 픽업, 비슈케크 호텔 하차, 코르다이 국경 안내 포함." } },
      { "@type": "Question", "name": "알마티에서 비슈케크까지 얼마나 걸리나요?", "acceptedAnswer": { "@type": "Answer", "text": "약 3시간, ~240km. 코르다이 국경에서 여권 심사 20~40분 포함. 메인 M-39 고속도로를 따라 이동." } },
      { "@type": "Question", "name": "코르다이 국경은 24시간 운영하나요?", "acceptedAnswer": { "@type": "Answer", "text": "네. 카자흐스탄-키르기스스탄 코르다이 국경 검문소는 연중 24시간 운영. 알마티-비슈케크 여행객의 가장 일반적인 통과 지점." } },
      { "@type": "Question", "name": "국경 통과에 비자가 필요한가요?", "acceptedAnswer": { "@type": "Answer", "text": "한국 국민은 양국 모두 무비자 입국 가능(30~60일). EU, 미국, 영국, 일본도 무비자. 여권만 지참하면 됩니다." } },
      { "@type": "Question", "name": "알마티 공항(ALA)에서 픽업 가능한가요?", "acceptedAnswer": { "@type": "Answer", "text": "네. 알마티 국제공항(ALA), 호텔, 모든 주소에서 픽업 가능. WhatsApp 예약 시 항공편 번호나 주소를 알려주세요." } },
      { "@type": "Question", "name": "이식쿨이나 카라콜까지 연장 가능한가요?", "acceptedAnswer": { "@type": "Answer", "text": "네. 비슈케크에서 이식쿨, 촐폰아타, 카라콜까지 같은 기사와 차량으로 연장 가능. WhatsApp으로 통합 가격 문의하세요." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <AlmatyToBishkek initialLang="ko" />
  </>);
}
