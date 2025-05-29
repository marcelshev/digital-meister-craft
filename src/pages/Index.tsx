
import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import IntroSection from '../components/IntroSection';
import ServicesSection from '../components/ServicesSection';
import ContactSection from '../components/ContactSection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <IntroSection />
        <ServicesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
