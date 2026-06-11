import type { Metadata } from "next";
import TransfersCatalog from "../../../src/views/TransfersCatalog";

export const metadata: Metadata = {
  title: "키르기스스탄 및 카자흐스탄 프라이빗 이동 | Nomad Transfer",
  description: "공항, 키르기스스탄 국내 및 카자흐스탄 국경 이동 노선과 차량당 고정 요금을 확인하세요.",
  alternates: {
    canonical: "https://nomad-transfer.com/ko/transfers",
    languages: { "x-default": "https://nomad-transfer.com/transfers", en: "https://nomad-transfer.com/transfers", ru: "https://nomad-transfer.com/ru/transfers", ko: "https://nomad-transfer.com/ko/transfers" },
  },
};

export default function Page() {
  return <TransfersCatalog lang="ko" />;
}
