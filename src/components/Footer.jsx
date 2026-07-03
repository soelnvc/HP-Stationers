import React from 'react';
import './Footer.css';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo" style={{marginBottom: '20px'}}>
              <span className="logo-icon">H</span>
              <span className="logo-text">Himachal Stationers</span>
            </div>
            <p className="footer-text">
              250000+ Students & Teachers.<br/>
              Trusted by 100+ schools and colleges<br/>
              across the world.
            </p>
            <div className="social-links">
              <a href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 className="footer-heading">QUICK LINKS</h4>
            <ul>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 className="footer-heading">SHOP</h4>
            <ul>
              <li><a href="#">Pens</a></li>
              <li><a href="#">Pencils</a></li>
              <li><a href="#">Notebooks</a></li>
              <li><a href="#">Desk Organisers</a></li>
              <li><a href="#">Art & Craft</a></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 className="footer-heading">CONTACT INFO</h4>
            <div className="contact-item highlight">
              <Phone size={18} className="contact-icon" />
              <span>+91 98722 66092</span>
            </div>
            <div className="contact-item">
              <MapPin size={18} className="contact-icon" />
              <span>Block C, 3rd Floor, Delhi,<br/>India 110001</span>
            </div>
            <div className="contact-item">
              <Mail size={18} className="contact-icon" />
              <span>himachalstationers@gmail.com</span>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Himachal Stationers. All Rights Reserved.</p>
          <div className="payment-icons">
            <span>VISA</span>
            <span>MasterCard</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
