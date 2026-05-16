import type { Metadata } from "next";
import KarakolSkiResortGuide from "../../../../src/views/KarakolSkiResortGuide";

export const metadata: Metadata = {
  title: "Горнолыжная база Каракол 2025 | Цены, снег и как добраться",
  description:
    "Полный гид по горнолыжной базе Каракол в Кыргызстане: цены на ски-пасс ($15–25), качество снега, горнолыжный сезон и как добраться из Бишкека или Алматы. Трансфер от $146.",
  keywords: [
    "горнолыжная база Каракол",
    "катание на лыжах Кыргызстан",
    "Каракол горы зима",
    "лучший горнолыжный курорт Центральной Азии",
    "цены Каракол ski",
    "трансфер до Каракол горнолыжка",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ru/guides/karakol-ski-resort",
    languages: {
      "x-default": "https://nomad-transfer.com/guides/karakol-ski-resort",
      en: "https://nomad-transfer.com/guides/karakol-ski-resort",
      ru: "https://nomad-transfer.com/ru/guides/karakol-ski-resort",
      ko: "https://nomad-transfer.com/ko/guides/karakol-ski-resort",
    },
  },
  openGraph: {
    title: "Горнолыжная база Каракол 2025 | Лучший курорт Центральной Азии",
    description:
      "Ски-пасс от $15–25/день, порошковый снег на высоте 2300–3050 м, современные подъёмники. Трансфер из Бишкека / Манаса от $146.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Горнолыжная база Каракол — Кыргызстан",
      },
    ],
    type: "article",
    url: "https://nomad-transfer.com/ru/guides/karakol-ski-resort",
    siteName: "Nomad Transfer",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Горнолыжная база Каракол 2025",
    description: "Лучший горнолыжный курорт Центральной Азии. Ски-пасс $15–25. Трансфер от $146.",
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
        { "@type": "ListItem", "position": 2, "name": "Горнолыжная база Каракол", "item": "https://nomad-transfer.com/ru/guides/karakol-ski-resort" },
      ],
    },
    {
      "@type": "SkiResort",
      "name": "Горнолыжная база Каракол",
      "description": "Лучший горнолыжный курорт Кыргызстана с современными подъёмниками, отличным порошковым снегом и трассами для всех уровней от 2300 м до 3050 м.",
      "url": "https://nomad-transfer.com/ru/guides/karakol-ski-resort",
      "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Каракол",
        "addressRegion": "Иссык-Кульская область",
        "addressCountry": "KG",
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "42.4906",
        "longitude": "78.3931",
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "17:00",
      },
      "priceRange": "$15–$25",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько стоит ски-пасс в Каракол?",
          "acceptedAnswer": { "@type": "Answer", "text": "Ски-пасс на полный день — около $15–25 в зависимости от сезона. Многодневные абонементы по сниженным ценам." },
        },
        {
          "@type": "Question",
          "name": "Как добраться из Бишкека на горнолыжную базу Каракол?",
          "acceptedAnswer": { "@type": "Answer", "text": "Самый удобный вариант — приватный трансфер (4–5 часов, 400 км). Nomad Transfer предлагает фиксированную цену: седан от $146, минивэн от $177 за автомобиль. Встреча в аэропорту Манас." },
        },
        {
          "@type": "Question",
          "name": "Когда горнолыжный сезон в Каракол?",
          "acceptedAnswer": { "@type": "Answer", "text": "Сезон с декабря по март, лучший снег — в январе и феврале. Высота 2300–3050 м гарантирует стабильное снегопокрытие." },
        },
        {
          "@type": "Question",
          "name": "Подходит ли Каракол для начинающих лыжников?",
          "acceptedAnswer": { "@type": "Answer", "text": "Да — есть пологие трассы для новичков и инструкторы. Малолюдность курорта делает его идеальным для обучения." },
        },
        {
          "@type": "Question",
          "name": "Можно ли взять лыжи напрокат в Каракол?",
          "acceptedAnswer": { "@type": "Answer", "text": "Да, у базы работает прокатный пункт. Полный комплект (лыжи/борд, ботинки, палки) — $10–20/день." },
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
      <KarakolSkiResortGuide initialLang="ru" />
    </>
  );
}
