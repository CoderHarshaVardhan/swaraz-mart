import React from 'react';

const QuoteSection = () => {
  return (
    <section className="quote-banner gradient-3d">
      <div className="container">
        <blockquote>"When a woman is financially independent, her entire family rises with her."</blockquote>
        <cite>— Swaraz Mart Mission</cite>

        <div className="quote-stats">
          <div className="stat-box glass-effect">
            <strong>97%</strong>
            <span>Agent Satisfaction</span>
          </div>
          <div className="stat-box glass-effect">
            <strong>3×</strong>
            <span>Income Growth</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection;
