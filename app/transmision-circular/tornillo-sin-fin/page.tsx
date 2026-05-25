import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tornillo sin Fin y Corona — MECANISMOS" };

export default function TornilloSinFinPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transmision-circular" className="hover:text-blue-400">Transmisión Circular</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Tornillo sin fin y Corona</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">🌀</div>
        <h1 className="text-4xl font-black">Tornillo sin Fin y Corona</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Gran reducción de velocidad y autobloqueo</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Cómo funciona?</h2>
        <p className="text-slate-300 leading-relaxed">
          El sistema <strong className="text-white">tornillo sin fin y corona</strong> consiste en un tornillo helicoidal (sin fin) que engrana con una rueda dentada (corona). Los ejes son <strong className="text-white">perpendiculares</strong>. Por cada vuelta del tornillo, la corona solo avanza el número de dientes equivalente a las entradas del tornillo (generalmente 1 o 2). Esto produce una <strong className="text-white">enorme reducción de velocidad</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5">
          <h3 className="font-black text-blue-400 mb-4">Características especiales</h3>
          <ul className="space-y-3 text-sm text-slate-300">
            {[
              ["Autobloqueo", "La corona NO puede mover al tornillo. Solo funciona en un sentido."],
              ["Ejes perpendiculares", "Permite cambiar la dirección del movimiento 90°."],
              ["Gran reducción", "Relaciones de 1:10 a 1:100 en un solo paso."],
              ["Silencioso", "Funcionamiento suave gracias al perfil helicoidal."],
            ].map(([t, d]) => (
              <li key={t as string} className="border-l-2 border-blue-700 pl-3">
                <strong className="text-white">{t as string}:</strong> {d as string}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-5">
          <h3 className="font-black text-yellow-400 mb-3">📐 Relación de transmisión</h3>
          <div className="bg-slate-800 rounded-xl p-4 text-center mb-3">
            <div className="text-lg font-black text-white font-mono">i = Z_corona / n_entradas</div>
          </div>
          <p className="text-slate-400 text-xs leading-relaxed">
            Ejemplo: corona de 40 dientes + tornillo de 1 entrada → i = 40 → por cada 40 vueltas del tornillo, la corona da 1 vuelta.
          </p>
          <div className="mt-4 bg-yellow-950/30 border border-yellow-900 rounded-lg p-3 text-xs text-yellow-300">
            ⚠️ La propiedad de autobloqueo es una característica única: garantiza que la carga no pueda mover el mecanismo en sentido contrario.
          </div>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Gatos de coche (elevadores)", "Reductores industriales", "Afinadores de guitarra", "Mecanismo de dirección", "Grúas y polipastos", "Compuertas de agua"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Tornillo sin Fin y Corona</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/J4WZOnwXWjY?rel=0&modestbranding=1"
            title="Mecanismos: Tornillo sin fin con corona"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
