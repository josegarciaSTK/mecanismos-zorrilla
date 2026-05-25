"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "INICIO", href: "/" },
  {
    label: "DEFINICIÓN Y TIPOS",
    href: "/definicion",
    children: [
      { label: "Automatismos y robots", href: "/automatismos" },
      { label: "Transmisión lineal", href: "/transmision-lineal",
        children: [
          { label: "La palanca", href: "/transmision-lineal/palanca" },
          { label: "La polea", href: "/transmision-lineal/polea" },
        ],
      },
    ],
  },
  {
    label: "TRANSMISIÓN CIRCULAR",
    href: "/transmision-circular",
    children: [
      { label: "Ruedas de fricción", href: "/transmision-circular/ruedas-friccion" },
      { label: "Poleas y correa", href: "/transmision-circular/poleas-correa" },
      { label: "Engranajes", href: "/transmision-circular/engranajes" },
      { label: "Piñón y cadena", href: "/transmision-circular/pinon-cadena" },
      { label: "Tornillo sin fin y corona", href: "/transmision-circular/tornillo-sin-fin" },
    ],
  },
  {
    label: "TRANSFORMACIÓN",
    href: "/transformacion",
    children: [
      { label: "Tornillo-tuerca", href: "/transformacion/tornillo-tuerca" },
      { label: "Piñón-cremallera", href: "/transformacion/pinon-cremallera" },
      { label: "Biela-manivela", href: "/transformacion/biela-manivela" },
      { label: "Leva y excéntrica", href: "/transformacion/leva-excentrica" },
    ],
  },
];

type NavChild = { label: string; href: string; children?: NavChild[] };
type NavItem = { label: string; href: string; children?: NavChild[] };

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggle = (key: string) =>
    setOpenMenus((prev) => ({ ...prev, [key]: !prev[key] }));

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1 h-12">
          {navItems.map((item) => (
            <div key={item.href} className="relative group">
              <Link
                href={item.href}
                className={`flex items-center gap-1 px-3 py-2 rounded text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? "bg-blue-600 text-white"
                    : "text-slate-300 hover:text-white hover:bg-slate-800"
                }`}
              >
                {item.label}
                {item.children && (
                  <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
              {item.children && (
                <div className="absolute top-full left-0 hidden group-hover:block bg-slate-800 border border-slate-700 rounded-lg shadow-xl min-w-[220px] py-1 z-50">
                  {item.children.map((child) => (
                    <div key={child.href} className="relative group/sub">
                      <Link
                        href={child.href}
                        className={`flex items-center justify-between px-4 py-2 text-sm transition-colors ${
                          isActive(child.href)
                            ? "text-blue-400 bg-slate-700"
                            : "text-slate-300 hover:text-white hover:bg-slate-700"
                        }`}
                      >
                        {child.label}
                        {(child as NavItem).children && (
                          <svg className="w-3 h-3 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        )}
                      </Link>
                      {(child as NavItem).children && (
                        <div className="absolute top-0 left-full hidden group-hover/sub:block bg-slate-800 border border-slate-700 rounded-lg shadow-xl min-w-[180px] py-1 z-50 ml-1">
                          {((child as NavItem).children as NavChild[]).map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className={`block px-4 py-2 text-sm transition-colors ${
                                isActive(sub.href)
                                  ? "text-blue-400 bg-slate-700"
                                  : "text-slate-300 hover:text-white hover:bg-slate-700"
                              }`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile nav */}
        <div className="md:hidden flex items-center justify-between h-12">
          <span className="text-white font-bold text-sm">MECANISMOS</span>
          <button
            onClick={() => setOpen(!open)}
            className="text-slate-300 hover:text-white p-2"
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-slate-800 border-t border-slate-700 py-2 px-4 space-y-1">
          {navItems.map((item) => (
            <div key={item.href}>
              <div className="flex items-center justify-between">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm font-semibold ${isActive(item.href) ? "text-blue-400" : "text-slate-300"}`}
                >
                  {item.label}
                </Link>
                {item.children && (
                  <button onClick={() => toggle(item.href)} className="text-slate-400 p-1">
                    <svg className={`w-4 h-4 transition-transform ${openMenus[item.href] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {item.children && openMenus[item.href] && (
                <div className="pl-4 space-y-1 pb-2">
                  {item.children.map((child) => (
                    <div key={child.href}>
                      <div className="flex items-center justify-between">
                        <Link
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className={`block py-1.5 text-sm ${isActive(child.href) ? "text-blue-400" : "text-slate-400"}`}
                        >
                          {child.label}
                        </Link>
                        {(child as NavItem).children && (
                          <button onClick={() => toggle(child.href)} className="text-slate-500 p-1">
                            <svg className={`w-3 h-3 transition-transform ${openMenus[child.href] ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </button>
                        )}
                      </div>
                      {(child as NavItem).children && openMenus[child.href] && (
                        <div className="pl-4 space-y-1">
                          {((child as NavItem).children as NavChild[]).map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setOpen(false)}
                              className={`block py-1.5 text-xs ${isActive(sub.href) ? "text-blue-400" : "text-slate-500"}`}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
