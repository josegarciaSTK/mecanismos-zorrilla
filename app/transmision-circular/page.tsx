import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mecanismos de Transmisión Circular — MECANISMOS" };

const subpages = [
  { href: "/transmision-circular/ruedas-friccion", emoji: "🔄", title: "Ruedas de Fricción", desc: "Transmisión por contacto directo entre superficies lisas" },
  { href: "/transmision-circular/poleas-correa", emoji: "🏭", title: "Poleas y Correa", desc: "Transmisión flexible con banda entre poleas" },
  { href: "/transmision-circular/engranajes", emoji: "⚙️", title: "Engranajes", desc: "Ruedas dentadas con relación exacta. Simulación Crocodile" },
  { href: "/transmision-circular/pinon-cadena", emoji: "🔗", title: "Piñón y Cadena", desc: "Transmisión con cadena articulada. Simulación Crocodile" },
  { href: "/transmision-circular/tornillo-sin-fin", emoji: "🌀", title: "Tornillo sin fin y Corona", desc: "Gran reducción de velocidad con autobloqueo" },
];

export default function TransmisionCircularPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Mecanismos de Transmisión Circular</span>
      </div>

      <h1 className="text-4xl font-black mb-2">Mecanismos de Transmisión Circular</h1>
      <p className="text-slate-400 text-lg mb-10">Transmiten movimiento de rotación entre ejes</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-orange-400 mb-3">¿Qué son?</h2>
        <p className="text-slate-300 leading-relaxed text-sm">
          Los mecanismos de transmisión circular <strong className="text-white">transmiten movimiento de rotación</strong> de un eje a otro. Son fundamentales en máquinas que necesitan mantener o modificar la velocidad o el par motor entre dos ejes. En todos ellos existe una relación de transmisión que nos indica cómo cambia la velocidad entre el eje motor y el eje conducido.
        </p>
        <div className="mt-4 bg-orange-950/30 border border-orange-900 rounded-lg p-3">
          <div className="text-orange-300 text-sm font-mono font-black">i = n₂/n₁ = Z₁/Z₂ = D₁/D₂</div>
          <div className="text-slate-400 text-xs mt-1">donde n = velocidad (rpm), Z = nº de dientes, D = diámetro</div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {subpages.map((s) => (
          <Link key={s.href} href={s.href} className="group bg-slate-900 border border-orange-800/40 hover:border-orange-500 rounded-2xl p-6 transition-colors">
            <div className="text-3xl mb-2">{s.emoji}</div>
            <h3 className="text-lg font-black text-white group-hover:text-orange-400 transition-colors mb-2">{s.title}</h3>
            <p className="text-slate-400 text-sm">{s.desc}</p>
            <div className="mt-3 text-orange-400 text-sm font-semibold">Ver más →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
