import type { Metadata } from "next";
import BishkekToOsh from "../../../../src/views/BishkekToOsh";

export const metadata: Metadata = {
  title: "Трансфер Бишкек — Ош | Перевал Тоо-Ашуу | От $290",
  description:
    "Приватный трансфер Бишкек → Ош через перевал Тоо-Ашуу (3,200 м), Суусамырскую долину и Токтогульское водохранилище. Седан $290, Минивэн $340, Автобус $590. ~10–12 часов, ~620 км.",
  keywords: ["трансфер Бишкек Ош", "Бишкек Ош такси", "перевал Тоо-Ашуу", "Токтогульское водохранилище", "трансфер юг Кыргызстана", "Ош частный автомобиль", "nomad transfer"],
  alternates: {
    canonical: "https://nomad-transfer.com/ru/transfers/bishkek-to-osh",
    languages: {
      "x-default": "https://nomad-transfer.com/transfers/bishkek-to-osh",
      en: "https://nomad-transfer.com/transfers/bishkek-to-osh",
      ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-osh",
      ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-osh",
    },
  },
  openGraph: {
    title: "Трансфер Бишкек → Ош | Горный маршрут",
    description: "Бишкек → Ош через Тоо-Ашуу, Суусамыр, Токтогул. Седан $290, Минивэн $340.",
    images: [{ url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg", width: 1200, height: 630, alt: "Трансфер Бишкек Ош" }],
    type: "website",
    url: "https://nomad-transfer.com/ru/transfers/bishkek-to-osh",
  },
  twitter: { card: "summary_large_image", title: "Трансфер Бишкек → Ош", description: "Седан $290, Минивэн $340. ~10–12 часов.", images: ["https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"] },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Главная", "item": "https://nomad-transfer.com/" },
      { "@type": "ListItem", "position": 2, "name": "Трансферы", "item": "https://nomad-transfer.com/#transfers" },
      { "@type": "ListItem", "position": 3, "name": "Бишкек — Ош", "item": "https://nomad-transfer.com/ru/transfers/bishkek-to-osh" },
    ]},
    {
      "@type": "TouristTrip",
      "name": "Приватный трансфер Бишкек — Ош через перевал Тоо-Ашуу",
      "description": "Дальний приватный трансфер из Бишкека в Ош через перевал Тоо-Ашуу (3,200 м), Суусамырскую долину и Токтогульское водохранилище. ~620 км, ~10–12 часов. Живописная альтернатива внутреннему перелёту.",
      "url": "https://nomad-transfer.com/ru/transfers/bishkek-to-osh",
      "touristType": "Дальний трансфер, Горный, Живописный",
      "duration": "PT12H",
      "offers": [
        { "@type": "Offer", "name": "Седан (до 4)",     "price": "290", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Минивэн (6-7)",    "price": "340", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
        { "@type": "Offer", "name": "Автобус (до 30)",  "price": "590", "priceCurrency": "USD", "availability": "https://schema.org/InStock" },
      ],
      "provider": { "@type": "LocalBusiness", "name": "Nomad Transfer", "telephone": "+996556080714", "url": "https://nomad-transfer.com", "areaServed": ["Кыргызстан"] },
    },
    { "@type": "FAQPage", "mainEntity": [
      { "@type": "Question", "name": "Сколько стоит трансфер Бишкек — Ош?", "acceptedAnswer": { "@type": "Answer", "text": "Седан (до 4 пассажиров) — $290, минивэн (6-7) — $340, автобус (до 30) — $590. Цена за автомобиль. Включает топливо, трансфер от отеля в Бишкеке до отеля в Оше, остановку на обед в Суусамырской долине." } },
      { "@type": "Question", "name": "Сколько занимает дорога Бишкек — Ош?", "acceptedAnswer": { "@type": "Answer", "text": "Около 10–12 часов с остановками, ~620 км. Маршрут пересекает горный перевал Тоо-Ашуу на 3,200 м, идёт по Суусамырской долине и около часа вдоль Токтогульского водохранилища." } },
      { "@type": "Question", "name": "Безопасна ли дорога Бишкек–Ош зимой?", "acceptedAnswer": { "@type": "Answer", "text": "Дорога открыта круглый год, но зимой (декабрь–февраль) нужны опытные водители и зимние шины. Используем автомобили, подготовленные для горных условий. В непогоду можем перенести выезд для безопасности. На перевале Тоо-Ашуу снег возможен круглый год." } },
      { "@type": "Question", "name": "Почему не полететь самолётом?", "acceptedAnswer": { "@type": "Answer", "text": "Внутренний перелёт быстрее (~1 час), но вы пропустите красоту: тоннель Тоо-Ашуу, юрты Суусамыра и бирюзовое Токтогульское водохранилище. Поездка показывает географию Кыргызстана так, как самолёт не может. Идеально для путешественников с временем." } },
      { "@type": "Question", "name": "Можно сделать остановки в Джалал-Абаде или Узгене?", "acceptedAnswer": { "@type": "Answer", "text": "Да. Джалал-Абад (курорт с минеральными источниками) и Узген (минарет и мавзолей XI века) — популярные опциональные остановки. Добавление: +$30/$40 (Джалал-Абад) или +$35/$45 (Узген). Добавляет 1–2 часа." } },
      { "@type": "Question", "name": "Будет ли остановка на обед?", "acceptedAnswer": { "@type": "Answer", "text": "Да. Останавливаемся на обед в местном кафе в Суусамырской долине (~2,200 м) — обычно киргизская кухня (бешбармак, манты, лагман). Стоимость еды не включена в трансфер." } },
    ]},
  ],
};

export default function Page() {
  return (<>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    <BishkekToOsh initialLang="ru" />
  </>);
}
