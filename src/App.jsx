import React, { useState, useEffect } from "react";
import ContactSection from "./components/Components/Contact";
import SkillsSection from "./components/Components/Skills";
import FeaturedProjects from "./components/Components/FeaturedProjects";
import HeroSection from "./components/Components/HeroSection";
import AboutSection from "./components/Components/About";
import ExperianceSection from "./components/Components/ExperianceSection";
import Education from "./components/Components/Education";
import Navigation from "./components/Components/Navigation";
import Footer from "./components/Components/Footer";
import FloatingSocialButtons from "./components/Components/FloatingSocialButtons";
import ScrollToTopButton from "./components/Components/ScrollToTopButton";
import SEOHelmet from "./components/SEO/SEOHelmet";
import { getSEOData } from "./utils/seoConfig";

// Import Advanced Hacker Animations
import {
  MatrixRain,
  ParticleCursor,
  AnimatedGrid,
  CodeStreaming,
  ScanLines,
  StaticNoise,
  BinaryRain,
  SystemLoading
} from "./components/animations/HackerAnimations";

// Import Animation Styles
import "./components/animations/HackerAnimations.css";

const App = () => {
  const [showSystemLoading, setShowSystemLoading] = useState(true);
  const [isSystemReady, setIsSystemReady] = useState(false);
  const [backgroundEffect, setBackgroundEffect] = useState("matrix"); // matrix, binary, code, grid
  const [activeSection, setActiveSection] = useState("home");

  // Handle system loading completion
  const handleSystemReady = () => {
    setShowSystemLoading(false);
    setIsSystemReady(true);
  };

  // Track active section for SEO updates
  useEffect(() => {
    if (!isSystemReady) return;

    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'experience', 'education', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isSystemReady]);

  // Cycle background effects every 30 seconds
  useEffect(() => {
    if (!isSystemReady) return;

    const effects = ["matrix", "binary", "code", "grid"];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % effects.length;
      setBackgroundEffect(effects[currentIndex]);
    }, 30000);

    return () => clearInterval(interval);
  }, [isSystemReady]);

  // Render background effect based on current selection
  const renderBackgroundEffect = () => {
    if (!isSystemReady) return null;

    switch (backgroundEffect) {
      case "matrix":
        return <MatrixRain />;
      case "binary":
        return <BinaryRain />;
      case "code":
        return <CodeStreaming />;
      case "grid":
        return <AnimatedGrid />;
      default:
        return <MatrixRain />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900 relative overflow-hidden">
      {/* Dynamic SEO based on active section */}
      <SEOHelmet {...getSEOData(activeSection)} />

      {/* KP Loading Screen */}
      {showSystemLoading && (
        <SystemLoading onComplete={handleSystemReady} />
      )}

      {/* Main Application */}
      {isSystemReady && (
        <>
          {/* Dynamic Background Effects */}
          {renderBackgroundEffect()}

          {/* Particle Cursor Trail */}
          <ParticleCursor />

          {/* Scan Lines Effect */}
          <ScanLines />

          {/* Static Noise Overlay (Very Subtle) */}
          <StaticNoise intensity={0.02} />

          {/* Navigation */}
          <Navigation />

          {/* Hero Section */}
          <section id="home">
            <HeroSection />
          </section>

          {/* About Section */}
          <AboutSection />

          {/* Projects Section */}
          <section id="projects">
            <FeaturedProjects />
          </section>

          {/* Skills Section */}
          <section id="skills">
            <SkillsSection />
          </section>

          {/* Experience Section */}
          <section id="experience">
            <ExperianceSection />
          </section>

          {/* Education Section */}
          <section id="education">
            <Education />
          </section>

          {/* Contact Section */}
          <section id="contact">
            <ContactSection />
          </section>

          {/* Footer */}
          <Footer />

          {/* Floating Social Media Buttons */}
          <FloatingSocialButtons />


          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default App;
