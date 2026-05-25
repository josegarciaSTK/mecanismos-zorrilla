import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mecanismos de Transformación del Movimiento — MECANISMOS" };

const subpages = [
  { href: "/transformacion/tornillo-tuerca", emoji: "🔩", title: "Tornillo-Tuerca", desc: "Transforma el giro en desplazamiento lineal. Usado en prensas y mordazas." },
  { href: "/transformacion/pinon-cremallera", emoji: "📏", title: "Piñón-Cremallera", desc: "Rueda dentada + barra dentada. Convierte rotación en traslación lineal." },
  { href: "/transformacion/biela-manivela", emoji: "🔧", title: "Biela-Manivela", desc: "Sistema clave en motores. Convierte rotación continua en movimiento alternativo." },
  { href: "/transformacion/leva-excentrica", emoji: "🎯", title: "Leva y Excéntrica", desc: "Perfil irregular que genera movimiento variable a partir de giro continuo." },
];

export default function TransformacionPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Mecanismos de Transformación del Movimiento</span>
      </div>

      <h1 className="text-4xl font-black mb-2">Mecanismos de Transformación del Movimiento</h1>
      <p className="text-slate-400 text-lg mb-10">Convierten un tipo de movimiento en otro diferente</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-purple-400 mb-3">¿Qué son?</h2>
        <p className="text-slate-300 leading-relaxed text-sm">
          Los mecanismos de transformación del movimiento <strong className="text-white">convierten un tipo de movimiento en otro</strong>. A diferencia de los de transmisión (que mantienen el tipo de movimiento), estos mecanismos cambian la naturaleza del movimiento: por ejemplo, de circular a lineal alternativo, o de circular continuo a movimiento oscilante. Son esenciales en motores, máquinas herramienta y automatismos.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {subpages.map((s) => (
          <Link key={s.href} href={s.href} className="group bg-slate-900 border border-purple-800/40 hover:border-purple-500 rounded-2xl p-6 transition-colors">
            <div className="text-3xl mb-2">{s.emoji}</div>
            <h3 className="text-lg font-black text-white group-hover:text-purple-400 transition-colors mb-2">{s.title}</h3>
            <p className="text-slate-400 text-sm">{s.desc}</p>
            <div className="mt-3 text-purple-400 text-sm font-semibold">Ver más →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
