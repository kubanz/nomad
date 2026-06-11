"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Car, Send, MessageCircle, Globe, Menu, X } from "lucide-react";

const LANGS = [
  { code: "en" as const, label: "English", flag: "🇬🇧" },
  { code: "ko" as const, label: "Korean",  flag: "🇰🇷" },
  { code: "ru" as const, label: "Russian", flag: "🇷🇺" },
];

interface Props {
  lang: "en" | "ru" | "ko";
  waLink: string;
  onLangChange: (code: "en" | "ru" | "ko") => void;
  activeNav?: "home" | "tours" | "transfers";
}

export default function SiteHeader({ lang, waLink, onLangChange, activeNav }: Props) {
  const [showLangDropdown, setShowLangDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const prefix = lang === "ru" ? "/ru" : lang === "ko" ? "/ko" : "";

  useEffect(() => {
    if (!showLangDropdown) return;
    const close = () => setShowLangDropdown(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [showLangDropdown]);

  const navLink = (href: string, labelEn: string, labelRu: string, labelKo: string, active?: boolean) => (
    <Link
      href={href}
      onClick={() => setShowMobileMenu(false)}
      className={`rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-slate-100 ${
        active ? "text-emerald-700" : "text-slate-600"
      }`}
    >
      {lang === "ru" ? labelRu : lang === "ko" ? labelKo : labelEn}
    </Link>
  );

  const mobileNavLink = (href: string, labelEn: string, labelRu: string, labelKo: string, active?: boolean) => (
    <Link
      href={href}
      onClick={() => setShowMobileMenu(false)}
      className={`rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-slate-100 ${
        active ? "text-emerald-700" : "text-slate-700"
      }`}
    >
      {lang === "ru" ? labelRu : lang === "ko" ? labelKo : labelEn}
    </Link>
  );

  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto grid max-w-6xl grid-cols-3 items-center px-4 py-2">
        {/* Left: brand */}
        <Link href={`${prefix}/`} className="flex items-center gap-2">
          <Car className="h-5 w-5" />
          <span className="text-sm font-semibold">Nomad Transfers KG</span>
        </Link>

        {/* Center: nav (desktop) */}
        <nav className="hidden items-center justify-center gap-1 md:flex">
          {navLink(`${prefix}/`, "Home", "Главная", "홈", activeNav === "home")}
          {navLink(`${prefix}/#curated-tours`, "Tours", "Туры", "투어", activeNav === "tours")}
          {navLink(`${prefix}/transfers`, "Transfers", "Трансферы", "이동", activeNav === "transfers")}
        </nav>

        {/* Right: hamburger + lang + desktop buttons */}
        <div className="flex items-center justify-end gap-2">
          {/* Hamburger (mobile only) */}
          <button
            className="flex items-center justify-center rounded-xl border p-2 md:hidden"
            onClick={() => setShowMobileMenu((v) => !v)}
            aria-label={showMobileMenu ? "Close menu" : "Open menu"}
          >
            {showMobileMenu ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>

          {/* Language switcher */}
          <div className="relative">
            <button
              onClick={(e) => { e.stopPropagation(); setShowLangDropdown(!showLangDropdown); }}
              className="rounded-xl border px-3 py-2 text-xs font-medium hover:bg-slate-50"
              aria-label="Change language"
            >
              <Globe className="h-4 w-4" />
            </button>
            {showLangDropdown && (
              <div className="absolute right-0 top-full mt-2 w-36 rounded-xl border bg-white shadow-lg z-50">
                {LANGS.map(({ code, label, flag }) => (
                  <button
                    key={code}
                    onClick={(e) => { e.stopPropagation(); onLangChange(code); setShowLangDropdown(false); }}
                    className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl ${lang === code ? "bg-slate-50 font-semibold" : ""}`}
                  >
                    {flag} {label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop buttons */}
          <a
            href="https://t.me/nomadtransfer"
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-xl bg-sky-700 px-3 py-2 text-sm font-medium text-white hover:bg-sky-800 md:inline-flex"
            aria-label="Contact via Telegram"
          >
            <Send className="h-4 w-4" /> Telegram
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-xl bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800 md:inline-flex"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
        </div>
      </div>

      {/* Mobile nav dropdown */}
      {showMobileMenu && (
        <nav className="border-t bg-white/95 px-4 py-3 md:hidden">
          <div className="flex flex-col gap-1">
            {mobileNavLink(`${prefix}/`, "Home", "Главная", "홈", activeNav === "home")}
            {mobileNavLink(`${prefix}/#curated-tours`, "Tours", "Туры", "투어", activeNav === "tours")}
            {mobileNavLink(`${prefix}/transfers`, "Transfers", "Трансферы", "이동", activeNav === "transfers")}
          </div>
        </nav>
      )}
    </header>
  );
}
