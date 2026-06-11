"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Globe, MessageCircle, Send } from "lucide-react";

const BRAND_NAME = "Nomad Transfers KG";
const WHATSAPP_PHONE = "+996552291808";

interface HeaderProps {
  lang?: "en" | "ru" | "ko";
  languagePath?: string;
}

export default function Header({ lang = "en", languagePath = "" }: HeaderProps) {
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    if (!showLangDropdown) return;
    const handleClick = () => setShowLangDropdown(false);
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [showLangDropdown]);

  const WA_TEXT =
    lang === "en"
      ? `Hi! I need a private transfer/day trip in Kyrgyzstan. Please share price & availability.`
      : lang === "ru"
        ? `Здравствуйте! Нужен частный трансфер/однодневка по Кыргызстану. Пришлите цену и доступность.`
        : `안녕하세요! 키르기스스탄 전용 차량(공항 픽업/당일투어) 문의드립니다. 요금과 가능 여부 부탁드립니다.`;

  const t = {
    home: lang === "ru" ? "Главная" : lang === "ko" ? "홈" : "Home",
    tours: lang === "ru" ? "Туры" : lang === "ko" ? "투어" : "Tours",
    transfers: lang === "ru" ? "Трансферы" : lang === "ko" ? "이동" : "Transfers",
    pricing: lang === "ru" ? "Цены" : lang === "ko" ? "가격" : "Pricing",
    guides: lang === "ru" ? "Гиды" : lang === "ko" ? "가이드" : "Guides",
    about: lang === "ru" ? "О нас" : lang === "ko" ? "회사 소개" : "About",
    whatsapp: lang === "ru" ? "WhatsApp" : lang === "ko" ? "WhatsApp" : "WhatsApp",
  };

  const homeUrl = lang === "en" ? "/" : `/${lang}`;

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-2">
        {/* Left: brand */}
        <Link href={homeUrl} className="flex items-center gap-2">
          <Car className="h-5 w-5" />
          <span className="text-sm font-semibold md:text-base">{BRAND_NAME}</span>
        </Link>

        {/* Center: nav */}
        <nav className="hidden items-center justify-center gap-1 md:flex">
          <Link
            href={homeUrl}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
          >
            {t.home}
          </Link>
          <Link
            href={`${homeUrl}#curated-tours`}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
          >
            {t.tours}
          </Link>
          <Link
            href={`${homeUrl === "/" ? "" : homeUrl}/transfers`}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
          >
            {t.transfers}
          </Link>
          <Link
            href="/pricing"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
          >
            {t.pricing}
          </Link>
          <Link
            href={`${homeUrl}#travel-guides`}
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
          >
            {t.guides}
          </Link>
          <Link
            href="/about"
            className="rounded-lg px-3 py-1.5 text-sm font-medium text-slate-600 hover:bg-slate-100 hover:text-emerald-600"
          >
            {t.about}
          </Link>
        </nav>

        {/* Right: lang + buttons */}
        <div className="flex items-center justify-end gap-2">
          {/* Language Switcher */}
          <div className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowLangDropdown(!showLangDropdown);
              }}
              className="rounded-xl border px-3 py-2 text-xs font-medium hover:bg-slate-50"
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 top-full z-50 mt-2 w-36 rounded-xl border bg-white shadow-lg">
                <a
                  href={languagePath || "/"}
                  className={`block w-full rounded-t-xl px-4 py-2 text-left text-sm hover:bg-slate-50 ${lang === "en" ? "bg-slate-50 font-semibold" : ""}`}
                >
                  🇬🇧 English
                </a>
                <a
                  href={`/ko${languagePath}`}
                  className={`block w-full px-4 py-2 text-left text-sm hover:bg-slate-50 ${lang === "ko" ? "bg-slate-50 font-semibold" : ""}`}
                >
                  🇰🇷 Korean
                </a>
                <a
                  href={`/ru${languagePath}`}
                  className={`block w-full rounded-b-xl px-4 py-2 text-left text-sm hover:bg-slate-50 ${lang === "ru" ? "bg-slate-50 font-semibold" : ""}`}
                >
                  🇷🇺 Russian
                </a>
              </div>
            )}
          </div>
          <a
            href="https://t.me/nomadtransfer"
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-xl bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-sky-600 md:inline-flex"
            aria-label="Contact via Telegram"
          >
            <Send className="h-4 w-4" />
          </a>
          <a
            href={`https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(WA_TEXT)}`}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> {t.whatsapp}
          </a>
        </div>
      </div>
    </header>
  );
}
