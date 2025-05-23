import React, { useState, useEffect, useRef } from 'react';
import
{
    GraduationCap,
    Award,
    Calendar,
    BookOpen,
    Trophy,
    Star,
    CheckCircle,
    MapPin,
    Clock
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function Education()
{
    const [isVisible, setIsVisible] = useState(false);
    const [activeCard, setActiveCard] = useState(null);
    const [certProgress, setCertProgress] = useState(0);
    const sectionRef = useRef(null);

    const education = [
        {
            degree: "Higher Diploma in Computing and Software Engineering",
            institution: "Cardiff Metropolitan University",
            year: "2022 - 2024",
            location: "Cardiff, UK",
            description: "Completed a comprehensive program covering web technologies, databases, and modern software engineering practices.",
            highlights: [
                "Skills gained: HTML5, CSS, Tailwind CSS, React.js, JavaScript, JavaScript Frameworks and Libraries, MySQL, PHP, PhpMyAdmin, Next.js, MongoDB, Prisma ORM",
                "Strong foundation in full-stack development and database management"
            ],
            courses: [
                "Web Development",
                "Database Systems",
                "Software Engineering",
                "JavaScript Frameworks",
                "Backend Development with PHP and Node.js"
            ],
            icon: GraduationCap,
            gradient: "from-indigo-500 to-purple-600",
            duration: "2 years"
        },
        {
            degree: "BSc (Hons) Software Engineering (In Progress)",
            institution: "Cardiff Metropolitan University",
            year: "2024 - Present",
            location: "Cardiff, UK",
            description: "Currently pursuing an advanced software engineering degree with focus on modern development methodologies and tools.",
            highlights: [
                "Building on skills in React.js, Next.js, JavaScript, and backend technologies",
                "Engaged in practical projects and collaborative software development"
            ],
            courses: [
                "Advanced Software Engineering",
                "Cloud Computing",
                "Data Structures and Algorithms",
                "Project Management"
            ],
            icon: GraduationCap,
            gradient: "from-indigo-500 to-purple-600",
            duration: "Ongoing"
        }
    ];


    const certifications = [
        {
            name: "Higher Diploma in Computing and Software Engineering",
            issuer: "Cardiff Metropolitan University",
            year: "2024",
            level: "Higher Diploma",
            color: "bg-indigo-600"
        },
        {
            name: "Web Design for Beginners",
            issuer: "University of Moratuwa",
            year: "2020",
            level: "Certified",
            color: "bg-yellow-400"
        },
        {
            name: "Introduction to Programming Using HTML and CSS",
            issuer: "HackerRank",
            year: "2020",
            level: "Certified",
            color: "bg-blue-600"
        }
    ];


    useEffect(() =>
    {
        const observer = new IntersectionObserver(
            ([entry]) =>
            {
                if (entry.isIntersecting)
                {
                    setIsVisible(true);

                    // Animate certification progress
                    setTimeout(() =>
                    {
                        let progress = 0;
                        const interval = setInterval(() =>
                        {
                            progress += 2;
                            setCertProgress(progress);
                            if (progress >= 100)
                            {
                                clearInterval(interval);
                            }
                        }, 20);
                    }, 800);
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
            <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-white via-gray-50 to-slate-100 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-56 h-56 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-40 animate-pulse"></div>
                    <div className="absolute bottom-20 left-10 w-72 h-72 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-30 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-50 animate-pulse delay-2000"></div>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    {/* Section Header */}
                    <div className={`text-center mb-16 transition-all duration-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <div className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-4">
                            <span className="text-sm font-medium text-gray-600">🎓 My learning journey</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">Education & Certifications</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Continuous learning and professional development through formal education and industry certifications
                        </p>
                    </div>

                    {/* Education Cards */}
                    <div className="grid lg:grid-cols-2 gap-8 mb-16">
                        {education.map((edu, index) =>
                        {
                            const Icon = edu.icon;
                            return (
                                <div
                                    key={index}
                                    className={`transition-all duration-700 delay-${index * 200} transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                                        }`}
                                    onMouseEnter={() => setActiveCard(`edu-${index}`)}
                                    onMouseLeave={() => setActiveCard(null)}
                                >
                                    <Card className={`h-full transition-all duration-500 hover:shadow-2xl hover:scale-105 ${activeCard === `edu-${index}` ? 'shadow-2xl scale-105' : 'shadow-lg'
                                        } bg-white/80 backdrop-blur-sm border-0 overflow-hidden group`}>
                                        {/* Gradient header */}
                                        <div className={`h-2 bg-gradient-to-r ${edu.gradient}`}></div>

                                        <CardHeader className="pb-4">
                                            <div className="flex items-start gap-4">
                                                <div className={`p-4 rounded-xl bg-gradient-to-r ${edu.gradient} text-white shadow-lg flex-shrink-0`}>
                                                    <Icon className="h-8 w-8" />
                                                </div>
                                                <div className="flex-1">
                                                    <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-black transition-colors leading-tight">
                                                        {edu.degree}
                                                    </CardTitle>
                                                    <CardDescription className="text-lg font-semibold text-gray-700 mt-1">
                                                        {edu.institution}
                                                    </CardDescription>

                                                    {/* Meta information */}
                                                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <Calendar className="h-4 w-4" />
                                                            <span className="font-medium">{edu.year}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <MapPin className="h-4 w-4" />
                                                            <span>{edu.location}</span>
                                                        </div>
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="h-4 w-4" />
                                                            <span>{edu.duration}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="space-y-6">
                                            {/* Description */}
                                            <p className="text-gray-600 leading-relaxed">{edu.description}</p>

                                            {/* Highlights */}
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                    <Star className="h-4 w-4 text-yellow-500" />
                                                    Key Highlights
                                                </h4>
                                                <div className="space-y-2">
                                                    {edu.highlights.map((highlight, idx) => (
                                                        <div key={idx} className="flex items-start gap-2 text-sm">
                                                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                                            <span className="text-gray-700">{highlight}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Key Courses */}
                                            <div>
                                                <h4 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                                                    <BookOpen className="h-4 w-4 text-blue-500" />
                                                    Key Courses
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {edu.courses.map((course, idx) => (
                                                        <Badge
                                                            key={course}
                                                            variant="outline"
                                                            className={`text-xs hover:scale-105 transition-transform duration-200 animate-fade-in-up`}
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
                    <div className={`transition-all duration-700 delay-400 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl overflow-hidden">
                            {/* Header with gradient */}
                            <div className="h-2 bg-gradient-to-r from-orange-500 via-purple-500 to-green-500"></div>

                            <CardHeader className="text-center pb-8">
                                <CardTitle className="flex items-center justify-center gap-3 text-2xl font-bold text-gray-800">
                                    <div className="p-3 rounded-xl bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg">
                                        <Award className="h-6 w-6" />
                                    </div>
                                    Professional Certifications
                                </CardTitle>
                                <p className="text-gray-600 mt-2">Industry-recognized credentials and continuous learning</p>

                                {/* Progress indicator */}
                                <div className="mt-4">
                                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                                        <span>Certification Progress</span>
                                        <span>{Math.round(certProgress)}%</span>
                                    </div>
                                    <div className="w-full bg-gray-200 rounded-full h-2">
                                        <div
                                            className="h-2 bg-gradient-to-r from-green-400 to-green-600 rounded-full transition-all duration-1000 ease-out"
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
                                            className={`group p-4 rounded-2xl bg-gray-50/80 hover:bg-white border border-gray-100 hover:border-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up`}
                                            style={{ animationDelay: `${600 + index * 100}ms` }}
                                        >
                                            <div className="flex items-start gap-3">
                                                <div className={`w-3 h-3 ${cert.color} rounded-full mt-2 flex-shrink-0 group-hover:scale-125 transition-transform`}></div>
                                                <div className="flex-1">
                                                    <h4 className="font-semibold text-gray-800 text-sm leading-tight group-hover:text-black transition-colors">
                                                        {cert.name}
                                                    </h4>
                                                    <p className="text-xs text-gray-600 mt-1">{cert.issuer}</p>
                                                    <div className="flex items-center justify-between mt-2">
                                                        <Badge variant="outline" className="text-xs">
                                                            {cert.level}
                                                        </Badge>
                                                        <span className="text-xs text-gray-500 font-medium">{cert.year}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Summary stats */}
                                <div className="mt-8 pt-6 border-t border-gray-200">
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                        {[
                                            { label: "Total Certifications", value: certifications.length, icon: Trophy },
                                            { label: "Professional Level", value: "3", icon: Star },
                                            { label: "Latest Year", value: "2024", icon: Calendar },
                                            { label: "Cloud Platforms", value: "2", icon: Award }
                                        ].map(({ label, value, icon: Icon }, index) => (
                                            <div key={label} className="p-3">
                                                <Icon className="h-5 w-5 mx-auto mb-2 text-gray-600" />
                                                <div className="text-xl font-bold text-gray-800">{value}</div>
                                                <div className="text-xs text-gray-600">{label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
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
                    .delay-2000 { animation-delay: 2000ms; }
                `}</style>
            </section>
        </div>
    );
}