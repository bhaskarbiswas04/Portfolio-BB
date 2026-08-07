import { useState } from "react";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";

const links = [
  ["Work", "#projects"],
  ["Stack", "#tech-stack"],
  ["Contact", "#contact"],
];

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);
  return (
    <header className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a href="#top" className="brand" aria-label="Bhaskar Biswas home"><span>BB</span><i>Bhaskar Biswas</i></a>
        <div className="nav-links">
          {links.map(([label, href]) => <a key={label} href={href}>{label}</a>)}
          <a className="nav-cta" href="#contact">Let’s talk <span>↗</span></a>
        </div>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>
          {open ? <HiX /> : <HiOutlineMenuAlt3 />}
        </button>
      </nav>
      {open && <div className="mobile-menu">{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a href="#contact" onClick={() => setOpen(false)}>Let’s talk ↗</a></div>}
    </header>
  );
}
