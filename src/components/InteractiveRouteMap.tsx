"use client";
import React, { useEffect, useRef, useState } from "react";

const MAP_STOPS = [
  { id: 0, lat: 42.48813, lng: 78.40475, name: "Karakol",           desc: "Start · Hotel pickup",           day: 1, time: "08:00", type: "start"     },
  { id: 1, lat: 42.31662, lng: 78.23987, name: "Djety-Oguz",        desc: "Red sandstone cliffs",            day: 1, time: "10:00"                      },
  { id: 2, lat: 42.00627, lng: 77.61576, name: "Barskoon Valley",   desc: "Waterfall & Gagarin monument",    day: 1, time: "12:00"                      },
  { id: 3, lat: 42.15547, lng: 77.35252, name: "Skazka Canyon",     desc: "Fairytale Canyon",                day: 1, time: "14:00"                      },
  { id: 4, lat: 41.89674, lng: 75.20574, name: "Son-Kul Lake",      desc: "Alpine lake · Overnight yurt",   day: 1, time: "17:00", type: "overnight"   },
  { id: 5, lat: 42.31916, lng: 75.89393, name: "Orto-Tokoi",        desc: "Scenic mountain reservoir",       day: 2, time: "10:00"                      },
  { id: 6, lat: 42.74651, lng: 75.24996, name: "Burana Tower",      desc: "11th century Silk Road minaret", day: 2, time: "14:00"                      },
  { id: 7, lat: 42.87584, lng: 74.60287, name: "Bishkek",           desc: "End · Hotel/Airport drop-off",   day: 2, time: "18:00", type: "end"         },
];

function loadScript(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const existing = document.querySelector(`script[src="${src}"]`);
    if (existing) { resolve(); return; }
    const s = document.createElement("script");
    s.src = src;
    s.onload = () => resolve();
    s.onerror = reject;
    document.head.appendChild(s);
  });
}

function loadLink(href: string, id: string) {
  if (document.querySelector(`#${id}`)) return;
  const l = document.createElement("link");
  l.id = id;
  l.rel = "stylesheet";
  l.href = href;
  document.head.appendChild(l);
}

interface Props {
  lang: "en" | "ru" | "ko";
}

export default function InteractiveRouteMap({ lang }: Props) {
  const containerRef   = useRef<HTMLDivElement>(null);
  const mapRef         = useRef<any>(null);
  const carMarkerRef   = useRef<any>(null);
  const markersRef     = useRef<any[]>([]);
  const routeRef       = useRef<[number, number][]>([]);
  const carIdxRef      = useRef(0);
  const rafRef         = useRef<number>(0);
  const playingRef     = useRef(false);
  const stopIdxRef     = useRef(0);
  const speedRef       = useRef(4);

  const [playing,     setPlaying]     = useState(false);
  const [speed,       setSpeed]       = useState(4);
  const [loading,     setLoading]     = useState(true);
  const [curStop,     setCurStop]     = useState(MAP_STOPS[0].name);
  const [nxtStop,     setNxtStop]     = useState(MAP_STOPS[1].name);
  const [statusTitle, setStatusTitle] = useState(
    lang === "ru" ? "Готов к старту" : lang === "ko" ? "준비 완료" : "Ready to start"
  );

  const L_PLAY  = lang === "ru" ? "Старт" : lang === "ko" ? "재생" : "Play";
  const L_PAUSE = lang === "ru" ? "Пауза" : lang === "ko" ? "일시정지" : "Pause";
  const L_RESET = lang === "ru" ? "Сброс" : lang === "ko" ? "초기화" : "Reset";
  const L_SPEED = lang === "ru" ? "Скорость" : lang === "ko" ? "속도" : "Speed";
  const L_NOW   = lang === "ru" ? "Сейчас" : lang === "ko" ? "현재" : "Now";
  const L_NEXT  = lang === "ru" ? "Далее" : lang === "ko" ? "다음" : "Next";
  const L_TITLE = lang === "ru" ? "Интерактивная карта маршрута" : lang === "ko" ? "인터랙티브 루트 맵" : "Interactive Route Map";

  function dotColor(stop: typeof MAP_STOPS[0]) {
    if (stop.type === "start")     return "#16a34a";
    if (stop.type === "end")       return "#1e293b";
    if (stop.type === "overnight") return "#4f46e5";
    return stop.day === 1 ? "#0d9488" : "#0284c7";
  }

  function makeStopIcon(stop: typeof MAP_STOPS[0]) {
    const L = (window as any).L;
    const bg = dotColor(stop);
    const label = stop.type === "start" ? "▶" : stop.type === "end" ? "✓" : stop.type === "overnight" ? "🌙" : String(stop.id + 1);
    return L.divIcon({
      className: "",
      html: `<div style="width:30px;height:30px;border-radius:50%;background:${bg};border:3px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;color:#fff;">${label}</div>`,
      iconSize: [30, 30],
      iconAnchor: [15, 15],
    });
  }

  function makeCarIcon(angle = 0) {
    const L = (window as any).L;
    return L.divIcon({
      className: "",
      html: `<div style="font-size:22px;transform:rotate(${angle}deg);filter:drop-shadow(0 3px 6px rgba(0,0,0,.3));">🚗</div>`,
      iconSize: [28, 28],
      iconAnchor: [14, 14],
    });
  }

  function animateCar() {
    if (!playingRef.current || routeRef.current.length === 0) return;
    const L = (window as any).L;

    carIdxRef.current += speedRef.current;
    const coords = routeRef.current;

    if (carIdxRef.current >= coords.length) {
      carIdxRef.current = coords.length - 1;
      playingRef.current = false;
      setPlaying(false);
      setStatusTitle(lang === "ru" ? "🏁 Тур завершён!" : lang === "ko" ? "🏁 투어 완료!" : "🏁 Tour completed!");
      setCurStop("Bishkek");
      setNxtStop("—");
      return;
    }

    const idx    = Math.floor(carIdxRef.current);
    const latlng = coords[idx];
    carMarkerRef.current.setLatLng(latlng);

    if (idx < coords.length - 1) {
      const next  = coords[idx + 1];
      const angle = Math.atan2(next[1] - latlng[1], next[0] - latlng[0]) * 180 / Math.PI;
      carMarkerRef.current.setIcon(makeCarIcon(angle + 90));
    }

    // Follow car: pan if it goes outside visible bounds
    if (mapRef.current) {
      const bounds = mapRef.current.getBounds();
      if (!bounds.contains(latlng)) {
        mapRef.current.panTo(latlng, { animate: true, duration: 0.8, easeLinearity: 0.5 });
      }
    }

    // nearest stop
    let minDist = Infinity, closest = 0;
    MAP_STOPS.forEach((s, i) => {
      const d = mapRef.current.distance(latlng, L.latLng(s.lat, s.lng));
      if (d < minDist) { minDist = d; closest = i; }
    });
    if (minDist < 1000 && closest !== stopIdxRef.current) {
      // Close previous tooltip, open new one
      markersRef.current[stopIdxRef.current]?.closeTooltip();
      markersRef.current[closest]?.openTooltip();
      stopIdxRef.current = closest;
      const s = MAP_STOPS[closest];
      const nxt = MAP_STOPS[Math.min(closest + 1, MAP_STOPS.length - 1)];
      setCurStop(s.name);
      setNxtStop(closest === MAP_STOPS.length - 1 ? "—" : nxt.name);
      setStatusTitle(`📍 ${s.name}`);
    }

    rafRef.current = requestAnimationFrame(animateCar);
  }

  function togglePlay() {
    if (routeRef.current.length === 0) return;
    const next = !playingRef.current;
    playingRef.current = next;
    setPlaying(next);
    if (next) {
      setStatusTitle(lang === "ru" ? "🚗 Едем..." : lang === "ko" ? "🚗 이동 중..." : "🚗 Tour in progress");
      animateCar();
    } else {
      cancelAnimationFrame(rafRef.current);
    }
  }

  function reset() {
    cancelAnimationFrame(rafRef.current);
    playingRef.current = false;
    setPlaying(false);
    carIdxRef.current  = 0;
    stopIdxRef.current = 0;
    if (carMarkerRef.current && routeRef.current.length > 0) {
      carMarkerRef.current.setLatLng(routeRef.current[0]);
      carMarkerRef.current.setIcon(makeCarIcon());
    }
    // Reset view to show full route
    if (mapRef.current) {
      const L = (window as any).L;
      const waypoints = MAP_STOPS.map((s) => L.latLng(s.lat, s.lng));
      mapRef.current.fitBounds(L.latLngBounds(waypoints), { padding: [40, 40], animate: true });
    }
    markersRef.current.forEach((m) => m?.closeTooltip());
    markersRef.current[0]?.openTooltip();
    setCurStop(MAP_STOPS[0].name);
    setNxtStop(MAP_STOPS[1].name);
    setStatusTitle(lang === "ru" ? "Готов к старту" : lang === "ko" ? "준비 완료" : "Ready to start");
  }

  function changeSpeed(v: number) {
    speedRef.current = v;
    setSpeed(v);
  }

  useEffect(() => {
    let destroyed = false;

    async function init() {
      loadLink("https://unpkg.com/leaflet@1.9.4/dist/leaflet.css", "leaflet-css");
      loadLink("https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.css", "lrm-css");
      await loadScript("https://unpkg.com/leaflet@1.9.4/dist/leaflet.js");
      await loadScript("https://unpkg.com/leaflet-routing-machine@3.2.12/dist/leaflet-routing-machine.min.js");

      if (destroyed || !containerRef.current || mapRef.current) return;
      const L = (window as any).L;

      const map = L.map(containerRef.current, {
        center: [42.2, 76.5],
        zoom: 8,
        scrollWheelZoom: false,
        tap: false,
      });
      mapRef.current = map;

      // Ensure correct size on mobile
      setTimeout(() => map.invalidateSize(), 200);

      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution: "© OpenStreetMap © CARTO",
        maxZoom: 18,
      }).addTo(map);

      markersRef.current = [];
      MAP_STOPS.forEach((s) => {
        const m = L.marker([s.lat, s.lng], { icon: makeStopIcon(s) })
          .addTo(map)
          .bindTooltip(
            `<b style="font-size:12px">${s.name}</b><br><span style="color:#64748b;font-size:11px">Day ${s.day} · ${s.time}</span>`,
            { direction: "top", offset: [0, -16], className: "stop-label-tt" }
          );
        markersRef.current.push(m);
      });

      const waypoints = MAP_STOPS.map((s) => L.latLng(s.lat, s.lng));

      L.Routing.control({
        waypoints,
        routeWhileDragging: false,
        addWaypoints: false,
        show: false,
        createMarker: () => null,
        lineOptions: { styles: [{ color: "#0d9488", weight: 5, opacity: 0.85 }] },
      })
        .addTo(map)
        .on("routesfound", (e: any) => {
          if (destroyed) return;
          routeRef.current = e.routes[0].coordinates.map((c: any) => [c.lat, c.lng]);
          setLoading(false);

          carMarkerRef.current = L.marker(routeRef.current[0], {
            icon: makeCarIcon(),
            zIndexOffset: 1000,
          }).addTo(map);

          // Show first stop tooltip on load
          markersRef.current[0]?.openTooltip();

          setTimeout(() => {
            if (!destroyed) togglePlay();
          }, 800);
        });

      map.fitBounds(L.latLngBounds(waypoints), { padding: [40, 40] });
    }

    init();

    return () => {
      destroyed = true;
      cancelAnimationFrame(rafRef.current);
      if (mapRef.current) { mapRef.current.remove(); mapRef.current = null; }
    };
  }, []);

  return (
    <section id="route-map" className="mb-14">
      <div className="mb-5">
        <p className="text-xs font-bold uppercase tracking-widest text-emerald-600">
          {lang === "ru" ? "Карта" : lang === "ko" ? "지도" : "Map"}
        </p>
        <h2 className="mt-1 text-2xl font-bold md:text-3xl">{L_TITLE}</h2>
      </div>

      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-4 py-3">
          <span className="text-sm font-semibold text-slate-800">🗺️ {MAP_STOPS[0].name} → {MAP_STOPS[MAP_STOPS.length - 1].name}</span>
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              disabled={loading}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-600 text-white text-sm hover:bg-emerald-700 disabled:opacity-40"
              aria-label={playing ? L_PAUSE : L_PLAY}
            >
              {playing ? "⏸" : "▶"}
            </button>
            <button
              onClick={reset}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-400 text-white text-sm hover:bg-slate-500"
              aria-label={L_RESET}
            >
              ↺
            </button>
            <label className="flex items-center gap-2 text-xs text-slate-500">
              {L_SPEED}:
              <input
                type="range" min={1} max={10} value={speed}
                onChange={(e) => changeSpeed(Number(e.target.value))}
                className="w-20 accent-emerald-600"
              />
              <span className="w-6 text-slate-700 font-medium">{speed}x</span>
            </label>
          </div>
        </div>

        {/* Map */}
        <div className="relative">
          <div ref={containerRef} style={{ height: 480, width: "100%" }} />
          {loading && (
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50/80 z-[1000]">
              <span className="rounded-full bg-white px-5 py-2.5 text-sm text-slate-500 shadow-md">
                🚗 {lang === "ru" ? "Строим маршрут..." : lang === "ko" ? "경로 계산 중..." : "Calculating route..."}
              </span>
            </div>
          )}
        </div>

        {/* Info bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50 px-4 py-3">
          <span className="text-sm font-semibold text-slate-800">{statusTitle}</span>
          <div className="flex gap-4 text-xs text-slate-500">
            <span>📍 {L_NOW}: <b className="text-slate-700">{curStop}</b></span>
            <span>🎯 {L_NEXT}: <b className="text-slate-700">{nxtStop}</b></span>
          </div>
        </div>
      </div>

      <style>{`
        .leaflet-routing-container,.leaflet-routing-alt{display:none!important}
        .stop-label-tt{background:white;border:1px solid #e2e8f0;border-radius:8px;padding:4px 8px;box-shadow:0 2px 8px rgba(0,0,0,.12);white-space:nowrap;}
        .stop-label-tt::before{display:none;}
        .leaflet-tooltip-top.stop-label-tt::before{display:none;}
      `}</style>
    </section>
  );
}
