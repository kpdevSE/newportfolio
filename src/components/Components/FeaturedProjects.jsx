import React, { useState, useEffect } from 'react';
import
{
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
    FileText
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function FeaturedProjects()
{
    const [hoveredProject, setHoveredProject] = useState(null);
    const [selectedProject, setSelectedProject] = useState(null);
    const [isVisible, setIsVisible] = useState(false);

    const openProjectDialog = (project) =>
    {
        setSelectedProject(project);
    };

    const closeProjectDialog = () =>
    {
        setSelectedProject(null);
    };

    useEffect(() =>
    {
        setIsVisible(true);
    }, []);

    const projects = [
        {
            title: "EVENTZ – Event Planning Platform",
            description: "A full-stack event planning solution built with Next.js, React, and Node.js. Features include secure authentication, payment processing, real-time communication, and responsive design.",
            detailedDescription: "EVENTZ is a modern web platform that simplifies event planning by allowing users to book venues, manage guest lists, and handle payments seamlessly. Developed as part of an HD Computing and Software Engineering final project, it delivers a smooth UX with real-time communication, Stripe integration for payments (Sri Lanka region), and advanced search and filter options for events.",
            tech: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Express.js", "Prisma"],
            features: [
                "Secure Authentication",
                "Stripe Payment Integration",
                "Real-time Chat and Notifications",
                "Responsive Mobile-first Design",
                "Event Filtering & Search"
            ],
            detailedFeatures: [
                { icon: Shield, title: "Secure Auth", desc: "JWT-based authentication with user roles and permissions" },
                { icon: Zap, title: "Real-time Communication", desc: "Integrated chat using Intercom and email alerts via Nodemailer" },
                { icon: CreditCard, title: "Stripe Integration", desc: "Localized payment gateway for the Sri Lankan region" },
                { icon: Smartphone, title: "Mobile Friendly", desc: "Optimized for seamless mobile event booking" },
                { icon: Search, title: "Advanced Filters", desc: "Search and filter events by date, type, and availability" }
            ],
            demo: "https://demo.example.com",
            github: "https://github.com/kpdevSE/final_project.git",
            image: "🎉",
            gradient: "from-green-500 via-blue-500 to-purple-500",
            bgGradient: "from-green-50 to-purple-100",
            darkBgGradient: "from-green-900/50 to-purple-900/50",
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
                "Mobile Booking Optimized"
            ]
        },
        {
            title: "Yamu Travels – AI Trip Planning",
            description: "An intelligent trip planning platform that uses AI to generate personalized itineraries with real-time data and seamless booking.",
            detailedDescription: "Yamu Travels is an AI-powered travel planning web app built with Next.js, React, and Node.js. Created as a final project for HD Computing and Software Engineering, the platform utilizes Gemini API to provide dynamic, personalized trip itineraries based on user preferences. With real-time integrations for weather, traffic, and attractions, users can explore routes and book stays, transport, and activities all in one place. The result: travelers save time and enjoy tailor-made adventures effortlessly.",
            tech: ["Next.js", "React", "Node.js", "MongoDB", "Stripe", "Express.js", "Prisma", "Gemini API"],
            features: [
                "AI Itinerary Generation",
                "Interactive Map View",
                "Real-time Data Integration",
                "Secure Booking System",
                "User Dashboard & Collaboration"
            ],
            detailedFeatures: [
                { icon: Brain, title: "AI Recommendations", desc: "Gemini API suggests personalized trips based on user interests, location, and dates" },
                { icon: MapIcon, title: "Interactive Maps", desc: "Visualize routes, attractions, and estimated travel times in real time" },
                { icon: CloudSun, title: "Live Data Integration", desc: "Weather, traffic, and attraction data pulled from external sources" },
                { icon: CreditCard, title: "Secure Payments", desc: "Stripe-enabled booking for accommodations, activities, and transport" },
                { icon: User, title: "Smart Dashboard", desc: "Save trips, plan collaboratively, and share itineraries with ease" }
            ],
            demo: "https://demo.example.com",
            github: "https://github.com/kpdevSE/pearly-travel.git",
            image: "🌍",
            gradient: "from-yellow-400 via-red-400 to-pink-500",
            bgGradient: "from-yellow-50 to-red-100",
            darkBgGradient: "from-yellow-900/50 to-red-900/50",
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
                "Interactive Real-Time Travel Maps"
            ]
        },

        {
            title: "LMS – English Academy",
            description: "Interactive educational platform designed to deliver online courses and real-time virtual classrooms with robust tools for educators and learners.",
            detailedDescription: "LMS – English Academy is a scalable and engaging learning management system built with React and Next.js. Developed as a final project for HD Computing and Software Engineering, it offers real-time lessons, automated grading, personalized learning paths, and comprehensive analytics. Hosted on AWS with PostgreSQL backend, the platform now empowers over 50,000 students across 12 countries with an optimized digital learning experience.",
            tech: ["React", "Next.js", "PostgreSQL", "AWS"],
            features: [
                "Interactive Lessons",
                "Live Virtual Classrooms",
                "Automated Grading",
                "Personalized Learning Paths"
            ],
            detailedFeatures: [
                { icon: BookOpen, title: "Multimedia Lessons", desc: "Supports videos, quizzes, and interactive modules for dynamic learning" },
                { icon: Video, title: "Live Classrooms", desc: "Built-in virtual classroom with screen sharing and recording" },
                { icon: CheckCircle, title: "Auto-Grading", desc: "Automated grading and progress tracking for assignments and quizzes" },
                { icon: Sliders, title: "Customized Paths", desc: "Personalized learning paths based on student needs and progress" },
                { icon: BarChart3, title: "Analytics Dashboard", desc: "Insightful performance metrics for educators and administrators" }
            ],
            demo: "https://demo.example.com",
            github: "https://github.com/kpdevSE/english-academy-lms",
            image: "📚",
            gradient: "from-indigo-500 via-blue-500 to-sky-500",
            bgGradient: "from-indigo-50 to-sky-100",
            darkBgGradient: "from-indigo-900/50 to-sky-900/50",
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
                "Personalized Learning Paths"
            ]
        },
        {
            title: "Hospital Management System",
            description: "Comprehensive web-based hospital management platform designed to streamline operations and enhance patient care through digitization.",
            detailedDescription: "The Hospital Management System is a full-featured, responsive web application developed using PHP and MySQL. Built for a private client in just two weeks, it centralizes core hospital functions—like patient registration, appointment scheduling, billing, and staff management—within a user-friendly admin interface. Designed to eliminate paperwork and reduce operational friction, the system enabled hospital staff to make faster, data-driven decisions with real-time access to medical records and lab results.",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
            features: [
                "Patient Registration & Appointment Scheduling",
                "Role-Based Access Control",
                "Real-Time Medical Records",
                "Billing & Invoicing",
                "Admin Dashboard Analytics"
            ],
            detailedFeatures: [
                { icon: Users, title: "Role-Based Access", desc: "Separate dashboards for doctors, nurses, and administrators for secure and streamlined access." },
                { icon: Calendar, title: "Appointment Scheduling", desc: "Patients can book appointments online with real-time availability management." },
                { icon: FileText, title: "Medical Records", desc: "Instant access to patient history, lab results, and diagnostic reports." },
                { icon: CreditCard, title: "Billing System", desc: "Integrated billing and invoice generation for patient services." },
                { icon: BarChart3, title: "Operational Analytics", desc: "Visual dashboards provide insights into hospital efficiency and trends." }
            ],
            demo: "",
            github: "",
            image: "🏥",
            gradient: "from-green-500 via-teal-500 to-blue-500",
            bgGradient: "from-green-50 to-blue-100",
            darkBgGradient: "from-green-900/50 to-blue-900/50",
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
                "Custom Admin Dashboard for Control"
            ]
        },
        {
            title: "Gym Management System (FitZone)",
            description: "Comprehensive web-based system for managing gym memberships, trainers, and workouts designed to streamline operations and enhance member experience.",
            detailedDescription: "FitZone is a full-featured, responsive gym management web application developed using PHP and MySQL with Bootstrap frontend. Built for a private client in just two weeks, it centralizes core gym functions—like member registration, trainer scheduling, workout tracking, and billing—within a user-friendly interface. The system eliminates manual processes and reduces administrative burden while providing real-time insights into member progress and gym operations through comprehensive analytics.",
            tech: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
            features: [
                "Member Registration & Subscription Management",
                "Trainer Scheduling & Session Booking",
                "Real-Time Workout Tracking & Progress Monitoring",
                "Automated Billing & Payment Notifications",
                "Admin Dashboard with Attendance & Revenue Analytics"
            ],
            detailedFeatures: [
                { icon: Users, title: "Role-Based Access", desc: "Separate dashboards for admins, trainers, and members with secure and streamlined access control." },
                { icon: Calendar, title: "Trainer Scheduling", desc: "Members can book training sessions online with real-time availability and automated scheduling." },
                { icon: TrendingUp, title: "Progress Monitoring", desc: "Real-time workout tracking and progress monitoring to keep members engaged and motivated." },
                { icon: CreditCard, title: "Automated Billing", desc: "Integrated billing system with automated payment notifications and subscription management." },
                { icon: BarChart3, title: "Analytics Dashboard", desc: "Comprehensive admin dashboard with attendance tracking and revenue analytics for informed decision-making." }
            ],
            demo: "",
            github: "",
            image: "💪",
            gradient: "from-orange-500 via-red-500 to-pink-500",
            bgGradient: "from-orange-50 to-pink-100",
            darkBgGradient: "from-orange-900/50 to-pink-900/50",
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
                "Real-Time Progress Tracking for Members"
            ]
        }



    ];



    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
            <section id="projects" className="py-24 px-4 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 -right-20 w-72 h-72 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl animate-pulse"></div>
                    <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-gradient-to-br from-blue-400/10 to-cyan-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-indigo-400/5 to-purple-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/50 mb-6">
                            <Code2 className="h-4 w-4 text-indigo-600" />
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Portfolio Showcase</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent mb-6">
                            Featured Projects
                        </h2>

                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Showcasing innovative solutions built with modern technologies and best practices
                        </p>

                        <div className="flex justify-center mt-8">
                            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
                        {projects.map((project, index) => (
                            <Card
                                key={index}
                                className={`group relative overflow-hidden transition-all duration-700 hover:scale-[1.02] hover:-translate-y-3 bg-gradient-to-br ${project.bgGradient} dark:${project.darkBgGradient} border-white/50 dark:border-slate-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl cursor-pointer ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                                onMouseEnter={() => setHoveredProject(index)}
                                onMouseLeave={() => setHoveredProject(null)}
                                onClick={() => openProjectDialog(project)}
                                style={{
                                    animationDelay: `${index * 150}ms`,
                                    transitionDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Animated gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700`}></div>

                                {/* Glowing border effect */}
                                <div className="absolute inset-0 rounded-lg">
                                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-30 blur-sm transition-all duration-700`}></div>
                                </div>

                                <CardHeader className="relative z-10">
                                    {/* Project image and status */}
                                    <div className="flex items-start justify-between mb-4">
                                        <div className={`text-5xl p-4 rounded-2xl bg-gradient-to-br ${project.gradient} bg-opacity-10 backdrop-blur-sm border border-white/20 dark:border-slate-700/30 group-hover:scale-110 transition-all duration-300`}>
                                            {project.image}
                                        </div>
                                        <div className="flex flex-col items-end gap-2">
                                            <Badge
                                                variant={project.status === 'Live' ? 'default' : 'secondary'}
                                                className={`${project.status === 'Live' ? 'bg-green-500 hover:bg-green-600' : 'bg-orange-500 hover:bg-orange-600'} text-white border-0 shadow-lg`}
                                            >
                                                <div className="w-2 h-2 rounded-full bg-white mr-1 animate-pulse"></div>
                                                {project.status}
                                            </Badge>
                                        </div>
                                    </div>

                                    <CardTitle className="text-2xl font-bold text-slate-800 dark:text-white mb-3 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        {project.title}
                                        {hoveredProject === index && (
                                            <ArrowUpRight className="inline-block ml-2 h-5 w-5 text-indigo-500 animate-bounce" />
                                        )}
                                    </CardTitle>

                                    <CardDescription className="text-slate-600 dark:text-slate-300 leading-relaxed">
                                        {project.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="relative z-10 space-y-6">
                                    {/* Stats */}
                                    <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                                                <span>{project.stars}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Eye className="h-4 w-4" />
                                                <span>{project.views}</span>
                                            </div>
                                        </div>
                                        <TrendingUp className="h-4 w-4 text-green-500" />
                                    </div>

                                    {/* Tech Stack */}
                                    <div>
                                        <h4 className="font-semibold mb-3 text-slate-700 dark:text-slate-200 flex items-center gap-2">
                                            <Sparkles className="h-4 w-4 text-indigo-500" />
                                            Tech Stack
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-xs bg-white/70 dark:bg-slate-800/70 border-slate-200 dark:border-slate-600 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105"
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                            {project.tech.length > 3 && (
                                                <Badge variant="outline" className="text-xs bg-white/70 dark:bg-slate-800/70 border-slate-200 dark:border-slate-600">
                                                    +{project.tech.length - 3}
                                                </Badge>
                                            )}
                                        </div>
                                    </div>

                                    {/* Click hint */}
                                    <div className="text-center pt-2">
                                        <span className="text-xs text-slate-500 dark:text-slate-400 group-hover:text-indigo-500 transition-colors">
                                            Click to view details
                                        </span>
                                    </div>
                                </CardContent>

                                {/* Hover effect particles */}
                                {hoveredProject === index && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-6 right-6 w-2 h-2 bg-white rounded-full animate-ping"></div>
                                        <div className="absolute bottom-6 left-6 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
                                        <div className="absolute top-1/3 left-8 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                                        <div className="absolute bottom-1/3 right-8 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>

                    {/* Bottom CTA */}
                    <div className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/50">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">More projects on GitHub</span>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Project Details Dialog */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    {/* Backdrop */}
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-md animate-in fade-in duration-300"
                        onClick={closeProjectDialog}
                    ></div>

                    {/* Dialog */}
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden bg-white dark:bg-slate-900 rounded-3xl shadow-2xl animate-in zoom-in-95 duration-500">
                        {/* Header */}
                        <div className={`relative p-4 sm:p-6 md:p-8 bg-gradient-to-br ${selectedProject.gradient} text-white overflow-hidden`}>
                            <div className="absolute inset-0 bg-black/20"></div>
                            <div className="relative z-10">
                                <div className="flex items-start justify-between mb-4 gap-4">
                                    <div className="text-3xl sm:text-4xl md:text-6xl animate-in slide-in-from-left duration-700 flex-shrink-0">
                                        {selectedProject.image}
                                    </div>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={closeProjectDialog}
                                        className="text-white hover:bg-white/20 rounded-full animate-in slide-in-from-right duration-700 flex-shrink-0"
                                    >
                                        <X className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </Button>
                                </div>
                                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 animate-in slide-in-from-left duration-700 delay-100 leading-tight">
                                    {selectedProject.title}
                                </h1>
                                <p className="text-white/90 text-sm sm:text-base md:text-lg animate-in slide-in-from-left duration-700 delay-200 leading-relaxed">
                                    {selectedProject.detailedDescription}
                                </p>

                                {/* Project Stats - Responsive Layout */}
                                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 mt-4 sm:mt-6 animate-in slide-in-from-left duration-700 delay-300">
                                    <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                                        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                                            <Calendar className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm whitespace-nowrap">{selectedProject.duration}</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 sm:gap-2 bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full">
                                            <Users className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                                            <span className="text-xs sm:text-sm whitespace-nowrap">{selectedProject.team}</span>
                                        </div>
                                    </div>
                                    <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 w-fit">
                                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-white mr-1 animate-pulse"></div>
                                        <span className="text-xs sm:text-sm">{selectedProject.status}</span>
                                    </Badge>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 overflow-y-auto max-h-[60vh]">
                            <div className="grid md:grid-cols-2 gap-8">
                                {/* Features */}
                                <div className="animate-in slide-in-from-left duration-700 delay-400">
                                    <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                                        <Sparkles className="h-6 w-6 text-indigo-500" />
                                        Key Features
                                    </h3>
                                    <div className="space-y-4">
                                        {selectedProject.detailedFeatures.map((feature, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors animate-in slide-in-from-left duration-700"
                                                style={{ animationDelay: `${500 + index * 100}ms` }}
                                            >
                                                <div className={`p-2 rounded-lg bg-gradient-to-br ${selectedProject.gradient}`}>
                                                    <feature.icon className="h-5 w-5 text-white" />
                                                </div>
                                                <div>
                                                    <h4 className="font-semibold text-slate-800 dark:text-white mb-1">
                                                        {feature.title}
                                                    </h4>
                                                    <p className="text-sm text-slate-600 dark:text-slate-300">
                                                        {feature.desc}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Tech & Highlights */}
                                <div className="animate-in slide-in-from-right duration-700 delay-400">
                                    {/* Tech Stack */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                                            <Code2 className="h-6 w-6 text-indigo-500" />
                                            Tech Stack
                                        </h3>
                                        <div className="flex flex-wrap gap-3">
                                            {selectedProject.tech.map((tech, index) => (
                                                <Badge
                                                    key={tech}
                                                    variant="outline"
                                                    className="text-sm px-3 py-1 bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-600 hover:scale-105 transition-all duration-300 animate-in zoom-in duration-700"
                                                    style={{ animationDelay: `${600 + index * 50}ms` }}
                                                >
                                                    {tech}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Highlights */}
                                    <div>
                                        <h3 className="text-2xl font-bold mb-6 text-slate-800 dark:text-white flex items-center gap-2">
                                            <TrendingUp className="h-6 w-6 text-green-500" />
                                            Highlights
                                        </h3>
                                        <div className="space-y-3">
                                            {selectedProject.highlights.map((highlight, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center gap-3 text-slate-600 dark:text-slate-300 animate-in slide-in-from-right duration-700"
                                                    style={{ animationDelay: `${700 + index * 100}ms` }}
                                                >
                                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500"></div>
                                                    {highlight}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex gap-4 mt-8 pt-6 border-t border-slate-200 dark:border-slate-700 animate-in slide-in-from-bottom duration-700 delay-500">
                                <Button
                                    size="lg"
                                    className={`bg-gradient-to-r ${selectedProject.gradient} hover:shadow-lg hover:scale-105 text-white border-0 flex-1 transition-all duration-300`}
                                    onClick={() => window.open(selectedProject.demo, '_blank')}
                                >
                                    <ExternalLink className="mr-2 h-5 w-5" />
                                    Live Demo
                                </Button>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:scale-105 flex-1 transition-all duration-300"
                                    onClick={() => window.open(selectedProject.github, '_blank')}
                                >
                                    <Github className="mr-2 h-5 w-5" />
                                    View Code
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}