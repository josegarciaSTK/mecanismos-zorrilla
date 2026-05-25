import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MECANISMOS — IES Zorrilla",
  description: "Trabajo de Tecnología 3º ESO sobre mecanismos de transmisión y transformación del movimiento. IES Zorrilla, Valladolid.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-gray-950 text-white antialiased">
        {/* Site header */}
        <header className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 border-b border-blue-700 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center gap-4">
            <a href="/" className="flex items-center gap-3 group">
              <div className="bg-white rounded-full p-1 shadow">
                <div className="w-9 h-9 bg-blue-800 rounded-full flex items-center justify-center text-lg font-black text-white group-hover:bg-blue-600 transition-colors">
                  Z
                </div>
              </div>
              <div>
                <div className="text-lg font-black leading-none tracking-tight">MECANISMOS</div>
                <div className="text-blue-300 text-xs font-medium">IES Zorrilla · 3º ESO</div>
              </div>
            </a>
          </div>
        </header>

        {/* Navigation */}
        <Nav />

        {/* Main */}
        <main className="flex-1">{children}</main>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-slate-800 py-8 mt-16">
          <div className="max-w-7xl mx-auto px-4 text-center">
            <p className="text-slate-400 text-sm">Jose David Garcia Arroyo · 3º ESO · IES Zorrilla, Valladolid</p>
            <p className="text-slate-600 text-xs mt-1">Trabajo de Tecnología — Mecanismos de Transmisión y Transformación</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
