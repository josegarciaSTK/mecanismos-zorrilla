import type { Metadata } from "next";

export const metadata: Metadata = { title: "Biela-Manivela — MECANISMOS" };

export default function BielaManivelaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transformacion" className="hover:text-blue-400">Transformación</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Biela-Manivela</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">🔧</div>
        <h1 className="text-4xl font-black">Biela-Manivela</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">El mecanismo más importante de la ingeniería mecánica</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Cómo funciona?</h2>
        <p className="text-slate-300 leading-relaxed">
          El sistema <strong className="text-white">biela-manivela</strong> transforma el movimiento circular de la manivela en movimiento lineal alternativo del émbolo (pistón), o viceversa. La <strong className="text-white">manivela</strong> es el elemento que gira, la <strong className="text-white">biela</strong> es la barra que une manivela y émbolo, y el <strong className="text-white">émbolo (pistón)</strong> es el que se desplaza linealmente.
        </p>
      </div>

      {/* Partes */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-5">Partes del mecanismo</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { parte: "Manivela", desc: "Pieza giratoria que realiza movimiento circular continuo alrededor del cigüeñal.", emoji: "🔄" },
            { parte: "Biela", desc: "Barra articulada en ambos extremos que conecta la manivela con el émbolo.", emoji: "📏" },
            { parte: "Émbolo / Pistón", desc: "Pieza que realiza movimiento alternativo lineal dentro del cilindro.", emoji: "⬆️" },
          ].map(p => (
            <div key={p.parte} className="bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">{p.emoji}</div>
              <div className="font-black text-white text-sm mb-1">{p.parte}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PMC y PMI */}
      <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-yellow-400 mb-4">📐 Puntos muertos</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { nombre: "PMC — Punto Muerto Superior", desc: "El émbolo está en su posición más alta (máxima compresión). Manivela y biela alineadas hacia arriba." },
            { nombre: "PMI — Punto Muerto Inferior", desc: "El émbolo está en su posición más baja. Manivela y biela alineadas hacia abajo." },
          ].map(p => (
            <div key={p.nombre} className="bg-slate-800 rounded-xl p-4">
              <div className="font-black text-yellow-300 text-sm mb-2">{p.nombre}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
        <p className="text-slate-400 text-xs mt-4">
          La carrera del émbolo = 2 × radio de la manivela (longitud de la manivela × 2)
        </p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Motor de explosión (automóvil)", "Motor de vapor", "Compresores de aire", "Sierra de vaivén", "Bomba de agua manual", "Máquina de coser"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Biela-Manivela</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/Dyee1JVYsd0?rel=0&modestbranding=1"
            title="Biela-manivela"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
