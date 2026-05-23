const packages = [
  {
    id: "dj", tag: "Esencial", tagStyle: "",
    name: "DJ", price: "$5,500", suffix: "/ 5 hrs base",
    desc: "Ideal para bodas, XV años y celebraciones. Sonido profesional y sets diseñados para tu evento.",
    features: ["DJ profesional por 5 horas","Equipo de sonido premium","Iluminación básica incluida","Repertorio personalizado","Horas adicionales: $1,200 c/u"],
    accentColor: "var(--laser-cyan)",
    cta: "Contratar DJ", highlight: false,
  },
  {
    id: "premium", tag: "★ Más popular", tagStyle: "magenta",
    name: "Premium", price: "$7,500", suffix: "/ 5 hrs base",
    desc: "Producción completa. Cabina personalizada, show de luces y gestión total del ambiente.",
    features: ["DJ profesional por 5 horas","Producción de sonido avanzada","Show de luces LED + laser","Cabina personalizada GDL","Coordinación de ambiente","Horas adicionales: $1,200 c/u"],
    accentColor: "var(--laser-magenta)",
    cta: "Contratar Premium", highlight: true,
  },
  {
    id: "cotizar", tag: "A tu medida", tagStyle: "green",
    name: "Cotizar", price: "Personalizado", suffix: "",
    desc: "Corporativos, festivales y producciones especiales. Armamos el paquete perfecto para ti.",
    features: ["Evaluación sin costo","Propuesta en 24 horas","Equipo escalable","Integración con proveedores","Soporte técnico incluido"],
    accentColor: "var(--laser-green)",
    cta: "Solicitar cotización", highlight: false,
  },
];

const surcharges = [
  { range: "10–100",  extra: "Incluido",  color: "var(--laser-green)" },
  { range: "100–200", extra: "+$3,000",   color: "var(--laser-cyan)" },
  { range: "200–300", extra: "+$5,500",   color: "var(--laser-magenta)" },
  { range: "300+",    extra: "+$7,500",   color: "var(--laser-violet)" },
];

export default function Services() {
  return (
    <section id="servicios" style={{ padding: "110px 0 80px", background: "var(--black-2)" }}>
      <div className="container">
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label">Servicios</span>
          <h2 className="section-title">
            Elige tu{" "}
            <span className="accent-magenta">Paquete</span>
          </h2>
          <span className="light-bar" />
          <p style={{ color: "var(--text-muted)", maxWidth: "440px", fontWeight: 300, lineHeight: 1.7 }}>
            Todos los paquetes incluyen 5 horas base. Precio calculado automáticamente al cotizar.
          </p>
        </div>

        <div style={{
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "1px", background: "var(--border)", borderRadius: "4px", overflow: "hidden",
        }}>
          {packages.map((pkg) => (
            <div key={pkg.id} style={{
              background: pkg.highlight ? "var(--surface-2)" : "var(--surface)",
              padding: "2.25rem 2rem",
              display: "flex", flexDirection: "column",
              position: "relative", overflow: "hidden",
            }}>
              {/*Borde color*/}
              <div style={{
                position: "absolute", top: 0, left: 0, right: 0, height: "2px",
                background: pkg.accentColor,
              }} />

              <span className={`tag${pkg.tagStyle ? `-${pkg.tagStyle}` : ""} tag`} style={{ marginBottom: "1rem", alignSelf: "flex-start" }}>
                {pkg.tag}
              </span>

              <h3 style={{
                fontFamily: "var(--font-display)", fontSize: "2.8rem",
                fontWeight: 900, textTransform: "uppercase",
                letterSpacing: "0.04em",
                color: pkg.highlight ? pkg.accentColor : "var(--text)",
                lineHeight: 0.9, marginBottom: "0.75rem",
              }}>{pkg.name}</h3>

              <div style={{ marginBottom: "1.25rem" }}>
                <span style={{
                  fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 900,
                  color: pkg.accentColor,
                }}>{pkg.price}</span>
                {pkg.suffix && <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginLeft: "0.4rem" }}>{pkg.suffix}</span>}
              </div>

              <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.65, marginBottom: "1.25rem", fontWeight: 300 }}>{pkg.desc}</p>

              <div style={{ height: "1px", background: "var(--border)", marginBottom: "1.25rem" }} />

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", flex: 1 }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", gap: "0.5rem" }}>
                    <span style={{ color: pkg.accentColor, flexShrink: 0, fontSize: "0.75rem", marginTop: "2px" }}>▸</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="#evento" style={{ marginTop: "2rem" }}
                className={pkg.highlight ? "btn-primary" : "btn-outline"}>
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>

        <div style={{ marginTop: "1.5px", background: "var(--border)", borderRadius: "0 0 4px 4px", overflow: "hidden" }}>
          <div style={{ background: "var(--surface)", padding: "1.5rem 2rem" }}>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: "0.65rem",
              letterSpacing: "0.25em", textTransform: "uppercase",
              color: "var(--text-muted)", marginBottom: "1rem", fontWeight: 700,
            }}>Recargo por número de invitados</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "var(--border)" }}>
              {surcharges.map((s) => (
                <div key={s.range} style={{ background: "var(--surface-2)", padding: "1rem", textAlign: "center" }}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.3rem", fontWeight: 700 }}>{s.range} personas</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: "1.2rem", fontWeight: 900, color: s.color }}>{s.extra}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}