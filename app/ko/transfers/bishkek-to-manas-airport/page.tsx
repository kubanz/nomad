import type { Metadata } from "next";
import BishkekToManasAirport from "../../../../src/views/BishkekToManasAirport";
import { bishkekToManasFaq } from "../../../../src/data/bishkekToManasSeo";

const url = "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport";
export const metadata: Metadata = {
  title: "비슈케크 → 마나스 공항 프라이빗 이동 | $35부터",
  description: "비슈케크 한 주소에서 마나스 공항까지 직접 이동: 세단 $35, 미니밴 $45. 추가 경유지는 별도 요금입니다.",
  alternates: { canonical: url, languages: { "x-default": "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", en: "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport", ko: url } },
  openGraph: {
    title: "비슈케크 → 마나스 공항 프라이빗 이동",
    description: "한 픽업 주소에서 공항 터미널까지 직접 이동: 세단 $35, 미니밴 $45. 추가 경유지는 별도 요금입니다.",
    type: "website",
    url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "홈", item: "https://nomad-transfer.com/ko" },
        { "@type": "ListItem", position: 2, name: "이동", item: "https://nomad-transfer.com/ko/transfers" },
        { "@type": "ListItem", position: 3, name: "비슈케크 → 마나스 공항", item: url },
      ],
    },
    {
      "@type": "Service",
      name: "비슈케크 → 마나스 공항 프라이빗 이동",
      description: "비슈케크 한 주소에서 마나스 공항까지 직접 이동합니다. 추가 경유지나 픽업 주소는 별도 요금이며 단체 차량은 문의해 주세요.",
      serviceType: "프라이빗 공항 이동",
      areaServed: "비슈케크, 키르기스스탄",
      url,
      provider: { "@type": "LocalBusiness", "@id": "https://nomad-transfer.com/#business", name: "Nomad Transfer", telephone: "+996552291808" },
      offers: [
        { "@type": "Offer", price: "35", priceCurrency: "USD", name: "세단 (최대 4명)", availability: "https://schema.org/InStock" },
        { "@type": "Offer", price: "45", priceCurrency: "USD", name: "미니밴 (6-7명)", availability: "https://schema.org/InStock" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: bishkekToManasFaq.ko.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BishkekToManasAirport initialLang="ko" />
    </>
  );
}
