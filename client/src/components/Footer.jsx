export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer style={{ background: "var(--black)", position: "relative", overflow: "hidden" }}>
      <span className="spectrum-line" style={{ opacity: 0.4, display: "block" }} />
      <div className="container" style={{ padding: "64px 2rem 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: "48px", marginBottom: "48px" }} className="footer-grid">
          <div>
            <img src="/logo-gdl.png" alt="GDL" style={{
              height: "60px", width: "auto", marginBottom: "1rem",
              filter: "brightness(0) invert(1)",
              opacity: 0.85,
            }} onError={(e) => { e.target.style.display = "none"; }} />
            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", maxWidth: "260px", fontWeight: 300, lineHeight: 1.7 }}>
              DJ profesional y producción de eventos en CDMX. Shows de luz, sonido premium y experiencias únicas.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--laser-cyan)", marginBottom: "1.25rem", fontWeight: 700 }}>Sitio</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
              {[["#inicio","Inicio"],["#servicios","Servicios"],["#productos","Productos"],["#evento","Contratar"],["#faq","FAQ"],["#contacto","Contacto"]].map(([href, label]) => (
                <li key={href}>
                  <a href={href} style={{ fontSize: "0.875rem", color: "var(--text-muted)", fontWeight: 300, transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.target.style.color = "var(--laser-cyan)")}
                    onMouseLeave={(e) => (e.target.style.color = "var(--text-muted)")}
                  >{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--laser-magenta)", marginBottom: "1.25rem", fontWeight: 700 }}>Contacto</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                ["WhatsApp", "+52 55 1234 5678",                   "var(--laser-green)"],
                ["Email",    "contacto@GustavoDelgadillo.com",      "var(--laser-cyan)"],
                ["Ciudad",   "CDMX, México",                        "var(--laser-magenta)"],
              ].map(([label, value, col]) => (
                <li key={label}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.58rem", color: col, letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>{label}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", marginTop: "0.15rem", fontWeight: 300 }}>{value}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <span className="spectrum-line" style={{ opacity: 0.2, display: "block", marginBottom: "1.5rem" }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", fontFamily: "var(--font-display)", letterSpacing: "0.08em", fontWeight: 700 }}>
            © {year} Gustavo Delgadillo. Todos los derechos reservados.
          </p>
          <a href="/admin/login" style={{
            fontFamily: "var(--font-display)", fontSize: "0.65rem",
            letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700,
            color: "var(--laser-cyan)",
            opacity: 0.5, transition: "opacity 0.2s",
          }}
            onMouseEnter={(e) => (e.target.style.opacity = "1")}
            onMouseLeave={(e) => (e.target.style.opacity = "0.5")}
          >Admin →</a>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}