import type { Metadata } from "next";
import TransfersCatalog from "../../src/views/TransfersCatalog";
import { transferRoutes } from "../../src/data/transferRoutes";

const url = "https://nomad-transfer.com/transfers";

export const metadata: Metadata = {
  title: "Private Transfers in Kyrgyzstan and Kazakhstan | Nomad Transfer",
  description: "Browse airport, domestic, and cross-border private transfers with fixed prices per vehicle across Kyrgyzstan and Kazakhstan.",
  alternates: {
    canonical: url,
    languages: { "x-default": url, en: url, ru: `${url.replace("/transfers", "/ru/transfers")}`, ko: `${url.replace("/transfers", "/ko/transfers")}` },
  },
  openGraph: { title: "Private Transfers in Kyrgyzstan and Kazakhstan", description: "Airport, domestic, and cross-border routes with fixed prices per vehicle.", url, type: "website" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "CollectionPage", name: "Private Transfers in Kyrgyzstan and Kazakhstan", url, numberOfItems: transferRoutes.length },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://nomad-transfer.com/" },
      { "@type": "ListItem", position: 2, name: "Transfers", item: url },
    ] },
    { "@type": "ItemList", numberOfItems: transferRoutes.length, itemListElement: transferRoutes.map((route, index) => ({
      "@type": "ListItem", position: index + 1, url: `https://nomad-transfer.com/transfers/${route.slug}`,
      name: `${route.from.en} to ${route.to.en} private transfer`,
    })) },
  ],
};

export default function Page() {
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} /><TransfersCatalog lang="en" /></>;
}
