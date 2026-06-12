import type { Metadata } from "next";
import BishkekToManasAirport from "../../../../src/views/BishkekToManasAirport";
import { bishkekToManasFaq } from "../../../../src/data/bishkekToManasSeo";

const url = "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport";
export const metadata: Metadata = {
  title: "Трансфер Бишкек — аэропорт Манас | От $35",
  description: "Прямой трансфер от одного адреса в Бишкеке до аэропорта Манас: седан $35, минивэн $45. Дополнительные заезды оплачиваются отдельно.",
  alternates: { canonical: url, languages: { "x-default": "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", en: "https://nomad-transfer.com/transfers/bishkek-to-manas-airport", ru: url, ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport" } },
  openGraph: {
    title: "Трансфер Бишкек — аэропорт Манас",
    description: "Прямая поездка от одного адреса до терминала: седан $35, минивэн $45. Дополнительные заезды оплачиваются отдельно.",
    type: "website",
    url,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://nomad-transfer.com/ru" },
        { "@type": "ListItem", position: 2, name: "Трансферы", item: "https://nomad-transfer.com/ru/transfers" },
        { "@type": "ListItem", position: 3, name: "Бишкек — аэропорт Манас", item: url },
      ],
    },
    {
      "@type": "Service",
      name: "Приватный трансфер Бишкек — аэропорт Манас",
      description: "Прямая поездка от одного адреса в Бишкеке до аэропорта Манас. Дополнительные заезды и адреса оплачиваются отдельно. Групповой транспорт доступен по запросу.",
      serviceType: "Приватный трансфер в аэропорт",
      areaServed: "Бишкек, Кыргызстан",
      url,
      provider: { "@type": "LocalBusiness", "@id": "https://nomad-transfer.com/#business", name: "Nomad Transfer", telephone: "+996552291808" },
      offers: [
        { "@type": "Offer", price: "35", priceCurrency: "USD", name: "Седан (до 4 пассажиров)", availability: "https://schema.org/InStock" },
        { "@type": "Offer", price: "45", priceCurrency: "USD", name: "Минивэн (6-7 пассажиров)", availability: "https://schema.org/InStock" },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: bishkekToManasFaq.ru.map(([question, answer]) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <BishkekToManasAirport initialLang="ru" />
    </>
  );
}
