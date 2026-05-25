import type { Metadata } from "next";

export const metadata: Metadata = { title: "La Palanca — MECANISMOS" };

export default function PalancaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transmision-lineal" className="hover:text-blue-400">Transmisión Lineal</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">La Palanca</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">⚖️</div>
        <h1 className="text-4xl font-black">La Palanca</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10 ml-0">
        <em className="text-blue-300">"Dame un punto de apoyo y moveré el mundo"</em> — Arquímedes
      </p>

      {/* Definición */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-8">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Qué es la palanca?</h2>
        <p className="text-slate-300 leading-relaxed">
          La <strong className="text-white">palanca</strong> es una barra rígida que puede girar alrededor de un punto fijo llamado <strong className="text-white">fulcro</strong> o punto de apoyo. Permite equilibrar o multiplicar fuerzas. Es uno de los mecanismos más simples y antiguos conocidos por la humanidad.
        </p>
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { term: "Fulcro (F)", desc: "Punto de apoyo fijo alrededor del cual gira la palanca" },
            { term: "Potencia (P)", desc: "Fuerza aplicada para mover la carga" },
            { term: "Resistencia (R)", desc: "Carga o fuerza que se quiere vencer" },
          ].map((t) => (
            <div key={t.term} className="bg-slate-800 rounded-lg p-3 text-center">
              <div className="font-black text-blue-300 text-sm mb-1">{t.term}</div>
              <div className="text-slate-400 text-xs">{t.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tipos */}
      <h2 className="text-2xl font-black mb-6">Tipos de Palancas</h2>
      <div className="space-y-4 mb-12">
        {[
          {
            tipo: "1º Grado", emoji: "⚖️",
            desc: "El fulcro está entre la potencia y la resistencia. Puede equilibrar, amplificar o reducir la fuerza.",
            ejemplo: "Tijeras, alicates, balancín, sube-y-baja, arrancaclavos",
            color: "border-blue-700 bg-blue-950/20",
          },
          {
            tipo: "2º Grado", emoji: "🛹",
            desc: "La resistencia está entre el fulcro y la potencia. Siempre amplifica la fuerza (se necesita menos potencia que resistencia).",
            ejemplo: "Carretilla, cascanueces, destapador de botellas",
            color: "border-green-700 bg-green-950/20",
          },
          {
            tipo: "3º Grado", emoji: "💪",
            desc: "La potencia está entre el fulcro y la resistencia. Amplifica el movimiento pero se necesita más fuerza que la carga.",
            ejemplo: "Pinzas, caña de pescar, brazo humano (bíceps)",
            color: "border-orange-700 bg-orange-950/20",
          },
        ].map((p) => (
          <div key={p.tipo} className={`border ${p.color} rounded-2xl p-5`}>
            <div className="flex items-center gap-3 mb-2">
              <span className="text-2xl">{p.emoji}</span>
              <span className="font-black text-white text-lg">Palanca de {p.tipo}</span>
            </div>
            <p className="text-slate-300 text-sm leading-relaxed mb-2">{p.desc}</p>
            <div className="text-xs text-blue-300 font-semibold">📌 Ejemplos: {p.ejemplo}</div>
          </div>
        ))}
      </div>

      {/* Ley de la palanca */}
      <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6 mb-12">
        <h2 className="text-xl font-black text-yellow-400 mb-3">📐 Ley de la palanca</h2>
        <p className="text-slate-300 text-sm mb-4">
          Una palanca está en equilibrio cuando el producto de la potencia por su brazo es igual al producto de la resistencia por su brazo:
        </p>
        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <div className="text-2xl font-black text-white font-mono">P × b<sub>P</sub> = R × b<sub>R</sub></div>
        </div>
        <p className="text-slate-400 text-xs mt-3">donde b<sub>P</sub> = brazo de potencia y b<sub>R</sub> = brazo de resistencia</p>
      </div>

      {/* PhET Simulation */}
      <div className="bg-slate-900 border border-emerald-800 rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🎮</span>
          <div>
            <h3 className="text-lg font-black text-white">Simulación interactiva: Balancing Act (PhET)</h3>
            <p className="text-slate-400 text-sm">Experimenta con palancas y equilibrio — Universidad de Colorado</p>
          </div>
        </div>
        <div className="relative rounded-xl overflow-hidden bg-black" style={{ paddingTop: "62.5%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_es.html"
            title="PhET Balancing Act — La Palanca"
            allowFullScreen
          />
        </div>
        <p className="text-slate-500 text-xs mt-2">Si no carga, prueba a actualizar la página. Requiere conexión a Internet.</p>
      </div>

      {/* Video */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: La Palanca</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/BjmUfxB05WU?rel=0&modestbranding=1"
            title="Mecanismos ESO — La palanca"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
