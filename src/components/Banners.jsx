import React from 'react';
import './Banners.css';

const Banners = () => {
  return (
    <section className="banners-section">
      <div className="banner-grid">
        <div className="banner-item banner-1">
          <div className="banner-overlay"></div>
          <div className="banner-content">
            <h3>Rose Gold & Marble</h3>
            <p>Add some style to your desk with our gorgeous new collection</p>
            <a href="#" className="btn-outline">Shop Now</a>
          </div>
        </div>
        <div className="banner-item banner-2">
          <div className="banner-content">
            <span className="banner-tag">STATIONERY</span>
            <h3>UP TO 50%</h3>
            <p>Students Discount</p>
            <a href="#" className="btn-outline-white">Shop Now</a>
          </div>
        </div>
        <div className="banner-item banner-3">
          <div className="banner-overlay light"></div>
          <div className="banner-content">
            <h3>Pastel Range</h3>
            <p>Brighten up your working day with these beautiful pastels</p>
            <a href="#" className="btn-outline">Shop Now</a>
          </div>
        </div>
        <div className="banner-item banner-4">
          <div className="banner-overlay light"></div>
          <div className="banner-content">
            <h3>Limited Edition</h3>
            <p>Hurry, our brand new collection is sure to sell out fast</p>
            <a href="#" className="btn-outline">Shop Now</a>
          </div>
        </div>
        <div className="banner-item banner-5">
          <div className="banner-overlay dark"></div>
          <div className="banner-content text-white">
            <span className="banner-tag">BLACK & WHITE COLLECTION</span>
            <h3>SALE 10% OFF</h3>
            <p>All Orders Over $50</p>
            <a href="#" className="btn-outline-white">Shop Now</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banners;
