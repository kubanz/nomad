import type { Metadata } from "next";
import BishkekToCholponAta from "../../../../src/views/BishkekToCholponAta";

export const metadata: Metadata = {
  title: "비슈케크 → 촐폰아타 프라이빗 이동 | 이식쿨 리조트 | $115부터",
  description:
    "비슈케크 → 촐폰아타 프라이빗 이동, 이식쿨 북쪽 해안 경유. 선택: 부라나 탑, 붐 협곡. 세단 $115, 미니밴 $145, 버스 $235. ~3~4시간, ~250km. WhatsApp 1~2분 내 답변.",
  keywords: ["비슈케크 촐폰아타 이동", "촐폰아타 택시", "이식쿨 리조트 이동", "비슈케크 해변 이식쿨", "촐폰아타 차량", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/ko/transfers/bishkek-to-cholpon-ata",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
      en: "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-cholpon-ata",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-cholpon-ata",
    },
  },
  openGraph: {
    title: "비슈케크 → 촐폰아타 프라이빗 이동 | 이식쿨 리조트",
    description: "이식쿨 북쪽 해안 프라이빗 이동. 세단 $115, 미니밴 $145. ~3~4시간.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "비슈케크 → 촐폰아타 이동" }],
    type: "website",
    url: "https://nomad-transfer.com/ko/transfers/bishkek-to-cholpon-ata",
  },
  twitter: { card: "summary_large_image", title: "비슈케크 → 촐폰아타 이동", description: "세단 $115, 미니밴 $145.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "홈", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "전용 이동", "item": "https://nomad-transfer.com/#transfers" },
      { "@type": "ListItem", "position": 3, "name": "비슈케크 → 촐폰아타", "item": "https://nomad-transfer.com/ko/transfers/bishkek-to-cholpon-ata" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "비슈케크 → 촐폰아타 프라이빗 이동",
      "description": "이식쿨 북쪽 해안 경유 비슈케크 → 촐폰아타 프라이빗 이동. 선택 정류장: 부라나 탑, 붐 협곡. ~250km, ~3~4시간.",
      "url": "https://nomad-transfer.com/ko/transfers/bishkek-to-cholpon-ata",
      "touristType": "이동, 해변 리조트",
      "duration": "PT4H",
      "offers": [
        { "@type": "Offer", "name": "세단 (최대 4명)",   "price": "115", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "미니밴 (6-7명)",     "price": "145", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "버스 (최대 30명)",   "price": "235", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996552291808", "url": "https://nomad-transfer.com", "areaServed": ["키르기스스탄"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "비슈케크에서 촐폰아타까지 이동 요금은 얼마인가요?", "acceptedAnswer": { "@type": "Answer", "text": "세단(최대 4명) $115, 미니밴(6-7명) $145, 버스(최대 30명) $235. 차량당 가격. 연료, 호텔 픽업/하차 포함." } },
      { "@type": "Question", "name": "비슈케크에서 촐폰아타까지 얼마나 걸리나요?", "acceptedAnswer": { "@type": "Answer", "text": "정류장 없이 약 3~4시간, ~250km. 부라나 탑과 붐 협곡 정류장 포함 시 4~5시간. 국경 통과 없음." } },
      { "@type": "Question", "name": "촐폰아타에서 무엇을 할 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "촐폰아타는 이식쿨 호수의 주요 해변 리조트 도시. 주요 명소: 야외 암각화 박물관(1,800년 된 암각화), 루흐 오르도 문화 센터, 여름 해변(6~9월, 수온 18~22°C), 온천." } },
      { "@type": "Question", "name": "가는 길에 부라나 탑에 들를 수 있나요?", "acceptedAnswer": { "@type": "Answer", "text": "네. 부라나 탑은 비슈케크-이식쿨 고속도로 근처의 10세기 미나렛. +$15(세단) 또는 +$20(미니밴)로 추가. WhatsApp 예약 시 말씀해주세요." } },
      { "@type": "Question", "name": "촐폰아타 방문에 가장 좋은 시기는 언제인가요?", "acceptedAnswer": { "@type": "Answer", "text": "수영과 해변 활동에는 6~9월(수온 18~22°C). 5월과 10월은 관광객 없이 명소를 즐기기 좋음. 겨울은 한적하지만 근처 스키 리조트 있음." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <BishkekToCholponAta initialLang="ko" />
  </>);
}
