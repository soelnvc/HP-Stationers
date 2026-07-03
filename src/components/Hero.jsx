import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container hero-inner">
        <div className="hero-content">
          <span className="hero-subtitle">FOR EVERYDAY</span>
          <h1 className="hero-title">
            Stock Up Your Desk<br />
            With Our 3 For 2<br />
            Stationery
          </h1>
          <a href="#" className="btn-outline-white">SHOP NOW</a>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=1000" alt="Stationery Desk" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
