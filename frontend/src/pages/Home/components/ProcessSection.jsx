import React from 'react';

const ProcessSection = () => {
  return (
    <section id="process" className="process section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h4 className="section-label">THE PROCESS</h4>
          <h2 className="section-title">Your business in 4 simple steps.</h2>
          <p className="section-subtitle">No experience needed. No investment required. Just your phone and your network.</p>
        </div>

        <div className="process-timeline">
          {[
            { num: '1', title: 'Register for Free', desc: 'Sign up online in minutes with just your Aadhaar number and phone. No documents, no fees.' },
            { num: '2', title: 'Get Trained', desc: 'Attend a free training session — online or in your village — and learn everything about our products and app.' },
            { num: '3', title: 'Sell & Earn', desc: 'Share products with your network, take orders on the app, and earn commission on every sale. Simple.' },
            { num: '4', title: 'Build Your Team', desc: 'Refer other women to join. Earn a bonus on their sales too — and grow into a Team Leader.' }
          ].map((step, idx) => (
            <div key={idx} className="process-step process-card-3d">
              <div className="step-number 3d-number">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
