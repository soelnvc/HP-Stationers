import React from 'react';
import './ProductGrid.css';

const products = [
  { id: 1, name: "Aesthetic Binder Clips", price: "$22.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Aesthetic Binder Clips", price: "$24.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Aesthetic Binder Clips", price: "$16.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Aesthetic Binder Clips", price: "$29.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" }
];

const CuteStationery = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">Cute Stationery</h2>
        <div className="product-filters">
          <a href="#" className="active">NEW</a>
          <a href="#">FEATURED</a>
          <a href="#">BEST SELLER</a>
          <a href="#">LATEST</a>
        </div>
        <div className="product-grid">
          {products.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={p.img} alt={p.name} />
              </div>
              <h4 className="product-name">{p.name}</h4>
              <div className="product-price">{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuteStationery;
