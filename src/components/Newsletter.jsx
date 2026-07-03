import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <section className="newsletter-section">
      <div className="container newsletter-inner">
        <h2>Subscribe And Get 20% Off Your<br/>First Purchase.</h2>
        <form className="newsletter-form">
          <input type="email" placeholder="Enter Your Email Address" required />
          <button type="submit" className="subscribe-btn">Subscribe</button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
