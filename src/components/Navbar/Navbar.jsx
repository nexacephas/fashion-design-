import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/logo-navbar-removebg-preview.png";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id) => {
    if (!isHome) return;
    const el = document.getElementById(id);
    el && el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">
        {/* Logo */}
        <Link to="/" className="navbar-logo" onClick={() => setMenuOpen(false)}>
          <img src={logo} alt="Brand Logo" />
        </Link>

        {/* Navigation Links */}
        <nav className={`navbar-links ${menuOpen ? "mobile-open" : ""}`}>
          {isHome && (
            <>
              <button onClick={() => scrollToSection("about")}>About</button>
              <button onClick={() => scrollToSection("lookbook")}>Lookbook</button>
              <button onClick={() => scrollToSection("services")}>Services</button>
              <button onClick={() => scrollToSection("testimonials")}>Testimonials</button>
              <button onClick={() => scrollToSection("contact")}>Contact</button>
            </>
          )}
          {!isHome && <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>}

          <Link to="/booking" className="nav-book" onClick={() => setMenuOpen(false)}>
            Book
          </Link>
        </nav>

        {/* Hamburger Icon */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </div>
      </div>
    </header>
  );
}
