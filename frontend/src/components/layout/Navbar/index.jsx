import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import './Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <Link to={ROUTES.HOME} className="navbar-brand">
        <img src="/images/swaraz-logo.png" alt="Swaraz Mart Logo" className="navbar-logo" />
        Swaraz Mart
      </Link>
      <div className="navbar-links">
        <a href="#services" className="nav-link">Services</a>
        <a href="#process" className="nav-link">How it Works</a>
        <Link to={ROUTES.LOGIN} className="btn btn-primary nav-btn">Agent Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
