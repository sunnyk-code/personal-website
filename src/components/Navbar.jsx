import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">Shyamanth Kudum</a>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#resume">Résumé</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
