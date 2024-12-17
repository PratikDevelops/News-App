import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ setCategory }) {
  const [menuOpen, setMenuOpen] = useState(false);

 
  const handleLinkClick = (category) => {
    setCategory(category);
    setMenuOpen(false);     
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">News-App</div>

     
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <ul className={`navbar-links ${menuOpen ? "active" : ""}`}>
        <li>
          <a href="#technology" onClick={() => handleLinkClick("technology")}>Technology</a>
        </li>
        <li>
          <a href="#business" onClick={() => handleLinkClick("business")}>Business</a>
        </li>
        <li>
          <a href="#health" onClick={() => handleLinkClick("health")}>Health</a>
        </li>
        <li>
          <a href="#sports" onClick={() => handleLinkClick("sports")}>Sports</a>
        </li>
        <li>
          <a href="#entertainment" onClick={() => handleLinkClick("entertainment")}>Entertainment</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
