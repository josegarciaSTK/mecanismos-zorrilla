export default function Home() {
  const mecanismos = [
    {
      id: "cremallera",
      nombre: "Cremallera y Piñón",
      descripcion:
        "La cremallera y piñón transforma el movimiento circular del piñón en movimiento lineal de la cremallera (y viceversa). El piñón es una rueda dentada pequeña que engrana con la barra dentada (cremallera).",
      videoId: "YwaERJ640DM",
      emoji: "⚙️",
      colorCard: "#1e3a8a",
      colorBadge: "#3b82f6",
      ejemplos: ["Dirección de automóviles", "Ascensores de cremallera", "Tornos y fresadoras"],
    },
    {
      id: "friccion",
      nombre: "Ruedas de Fricción",
      descripcion:
        "Las ruedas de fricción transmiten movimiento por contacto directo entre sus superficies. No tienen dientes, por lo que pueden deslizar bajo carga elevada. Son silenciosas y absorben vibraciones.",
      videoId: "JtlUHlNDv6o",
      emoji: "🔄",
      colorCard: "#14532d",
      colorBadge: "#22c55e",
      ejemplos: ["Rodillos industriales", "Trenes de montaña", "Mecanismos de fricción en juguetes"],
    },
    {
      id: "correa-polea",
      nombre: "Correa y Polea",
      descripcion:
        "La transmisión por correa y polea usa una banda flexible que conecta dos o más poleas. Permite transmitir movimiento entre ejes separados. La relación de velocidades depende del diámetro de cada polea.",
      videoId: "dMpCITN1O_4",
      emoji: "🏭",
      colorCard: "#7c2d12",
      colorBadge: "#f97316",
      ejemplos: ["Motor de automóvil (alternador)", "Lavadoras", "Cintas transportadoras"],
    },
    {
      id: "engranajes",
      nombre: "Engranajes",
      descripcion:
        "Los engranajes son ruedas dentadas que engranan entre sí para transmitir movimiento y fuerza. La relación de transmisión es exacta (no hay deslizamiento) y depende del número de dientes de cada rueda.",
      videoId: "6BXG3QegTFg",
      emoji: "🔩",
      colorCard: "#4a1d96",
      colorBadge: "#a855f7",
      ejemplos: ["Cajas de cambio de coches", "Relojes mecánicos", "Bicicletas"],
    },
    {
      id: "leva",
      nombre: "Leva y Seguidor",
      descripcion:
        "La leva es una pieza giratoria de perfil irregular que convierte el movimiento circular continuo en movimiento alternativo o variable. El seguidor sigue el perfil de la leva y produce el movimiento resultante.",
      videoId: "aJi50a4pjq0",
      emoji: "🎯",
      colorCard: "#7f1d1d",
      colorBadge: "#ef4444",
      ejemplos: ["Motores de combustión interna", "Máquinas de coser", "Autómatas industriales"],
    },
    {
      id: "biela-manivela",
      nombre: "Biela-Manivela",
      descripcion:
        "El sistema biela-manivela transforma el movimiento circular de la manivela en movimiento lineal alternativo del émbolo (o pistón). Es fundamental en motores de explosión, compresores y bombas.",
      videoId: "Dyee1JVYsd0",
      emoji: "🔧",
      colorCard: "#134e4a",
      colorBadge: "#14b8a6",
      ejemplos: ["Motor de pistones", "Compresores de aire", "Sierra de vaivén"],
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#030712", color: "white", fontFamily: "system-ui, sans-serif" }}>
      {/* Header */}
      <header style={{ background: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #1e40af 100%)", borderBottom: "1px solid #1e40af", boxShadow: "0 4px 20px rgba(0,0,0,0.5)" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "20px 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <div style={{ background: "white", borderRadius: "50%", padding: "4px", boxShadow: "0 2px 10px rgba(0,0,0,0.3)" }}>
              <div style={{ width: "52px", height: "52px", background: "#1e3a8a", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "24px", fontWeight: "900", color: "white" }}>
                Z
              </div>
            </div>
            <div>
              <div style={{ fontSize: "22px", fontWeight: "900", letterSpacing: "-0.5px" }}>IES Zorrilla</div>
              <div style={{ color: "#93c5fd", fontSize: "13px", fontWeight: "600" }}>Departamento de Tecnología</div>
            </div>
          </div>
          <div style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.2)", borderRadius: "999px", padding: "8px 16px", fontSize: "13px", color: "#bfdbfe" }}>
            📚 Educación Secundaria — ESO
          </div>
        </div>
      </header>

      {/* Hero */}
      <section style={{ background: "linear-gradient(180deg, #1e3a8a 0%, #030712 100%)", padding: "80px 24px", textAlign: "center", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, fontSize: "120px", pointerEvents: "none", userSelect: "none" }}>
          <span style={{ position: "absolute", top: "20px", left: "5%" }}>⚙️</span>
          <span style={{ position: "absolute", top: "40px", right: "8%" }}>🔧</span>
          <span style={{ position: "absolute", bottom: "20px", left: "40%" }}>🔩</span>
        </div>
        <div style={{ maxWidth: "800px", margin: "0 auto", position: "relative" }}>
          <span style={{ display: "inline-block", background: "rgba(59,130,246,0.2)", border: "1px solid #3b82f6", color: "#93c5fd", padding: "6px 16px", borderRadius: "999px", fontSize: "13px", fontWeight: "700", letterSpacing: "1px", textTransform: "uppercase", marginBottom: "24px" }}>
            Mecanismos de Transmisión
          </span>
          <h1 style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: "900", lineHeight: "1.1", marginBottom: "20px", letterSpacing: "-1px" }}>
            Los{" "}
            <span style={{ background: "linear-gradient(90deg, #60a5fa, #38bdf8)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Mecanismos
            </span>{" "}
            del Movimiento
          </h1>
          <p style={{ fontSize: "1.2rem", color: "#9ca3af", maxWidth: "600px", margin: "0 auto", lineHeight: "1.7" }}>
            Aprende cómo funcionan los principales mecanismos de transmisión y transformación del movimiento utilizados en la industria y en la vida cotidiana.
          </p>
          <div style={{ marginTop: "32px", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "16px", fontSize: "14px", color: "#6b7280" }}>
            <span>✅ {mecanismos.length} mecanismos explicados</span>
            <span>🎬 Videos educativos</span>
            <span>📖 Ejemplos reales</span>
          </div>
        </div>
      </section>

      {/* Nav pills */}
      <nav style={{ background: "#0f172a", borderBottom: "1px solid #1e293b", padding: "12px 24px", position: "sticky", top: 0, zIndex: 10 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", gap: "8px", overflowX: "auto", paddingBottom: "2px" }}>
          {mecanismos.map((m) => (
            <a
              key={m.id}
              href={`#${m.id}`}
              style={{ display: "flex", alignItems: "center", gap: "6px", padding: "6px 14px", borderRadius: "999px", background: "#1e293b", border: "1px solid #334155", color: "#cbd5e1", fontSize: "13px", fontWeight: "600", textDecoration: "none", whiteSpace: "nowrap", transition: "all 0.2s" }}
            >
              {m.emoji} {m.nombre}
            </a>
          ))}
        </div>
      </nav>

      {/* Mechanisms */}
      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "60px 24px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
          {mecanismos.map((mec, index) => (
            <section key={mec.id} id={mec.id} style={{ scrollMarginTop: "60px" }}>
              {/* Header */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "28px" }}>
                <div style={{ background: mec.colorCard, borderRadius: "16px", padding: "16px", fontSize: "2rem", boxShadow: `0 4px 20px ${mec.colorBadge}40` }}>
                  {mec.emoji}
                </div>
                <div>
                  <div style={{ color: "#6b7280", fontSize: "12px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "4px" }}>
                    Mecanismo {String(index + 1).padStart(2, "0")}
                  </div>
                  <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: "900", color: "white", margin: 0 }}>
                    {mec.nombre}
                  </h2>
                </div>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 480px), 1fr))", gap: "24px", alignItems: "start" }}>
                {/* Video */}
                <div style={{ borderRadius: "16px", overflow: "hidden", background: "#0f172a", border: "1px solid #1e293b", boxShadow: "0 8px 32px rgba(0,0,0,0.4)" }}>
                  <div style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
                    <iframe
                      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
                      src={`https://www.youtube-nocookie.com/embed/${mec.videoId}?rel=0&modestbranding=1`}
                      title={`Video: ${mec.nombre}`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Info */}
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "16px", padding: "24px" }}>
                    <div style={{ color: "#6b7280", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "12px" }}>
                      ¿Cómo funciona?
                    </div>
                    <p style={{ color: "#e2e8f0", lineHeight: "1.8", fontSize: "1.05rem", margin: 0 }}>
                      {mec.descripcion}
                    </p>
                  </div>

                  <div style={{ background: "#0f172a", border: "1px solid #1e293b", borderRadius: "16px", padding: "24px" }}>
                    <div style={{ color: "#6b7280", fontSize: "11px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "2px", marginBottom: "16px" }}>
                      Ejemplos en la vida real
                    </div>
                    <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "12px" }}>
                      {mec.ejemplos.map((ejemplo) => (
                        <li key={ejemplo} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#e2e8f0", fontSize: "1rem" }}>
                          <span style={{ width: "8px", height: "8px", borderRadius: "50%", background: mec.colorBadge, flexShrink: 0 }} />
                          {ejemplo}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {index < mecanismos.length - 1 && (
                <div style={{ marginTop: "80px", borderTop: "1px solid #1e293b" }} />
              )}
            </section>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "#0f172a", borderTop: "1px solid #1e293b", marginTop: "40px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 24px", textAlign: "center" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "12px" }}>
            <div style={{ background: "#1e3a8a", borderRadius: "50%", padding: "6px" }}>
              <div style={{ width: "32px", height: "32px", background: "white", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "16px", fontWeight: "900", color: "#1e3a8a" }}>Z</div>
            </div>
            <span style={{ fontSize: "20px", fontWeight: "900" }}>IES Zorrilla</span>
          </div>
          <p style={{ color: "#64748b", fontSize: "14px", margin: "0 0 8px" }}>
            Departamento de Tecnología · Material didáctico para ESO
          </p>
          <p style={{ color: "#475569", fontSize: "12px", margin: 0 }}>
            © {new Date().getFullYear()} IES Zorrilla — Valladolid
          </p>
        </div>
      </footer>
    </div>
  );
}
