import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { BIZ, navItems } from "../data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
      <Link to="/" className="brand">
        <span>{BIZ.shortName}</span>
        <small>{BIZ.tagline}</small>
      </Link>
      <button className={`menu-button ${open ? "active" : ""}`} onClick={() => setOpen(!open)} aria-label="Open navigation">
        <span /><span />
      </button>
      <nav className={`nav-links ${open ? "open" : ""}`}>
        {navItems.map(([label, path]) => (
          <Link key={path} className={location.pathname === path ? "active" : ""} to={path}>{label}</Link>
        ))}
        <a className="nav-action" href={`https://wa.me/${BIZ.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
      </nav>
    </header>
  );
}