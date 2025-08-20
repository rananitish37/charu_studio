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
      <li><a href="#home" onClick={toggleMenu}>Home</a></li>
      <li><a href="#about" onClick={toggleMenu}>About</a></li>
      <li><a href="#services" onClick={toggleMenu}>Services</a></li>
      <li><a href="#academy" onClick={toggleMenu}>Academy</a></li>
      <li><a href="#portfolio" onClick={toggleMenu}>Portfolio</a></li>
      <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
    </ul>
    </nav>
  );
}