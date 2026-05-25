import type { Metadata } from "next";

export const metadata: Metadata = { title: "Tornillo-Tuerca — MECANISMOS" };

export default function TornilloTuercaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transformacion" className="hover:text-blue-400">Transformación</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Tornillo-Tuerca</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">🔩</div>
        <h1 className="text-4xl font-black">Tornillo-Tuerca</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Convierte movimiento de giro en desplazamiento lineal</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Cómo funciona?</h2>
        <p className="text-slate-300 leading-relaxed">
          El mecanismo <strong className="text-white">tornillo-tuerca</strong> transforma el movimiento circular (rotación del tornillo) en movimiento lineal (avance o retroceso de la tuerca). El tornillo tiene una rosca helicoidal que encaja con la rosca interior de la tuerca. Al girar el tornillo, la tuerca avanza linealmente a lo largo de su eje. La distancia que avanza la tuerca por vuelta del tornillo se llama <strong className="text-white">paso</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6">
          <h2 className="text-xl font-black text-yellow-400 mb-3">📐 Paso del tornillo</h2>
          <div className="bg-slate-800 rounded-xl p-4 text-center mb-3">
            <div className="text-xl font-black text-white font-mono">Avance = paso × n° vueltas</div>
          </div>
          <p className="text-slate-400 text-xs">
            El <strong className="text-white">paso</strong> (p) es la distancia que avanza la tuerca por cada vuelta completa del tornillo.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-black text-blue-400 mb-4">Características</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {[
              "Gran multiplicación de fuerza (alta eficiencia de trabajo)",
              "Movimiento muy preciso y controlable",
              "Generalmente autobloqueante (como el tornillo sin fin)",
              "Velocidad de avance baja pero constante",
            ].map(c => (
              <li key={c} className="flex items-start gap-2">
                <span className="text-blue-400 mt-0.5">•</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Tipos de tornillos de potencia</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { tipo: "Tornillo de paso métrico", desc: "Rosca en V. El más común. Usado para sujeción y unión de piezas.", emoji: "🔩" },
            { tipo: "Tornillo ACME / trapezoidal", desc: "Rosca trapezoidal. Para transmitir potencia: husillos de tornos, tornillos de banco.", emoji: "⚙️" },
            { tipo: "Tornillo de bolas", desc: "Sustituye el contacto deslizante por rodamiento de bolas. Muy preciso y eficiente. CNC.", emoji: "🎱" },
          ].map(t => (
            <div key={t.tipo} className="bg-slate-800 rounded-xl p-4">
              <div className="text-2xl mb-2">{t.emoji}</div>
              <div className="font-black text-sm text-white mb-1">{t.tipo}</div>
              <div className="text-slate-400 text-xs">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Tornillo de banco", "Prensa hidráulica manual", "Gato de coche", "Torno CNC (husillo)", "Silla regulable", "Torniquete médico"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Tornillo-Tuerca</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/Bsoo4B0F-4c?rel=0&modestbranding=1"
            title="Tornillo-tuerca mecanismo"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
