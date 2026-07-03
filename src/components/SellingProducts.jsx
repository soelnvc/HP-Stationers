import React from 'react';

const products = [
  { id: 1, name: "Aesthetic Binder Clips", price: "$22.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Aesthetic Binder Clips", price: "$24.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Aesthetic Binder Clips", price: "$16.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Aesthetic Binder Clips", price: "$29.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" },
  { id: 5, name: "Aesthetic Binder Clips", price: "$29.00", img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=400" }
];

const SellingProducts = () => {
  return (
    <section className="section-padding" style={{paddingTop: 0}}>
      <div className="container">
        <h2 className="section-title" style={{marginBottom: '10px'}}>Selling Products</h2>
        <p style={{textAlign: 'center', color: 'var(--text-muted)', marginBottom: '50px'}}>Looked up one of the more obscure Latin words, consectetur,<br/>from a Lorem Ipsum passage.</p>
        
        <div className="product-grid" style={{gridTemplateColumns: 'repeat(5, 1fr)'}}>
          {products.map(p => (
            <div key={p.id} className="product-card">
              <div className="product-img-wrapper" style={{height: '200px'}}>
                <img src={p.img} alt={p.name} />
              </div>
              <h4 className="product-name" style={{fontSize: '13px'}}>{p.name}</h4>
              <div className="product-price">{p.price}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellingProducts;
