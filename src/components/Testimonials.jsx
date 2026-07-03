import React from 'react';
import './Testimonials.css';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="section-padding">
      <div className="container testimonial-inner">
        <div className="testimonial-content">
          <h2 className="section-title" style={{textAlign: 'left', marginBottom: '20px'}}>Success Stories<br/>From Client</h2>
          <p className="testimonial-desc">Looked up one of the more obscure</p>
          
          <div className="testimonial-quote-box">
            <Quote size={60} className="quote-icon" />
            <blockquote>
              "Looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature."
            </blockquote>
            <div className="client-info">
              <h4 className="client-name">Jane Doe</h4>
              <span className="client-role">Founder</span>
            </div>
            <div className="testimonial-dots">
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
            </div>
          </div>
        </div>
        <div className="testimonial-image">
          <img src="https://images.unsplash.com/photo-1542596594-649edbc13630?auto=format&fit=crop&q=80&w=800" alt="Client Story" />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
