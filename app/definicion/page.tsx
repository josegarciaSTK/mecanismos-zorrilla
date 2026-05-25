import type { Metadata } from "next";

export const metadata: Metadata = { title: "Definición y Tipos de Movimiento — MECANISMOS" };

const movimientos = [
  { nombre: "Movimiento Lineal", desc: "El objeto se desplaza en línea recta. Puede ser rectilíneo uniforme o uniformemente acelerado.", emoji: "➡️", ejemplo: "Pistón, cajón deslizante" },
  { nombre: "Movimiento Circular", desc: "El objeto gira alrededor de un eje fijo, describiendo una circunferencia completa.", emoji: "🔄", ejemplo: "Rueda, ventilador, motor eléctrico" },
  { nombre: "Movimiento Oscilatorio", desc: "El objeto se mueve alternativamente a ambos lados de una posición de equilibrio, como un péndulo.", emoji: "↔️", ejemplo: "Péndulo de reloj, columpio" },
  { nombre: "Movimiento Alternativo", desc: "El objeto se desplaza en vaivén en línea recta, yendo y volviendo entre dos puntos.", emoji: "⬅️➡️", ejemplo: "Pistón de motor, sierra de vaivén" },
];

export default function DefinicionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Breadcrumb */}
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Definición y Tipos de Movimiento</span>
      </div>

      <h1 className="text-4xl font-black mb-2">Definición de Máquina y Mecanismo</h1>
      <div className="text-slate-400 text-lg mb-10">Tipos de Movimientos</div>

      {/* Definiciones */}
      <div className="grid md:grid-cols-2 gap-6 mb-14">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-3xl mb-3">🏭</div>
          <h2 className="text-xl font-black text-blue-400 mb-3">¿Qué es una Máquina?</h2>
          <p className="text-slate-300 leading-relaxed">
            Una <strong className="text-white">máquina</strong> es un sistema formado por varios mecanismos y elementos estructurales que trabajan juntos para realizar una función útil: transformar, transmitir o aprovechar energía o movimiento.
          </p>
          <div className="mt-4 bg-blue-950/40 border border-blue-900 rounded-lg p-3 text-sm text-blue-300">
            Ejemplos: lavadora, automóvil, ascensor, grúa, bicicleta
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-3xl mb-3">⚙️</div>
          <h2 className="text-xl font-black text-blue-400 mb-3">¿Qué es un Mecanismo?</h2>
          <p className="text-slate-300 leading-relaxed">
            Un <strong className="text-white">mecanismo</strong> es un conjunto de elementos sólidos articulados entre sí que <strong className="text-white">transmiten o transforman</strong> el movimiento y la fuerza entre un elemento motor (entrada) y un elemento resistente (salida).
          </p>
          <div className="mt-4 bg-blue-950/40 border border-blue-900 rounded-lg p-3 text-sm text-blue-300">
            Ejemplos: engranaje, palanca, polea, cremallera, biela-manivela
          </div>
        </div>
      </div>

      {/* Diferencia */}
      <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6 mb-14">
        <h2 className="text-lg font-black text-yellow-400 mb-3">💡 Diferencia clave</h2>
        <p className="text-slate-300">
          Una <strong className="text-white">máquina</strong> está compuesta por varios <strong className="text-white">mecanismos</strong>. Por ejemplo, un automóvil (máquina) contiene el mecanismo de dirección por cremallera, la caja de cambios con engranajes, y la transmisión con correa y polea. Los mecanismos son las "piezas funcionales" de una máquina.
        </p>
      </div>

      {/* Tipos de movimiento */}
      <h2 className="text-3xl font-black mb-8">Tipos de Movimientos</h2>
      <div className="grid sm:grid-cols-2 gap-5 mb-14">
        {movimientos.map((m) => (
          <div key={m.nombre} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="text-3xl mb-3">{m.emoji}</div>
            <h3 className="text-lg font-black text-white mb-2">{m.nombre}</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-3">{m.desc}</p>
            <div className="text-xs text-blue-400 font-semibold">📌 {m.ejemplo}</div>
          </div>
        ))}
      </div>

      {/* Video */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Tipos de Movimiento</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/2A3etyhUD-s?rel=0&modestbranding=1"
            title="Mecanismos: tipos de movimiento"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      {/* Nav buttons */}
      <div className="mt-10 flex gap-4 flex-wrap">
        <a href="/automatismos" className="bg-blue-700 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
          Siguiente: Automatismos y robots →
        </a>
        <a href="/transmision-lineal" className="bg-slate-800 hover:bg-slate-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors">
          Transmisión Lineal →
        </a>
      </div>
    </div>
  );
}
