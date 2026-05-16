import type { Metadata } from "next";
import KarakolSkiResortGuide from "../../../src/views/KarakolSkiResortGuide";

export const metadata: Metadata = {
  title: "Karakol Ski Resort Guide 2025 | Lift Prices, Snow & How to Get There",
  description:
    "Complete guide to Karakol Ski Resort in Kyrgyzstan: lift pass prices ($15–25), snow quality, ski season, and how to get there from Bishkek or Almaty. Private transfers from $146.",
  keywords: [
    "karakol ski resort",
    "karakol ski resort guide",
    "karakol skiing kyrgyzstan",
    "best ski resort central asia",
    "karakol lift pass price",
    "how to get to karakol ski resort",
  ],
  alternates: {
    canonical: "https://nomad-transfer.com/guides/karakol-ski-resort",
    languages: {
      "x-default": "https://nomad-transfer.com/guides/karakol-ski-resort",
      en: "https://nomad-transfer.com/guides/karakol-ski-resort",
      ru: "https://nomad-transfer.com/ru/guides/karakol-ski-resort",
      ko: "https://nomad-transfer.com/ko/guides/karakol-ski-resort",
    },
  },
  openGraph: {
    title: "Karakol Ski Resort Guide 2025 | Best Ski Resort in Central Asia",
    description:
      "Lift passes from $15–25/day, powder snow at 2300–3050 m, modern chairlifts. Private transfers from Bishkek/Manas from $146.",
    images: [
      {
        url: "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
        width: 1200,
        height: 630,
        alt: "Karakol Ski Resort — Kyrgyzstan",
      },
    ],
    type: "article",
    url: "https://nomad-transfer.com/guides/karakol-ski-resort",
    siteName: "Nomad Transfer",
  },
  twitter: {
    card: "summary_large_image",
    title: "Karakol Ski Resort Guide 2025",
    description: "Best ski resort in Central Asia. Lift passes $15–25. Private transfers from $146.",
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
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://nomad-transfer.com/" },
        { "@type": "ListItem", "position": 2, "name": "Karakol Ski Resort Guide", "item": "https://nomad-transfer.com/guides/karakol-ski-resort" },
      ],
    },
    {
      "@type": "SkiResort",
      "name": "Karakol Ski Resort",
      "description": "Premier ski resort in Kyrgyzstan with modern chairlifts, excellent powder snow, and slopes for all skill levels from 2300 m to 3050 m altitude.",
      "url": "https://nomad-transfer.com/guides/karakol-ski-resort",
      "image": "https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Karakol",
        "addressRegion": "Issyk-Kul Region",
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
          "name": "How much does a lift pass cost at Karakol Ski Resort?",
          "acceptedAnswer": { "@type": "Answer", "text": "Full-day lift pass at Karakol costs approximately $15–25 depending on the season. Multi-day passes are available at discounted rates." },
        },
        {
          "@type": "Question",
          "name": "How do I get to Karakol Ski Resort from Bishkek?",
          "acceptedAnswer": { "@type": "Answer", "text": "The most convenient option is a private transfer (4–5 hours, 400 km). Nomad Transfer offers fixed-price transfers — sedan from $146, minivan from $177 per car — with English-speaking support and airport meet & greet at Manas." },
        },
        {
          "@type": "Question",
          "name": "What is the ski season at Karakol?",
          "acceptedAnswer": { "@type": "Answer", "text": "The ski season runs from December to March, with best snow conditions in January and February. The resort sits at 2300–3050 m altitude ensuring reliable snow coverage." },
        },
        {
          "@type": "Question",
          "name": "Is Karakol Ski Resort good for beginners?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes — Karakol has gentler slopes perfect for beginners plus English-speaking ski instructors. The uncrowded pistes make it ideal for learning." },
        },
        {
          "@type": "Question",
          "name": "Can I rent ski equipment at Karakol?",
          "acceptedAnswer": { "@type": "Answer", "text": "Yes, full ski/snowboard rental is available at the base for $10–20/day including boots, skis or board, and poles." },
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
      <KarakolSkiResortGuide initialLang="en" />
    </>
  );
}
