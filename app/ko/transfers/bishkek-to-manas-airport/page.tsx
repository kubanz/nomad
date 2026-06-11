import type { Metadata } from "next";
import BishkekToManasAirport from "../../../../src/views/BishkekToManasAirport";

export const metadata: Metadata = {
  title: "비슈케크 → 마나스 공항 프라이빗 이동 | $25부터",
  description: "비슈케크 숙소 픽업, 항공편 시간 계획 및 마나스 공항 터미널 직접 하차가 포함된 프라이빗 이동.",
  alternates: { canonical: "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport", languages: { "x-default": "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", en: "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport", ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport" } },
};

export default function Page() {
  return <BishkekToManasAirport initialLang="ko" />;
}
