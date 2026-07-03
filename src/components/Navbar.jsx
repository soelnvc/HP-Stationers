import React, { useState } from 'react';
import { Search, User, Heart, ShoppingBag, Menu, X } from 'lucide-react';
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
          <a href="#" onClick={() => setIsMenuOpen(false)}>Shop</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Features</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Pages</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Blog</a>
          <a href="#" onClick={() => setIsMenuOpen(false)}>Contact</a>
        </nav>
        <div className="nav-actions">
          <div className="search-bar">
            <input type="text" placeholder="Search Products..." />
            <Search size={16} className="search-icon" />
          </div>
          <a href="#" className="icon-btn"><User size={20} /></a>
          <a href="#" className="icon-btn badge-btn">
            <Heart size={20} />
            <span className="badge">0</span>
          </a>
          <a href="#" className="icon-btn badge-btn">
            <ShoppingBag size={20} />
            <span className="badge">0</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
