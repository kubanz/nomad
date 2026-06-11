import type { Metadata } from "next";
import ManasToKarakol from "../../../../src/views/ManasToKarakol";

export const metadata: Metadata = {
  title: "Трансфер Аэропорт Манас (FRU) — Каракол | Встреча 24/7 | От $146",
  description:
    "Приватный аэропортовый трансфер Манас (FRU) → Каракол. Встреча с табличкой в зоне прилёта, 60 мин бесплатного ожидания, отслеживание рейса. Седан $146, Минивэн $177, Автобус $275. WhatsApp 24/7.",
  keywords: [
    "трансфер из аэропорта Манас",
    "Манас Каракол трансфер",
    "трансфер FRU Каракол",
    "такси из аэропорта Бишкек",
    "встреча в аэропорту Манас",
    "Иссык-Куль трансфер из аэропорта",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ru/transfers/manas-airport-to-karakol",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
      en: "https://nomad-transfer.com/transfers/manas-airport-to-karakol",
      ru: "https://nomad-transfer.com/ru/transfers/manas-airport-to-karakol",
      ko: "https://nomad-transfer.com/ko/transfers/manas-airport-to-karakol",
    },
  },
  openGraph: {
    title: "Трансфер Аэропорт Манас (FRU) → Каракол | Встреча 24/7",
    description:
      "Встреча с табличкой в Манасе, 60 мин ожидания, отслеживание рейса. Седан $146, Минивэн $177. До отеля в Каракол.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Трансфер из аэропорта Манас в Каракол",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ru/transfers/manas-airport-to-karakol",
  },
  twitter: {
    card: "summary_large_image",
    title: "Трансфер Аэропорт Манас → Каракол",
    description: "Встреча с табличкой. Седан $146, Минивэн $177. 24/7.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "Трансферы", "item": "https://nomad-transfer.com/ru/transfers" },
        { "@type": "ListItem", "position": 3, "name": "Аэропорт Манас — Каракол", "item": "https://nomad-transfer.com/ru/transfers/manas-airport-to-karakol" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Приватный аэропортовый трансфер Манас (FRU) — Каракол",
      "description":
        "Приватный трансфер из аэропорта Манас (FRU) в Каракол с встречей в зоне прилёта, 60 мин бесплатного ожидания и отслеживанием рейса. Сервис от двери до двери 24/7.",
      "url": "https://nomad-transfer.com/ru/transfers/manas-airport-to-karakol",
      "touristType": "Аэропортовый трансфер, Приватный",
      "duration": "PT5H",
      "offers": [
        { "@type": "Offer", "name": "Седан (до 4 пассажиров)", "price": "146", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Минивэн (6-7 пассажиров)", "price": "177", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Автобус (до 30 пассажиров)", "price": "275", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfer",
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
          "name": "Сколько стоит трансфер из аэропорта Манас в Каракол?",
          "acceptedAnswer": { "@type": "Answer", "text": "Седан (до 4 пассажиров) — $146, минивэн (6-7) — $177, автобус (до 30) — $275. Цена за автомобиль. Ночная доплата 22:00–06:00 +15%. Включает топливо, встречу с табличкой и 60 мин бесплатного ожидания." },
        },
        {
          "@type": "Question",
          "name": "Как я найду водителя в аэропорту Манас?",
          "acceptedAnswer": { "@type": "Answer", "text": "Водитель встретит вас в зоне прилёта (после паспортного контроля и багажа) с табличкой с вашим именем. Отправьте номер рейса в WhatsApp заранее — мы отследим прилёт." },
        },
        {
          "@type": "Question",
          "name": "Что если мой рейс задержат?",
          "acceptedAnswer": { "@type": "Answer", "text": "Мы отслеживаем рейс по номеру — водитель приезжает по фактическому времени посадки. Включено 60 минут бесплатного ожидания после посадки на прохождение паспортного контроля и получение багажа." },
        },
        {
          "@type": "Question",
          "name": "Сколько времени занимает дорога Манас — Каракол?",
          "acceptedAnswer": { "@type": "Answer", "text": "Около 5 часов, ~410 км. Маршрут идёт в обход центра Бишкека по северной трассе и далее по северному берегу Иссык-Куля. Без границы." },
        },
        {
          "@type": "Question",
          "name": "Есть ли детские кресла?",
          "acceptedAnswer": { "@type": "Answer", "text": "Да, детские кресла и бустеры доступны по запросу — укажите возраст и вес при бронировании в WhatsApp. Без доплаты." },
        },
        {
          "@type": "Question",
          "name": "Встречаете ли вы ночные рейсы?",
          "acceptedAnswer": { "@type": "Answer", "text": "Да, работаем 24/7, включая ночные прилёты. Доплата +15% за пикапы с 22:00 до 06:00." },
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
      <ManasToKarakol initialLang="ru" />
    </>
  );
}
