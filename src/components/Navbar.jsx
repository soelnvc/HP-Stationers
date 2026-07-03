import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

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
          {['Home', 'Stationary', 'Cards', 'Paper', 'Contact'].map((link) => (
            <a
              key={link}
              href="#"
              className={activeLink === link ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(link);
                setIsMenuOpen(false);
              }}
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
