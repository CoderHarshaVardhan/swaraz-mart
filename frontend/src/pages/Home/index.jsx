import React from 'react';
import './Home.css';

import BackgroundBlobs from './components/BackgroundBlobs';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import AboutSection from './components/AboutSection';
import QuoteSection from './components/QuoteSection';
import ServicesSection from './components/ServicesSection';
import ProcessSection from './components/ProcessSection';
import IncomeSection from './components/IncomeSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';

const Home = () => {
  return (
    <div className="home-page">
      <BackgroundBlobs />
      <HeroSection />
      <StatsSection />
      <AboutSection />
      <QuoteSection />
      <ServicesSection />
      <ProcessSection />
      <IncomeSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default Home;