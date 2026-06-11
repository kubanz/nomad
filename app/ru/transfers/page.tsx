import type { Metadata } from "next";
import TransfersCatalog from "../../../src/views/TransfersCatalog";

export const metadata: Metadata = {
  title: "Трансферы по Кыргызстану и Казахстану | Nomad Transfer",
  description: "Трансферы из аэропорта, по Кыргызстану и Казахстану. Фиксированные цены за приватный автомобиль.",
  alternates: {
    canonical: "https://nomad-transfer.com/ru/transfers",
    languages: { "x-default": "https://nomad-transfer.com/transfers", en: "https://nomad-transfer.com/transfers", ru: "https://nomad-transfer.com/ru/transfers", ko: "https://nomad-transfer.com/ko/transfers" },
  },
};

export default function Page() {
  return <TransfersCatalog lang="ru" />;
}
