import React from 'react';
import { Search, User, Heart, ShoppingBag } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <div className="logo">
          <span className="logo-icon">S</span>
          <span className="logo-text">stationers</span>
        </div>
        <nav className="nav-links">
          <a href="#" className="active">Home</a>
          <a href="#">Shop</a>
          <a href="#">Features</a>
          <a href="#">Pages</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
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
