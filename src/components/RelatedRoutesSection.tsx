"use client";
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedRoute {
  title: string;
  href: string;
  price: string;
  duration: string;
  distance: string;
}

interface RelatedRoutesSectionProps {
  title?: string;
  routes: RelatedRoute[];
  lang?: "en" | "ru" | "ko";
}

const TITLES = {
  en: "Related Routes & Transfers",
  ru: "Похожие маршруты",
  ko: "관련 경로",
};

const VIEW_ROUTE = {
  en: "View Route",
  ru: "Посмотреть маршрут",
  ko: "경로 보기",
};

export default function RelatedRoutesSection({
  title,
  routes,
  lang = "en",
}: RelatedRoutesSectionProps) {
  const displayTitle = title || TITLES[lang];
  const viewRouteText = VIEW_ROUTE[lang];

  return (
    <section className="px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          {displayTitle}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {routes.map((route, index) => (
            <Link
              key={index}
              href={route.href}
              className="group block overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-lg"
            >
              <div className="p-6">
                <h3 className="mb-3 text-lg font-bold text-slate-900 group-hover:text-emerald-600">
                  {route.title}
                </h3>
                <div className="mb-4 space-y-1 text-sm text-slate-600">
                  <p>📏 {route.distance}</p>
                  <p>⏱ {route.duration}</p>
                  <p className="font-semibold text-emerald-600">{route.price}</p>
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:gap-3 transition-all">
                  <span>{viewRouteText}</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
