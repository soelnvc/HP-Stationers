import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="logo">
          <span className="logo-icon">HS</span>
          <span className="logo-text">Himachal Stationers</span>
        </div>
        <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <a href="#" className="active" onClick={() => setIsMenuOpen(false)}>Home</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Stationary</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Cards</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Paper</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
