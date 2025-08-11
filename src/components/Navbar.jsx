import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
        <div>
            <div className="logo">Charu Gumber</div>
            <p className="txt">Makeup Studio</p>
        </div>
      
      
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/academy">Academy</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}