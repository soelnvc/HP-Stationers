import React, { useState } from 'react';
import './ProductGrid.css';

const sections = [
  { id: 1, name: "Premium Pens & Pencils", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Designer Notebooks", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Greeting Cards", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Office Folders & Files", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" }
];

const CuteStationery = () => {
  const [activeFilter, setActiveFilter] = useState('Bestsellers');

  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">Look whats performing!</h2>
        <div className="product-filters">
          {['Bestsellers', 'Stationary', 'Cards', 'Paperwork'].map(filter => (
            <a
              key={filter}
              href="#"
              className={activeFilter === filter ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                setActiveFilter(filter);
              }}
            >
              {filter}
            </a>
          ))}
        </div>
        <div className="product-grid">
          {sections.map(section => (
            <div key={section.id} className="product-card">
              <div className="product-img-wrapper">
                <img src={section.img} alt={section.name} />
              </div>
              <h4 className="product-name">{section.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CuteStationery;
