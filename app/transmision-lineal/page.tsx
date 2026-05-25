import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Mecanismos de Transmisión Lineal — MECANISMOS" };

export default function TransmisionLinealPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Mecanismos de Transmisión Lineal</span>
      </div>

      <h1 className="text-4xl font-black mb-2">Mecanismos de Transmisión Lineal</h1>
      <p className="text-slate-400 text-lg mb-10">Mecanismos que transmiten o amplifican fuerzas en línea recta</p>

      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black text-blue-400 mb-4">¿Qué son?</h2>
        <p className="text-slate-300 leading-relaxed">
          Los mecanismos de transmisión lineal son sistemas que permiten <strong className="text-white">transmitir, modificar o equilibrar fuerzas</strong> en una dirección lineal. A diferencia de los mecanismos circulares, operan sobre un eje recto o en torno a un punto de apoyo fijo. Los más importantes son la <strong className="text-white">palanca</strong> y la <strong className="text-white">polea</strong>.
        </p>
      </div>

      {/* Subpáginas */}
      <div className="grid sm:grid-cols-2 gap-6">
        <Link href="/transmision-lineal/palanca" className="group bg-slate-900 border border-emerald-800/50 hover:border-emerald-600 rounded-2xl p-6 transition-colors">
          <div className="text-4xl mb-3">⚖️</div>
          <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors mb-2">La Palanca</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Barra rígida apoyada en un fulcro que permite equilibrar o amplificar fuerzas. Incluye simulación interactiva PhET Balancing Act.
          </p>
          <div className="mt-4 text-emerald-400 text-sm font-semibold">Ver más →</div>
        </Link>

        <Link href="/transmision-lineal/polea" className="group bg-slate-900 border border-emerald-800/50 hover:border-emerald-600 rounded-2xl p-6 transition-colors">
          <div className="text-4xl mb-3">🏗️</div>
          <h3 className="text-xl font-black text-white group-hover:text-emerald-400 transition-colors mb-2">La Polea</h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Rueda con ranura para una cuerda que permite cambiar la dirección de una fuerza o reducir el esfuerzo necesario para levantar una carga.
          </p>
          <div className="mt-4 text-emerald-400 text-sm font-semibold">Ver más →</div>
        </Link>
      </div>
    </div>
  );
}
