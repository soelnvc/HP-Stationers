import React from 'react';
import './Promo.css';

const Promo = () => {
  return (
    <section className="promo-section section-padding">
      <div className="container promo-inner">
        <div className="promo-image">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=800" alt="Office Desk Setup" />
        </div>
        <div className="promo-content">
          <h2 className="promo-title">Thoughtful Stationery That<br/>Sparks Creativity</h2>
          <p className="promo-text">Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
          <a href="#" className="btn-outline">LEARN MORE</a>
        </div>
      </div>
    </section>
  );
};
export default Promo;
