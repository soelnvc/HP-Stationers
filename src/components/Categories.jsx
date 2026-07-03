import React from 'react';
import './Categories.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const categories = [
  { id: 1, name: "Paper & Stationery", img: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?auto=format&fit=crop&q=80&w=400" },
  { id: 2, name: "Pens & Pencils", img: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&q=80&w=400" },
  { id: 3, name: "Paper & Pads", img: "https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400" },
  { id: 4, name: "Desk Organisers", img: "https://images.unsplash.com/photo-1596443686812-a74075b9bd7f?auto=format&fit=crop&q=80&w=400" }
];

const Categories = () => {
  return (
    <section className="section-padding bg-light-gray">
      <div className="container">
        <div className="category-header">
          <h2 className="section-title" style={{marginBottom: '15px'}}>Shop By Categories</h2>
          <p className="category-desc">Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
          <a href="#" className="btn-outline category-btn">All Categories</a>
        </div>
        
        <div className="category-carousel-wrapper">
           <button className="nav-btn prev"><ChevronLeft size={20} /></button>
           <div className="category-grid">
             {categories.map(c => (
               <div key={c.id} className="category-card">
                 <img src={c.img} alt={c.name} />
                 <div className="category-name">{c.name}</div>
               </div>
             ))}
           </div>
           <button className="nav-btn next"><ChevronRight size={20} /></button>
        </div>
      </div>
    </section>
  );
};

export default Categories;
