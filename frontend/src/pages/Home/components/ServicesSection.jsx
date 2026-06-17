import React from 'react';

const ServicesSection = () => {
  return (
    <section id="services" className="services section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h4 className="section-label">WHAT WE SELL</h4>
          <h2 className="section-title">From a needle to a luxury car — everything in one platform.</h2>
          <p className="section-subtitle">As a Swaraz Mart Agent, you sell across 6 major categories — with more added every quarter.</p>
        </div>

        <div className="services-grid">
          {[
            { icon: '🛒', title: 'Grocery & Daily Essentials', desc: 'Staples, packaged foods, household items, and personal care products delivered to village homes on EMI or cash. High frequency = steady income.', tags: ['FMCG', 'Kirana', 'Home Care'] },
            { icon: '📱', title: 'Telecom & Digital Services', desc: 'Jio SIM activations, broadband connections, mobile recharges, PhonePe speakers, and digital payment onboarding for rural shops.', tags: ['Jio', 'PhonePe', 'Data Plans'] },
            { icon: '💰', title: 'Loans & Financial Services', desc: 'Personal loans, business loans, gold loans, microfinance, and insurance products through our NBFC and banking partners.', tags: ['Loans', 'Insurance', 'Savings'] },
            { icon: '🌾', title: 'Agriculture & Farm Inputs', desc: 'Fertilisers, pesticides, seeds, and farm tools delivered at competitive prices directly to farmers in your village.', tags: ['Fertilisers', 'Seeds', 'Tools'] },
            { icon: '🚲', title: 'Vehicles & Heavy Products', desc: 'Swaraz cycles, sewing machines, motorcycles, tractors, and even cars — booked via your agent app, financed on easy EMI.', tags: ['Cycles', 'Machines', 'Vehicles'] },
            { icon: '🏠', title: 'Electronics & Home Appliances', desc: 'TVs, fans, refrigerators, washing machines, and more — all on flexible EMI plans with doorstep delivery and installation.', tags: ['Electronics', 'Appliances', 'EMI'] }
          ].map((service, idx) => (
            <div key={idx} className="service-card card-3d-flip">
              <div className="service-front glass-effect">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-tags">
                  {service.tags.map((tag, i) => (
                    <span key={i}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
