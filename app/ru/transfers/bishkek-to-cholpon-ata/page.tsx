import type { Metadata } from "next";
import BishkekToCholponAta from "../../../../src/views/BishkekToCholponAta";

export const metadata: Metadata = {
  title: "Трансфер Бишкек — Чолпон-Ата | Иссык-Куль | От $115",
  description:
    "Приватный трансфер Бишкек → Чолпон-Ата по северному берегу Иссык-Куля. Опционально: Башня Бурана, Боомское ущелье. Седан $115, Минивэн $145, Автобус $235. ~3–4 часа, ~250 км. Ответ в WhatsApp за 1–2 мин.",
  keywords: ["трансфер Бишкек Чолпон-Ата", "Чолпон-Ата такси", "трансфер Иссык-Куль", "Бишкек пляж Иссык-Куль", "Чолпон-Ата частный автомобиль", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/ru/transfers/bishkek-to-cholpon-ata",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
      en: "https://nomad-transfer.com/transfers/bishkek-to-cholpon-ata",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-cholpon-ata",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-cholpon-ata",
    },
  },
  openGraph: {
    title: "Трансфер Бишкек → Чолпон-Ата | Иссык-Куль",
    description: "Приватный трансфер по северному берегу Иссык-Куля. Седан $115, Минивэн $145. ~3–4 часа.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "Трансфер Бишкек Чолпон-Ата" }],
    type: "website",
    url: "https://nomad-transfer.com/ru/transfers/bishkek-to-cholpon-ata",
  },
  twitter: { card: "summary_large_image", title: "Трансфер Бишкек → Чолпон-Ата", description: "Седан $115, Минивэн $145.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "Трансферы", "item": "https://nomad-transfer.com/ru/transfers" },
      { "@type": "ListItem", "position": 3, "name": "Бишкек — Чолпон-Ата", "item": "https://nomad-transfer.com/ru/transfers/bishkek-to-cholpon-ata" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "Приватный трансфер Бишкек — Чолпон-Ата",
      "description": "Приватный трансфер из Бишкека в Чолпон-Ату по северному берегу Иссык-Куля. Опциональные остановки: Башня Бурана, Боомское ущелье. ~250 км, ~3–4 часа.",
      "url": "https://nomad-transfer.com/ru/transfers/bishkek-to-cholpon-ata",
      "touristType": "Трансфер, Пляжный курорт",
      "duration": "PT4H",
      "offers": [
        { "@type": "Offer", "name": "Седан (до 4)",     "price": "115", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Минивэн (6-7)",    "price": "145", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Автобус (до 30)",  "price": "235", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996552291808", "url": "https://nomad-transfer.com", "areaServed": ["Кыргызстан"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Сколько стоит трансфер Бишкек — Чолпон-Ата?", "acceptedAnswer": { "@type": "Answer", "text": "Седан (до 4 пассажиров) — $115, минивэн (6-7) — $145, автобус (до 30) — $235. Цена за автомобиль. Включает топливо и трансфер от/до отеля." } },
      { "@type": "Question", "name": "Сколько ехать из Бишкека в Чолпон-Ату?", "acceptedAnswer": { "@type": "Answer", "text": "Около 3–4 часов без остановок, ~250 км. С остановками у Башни Бурана и в Боомском ущелье — 4–5 часов. Граница не требуется." } },
      { "@type": "Question", "name": "Что посмотреть в Чолпон-Ате?", "acceptedAnswer": { "@type": "Answer", "text": "Чолпон-Ата — главный курорт на северном берегу Иссык-Куля. Достопримечательности: музей петроглифов под открытым небом (наскальные рисунки 1,800 лет), культурный центр «Рух Ордо», пляжи (июнь–сентябрь, вода 18–22°C), горячие источники." } },
      { "@type": "Question", "name": "Можно остановиться у Башни Бурана по дороге?", "acceptedAnswer": { "@type": "Answer", "text": "Да. Башня Бурана — минарет X века недалеко от трассы Бишкек–Иссык-Куль. Добавить остановку +$15 (седан) или +$20 (минивэн). Уточните при бронировании в WhatsApp." } },
      { "@type": "Question", "name": "Когда лучше всего ехать в Чолпон-Ату?", "acceptedAnswer": { "@type": "Answer", "text": "Июнь–сентябрь для пляжного отдыха (вода 18–22°C). Май и октябрь хороши для осмотра достопримечательностей без толп. Зимой тихо, но рядом горнолыжный курорт." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <BishkekToCholponAta initialLang="ru" />
  </>);
}
