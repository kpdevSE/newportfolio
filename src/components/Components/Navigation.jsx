"use client";

import { useState, useEffect } from "react";
import { Menu, X, Terminal, Cpu, Wifi, Code2, ChevronRight, Zap, Shield, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";
import { GlitchText, RGBSplitText } from "../animations/HackerAnimations";

const navLinks = [
  { label: "About", href: "#about", command: "./about", icon: "👤", description: "Developer profile & bio" },
  { label: "Projects", href: "#projects", command: "./projects", icon: "🚀", description: "Featured work & demos" },
  { label: "Skills", href: "#skills", command: "./skills", icon: "⚡", description: "Technical expertise" },
  { label: "Experience", href: "#experience", command: "./experience", icon: "💼", description: "Career timeline" },
  { label: "Contact", href: "#contact", command: "./contact", icon: "📡", description: "Get in touch" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentNavIndex, setCurrentNavIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileTypedText, setMobileTypedText] = useState("");
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [activeNavItem, setActiveNavItem] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const navCommands = [
    "root@kpdev:~$ ls /portfolio/",
    "root@kpdev:~$ ./navigate --ready",
  ];

  const mobileCommands = [
    "root@kpdev:~$ ./initialize_nav_matrix",
    "> Loading navigation protocols...",
    "root@kpdev:~$ chmod +x mobile_interface.sh",
    "> Mobile interface ready for deployment",
  ];

  // Enable smooth scroll behavior on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Desktop terminal typing animation
  useEffect(() => {
    if (currentNavIndex < navCommands.length) {
      const currentCommand = navCommands[currentNavIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentCommand.length) {
          setTypedText(currentCommand.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentNavIndex(prev => prev + 1);
            setTypedText("");
          }, 2000);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    }
  }, [currentNavIndex]);

  // Mobile terminal typing animation
  useEffect(() => {
    if (isOpen && currentMobileIndex < mobileCommands.length) {
      const currentCommand = mobileCommands[currentMobileIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentCommand.length) {
          setMobileTypedText(currentCommand.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setCurrentMobileIndex(prev => prev + 1);
            setMobileTypedText("");
          }, 1000);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }
  }, [isOpen, currentMobileIndex]);

  // Reset mobile animation when menu closes
  useEffect(() => {
    if (!isOpen) {
      setCurrentMobileIndex(0);
      setMobileTypedText("");
      setActiveNavItem(null);
      setIsAnimating(false);
    }
  }, [isOpen]);

  // Touch gesture handling for swipe to close
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientY);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientY);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isUpSwipe = distance > 50;
    const isDownSwipe = distance < -50;
    
    // Close menu on down swipe
    if (isDownSwipe) {
      setIsOpen(false);
    }
  };

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const handleNavClick = (href) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsOpen(false);
    
    // Add haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }
    
    // Small delay to allow menu close animation
    setTimeout(() => {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      setIsAnimating(false);
    }, 300);
  };

  const handleMenuToggle = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setIsOpen(!isOpen);
    
    // Add haptic feedback simulation
    if (navigator.vibrate) {
      navigator.vibrate(30);
    }
    
    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <>
      <nav className={`fixed top-0 w-full bg-white/95 backdrop-blur-md border-b-2 border-black z-50 transition-all duration-300 shadow-lg font-mono ${
        isScrolled ? "shadow-gray-500/20" : ""
      }`}>
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo with Terminal Style */}
          <a href="#hero" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="KP Logo"
              className="h-9 w-auto drop-shadow-lg group-hover:scale-105 transition-all duration-300"
            />
          </a>

          {/* System Status Indicator */}
          <div className="hidden lg:flex items-center gap-4 text-xs">
            <div className="flex items-center gap-1">
              <Cpu className="h-3 w-3 text-black" />
              <span className="text-gray-600">CPU: 100%</span>
            </div>
            <div className="flex items-center gap-1">
              <Wifi className="h-3 w-3 text-black" />
              <span className="text-gray-600">ONLINE</span>
            </div>
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </div>

          {/* Desktop Nav with Command Style */}
          <div className="hidden md:flex space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="group relative px-3 py-2 text-sm font-medium text-black hover:bg-black hover:text-white transition-all duration-300 rounded border-2 border-transparent hover:border-black"
              >
                <div className="flex items-center gap-1">
                  <span className="text-gray-500 group-hover:text-gray-300">$</span>
                  <span>{link.command}</span>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button with Enhanced Hacker Style */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={handleMenuToggle}
              disabled={isAnimating}
              className={`relative text-black hover:text-white hover:bg-black border-2 border-black rounded-lg transition-all duration-300 ${
                isOpen ? 'bg-black text-white' : ''
              } ${isAnimating ? 'pointer-events-none' : ''}`}
            >
              <div className="relative">
                {isOpen ? (
                  <X className={`w-5 h-5 ${isAnimating ? 'animate-spin' : ''}`} />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
                {/* Glitch effect on menu button */}
                <div className={`absolute inset-0 ${isOpen && !isAnimating ? 'animate-glitch' : ''}`}>
                  {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                </div>
              </div>
              
              {/* Loading indicator */}
              {isAnimating && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-3 h-3 border border-current border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </Button>
          </div>
        </div>

        {/* Desktop Terminal Command Display */}
        {currentNavIndex < navCommands.length && (
          <div className="hidden lg:block bg-gray-100 border-t border-gray-300 px-4 py-2">
            <div className="max-w-6xl mx-auto">
              <div className="flex items-center gap-2 text-xs">
                <Code2 className="h-3 w-3 text-black" />
                <span className="text-black">
                  {typedText}
                  {showCursor && <span className="bg-black text-white">█</span>}
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Modern Full-Screen Mobile Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-[60] md:hidden transition-all duration-500 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Animated Background */}
        <div 
          className={`absolute inset-0 bg-white transition-all duration-500 ${
            isOpen ? 'opacity-95' : 'opacity-0'
          }`}
          onClick={() => !isAnimating && setIsOpen(false)}
        >
          {/* Matrix-style background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#000000_1px,transparent_1px),linear-gradient(to_bottom,#000000_1px,transparent_1px)] bg-[size:2rem_2rem] animate-grid-move"></div>
          </div>
          
          {/* Scan lines effect */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent animate-scan-lines h-1"></div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-black rounded-full animate-float opacity-30"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>

        {/* Navigation Content */}
        <div 
          className={`relative h-full flex flex-col transition-all duration-700 delay-200 ${
            isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          
          {/* Swipe indicator */}
          <div className="absolute top-2 left-1/2 transform -translate-x-1/2 z-10">
            <div className="w-12 h-1 bg-black/40 rounded-full"></div>
          </div>
          
          {/* Header Section */}
          <div className="flex-shrink-0 p-6 border-b border-black/20">
            {/* Terminal Header */}
            <div className="bg-black/10 backdrop-blur-md border-2 border-black rounded-lg p-4 mb-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex gap-1">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                </div>
                <span className="text-black text-sm font-mono">terminal@kpdev-mobile</span>
              </div>
              
              {/* Mobile Terminal Animation */}
              <div className="text-left space-y-1 min-h-[60px] font-mono text-sm">
                {mobileCommands.slice(0, currentMobileIndex + 1).map((line, index) => (
                  <div key={index} className={`text-black ${index === currentMobileIndex ? 'animate-typing' : ''}`}>
                    {index === currentMobileIndex ? mobileTypedText : line}
                    {index === currentMobileIndex && showCursor && (
                      <span className="bg-black text-white animate-blink">█</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Title */}
            <div className="text-center">
              <h2 className="text-3xl font-bold text-black font-mono mb-2">
                <GlitchText intensity="medium">
                  <RGBSplitText intensity="high" trigger="hover">
                    NAV.MATRIX
                  </RGBSplitText>
                </GlitchText>
              </h2>
              <div className="w-16 h-0.5 bg-black mx-auto mb-2"></div>
              <p className="text-black/70 text-sm font-mono">
                <span className="text-black/50">//</span> Select navigation protocol
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="flex-1 overflow-y-auto p-6">
            <div className="space-y-4 max-w-md mx-auto">
              {navLinks.map((link, index) => (
                <div
                  key={link.href}
                  className={`transform transition-all duration-500 ${
                    isOpen 
                      ? 'translate-x-0 opacity-100' 
                      : 'translate-x-full opacity-0'
                  }`}
                  style={{ transitionDelay: `${300 + index * 100}ms` }}
                >
                  <button
                    onClick={() => handleNavClick(link.href)}
                    onMouseEnter={() => setActiveNavItem(index)}
                    onMouseLeave={() => setActiveNavItem(null)}
                    disabled={isAnimating}
                    className={`w-full group relative overflow-hidden rounded-xl border-2 border-black/30 bg-black/5 backdrop-blur-md p-4 transition-all duration-300 hover:border-black hover:bg-black/10 hover:scale-105 ${
                      activeNavItem === index ? 'border-black bg-black/10 scale-105' : ''
                    } ${isAnimating ? 'pointer-events-none opacity-50' : ''}`}
                  >
                    {/* Background glitch effect */}
                    <div className={`absolute inset-0 bg-black/5 transition-opacity duration-300 ${
                      activeNavItem === index ? 'animate-glitch-subtle opacity-100' : 'opacity-0'
                    }`}></div>
                    
                    <div className="relative z-10 flex items-center gap-4">
                      {/* Icon */}
                      <div className={`text-2xl transition-transform duration-300 ${
                        activeNavItem === index ? 'scale-110 animate-bounce' : ''
                      }`}>
                        {link.icon}
                      </div>
                      
                      {/* Content */}
                      <div className="flex-1 text-left">
                        {/* Command */}
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-black/60 text-sm font-mono">$</span>
                          <span className="text-black font-mono font-medium">
                            {link.command}
                          </span>
                        </div>
                        
                        {/* Label */}
                        <div className="text-black text-lg font-bold font-mono mb-1">
                          {link.label}
                        </div>
                        
                        {/* Description */}
                        <div className="text-black/70 text-xs font-mono">
                          <span className="text-black/50">//</span> {link.description}
                        </div>
                      </div>
                      
                      {/* Arrow */}
                      <ChevronRight className={`w-5 h-5 text-black/60 transition-all duration-300 ${
                        activeNavItem === index ? 'translate-x-2 text-black' : ''
                      }`} />
                    </div>

                    {/* Hover effect overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-black/0 via-black/5 to-black/0 transition-all duration-300 ${
                      activeNavItem === index ? 'translate-x-0' : '-translate-x-full'
                    }`}></div>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex-shrink-0 p-6 border-t border-black/20">
            {/* System Status */}
            <div className="bg-black/10 backdrop-blur-md border-2 border-black rounded-lg p-4">
              <div className="flex items-center justify-between text-sm font-mono">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Shield className="h-4 w-4 text-green-600" />
                    <span className="text-black">SECURE</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4 text-yellow-600" />
                    <span className="text-black">ACTIVE</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Globe className="h-4 w-4 text-blue-600" />
                    <span className="text-black">ONLINE</span>
                  </div>
                </div>
                <div className="text-black/60">@kpdev</div>
              </div>
            </div>
            
            {/* Close hint */}
            <div className="text-center mt-4">
              <p className="text-black/50 text-xs font-mono mb-2">
                <span className="text-black/30">//</span> Swipe down or tap outside to close
              </p>
              <div className="flex items-center justify-center gap-2 text-black/40 text-xs">
                <div className="w-1 h-1 bg-black/40 rounded-full animate-pulse"></div>
                <span>NAV.MATRIX v2.0</span>
                <div className="w-1 h-1 bg-black/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes glitch {
          0%, 100% { transform: translate(0); }
          20% { transform: translate(-1px, 1px); }
          40% { transform: translate(-1px, -1px); }
          60% { transform: translate(1px, 1px); }
          80% { transform: translate(1px, -1px); }
        }
        
        @keyframes glitch-subtle {
          0%, 100% { transform: translate(0); }
          25% { transform: translate(-0.5px, 0.5px); }
          50% { transform: translate(0.5px, -0.5px); }
          75% { transform: translate(-0.5px, -0.5px); }
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(2rem, 2rem); }
        }
        
        @keyframes scan-lines {
          0% { transform: translateY(-100vh); }
          100% { transform: translateY(100vh); }
        }
        
        .animate-glitch {
          animation: glitch 0.3s infinite;
        }
        
        .animate-glitch-subtle {
          animation: glitch-subtle 0.2s infinite;
        }
        
        .animate-typing {
          overflow: hidden;
          white-space: nowrap;
          animation: typing 0.5s steps(40, end);
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-grid-move {
          animation: grid-move 20s linear infinite;
        }
        
        .animate-scan-lines {
          animation: scan-lines 3s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { 
            transform: translateY(0px) rotate(0deg); 
            opacity: 0.3;
          }
          50% { 
            transform: translateY(-20px) rotate(180deg); 
            opacity: 0.8;
          }
        }
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        /* Mobile-specific optimizations */
        @media (max-width: 768px) {
          .animate-glitch {
            animation-duration: 0.2s;
          }
          
          .animate-grid-move {
            animation-duration: 15s;
          }
          
          .animate-scan-lines {
            animation-duration: 2s;
          }
        }
        
        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-glitch,
          .animate-glitch-subtle,
          .animate-grid-move,
          .animate-scan-lines,
          .animate-float {
            animation: none;
          }
        }
      `}</style>
    </>
  );
}
