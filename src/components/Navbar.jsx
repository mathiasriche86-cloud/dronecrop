import { useEffect, useState } from "react";
import "../styles/navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scroll" : ""}`}>
      <div className="navbar-container">
        <a
          className="navbar-logo"
          href="#inicio"
          onClick={closeMenu}
          aria-label="Volver al inicio"
        >
          <img src={logo} alt="DroneCrop" />
        </a>

        <nav className={`navbar-menu ${menuOpen ? "navbar-menu-open" : ""}`}>
          <a href="#inicio" onClick={closeMenu}>
            Inicio
          </a>

          <a href="#servicios" onClick={closeMenu}>
            Servicios
          </a>

          <a href="#nosotros" onClick={closeMenu}>
            Nosotros
          </a>

          <a href="#sobre-nosotros" onClick={closeMenu}>
            Nuestro trabajo
          </a>

          <a href="#contacto" onClick={closeMenu}>
            Contacto
          </a>
        </nav>

        <a
          className="navbar-whatsapp"
          href="https://wa.me/5493446602742"
          target="_blank"
          rel="noreferrer"
        >
          <span className="navbar-whatsapp-icon">◉</span>
          Presupuesto
        </a>

        <button
          className={`menu-button ${menuOpen ? "menu-button-open" : ""}`}
          type="button"
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((estadoAnterior) => !estadoAnterior)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;