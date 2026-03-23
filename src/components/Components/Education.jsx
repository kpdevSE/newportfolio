import React, { useState, useEffect, useRef } from "react";
import {
  GraduationCap,
  Award,
  Calendar,
  BookOpen,
  Trophy,
  Star,
  CheckCircle,
  MapPin,
  Clock,
  Code2,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlitchText, RGBSplitText, ChromaticAberration } from "../animations/HackerAnimations";

export default function Education() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const [certProgress, setCertProgress] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [currentEduIndex, setCurrentEduIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);
  const sectionRef = useRef(null);

  const educationCommands = [
    "root@kpdev:~$ cat /etc/education/credentials.txt",
    "> Loading academic records...",
    "root@kpdev:~$ ls -la /var/certificates/",
    "> Found: 3 verified certifications",
    "root@kpdev:~$ ./validate_degrees.sh",
    "> All credentials verified and active",
  ];

  const education = [
    {
      degree: "Higher Diploma in Computing and Software Engineering",
      institution: "Cardiff Metropolitan University",
      year: "2022 - 2024",
      location: "Cardiff, UK",
      description:
        "Completed a comprehensive program covering web technologies, databases, and modern software engineering practices.",
      highlights: [
        "Skills gained: HTML5, CSS, Tailwind CSS, React.js, JavaScript, JavaScript Frameworks and Libraries, MySQL, PHP, PhpMyAdmin, Next.js, MongoDB, Prisma ORM",
        "Strong foundation in full-stack development and database management",
      ],
      courses: [
        "Web Development",
        "Database Systems",
        "Software Engineering",
        "JavaScript Frameworks",
        "Backend Development with PHP and Node.js",
      ],
      icon: GraduationCap,
      gradient: "from-indigo-500 to-purple-600",
      duration: "2 years",
    },
    {
      degree: "BSc (Hons) Software Engineering (In Progress)",
      institution: "Cardiff Metropolitan University",
      year: "2024 - Present",
      location: "Cardiff, UK",
      description:
        "Currently pursuing an advanced software engineering degree with focus on modern development methodologies and tools.",
      highlights: [
        "Building on skills in React.js, Next.js, JavaScript, and backend technologies",
        "Engaged in practical projects and collaborative software development",
      ],
      courses: [
        "Advanced Software Engineering",
        "Cloud Computing",
        "Data Structures and Algorithms",
        "Project Management",
      ],
      icon: GraduationCap,
      gradient: "from-indigo-500 to-purple-600",
      duration: "Ongoing",
    },
  ];

  const certifications = [
    {
      name: "Higher Diploma in Computing and Software Engineering",
      issuer: "Cardiff Metropolitan University",
      year: "2024",
      level: "Higher Diploma",
      color: "bg-indigo-600",
    },
    {
      name: "Web Design for Beginners",
      issuer: "University of Moratuwa",
      year: "2020",
      level: "Certified",
      color: "bg-yellow-400",
    },
    {
      name: "Introduction to Programming Using HTML and CSS",
      issuer: "HackerRank",
      year: "2020",
      level: "Certified",
      color: "bg-blue-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Animate certification progress
          setTimeout(() => {
            let progress = 0;
            const interval = setInterval(() => {
              progress += 2;
              setCertProgress(progress);
              if (progress >= 100) {
                clearInterval(interval);
              }
            }, 20);
          }, 800);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (currentEduIndex < educationCommands.length) {
      const currentCommand = educationCommands[currentEduIndex];
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
            setCurrentEduIndex(prev => prev + 1);
          }, 1000);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentEduIndex]);

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
        ref={sectionRef}
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
          <div
            className={`text-center mb-16 transition-all duration-700 transform ${
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
                <span className="text-black text-sm ml-4">terminal@kpdev-education</span>
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

            <h2 className="text-6xl font-bold text-black mb-6">
              <GlitchText intensity="medium">
                <RGBSplitText intensity="medium" trigger="hover">
                  ACADEMIC.REGISTRY
                </RGBSplitText>
              </GlitchText>
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              <span className="text-gray-500">//</span> Compiling educational achievements and professional certifications...
            </p>
          </div>

          {/* Education Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {[
              { label: "DEGREES", value: "02", icon: <Cpu className="h-6 w-6" /> },
              { label: "CERTIFICATIONS", value: "03", icon: <HardDrive className="h-6 w-6" /> },
              { label: "INSTITUTIONS", value: "02", icon: <Terminal className="h-6 w-6" /> },
              { label: "STATUS", value: "ACTIVE", icon: <Wifi className="h-6 w-6" /> },
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

          {/* Education Cards */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className={`transition-all duration-700 delay-${
                    index * 200
                  } transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  onMouseEnter={() => setActiveCard(`edu-${index}`)}
                  onMouseLeave={() => setActiveCard(null)}
                >
                  <Card
                    className={`h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:shadow-gray-500/20 ${
                      activeCard === `edu-${index}`
                        ? "shadow-2xl scale-105 shadow-gray-500/20"
                        : "shadow-lg"
                    } bg-white backdrop-blur-sm border-2 border-black overflow-hidden group`}
                  >
                    {/* Technical header accent */}
                    <div className="h-0.5 bg-black"></div>

                    <CardHeader className="pb-4">
                      {/* Command Line */}
                      <div className="mb-4 p-3 bg-gray-100 border border-gray-300 rounded text-sm">
                        <span className="text-gray-700">$</span> <span className="text-black">./degree --institution="{edu.institution.toLowerCase().replace(/\s+/g, '-')}"</span>
                      </div>

                      <div className="flex items-start gap-4">
                        <div
                          className="p-4 rounded-xl bg-gray-100 border-2 border-black text-black shadow-lg flex-shrink-0 group-hover:bg-black group-hover:text-white transition-all duration-300"
                        >
                          <Icon className="h-8 w-8" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-xl font-bold text-black group-hover:text-gray-700 transition-colors leading-tight">
                            {edu.degree}
                          </CardTitle>
                          <CardDescription className="text-lg font-semibold text-gray-700 mt-1">
                            {edu.institution}
                          </CardDescription>

                          {/* Meta information */}
                          <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Calendar className="h-4 w-4 text-black" />
                              <span className="font-medium">{edu.year}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 text-black" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-black" />
                              <span>{edu.duration}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent className="space-y-6">
                      {/* Description */}
                      <p className="text-gray-700 leading-relaxed">
                        <span className="text-gray-500">//</span>{" "}
                        {edu.description}
                      </p>

                      {/* Highlights */}
                      <div>
                        <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                          <Star className="h-4 w-4 text-black" />
                          Key Highlights
                        </h4>
                        <div className="space-y-2">
                          {edu.highlights.map((highlight, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle className="h-4 w-4 text-black mt-0.5 flex-shrink-0" />
                              <span className="text-gray-700">
                                {highlight}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Key Courses */}
                      <div>
                        <h4 className="font-semibold text-black mb-3 flex items-center gap-2">
                          <BookOpen className="h-4 w-4 text-black" />
                          Key Courses
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.courses.map((course, idx) => (
                            <Badge
                              key={course}
                              variant="outline"
                              className="text-xs bg-gray-200 border-gray-300 text-gray-700 hover:border-black hover:bg-black hover:text-white transition-all duration-200 animate-fade-in-up"
                              style={{ animationDelay: `${idx * 100}ms` }}
                            >
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>

          {/* Certifications Section */}
          <div
            className={`transition-all duration-700 delay-400 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <Card className="bg-white backdrop-blur-sm border-2 border-black shadow-xl overflow-hidden">
              {/* Header with technical accent */}
              <div className="h-0.5 bg-black"></div>

              <CardHeader className="text-center pb-8">
                <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-black">
                  <div className="p-3 rounded-xl bg-gray-100 border-2 border-black text-black shadow-lg">
                    <Award className="h-6 w-6" />
                  </div>
                  CERTIFICATIONS.DATABASE
                </CardTitle>
                <p className="text-gray-700 mt-2">
                  <span className="text-gray-500">//</span> Industry-recognized credentials and continuous learning protocols
                </p>

                {/* Progress indicator */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-700 mb-2">
                    <span>Certification Progress</span>
                    <span>{Math.round(certProgress)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 border-2 border-black">
                    <div
                      className="h-2 bg-black rounded-full transition-all duration-1000 ease-out shadow-lg"
                      style={{ width: `${certProgress}%` }}
                    ></div>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {certifications.map((cert, index) => (
                    <div
                      key={index}
                      className="group p-4 rounded-lg bg-gray-100 hover:bg-black hover:text-white border-2 border-black transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up cursor-pointer"
                      style={{ animationDelay: `${600 + index * 100}ms` }}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-3 h-3 bg-black group-hover:bg-white rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform"></div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm leading-tight group-hover:text-white transition-colors">
                            {cert.name}
                          </h4>
                          <p className="text-xs text-gray-600 group-hover:text-gray-300 mt-1">
                            {cert.issuer}
                          </p>
                          <div className="flex items-center justify-between mt-2">
                            <Badge
                              variant="outline"
                              className="text-xs bg-gray-200 border-gray-300 text-gray-700 group-hover:bg-white group-hover:text-black group-hover:border-white"
                            >
                              {cert.level}
                            </Badge>
                            <span className="text-xs text-gray-600 group-hover:text-gray-300 font-medium">
                              {cert.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Summary stats */}
                <div className="mt-8 pt-6 border-t-2 border-black">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    {[
                      {
                        label: "Total Certifications",
                        value: certifications.length,
                        icon: Trophy,
                      },
                      { label: "Professional Level", value: "3", icon: Star },
                      { label: "Latest Year", value: "2024", icon: Calendar },
                      { label: "Cloud Platforms", value: "2", icon: Award },
                    ].map(({ label, value, icon: Icon }, index) => (
                      <div key={label} className="p-3">
                        <Icon className="h-5 w-5 mx-auto mb-2 text-black" />
                        <div className="text-xl font-bold text-black">
                          {value}
                        </div>
                        <div className="text-xs text-gray-600">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Bottom Terminal */}
          <div className="flex justify-center mt-16">
            <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg shadow-gray-500/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                <span className="text-black text-sm">
                  root@kpdev:~$ echo "Knowledge is the ultimate upgrade"
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

          .animate-fade-in-up {
              animation: fade-in-up 0.6s ease-out forwards;
              opacity: 0;
          }

          .delay-0 { animation-delay: 0ms; }
          .delay-200 { animation-delay: 200ms; }
          .delay-400 { animation-delay: 400ms; }
          .delay-600 { animation-delay: 600ms; }
          .delay-1000 { animation-delay: 1000ms; }
          .delay-2000 { animation-delay: 2000ms; }
        `}</style>
      </section>
    </div>
  );
}
