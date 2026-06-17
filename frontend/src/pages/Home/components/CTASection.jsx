import React, { useState } from 'react';

const CTASection = () => {
  const [mobile, setMobile] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    if (mobile.trim()) {
      alert(`Registration started for ${mobile}`);
      setMobile('');
    }
  };

  return (
    <section className="cta section-padding">
      <div className="container">
        <div className="cta-content glass-effect gradient-3d">
          <h2>Start your business today. Your village is waiting.</h2>
          <p>Free registration · Free training · Unlimited earning potential</p>
          <p className="cta-sub">Leave your number and our team will call you within 24 hours.</p>

          <form onSubmit={handleRegister} className="cta-form">
            <input
              type="tel"
              placeholder="Enter your mobile number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
            <button type="submit" className="btn btn-primary btn-lg btn-glow">
              <span className="btn-text">Register Free →</span>
              <span className="btn-glow-effect"></span>
            </button>
          </form>
          <p className="privacy-note">Your information is 100% private. No spam, ever.</p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
