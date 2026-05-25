import type { Metadata } from "next";

export const metadata: Metadata = { title: "Leva y Excéntrica — MECANISMOS" };

export default function LevaExcéntricaPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/transformacion" className="hover:text-blue-400">Transformación</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Leva y Excéntrica</span>
      </div>

      <div className="flex items-center gap-4 mb-2">
        <div className="text-5xl">🎯</div>
        <h1 className="text-4xl font-black">Leva y Excéntrica</h1>
      </div>
      <p className="text-slate-400 text-lg mb-10">Movimiento variable programado mediante el perfil de la pieza</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-3">¿Qué es una leva?</h2>
        <p className="text-slate-300 leading-relaxed">
          Una <strong className="text-white">leva</strong> es una pieza giratoria de perfil irregular que transforma el movimiento circular continuo en movimiento alternativo o variable. Un <strong className="text-white">seguidor</strong> (empujador) está en contacto permanente con el perfil de la leva y traduce la forma de su contorno en movimiento. La forma del perfil de la leva determina completamente el movimiento del seguidor.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-black text-blue-400 mb-4">Tipos de levas</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["Leva de disco", "Perfil plano con forma irregular. La más común. El seguidor se mueve perpendicularmente al eje."],
              ["Leva cilíndrica", "El seguidor sigue una ranura helicoidal en un cilindro. Movimiento paralelo al eje."],
              ["Leva excéntrica", "Disco circular cuyo centro no coincide con el eje de giro. Genera movimiento armónico simple."],
              ["Leva de tambor", "El seguidor sigue una ranura sobre la superficie de un cilindro."],
            ].map(([t, d]) => (
              <li key={t as string} className="border-l-2 border-blue-700 pl-3">
                <strong className="text-white">{t as string}:</strong> <span className="text-slate-400">{d as string}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <h3 className="font-black text-blue-400 mb-4">Tipos de seguidores</h3>
          <ul className="space-y-3 text-sm">
            {[
              ["Seguidor de punta", "Contacto puntual. Puede seguir perfiles complejos pero se desgasta rápido."],
              ["Seguidor de rodillo", "Rodamiento que rueda sobre la leva. Menor desgaste, muy usado."],
              ["Seguidor plano", "Superficie plana en contacto. Permite mayor velocidad pero perfil más simple."],
            ].map(([t, d]) => (
              <li key={t as string} className="border-l-2 border-teal-700 pl-3">
                <strong className="text-white">{t as string}:</strong> <span className="text-slate-400">{d as string}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Excéntrica */}
      <div className="bg-slate-900 border border-orange-900/50 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-orange-400 mb-3">⭕ La Excéntrica</h2>
        <p className="text-slate-300 text-sm leading-relaxed mb-3">
          La <strong className="text-white">excéntrica</strong> es un caso especial de leva: es un disco circular, pero su eje de giro no está en el centro geométrico del disco. Esto hace que el borde del disco describa una trayectoria circular descentrada, generando un movimiento alternativo armónico en el seguidor.
        </p>
        <div className="bg-orange-950/30 border border-orange-900 rounded-xl p-4 text-sm text-orange-300">
          💡 La <strong>excentricidad</strong> (distancia del centro del disco al eje de giro) determina la <strong>amplitud</strong> del movimiento alternativo del seguidor.
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-4">Aplicaciones</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {["Motor de combustión (válvulas)", "Máquina de coser", "Autómatas industriales", "Bombas de émbolo", "Máquinas tragaperras", "Mecanismos de reloj"].map(a => (
            <div key={a} className="bg-slate-800 rounded-lg p-3 text-sm text-slate-300 text-center">{a}</div>
          ))}
        </div>
      </div>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Leva y Excéntrica</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/aJi50a4pjq0?rel=0&modestbranding=1"
            title="Leva y excéntrica"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
