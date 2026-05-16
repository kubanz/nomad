"use client";
import React from "react";
import { Calendar, Package, Info, Clock } from "lucide-react";

interface TravelTip {
  icon: "calendar" | "package" | "info" | "clock";
  title: string;
  content: string;
}

interface TravelTipsSectionProps {
  title?: string;
  subtitle?: string;
  tips: TravelTip[];
  lang?: "en" | "ru" | "ko";
}

const TITLES = {
  en: "Travel Tips & Practical Information",
  ru: "Советы путешественникам",
  ko: "여행 팁 및 실용 정보",
};

const ICONS = {
  calendar: Calendar,
  package: Package,
  info: Info,
  clock: Clock,
};

export default function TravelTipsSection({
  title,
  subtitle,
  tips,
  lang = "en",
}: TravelTipsSectionProps) {
  const displayTitle = title || TITLES[lang];

  return (
    <section className="bg-gradient-to-br from-slate-50 to-white px-4 py-12 md:py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-bold text-slate-900 md:text-4xl">
            {displayTitle}
          </h2>
          {subtitle && (
            <p className="mx-auto max-w-2xl text-slate-600">{subtitle}</p>
          )}
        </div>

        <div className="space-y-6">
          {tips.map((tip, index) => {
            const IconComponent = ICONS[tip.icon];
            return (
              <div
                key={index}
                className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 rounded-lg bg-emerald-100 p-3">
                    <IconComponent className="h-6 w-6 text-emerald-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-slate-900">
                      {tip.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-700 whitespace-pre-line">
                      {tip.content}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
