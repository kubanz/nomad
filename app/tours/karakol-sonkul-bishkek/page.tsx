import type { Metadata } from "next";
import KarakolSonkulBishkek from "../../../src/pages/KarakolSonkulBishkek";

export const metadata: Metadata = {
  title: "Karakol to Bishkek via Son-Kul Lake — 2-Day Private Tour | Nomad Transfers",
  description:
    "Private 2-day transfer-tour from Karakol to Bishkek via Son-Kul alpine lake (3,016 m), Djety-Oguz gorge, Skazka Canyon, and Burana Tower. $550 per vehicle, up to 4 passengers.",
  keywords: [
    "Karakol to Bishkek tour",
    "Son-Kul Lake tour",
    "Kyrgyzstan private tour",
    "2 day tour Kyrgyzstan",
    "Skazka Canyon",
    "Burana Tower",
    "Djety-Oguz",
    "nomad transfer",
  ],
  openGraph: {
    title: "Karakol → Son-Kul → Bishkek 2-Day Private Tour",
    description:
      "Gorges, waterfalls, canyons, alpine lakes. Overnight in a yurt at Son-Kul. $550 per vehicle (up to 4 passengers).",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Son-Kul Lake Kyrgyzstan",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karakol → Son-Kul → Bishkek 2-Day Tour",
    description: "Private 2-day tour. $550 per vehicle.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
  },
};

export default function Page() {
  return <KarakolSonkulBishkek />;
}
