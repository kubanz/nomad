import type { Metadata } from "next";
import KarakolSonkulBishkekClient from "../../../../src/views/KarakolSonkulBishkekClient";

export const metadata: Metadata = {
  title: "Тур Каракол → Сон-Куль → Бишкек 2 дня | Частный тур | Nomad Transfer",
  description:
    "Приватный 2-дневный тур из Каракола в Бишкек через озеро Сон-Куль (3016 м), ущелье Джеты-Огуз, каньон Сказка и башню Бурана. Седан $415 (до 4 чел.), минивэн $465 (6-7 чел.).",
  keywords: [
    "тур Каракол Бишкек",
    "озеро Сон-Куль тур",
    "частный тур Кыргызстан",
    "2 дня тур Кыргызстан",
    "каньон Сказка",
    "башня Бурана",
    "Джеты-Огуз",
    "nomad transfer",
  ],
  openGraph: {
    title: "Тур Каракол → Сон-Куль → Бишкек | 2-дневный частный тур",
    description:
      "Ущелья, водопады, каньоны, горное озеро. Ночь в юрте на Сон-Куле. Седан $415 (до 4 чел.), минивэн $465 (6-7 чел.).",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Озеро Сон-Куль, Кыргызстан",
      },
    ],
    type: "website",
    url: "https://nomad-transfer.com/ru/tours/karakol-sonkul-bishkek",
    siteName: "Nomad Transfer",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Тур Каракол → Сон-Куль → Бишкек 2 дня",
    description: "Частный 2-дневный тур. Седан $415, минивэн $465.",
    images: [
      "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
    ],
  },
  alternates: {
    canonical: "https://nomad-transfer.com/ru/tours/karakol-sonkul-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
      en: "https://nomad-transfer.com/tours/karakol-sonkul-bishkek",
      ru: "https://nomad-transfer.com/ru/tours/karakol-sonkul-bishkek",
      ko: "https://nomad-transfer.com/ko/tours/karakol-sonkul-bishkek",
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "Туры", "item": "https://nomad-transfer.com/#tours" },
        { "@type": "ListItem", "position": 3, "name": "Каракол → Сон-Куль → Бишкек", "item": "https://nomad-transfer.com/ru/tours/karakol-sonkul-bishkek" },
      ],
    },
    {
      "@type": "TouristTrip",
      "name": "Тур из Каракола в Бишкек через озеро Сон-Куль",
      "description":
        "2-дневный приватный тур из Каракола в Бишкек через ущелье Джеты-Огуз, водопад Барскоон, каньон Сказка, озеро Сон-Куль (ночь в юрте) и башню Бурана.",
      "url": "https://nomad-transfer.com/ru/tours/karakol-sonkul-bishkek",
      "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "touristType": "Приключения, Культура, Природа",
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Каракол — выезд из отеля" },
          { "@type": "ListItem", "position": 2, "name": "Джеты-Огуз — красные скальные формации" },
          { "@type": "ListItem", "position": 3, "name": "Барскоон — водопад и монумент Гагарину" },
          { "@type": "ListItem", "position": 4, "name": "Каньон Сказка" },
          { "@type": "ListItem", "position": 5, "name": "Озеро Сон-Куль — ночь в юрте (3016 м)" },
          { "@type": "ListItem", "position": 6, "name": "Кочкор — спуск с плато" },
          { "@type": "ListItem", "position": 7, "name": "Башня Бурана — древний минарет" },
          { "@type": "ListItem", "position": 8, "name": "Бишкек — трансфер до отеля" },
        ],
      },
      "duration": "P2D",
      "offers": [
        {
          "@type": "Offer",
          "name": "Седан (до 4 пассажиров)",
          "price": "415",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
        {
          "@type": "Offer",
          "name": "Минивэн (6-7 пассажиров)",
          "price": "465",
          "priceCurrency": "USD",
          "availability": "https://schema.org/InStock",
        },
      ],
      "provider": {
        "@type": "LocalBusiness",
        "name": "Nomad Transfer",
        "telephone": "+996557081821",
        "url": "https://nomad-transfer.com",
        "areaServed": "Кыргызстан",
      },
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько стоит тур из Каракола в Бишкек?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Тур стоит $415 на седан (до 4 чел.) или $465 на минивэн (6-7 чел.). Цена за автомобиль, включает все остановки, ночь в юрте на Сон-Куле, топливо и поддержку на русском языке.",
          },
        },
        {
          "@type": "Question",
          "name": "Когда лучше ехать на озеро Сон-Куль?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Лучший сезон — с июня по сентябрь, когда дорога на Сон-Куль (3016 м) открыта и работают юрточные лагеря. Зимой (октябрь–май) озеро замёрзшее и недоступное.",
          },
        },
        {
          "@type": "Question",
          "name": "Входит ли ночлег в юрте в стоимость?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Ночь в юрте на Сон-Куле не включена в базовую стоимость. Мы работаем с местными юрточными лагерями и можем организовать проживание и ужин за дополнительную плату.",
          },
        },
        {
          "@type": "Question",
          "name": "Есть ли связь на озере Сон-Куль?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Мобильной связи и интернета на Сон-Куле нет. Это удалённое высокогорное плато на высоте 3016 м. Рекомендуем скачать офлайн-карты до поездки.",
          },
        },
        {
          "@type": "Question",
          "name": "Какова политика отмены?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Бесплатная отмена за 24 часа до выезда. Отмена менее чем за 24 часа может повлечь удержание 50%. Свяжитесь с нами через WhatsApp +996 552 291 808.",
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
      <KarakolSonkulBishkekClient initialLang="ru" />
    </>
  );
}
