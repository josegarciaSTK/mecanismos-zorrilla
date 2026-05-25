import type { Metadata } from "next";

export const metadata: Metadata = { title: "La Polea — MECANISMOS" };

export default function PoleaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transmision-lineal" className="hover:text-blue-400">Transmisión Lineal</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">La Polea</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">🏗️</div>
        <h1 className="text-4xl font-black">La Polea</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Rueda con surco para una cuerda que facilita el levantamiento de cargas</p>

      {/* Definición */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Qué es una polea?</h2>
        <p className="text-slate-300 leading-relaxed">
          Una <strong className="text-white">polea</strong> es una rueda con un surco o ranura por donde pasa una cuerda, cable o cadena. Permite cambiar la dirección de una fuerza o, en sistemas combinados, reducir el esfuerzo necesario para elevar una carga.
        </p>
      </div>

      {/* Tipos */}
      <h2 className="text-2xl font-black mb-6">Tipos de Poleas</h2>
      <div className="grid md:grid-cols-3 gap-5 mb-12">
        {[
          {
            tipo: "Polea Fija",
            emoji: "⬆️",
            desc: "Su eje está fijo. Solo cambia la dirección de la fuerza. No reduce el esfuerzo: la fuerza aplicada es igual a la carga.",
            ventaja: "Permite tirar hacia abajo en vez de hacia arriba",
            color: "border-blue-700",
          },
          {
            tipo: "Polea Móvil",
            emoji: "🔼",
            desc: "Su eje se mueve con la carga. Reduce el esfuerzo a la mitad, aunque hay que tirar el doble de cuerda.",
            ventaja: "Reduce el esfuerzo necesario al 50%",
            color: "border-green-700",
          },
          {
            tipo: "Polipasto",
            emoji: "🏭",
            desc: "Combinación de poleas fijas y móviles. Cuantas más poleas, menos fuerza se necesita (pero más recorrido de cuerda).",
            ventaja: "Grandes reducciones de esfuerzo",
            color: "border-orange-700",
          },
        ].map((p) => (
          <div key={p.tipo} className={`bg-slate-900 border ${p.color} rounded-2xl p-5`}>
            <div className="text-3xl mb-2">{p.emoji}</div>
            <h3 className="font-black text-white mb-2">{p.tipo}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">{p.desc}</p>
            <div className="text-xs text-blue-300 font-semibold">✅ {p.ventaja}</div>
          </div>
        ))}
      </div>

      {/* Fórmula */}
      <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-black text-yellow-400 mb-3">📐 Ventaja mecánica</h2>
        <p className="text-slate-300 text-sm mb-4">
          La ventaja mecánica de un sistema de poleas es el número de segmentos de cuerda que sostienen la carga:
        </p>
        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <div className="text-xl font-black text-white font-mono">VM = Carga / Esfuerzo = n° de cuerdas que sostienen la polea móvil</div>
        </div>
      </div>

      {/* Usos */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones reales</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Grúas de construcción", "Montacargas", "Elevadores de minas", "Velas de barcos", "Sistemas de persianas", "Funiculares"].map((uso) => (
            <div key={uso} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{uso}</div>
          ))}
        </div>
      </div>

      {/* Video */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Poleas y correa</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/69GZXIgNCEg?rel=0&modestbranding=1"
            title="Polea simple fija y móvil"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
