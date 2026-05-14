import type { Metadata } from "next";
import AlmatyToKarakol from "../../../../src/views/AlmatyToKarakol";

export const metadata: Metadata = {
  title: "Трансфер Алматы — Каракол | Остановка Чарын | От $235 | Nomad Transfer",
  description:
    "Частный трансфер из Алматы в Каракол через живописный маршрут Кеген. Опционально: Чарынский каньон (+$35), озеро Каинды, Кольсай. Седан $235, Минивэн $275. Ответ в WhatsApp за 1–2 мин.",
  keywords: [
    "трансфер Алматы Каракол",
    "частный автомобиль Алматы Каракол",
    "Чарынский каньон остановка",
    "граница Кеген",
    "трансфер из Казахстана в Кыргызстан",
    "nomad transfer",
  ],
  openGraph: {
    title: "Трансфер Алматы → Каракол через Кеген",
    description:
      "Живописный горный маршрут через Чарынский каньон, границу Кеген и долину Каркара. Седан $235, Минивэн $275. Приватный трансфер, не групповой тур.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Трансфер Алматы — Каракол через горный маршрут Кеген",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ru/transfers/almaty-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Алматы → Каракол трансфер через Кеген",
    description: "Приватный трансфер. Седан $235, Минивэн $275.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/ru/transfers/almaty-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/almaty-to-karakol",
      en: "https://nomad-transfer.com/transfers/almaty-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/almaty-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/almaty-to-karakol",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristTrip",
      "name": "Частный трансфер Алматы — Каракол через Кеген",
      "description":
        "Приватный трансфер из Алматы в Каракол через горный перевал Кеген. Опциональные остановки: Чарынский каньон (+$35), озеро Каинды и Кольсай.",
      "url": "https://nomad-transfer.com/ru/transfers/almaty-to-karakol",
      "duration": "P1D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Седан (до 4 пассажиров)",
          "price": "235",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Минивэн (6-7 пассажиров)",
          "price": "275",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfers KG",
        "telephone": "+996552291808",
        "url": "https://nomad-transfer.com",
        "areaServed": ["Кыргызстан", "Казахстан"],
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько стоит трансфер из Алматы в Каракол?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Седан (до 4 пассажиров) — $235, минивэн (6-7 пассажиров) — $275. Цена за автомобиль, не за человека. Включает топливо, трансфер из отеля в Алматы и до отеля в Каракол.",
          },
        },
        {
          "@type": "Question",
          "name": "Можно ли заехать в Чарынский каньон по дороге из Алматы в Каракол?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да. Чарынский каньон находится всего в 12 км от основной дороги Алматы–Каракол. Добавить эту остановку можно за +$35. Укажите это при бронировании в WhatsApp.",
          },
        },
        {
          "@type": "Question",
          "name": "Граница Кеген открыта круглый год?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Нет. КПП Кеген–Каркара работает с мая по октябрь, ежедневно с 8:00 до 18:00. Зимой (ноябрь–апрель) трансфер идёт через северный маршрут через Бишкек.",
          },
        },
        {
          "@type": "Question",
          "name": "Нужен ли паспорт для перехода границы Кеген?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Да, для граждан Казахстана, Кыргызстана и всех иностранных граждан требуется действующий паспорт. Водитель поможет пройти пограничный контроль.",
          },
        },
        {
          "@type": "Question",
          "name": "Сколько времени занимает дорога из Алматы в Каракол?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Около 6 часов без остановок (~350 км). С остановкой в Чарынском каньоне — 7-8 часов. Прохождение границы обычно занимает 20-40 минут.",
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
      <AlmatyToKarakol initialLang="ru" />
    </>
  );
}
