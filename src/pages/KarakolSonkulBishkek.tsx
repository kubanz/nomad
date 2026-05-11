import React, { useState, useEffect } from "react";
import { Car, MessageCircle, Send, Globe, ChevronLeft } from "lucide-react";

const WHATSAPP_PHONE = "+996552291808";
const WA_LINK = `https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=${encodeURIComponent(
  "Hi! I'm interested in the Karakol → Son-Kul → Bishkek 2-day tour. Please share availability and price."
)}`;
const BRAND = "Nomad Transfers KG";

function pickLang(): "en" | "ru" | "ko" {
  if (typeof navigator !== "undefined") {
    const l = navigator.language?.toLowerCase() || "";
    if (l.startsWith("ko")) return "ko";
    if (l.startsWith("ru")) return "ru";
  }
  return "en";
}

const LANGS: { code: "en" | "ru" | "ko"; label: string; flag: string }[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "ko", label: "Korean", flag: "🇰🇷" },
  { code: "ru", label: "Russian", flag: "🇷🇺" },
];

export default function KarakolSonkulBishkek() {
  const [lang, setLang] = useState<"en" | "ru" | "ko">(pickLang());
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  useEffect(() => {
    if (!showLangDropdown) return;
    const close = () => setShowLangDropdown(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [showLangDropdown]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            <a href="/" className="flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-medium hover:bg-slate-50">
              <ChevronLeft className="h-3.5 w-3.5" />
              {lang === "ru" ? "Главная" : lang === "ko" ? "홈" : "Home"}
            </a>
            <div className="flex items-center gap-2">
              <Car className="h-5 w-5" />
              <span className="hidden text-sm font-semibold md:block">{BRAND}</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
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
                      onClick={(e) => { e.stopPropagation(); setLang(code); setShowLangDropdown(false); }}
                      className={`w-full px-4 py-2 text-left text-sm hover:bg-slate-50 first:rounded-t-xl last:rounded-b-xl ${lang === code ? "font-semibold bg-slate-50" : ""}`}
                    >
                      {flag} {label}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
              className="hidden items-center gap-2 rounded-xl bg-sky-500 px-3 py-2 text-sm font-medium text-white hover:bg-sky-600 md:inline-flex">
              <Send className="h-4 w-4" /> Telegram
            </a>
            <a href={WA_LINK} target="_blank" rel="noopener"
              className="hidden items-center gap-2 rounded-xl bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700 md:inline-flex">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-teal-500 to-sky-500" />
        <img
          src="https://59luetpw6qj9z6yg.public.blob.vercel-storage.com/tour-images/son-kul.jpg"
          alt="Son-Kul Lake"
          className="absolute inset-0 h-full w-full object-cover opacity-40"
        />
        <div className="relative mx-auto max-w-4xl px-4 py-16 text-white md:py-24">
          <p className="text-sm font-medium uppercase tracking-widest text-white/80">
            {lang === "ru" ? "Приватный тур" : lang === "ko" ? "프라이빗 투어" : "Private Tour"}
          </p>
          <h1 className="mt-3 text-3xl font-bold leading-tight md:text-5xl">
            {lang === "ru"
              ? "Каракол → Бишкек через Сон-Кёль и башню Бурана"
              : lang === "ko"
              ? "카라콜 → 손쿨 → 부라나 → 비슈케크"
              : "Karakol to Bishkek via Son-Kul Lake & Burana Tower"}
          </h1>
          <p className="mt-3 text-lg text-white/90">
            {lang === "ru"
              ? "2-дневное путешествие через ущелья, водопады, каньоны и горные озёра"
              : lang === "ko"
              ? "협곡, 폭포, 협곡, 고산 호수를 지나는 2일 어드벤처"
              : "2-day adventure through gorges, waterfalls, canyons, and alpine lakes"}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={WA_LINK} target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-white/90">
              <MessageCircle className="h-4 w-4" />
              {lang === "ru" ? "Написать в WhatsApp" : lang === "ko" ? "WhatsApp 문의" : "Book on WhatsApp"}
            </a>
            <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl bg-sky-500 px-5 py-3 text-sm font-semibold text-white hover:bg-sky-600">
              <Send className="h-4 w-4" /> Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-12">

        {/* Tour Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold md:text-3xl">
            {lang === "ru" ? "Обзор тура" : lang === "ko" ? "투어 개요" : "Tour Overview"}
          </h2>
          <div className="mt-4 space-y-4 text-slate-700 leading-relaxed">
            {lang === "ru" ? (
              <>
                <p>Этот приватный 2-дневный трансфер-тур из Каракола в Бишкек создан для путешественников, которые хотят большего, чем просто поездка.</p>
                <p>Вы проедете через одни из самых красивых природных и исторических мест Кыргызстана, комфортно двигаясь в сторону Бишкека.</p>
                <p>Маршрут включает знаменитые красные скалы, водопады, горные озёра, каньоны, древние памятники Шёлкового пути и незабываемую ночёвку в юрточном лагере у озера Сон-Кёль.</p>
                <p>Это идеальный вариант для пар, семей, фотографов и путешественников, которые хотят увидеть настоящий Кыргызстан.</p>
              </>
            ) : lang === "ko" ? (
              <>
                <p>이 프라이빗 2일 트랜스퍼 투어는 카라콜에서 비슈케크로 이동하면서 단순한 이동 그 이상을 원하는 여행자를 위해 설계되었습니다.</p>
                <p>키르기스스탄의 가장 아름다운 자연과 역사적인 장소들을 지나며 비슈케크로 편안하게 이동합니다.</p>
                <p>코스에는 유명한 붉은 암석, 폭포, 고산 호수, 협곡, 고대 실크로드 유적, 그리고 손쿨 호수 근처 유르트 캠프에서의 잊을 수 없는 하룻밤이 포함됩니다.</p>
                <p>커플, 가족, 사진작가, 그리고 진짜 키르기스스탄을 경험하고 싶은 여행자에게 완벽한 옵션입니다.</p>
              </>
            ) : (
              <>
                <p>This private 2-day transfer-tour from Karakol to Bishkek is designed for travelers who want more than just transportation.</p>
                <p>You will travel through some of the most beautiful natural and historical places in Kyrgyzstan while comfortably moving toward Bishkek.</p>
                <p>The route includes famous red rock formations, waterfalls, alpine lakes, canyons, ancient Silk Road monuments, and one unforgettable overnight stay in a traditional yurt camp near Son-Kul Lake.</p>
                <p>This is the perfect option for couples, families, photographers, and travelers who want to experience real Kyrgyzstan.</p>
              </>
            )}
          </div>
        </section>

      </main>

      {/* Mobile CTA */}
      <div className="fixed inset-x-0 bottom-0 z-50 border-t bg-white/95 p-3 shadow-2xl md:hidden">
        <div className="flex gap-2">
          <a href="https://t.me/nomadtransfer" target="_blank" rel="noopener"
            className="flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-3 py-3 text-sm font-semibold text-white hover:bg-sky-600">
            <Send className="h-4 w-4" />
          </a>
          <a href={WA_LINK} target="_blank" rel="noopener"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600 px-4 py-3 text-sm font-semibold text-white hover:bg-emerald-700">
            <MessageCircle className="h-4 w-4" />
            {lang === "ru" ? "Забронировать в WhatsApp" : lang === "ko" ? "WhatsApp 예약" : "Book on WhatsApp"}
          </a>
        </div>
      </div>
      <div className="h-16 md:hidden" />
    </div>
  );
}
