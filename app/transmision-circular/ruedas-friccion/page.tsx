import type { Metadata } from "next";

export const metadata: Metadata = { title: "Ruedas de Fricción — MECANISMOS" };

export default function RuedasFriccionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transmision-circular" className="hover:text-blue-400">Transmisión Circular</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Ruedas de Fricción</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">🔄</div>
        <h1 className="text-4xl font-black">Ruedas de Fricción</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Transmisión de movimiento por contacto directo entre superficies</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Cómo funcionan?</h2>
        <p className="text-slate-300 leading-relaxed">
          Las <strong className="text-white">ruedas de fricción</strong> son ruedas lisas (sin dientes) que se mantienen en contacto entre sí. La fuerza se transmite gracias a la <strong className="text-white">fricción</strong> entre sus superficies. No requieren engrase ni piezas dentadas. Giran en sentido contrario cuando contactan externamente, o en el mismo sentido con contacto interno.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900 border border-green-800/50 rounded-2xl p-5">
          <h3 className="font-black text-green-400 mb-3">✅ Ventajas</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {["Funcionamiento silencioso", "No necesitan lubricación especial", "Absorben vibraciones y golpes", "Bajo coste de fabricación", "Protección por deslizamiento ante sobrecargas"].map(v => (
              <li key={v} className="flex items-center gap-2"><span className="text-green-400">+</span>{v}</li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 border border-red-800/50 rounded-2xl p-5">
          <h3 className="font-black text-red-400 mb-3">❌ Desventajas</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {["Pueden deslizar bajo carga elevada", "No son exactas (deslizamiento)", "Requieren fuerza de presión entre ruedas", "Menor capacidad de transmisión que engranajes", "Se desgastan con el tiempo"].map(v => (
              <li key={v} className="flex items-center gap-2"><span className="text-red-400">−</span>{v}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-yellow-400 mb-3">📐 Relación de transmisión</h2>
        <p className="text-slate-300 text-sm mb-4">La relación de velocidades depende de los diámetros de las ruedas:</p>
        <div className="bg-slate-800 rounded-xl p-4 text-center">
          <div className="text-xl font-black text-white font-mono">i = n₂/n₁ = D₁/D₂</div>
        </div>
        <p className="text-slate-400 text-xs mt-2">Si D₁ &gt; D₂ → la rueda conducida gira más rápido (i &gt; 1)</p>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Rodillos laminadores", "Tren de rodillos en imprenta", "Sistemas de tracción de trenes", "Rodillos de cinta transportadora", "Mecanismos de juguetes", "Transmisión de maquinaria ligera"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Ruedas de Fricción</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/JtlUHlNDv6o?rel=0&modestbranding=1"
            title="Ruedas de fricción"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
