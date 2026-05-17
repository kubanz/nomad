import type { Metadata } from "next";
import AlmatyToBishkekGuide from "../../../../src/views/AlmatyToBishkekGuide";

export const metadata: Metadata = {
  title: "Алматы — Бишкек: Путеводитель 2025 | Граница Кордай, расстояние и советы",
  description:
    "Полный гид по маршруту Алматы — Бишкек: ~240 км, ~3 часа через границу Кордай (24/7). Сравнение транспорта, советы по границе, визовые требования. Трансфер от $90.",
  keywords: [
    "алматы бишкек путеводитель",
    "как добраться алматы бишкек",
    "алматы бишкек на машине",
    "граница кордай как проехать",
    "алматы бишкек расстояние",
    "трансфер алматы бишкек",
    "казахстан кыргызстан граница",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/ru/guides/almaty-to-bishkek-travel-guide",
    languages: {
      "x-default": "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
      en: "https://nomad-transfer.com/guides/almaty-to-bishkek-travel-guide",
      ru: "https://nomad-transfer.com/ru/guides/almaty-to-bishkek-travel-guide",
      ko: "https://nomad-transfer.com/ko/guides/almaty-to-bishkek-travel-guide",
    },
  },
  openGraph: {
    title: "Алматы — Бишкек: Путеводитель 2025 | Граница Кордай и транспорт",
    description:
      "Как добраться из Алматы в Бишкек: расстояние, как пройти границу Кордай, виза, остановки по пути. Приватный трансфер от $90 за машину.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Путеводитель Алматы — Бишкек",
      },
    ],
    type: "article",
    url: "https://nomad-transfer.com/ru/guides/almaty-to-bishkek-travel-guide",
    siteName: "Nomad Transfer",
    locale: "ru_RU",
  },
  twitter: {
    card: "summary_large_image",
    title: "Алматы — Бишкек: Путеводитель 2025",
    description: "~240 км, ~3 часа, граница Кордай 24/7. Трансфер от $90. Советы по границе и виза.",
    images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "Путеводители", "item": "https://nomad-transfer.com/ru/guides" },
        { "@type": "ListItem", "position": 3, "name": "Алматы — Бишкек: Путеводитель", "item": "https://nomad-transfer.com/ru/guides/almaty-to-bishkek-travel-guide" },
      ],
    },
    {
      "@type": "Article",
      "headline": "Алматы — Бишкек: Полный путеводитель 2025",
      "description": "Всё, что нужно знать о поездке из Алматы (Казахстан) в Бишкек (Кыргызстан): расстояние, пограничный переход, варианты транспорта и практические советы.",
      "url": "https://nomad-transfer.com/ru/guides/almaty-to-bishkek-travel-guide",
      "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "publisher": {
        "@type": "Organization",
        "name": "Nomad Transfer",
        "url": "https://nomad-transfer.com",
      },
      "inLanguage": "ru",
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Сколько времени занимает дорога из Алматы в Бишкек?",
          "acceptedAnswer": { "@type": "Answer", "text": "Примерно 3 часа, около 240 км. Включает 20–40 минут на паспортный контроль на границе Кордай." },
        },
        {
          "@type": "Question",
          "name": "Как лучше добраться из Алматы в Бишкек?",
          "acceptedAnswer": { "@type": "Answer", "text": "Приватный трансфер — самый комфортный вариант: фиксированная цена за машину ($90 седан, $115 минивэн), от двери до двери, водитель говорит по-русски, помощь на границе. Маршрутка дешевле, но ждёт наполнения и без гарантий места." },
        },
        {
          "@type": "Question",
          "name": "Граница Кордай работает круглосуточно?",
          "acceptedAnswer": { "@type": "Answer", "text": "Да. Пограничный переход Кордай между Казахстаном и Кыргызстаном работает 24 часа в сутки, 365 дней в году." },
        },
        {
          "@type": "Question",
          "name": "Нужна ли виза для въезда в Кыргызстан из Казахстана?",
          "acceptedAnswer": { "@type": "Answer", "text": "Гражданам России и большинства стран СНГ виза не нужна. Гражданам РФ достаточно внутреннего паспорта." },
        },
        {
          "@type": "Question",
          "name": "Сколько стоит поехать из Алматы в Бишкек?",
          "acceptedAnswer": { "@type": "Answer", "text": "Приватный трансфер: $90 (седан) или $115 (минивэн) за машину. Маршрутка: $8–15 с человека. Автобус: $5–10 с человека." },
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
      <AlmatyToBishkekGuide initialLang="ru" />
    </>
  );
}
