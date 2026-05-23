export default function Hero() {
  return (
    <section id="inicio" style={{
      position: "relative", minHeight: "100vh",
      display: "flex", alignItems: "center", overflow: "hidden",
      background: "#000000",
    }}>

      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "url('/hero-banner.png')",
        backgroundSize: "cover",
        backgroundPosition: "center 35%",
        filter: "brightness(0.25) saturate(0.8)",
      }} />

      <div style={{
        position: "absolute", inset: 0, zIndex: 1,
        background: "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0.6) 100%)",
      }} />

      <div className="container" style={{
        position: "relative", zIndex: 2,
        paddingTop: "130px", paddingBottom: "80px",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "60px",
        alignItems: "center",
      }}>
        <div>
          <span className="section-label fade-up" style={{ animationDelay: "0.1s" }}>
            DJ · Producción de Eventos · CDMX
          </span>

          <h1 className="fade-up" style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(4rem, 9vw, 8rem)",
            fontWeight: 900,
            lineHeight: 0.88,
            textTransform: "uppercase",
            letterSpacing: "-0.01em",
            animationDelay: "0.2s",
            marginTop: "1rem",
          }}>
            <span style={{ display: "block", color: "var(--text)" }}>Gustavo</span>
            <span style={{ display: "block", color: "var(--laser-cyan)" }}>Delgadillo</span>
          </h1>

          <span className="light-bar fade-up" style={{ animationDelay: "0.35s" }} />

          <p className="fade-up" style={{
            fontSize: "1rem", color: "var(--text-dim)",
            maxWidth: "420px", lineHeight: 1.75, fontWeight: 300,
            animationDelay: "0.4s",
          }}>
            Producción musical y DJ profesional para eventos que no se olvidan.
            Equipo premium, shows de luz y ambientes únicos.
          </p>

          <div className="fade-up" style={{
            display: "flex", gap: "1rem", marginTop: "2rem",
            flexWrap: "wrap", animationDelay: "0.55s",
          }}>
            <a href="#evento" className="btn-primary">Cotizar evento</a>
            <a href="#servicios" className="btn-outline">Ver servicios</a>
          </div>
        </div>

        <div className="fade-in" style={{ animationDelay: "0.6s" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: "2.5rem" }}>
            <img
              src="/logo-gdl.png"
              alt="GDL"
              style={{ width: "180px", height: "auto", filter: "brightness(0) invert(1)", opacity: 0.85 }}
              onError={(e) => { e.target.style.display = "none"; }}
            />
          </div>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "1px",
            background: "var(--border)",
            border: "1px solid var(--border)",
            borderRadius: "4px", overflow: "hidden",
          }}>
            {[
              { num: "200+", label: "Eventos", color: "var(--laser-cyan)" },
              { num: "10+",  label: "Años",    color: "var(--laser-magenta)" },
              { num: "4.9★", label: "Google",  color: "var(--laser-green)" },
            ].map((s) => (
              <div key={s.label} style={{ background: "var(--surface)", padding: "1.5rem 1rem", textAlign: "center" }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: "2.2rem", fontWeight: 900,
                  color: s.color, letterSpacing: "0.03em", lineHeight: 1,
                }}>{s.num}</div>
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: "0.62rem", fontWeight: 700,
                  letterSpacing: "0.18em", textTransform: "uppercase",
                  color: "var(--text-muted)", marginTop: "0.4rem",
                }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #inicio > div.container {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}