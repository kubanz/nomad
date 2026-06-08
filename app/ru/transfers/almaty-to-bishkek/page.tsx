import type { Metadata } from "next";
import AlmatyToBishkek from "../../../../src/views/AlmatyToBishkek";

export const metadata: Metadata = {
  title: "Трансфер Алматы — Бишкек | Граница Кордай 24/7 | От $90",
  description:
    "Приватный трансфер Алматы → Бишкек через границу Кордай (24/7). Фиксированная цена за машину, английский водитель, помощь на границе. Седан $90, Минивэн $115, Автобус $220. ~3 часа, ~240 км. Ответ в WhatsApp за 1–2 мин.",
  keywords: ["трансфер Алматы Бишкек", "Алматы Бишкек такси", "граница Кордай", "трансфер Казахстан Кыргызстан", "такси Алматы Бишкек цена", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/ru/transfers/almaty-to-bishkek",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/almaty-to-bishkek",
      en: "https://nomad-transfer.com/transfers/almaty-to-bishkek",
      ru: "https://nomad-transfer.com/ru/transfers/almaty-to-bishkek",
      ko: "https://nomad-transfer.com/ko/transfers/almaty-to-bishkek",
    },
  },
  openGraph: {
    title: "Трансфер Алматы → Бишкек | Граница Кордай 24/7",
    description: "Приватный трансфер с фиксированной ценой. Седан $90, Минивэн $115. ~3 часа.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "Трансфер Алматы Бишкек" }],
    type: "website",
    url: "https://nomad-transfer.com/ru/transfers/almaty-to-bishkek",
  },
  twitter: { card: "summary_large_image", title: "Трансфер Алматы → Бишкек", description: "Седан $90, Минивэн $115. Кордай 24/7.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "Трансферы", "item": "https://nomad-transfer.com/#transfers" },
      { "@type": "ListItem", "position": 3, "name": "Алматы — Бишкек", "item": "https://nomad-transfer.com/ru/transfers/almaty-to-bishkek" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "Приватный трансфер Алматы — Бишкек через границу Кордай",
      "description": "Приватный трансфер через границу Казахстан–Кыргызстан (Кордай). Фиксированная цена за машину, английский водитель, помощь на границе. ~240 км, ~3 часа.",
      "url": "https://nomad-transfer.com/ru/transfers/almaty-to-bishkek",
      "touristType": "Трансфер, Трансграничный",
      "duration": "PT3H",
      "offers": [
        { "@type": "Offer", "name": "Седан (до 4)",     "price": "90",  "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Минивэн (6-7)",    "price": "115", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Автобус (до 30)",  "price": "220", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996552291808", "url": "https://nomad-transfer.com", "areaServed": ["Казахстан", "Кыргызстан"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Сколько стоит трансфер из Алматы в Бишкек?", "acceptedAnswer": { "@type": "Answer", "text": "Седан (до 4 пассажиров) — $90, минивэн (6-7) — $115, автобус (до 30) — $220. Цена за автомобиль, не за человека. Включает топливо, трансфер от отеля в Алматы до отеля в Бишкеке, помощь на границе Кордай." } },
      { "@type": "Question", "name": "Сколько времени занимает дорога Алматы — Бишкек?", "acceptedAnswer": { "@type": "Answer", "text": "Около 3 часов, ~240 км. Включая 20–40 минут на паспортный контроль на границе Кордай. Маршрут идёт по основной трассе M-39." } },
      { "@type": "Question", "name": "Граница Кордай работает круглосуточно?", "acceptedAnswer": { "@type": "Answer", "text": "Да. Пограничный переход Кордай между Казахстаном и Кыргызстаном работает 24/7 круглый год. Самый популярный переход для путешествий между Алматы и Бишкеком." } },
      { "@type": "Question", "name": "Нужна ли виза для пересечения границы?", "acceptedAnswer": { "@type": "Answer", "text": "Граждане большинства стран (Россия, страны СНГ, ЕС, США, Великобритания, Южная Корея, Япония) проходят безвизово в обоих направлениях на 30–90 дней. Нужен только паспорт." } },
      { "@type": "Question", "name": "Можете забрать из аэропорта Алматы (ALA)?", "acceptedAnswer": { "@type": "Answer", "text": "Да. Забираем из международного аэропорта Алматы (ALA), любого отеля или адреса. Отправьте номер рейса или адрес в WhatsApp при бронировании." } },
      { "@type": "Question", "name": "Можно продлить трансфер до Иссык-Куля или Каракола?", "acceptedAnswer": { "@type": "Answer", "text": "Да. Продлим трансфер из Бишкека до Иссык-Куля, Чолпон-Аты или Каракола с тем же водителем и машиной. Уточните комбинированную цену в WhatsApp." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <AlmatyToBishkek initialLang="ru" />
  </>);
}
