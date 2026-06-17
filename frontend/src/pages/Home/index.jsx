import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
import './Home.css';

const Home = () => {
  const [mobile, setMobile] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    alert(`Registration started for ${mobile}`);
    setMobile('');
  };

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-bg-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
        </div>
        <div className="container hero-content">
          <div className="hero-badge">WOMEN EMPOWERMENT · RURAL COMMERCE REVOLUTION</div>
          <h1 className="hero-title">Her Village. <br /><span className="text-gradient">Her Business.</span> <br />Her Power.</h1>
          <p className="hero-subtitle">
            Swaraz Mart is a women-first rural commerce platform giving every village woman her own business — selling everything from a needle to a luxury car, right from her doorstep.
          </p>
          <div className="hero-actions">
            <Link to={ROUTES.REGISTER} className="btn btn-primary btn-lg">Become an Agent — Free</Link>
            <a href="#services" className="btn btn-outline btn-lg">Explore Services</a>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="stats">
        <div className="container stats-grid">
          <div className="stat-card">
            <h2>500+</h2>
            <p>Villages Covered</p>
          </div>
          <div className="stat-card">
            <h2>₹50K</h2>
            <p>Max Monthly Earning</p>
          </div>
          <div className="stat-card">
            <h2>10,000+</h2>
            <p>Women Agents</p>
          </div>
          <div className="stat-card">
            <h2>50+</h2>
            <p>Product Categories</p>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="about section-padding">
        <div className="container about-grid">
          <div className="about-text">
            <h4 className="section-label">WHO WE ARE</h4>
            <h2 className="section-title">A marketplace built by women, for villages.</h2>
            <p>
              Swaraz Mart is the rural commerce arm of FIF Retail Business Pvt Ltd — a platform purpose-built to give village women a legitimate, dignified, and profitable business of their own. We bridge the gap between rural demand and organised supply, with our women agents at the centre of it all.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-item">
              <div className="feature-icon">🌱</div>
              <div>
                <h3>Zero Investment, Real Returns</h3>
                <p>No upfront cost. Register free, train free, and start earning from day one using your existing network.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">📱</div>
              <div>
                <h3>Digital + Doorstep Delivery</h3>
                <p>Place and track orders on your mobile. We handle logistics so your customers get products at home.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🎓</div>
              <div>
                <h3>Free Training & Ongoing Support</h3>
                <p>Our field team trains you in-person and online. You're never selling alone — we grow together.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">🤝</div>
              <div>
                <h3>Community of 10,000+ Agents</h3>
                <p>Join a network of village women who support, refer, and inspire each other across Telangana & AP.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE BANNER */}
      <section className="quote-banner">
        <div className="container">
          <blockquote>"When a woman is financially independent, her entire family rises with her."</blockquote>
          <cite>— Swaraz Mart Mission</cite>
          
          <div className="quote-stats">
            <div><strong>97%</strong> Agent Satisfaction Rate</div>
            <div><strong>3×</strong> Average Income Growth</div>
          </div>
        </div>
      </section>

      {/* WHAT WE SELL */}
      <section id="services" className="services section-padding">
        <div className="container">
          <div className="text-center">
            <h4 className="section-label">WHAT WE SELL</h4>
            <h2 className="section-title">From a needle to a luxury car — <br />everything in one platform.</h2>
            <p className="section-subtitle">As a Swaraz Mart Agent, you sell across 6 major categories — with more added every quarter.</p>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">🛒</div>
              <h3>Grocery & Daily Essentials</h3>
              <p>Staples, packaged foods, household items, and personal care products delivered to village homes on EMI or cash. High frequency = steady income.</p>
              <div className="service-tags"><span>FMCG</span><span>Kirana</span><span>Home Care</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">📱</div>
              <h3>Telecom & Digital Services</h3>
              <p>Jio SIM activations, broadband connections, mobile recharges, PhonePe speakers, and digital payment onboarding for rural shops.</p>
              <div className="service-tags"><span>Jio</span><span>PhonePe</span><span>Data Plans</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">💰</div>
              <h3>Loans & Financial Services</h3>
              <p>Personal loans, business loans, gold loans, microfinance, and insurance products through our NBFC and banking partners.</p>
              <div className="service-tags"><span>Loans</span><span>Insurance</span><span>Savings</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">🌾</div>
              <h3>Agriculture & Farm Inputs</h3>
              <p>Fertilisers, pesticides, seeds, and farm tools delivered at competitive prices directly to farmers in your village.</p>
              <div className="service-tags"><span>Fertilisers</span><span>Seeds</span><span>Tools</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">🚲</div>
              <h3>Vehicles & Heavy Products</h3>
              <p>Swaraz cycles, sewing machines, motorcycles, tractors, and even cars — booked via your agent app, financed on easy EMI.</p>
              <div className="service-tags"><span>Cycles</span><span>Machines</span><span>Vehicles</span></div>
            </div>
            <div className="service-card">
              <div className="service-icon">🏠</div>
              <h3>Electronics & Home Appliances</h3>
              <p>TVs, fans, refrigerators, washing machines, and more — all on flexible EMI plans with doorstep delivery and installation.</p>
              <div className="service-tags"><span>Electronics</span><span>Appliances</span><span>EMI</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROCESS */}
      <section id="process" className="process section-padding bg-surface">
        <div className="container">
          <div className="text-center">
            <h4 className="section-label">THE PROCESS</h4>
            <h2 className="section-title">Your business in 4 simple steps.</h2>
            <p className="section-subtitle">No experience needed. No investment required. Just your phone and your network.</p>
          </div>

          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>Register for Free</h3>
              <p>Sign up online in minutes with just your Aadhaar number and phone. No documents, no fees.</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>Get Trained</h3>
              <p>Attend a free training session — online or in your village — and learn everything about our products and app.</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>Sell & Earn</h3>
              <p>Share products with your network, take orders on the app, and earn commission on every sale. Simple.</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>Build Your Team</h3>
              <p>Refer other women to join. Earn a bonus on their sales too — and grow into a Team Leader.</p>
            </div>
          </div>
        </div>
      </section>

      {/* INCOME POTENTIAL */}
      <section className="income section-padding">
        <div className="container">
          <div className="income-header text-center">
            <h4 className="section-label">INCOME POTENTIAL</h4>
            <h2 className="section-title">How much can you earn?</h2>
            <p className="section-subtitle">Your effort determines your income. Here's what our agents earn across different streams.</p>
          </div>

          <div className="income-content">
            <div className="income-grid">
              <div className="income-card">
                <div className="income-icon">🎯</div>
                <h3>Direct Sales Commission</h3>
                <p>Earn 3% – 15% commission on every product sold. The more you sell, the more you make — no cap.</p>
              </div>
              <div className="income-card">
                <div className="income-icon">👥</div>
                <h3>Referral & Team Bonus</h3>
                <p>When the agents you recruit make a sale, you earn a percentage of their commission too.</p>
              </div>
              <div className="income-card">
                <div className="income-icon">🏆</div>
                <h3>Performance Rewards</h3>
                <p>Top agents each month receive cash rewards, gifts, and exclusive recognition from Swaraz Mart.</p>
              </div>
              <div className="income-card">
                <div className="income-icon">📈</div>
                <h3>Leadership Incentives</h3>
                <p>Become a Zone Leader or District Manager and unlock fixed monthly incentives on top of commissions.</p>
              </div>
            </div>

            <div className="income-banner">
              <div className="income-banner-left">
                <h3>₹15,000 to ₹50,000</h3>
                <p>Average monthly income earned by active Swaraz Mart Agents — from the comfort of their own village, at their own pace.</p>
              </div>
              <div className="income-banner-right">
                <span>✓ Zero Investment</span>
                <span>✓ Zero Risk</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section className="testimonials section-padding bg-surface">
        <div className="container">
          <div className="text-center">
            <h4 className="section-label">SUCCESS STORIES</h4>
            <h2 className="section-title">She did it. So can you.</h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"Joining Swaraz Mart changed my life completely. I earn ₹25,000 a month now and can give my children the education I never had. I am finally independent."</p>
              <div className="author">
                <div className="avatar">👩</div>
                <div>
                  <h4>Lakshmidevi</h4>
                  <p>📍 Nalgonda District, Telangana</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"I sell everything from Jio connections to fertilisers in my village. Everyone trusts me as their local agent. I never imagined I could run my own business."</p>
              <div className="author">
                <div className="avatar">👩‍🌾</div>
                <div>
                  <h4>Sujatha</h4>
                  <p>📍 Medak District, Telangana</p>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p className="quote">"I was nervous at first, but the training made everything easy. Today I lead a team of 8 agents across 3 villages and earn over ₹40,000 every month."</p>
              <div className="author">
                <div className="avatar">💼</div>
                <div>
                  <h4>Radhika</h4>
                  <p>📍 Mahbubnagar District, Telangana</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="cta section-padding">
        <div className="container">
          <div className="cta-content">
            <h2>Start your business today. <br />Your village is waiting.</h2>
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
              <button type="submit" className="btn btn-primary">Register Free →</button>
            </form>
            <p className="privacy-note">Your information is 100% private. No spam, ever.</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
