import type { Metadata } from "next";
import BishkekToManasAirport from "../../../src/views/BishkekToManasAirport";
import { bishkekToManasFaq } from "../../../src/data/bishkekToManasSeo";

const url = "https://nomad-transfer.com/transfers/bishkek-to-manas-airport";
const languages = { "x-default": url, en: url, ru: "https://nomad-transfer.com/ru/transfers/bishkek-to-manas-airport", ko: "https://nomad-transfer.com/ko/transfers/bishkek-to-manas-airport" };

export const metadata: Metadata = {
  title: "Bishkek to Manas Airport Transfer from $35 | Nomad Transfer",
  description: "Private transfer from one Bishkek address to Manas Airport. Sedan $35, minivan $45. Extra stops cost extra. Hotel pickup and terminal drop-off.",
  alternates: { canonical: url, languages },
  openGraph: { title: "Bishkek to Manas Airport Private Transfer", description: "One direct pickup and terminal drop-off from $35. Extra stops cost extra.", type: "website", url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nomad-transfer.com/" },
      { "@type": "ListItem", position: 2, name: "Transfers", item: "https://nomad-transfer.com/transfers" },
      { "@type": "ListItem", position: 3, name: "Bishkek to Manas Airport", item: url },
    ] },
    {
      "@type": "Service",
      name: "Bishkek to Manas Airport Private Transfer",
      description: "Direct private transfer from one Bishkek pickup address to Manas Airport. Extra stops or additional pickup addresses cost extra. Group vehicles are available on request.",
      serviceType: "Private airport transfer",
      areaServed: "Bishkek, Kyrgyzstan",
      url,
      provider: { "@type": "LocalBusiness", "@id": "https://nomad-transfer.com/#business", name: "Nomad Transfer", telephone: "+996552291808" },
      offers: [
        { "@type": "Offer", price: "35", priceCurrency: "USD", name: "Sedan (up to 4 passengers)", availability: "https://schema.org/InStock" },
        { "@type": "Offer", price: "45", priceCurrency: "USD", name: "Minivan (6-7 passengers)", availability: "https://schema.org/InStock" },
      ],
    },
    { "@type": "FAQPage", mainEntity: bishkekToManasFaq.en.map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })) },
  ],
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><BishkekToManasAirport initialLang="en" /></>;
}
