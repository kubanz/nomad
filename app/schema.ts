// Enhanced Schema.org markup for better SEO
// Import this in layout.tsx for site-wide Organization schema

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nomad-transfer.com/#organization",
  name: "Nomad Transfer",
  alternateName: "Nomad Transfers KG",
  url: "https://nomad-transfer.com",
  logo: {
    "@type": "ImageObject",
    url: "https://nomad-transfer.com/logo.png",
    width: "512",
    height: "512",
  },
  image: {
    "@type": "ImageObject",
    url: "https://nomad-transfer.com/og-image.jpg",
    width: "1200",
    height: "630",
  },
  description:
    "Private transfer company in Kyrgyzstan since 2024. Fixed prices, English-speaking support, professional drivers. Bishkek, Karakol, Almaty, and Osh transfers.",
  foundingDate: "2024",
  telephone: "+996552291808",
  email: "info@nomad-transfer.com",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KG",
    addressLocality: "Bishkek",
    addressRegion: "Chuy Region",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "42.8746",
    longitude: "74.5698",
  },
  areaServed: [
    {
      "@type": "Country",
      name: "Kyrgyzstan",
    },
    {
      "@type": "Country",
      name: "Kazakhstan",
    },
  ],
  serviceType: [
    "Private Transfer",
    "Airport Transfer",
    "Multi-day Tours",
    "Border Crossing Transfer",
  ],
  priceRange: "$25-$500",
  currenciesAccepted: "USD, KGS, KZT",
  paymentAccepted: "Cash, Bank Transfer, Card",
  openingHours: "Mo-Su 00:00-24:00",
  sameAs: [
    "https://www.facebook.com/nomadtransferkg",
    "https://www.instagram.com/nomadtransferkg",
    "https://wa.me/996552291808",
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+996552291808",
      contactType: "customer service",
      availableLanguage: ["English", "Russian", "Korean"],
      areaServed: ["KG", "KZ"],
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Transfer Services in Kyrgyzstan",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Transfer Bishkek to Karakol",
          description: "Private transfer from Bishkek to Karakol via Issyk-Kul north shore",
          provider: {
            "@type": "Organization",
            name: "Nomad Transfer",
          },
        },
        price: "136",
        priceCurrency: "USD",
        url: "https://nomad-transfer.com/transfers/bishkek-to-karakol",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Transfer Almaty to Bishkek",
          description: "Cross-border transfer from Almaty to Bishkek via Korday border",
          provider: {
            "@type": "Organization",
            name: "Nomad Transfer",
          },
        },
        price: "127",
        priceCurrency: "USD",
        url: "https://nomad-transfer.com/transfers/almaty-to-bishkek",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Airport Transfer Manas to Bishkek",
          description: "Private transfer from Manas International Airport to Bishkek city",
          provider: {
            "@type": "Organization",
            name: "Nomad Transfer",
          },
        },
        price: "25",
        priceCurrency: "USD",
        url: "https://nomad-transfer.com/guides/manas-airport-to-bishkek-city",
      },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2026-03-15",
      reviewBody:
        "Excellent transfer service from Bishkek to Karakol! Driver was punctual, friendly, and made several photo stops along Issyk-Kul. Highly recommend!",
    },
    {
      "@type": "Review",
      author: {
        "@type": "Person",
        name: "David K.",
      },
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      datePublished: "2026-02-20",
      reviewBody:
        "Professional service with English-speaking WhatsApp support. Clean vehicle, comfortable ride. Great value for money. Would use again.",
    },
  ],
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://nomad-transfer.com/#localbusiness",
  name: "Nomad Transfer",
  image: "https://nomad-transfer.com/logo.png",
  description:
    "Private transfer company in Bishkek, Kyrgyzstan. Licensed drivers, fixed prices, English support. Transfers to Karakol, Almaty, Osh, and all major destinations.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KG",
    addressLocality: "Bishkek",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "42.8746",
    longitude: "74.5698",
  },
  url: "https://nomad-transfer.com",
  telephone: "+996552291808",
  priceRange: "$$",
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "1000",
  },
  servesCuisine: null,
  acceptsReservations: "True",
};

// Breadcrumb schema generator for pages
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

// WebSite schema for search box
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nomad-transfer.com/#website",
  url: "https://nomad-transfer.com",
  name: "Nomad Transfer",
  description: "Private transfers across Kyrgyzstan and Kazakhstan. Fixed prices, English support.",
  publisher: {
    "@id": "https://nomad-transfer.com/#organization",
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://nomad-transfer.com/?s={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
  inLanguage: ["en", "ru", "ko"],
};
