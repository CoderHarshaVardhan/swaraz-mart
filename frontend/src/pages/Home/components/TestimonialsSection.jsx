import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="testimonials section-padding">
      <div className="container">
        <div className="section-header text-center">
          <h4 className="section-label">SUCCESS STORIES</h4>
          <h2 className="section-title">She did it. So can you.</h2>
        </div>
        <div className="testimonials-grid">
          {[
            { name: 'Lakshmidevi', location: 'Nalgonda District, Telangana', quote: 'Joining Swaraz Mart changed my life completely. I earn ₹25,000 a month now and can give my children the education I never had. I am finally independent.', avatar: '👩' },
            { name: 'Sujatha', location: 'Medak District, Telangana', quote: 'I sell everything from Jio connections to fertilisers in my village. Everyone trusts me as their local agent. I never imagined I could run my own business.', avatar: '👩‍🌾' },
            { name: 'Radhika', location: 'Mahbubnagar District, Telangana', quote: 'I was nervous at first, but the training made everything easy. Today I lead a team of 8 agents across 3 villages and earn over ₹40,000 every month.', avatar: '💼' }
          ].map((testimonial, idx) => (
            <div key={idx} className="testimonial-card card-3d-flip glass-effect">
              <div className="stars">★★★★★</div>
              <p className="quote">"{testimonial.quote}"</p>
              <div className="author">
                <div className="avatar">{testimonial.avatar}</div>
                <div>
                  <h4>{testimonial.name}</h4>
                  <p>📍 {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
