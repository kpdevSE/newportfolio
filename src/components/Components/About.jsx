import React, { useState, useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import
{
    Code2,
    Lightbulb,
    Users,
    Award,
    Coffee,
    GitBranch,
    Zap,
    Heart
} from 'lucide-react';

export default function AboutSection()
{
    const sectionRef = useRef(null);

    const skills = [
        { name: "JavaScript", level: 95, color: "bg-yellow-500" },
        { name: "React", level: 90, color: "bg-blue-500" },
        { name: "Node.js", level: 85, color: "bg-green-500" },
        { name: "Next.js", level: 80, color: "bg-purple-500" },
        { name: "Expree.js", level: 75, color: "bg-orange-500" },
        { name: "MongoDB", level: 85, color: "bg-green-600" },
        { name: "Prisma ORM", level: 60, color: "bg-red-600" },
        { name: "HTML", level: 90, color: "bg-indigo-600" },
        { name: "CSS", level: 90, color: "bg-pink-600" },
        { name: "Tailwind CSS", level: 80, color: "bg-sky-600" },
        { name: "Shadcn UI", level: 88, color: "bg-yellow-200" },
    ];

    const stats = [
        { icon: Code2, label: "Years Experience", value: 4, suffix: "+" },
        { icon: GitBranch, label: "Projects Completed", value: 50, suffix: "+" },
        { icon: Users, label: "Happy Clients", value: 25, suffix: "+" }
    ];

    const interests = [
        { icon: Coffee, label: "Coffee Enthusiast" },
        { icon: Lightbulb, label: "Problem Solver" },
        { icon: Award, label: "Continuous Learner" },
        { icon: Heart, label: "Open Source Contributor" }
    ];

    useEffect(() =>
    {
        // No animations needed - static display only
    }, []);

    return (
        <div>
            <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-white to-gray-50 relative overflow-hidden">
                {/* Background decorations */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-60"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-green-100 to-blue-100 rounded-full opacity-50"></div>
                </div>

                <div className="max-w-6xl mx-auto relative">
                    {/* Section Header */}
                    <div className="text-center mb-16">
                        <div className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-4">
                            <span className="text-sm font-medium text-gray-600">👨‍💻 Get to know me</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
                    </div>

                    {/* Main Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
                        {/* Left Column - Image & Stats */}
                        <div>
                            {/* Profile Image */}
                            <div className="relative mb-8">
                                <div className="w-80 h-80 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl mx-auto shadow-2xl flex items-center justify-center text-8xl relative overflow-hidden group">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <span className="relative z-10 filter drop-shadow-lg">👨‍💻</span>
                                </div>
                                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-4 shadow-xl">
                                    <Zap className="h-8 w-8 text-yellow-500" />
                                </div>
                            </div>

                            {/* Stats */}
                            <div className="grid grid-cols-3 gap-4">
                                {stats.map(({ icon: Icon, label, value, suffix }, index) => (
                                    <div key={label} className="text-center p-4 bg-white/80 cursor-pointer backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100">
                                        <Icon className="h-6 w-6 text-gray-600 mx-auto mb-2 cursor-pointer" />
                                        <div className="text-2xl font-bold text-black cursor-pointer">
                                            {value}{suffix}
                                        </div>
                                        <div className="text-xs text-gray-500 font-medium cursor-pointer">{label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right Column - Text Content */}
                        <div>
                            <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                Passionate Developer & Problem Solver
                            </h3>

                            <div className="space-y-6 text-gray-600 leading-relaxed">
                                <p className="text-lg">
                                    I'm a full-stack developer with <strong className="text-black">4+ years of experience</strong> building scalable web applications.
                                    Currently working as a Senior Full Stack Developer at Tech Solutions Inc., where I lead
                                    development teams and architect complex systems.
                                </p>

                                <p className="text-lg">
                                    I'm passionate about creating <strong className="text-black">intuitive user experiences</strong> and writing clean, maintainable code.
                                    When I'm not coding, you can find me contributing to open-source projects, writing technical
                                    articles, or exploring new technologies.
                                </p>
                            </div>

                            {/* Interests */}
                            <div className="mt-8 mb-8">
                                <h4 className="text-lg font-semibold mb-4 text-gray-800">What I Love</h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {interests.map(({ icon: Icon, label }) => (
                                        <div key={label} className="flex items-center gap-3 p-3 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-md cursor-pointer">
                                            <Icon className="h-4 w-4 text-gray-600" />
                                            <span className="text-sm font-medium text-gray-700">{label}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack */}
                            <div>
                                <h4 className="text-lg font-semibold mb-4 text-gray-800">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {["JavaScript", "React", "Node.js", "Prisma ORM", "Express.js", "MongoDB", "TypeScript", "Next.js", "Tailwind CSS", "Shadcn UI", "GitHub", "Vercel", "Netlify", "HTML", "CSS"].map((tech) => (
                                        <Badge
                                            key={tech}
                                            variant="secondary"
                                            className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105 cursor-pointer"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div>
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-gray-100">
                            <h4 className="text-2xl font-bold mb-8 text-center text-gray-800">Skills & Expertise</h4>
                            <div className="grid md:grid-cols-2 gap-6">
                                {skills.map((skill) => (
                                    <div key={skill.name} className="space-y-2">
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-gray-700">{skill.name}</span>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <div
                                                className={`h-2 rounded-full ${skill.color}`}
                                                style={{ width: `${skill.level}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}