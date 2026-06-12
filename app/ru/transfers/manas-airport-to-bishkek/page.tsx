import type { Metadata } from "next";
import ManasAirportToBishkek from "../../../../src/views/ManasAirportToBishkek";

export const metadata: Metadata = {
  title: "Трансфер аэропорт Манас — Бишкек | От $35",
  description:
    "Прямой трансфер из аэропорта Манас до одного адреса в Бишкеке: седан $35, минивэн $45. Дополнительные заезды оплачиваются отдельно. Встреча с табличкой.",
  keywords: [
    "трансфер из аэропорта Манас в Бишкек",
    "Манас Бишкек трансфер",
    "такси из аэропорта Бишкек",
    "встреча в аэропорту Манас",
    "FRU Бишкек трансфер",
    "аэропортовый трансфер Кыргызстан",
    "nomad transfer",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ru/transfers/manas-airport-to-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
      en: "https://nomad-transfer.com/transfers/manas-airport-to-bishkek",
      ru: "https://nomad-transfer.com/ru/transfers/manas-airport-to-bishkek",
      ko: "https://nomad-transfer.com/ko/transfers/manas-airport-to-bishkek",
    },
  },
  openGraph: {
    title: "Трансфер Аэропорт Манас (FRU) → Бишкек | Встреча 24/7",
    description:
      "Встреча с табличкой, отслеживание рейса и 60 мин ожидания. Седан $35, минивэн $45 до одного адреса в Бишкеке.",
    type: "website",
    url: "https://nomad-transfer.com/ru/transfers/manas-airport-to-bishkek",
  },
  twitter: {
    card: "summary_large_image",
    title: "Трансфер Аэропорт Манас → Бишкек",
    description: "Встреча с табличкой. Седан $35, минивэн $45 до одного адреса в Бишкеке.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная",   item: "https://nomad-transfer.com/" },
        { "@type": "ListItem", position: 2, name: "Трансферы", item: "https://nomad-transfer.com/ru/transfers" },
        { "@type": "ListItem", position: 3, name: "Аэропорт Манас — Бишкек", item: "https://nomad-transfer.com/ru/transfers/manas-airport-to-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      name: "Приватный аэропортовый трансфер Манас (FRU) — Бишкек",
      description:
        "Приватный трансфер из аэропорта Манас (FRU) в Бишкек с встречей в зоне прилёта, 60 мин бесплатного ожидания и отслеживанием рейса. Сервис от двери до двери 24/7.",
      url: "https://nomad-transfer.com/ru/transfers/manas-airport-to-bishkek",
      touristType: "Аэропортовый трансфер, Приватный",
      duration: "PT40M",
      offers: [
        { "@type": "Offer", name: "Седан (до 4 пассажиров)",    price: "35", priceCurrency: "USD", availability: "https://schema.org/InStock" },
        { "@type": "Offer", name: "Минивэн (6-7 пассажиров)",   price: "45", priceCurrency: "USD", availability: "https://schema.org/InStock" },
      ],
      provider: {
        "@type": "LocalBusiness",
        name: "Nomad Transfer",
        telephone: "+996552291808",
        url: "https://nomad-transfer.com",
        areaServed: ["Кыргызстан"],
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Сколько стоит трансфер из аэропорта Манас в Бишкек?",
          acceptedAnswer: { "@type": "Answer", text: "Седан (до 4 пассажиров) — $35, минивэн (6-7 пассажиров) — $45. Цена за автомобиль при прямой поездке из аэропорта до одного адреса в Бишкеке. Дополнительные заезды и адреса оплачиваются отдельно. Ночная доплата 22:00–06:00 +15%." },
        },
        {
          "@type": "Question",
          name: "Как я найду водителя в аэропорту Манас?",
          acceptedAnswer: { "@type": "Answer", text: "Водитель встретит вас в зоне прилёта (после паспортного контроля и багажа) с табличкой с вашим именем. Отправьте номер рейса в WhatsApp заранее — мы отследим прилёт." },
        },
        {
          "@type": "Question",
          name: "Что если мой рейс задержат?",
          acceptedAnswer: { "@type": "Answer", text: "Мы отслеживаем рейс по номеру — водитель приезжает по фактическому времени посадки. Включено 60 минут бесплатного ожидания после посадки." },
        },
        {
          "@type": "Question",
          name: "Сколько времени занимает дорога Манас — Бишкек?",
          acceptedAnswer: { "@type": "Answer", text: "Около 30–40 минут, ~25–30 км. Время в пути зависит от пробок — утренний и вечерний час пик могут добавить 10–20 минут." },
        },
        {
          "@type": "Question",
          name: "Встречаете ли вы ночные рейсы?",
          acceptedAnswer: { "@type": "Answer", text: "Да, работаем 24/7, включая ночные прилёты. Доплата +15% за пикапы с 22:00 до 06:00." },
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
      <ManasAirportToBishkek initialLang="ru" />
    </>
  );
}
