import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#servicios", label: "Servicios" },
    { href: "#productos", label: "Productos" },
    { href: "#evento",    label: "Contratar" },
    { href: "#resenas",   label: "Reseñas" },
    { href: "#faq",       label: "FAQ" },
    { href: "#contacto",  label: "Contacto" },
  ];

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      transition: "background 0.3s, border-color 0.3s",
      background: scrolled ? "rgba(0,0,0,0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(16px)" : "none",
      borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    }}>
      {scrolled && (
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px" }}>
          <span className="spectrum-line" style={{ display: "block" }} />
        </div>
      )}

      <div className="container" style={{
        display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "68px",
      }}>
        <a href="#inicio" style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <img
            src="/logo-gdl.png"
            alt="GDL"
            style={{
              height: "38px", width: "auto",
              filter: "brightness(0) invert(1)",
              opacity: 0.9,
            }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
          <div>
            {/* Nombre cyan*/}
            <div style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.4rem", fontWeight: 900,
              letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--laser-cyan)",
              lineHeight: 1,
            }}>GDL</div>
            <div style={{
              fontSize: "0.5rem", letterSpacing: "0.2em",
              textTransform: "uppercase", color: "var(--text-muted)",
              fontFamily: "var(--font-display)", fontWeight: 700,
              marginTop: "1px",
            }}>Gustavo Delgadillo</div>
          </div>
        </a>

        <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="nav-desktop">
          {links.map((l) => (
            <a key={l.href} href={l.href} style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.7rem", letterSpacing: "0.18em",
              textTransform: "uppercase", color: "var(--text-muted)",
              fontWeight: 700, transition: "color 0.2s",
            }}
              onMouseEnter={(e) => { e.target.style.color = "var(--laser-cyan)"; }}
              onMouseLeave={(e) => { e.target.style.color = "var(--text-muted)"; }}
            >{l.label}</a>
          ))}
          <a href="#evento" className="btn-primary btn-sm">Cotizar</a>
        </nav>

        <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Menú"
          style={{ display: "none", flexDirection: "column", gap: "5px", padding: "4px" }}
          className="nav-hamburger"
        >
          {[0,1,2].map((i) => (
            <span key={i} style={{
              display: "block", width: "22px", height: "1.5px",
              background: "var(--laser-cyan)",
            }} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: "rgba(0,0,0,0.98)", borderTop: "1px solid var(--border)",
          padding: "1.5rem 2rem 2rem", backdropFilter: "blur(16px)",
        }}>
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", padding: "0.8rem 0",
              borderBottom: "1px solid var(--border)",
              fontFamily: "var(--font-display)", fontSize: "0.9rem",
              letterSpacing: "0.15em", textTransform: "uppercase",
              color: "var(--text-muted)", fontWeight: 700,
            }}>{l.label}</a>
          ))}
          <a href="#evento" onClick={() => setMenuOpen(false)}
            className="btn-primary" style={{ marginTop: "1.5rem", width: "100%" }}>
            Cotizar evento
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-hamburger { display: flex !important; }
        }
      `}</style>
    </header>
  );
}