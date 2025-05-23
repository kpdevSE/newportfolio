import React, { useState, useEffect, useRef } from 'react';
import
{
    MapPin,
    Calendar,
    Building2,
    Briefcase,
    TrendingUp,
    Users,
    Code,
    Award,
    ChevronRight
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function ExperienceSection()
{
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const sectionRef = useRef(null);

    const experiences = [
        {
            role: "Intern Fullstack Software Engineer",
            company: "Lakion",
            period: "2023 - 2024",
            location: "Remote (Global)",
            type: "Internship",
            responsibilities: [
                "Participating in global IT projects with a focus on fullstack development",
                "Collaborating remotely with cross-functional teams",
                "Contributing to innovative software solutions for overseas markets, including New Zealand",
                "Attending virtual onboarding and orientation to integrate with Lakion's workflow and culture"
            ],
            tech: ["React", "Node.js", "MongoDB", "Express.js", "Tailwind CSS"],
            achievements: [
                "Joined a globally recognized IT solutions provider",
                "Selected for impactful internship projects",
                "Integrated into a remote-first, international development team"
            ],
            icon: Building2,
            gradient: "from-purple-500 to-indigo-500"
        },

        {
            role: "Full Stack Developer",
            company: "Flexycode",
            period: "2022 - 2023",
            location: "Remote",
            type: "Internship",
            responsibilities: [
                "Built responsive web applications using React and Node.js",
                "Collaborated with UX/UI designers to implement pixel-perfect designs",
                "Optimized application performance resulting in 40% faster load times",
                "Developed RESTful APIs and database schemas"
            ],
            tech: ["React", "Express.js", "Node.js", "MongoDB", "Prisma ORM"],
            achievements: [
                "40% faster load times",
                "Pixel-perfect designs",
                "10+ applications built"
            ],
            icon: Code,
            gradient: "from-purple-500 to-pink-500"
        },

    ];

    useEffect(() =>
    {
        const observer = new IntersectionObserver(
            ([entry]) =>
            {
                if (entry.isIntersecting)
                {
                    setIsVisible(true);
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current)
        {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <div>
            <section ref={sectionRef} id="experience" className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-slate-50 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-40 right-20 w-64 h-64 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-30 animate-pulse"></div>
                    <div className="absolute bottom-40 left-20 w-48 h-48 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-40 animate-pulse delay-1000"></div>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-4">
                            <span className="text-sm font-medium text-gray-600">💼 My professional journey</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Work Experience</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            A timeline of my professional growth and the amazing teams I've worked with
                        </p>
                    </div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 opacity-30"></div>

                        <div className="space-y-12">
                            {experiences.map((exp, index) =>
                            {
                                const Icon = exp.icon;
                                const isEven = index % 2 === 0;

                                return (
                                    <div
                                        key={index}
                                        className={`relative transition-all duration-700 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                            }`}
                                        onMouseEnter={() => setActiveCard(index)}
                                        onMouseLeave={() => setActiveCard(null)}
                                    >
                                        {/* Timeline dot */}
                                        <div className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-300 ${activeCard === index ? 'scale-150' : 'scale-100'
                                            }`}>
                                            <div className={`w-full h-full rounded-full bg-gradient-to-r ${exp.gradient}`}></div>
                                        </div>

                                        {/* Content Card */}
                                        <div className={`ml-16 md:ml-0 md:w-5/12 ${isEven ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                                            <Card className={`transition-all duration-500 hover:shadow-2xl hover:scale-105 ${activeCard === index ? 'shadow-2xl scale-105' : 'shadow-lg'
                                                } bg-white/80 backdrop-blur-sm border-0 overflow-hidden group`}>
                                                {/* Card Header with Gradient */}
                                                <div className={`h-2 bg-gradient-to-r ${exp.gradient}`}></div>

                                                <CardHeader className="pb-4">
                                                    <div className="flex items-start justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <div className={`p-3 rounded-xl bg-gradient-to-r ${exp.gradient} text-white shadow-lg`}>
                                                                <Icon className="h-6 w-6" />
                                                            </div>
                                                            <div>
                                                                <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-black transition-colors">
                                                                    {exp.role}
                                                                </CardTitle>
                                                                <CardDescription className="text-lg font-semibold text-gray-700 mt-1">
                                                                    {exp.company}
                                                                </CardDescription>
                                                            </div>
                                                        </div>
                                                        <Badge variant="outline" className="bg-black/5 text-xs font-medium">
                                                            {exp.type}
                                                        </Badge>
                                                    </div>

                                                    {/* Period and Location */}
                                                    <div className="flex flex-wrap gap-4 mt-4 text-sm text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4" />
                                                            <span className="font-medium">{exp.period}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-4 w-4" />
                                                            <span>{exp.location}</span>
                                                        </div>
                                                    </div>
                                                </CardHeader>

                                                <CardContent className="space-y-6">
                                                    {/* Key Achievements */}
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                            <Award className="h-4 w-4 text-yellow-500" />
                                                            Key Achievements
                                                        </h4>
                                                        <div className="grid grid-cols-1 gap-2">
                                                            {exp.achievements.map((achievement, idx) => (
                                                                <div key={idx} className="flex items-center gap-2 text-sm">
                                                                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-green-500"></div>
                                                                    <span className="text-gray-700 font-medium">{achievement}</span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>

                                                    {/* Responsibilities */}
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                            <Briefcase className="h-4 w-4 text-blue-500" />
                                                            Key Responsibilities
                                                        </h4>
                                                        <ul className="space-y-2">
                                                            {exp.responsibilities.map((resp, idx) => (
                                                                <li key={idx} className="flex items-start gap-2 text-gray-600 text-sm">
                                                                    <ChevronRight className="h-4 w-4 text-gray-400 mt-0.5 flex-shrink-0" />
                                                                    <span>{resp}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>

                                                    {/* Technologies */}
                                                    <div>
                                                        <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                            <Code className="h-4 w-4 text-purple-500" />
                                                            Technologies Used
                                                        </h4>
                                                        <div className="flex flex-wrap gap-2">
                                                            {exp.tech.map((tech, idx) => (
                                                                <Badge
                                                                    key={tech}
                                                                    variant="outline"
                                                                    className={`text-xs hover:scale-105 transition-transform duration-200 animate-fade-in-up`}
                                                                    style={{ animationDelay: `${idx * 50}ms` }}
                                                                >
                                                                    {tech}
                                                                </Badge>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Summary Stats */}

                </div>

                <style >{`
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
                `}</style>
            </section>
        </div>
    );
}