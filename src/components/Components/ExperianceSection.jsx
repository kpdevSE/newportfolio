import React, { useState, useEffect, useRef } from "react";
import {
  MapPin,
  Calendar,
  Building2,
  Briefcase,
  TrendingUp,
  Users,
  Code,
  Award,
  ChevronRight,
  Code2,
  ExternalLink,
  Clock,
  Star,
  ArrowUpRight,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
  X,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { GlitchText, ChromaticAberration, RGBSplitText } from "../animations/HackerAnimations";

export default function ExperienceSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [currentExpIndex, setCurrentExpIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const sectionRef = useRef(null);

  const hackerQuotes = [
    "root@kpdev:~$ cd /career/experience/",
    "> Accessing professional timeline...",
    "root@kpdev:~$ grep -r 'achievements' *.log",
    "> Parsing work history data...",
    "root@kpdev:~$ ./load_experience.sh --verbose",
    "> Career progression loaded successfully.",
  ];

  const experiences = [
    {
      id: 1,
      role: "Junior Software Engineer",
      company: "FLiAI",
      period: "Jan 2026 - Present",
      duration: "3 mos",
      location: "Kadawatha, Western Province, Sri Lanka",
      type: "Full-time",
      status: "Current",
      description: "Building core technical skills through hands-on development projects and collaborating with senior engineers on real-world applications.",
      responsibilities: [
        "Building core technical skills through hands-on development projects",
        "Collaborating with senior engineers on real-world applications",
        "Contributing to continuous learning initiatives and team knowledge sharing",
        "Participating in code reviews and following best practices for software development",
        "Working on problem-solving challenges that enhance technical capabilities",
      ],
      tech: [
        "JavaScript",
        "React.js",
        "Node.js",
        "Python",
        "Git",
        "Jira",
        "GraphQL",
        "Next.js",
      ],
      achievements: [
        "Developing foundational technical skills and professional discipline",
        "Contributing to real-world projects that provide long-term value",
        "Building experience that opens doors to growth and leadership opportunities",
      ],
      icon: Building2,
      companyLogo: "🏢",
    },
    {
      id: 2,
      role: "Freelance Fullstack Developer",
      company: "Self-employed",
      period: "2024 - Present",
      duration: "1+ year",
      location: "Remote / Sri Lanka",
      type: "Freelance",
      status: "Active",
      description: "Delivering custom frontend, backend, and fullstack web applications for clients with focus on responsive design and seamless integrations.",
      responsibilities: [
        "Delivering custom frontend, backend, and fullstack web applications for clients",
        "Collaborating directly with clients to gather requirements and iterate quickly",
        "Designing responsive UI/UX and ensuring smooth integrations between services",
        "Deploying, monitoring, and maintaining production-ready solutions",
      ],
      tech: [
        "HTML",
        "CSS",
        "JavaScript",
        "React.js",
        "Next.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "PHP",
        "Git",
        "GitHub",
        "Vercel",
      ],
      achievements: [
        "Built end-to-end applications covering UI, API, and database layers",
        "Delivered multiple production deployments with fast turnaround",
        "Maintained long-term client relationships through reliable delivery",
      ],
      icon: Briefcase,
      companyLogo: "💼",
    },
    {
      id: 3,
      role: "Intern Fullstack Software Engineer",
      company: "Lakion",
      period: "2023 - 2024",
      duration: "1 year",
      location: "Remote (Global)",
      type: "Internship",
      status: "Completed",
      description: "Participated in global IT projects with focus on fullstack development and contributed to innovative software solutions for overseas markets.",
      responsibilities: [
        "Participating in global IT projects with a focus on fullstack development",
        "Collaborating remotely with cross-functional teams",
        "Contributing to innovative software solutions for overseas markets, including New Zealand",
        "Attending virtual onboarding and orientation to integrate with Lakion's workflow and culture",
      ],
      tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
      achievements: [
        "Joined a globally recognized IT solutions provider",
        "Selected for impactful internship projects",
        "Integrated into a remote-first, international development team",
      ],
      icon: Building2,
      companyLogo: "🌐",
    },
    {
      id: 4,
      role: "Full Stack Developer",
      company: "Flexycode",
      period: "2022 - 2023",
      duration: "1 year",
      location: "Remote",
      type: "Internship",
      status: "Completed",
      description: "Built responsive web applications using React and Node.js while collaborating with UX/UI designers to implement pixel-perfect designs.",
      responsibilities: [
        "Built responsive web applications using React and Node.js",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Optimized application performance resulting in 40% faster load times",
        "Developed RESTful APIs and database schemas",
      ],
      tech: ["React", "Express.js", "Node.js", "MongoDB", "Prisma ORM"],
      achievements: [
        "40% faster load times",
        "Pixel-perfect designs",
        "10+ applications built",
      ],
      icon: Code,
      companyLogo: "⚡",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Typing animation effect
  useEffect(() => {
    if (currentExpIndex < hackerQuotes.length) {
      const currentQuote = hackerQuotes[currentExpIndex];
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
            setCurrentExpIndex(prev => prev + 1);
          }, 1000);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentExpIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const openExperienceModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeExperienceModal = () => {
    setSelectedExperience(null);
  };

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <section
        ref={sectionRef}
        id="experience"
        className="py-20 px-4 bg-white relative overflow-hidden"
      >
        {/* Technical grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Hacker Terminal Header */}
          <div
            className={`text-center mb-20 transition-all duration-700 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white border-2 border-black rounded-lg p-6 mb-8 shadow-lg shadow-gray-500/20 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-black text-sm ml-4">terminal@kpdev-experience</span>
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
                  CAREER MATRIX
                </ChromaticAberration>
              </GlitchText>
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              <span className="text-gray-500">//</span> Tracing professional evolution through code, innovation, and impact...
            </p>
          </div>

          {/* Career Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "YEARS_ACTIVE", value: "4+", icon: <Cpu className="h-6 w-6" /> },
              { label: "COMPANIES", value: "04", icon: <HardDrive className="h-6 w-6" /> },
              { label: "ROLES", value: "FULL_STACK", icon: <Terminal className="h-6 w-6" /> },
              { label: "STATUS", value: "EMPLOYED", icon: <Wifi className="h-6 w-6" /> },
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

          {/* Experience Cards Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {experiences.map((exp, index) => {
              const Icon = exp.icon;
              return (
                <Card
                  key={exp.id}
                  className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer backdrop-blur-sm ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  onMouseEnter={() => setActiveCard(index)}
                  onMouseLeave={() => setActiveCard(null)}
                  onClick={() => openExperienceModal(exp)}
                  style={{
                    animationDelay: `${index * 150}ms`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                >
                  {/* Card Header Accent */}
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-black"></div>
                  
                  <CardHeader className="pb-4">
                    {/* Company Logo and Status */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl p-3 rounded-xl border-2 border-black transition-all duration-300 group-hover:scale-105 bg-gray-100 group-hover:bg-black group-hover:text-white">
                        {exp.companyLogo}
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                          <span className="text-xs text-black font-mono">
                            {exp.status === "Current" || exp.status === "Active" ? "ACTIVE" : "COMPLETED"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Command Line */}
                    <div className="mb-4 p-3 bg-gray-100 border border-gray-300 rounded font-mono text-sm">
                      <span className="text-gray-700">$</span> <span className="text-black">./career --role="{exp.role.toLowerCase().replace(/\s+/g, '-')}"</span>
                    </div>

                    {/* Role and Company */}
                    <CardTitle className="text-xl font-semibold font-mono text-black mb-2 transition-colors group-hover:text-gray-700 leading-tight">
                      {exp.role}
                      <ArrowUpRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-black" />
                    </CardTitle>
                    <CardDescription className="text-lg font-semibold font-mono text-gray-700 mb-3">
                      {exp.company}
                    </CardDescription>

                    {/* Meta Information */}
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600 font-mono">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4 text-black" />
                        <span className="font-medium">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4 text-black" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6 flex-1 flex flex-col">
                    {/* Description */}
                    <p className="text-gray-700 leading-relaxed font-mono text-sm">
                      <span className="text-gray-500">//</span> {exp.description}
                    </p>

                    {/* Tech Stack Preview */}
                    <div>
                      <h4 className="font-semibold font-mono text-black mb-3 flex items-center gap-2 text-sm">
                        <Code className="h-4 w-4 text-black" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.tech.slice(0, 4).map((tech, techIndex) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300 hover:border-black transition-colors font-mono"
                          >
                            {tech}
                          </Badge>
                        ))}
                        {exp.tech.length > 4 && (
                          <Badge
                            variant="outline"
                            className="text-xs bg-gray-200 border-gray-300 text-gray-700 font-mono"
                          >
                            +{exp.tech.length - 4}
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Key Achievement Preview */}
                    <div className="mt-auto">
                      <h4 className="font-semibold font-mono text-black mb-2 flex items-center gap-2 text-sm">
                        <Star className="h-4 w-4 text-black" />
                        Key Achievement
                      </h4>
                      <div className="flex items-start gap-2 text-sm font-mono">
                        <div className="w-2 h-2 rounded-full bg-black mt-1.5 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">
                          {exp.achievements[0]}
                        </span>
                      </div>
                    </div>

                    {/* Click hint */}
                    <div className="mt-auto pt-4 border-t-2 border-black flex items-center justify-between text-sm text-black">
                      <span className="font-mono font-medium">
                        &gt; access.details()
                      </span>
                      <div className="w-9 h-9 rounded-lg flex items-center justify-center border-2 border-black bg-white text-black transition-all group-hover:scale-105 group-hover:bg-black group-hover:text-white">
                        <ArrowUpRight className="h-4 w-4" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Experience Summary */}
          <div
            className={`transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Card className="bg-white border-2 border-black rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-0.5 bg-black"></div>
              <CardContent className="p-8">
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold font-mono text-black mb-2">
                    CAREER_SUMMARY.EXE
                  </h3>
                  <p className="text-gray-700 font-mono">
                    <span className="text-gray-500">//</span> Compiled metrics from professional execution logs
                  </p>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  {[
                    { label: "Years Experience", value: "4+", icon: TrendingUp },
                    { label: "Companies Worked", value: experiences.length, icon: Building2 },
                    { label: "Technologies Used", value: "15+", icon: Code },
                    { label: "Projects Delivered", value: "25+", icon: Award },
                  ].map(({ label, value, icon: Icon }, index) => (
                    <div key={label} className="p-4">
                      <Icon className="h-6 w-6 mx-auto mb-3 text-black" />
                      <div className="text-2xl font-bold font-mono text-black mb-1">
                        {value}
                      </div>
                      <div className="text-sm text-gray-600 font-mono">
                        {label}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Terminal */}
          <div className="flex justify-center mt-16">
            <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg shadow-gray-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span className="text-black font-mono text-sm">
                  root@kpdev:~$ tail -f /var/log/career.log | grep "success"
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

      {/* Experience Detail Modal */}
      {selectedExperience && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={closeExperienceModal}
          ></div>

          {/* Modal */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-white border border-gray-300 rounded-2xl shadow-xl animate-in zoom-in-95 duration-300 flex flex-col overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-300 bg-gray-100 flex-shrink-0">
                <div className="flex items-center gap-4 flex-1 min-w-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl border border-gray-300 bg-gray-200 flex-shrink-0">
                    {selectedExperience.companyLogo}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-mono font-medium mb-1">
                      &gt; experience.details()
                    </p>
                    <h1 className="text-xl md:text-2xl font-semibold font-mono text-black truncate">
                      {selectedExperience.role}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-3 flex-shrink-0">
                  <Badge
                    className={`${
                      selectedExperience.status === "Current" || selectedExperience.status === "Active"
                        ? "bg-black hover:bg-gray-800"
                        : "bg-gray-600 hover:bg-gray-700"
                    } text-white border-0 text-xs`}
                  >
                    {selectedExperience.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeExperienceModal}
                    className="rounded-lg text-gray-500 hover:text-black hover:bg-gray-200 h-10 w-10"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8">
                  {/* Main Content */}
                  <div className="space-y-6">
                    {/* Company and Role Info */}
                    <div>
                      <h2 className="text-2xl font-bold font-mono text-black mb-2">
                        {selectedExperience.company}
                      </h2>
                      <p className="text-gray-700 leading-relaxed font-mono">
                        <span className="text-gray-500">//</span> {selectedExperience.description}
                      </p>
                    </div>

                    {/* Responsibilities */}
                    <div>
                      <h3 className="text-lg font-semibold font-mono text-black mb-4 flex items-center gap-2">
                        <Briefcase className="h-5 w-5 text-black" />
                        Key Responsibilities
                      </h3>
                      <ul className="space-y-3">
                        {selectedExperience.responsibilities.map((resp, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-700 font-mono"
                          >
                            <ChevronRight className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                            <span className="text-sm leading-relaxed">{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h3 className="text-lg font-semibold font-mono text-black mb-4 flex items-center gap-2">
                        <Award className="h-5 w-5 text-black" />
                        Key Achievements
                      </h3>
                      <div className="space-y-3">
                        {selectedExperience.achievements.map((achievement, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 text-gray-700 font-mono"
                          >
                            <div className="w-2 h-2 rounded-full bg-black mt-2 flex-shrink-0"></div>
                            <span className="text-sm leading-relaxed font-medium">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Sidebar */}
                  <div className="space-y-6">
                    {/* Experience Details */}
                    <div className="rounded-lg border border-gray-300 bg-gray-200 p-5">
                      <h4 className="text-sm font-semibold font-mono text-black mb-4">
                        Experience Details
                      </h4>
                      <div className="space-y-3 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-mono">Period</span>
                          <span className="font-semibold font-mono text-black">
                            {selectedExperience.period}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-mono">Duration</span>
                          <span className="font-semibold font-mono text-black">
                            {selectedExperience.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-mono">Type</span>
                          <span className="font-semibold font-mono text-black">
                            {selectedExperience.type}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600 font-mono">Location</span>
                          <span className="font-semibold font-mono text-black text-right">
                            {selectedExperience.location}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="rounded-lg border border-gray-300 bg-gray-200 p-5">
                      <h4 className="text-sm font-semibold font-mono text-black mb-4 flex items-center gap-2">
                        <Code className="h-4 w-4 text-black" />
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedExperience.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-gray-100 border-gray-300 text-gray-700 font-mono"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
