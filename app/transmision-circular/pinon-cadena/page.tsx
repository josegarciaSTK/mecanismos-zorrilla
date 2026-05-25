import type { Metadata } from "next";

export const metadata: Metadata = { title: "Piñón y Cadena — MECANISMOS" };

export default function PinonCadenaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transmision-circular" className="hover:text-blue-400">Transmisión Circular</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Piñón y Cadena</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">🔗</div>
        <h1 className="text-4xl font-black">Piñón y Cadena</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Transmisión exacta mediante cadena articulada y piñones dentados</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Cómo funciona?</h2>
        <p className="text-slate-300 leading-relaxed">
          El sistema <strong className="text-white">piñón-cadena</strong> usa una cadena articulada cuyos eslabones encajan perfectamente en los dientes de dos ruedas dentadas (piñones). Es similar a las poleas y correa pero <strong className="text-white">sin deslizamiento</strong>, ya que la cadena engrana mecánicamente con los piñones. Todos los piñones giran en el <strong className="text-white">mismo sentido</strong>.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900 border border-green-800/50 rounded-2xl p-5">
          <h3 className="font-black text-green-400 mb-3">✅ Ventajas</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {["Transmisión exacta (sin deslizamiento)", "Puede transmitir grandes fuerzas", "Funciona a grandes distancias entre ejes", "Buena duración si está bien lubricada", "Los piñones giran en el mismo sentido"].map(v => (
              <li key={v} className="flex items-center gap-2"><span className="text-green-400">+</span>{v}</li>
            ))}
          </ul>
        </div>
        <div className="bg-slate-900 border border-red-800/50 rounded-2xl p-5">
          <h3 className="font-black text-red-400 mb-3">❌ Desventajas</h3>
          <ul className="space-y-2 text-sm text-slate-300">
            {["Requiere lubricación periódica", "Produce más ruido que poleas o engranajes", "La cadena se estira con el uso", "Menor velocidad máxima que poleas", "Necesita mantenimiento regular"].map(v => (
              <li key={v} className="flex items-center gap-2"><span className="text-red-400">−</span>{v}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="bg-slate-900 border border-yellow-900/50 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-yellow-400 mb-3">📐 Relación de transmisión</h2>
        <div className="bg-slate-800 rounded-xl p-4 text-center mb-3">
          <div className="text-xl font-black text-white font-mono">i = n₂/n₁ = Z₁/Z₂</div>
        </div>
        <p className="text-slate-400 text-sm">Igual que los engranajes pero los dos piñones giran en el mismo sentido (al contrario que engranajes exteriores).</p>
      </div>

      {/* Crocodile */}
      <div className="bg-slate-900 border border-purple-800 rounded-2xl p-6 mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-2xl">🐊</span>
          <h3 className="text-lg font-black text-white">Simulación: Crocodile Technology</h3>
        </div>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Con <strong className="text-white">Crocodile Technology</strong> se puede simular el sistema piñón-cadena, variando el número de dientes de cada piñón y observando cómo cambia la relación de velocidades. Es especialmente útil para entender el cambio de marchas de una bicicleta.
        </p>
        <div className="bg-purple-950/30 border border-purple-900 rounded-xl p-4 text-sm text-purple-300">
          💡 Ejemplo de bicicleta: plato con 42 dientes + piñón con 14 dientes → i = 42/14 = 3 (el piñón gira 3 veces por cada vuelta del plato)
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Bicicleta", "Motocicleta", "Motosierra", "Ascensor de montacargas", "Maquinaria industrial", "Impresoras industriales"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Piñón y Cadena</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/0_aKj7piQLE?rel=0&modestbranding=1"
            title="Transmisión piñón-cadena en bicicleta"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
