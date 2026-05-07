import React, { useEffect, useRef, useState } from 'react';

// Matrix Rain Effect Component
export const MatrixRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const matrix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789@#$%^&*()*&^%+-/~{[|`]}";
    const matrixArray = matrix.split("");

    const fontSize = 10;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.04)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#000';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = matrixArray[Math.floor(Math.random() * matrixArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 35);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-20"
      style={{ mixBlendMode: 'multiply' }}
    />
  );
};

// Particle Cursor Trail Component
export const ParticleCursor = () => {
  const [particles, setParticles] = useState([]);
  const animationRef = useRef();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const newParticle = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        life: 1,
        decay: 0.02,
      };

      setParticles(prev => [...prev.slice(-20), newParticle]);
    };

    const animate = () => {
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          life: particle.life - particle.decay,
          y: particle.y - 1,
        })).filter(particle => particle.life > 0)
      );
      animationRef.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-10">
      {particles.map(particle => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-black rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            opacity: particle.life,
            transform: `scale(${particle.life})`,
          }}
        />
      ))}
    </div>
  );
};

// Animated Grid Background Component
export const AnimatedGrid = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30 animate-grid-move"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl animate-float-delayed"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl animate-pulse-slow"></div>
    </div>
  );
};

// Terminal Boot Sequence Component
export const TerminalBootSequence = ({ onComplete }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const bootSteps = [
    "BIOS Version 2.1.0 - Initializing...",
    "Memory Test: 16GB OK",
    "Loading Kernel Modules...",
    "Starting Network Services...",
    "Mounting File Systems...",
    "Loading User Profile: @kpdev",
    "Initializing Portfolio System...",
    "Loading React Components...",
    "Compiling Stylesheets...",
    "Starting Development Server...",
    "System Ready - Welcome to Portfolio v2.0",
    "ACCESS GRANTED"
  ];

  useEffect(() => {
    if (currentStep < bootSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep(prev => prev + 1);
      }, currentStep === bootSteps.length - 1 ? 1500 : 300);

      return () => clearTimeout(timer);
    } else {
      const fadeTimer = setTimeout(() => {
        setIsVisible(false);
        if (onComplete) onComplete();
      }, 2000);

      return () => clearTimeout(fadeTimer);
    }
  }, [currentStep, bootSteps.length, onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center font-mono">
      <div className="max-w-2xl w-full p-8">
        <div className="border-2 border-white p-6 bg-black">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="text-white text-sm">SYSTEM BOOT SEQUENCE</span>
          </div>
          
          <div className="space-y-2 min-h-[300px]">
            {bootSteps.slice(0, currentStep + 1).map((step, index) => (
              <div
                key={index}
                className={`text-sm ${
                  index === bootSteps.length - 1 
                    ? 'text-green-400 font-bold text-lg animate-pulse' 
                    : 'text-white'
                } ${index === currentStep ? 'animate-typing' : ''}`}
              >
                <span className="text-green-400">root@kpdev:~$</span> {step}
                {index === currentStep && currentStep < bootSteps.length - 1 && (
                  <span className="animate-blink">█</span>
                )}
              </div>
            ))}
            
            {currentStep < bootSteps.length && (
              <div className="flex items-center gap-2 mt-4">
                <div className="w-64 bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-white h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(currentStep / bootSteps.length) * 100}%` }}
                  ></div>
                </div>
                <span className="text-white text-xs">
                  {Math.round((currentStep / bootSteps.length) * 100)}%
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Code Streaming Background Component
export const CodeStreaming = () => {
  const [codeLines, setCodeLines] = useState([]);

  const codeSnippets = [
    "const portfolio = new Developer();",
    "function createAmazingUI() {",
    "  return <HackerTheme />;",
    "}",
    "npm install awesome-skills",
    "git commit -m 'Added epic animations'",
    "const skills = ['React', 'Node.js'];",
    "export default Portfolio;",
    "// Building the future...",
    "sudo make me_a_sandwich",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newLine = {
        id: Date.now(),
        text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
        x: Math.random() * window.innerWidth,
        y: -20,
        speed: 0.5 + Math.random() * 1,
        opacity: 0.3 + Math.random() * 0.4,
      };

      setCodeLines(prev => [...prev.slice(-10), newLine]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const animateLines = () => {
      setCodeLines(prev => 
        prev.map(line => ({
          ...line,
          y: line.y + line.speed,
        })).filter(line => line.y < window.innerHeight + 50)
      );
    };

    const animationInterval = setInterval(animateLines, 16);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {codeLines.map(line => (
        <div
          key={line.id}
          className="absolute font-mono text-xs text-black whitespace-nowrap"
          style={{
            left: line.x,
            top: line.y,
            opacity: line.opacity,
            transform: `rotate(${Math.sin(line.y * 0.01) * 5}deg)`,
          }}
        >
          {line.text}
        </div>
      ))}
    </div>
  );
};

// Enhanced Glitch Text Component
export const GlitchText = ({ children, className = "", intensity = "medium" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  const glitchIntensity = {
    low: "animate-glitch-subtle",
    medium: "animate-glitch",
    high: "animate-glitch-intense"
  };

  return (
    <span 
      className={`relative inline-block ${className}`}
      onMouseEnter={() => setIsGlitching(true)}
      onMouseLeave={() => setIsGlitching(false)}
    >
      <span className={isGlitching ? glitchIntensity[intensity] : ""}>
        {children}
      </span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-glitch-red">
            {children}
          </span>
          <span className="absolute top-0 left-0 text-blue-500 opacity-70 animate-glitch-blue">
            {children}
          </span>
        </>
      )}
    </span>
  );
};

// Scan Lines Effect Component
export const ScanLines = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-20 opacity-10">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black to-transparent animate-scan-lines"></div>
    </div>
  );
};

// Enhanced Typing Animation with Sound Effect Simulation
export const EnhancedTypingAnimation = ({ text, onComplete, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
        
        // Simulate typing sound effect with visual feedback
        const audioFeedback = document.createElement('div');
        audioFeedback.style.cssText = `
          position: fixed;
          top: 50%;
          left: 50%;
          width: 4px;
          height: 4px;
          background: #000;
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          animation: typing-pulse 0.1s ease-out;
        `;
        document.body.appendChild(audioFeedback);
        setTimeout(() => document.body.removeChild(audioFeedback), 100);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete]);

  // Cursor blinking
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className="font-mono">
      {displayedText}
      {showCursor && <span className="animate-blink bg-black text-white">█</span>}
    </span>
  );
};

// RGB Split Glitch Effect Component
export const RGBSplitText = ({ children, intensity = "medium", trigger = "hover" }) => {
  const [isActive, setIsActive] = useState(false);

  const intensityClasses = {
    low: "animate-rgb-split-low",
    medium: "animate-rgb-split-medium",
    high: "animate-rgb-split-high"
  };

  const handleTrigger = () => {
    if (trigger === "hover") return;
    setIsActive(true);
    setTimeout(() => setIsActive(false), 1000);
  };

  return (
    <span 
      className={`relative inline-block ${trigger === "click" ? "cursor-pointer" : ""}`}
      onMouseEnter={() => trigger === "hover" && setIsActive(true)}
      onMouseLeave={() => trigger === "hover" && setIsActive(false)}
      onClick={handleTrigger}
    >
      <span className={isActive ? intensityClasses[intensity] : ""}>
        {children}
      </span>
      {isActive && (
        <>
          <span className="absolute top-0 left-0 text-red-500 opacity-70 animate-rgb-red">
            {children}
          </span>
          <span className="absolute top-0 left-0 text-cyan-500 opacity-70 animate-rgb-cyan">
            {children}
          </span>
        </>
      )}
    </span>
  );
};

// Chromatic Aberration Effect
export const ChromaticAberration = ({ children, className = "" }) => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 200);
    }, 3000 + Math.random() * 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={`relative inline-block ${className}`}>
      <span className={isGlitching ? "animate-chromatic-base" : ""}>
        {children}
      </span>
      {isGlitching && (
        <>
          <span className="absolute top-0 left-0 text-red-500 opacity-60 animate-chromatic-red">
            {children}
          </span>
          <span className="absolute top-0 left-0 text-blue-500 opacity-60 animate-chromatic-blue">
            {children}
          </span>
        </>
      )}
    </span>
  );
};

// Static Noise Overlay
export const StaticNoise = ({ intensity = 0.1 }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createNoise = () => {
      const imageData = ctx.createImageData(canvas.width, canvas.height);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const noise = Math.random() * 255;
        data[i] = noise;     // Red
        data[i + 1] = noise; // Green
        data[i + 2] = noise; // Blue
        data[i + 3] = intensity * 255; // Alpha
      }

      ctx.putImageData(imageData, 0, 0);
    };

    const animate = () => {
      createNoise();
      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [intensity]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 mix-blend-overlay"
      style={{ opacity: intensity }}
    />
  );
};

// Binary Rain Effect (Alternative to Matrix)
export const BinaryRain = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const binary = "01";
    const binaryArray = binary.split("");
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];

    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#000';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = binaryArray[Math.floor(Math.random() * binaryArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 opacity-15"
    />
  );
};

// Simple KP Loading Animation with White Background
export const SystemLoading = ({ onComplete, messages = [] }) => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          setIsComplete(true);
          setTimeout(() => {
            if (onComplete) onComplete();
          }, 500);
          return 100;
        }
        return newProgress;
      });
    }, 30);

    return () => clearInterval(progressInterval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* KP Logo/Text */}
        <div className="mb-8">
          <h1 className="text-6xl font-bold text-black mb-2 animate-pulse">
            KP
          </h1>
          <p className="text-gray-600 text-sm">Loading Portfolio...</p>
        </div>
        
        {/* Progress Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
            <div 
              className="bg-black h-1.5 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="text-xs text-gray-500 mt-2">
            {progress}%
          </div>
        </div>
      </div>
    </div>
  );
};