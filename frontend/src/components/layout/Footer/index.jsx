import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <img src="/images/swaraz-logo.png" alt="Swaraz Mart Logo" style={{ height: '65px' }} />
            Swaraz Mart
          </h3>
          <p>
            A women's empowerment initiative by FIF Retail Business Pvt Ltd. 
            Connecting village women to income, dignity, and financial independence 
            across Telangana and Andhra Pradesh.
          </p>
        </div>
        
        <div className="footer-links">
          <h4>Become an Agent</h4>
          <ul>
            <li><Link to={ROUTES.REGISTER}>Register Free</Link></li>
            <li><a href="#">Training Program</a></li>
            <li><a href="#">Income Calculator</a></li>
            <li><a href="#">Agent Success Stories</a></li>
            <li><a href="#">Team Leadership</a></li>
          </ul>
        </div>

        <div className="footer-links">
          <h4>Services</h4>
          <ul>
            <li><a href="#">Grocery & FMCG</a></li>
            <li><a href="#">Telecom</a></li>
            <li><a href="#">Loans & Finance</a></li>
            <li><a href="#">Agriculture</a></li>
            <li><a href="#">Vehicles & Appliances</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li>📞 1800-XXX-XXXX (Toll Free)</li>
            <li>💬 WhatsApp Us</li>
            <li>📧 hello@swarazmart.com</li>
            <li>🏢 Hyderabad, Telangana</li>
          </ul>
        </div>
      </div>
      
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Swaraz Mart · FIF Retail Business Pvt Ltd. All rights reserved.</p>
        <div className="footer-legal">
          <a href="#">Privacy Policy</a>
          <span style={{ margin: '0 10px' }}>·</span>
          <a href="#">Terms of Service</a>
          <span style={{ margin: '0 10px' }}>·</span>
          <a href="#">Refund Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
