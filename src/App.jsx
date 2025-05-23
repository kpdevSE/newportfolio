import React, { useState } from 'react';
import ContactSection from './components/Components/Contact';
import SkillsSection from './components/Components/Skills';
import FeaturedProjects from './components/Components/FeaturedProjects';
import HeroSection from './components/Components/HeroSection';
import AboutSection from './components/Components/About';
import ExperianceSection from './components/Components/ExperianceSection';
import Education from './components/Components/Education';
import Navigation from './components/Components/Navigation';
import Footer from './components/Components/Footer';
import FloatingWhatsAppButton from './components/Components/Floatingwtsapp';

const App = () =>
{
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <AboutSection />

      {/* Projects Section */}
      <FeaturedProjects />

      {/* Skills Section */}
      <SkillsSection />

      {/* Experience Section */}
      <ExperianceSection />

      {/* Education Section */}
      <Education />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <Footer />

      {/* Floating Whats App Button */}
      <FloatingWhatsAppButton />
    </div>
  );
};

export default App;