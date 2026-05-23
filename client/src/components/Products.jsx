import { useState, useEffect } from "react";
import api from "../lib/axios.js";
import CabinaOro from "../Image/CabinaOro.jpeg";

const PLACEHOLDER_PRODUCTS = [
  {
    _id: "1",
    name: "Cabina DJ 3D Color Oro",
    price: 3000,
    description: "Cabina de DJ con diseño 3D. Acabado profesional, estructura resistente y estética única para cualquier tipo de evento.",
    dimensions: "1.02 m alto × 1 m largo × 50 cm ancho",
    tags: ["cabina", "3d", "profesional"],
    colors: [],
    photo: CabinaOro,
    customMeasures: false,
    accent: "cyan",
  },
];

const ACCENTS = {
  cyan:    { color: "var(--laser-cyan)",    border: "var(--laser-cyan)" },
  magenta: { color: "var(--laser-magenta)", border: "var(--laser-magenta)" },
  green:   { color: "var(--laser-green)",   border: "var(--laser-green)" },
  violet:  { color: "var(--laser-violet)",  border: "var(--laser-violet)" },
};

function formatPrice(n) {
  return new Intl.NumberFormat("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 }).format(n);
}

export default function Products() {
  const [products, setProducts] = useState(PLACEHOLDER_PRODUCTS);

  useEffect(() => {
    api.get("/api/products")
      .then((res) => { if (res.data?.data?.length > 0) setProducts(res.data.data); })
      .catch(() => {});
  }, []);

  return (
    <section id="productos" style={{ padding: "100px 0", background: "var(--black)" }}>
      <div className="container">
        <div style={{ marginBottom: "56px" }}>
          <span className="section-label">Catálogo</span>
          <h2 className="section-title">
            Equipo &amp; <span className="accent-cyan">Cabinas</span>
          </h2>
          <span className="light-bar" />
          <p style={{ color: "var(--text-muted)", maxWidth: "440px", fontWeight: 300, lineHeight: 1.7 }}>
            Cabinas fabricadas con acabados profesionales y diseño único.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.5rem" }}>
          {products.map((p, i) => {
            const accentKey = p.accent || ["cyan","magenta","green","violet"][i % 4];
            const ac = ACCENTS[accentKey];
            return (
              <article key={p._id} style={{
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: "4px",
                overflow: "hidden",
              }}>
                {/*IMAGEN*/}
                <div style={{ height: "220px", position: "relative", overflow: "hidden", background: "var(--surface-2)" }}>
                  {p.photo ? (
                    <img
                      src={p.photo}
                      alt={p.name}
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                      onError={(e) => {
                        e.target.parentElement.innerHTML = `<div style="height:100%;display:flex;align-items:center;justify-content:center;background:var(--surface-2)"><span style="font-family:var(--font-display);font-size:3rem;font-weight:900;color:${ac.color};opacity:0.2;text-transform:uppercase;letter-spacing:0.1em">GDL</span></div>`;
                      }}
                    />
                  ) : (
                    <div style={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--surface-2)" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: "3rem", fontWeight: 900, color: ac.color, opacity: 0.2, textTransform: "uppercase", letterSpacing: "0.1em" }}>GDL</span>
                    </div>
                  )}
                  {/*Borde de color*/}
                  <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: ac.color }} />
                </div>

                {/*INFO*/}
                <div style={{ padding: "1.5rem" }}>
                  <div style={{ display: "flex", gap: "0.35rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                    {p.tags?.slice(0, 3).map((t) => (
                      <span key={t} style={{
                        fontFamily: "var(--font-display)", fontSize: "0.58rem",
                        fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase",
                        padding: "2px 8px", borderRadius: "2px",
                        background: "transparent",
                        border: `1px solid ${ac.color}`,
                        color: ac.color,
                        opacity: 0.75,
                      }}>{t}</span>
                    ))}
                  </div>

                  <h3 style={{
                    fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 900,
                    textTransform: "uppercase", letterSpacing: "0.04em",
                    color: "var(--text)", marginBottom: "0.4rem",
                  }}>{p.name}</h3>

                  <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem", fontWeight: 300 }}>{p.description}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "0.2rem", marginBottom: "1.25rem" }}>
                    {p.dimensions && (
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>📐 {p.dimensions}</span>
                    )}
                    {p.colors?.length > 0 && (
                      <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>🎨 {p.colors.join(", ")}</span>
                    )}
                    {p.customMeasures && (
                      <span style={{ fontSize: "0.78rem", color: ac.color }}>⚡ Medidas personalizadas disponibles</span>
                    )}
                  </div>

                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 900,
                      color: ac.color,
                    }}>{formatPrice(p.price)}</span>
                    <a href="#contacto" className="btn-outline btn-sm">Consultar</a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/*ENTREGA*/}
        <div style={{
          marginTop: "2rem",
          background: "var(--surface)",
          border: "1px solid var(--border)",
          borderRadius: "4px",
          padding: "1.25rem 1.75rem",
          display: "flex",
          flexDirection: "column",
          gap: "0.4rem",
        }}>
          <p style={{
            fontFamily: "var(--font-display)", fontSize: "0.62rem",
            letterSpacing: "0.25em", textTransform: "uppercase",
            color: "var(--text-muted)", fontWeight: 700, marginBottom: "0.4rem",
          }}>Métodos de entrega</p>
          <p style={{ fontSize: "0.82rem", color: "var(--text-dim)", fontWeight: 300 }}>
            🚚 <strong style={{ color: "var(--laser-green)", fontWeight: 700 }}>Sin costo</strong> — entrega a domicilio dentro de 5 km del Estadio Azteca, CDMX
          </p>
          <p style={{ fontSize: "0.82rem", color: "var(--text-dim)", fontWeight: 300 }}>
            📦 <strong style={{ color: "var(--laser-cyan)", fontWeight: 700 }}>$250</strong> — dentro de CDMX
          </p>
        </div>
      </div>
    </section>
  );
}