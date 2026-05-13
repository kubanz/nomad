"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";

interface Props {
  photos: string[];
  initialIndex?: number;
  onClose: () => void;
}

export default function PhotoGalleryModal({ photos, initialIndex = 0, onClose }: Props) {
  const [idx, setIdx] = useState(initialIndex);
  const touchStartX = useRef<number | null>(null);

  const prev = useCallback(() => setIdx((i) => (i - 1 + photos.length) % photos.length), [photos.length]);
  const next = useCallback(() => setIdx((i) => (i + 1) % photos.length), [photos.length]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowLeft")  prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape")     onClose();
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [prev, next, onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  }

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col bg-black/95"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      onClick={onClose}
    >
      {/* Top bar */}
      <div className="flex shrink-0 items-center justify-between px-4 py-3" onClick={(e) => e.stopPropagation()}>
        <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white">
          {idx + 1} / {photos.length}
        </span>
        <button
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white text-xl hover:bg-white/20"
        >
          ✕
        </button>
      </div>

      {/* Main image */}
      <div className="relative flex flex-1 items-center justify-center overflow-hidden px-12" onClick={(e) => e.stopPropagation()}
        <img
          key={idx}
          src={photos[idx]}
          alt={`Photo ${idx + 1}`}
          className="max-h-full max-w-full rounded-xl object-contain shadow-2xl"
        />

        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-3xl leading-none hover:bg-white/25 select-none"
        >
          ‹
        </button>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-2 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white text-3xl leading-none hover:bg-white/25 select-none"
        >
          ›
        </button>
      </div>

      {/* Thumbnails */}
      <div className="shrink-0 overflow-x-auto px-4 py-3" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-2">
          {photos.map((p, i) => (
            <button
              key={i}
              onClick={() => setIdx(i)}
              className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                i === idx ? "border-white opacity-100 scale-105" : "border-transparent opacity-50 hover:opacity-80"
              }`}
            >
              <img src={p} alt="" className="h-full w-full object-cover" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
