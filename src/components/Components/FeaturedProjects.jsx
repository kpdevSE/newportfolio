import React, { useState, useEffect } from "react";
import {
  Github,
  ExternalLink,
  Star,
  TrendingUp,
  Eye,
  ArrowUpRight,
  Sparkles,
  Code2,
  X,
  Calendar,
  Users,
  Zap,
  Shield,
  Globe,
  Database,
  CreditCard,
  Smartphone,
  Search,
  CloudSun,
  User,
  Brain,
  BookOpen,
  Video,
  CheckCircle,
  Sliders,
  BarChart3,
  MapIcon,
  FileText,
  MapPin,
  Car,
  Clock,
  Radio,
  Package,
  AlertTriangle,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GlitchText, RGBSplitText, ChromaticAberration } from "../animations/HackerAnimations";

export default function FeaturedProjects() {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSectionsOpen, setIsSectionsOpen] = useState(false);
  const [typedText, setTypedText] = useState("");
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);

  const hackerQuotes = [
    "root@kpdev:~$ ls -la /projects/",
    "> Scanning project repository...",
    "root@kpdev:~$ cat featured_projects.json",
    "> Loading portfolio data...",
    "root@kpdev:~$ chmod +x showcase.sh",
    "> Access granted. Displaying projects...",
  ];

  const openProjectDialog = (project) => {
    setSelectedProject(project);
  };

  const closeProjectDialog = () => {
    setSelectedProject(null);
    setIsSectionsOpen(false);
  };

  // Typing animation effect
  useEffect(() => {
    if (currentProjectIndex < hackerQuotes.length) {
      const currentQuote = hackerQuotes[currentProjectIndex];
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
            setCurrentProjectIndex(prev => prev + 1);
          }, 1000);
        }
      }, 100);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentProjectIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      title: "EVENTZ – Event Planning Platform",
      description:
        "A full-stack event planning solution built with Next.js, React, and Node.js. Features include secure authentication, payment processing, real-time communication, and responsive design.",
      detailedDescription:
        "EVENTZ is a modern web platform that simplifies event planning by allowing users to book venues, manage guest lists, and handle payments seamlessly. Developed as part of an HD Computing and Software Engineering final project, it delivers a smooth UX with real-time communication, Stripe integration for payments (Sri Lanka region), and advanced search and filter options for events.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Express.js",
        "Prisma",
      ],
      features: [
        "Secure Authentication",
        "Stripe Payment Integration",
        "Real-time Chat and Notifications",
        "Responsive Mobile-first Design",
        "Event Filtering & Search",
      ],
      detailedFeatures: [
        {
          icon: Shield,
          title: "Secure Auth",
          desc: "JWT-based authentication with user roles and permissions",
        },
        {
          icon: Zap,
          title: "Real-time Communication",
          desc: "Integrated chat using Intercom and email alerts via Nodemailer",
        },
        {
          icon: CreditCard,
          title: "Stripe Integration",
          desc: "Localized payment gateway for the Sri Lankan region",
        },
        {
          icon: Smartphone,
          title: "Mobile Friendly",
          desc: "Optimized for seamless mobile event booking",
        },
        {
          icon: Search,
          title: "Advanced Filters",
          desc: "Search and filter events by date, type, and availability",
        },
      ],
      demo: "https://demo.example.com",
      github: "https://github.com/kpdevSE/final_project.git",
      image: "🎉",
      accent: "#2563eb",
      accentSoft: "rgba(37, 99, 235, 0.08)",
      status: "Live",
      stars: "95",
      views: "1.7k",
      duration: "1 month",
      team: "1 Developers",
      highlights: [
        "40% Faster Event Planning",
        "30% Boost in User Satisfaction",
        "500+ Events Managed in 3 Months",
        "Email & Chat Notifications",
        "Mobile Booking Optimized",
      ],
    },
    {
      title: "Yamu Travels – AI Trip Planning",
      description:
        "An intelligent trip planning platform that uses AI to generate personalized itineraries with real-time data and seamless booking.",
      detailedDescription:
        "Yamu Travels is an AI-powered travel planning web app built with Next.js, React, and Node.js. Created as a final project for HD Computing and Software Engineering, the platform utilizes Gemini API to provide dynamic, personalized trip itineraries based on user preferences. With real-time integrations for weather, traffic, and attractions, users can explore routes and book stays, transport, and activities all in one place. The result: travelers save time and enjoy tailor-made adventures effortlessly.",
      tech: [
        "Next.js",
        "React",
        "Node.js",
        "MongoDB",
        "Stripe",
        "Express.js",
        "Prisma",
        "Gemini API",
      ],
      features: [
        "AI Itinerary Generation",
        "Interactive Map View",
        "Real-time Data Integration",
        "Secure Booking System",
        "User Dashboard & Collaboration",
      ],
      detailedFeatures: [
        {
          icon: Brain,
          title: "AI Recommendations",
          desc: "Gemini API suggests personalized trips based on user interests, location, and dates",
        },
        {
          icon: MapIcon,
          title: "Interactive Maps",
          desc: "Visualize routes, attractions, and estimated travel times in real time",
        },
        {
          icon: CloudSun,
          title: "Live Data Integration",
          desc: "Weather, traffic, and attraction data pulled from external sources",
        },
        {
          icon: CreditCard,
          title: "Secure Payments",
          desc: "Stripe-enabled booking for accommodations, activities, and transport",
        },
        {
          icon: User,
          title: "Smart Dashboard",
          desc: "Save trips, plan collaboratively, and share itineraries with ease",
        },
      ],
      demo: "https://demo.example.com",
      github: "https://github.com/kpdevSE/pearly-travel.git",
      image: "🌍",
      accent: "#d97706",
      accentSoft: "rgba(217, 119, 6, 0.1)",
      status: "Live",
      stars: "110",
      views: "2.6k",
      duration: "1 month",
      team: "2 Developers",
      highlights: [
        "Saved 12+ Hours per User on Trip Planning",
        "60% Increase in Satisfaction with Personalized Trips",
        "2,000+ Trips Planned and Booked in First 3 Months",
        "Gemini API-Powered Personalization",
        "Interactive Real-Time Travel Maps",
      ],
    },

    {
      title: "LMS – English Academy",
      description:
        "Interactive educational platform designed to deliver online courses and real-time virtual classrooms with robust tools for educators and learners.",
      detailedDescription:
        "LMS – English Academy is a scalable and engaging learning management system built with React and Next.js. Developed as a final project for HD Computing and Software Engineering, it offers real-time lessons, automated grading, personalized learning paths, and comprehensive analytics. Hosted on AWS with PostgreSQL backend, the platform now empowers over 50,000 students across 12 countries with an optimized digital learning experience.",
      tech: ["React", "Next.js", "PostgreSQL", "AWS"],
      features: [
        "Interactive Lessons",
        "Live Virtual Classrooms",
        "Automated Grading",
        "Personalized Learning Paths",
      ],
      detailedFeatures: [
        {
          icon: BookOpen,
          title: "Multimedia Lessons",
          desc: "Supports videos, quizzes, and interactive modules for dynamic learning",
        },
        {
          icon: Video,
          title: "Live Classrooms",
          desc: "Built-in virtual classroom with screen sharing and recording",
        },
        {
          icon: CheckCircle,
          title: "Auto-Grading",
          desc: "Automated grading and progress tracking for assignments and quizzes",
        },
        {
          icon: Sliders,
          title: "Customized Paths",
          desc: "Personalized learning paths based on student needs and progress",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          desc: "Insightful performance metrics for educators and administrators",
        },
      ],
      demo: "https://demo.example.com",
      github: "https://github.com/kpdevSE/english-academy-lms",
      image: "📚",
      accent: "#4f46e5",
      accentSoft: "rgba(79, 70, 229, 0.1)",
      status: "Live",
      stars: "142",
      views: "4.9k",
      duration: "2 months",
      team: "5 Developers",
      highlights: [
        "Serving 50,000+ Students in 12 Countries",
        "28% Increase in Course Completion Rates",
        "35% Boost in Instructor Productivity",
        "Live Classes with Recording",
        "Personalized Learning Paths",
      ],
    },
    {
      title: "Hospital Management System",
      description:
        "Comprehensive web-based hospital management platform designed to streamline operations and enhance patient care through digitization.",
      detailedDescription:
        "The Hospital Management System is a full-featured, responsive web application developed using PHP and MySQL. Built for a private client in just two weeks, it centralizes core hospital functions—like patient registration, appointment scheduling, billing, and staff management—within a user-friendly admin interface. Designed to eliminate paperwork and reduce operational friction, the system enabled hospital staff to make faster, data-driven decisions with real-time access to medical records and lab results.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      features: [
        "Patient Registration & Appointment Scheduling",
        "Role-Based Access Control",
        "Real-Time Medical Records",
        "Billing & Invoicing",
        "Admin Dashboard Analytics",
      ],
      detailedFeatures: [
        {
          icon: Users,
          title: "Role-Based Access",
          desc: "Separate dashboards for doctors, nurses, and administrators for secure and streamlined access.",
        },
        {
          icon: Calendar,
          title: "Appointment Scheduling",
          desc: "Patients can book appointments online with real-time availability management.",
        },
        {
          icon: FileText,
          title: "Medical Records",
          desc: "Instant access to patient history, lab results, and diagnostic reports.",
        },
        {
          icon: CreditCard,
          title: "Billing System",
          desc: "Integrated billing and invoice generation for patient services.",
        },
        {
          icon: BarChart3,
          title: "Operational Analytics",
          desc: "Visual dashboards provide insights into hospital efficiency and trends.",
        },
      ],
      demo: "",
      github: "",
      image: "🏥",
      accent: "#15803d",
      accentSoft: "rgba(21, 128, 61, 0.1)",
      status: "Delivered",
      stars: "N/A",
      views: "N/A",
      duration: "2 Weeks",
      team: "1 Developer",
      highlights: [
        "60% Reduction in Administrative Workload",
        "Improved Accuracy of Patient Records",
        "Faster Medical History Access",
        "Boosted Staff Efficiency & Satisfaction",
        "Custom Admin Dashboard for Control",
      ],
    },
    {
      title: "Gym Management System (FitZone)",
      description:
        "Comprehensive web-based system for managing gym memberships, trainers, and workouts designed to streamline operations and enhance member experience.",
      detailedDescription:
        "FitZone is a full-featured, responsive gym management web application developed using PHP and MySQL with Bootstrap frontend. Built for a private client in just two weeks, it centralizes core gym functions—like member registration, trainer scheduling, workout tracking, and billing—within a user-friendly interface. The system eliminates manual processes and reduces administrative burden while providing real-time insights into member progress and gym operations through comprehensive analytics.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
      features: [
        "Member Registration & Subscription Management",
        "Trainer Scheduling & Session Booking",
        "Real-Time Workout Tracking & Progress Monitoring",
        "Automated Billing & Payment Notifications",
        "Admin Dashboard with Attendance & Revenue Analytics",
      ],
      detailedFeatures: [
        {
          icon: Users,
          title: "Role-Based Access",
          desc: "Separate dashboards for admins, trainers, and members with secure and streamlined access control.",
        },
        {
          icon: Calendar,
          title: "Trainer Scheduling",
          desc: "Members can book training sessions online with real-time availability and automated scheduling.",
        },
        {
          icon: TrendingUp,
          title: "Progress Monitoring",
          desc: "Real-time workout tracking and progress monitoring to keep members engaged and motivated.",
        },
        {
          icon: CreditCard,
          title: "Automated Billing",
          desc: "Integrated billing system with automated payment notifications and subscription management.",
        },
        {
          icon: BarChart3,
          title: "Analytics Dashboard",
          desc: "Comprehensive admin dashboard with attendance tracking and revenue analytics for informed decision-making.",
        },
      ],
      demo: "",
      github: "",
      image: "💪",
      accent: "#dc2626",
      accentSoft: "rgba(220, 38, 38, 0.1)",
      status: "Delivered",
      stars: "N/A",
      views: "N/A",
      duration: "2 Weeks",
      team: "1 Developer",
      highlights: [
        "40% Reduction in Manual Administrative Tasks",
        "50% Increase in Member Engagement",
        "30% Increase in Monthly Sign-ups",
        "Streamlined Trainer Schedule Management",
        "Real-Time Progress Tracking for Members",
      ],
    },
    {
      title: "State Pharmaceutical Cooperation Management System",
      description:
        "Comprehensive web-based pharmaceutical management system for state cooperatives to manage medicine inventory, sales, and user operations with real-time analytics and role-based access control.",
      detailedDescription:
        "The State Pharmaceutical Cooperation Management System is a robust, enterprise-grade web application built with ASP.NET framework and SQL Server. Developed for government pharmaceutical operations in just two weeks, this system revolutionizes medicine inventory management, sales tracking, and user administration. It features dual-role architecture with comprehensive admin controls and pharmacist operations, real-time analytics for inventory monitoring, and automated alerts for medicine expiration. The system ensures regulatory compliance while streamlining daily operations through intuitive dashboards and automated reporting.",
      tech: ["ASP.NET", "C#", "SQL Server", "HTML", "CSS", "JavaScript"],
      features: [
        "Medicine Inventory Management (Add, Update, Delete)",
        "Real-Time Sales Processing & Transaction Tracking",
        "Role-Based User Management (Admin & Pharmacist)",
        "Automated Medicine Expiration Monitoring",
        "Real-Time Analytics Dashboard with Chart Visualizations",
      ],
      detailedFeatures: [
        {
          icon: Shield,
          title: "Role-Based Access Control",
          desc: "Secure dual-role system with admin privileges for user management and pharmacist access for daily operations.",
        },
        {
          icon: Package,
          title: "Medicine Inventory Control",
          desc: "Complete CRUD operations for medicine management with real-time stock tracking and automatic reorder alerts.",
        },
        {
          icon: TrendingUp,
          title: "Real-Time Analytics",
          desc: "Interactive bar charts displaying medicine validity status, expiration tracking, and inventory levels with live data updates.",
        },
        {
          icon: Users,
          title: "User Management System",
          desc: "Comprehensive admin dashboard for user registration, role assignment, and profile management with real-time user statistics.",
        },
        {
          icon: AlertTriangle,
          title: "Expiration Monitoring",
          desc: "Automated alerts and visual indicators for expired and near-expiry medicines with detailed reporting capabilities.",
        },
      ],
      demo: "",
      github: "",
      image: "💊",
      accent: "#1d4ed8",
      accentSoft: "rgba(29, 78, 216, 0.1)",
      status: "Delivered",
      stars: "N/A",
      views: "N/A",
      duration: "2 Weeks",
      team: "1 Developer",
      highlights: [
        "100% Digital Medicine Inventory Management",
        "Real-Time Expiration Tracking & Alerts",
        "50% Reduction in Manual Record Keeping",
        "Automated User Role Management",
        "Live Analytics Dashboard with Chart Visualizations",
        "Regulatory Compliance for State Operations",
      ],
    },
    {
      title: "Language Limousine (Canada)",
      description:
        "Professional airport greeting and student transportation service offering real-time tracking and personalized support for international students arriving in Canada.",
      detailedDescription:
        "Language Limousine is a specialized transportation platform serving international students across Canada. I developed the complete frontend, backend, and deployment as a solo project. The system supports live student tracking, licensed vehicle coordination, 24-hour access to arrival details, and streamlined airport greeting services. Built with React.js, Node.js, Express.js, and MongoDB, and deployed on Vercel with an Oceangate domain, it delivers a secure, reliable, and transparent digital solution trusted by schools, parents, and agents.",
      tech: [
        "React.js",
        "Node.js",
        "Express.js",
        "MongoDB",
        "Vercel (Oceangate Domain)",
      ],
      features: [
        "Live Student Tracking Portal",
        "Licensed Vehicle Coordination",
        "24-Hour Access & Emergency Info",
        "Pre-booked Escorted Service",
        "Real-Time Status Updates",
      ],
      detailedFeatures: [
        {
          icon: MapPin,
          title: "Live Tracking Portal",
          desc: "Real-time visibility for parents, agents, schools, and host families to monitor student status (greeted, in transit, delivered).",
        },
        {
          icon: Car,
          title: "Licensed Vehicle Coordination",
          desc: "Ensures safe, professional transport with licensed vehicles and trained drivers.",
        },
        {
          icon: Clock,
          title: "24-Hour Access & Emergency Info",
          desc: "Arrival packets include emergency contacts, maps, staff photos, and signage for smooth student recognition.",
        },
        {
          icon: Calendar,
          title: "Pre-Booked Escorted Service",
          desc: "Services can be reserved months in advance, ensuring no-hassle coordination for institutions.",
        },
        {
          icon: Radio,
          title: "Real-Time Status Updates",
          desc: "Continuous updates for stakeholders throughout the entire journey—from airport greeting to homestay delivery.",
        },
      ],
      demo: "https://language-limousine-new-p3to-2e66lzaje-kanishkapasis-projects.vercel.app",
      github: "Restricted due to client confidentiality",
      image: "🚐",
      accent: "#c026d3",
      accentSoft: "rgba(192, 38, 211, 0.1)",
      status: "Live",
      stars: "N/A",
      views: "N/A",
      duration: "4 weeks",
      team: "Solo",
      highlights: [
        "End-to-end development (frontend, backend, deployment)",
        "Live real-time tracking portal for students",
        "24-hour support with emergency protocols",
        "Trusted by Canadian institutions for student arrivals",
        "Secure and optimized deployment on Vercel with Oceangate domain",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-mono">
      <section id="projects" className="py-24 px-4 relative overflow-hidden">
        {/* Technical grid background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Hacker Terminal Header */}
          <div
            className={`text-center mb-20 transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white border-2 border-black rounded-lg p-6 mb-8 shadow-lg shadow-gray-500/20 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-black text-sm ml-4">terminal@kpdev-projects</span>
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
              <GlitchText intensity="high">
                <RGBSplitText intensity="medium" trigger="hover">
                  PROJECT SHOWCASE
                </RGBSplitText>
              </GlitchText>
            </h2>
            <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
              <span className="text-gray-500">//</span> Deploying innovative solutions across the digital landscape...
            </p>
          </div>


          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border-2 border-black bg-white shadow-sm hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 hover:-translate-y-2 hover:scale-105 cursor-pointer backdrop-blur-sm ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => openProjectDialog(project)}
                style={{
                  animationDelay: `${index * 150}ms`,
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-x-0 top-0 h-0.5 bg-black"></div>
                <CardHeader className="relative z-10 pb-4">
                  {/* Project image and status */}
                  <div className="flex items-start justify-between mb-3">
                    <div className="text-4xl p-3 rounded-xl border-2 border-black transition-all duration-300 group-hover:scale-105 bg-gray-100 group-hover:bg-black group-hover:text-white">
                      {project.image}
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
                        <span className="text-xs text-black font-mono">OPERATIONAL</span>
                      </div>
                    </div>
                  </div>

                  <CardTitle className="text-xl text-black font-semibold font-mono mb-2 transition-colors group-hover:text-gray-700">
                    {project.title}
                    {hoveredProject === index && (
                      <ArrowUpRight className="inline-block ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 text-black" />
                    )}
                  </CardTitle>

                  <CardDescription className="text-gray-700 leading-relaxed font-mono text-sm">
                    <span className="text-gray-500">//</span>{" "}
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="relative z-10 space-y-5 flex-1 flex flex-col">
                  {/* Command Line */}
                  <div className="p-3 bg-gray-100 border border-gray-300 rounded font-mono text-sm">
                    <span className="text-gray-700">$</span> <span className="text-black">./deploy --project={project.title.toLowerCase().replace(/\s+/g, '-')}</span>
                  </div>

                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-md border-2 border-black bg-white text-black font-mono">
                      Duration · {project.duration}
                    </span>
                    <span className="px-2.5 py-1 rounded-md border border-gray-300 bg-gray-200 text-gray-700 font-mono">
                      Team · {project.team}
                    </span>
                    <span className="px-2.5 py-1 rounded-md border-2 border-black bg-black text-white font-mono font-medium">
                      Status · {project.status}
                    </span>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="font-semibold mb-3 font-mono text-black flex items-center gap-2 text-sm">
                      <Code2 className="h-4 w-4 text-black" />
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.slice(0, 3).map((tech, techIndex) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="text-xs bg-gray-200 border-gray-300 text-gray-700 hover:bg-gray-300 hover:border-black transition-colors font-mono"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge
                          variant="outline"
                          className="text-xs bg-gray-200 border-gray-300 text-gray-700 font-mono"
                        >
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Click hint */}
                  <div className="mt-auto pt-4 border-t-2 border-black flex items-center justify-between text-sm text-black">
                    <span className="font-mono font-medium">
                      &gt; access.project()
                    </span>
                    <div className="w-9 h-9 rounded-lg flex items-center justify-center border-2 border-black bg-white text-black transition-all group-hover:scale-105 group-hover:bg-black group-hover:text-white">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Bottom Terminal */}
          <div
            className={`text-center mt-16 transition-all duration-1000 delay-600 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg shadow-gray-500/20 inline-flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <span className="text-black font-mono text-sm">
                root@kpdev:~$ find /projects -name "*.deployed" | wc -l
              </span>
              <div className="w-2 h-2 bg-black rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
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

      {/* Project Details Sheet (Right-side panel) */}
      {selectedProject && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={closeProjectDialog}
          ></div>

          {/* Centered Modal Container */}
          <div className="absolute inset-0 flex items-center justify-center p-2 sm:p-4">
            <div className="relative w-full max-w-5xl h-[95vh] sm:h-[90vh] bg-white border border-gray-300 rounded-xl sm:rounded-2xl shadow-xl animate-in zoom-in-95 duration-300 flex flex-col overflow-hidden">
              <div className="flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 border-b border-gray-300 bg-gray-100 flex-shrink-0 backdrop-blur-sm">
                <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl border border-gray-300 bg-gray-200 flex-shrink-0">
                    {selectedProject.image}
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs uppercase tracking-wider text-gray-500 font-mono font-medium mb-1 hidden sm:block">
                      &gt; project.details()
                    </p>
                    <h1 className="text-lg sm:text-xl md:text-2xl font-semibold font-mono text-black truncate">
                      {selectedProject.title}
                    </h1>
                  </div>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                  <Badge
                    className={`${
                      selectedProject.status === "Live"
                        ? "bg-black hover:bg-gray-800"
                        : "bg-gray-600 hover:bg-gray-700"
                    } text-white border-0 text-xs`}
                  >
                    {selectedProject.status}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={closeProjectDialog}
                    className="rounded-lg text-gray-500 hover:text-black hover:bg-gray-100 h-8 w-8 sm:h-10 sm:w-10"
                  >
                    <X className="h-4 w-4 sm:h-5 sm:w-5" />
                  </Button>
                </div>
              </div>

              <div className="flex-1 overflow-y-auto">
                <div className="flex flex-col lg:grid lg:grid-cols-[1.6fr_1fr] gap-4 sm:gap-6 p-4 sm:p-6 md:p-8">
                  <div className="space-y-4 sm:space-y-6 order-1 lg:order-1">
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-mono">
                      <span className="text-gray-500">//</span>{" "}
                      {selectedProject.detailedDescription}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-3">
                      {[
                        { label: "Timeline", value: selectedProject.duration },
                        { label: "Team", value: selectedProject.team },
                        { label: "Status", value: selectedProject.status },
                      ].map((item) => (
                        <div
                          key={item.label}
                          className="rounded-lg border border-gray-300 bg-gray-200 px-4 py-3"
                        >
                          <p className="text-xs uppercase tracking-wide text-gray-500 font-mono font-medium mb-1">
                            {item.label}
                          </p>
                          <p className="text-sm font-semibold font-mono text-black">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold font-mono text-black mb-3 flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-black" />
                        Impact Metrics
                      </h3>
                      <div className="space-y-2.5">
                        {selectedProject.highlights
                          .slice(0, 4)
                          .map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-start gap-2.5 sm:gap-3 text-sm text-gray-700 font-mono"
                            >
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full flex-shrink-0 bg-black"></div>
                              <span className="leading-relaxed">
                                {highlight}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-sm font-semibold font-mono text-black mb-3 flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-black" />
                        Key Features
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                        {selectedProject.features.map((feature) => (
                          <div
                            key={feature}
                            className="rounded-lg border border-gray-300 bg-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 text-sm text-gray-700 font-mono"
                          >
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4 order-2 lg:order-2 lg:overflow-y-auto lg:pl-2">
                    <div className="rounded-lg border border-gray-300 bg-gray-200 p-4 sm:p-5 space-y-3">
                      <h4 className="text-sm font-semibold font-mono text-black">
                        Project Stats
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 font-mono">
                            Stars
                          </span>
                          <span className="font-semibold font-mono text-black">
                            {selectedProject.stars}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 font-mono">
                            Views
                          </span>
                          <span className="font-semibold font-mono text-black">
                            {selectedProject.views}
                          </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-600 font-mono">
                            Status
                          </span>
                          <span className="font-semibold font-mono text-black">
                            {selectedProject.status}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-lg border border-gray-300 bg-gray-200 p-4 sm:p-5">
                      <h4 className="text-sm font-semibold font-mono text-black mb-3 flex items-center gap-2">
                        <Code2 className="h-4 w-4 text-black" />
                        Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((tech) => (
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

                    <div className="rounded-lg border border-gray-300 bg-gray-200 p-4 sm:p-5">
                      <h4 className="text-sm font-semibold font-mono text-black mb-2">
                        Detailed Breakdown
                      </h4>
                      <p className="text-sm text-gray-700 mb-4 leading-relaxed font-mono">
                        <span className="text-gray-500">//</span> Explore
                        comprehensive features, technical details, and success
                        metrics.
                      </p>
                      <Button
                        className="w-full bg-black hover:bg-gray-800 text-white border-0 hover:opacity-90 transition-opacity"
                        onClick={() => setIsSectionsOpen(true)}
                      >
                        <Sparkles className="mr-2 h-4 w-4" /> View Full Details
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="shrink-0 px-4 sm:px-6 py-4 sm:py-4 border-t border-gray-300 bg-gray-200 flex">
                <div className="flex flex-row flex-wrap gap-3 sm:gap-3 w-full">
                  <Button
                    size="lg"
                    className="!h-12 sm:!h-11 !rounded-xl sm:!rounded-lg bg-black hover:bg-gray-800 text-white border-0 flex-1 min-w-[140px] hover:opacity-90 transition-opacity text-sm sm:text-base !font-semibold !shadow-lg sm:!shadow-none active:scale-[0.98] sm:active:scale-100 font-mono"
                    onClick={() => window.open(selectedProject.demo, "_blank")}
                  >
                    <ExternalLink className="mr-2 h-5 w-5 sm:h-5 sm:w-5" />
                    Live Demo
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="!h-12 sm:!h-11 !rounded-xl sm:!rounded-lg !border-2 border-gray-300 text-gray-700 hover:bg-gray-300 hover:border-gray-400 flex-1 min-w-[140px] transition-all duration-200 text-sm sm:text-base !font-semibold !bg-gray-100 active:scale-[0.98] sm:active:scale-100 font-mono"
                    onClick={() =>
                      window.open(selectedProject.github, "_blank")
                    }
                  >
                    <Github className="mr-2 h-5 w-5 sm:h-5 sm:w-5" />
                    View Code
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nested Sections Modal */}
      {selectedProject && isSectionsOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
            onClick={() => setIsSectionsOpen(false)}
          ></div>

          {/* Modal */}
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-hidden bg-white rounded-2xl shadow-xl border border-gray-300 animate-in zoom-in-95 duration-300">
            {/* Header */}
            <div className="relative p-6 text-black border-b border-gray-300 bg-gray-100">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-black"></div>
              <div className="relative z-10 flex items-center justify-between">
                <h2 className="text-xl sm:text-2xl font-semibold font-mono">
                  Detailed Sections
                </h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsSectionsOpen(false)}
                  className="text-gray-700 hover:bg-gray-200 hover:text-black rounded-lg"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[65vh]">
              {/* Key Features */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold font-mono mb-4 flex items-center gap-2 text-black">
                  <Sparkles className="h-5 w-5 text-black" />
                  Key Features
                </h3>
                <div className="space-y-3">
                  {selectedProject.detailedFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-gray-200 rounded-lg border border-gray-300"
                    >
                      <div className="p-2.5 rounded-lg bg-gray-100 border border-gray-300 flex-shrink-0">
                        <feature.icon className="h-5 w-5 text-black" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold font-mono text-black mb-1">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-gray-700 leading-relaxed font-mono">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-lg sm:text-xl font-semibold font-mono mb-4 flex items-center gap-2 text-black">
                  <Code2 className="h-5 w-5 text-black" />
                  Tech Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((tech, index) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs px-3 py-1.5 bg-gray-200 border-gray-300 text-gray-700 font-mono"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold font-mono mb-4 flex items-center gap-2 text-black">
                  <TrendingUp className="h-5 w-5 text-black" />
                  Highlights
                </h3>
                <div className="space-y-2.5">
                  {selectedProject.highlights.map((highlight, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 text-gray-700 font-mono"
                    >
                      <div className="mt-1.5 w-2 h-2 rounded-full flex-shrink-0 bg-black"></div>
                      <span className="text-sm leading-relaxed">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-gray-300">
                <Button
                  variant="outline"
                  onClick={() => setIsSectionsOpen(false)}
                  className="border-gray-300 text-gray-700 hover:bg-gray-200 hover:border-gray-400 font-mono"
                >
                  Close
                </Button>
                <Button
                  onClick={() => setIsSectionsOpen(false)}
                  className="bg-black hover:bg-gray-800 text-white border-0 hover:opacity-90 transition-opacity font-mono"
                >
                  Done
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
