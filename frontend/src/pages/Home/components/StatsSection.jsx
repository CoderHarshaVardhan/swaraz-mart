import React, { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [counters, setCounters] = useState({ villages: 0, earnings: 0, agents: 0, categories: 0 });
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;

    const animateCount = (target, key) => {
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        // Easing out function for smoother rolling
        const progress = Math.min(elapsed / duration, 1);
        const easeOutQuad = 1 - (1 - progress) * (1 - progress);
        const value = Math.floor(easeOutQuad * target);

        setCounters(prev => ({ ...prev, [key]: value }));

        if (progress < 1) requestAnimationFrame(animate);
      };

      animate();
    };

    animateCount(500, 'villages');
    animateCount(50, 'earnings');
    animateCount(10000, 'agents');
    animateCount(50, 'categories');
  }, [hasAnimated]);

  return (
    <section className="stats" ref={sectionRef}>
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card card-glass-3d">
            <div className="stat-icon">🏘️</div>
            <h2 className="stat-value">{counters.villages}+</h2>
            <p>Villages Covered</p>
            <div className="stat-bar"></div>
          </div>
          <div className="stat-card card-glass-3d">
            <div className="stat-icon">💵</div>
            <h2 className="stat-value">₹{(counters.earnings / 50 * 50).toFixed(0)}K</h2>
            <p>Max Monthly Earning</p>
            <div className="stat-bar"></div>
          </div>
          <div className="stat-card card-glass-3d">
            <div className="stat-icon">👩‍💼</div>
            <h2 className="stat-value">{(counters.agents / 100 * 100).toLocaleString()}+</h2>
            <p>Women Agents</p>
            <div className="stat-bar"></div>
          </div>
          <div className="stat-card card-glass-3d">
            <div className="stat-icon">📦</div>
            <h2 className="stat-value">{counters.categories}+</h2>
            <p>Product Categories</p>
            <div className="stat-bar"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
