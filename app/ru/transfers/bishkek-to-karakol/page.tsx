import type { Metadata } from "next";
import BishkekToKarakol from "../../../../src/views/BishkekToKarakol";

export const metadata: Metadata = {
  title: "Трансфер Бишкек — Каракол | Башня Бурана и Боомское ущелье | От $125 | Nomad Transfer",
  description:
    "Частный трансфер из Бишкека в Каракол по северному берегу Иссык-Куля. Опционально: Башня Бурана (+$15), Боомское ущелье (+$10), Чолпон-Ата (+$20). Седан $125, Минивэн $145. Ответ в WhatsApp за 1–2 мин.",
  keywords: [
    "трансфер Бишкек Каракол",
    "частный автомобиль Бишкек Каракол",
    "башня Бурана остановка",
    "Боомское ущелье Иссык-Куль",
    "трансфер Бишкек Каракол цена",
    "nomad transfer кыргызстан",
  ],
  openGraph: {
    title: "Трансфер Бишкек → Каракол | Северный берег Иссык-Куля",
    description:
      "Живописный маршрут по северному берегу через Башню Бурана, Боомское ущелье и Иссык-Куль. Седан $125, Минивэн $145. Приватный трансфер, не групповой тур.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Трансфер Бишкек — Каракол по северному берегу Иссык-Куля",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ru/transfers/bishkek-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Трансфер Бишкек → Каракол",
    description: "Приватный трансфер по Иссык-Кулю. Седан $125, Минивэн $145.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/ru/transfers/bishkek-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-karakol",
      en: "https://nomad-transfer.com/transfers/bishkek-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-karakol",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "name": "Частный трансфер Бишкек — Каракол через Иссык-Куль",
      "description":
        "Приватный однодневный трансфер из Бишкека в Каракол по северному берегу Иссык-Куля. Опциональные остановки: Башня Бурана (+$15), Боомское ущелье (+$10), Чолпон-Ата (+$20).",
      "url": "https://nomad-transfer.com/ru/transfers/bishkek-to-karakol",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Седан (до 4 пассажиров)",
          "price": "125",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Минивэн (6-7 пассажиров)",
          "price": "145",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Автобус (до 30 пассажиров)",
          "price": "265",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfers KG",
        "telephone": "+996552291808",
        "url": "https://nomad-transfer.com",
        "areaServed": ["Кыргызстан"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько стоит трансфер из Бишкека в Каракол?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Седан (до 4 пассажиров) — $125, Минивэн (6-7 пассажиров) — $145, Автобус (до 30 пассажиров) — $265. Цена за автомобиль, не за человека. Включает топливо и трансфер от/до отеля.",
          },
        },
        {
          "@type": "Question",
          "name": "Можно ли остановиться у Башни Бурана по дороге в Каракол?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Башня Бурана — минарет X века, расположенный прямо у дороги Бишкек–Каракол. Добавить остановку можно за +$15 (седан) или +$20 (минивэн). Уточните при бронировании в WhatsApp.",
          },
        },
        {
          "@type": "Question",
          "name": "Сколько времени занимает дорога из Бишкека в Каракол?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Около 6-7 часов без остановок (~360 км). С остановками у Башни Бурана и в Боомском ущелье — 7-8 часов. Пересечение границы не требуется.",
          },
        },
        {
          "@type": "Question",
          "name": "Трансфер Бишкек–Каракол доступен круглый год?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Маршрут Бишкек–Каракол работает круглый год по шоссе северного берега Иссык-Куля. Пересечение границы не требуется, поэтому доступен во все сезоны.",
          },
        },
        {
          "@type": "Question",
          "name": "Что такое Боомское ущелье и стоит ли там остановиться?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Боомское ущелье — живописный каньон, где река Чу прорезает скалы, примерно в 80 км восточнее Бишкека. Остановка занимает 20-30 минут и очень фотогенична. Добавить за +$10 (седан) или +$15 (минивэн).",
          },
        },
      ],
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BishkekToKarakol initialLang="ru" />
    </>
  );
}
