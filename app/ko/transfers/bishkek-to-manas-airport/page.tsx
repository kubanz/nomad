import type { Metadata } from "next";
import BishkekToManasAirport from "../../../../src/views/BishkekToManasAirport";

export const metadata: Metadata = {
  title: "비슈케크 → 마나스 공항 프라이빗 이동 | $35부터",
  description: "비슈케크 한 주소에서 마나스 공항까지 직접 이동: 세단 $35, 미니밴 $45. 추가 경유지는 별도 요금입니다.",
  alternates: { canonical: "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport", languages: { "x-default": "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", en: "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport", ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport" } },
};

export default function Page() {
  return <BishkekToManasAirport initialLang="ko" />;
}
