import type { Metadata } from "next";
import BishkekToManasAirport from "../../../../src/views/BishkekToManasAirport";

export const metadata: Metadata = {
  title: "Трансфер Бишкек — аэропорт Манас | От $25",
  description: "Приватный трансфер из Бишкека в аэропорт Манас. Подача к отелю, расчёт времени выезда и доставка к терминалу.",
  alternates: { canonical: "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport", languages: { "x-default": "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", en: "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport", ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport" } },
};

export default function Page() {
  return <BishkekToManasAirport initialLang="ru" />;
}
