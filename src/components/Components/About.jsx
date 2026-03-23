import React, { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Code2,
  Lightbulb,
  Users,
  Award,
  Coffee,
  GitBranch,
  Zap,
  Heart,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react";
import { GlitchText, RGBSplitText, ChromaticAberration } from "../animations/HackerAnimations";

export default function AboutSection() {
  const [typedText, setTypedText] = useState("");
  const [currentAboutIndex, setCurrentAboutIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const sectionRef = useRef(null);

  const aboutCommands = [
    "root@kpdev:~$ cat /dev/about/profile.txt",
    "> Loading developer profile...",
    "root@kpdev:~$ grep -i 'passion' /var/log/career.log",
    "> Found: Full-stack development enthusiast",
    "root@kpdev:~$ ./get_stats.sh --experience",
    "> 4+ years | 50+ projects | 25+ clients",
  ];

  const stats = [
    { icon: Code2, label: "Years Experience", value: 4, suffix: "+" },
    { icon: GitBranch, label: "Projects Completed", value: 50, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 25, suffix: "+" },
  ];

  const interests = [
    { icon: Coffee, label: "Coffee Enthusiast" },
    { icon: Lightbulb, label: "Problem Solver" },
    { icon: Award, label: "Continuous Learner" },
    { icon: Heart, label: "Open Source Contributor" },
  ];

  // Terminal typing animation
  useEffect(() => {
    if (currentAboutIndex < aboutCommands.length) {
      const currentCommand = aboutCommands[currentAboutIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentCommand.length) {
          setTypedText(currentCommand.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setTerminalLines(prev => [...prev, currentCommand]);
            setTypedText("");
            setCurrentAboutIndex(prev => prev + 1);
          }, 1000);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentAboutIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <section
        id="about"
        className="py-20 px-4 bg-white relative overflow-hidden"
      >
        {/* Technical grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative">
          {/* Terminal Header */}
          <div className="text-center mb-16">
            <div className="bg-white border-2 border-black rounded-lg p-6 mb-8 shadow-lg shadow-gray-500/20 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-black text-sm ml-4">terminal@kpdev-about</span>
              </div>
              
              <div className="text-left space-y-2 min-h-[120px]">
                {terminalLines.map((line, index) => (
                  <div key={index} className="text-black">
                    {line}
                  </div>
                ))}
                {isTyping && (
                  <div className="text-black">
                    {typedText}
                    {showCursor && <span className="bg-black text-white">█</span>}
                  </div>
                )}
              </div>
            </div>

            <h2 className="text-4xl font-bold text-black mb-6">
              <GlitchText intensity="medium">
                <RGBSplitText intensity="low" trigger="hover">
                  DEVELOPER.PROFILE
                </RGBSplitText>
              </GlitchText>
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              <span className="text-gray-500">//</span> Analyzing developer instance and system capabilities...
            </p>
          </div>


          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Left Column - Profile & Stats */}
            <div>
              {/* Profile Display */}
              <div className="relative mb-8">
                <div className="w-80 h-80 bg-white border-2 border-black rounded-2xl mx-auto shadow-2xl flex items-center justify-center text-8xl relative overflow-hidden group hover:bg-black hover:text-white transition-all duration-300">
                  <span className="relative z-10 filter drop-shadow-lg">
                    👨‍💻
                  </span>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-black border-2 border-black rounded-full p-4 shadow-xl">
                  <Zap className="h-8 w-8 text-white" />
                </div>
              </div>

              {/* Command Line Stats */}
              <div className="space-y-4">
                {stats.map(({ icon: Icon, label, value, suffix }, index) => (
                  <div
                    key={label}
                    className="p-4 bg-white border-2 border-black rounded-lg hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-6 w-6 text-black" />
                      <div className="flex-1">
                        <div className="text-lg font-bold text-black">
                          {value}{suffix}
                        </div>
                        <div className="text-sm text-gray-600">
                          {label}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Text Content */}
            <div>
              <h3 className="text-3xl font-bold mb-6 text-black text-center">
                SYSTEM_ADMINISTRATOR.EXE
              </h3>

              <div className="space-y-6 text-gray-700 leading-relaxed text-center">
                <p className="text-lg">
                  <span className="text-gray-500">//</span> Full-stack developer with{" "}
                  <strong className="text-black">
                    4+ years of runtime experience
                  </strong>{" "}
                  building scalable web applications and digital solutions.
                </p>

                <p className="text-lg">
                  <span className="text-gray-500">//</span> Specialized in creating{" "}
                  <strong className="text-black">
                    intuitive user interfaces
                  </strong>{" "}
                  and writing clean, maintainable code. Currently executing open-source contributions and exploring emerging technologies.
                </p>
              </div>

              {/* Interests */}
              <div className="mt-8 mb-8">
                <h4 className="text-lg font-semibold mb-4 text-black">
                  ACTIVE_PROCESSES.LOG
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {interests.map(({ icon: Icon, label }) => (
                    <div
                      key={label}
                      className="flex items-center gap-3 p-3 bg-white border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all duration-300 cursor-pointer"
                    >
                      <Icon className="h-4 w-4" />
                      <span className="text-sm font-medium">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-black">
                  INSTALLED_PACKAGES.LIST
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Prisma ORM",
                    "Express.js",
                    "MongoDB",
                    "TypeScript",
                    "Next.js",
                    "Tailwind CSS",
                    "Shadcn UI",
                    "GitHub",
                    "Vercel",
                    "Netlify",
                    "HTML",
                    "CSS",
                  ].map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="bg-gray-200 border border-gray-300 text-gray-700 hover:bg-black hover:text-white hover:border-black transition-all duration-300 cursor-pointer text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Terminal */}
          <div className="flex justify-center mt-16">
            <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg shadow-gray-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span className="text-black text-sm">
                  root@kpdev:~$ echo "Always learning, always growing"
                </span>
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* CSS Animations */}
        <style jsx>{`
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
        `}</style>
      </section>
    </div>
  );
}
