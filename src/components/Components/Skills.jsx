import React, { useState, useEffect } from "react";
import {
  Code,
  Server,
  Database,
  Wrench,
  Sparkles,
  Zap,
  Code2,
  ChevronRight,
  X,
  Star,
  Award,
  TrendingUp,
  Users,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GlitchText, RGBSplitText, ChromaticAberration } from "../animations/HackerAnimations";

export default function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentSkillIndex, setCurrentSkillIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  const hackerQuotes = [
    "root@kpdev:~$ whoami",
    "> Full Stack Developer",
    "root@kpdev:~$ cat skills.json",
    "> Loading expertise...",
    "root@kpdev:~$ sudo access --skills",
    "> Access granted. Welcome to the matrix.",
  ];

  const skillCategories = [
    {
      id: 1,
      title: "Frontend Arsenal",
      icon: <Code className="h-6 w-6" />,
      description: "Client-side weaponry for digital warfare",
      command: "./frontend --execute",
      skills: [
        { name: "React.js", level: "EXPERT", years: "3+", status: "ACTIVE" },
        { name: "Next.js", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "JavaScript", level: "EXPERT", years: "3+", status: "ACTIVE" },
        { name: "TypeScript", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "HTML5", level: "EXPERT", years: "4+", status: "ACTIVE" },
        { name: "CSS3", level: "EXPERT", years: "4+", status: "ACTIVE" },
        { name: "Tailwind", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Responsive Design", level: "EXPERT", years: "3+", status: "ACTIVE" },
      ],
    },
    {
      id: 2,
      title: "Backend Matrix",
      icon: <Server className="h-6 w-6" />,
      description: "Server-side neural networks and data streams",
      command: "./backend --initialize",
      skills: [
        { name: "Node.js", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Express.js", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "PHP", level: "INTERMEDIATE", years: "1+", status: "ACTIVE" },
        { name: "Java", level: "INTERMEDIATE", years: "1+", status: "ACTIVE" },
        { name: "RESTful APIs", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Authentication", level: "ADVANCED", years: "2+", status: "ACTIVE" },
      ],
    },
    {
      id: 3,
      title: "Data Fortress",
      icon: <Database className="h-6 w-6" />,
      description: "Information storage and retrieval systems",
      command: "./database --connect",
      skills: [
        { name: "MongoDB", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "MySQL", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Firebase", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Supabase", level: "INTERMEDIATE", years: "1+", status: "ACTIVE" },
        { name: "Database Design", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "CRUD Operations", level: "EXPERT", years: "3+", status: "ACTIVE" },
      ],
    },
    {
      id: 4,
      title: "Version Control Hub",
      icon: <Wrench className="h-6 w-6" />,
      description: "Code versioning and collaboration protocols",
      command: "./git --status",
      skills: [
        { name: "Git", level: "EXPERT", years: "3+", status: "ACTIVE" },
        { name: "GitHub", level: "EXPERT", years: "3+", status: "ACTIVE" },
        { name: "Branching", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Merging", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Pull Requests", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Collaboration", level: "ADVANCED", years: "2+", status: "ACTIVE" },
      ],
    },
    {
      id: 5,
      title: "Testing Protocol",
      icon: <Sparkles className="h-6 w-6" />,
      description: "Quality assurance and bug hunting systems",
      command: "./test --run-all",
      skills: [
        { name: "Postman", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "API Testing", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Debugging", level: "ADVANCED", years: "3+", status: "ACTIVE" },
      ],
    },
    {
      id: 6,
      title: "Deploy Network",
      icon: <TrendingUp className="h-6 w-6" />,
      description: "Cloud deployment and scaling infrastructure",
      command: "./deploy --production",
      skills: [
        { name: "Vercel", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Netlify", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "GitHub Pages", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "Cloud Deploy", level: "ADVANCED", years: "2+", status: "ACTIVE" },
        { name: "CI/CD", level: "INTERMEDIATE", years: "1+", status: "ACTIVE" },
        { name: "Serverless", level: "INTERMEDIATE", years: "1+", status: "ACTIVE" },
      ],
    },
  ];

  // Typing animation effect
  useEffect(() => {
    if (currentSkillIndex < hackerQuotes.length) {
      const currentQuote = hackerQuotes[currentSkillIndex];
      let charIndex = 0;
      
      const typeInterval = setInterval(() => {
        if (charIndex < currentQuote.length) {
          setTypedText(currentQuote.slice(0, charIndex + 1));
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => {
            setTerminalLines(prev => [...prev, currentQuote]);
            setTypedText("");
            setCurrentSkillIndex(prev => prev + 1);
          }, 1000);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentSkillIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const getLevelColor = (level) => {
    switch (level) {
      case "EXPERT": return "text-white bg-black border-black";
      case "ADVANCED": return "text-white bg-gray-800 border-gray-800";
      case "INTERMEDIATE": return "text-white bg-gray-600 border-gray-600";
      default: return "text-black bg-gray-300 border-gray-300";
    }
  };

  const openModal = (category) => {
    setSelectedCategory(category);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCategory(null);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <section id="skills" className="py-24 px-4 relative overflow-hidden">
        {/* Technical grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hacker Terminal Header */}
          <div className="text-center mb-20">
            <div className="bg-white border-2 border-black rounded-lg p-6 mb-8 shadow-lg shadow-gray-500/20 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-black text-sm ml-4">terminal@kpdev-skills</span>
              </div>
              
              <div className="text-left space-y-2">
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

            <h2 className="text-6xl font-bold text-black mb-6">
              <GlitchText intensity="medium">
                <ChromaticAberration>
                  SKILL MATRIX
                </ChromaticAberration>
              </GlitchText>
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              <span className="text-gray-500">//</span> Accessing neural pathways and technical expertise database...
            </p>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "ACTIVE_SKILLS", value: "35+", icon: <Cpu className="h-6 w-6" /> },
              { label: "CATEGORIES", value: "06", icon: <HardDrive className="h-6 w-6" /> },
              { label: "PROJECTS", value: "70+", icon: <Terminal className="h-6 w-6" /> },
              { label: "STATUS", value: "ONLINE", icon: <Wifi className="h-6 w-6" /> },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white border-2 border-black rounded-lg p-6 text-center hover:shadow-lg hover:shadow-gray-500/20 transition-all duration-300 group"
              >
                <div className="flex justify-center mb-3 text-black group-hover:text-gray-600 transition-colors">
                  {stat.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-2">{stat.value}</h3>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.id}
                className={`group bg-white border-2 border-black rounded-lg p-6 hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-105`}
                onClick={() => openModal(category)}
                style={{
                  animationDelay: `${index * 200}ms`,
                }}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 bg-gray-100 border-2 border-black rounded-lg text-black group-hover:bg-black group-hover:text-white transition-all duration-300">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-sm text-gray-600">{category.skills.length} modules</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-black group-hover:translate-x-2 transition-all duration-300" />
                </div>

                {/* Command */}
                <div className="mb-4 p-3 bg-gray-100 border border-gray-300 rounded font-mono text-sm">
                  <span className="text-gray-700">$</span> <span className="text-black">{category.command}</span>
                </div>

                {/* Description */}
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {category.description}
                </p>

                {/* Status Indicator */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                    <span className="text-black text-sm">OPERATIONAL</span>
                  </div>
                  <span className="text-black font-bold">ACCESS →</span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Terminal */}
          <div className="flex justify-center mt-16">
            <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg shadow-gray-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span className="text-black font-mono text-sm">
                  root@kpdev:~$ while true; do learn(); code(); deploy(); done
                </span>
                <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Detail Modal */}
        {isModalOpen && selectedCategory && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white border-2 border-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl shadow-gray-500/20">
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b-2 border-black p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gray-100 border-2 border-black rounded-lg text-black">
                    {selectedCategory.icon}
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-black">{selectedCategory.title}</h2>
                    <p className="text-gray-600">{selectedCategory.description}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-black"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Terminal Command */}
                <div className="mb-6 p-4 bg-gray-100 border border-gray-300 rounded font-mono">
                  <div className="text-gray-700 mb-2">$ {selectedCategory.command}</div>
                  <div className="text-black">Loading skill modules...</div>
                  <div className="text-black">Status: ACTIVE | Security: AUTHENTICATED</div>
                </div>

                {/* Skills Matrix */}
                <div>
                  <h3 className="text-xl font-bold text-black mb-6 flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-black" />
                    SKILL_MODULES.EXE
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedCategory.skills.map((skill, index) => (
                      <div
                        key={skill.name}
                        className="bg-gray-50 border border-gray-300 rounded-lg p-4 hover:border-black transition-all duration-300 group"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-bold text-black group-hover:text-gray-700 transition-colors">
                            {skill.name}
                          </h4>
                          <div className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-black rounded-full"></div>
                            <span className="text-xs text-black">{skill.status}</span>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <Badge className={`${getLevelColor(skill.level)} text-xs border`}>
                            {skill.level}
                          </Badge>
                          <span className="text-sm text-gray-600 font-mono">{skill.years} EXP</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* System Info */}
                <div className="mt-8 p-6 bg-gray-50 border border-gray-300 rounded-lg">
                  <div className="flex items-center gap-2 mb-3">
                    <Cpu className="h-5 w-5 text-black" />
                    <h3 className="text-lg font-bold text-black">SYSTEM_INFO</h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-mono">
                    <div>
                      <span className="text-gray-600">MODULES:</span>
                      <div className="text-black">{selectedCategory.skills.length}</div>
                    </div>
                    <div>
                      <span className="text-gray-600">STATUS:</span>
                      <div className="text-black">ONLINE</div>
                    </div>
                    <div>
                      <span className="text-gray-600">UPTIME:</span>
                      <div className="text-black">3+ YEARS</div>
                    </div>
                    <div>
                      <span className="text-gray-600">ACCESS:</span>
                      <div className="text-black">GRANTED</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

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
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          .animate-fade-in-up {
            animation: fadeInUp 0.6s ease-out forwards;
          }
        `}</style>
      </section>
    </div>
  );
}
