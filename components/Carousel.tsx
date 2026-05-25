"use client";
import { useState, useEffect, useCallback } from "react";

const slides = [
  {
    img: "https://img.youtube.com/vi/6BXG3QegTFg/hqdefault.jpg",
    title: "Engranajes",
    desc: "Ruedas dentadas que transmiten movimiento con relación exacta",
    href: "/transmision-circular/engranajes",
  },
  {
    img: "https://img.youtube.com/vi/YwaERJ640DM/hqdefault.jpg",
    title: "Cremallera y Piñón",
    desc: "Transforma movimiento circular en lineal",
    href: "/transformacion/pinon-cremallera",
  },
  {
    img: "https://img.youtube.com/vi/dMpCITN1O_4/hqdefault.jpg",
    title: "Poleas y Correa",
    desc: "Transmisión flexible entre ejes separados",
    href: "/transmision-circular/poleas-correa",
  },
  {
    img: "https://img.youtube.com/vi/JtlUHlNDv6o/hqdefault.jpg",
    title: "Ruedas de Fricción",
    desc: "Transmisión por contacto directo sin dientes",
    href: "/transmision-circular/ruedas-friccion",
  },
  {
    img: "https://img.youtube.com/vi/Dyee1JVYsd0/hqdefault.jpg",
    title: "Biela-Manivela",
    desc: "Convierte movimiento circular en alternativo",
    href: "/transformacion/biela-manivela",
  },
  {
    img: "https://img.youtube.com/vi/aJi50a4pjq0/hqdefault.jpg",
    title: "Leva y Excéntrica",
    desc: "Movimiento circular → movimiento variable",
    href: "/transformacion/leva-excentrica",
  },
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);

  useEffect(() => {
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-slate-900 shadow-2xl border border-slate-800" style={{ aspectRatio: "16/6" }}>
      {/* Slides */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={slide.img}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <a href={slide.href} className="group inline-block">
              <div className="text-xl md:text-2xl font-black text-white mb-1 group-hover:text-blue-300 transition-colors">
                {slide.title}
              </div>
              <div className="text-sm text-slate-300">{slide.desc}</div>
            </a>
          </div>
        </div>
      ))}

      {/* Prev/Next buttons */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
        aria-label="Anterior"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
        aria-label="Siguiente"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 right-6 z-20 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all ${i === current ? "w-5 h-2 bg-blue-400" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
