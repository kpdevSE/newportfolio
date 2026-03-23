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

// Import Advanced Hacker Animations
import {
  MatrixRain,
  ParticleCursor,
  AnimatedGrid,
  TerminalBootSequence,
  CodeStreaming,
  ScanLines,
  StaticNoise,
  BinaryRain,
  SystemLoading
} from "./components/animations/HackerAnimations";

// Import Animation Styles
import "./components/animations/HackerAnimations.css";

const App = () => {
  const [showBootSequence, setShowBootSequence] = useState(true);
  const [showSystemLoading, setShowSystemLoading] = useState(false);
  const [isSystemReady, setIsSystemReady] = useState(false);
  const [backgroundEffect, setBackgroundEffect] = useState("matrix"); // matrix, binary, code, grid

  // Handle boot sequence completion
  const handleBootComplete = () => {
    setShowBootSequence(false);
    setShowSystemLoading(true);
  };

  // Handle system loading completion
  const handleSystemReady = () => {
    setShowSystemLoading(false);
    setIsSystemReady(true);
  };

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
      {/* Boot Sequence */}
      {showBootSequence && (
        <TerminalBootSequence onComplete={handleBootComplete} />
      )}

      {/* System Loading */}
      {showSystemLoading && (
        <SystemLoading 
          onComplete={handleSystemReady}
          messages={[
            "Initializing portfolio matrix...",
            "Loading hacker theme modules...",
            "Compiling animation engines...",
            "Establishing secure connections...",
            "Optimizing user experience...",
            "System ready - Welcome to KPDEV!"
          ]}
        />
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

          {/* Floating Social Media Buttons */}
          <FloatingSocialButtons />

          {/* Scroll To Top Button */}
          <ScrollToTopButton />
        </>
      )}
    </div>
  );
};

export default App;
