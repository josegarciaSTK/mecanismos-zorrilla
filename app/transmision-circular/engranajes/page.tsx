import type { Metadata } from "next";

export const metadata: Metadata = { title: "Engranajes — MECANISMOS" };

export default function EngrajajesPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transmision-circular" className="hover:text-blue-400">Transmisión Circular</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Engranajes</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">⚙️</div>
        <h1 className="text-4xl font-black">Engranajes</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Ruedas dentadas para transmisión exacta de movimiento</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Qué son los engranajes?</h2>
        <p className="text-slate-300 leading-relaxed">
          Los <strong className="text-white">engranajes</strong> son ruedas dentadas que engranan entre sí para transmitir movimiento. Los dientes de una rueda encajan con los de la siguiente, asegurando una transmisión <strong className="text-white">exacta sin deslizamiento</strong>. Son fundamentales en relojes, cajas de cambio y todo tipo de maquinaria.
        </p>
      </div>

      {/* Tipos */}
      <h2 className="text-2xl font-black mb-6">Tipos de Engranajes</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-10">
        {[
          { tipo: "Engranaje recto (cilíndrico)", desc: "Los dientes son paralelos al eje. Son los más comunes y sencillos. Los ejes deben ser paralelos.", emoji: "⚙️" },
          { tipo: "Engranaje helicoidal", desc: "Los dientes están inclinados respecto al eje. Son más silenciosos y transmiten mayor potencia.", emoji: "🌀" },
          { tipo: "Engranaje cónico", desc: "Ruedas con forma de cono. Permiten transmitir movimiento entre ejes que se cruzan (generalmente 90°).", emoji: "🔺" },
          { tipo: "Engranaje epicicloidal", desc: "Sistema planetario con engranajes que giran alrededor de otro. Usado en cajas automáticas.", emoji: "🪐" },
        ].map(t => (
          <div key={t.tipo} className="bg-slate-900 border border-slate-800 rounded-xl p-5">
            <div className="text-2xl mb-2">{t.emoji}</div>
            <div className="font-black text-white mb-2">{t.tipo}</div>
            <p className="text-slate-400 text-sm leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>

      {/* Fórmula */}
      <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-yellow-400 mb-3">📐 Relación de transmisión</h2>
        <div className="bg-slate-800 rounded-xl p-4 text-center mb-3">
          <div className="text-xl font-black text-white font-mono">i = n₂/n₁ = Z₁/Z₂</div>
        </div>
        <ul className="text-slate-400 text-sm space-y-1">
          <li>• n = velocidad en rpm (revoluciones por minuto)</li>
          <li>• Z = número de dientes</li>
          <li>• Los engranajes exteriores giran en <strong className="text-white">sentido contrario</strong></li>
          <li>• Si Z₁ &lt; Z₂ → reducción de velocidad, aumento de par</li>
        </ul>
      </div>

      {/* Crocodile */}
      <div className="bg-slate-900 border border-purple-800 rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🐊</span>
          <div>
            <h3 className="text-lg font-black text-white">Simulación: Crocodile Technology</h3>
            <p className="text-slate-400 text-sm">Software de simulación de mecanismos y circuitos eléctricos</p>
          </div>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          <strong className="text-white">Crocodile Technology</strong> (actualmente llamado <strong className="text-white">Yenka Technology</strong>) es un software de simulación que permite crear y simular engranajes, cadenas, poleas y otros mecanismos de forma interactiva. En clase se puede ver cómo cambia la velocidad de rotación según el número de dientes de cada engranaje.
        </p>
        <div className="bg-purple-950/30 border border-purple-900 rounded-xl p-4 text-sm text-purple-300">
          💡 En la simulación con Crocodile, puedes ajustar el número de dientes de cada engranaje y observar cómo varía la velocidad de la rueda conducida en tiempo real.
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Caja de cambios", "Reloj mecánico", "Diferencial de coche", "Taladro eléctrico", "Bicicleta", "Ascensor"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Engranajes</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/6BXG3QegTFg?rel=0&modestbranding=1"
            title="Engranajes"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
