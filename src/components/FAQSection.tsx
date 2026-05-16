"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title?: string;
  faqs: FAQItem[];
  lang?: "en" | "ru" | "ko";
}

const TITLES = {
  en: "Frequently Asked Questions",
  ru: "Часто задаваемые вопросы",
  ko: "자주 묻는 질문",
};

export default function FAQSection({ title, faqs, lang = "en" }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const displayTitle = title || TITLES[lang];

  return (
    <section className="mx-auto max-w-4xl px-4 py-12 md:py-16">
      <h2 className="mb-8 text-center text-3xl font-bold text-slate-900 md:text-4xl">
        {displayTitle}
      </h2>
      <div className="space-y-3">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-md"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="flex w-full items-center justify-between px-5 py-4 text-left transition-colors hover:bg-slate-50"
              aria-expanded={openIndex === index}
            >
              <span className="pr-4 text-base font-semibold text-slate-900 md:text-lg">
                {faq.question}
              </span>
              <ChevronDown
                className={`h-5 w-5 flex-shrink-0 text-slate-500 transition-transform ${
                  openIndex === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {openIndex === index && (
              <div className="border-t border-slate-100 bg-slate-50 px-5 py-4">
                <p className="text-sm leading-relaxed text-slate-700 md:text-base">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
