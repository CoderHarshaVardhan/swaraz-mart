import React from 'react';

const IncomeSection = () => {
  return (
    <section className="income section-padding gradient-section">
      <div className="container">
        <div className="section-header text-center">
          <h4 className="section-label">INCOME POTENTIAL</h4>
          <h2 className="section-title">How much can you earn?</h2>
          <p className="section-subtitle">Your effort determines your income. Here's what our agents earn across different streams.</p>
        </div>

        <div className="income-content">
          <div className="income-grid">
            {[
              { icon: '🎯', title: 'Direct Sales Commission', desc: 'Earn 3% – 15% commission on every product sold. The more you sell, the more you make no cap.' },
              { icon: '👥', title: 'Referral & Team Bonus', desc: 'When the agents you recruit make a sale, you earn a percentage of their commission too.' },
              { icon: '🏆', title: 'Performance Rewards', desc: 'Top agents each month receive cash rewards, gifts, and exclusive recognition from Swaraz Mart.' },
              { icon: '📈', title: 'Leadership Incentives', desc: 'Become a Zone Leader or District Manager and unlock fixed monthly incentives on top of commissions.' }
            ].map((item, idx) => (
              <div key={idx} className="income-card glass-effect card-hover-scale">
                <div className="income-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="income-banner glass-effect gradient-3d">
            <div className="income-banner-left">
              <h3>₹15,000 to ₹50,000</h3>
              <p>Average monthly income earned by active Swaraz Mart Agents from the comfort of their own village, at their own pace.</p>
            </div>
            <div className="income-banner-right">
              <span className="check-badge">✓ Zero Investment</span>
              <span className="check-badge">✓ Zero Risk</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncomeSection;
