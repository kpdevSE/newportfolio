import React, { useState, useEffect } from "react";
import {
  Download,
  ChevronRight,
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code2,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlitchText, ChromaticAberration, RGBSplitText } from "../animations/HackerAnimations";

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  const [terminalText, setTerminalText] = useState("");
  const [currentTerminalIndex, setCurrentTerminalIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  const roles = [
    "Full Stack Web Developer",
    "MERN Stack Specialist", 
    "UI/UX Enthusiast",
    "Next.js Developer",
  ];

  const terminalCommands = [
    "root@kpdev:~$ whoami",
    "> Kanishka Pasindu - Full Stack Developer",
    "root@kpdev:~$ cat /etc/skills",
    "> Loading technical expertise...",
    "root@kpdev:~$ systemctl status developer.service",
    "> ● developer.service - ACTIVE (running)",
  ];

  useEffect(() => {
    window.scrollTo(0, 0);

    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    setIsVisible(true);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (currentTerminalIndex < terminalCommands.length) {
      const currentCommand = terminalCommands[currentTerminalIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentCommand.length) {
          setTerminalText(currentCommand.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setTerminalLines(prev => [...prev, currentCommand]);
            setTerminalText("");
            setCurrentTerminalIndex(prev => prev + 1);
          }, 1000);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    }
  }, [currentTerminalIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeout;

    if (!isDeleting && displayedText.length < currentRole.length) {
      // Typing
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        setTypingSpeed(100);
      }, typingSpeed);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      // Pause at end of typing
      timeout = setTimeout(() => {
        setIsDeleting(true);
        setTypingSpeed(50);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      // Deleting
      timeout = setTimeout(() => {
        setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        setTypingSpeed(50);
      }, typingSpeed);
    } else if (isDeleting && displayedText.length === 0) {
      // Move to next role
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      setTypingSpeed(100);
    }

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentRoleIndex, roles]);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Kanishka Pasindu Mudithananda-Software Engineer.pdf";
    link.download = "Kanishka Pasindu Mudithananda-Software Engineer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono relative overflow-hidden">
      {/* Technical grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
      </div>

      <section className="relative pt-24 sm:pt-32 pb-20 sm:pb-32 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Terminal Header */}
          <div className="mb-12">
            <div className="bg-white border-2 border-black rounded-lg p-6 mb-8 shadow-lg shadow-gray-500/20 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-black text-sm ml-4">terminal@kpdev-portfolio</span>
              </div>
              
              <div className="text-left space-y-2 min-h-[120px]">
                {terminalLines.map((line, index) => (
                  <div key={index} className="text-black">
                    {line}
                  </div>
                ))}
                {currentTerminalIndex < terminalCommands.length && (
                  <div className="text-black">
                    {terminalText}
                    {showCursor && <span className="bg-black text-white">█</span>}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Main content */}
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >


            {/* Name with enhanced glitch effect */}
            <div className="mb-8 sm:mb-10 text-center">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight text-black">
                <GlitchText intensity="high" className="inline-block">
                  <ChromaticAberration>
                    KANISHKA PASINDU
                  </ChromaticAberration>
                </GlitchText>
              </h1>
              <div className="w-32 h-0.5 bg-black mx-auto mb-6"></div>
            </div>

            {/* Typewriter role animation */}
            <div className="min-h-[4.5rem] sm:min-h-[5rem] flex items-center justify-center mb-6 sm:mb-8 px-2">
              <div className="flex flex-wrap sm:flex-nowrap items-center justify-center gap-2 sm:gap-3 text-center">
                <div className="flex items-center justify-center gap-2">
                  <Terminal className="h-5 w-5 sm:h-6 sm:w-6 text-black animate-fade-in-up delay-500" />
                  <span className="text-gray-500 text-base sm:text-lg font-mono">
                    $
                  </span>
                </div>
                <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-700 font-mono font-medium animate-fade-in-up delay-500 max-w-sm sm:max-w-none">
                  <RGBSplitText intensity="medium" trigger="hover">
                    <span className="text-black">{displayedText}</span>
                  </RGBSplitText>
                  <span className="inline-block w-0.5 h-6 sm:h-8 bg-black ml-1 animate-blink align-middle animate-cursor-glow"></span>
                </h2>
              </div>
            </div>

            {/* Description with code-like styling */}
            <div
              className={`max-w-2xl mx-auto mb-10 sm:mb-12 transition-all duration-700 delay-700 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-mono text-center">
                <span className="text-gray-500">//</span>{" "}
                <span className="text-gray-700">
                  Executing innovative solutions through clean code architecture and modern development frameworks
                </span>
              </p>
            </div>

            {/* Action buttons with technical styling */}
            <div
              className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 sm:mb-16 transition-all duration-700 delay-1000 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white group transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/50 rounded-lg font-semibold px-8 border-2 border-black font-mono"
                onClick={downloadResume}
              >
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                ./download_resume.sh
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-black hover:border-black text-black hover:text-white bg-white hover:bg-black backdrop-blur-sm rounded-lg font-semibold px-8 font-mono"
                onClick={() => {
                  const element = document.getElementById("projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                ./view_projects.sh
                <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>

            {/* Social links with technical styling */}
            <div
              className={`flex justify-center gap-4 sm:gap-6 mb-12 sm:mb-16 transition-all duration-700 delay-1200 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              {[
                {
                  icon: Github,
                  href: "https://github.com/kpdevSE",
                  label: "GitHub",
                },
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/kanishka-pasindu-b976a8252/",
                  label: "LinkedIn",
                },
                {
                  icon: Mail,
                  href: "mailto:kanishkapasindu6@gmail.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }, index) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-lg bg-white border-2 border-black hover:bg-black hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-gray-500/20 backdrop-blur-sm group animate-fade-in-up"
                  style={{ animationDelay: `${1400 + index * 100}ms` }}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-all" />
                </a>
              ))}
            </div>

            {/* Scroll indicator with technical styling */}
            <div
              className={`transition-all duration-700 delay-1500 transform ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-5 opacity-0"
              }`}
            >
              <div className="flex flex-col items-center text-gray-500">
                <span className="text-sm mb-2 font-mono font-medium">
                  &gt; scroll.execute()
                </span>
                <ArrowDown className="h-5 w-5 animate-bounce text-black" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
                .glitch-text {
                  animation: glitch 2s infinite;
                }
                
                @keyframes glitch {
                  0%, 100% { transform: translate(0); }
                  20% { transform: translate(-2px, 2px); }
                  40% { transform: translate(-2px, -2px); }
                  60% { transform: translate(2px, 2px); }
                  80% { transform: translate(2px, -2px); }
                }

                @keyframes fade-in-up {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                @keyframes scale-x {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }

                @keyframes blink {
                    0%, 50% {
                        opacity: 1;
                    }
                    51%, 100% {
                        opacity: 0;
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animate-scale-x {
                    animation: scale-x 0.8s ease-out forwards;
                }

                .animate-blink {
                    animation: blink 1s infinite;
                }

                .delay-300 {
                    animation-delay: 300ms;
                }

                .delay-500 {
                    animation-delay: 500ms;
                }

                .delay-700 {
                    animation-delay: 700ms;
                }

                .delay-1000 {
                    animation-delay: 1000ms;
                }

                .delay-1200 {
                    animation-delay: 1200ms;
                }

                .delay-1400 {
                    animation-delay: 1400ms;
                }

                .delay-1500 {
                    animation-delay: 1500ms;
                }

                .delay-2000 {
                    animation-delay: 2000ms;
                }
            `}</style>
    </div>
  );
}
