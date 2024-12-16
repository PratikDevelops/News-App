import React from 'react';
import './Navbar.css';

function Navbar({ setCategory }) {
  return (
    <nav className="navbar">
      <div className="navbar-brand">News-App</div>
      <ul className="navbar-links">
        <li><a href="#technology" onClick={() => setCategory("technology")}>Technology</a></li>
        <li><a href="#business" onClick={() => setCategory("business")}>Business</a></li>
        <li><a href="#health" onClick={() => setCategory("health")}>Health</a></li>
        <li><a href="#sports" onClick={() => setCategory("sports")}>Sports</a></li>
        <li><a href="#entertainment" onClick={() => setCategory("entertainment")}>Entertainment</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
