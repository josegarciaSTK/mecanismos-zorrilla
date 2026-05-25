import type { Metadata } from "next";

export const metadata: Metadata = { title: "Automatismos y Robots — MECANISMOS" };

export default function AutomatismosPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-slate-500 text-sm mb-6">
        <a href="/" className="hover:text-blue-400">Inicio</a>
        <span className="mx-2">›</span>
        <a href="/definicion" className="hover:text-blue-400">Definición y Tipos</a>
        <span className="mx-2">›</span>
        <span className="text-slate-300">Automatismos y Robots</span>
      </div>

      <h1 className="text-4xl font-black mb-2">Automatismos y Robots</h1>
      <p className="text-slate-400 text-lg mb-10">Sistemas que operan de forma autónoma o semiautónoma</p>

      {/* Definición */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-3xl mb-3">🤖</div>
          <h2 className="text-xl font-black text-blue-400 mb-3">¿Qué es un automatismo?</h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Un <strong className="text-white">automatismo</strong> es un sistema capaz de realizar una tarea de forma autónoma, sin intervención humana directa continua. Utiliza sensores, actuadores y un sistema de control para ejecutar secuencias de operaciones programadas.
          </p>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
          <div className="text-3xl mb-3">🦾</div>
          <h2 className="text-xl font-black text-blue-400 mb-3">¿Qué es un robot?</h2>
          <p className="text-slate-300 leading-relaxed text-sm">
            Un <strong className="text-white">robot</strong> es una máquina programable que puede ejecutar una serie de acciones automáticamente. Combina mecanismos, sensores, actuadores y un sistema de control (generalmente informático) para interactuar con su entorno.
          </p>
        </div>
      </div>

      {/* Partes */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-black mb-6">Partes de un sistema automático</h2>
        <div className="grid sm:grid-cols-3 gap-4">
          {[
            { emoji: "📡", title: "Captadores / Sensores", desc: "Recogen información del entorno: temperatura, posición, presión, luz..." },
            { emoji: "🧠", title: "Sistema de control", desc: "Procesa la información y toma decisiones. Puede ser un PLC, microcontrolador o PC." },
            { emoji: "⚡", title: "Actuadores", desc: "Ejecutan las órdenes del sistema de control: motores, pistones, válvulas, solenoides..." },
          ].map((p) => (
            <div key={p.title} className="bg-slate-800 rounded-xl p-4 text-center">
              <div className="text-3xl mb-2">{p.emoji}</div>
              <div className="font-bold text-white text-sm mb-1">{p.title}</div>
              <div className="text-slate-400 text-xs leading-relaxed">{p.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tipos de robots */}
      <h2 className="text-2xl font-black mb-6">Tipos de Robots</h2>
      <div className="space-y-4 mb-12">
        {[
          { tipo: "Robot industrial", desc: "Brazo mecánico articulado usado en fabricación: soldadura, pintura, montaje. Muy preciso y resistente.", color: "text-orange-400" },
          { tipo: "Robot móvil (AGV)", desc: "Vehículos guiados automáticamente en almacenes y fábricas para transportar materiales.", color: "text-green-400" },
          { tipo: "Robot colaborativo (Cobot)", desc: "Diseñado para trabajar junto a personas de forma segura. Detecta contacto y se detiene.", color: "text-blue-400" },
          { tipo: "Robot humanoide", desc: "Con forma humana. Investigan la interacción hombre-máquina. Ejemplo: ASIMO (Honda), Atlas (Boston Dynamics).", color: "text-purple-400" },
          { tipo: "Dron", desc: "Robot aéreo no tripulado. Se usa en fotografía, logística, agricultura y vigilancia.", color: "text-yellow-400" },
        ].map((r) => (
          <div key={r.tipo} className="bg-slate-900 border border-slate-800 rounded-xl p-5 flex gap-4">
            <div className={`font-black text-sm ${r.color} min-w-[140px]`}>{r.tipo}</div>
            <div className="text-slate-400 text-sm leading-relaxed">{r.desc}</div>
          </div>
        ))}
      </div>

      {/* Video */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
        <h3 className="text-lg font-black mb-4">🎬 Video: Automatismos y Robótica</h3>
        <div className="relative rounded-xl overflow-hidden" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube-nocookie.com/embed/AnVjIGj3__c?rel=0&modestbranding=1"
            title="Automatismos y robots"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
