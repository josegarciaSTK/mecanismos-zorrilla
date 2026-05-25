import type { Metadata } from "next";

export const metadata: Metadata = { title: "Piñón-Cremallera — MECANISMOS" };

export default function PinonCremalleraPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transformacion" className="hover:text-blue-400">Transformación</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Piñón-Cremallera</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">📏</div>
        <h1 className="text-4xl font-black">Piñón-Cremallera</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Convierte movimiento circular en movimiento lineal y viceversa</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Cómo funciona?</h2>
        <p className="text-slate-300 leading-relaxed">
          El sistema <strong className="text-white">piñón-cremallera</strong> está formado por un piñón (rueda dentada circular) que engrana con una cremallera (barra dentada recta). Al girar el piñón, la cremallera se desplaza linealmente. También puede funcionar al revés: si la cremallera se mueve, el piñón gira. Es un mecanismo de <strong className="text-white">transformación bidireccional</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6">
          <h2 className="text-xl font-black text-yellow-400 mb-3">📐 Cálculo del avance</h2>
          <div className="bg-slate-800 rounded-xl p-4 text-center mb-3">
            <div className="text-lg font-black text-white font-mono">v_cremallera = π × D_piñón × n</div>
          </div>
          <p className="text-slate-400 text-xs">
            Donde D es el diámetro primitivo del piñón y n es la velocidad en rev/s.<br />
            También: avance por vuelta = π × D (o Z × paso del diente)
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-black text-blue-400 mb-4">Características</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              "Transformación bidireccional: giro ↔ lineal",
              "Sin límite de recorrido (cremallera de cualquier longitud)",
              "Transmisión exacta sin deslizamiento",
              "Alta resistencia y precisión",
            ].map(c => (
              <li key={c} className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Dirección de automóviles", "Ascensor de cremallera", "Taladradora (alimentación)", "Brazo de robot CNC", "Tren de cremallera (montaña)", "Fresadora (mesa de trabajo)"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Piñón-Cremallera</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/YwaERJ640DM?rel=0&modestbranding=1"
            title="Piñón cremallera"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
