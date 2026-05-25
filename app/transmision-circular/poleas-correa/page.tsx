import type { Metadata } from "next";

export const metadata: Metadata = { title: "Poleas y Correa — MECANISMOS" };

export default function PoleasCorreaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transmision-circular" className="hover:text-blue-400">Transmisión Circular</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Poleas y Correa</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">🏭</div>
        <h1 className="text-4xl font-black">Poleas y Correa</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Transmisión flexible de movimiento entre ejes alejados</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Cómo funciona?</h2>
        <p className="text-slate-300 leading-relaxed">
          El sistema de <strong className="text-white">poleas y correa</strong> transmite el movimiento de rotación entre dos o más ejes mediante una banda flexible (correa) que envuelve las poleas. La correa puede ser plana, trapezoidal (en V) o dentada. Permite transmitir movimiento entre ejes separados y absorbe vibraciones.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-4 mb-10">
        {[
          { tipo: "Correa plana", desc: "Sección rectangular. Silenciosa y flexible. Puede transmitir movimiento cruzado (poleas opuestas).", emoji: "📏" },
          { tipo: "Correa trapezoidal (V)", desc: "Sección en cuña. Mayor tracción y menor deslizamiento. La más usada en motores.", emoji: "📐" },
          { tipo: "Correa dentada", desc: "Con dientes que encajan en ranuras. Transmisión exacta sin deslizamiento. Usada en distribución de motores.", emoji: "⚙️" },
        ].map(t => (
          <div key={t.tipo} className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
            <div className="text-3xl mb-2">{t.emoji}</div>
            <h3 className="font-black text-white text-sm mb-2">{t.tipo}</h3>
            <p className="text-slate-400 text-xs leading-relaxed">{t.desc}</p>
          </div>
        ))}
      </div>

      <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-yellow-400 mb-3">📐 Relación de transmisión</h2>
        <div className="bg-slate-800 rounded-xl p-4 text-center mb-3">
          <div className="text-xl font-black text-white font-mono">i = n₂/n₁ = D₁/D₂</div>
        </div>
        <ul className="text-slate-400 text-sm space-y-1">
          <li>• Si D₁ &gt; D₂ → la polea conducida gira más rápido</li>
          <li>• Correa abierta: las poleas giran en el <strong className="text-white">mismo sentido</strong></li>
          <li>• Correa cruzada: las poleas giran en <strong className="text-white">sentido contrario</strong></li>
        </ul>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Motor de automóvil (alternador)", "Lavadora (tambor)", "Máquina de coser", "Ventilador de PC", "Cinta transportadora", "Torno de madera"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Poleas y Correa</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/dMpCITN1O_4?rel=0&modestbranding=1"
            title="Poleas y correa"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
