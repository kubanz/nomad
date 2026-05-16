"use client";
import React from "react";
import { Star } from "lucide-react";

interface Review {
  name: string;
  country: string;
  rating: number;
  date: string;
  text: string;
  route?: string;
}

interface CustomerReviewsSectionProps {
  title?: string;
  reviews: Review[];
  lang?: "en" | "ru" | "ko";
}

const TITLES = {
  en: "What Our Customers Say",
  ru: "Отзывы наших клиентов",
  ko: "고객 후기",
};

const VERIFIED = {
  en: "Verified Customer",
  ru: "Проверенный клиент",
  ko: "인증된 고객",
};

export default function CustomerReviewsSection({
  title,
  reviews,
  lang = "en",
}: CustomerReviewsSectionProps) {
  const displayTitle = title || TITLES[lang];
  const verifiedText = VERIFIED[lang];

  return (
    <section className="bg-slate-50 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          {displayTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              {/* Rating */}
              <div className="mb-3 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-slate-300"
                    }`}
                  />
                ))}
              </div>

              {/* Review Text */}
              <p className="mb-4 text-sm leading-relaxed text-slate-700">
                "{review.text}"
              </p>

              {/* Author */}
              <div className="border-t border-slate-100 pt-4">
                <p className="font-semibold text-slate-900">{review.name}</p>
                <p className="text-xs text-slate-500">
                  {review.country} • {review.date}
                </p>
                {review.route && (
                  <p className="mt-1 text-xs text-slate-600">
                    Route: {review.route}
                  </p>
                )}
                <p className="mt-2 text-xs text-emerald-600">
                  ✓ {verifiedText}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
