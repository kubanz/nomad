import type { Metadata } from "next";
import BishkekToManasAirport from "../../../../src/views/BishkekToManasAirport";

export const metadata: Metadata = {
  title: "Трансфер Бишкек — аэропорт Манас | От $35",
  description: "Прямой трансфер от одного адреса в Бишкеке до аэропорта Манас: седан $35, минивэн $45. Дополнительные заезды оплачиваются отдельно.",
  alternates: { canonical: "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport", languages: { "x-default": "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", en: "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport", ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport" } },
};

export default function Page() {
  return <BishkekToManasAirport initialLang="ru" />;
}
