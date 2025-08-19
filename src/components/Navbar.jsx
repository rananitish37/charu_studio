import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false); 

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <div className="logo">Charu Gumber</div>
        <p className="txt">Makeup studio & Academy</p>
      </div>

      <button className="menu-toggle" onClick={toggleMenu} aria-label="Open Menu">
        &#9776;
      </button>

      <ul className={menuOpen ? "active" : ""}>
        <li><Link onClick={toggleMenu} to="/">Home</Link></li>
        <li><Link onClick={toggleMenu} to="/about">About</Link></li>
        <li><Link onClick={toggleMenu} to="/services">Services</Link></li>
        <li><Link onClick={toggleMenu} to="/portfolio">Portfolio</Link></li>
        <li><Link onClick={toggleMenu} to="/academy">Academy</Link></li>
        <li><Link onClick={toggleMenu} to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}