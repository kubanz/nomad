import type { Metadata } from "next";
import BishkekToOsh from "../../../../src/views/BishkekToOsh";

export const metadata: Metadata = {
  title: "비슈케크 → 오쉬 프라이빗 이동 | 토오-아슈 고개 | $290부터",
  description:
    "비슈케크 → 오쉬 프라이빗 이동, 토오-아슈 고개(3,200m), 수사미르 계곡, 톡토굴 저수지 경유. 세단 $290, 미니밴 $340, 버스 $590. ~10~12시간, ~620km. 국내선 항공편의 경치 좋은 대안.",
  keywords: ["비슈케크 오쉬 이동", "비슈케크 오쉬 택시", "토오-아슈 고개", "톡토굴 저수지", "키르기스스탄 남부 이동", "오쉬 차량", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/ko/transfers/bishkek-to-osh",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-osh",
      en: "https://nomad-transfer.com/transfers/bishkek-to-osh",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-osh",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-osh",
    },
  },
  openGraph: {
    title: "비슈케크 → 오쉬 프라이빗 이동 | 산악 노선",
    description: "토오-아슈 고개, 수사미르 계곡, 톡토굴 저수지 경유. 세단 $290, 미니밴 $340.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "비슈케크 → 오쉬 프라이빗 이동" }],
    type: "website",
    url: "https://nomad-transfer.com/ko/transfers/bishkek-to-osh",
  },
  twitter: { card: "summary_large_image", title: "비슈케크 → 오쉬 이동", description: "세단 $290, 미니밴 $340. ~10~12시간.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "전용 이동", "item": "https://nomad-transfer.com/#transfers" },
      { "@type": "ListItem", "position": 3, "name": "비슈케크 → 오쉬", "item": "https://nomad-transfer.com/ko/transfers/bishkek-to-osh" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "비슈케크 → 오쉬 프라이빗 이동 (토오-아슈 고개 경유)",
      "description": "토오-아슈 고개(3,200m), 수사미르 계곡, 톡토굴 저수지 경유 비슈케크 → 오쉬 장거리 프라이빗 이동. ~620km, ~10~12시간. 국내선 항공편의 경치 좋은 대안.",
      "url": "https://nomad-transfer.com/ko/transfers/bishkek-to-osh",
      "touristType": "장거리 이동, 산악, 경치",
      "duration": "PT12H",
      "offers": [
        { "@type": "Offer", "name": "세단 (최대 4명)",   "price": "290", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "미니밴 (6-7명)",     "price": "340", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "버스 (최대 30명)",   "price": "590", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996556080714", "url": "https://nomad-transfer.com", "areaServed": ["키르기스스탄"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "비슈케크에서 오쉬까지 이동 요금은 얼마인가요?", "acceptedAnswer": { "@type": "Answer", "text": "세단(최대 4명) $290, 미니밴(6-7명) $340, 버스(최대 30명) $590. 차량당 가격. 연료, 비슈케크 호텔 픽업, 오쉬 호텔 하차, 수사미르 계곡 점심 정류장 포함." } },
      { "@type": "Question", "name": "비슈케크에서 오쉬까지 얼마나 걸리나요?", "acceptedAnswer": { "@type": "Answer", "text": "정류장 포함 약 10~12시간, ~620km. 노선은 3,200m의 토오-아슈 산악 고개를 넘어 수사미르 계곡을 따라가며 한 시간 넘게 톡토굴 저수지를 따라 이동합니다." } },
      { "@type": "Question", "name": "겨울에 비슈케크-오쉬 도로는 안전한가요?", "acceptedAnswer": { "@type": "Answer", "text": "도로는 연중 개방되지만 겨울철(12~2월)에는 경험 많은 기사와 겨울 타이어 필수. 산악 조건에 맞는 차량을 사용합니다. 악천후 시 안전을 위해 출발을 연기할 수 있습니다. 토오-아슈 고개에는 연중 눈이 내릴 수 있습니다." } },
      { "@type": "Question", "name": "왜 국내선 항공편이 아닌 이동을 선택해야 하나요?", "acceptedAnswer": { "@type": "Answer", "text": "국내선이 더 빠르지만(~1시간) 경치를 놓치게 됩니다: 토오-아슈 터널, 수사미르 계곡의 유르트 캠프, 청록빛 톡토굴 저수지. 운전은 비행으로는 불가능한 방식으로 키르기스스탄의 지리를 보여줍니다. 시간 여유가 있는 여행자에게 이상적." } },
      { "@type": "Question", "name": "잘랄-아바드나 우즈겐에 추가 정류장이 가능한가요?", "acceptedAnswer": { "@type": "Answer", "text": "네. 잘랄-아바드(광천 도시)와 우즈겐(11세기 미나렛과 왕실 묘소)은 인기 있는 선택적 정류장입니다. 추가: +$30/$40(잘랄-아바드) 또는 +$35/$45(우즈겐). 총 1~2시간 추가." } },
      { "@type": "Question", "name": "도중에 식사 정류장이 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "네. 수사미르 계곡(~2,200m)의 현지 카페에서 점심 정류장 — 보통 키르기스 요리(베쉬바르막, 만트, 라그만). 식사 비용은 이동 가격에 포함되지 않음." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <BishkekToOsh initialLang="ko" />
  </>);
}
