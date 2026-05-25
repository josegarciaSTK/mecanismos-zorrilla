import Carousel from "@/components/Carousel";
import Link from "next/link";

const sections = [
  {
    num: "01",
    title: "Definición y Tipos",
    href: "/definicion",
    color: "from-blue-600 to-blue-800",
    border: "border-blue-700",
    items: ["Definición de máquina y mecanismo", "Tipos de movimientos", "Automatismos y robots"],
  },
  {
    num: "02",
    title: "Transmisión Lineal",
    href: "/transmision-lineal",
    color: "from-emerald-600 to-emerald-800",
    border: "border-emerald-700",
    items: ["La palanca", "La polea"],
  },
  {
    num: "03",
    title: "Transmisión Circular",
    href: "/transmision-circular",
    color: "from-orange-600 to-orange-800",
    border: "border-orange-700",
    items: ["Ruedas de fricción", "Poleas y correa", "Engranajes", "Piñón y cadena", "Tornillo sin fin y corona"],
  },
  {
    num: "04",
    title: "Transformación de Movimiento",
    href: "/transformacion",
    color: "from-purple-600 to-purple-800",
    border: "border-purple-700",
    items: ["Tornillo-tuerca", "Piñón-cremallera", "Biela-manivela", "Leva y excéntrica"],
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-950 to-gray-950 px-4 pt-14 pb-10">
        <div className="max-w-5xl mx-auto">
          {/* Student card */}
          <div className="mb-10 flex flex-wrap gap-6 items-center justify-between">
            <div>
              <div className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">Autor del trabajo</div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2">
                Jose David<br />Garcia Arroyo
              </h1>
              <div className="flex flex-wrap gap-3 mt-3">
                <span className="bg-blue-900/60 border border-blue-700 text-blue-300 text-sm px-3 py-1 rounded-full font-semibold">
                  3º ESO
                </span>
                <span className="bg-slate-800 border border-slate-700 text-slate-300 text-sm px-3 py-1 rounded-full font-semibold">
                  IES Zorrilla
                </span>
                <span className="bg-slate-800 border border-slate-700 text-slate-300 text-sm px-3 py-1 rounded-full font-semibold">
                  Valladolid
                </span>
                <span className="bg-slate-800 border border-slate-700 text-slate-300 text-sm px-3 py-1 rounded-full font-semibold">
                  Tecnología
                </span>
              </div>
            </div>
            <div className="hidden md:block text-right">
              <div className="text-6xl font-black text-blue-800/40 leading-none select-none">MECANISMOS</div>
            </div>
          </div>

          {/* Carousel */}
          <Carousel />
        </div>
      </section>

      {/* Sections index */}
      <section className="max-w-5xl mx-auto px-4 py-14">
        <h2 className="text-2xl font-black text-slate-300 mb-8 uppercase tracking-widest">Contenidos</h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {sections.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className={`group relative rounded-2xl border ${s.border} bg-slate-900 p-6 hover:scale-[1.02] transition-transform overflow-hidden`}
            >
              <div className={`absolute top-0 right-0 bottom-0 w-1 bg-gradient-to-b ${s.color}`} />
              <div className="text-slate-600 text-xs font-black uppercase tracking-widest mb-1">{s.num}</div>
              <div className="text-xl font-black text-white mb-4 group-hover:text-blue-300 transition-colors">
                {s.title}
              </div>
              <ul className="space-y-1">
                {s.items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${s.color} flex-shrink-0`} />
                    {item}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
