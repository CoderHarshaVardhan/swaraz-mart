import React from 'react';

const AboutSection = () => {
  return (
    <section className="about section-padding">
      <div className="container about-grid">
        <div className="about-text">
          <h4 className="section-label">WHO WE ARE</h4>
          <h2 className="section-title">A marketplace built by<br />women, for villages.</h2>
          <p>
            Swaraz Mart is the rural commerce arm of FIF Retail Business Pvt Ltd — a platform purpose-built to give village women a legitimate, dignified, and profitable business of their own. We bridge the gap between rural demand and organised supply, with our women agents at the centre of it all.
          </p>
        </div>

        <div className="about-features">
          {[
            { icon: '🌱', title: 'Zero Investment, Real Returns', desc: 'No upfront cost. Register free, train free, and start earning from day one using your existing network.' },
            { icon: '📱', title: 'Digital + Doorstep Delivery', desc: 'Place and track orders on your mobile. We handle logistics so your customers get products at home.' },
            { icon: '🎓', title: 'Free Training & Ongoing Support', desc: 'Our field team trains you in-person and online. You\'re never selling alone — we grow together.' },
            { icon: '🤝', title: 'Community of 10,000+ Agents', desc: 'Join a network of village women who support, refer, and inspire each other across Telangana & AP.' }
          ].map((feature, idx) => (
            <div key={idx} className="feature-item feature-glass card-hover-lift">
              <div className="feature-icon">{feature.icon}</div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
