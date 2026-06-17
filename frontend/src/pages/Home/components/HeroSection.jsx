import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-gradient-bg"></div>
      <div 
        className="hero-parallax-layer"
        style={{
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`
        }}
      >
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
      </div>

      <div className="container hero-content">
        <div className="hero-badge glass-effect">
          <span className="badge-dot"></span>
          WOMEN EMPOWERMENT · RURAL COMMERCE REVOLUTION
        </div>

        <div className="hero-title-wrapper">
          <h1 className="hero-title">
            Her Village.
            <br />
            <span className="text-gradient-3d">Her Business.</span>
            <br />
            Her Power.
          </h1>
        </div>

        <p className="hero-subtitle">
          Swaraz Mart is a women-first rural commerce platform giving every village woman her own business — selling everything from a needle to a luxury car, right from her doorstep.
        </p>

        <div className="hero-actions">
          <Link to={ROUTES.REGISTER} className="btn btn-primary btn-lg btn-glow">
            <span className="btn-text">Become an Agent — Free</span>
            <span className="btn-glow-effect"></span>
          </Link>
          <a href="#services" className="btn btn-outline btn-lg btn-hover-fill">
            <span>Explore Services</span>
          </a>
        </div>

        {/* 3D FLOATING CARD */}
        <div className="hero-card-3d glass-effect">
          <div className="card-inner">
            <div className="card-stat">
              <div className="card-number">₹50K</div>
              <div className="card-label">Monthly Potential</div>
            </div>
            <div className="card-divider"></div>
            <div className="card-stat">
              <div className="card-number">0%</div>
              <div className="card-label">Investment</div>
            </div>
          </div>
        </div>
      </div>

      {/* ANIMATED SCROLL INDICATOR */}
      <div className="scroll-indicator">
        <div className="scroll-dot"></div>
      </div>
    </section>
  );
};

export default HeroSection;
