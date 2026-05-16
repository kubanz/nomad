"use client";
import React from "react";
import { MessageCircle, Send } from "lucide-react";

const BRAND_NAME = "Nomad Transfers KG";
const WHATSAPP_PHONE = "+996552291808";

export default function Footer() {
  return (
    <footer className="border-t bg-white/80">
      <div className="mx-auto max-w-6xl px-4 py-8">
        {/* Company Info */}
        <div className="mb-6 grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="mb-3 font-bold text-slate-900">Company</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="/about" className="hover:text-emerald-600">
                About Us
              </a>
              <a href="/drivers" className="hover:text-emerald-600">
                Our Drivers
              </a>
              <a href="/fleet" className="hover:text-emerald-600">
                Our Fleet
              </a>
              <a href="/why-choose-us" className="hover:text-emerald-600">
                Why Choose Us
              </a>
              <a href="/pricing" className="hover:text-emerald-600">
                Pricing
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-slate-900">Popular Routes</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="/transfers/bishkek-to-karakol" className="hover:text-emerald-600">
                Bishkek → Karakol
              </a>
              <a href="/transfers/almaty-to-karakol" className="hover:text-emerald-600">
                Almaty → Karakol
              </a>
              <a href="/transfers/manas-airport-to-karakol" className="hover:text-emerald-600">
                Airport → Karakol
              </a>
              <a href="/transfers/bishkek-to-cholpon-ata" className="hover:text-emerald-600">
                Bishkek → Cholpon-Ata
              </a>
              <a href="/transfers/bishkek-to-osh" className="hover:text-emerald-600">
                Bishkek → Osh
              </a>
              <a href="/transfers/almaty-to-bishkek" className="hover:text-emerald-600">
                Almaty → Bishkek
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-slate-900">Return Routes</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="/transfers/karakol-to-bishkek" className="hover:text-emerald-600">
                Karakol → Bishkek
              </a>
              <a href="/transfers/karakol-to-almaty" className="hover:text-emerald-600">
                Karakol → Almaty
              </a>
              <a href="/transfers/karakol-to-manas-airport" className="hover:text-emerald-600">
                Karakol → Airport
              </a>
              <a href="/transfers/cholpon-ata-to-bishkek" className="hover:text-emerald-600">
                Cholpon-Ata → Bishkek
              </a>
              <a href="/transfers/osh-to-bishkek" className="hover:text-emerald-600">
                Osh → Bishkek
              </a>
              <a href="/transfers/bishkek-to-almaty" className="hover:text-emerald-600">
                Bishkek → Almaty
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-3 font-bold text-slate-900">Travel Guides</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600">
              <a href="/guides/bishkek-to-karakol-winter" className="hover:text-emerald-600">
                Winter Travel Guide
              </a>
              <a href="/guides/best-time-visit-karakol" className="hover:text-emerald-600">
                Best Time to Visit
              </a>
              <a href="/guides/almaty-to-bishkek-travel-guide" className="hover:text-emerald-600">
                Almaty-Bishkek Guide
              </a>
              <a href="/guides/transfer-prices-kyrgyzstan" className="hover:text-emerald-600">
                Transfer Prices
              </a>
              <a href="/guides/kyrgyzstan-kazakhstan-border-crossing" className="hover:text-emerald-600">
                Border Crossing
              </a>
              <a href="/guides/issyk-kul-travel-guide" className="hover:text-emerald-600">
                Issyk-Kul Guide
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t pt-6 md:flex-row">
          <p className="text-xs text-slate-600">© {new Date().getFullYear()} {BRAND_NAME}</p>
          <div className="flex gap-2">
            <a
              href="https://t.me/nomadtransfer"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500 px-4 py-2 text-sm text-sky-600 hover:bg-sky-50"
            >
              <Send className="h-4 w-4" /> Telegram
            </a>
            <a
              href={`https://wa.me/${WHATSAPP_PHONE.replace(/[^0-9+]/g, "")}?text=Hi!%20Karakol%20transfer`}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-xl border border-emerald-500 px-4 py-2 text-sm text-emerald-600 hover:bg-emerald-50"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
