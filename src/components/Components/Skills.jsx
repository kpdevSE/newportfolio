import React, { useState } from 'react';
import
{
    Code,
    Server,
    Database,
    Wrench,
    Sparkles,
    Zap
} from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function SkillsSection()
{
    const [hoveredCard, setHoveredCard] = useState(null);

    const skills = {
        Frontend: {
            techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "ShadCn UI", "HTML/CSS"],
            color: "from-blue-500 to-cyan-500",
            bgColor: "bg-blue-50 dark:bg-blue-950/20"
        },
        Backend: {
            techs: ["Node.js", "Express.js", "REST APIs", "GraphQL"],
            color: "from-green-500 to-emerald-500",
            bgColor: "bg-green-50 dark:bg-green-950/20"
        },
        Database: {
            techs: ["MongoDB", "PostgreSQL", "MySQL", "Firebase",],
            color: "from-purple-500 to-violet-500",
            bgColor: "bg-purple-50 dark:bg-purple-950/20"
        },
        DevOps: {
            techs: ["Docker", "GitHub Actions", "Linux"],
            color: "from-orange-500 to-red-500",
            bgColor: "bg-orange-50 dark:bg-orange-950/20"
        }
    };

    const icons = {
        Frontend: <Code className="h-8 w-8" />,
        Backend: <Server className="h-8 w-8" />,
        Database: <Database className="h-8 w-8" />,
        DevOps: <Wrench className="h-8 w-8" />
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
            <section id="skills" className="py-24 px-4 relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10">
                    {/* Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/50 mb-6">
                            <Sparkles className="h-4 w-4 text-indigo-600" />
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Technical Expertise</span>
                        </div>

                        <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-indigo-900 to-slate-900 dark:from-white dark:via-indigo-200 dark:to-white bg-clip-text text-transparent mb-6">
                            Skills & Technologies
                        </h2>

                        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
                            Crafting digital experiences with cutting-edge technologies and modern development practices
                        </p>

                        <div className="flex justify-center mt-8">
                            <div className="w-24 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                        </div>
                    </div>

                    {/* Skills Grid */}
                    <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8">
                        {Object.entries(skills).map(([category, data], index) => (
                            <Card
                                key={category}
                                className={`group relative overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${data.bgColor} border-white/50 dark:border-slate-700/50 backdrop-blur-sm shadow-xl hover:shadow-2xl cursor-pointer`}
                                onMouseEnter={() => setHoveredCard(category)}
                                onMouseLeave={() => setHoveredCard(null)}
                                style={{
                                    animationDelay: `${index * 100}ms`
                                }}
                            >
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${data.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                                {/* Animated border */}
                                <div className="absolute inset-0 rounded-lg">
                                    <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${data.color} opacity-0 group-hover:opacity-20 blur-sm transition-all duration-500`}></div>
                                </div>

                                <CardHeader className="text-center pb-4 relative z-10">
                                    {/* Icon container with gradient background */}
                                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${data.color} text-white mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                                        {icons[category]}
                                        {hoveredCard === category && (
                                            <div className="absolute inset-0 rounded-2xl bg-white/20 animate-pulse"></div>
                                        )}
                                    </div>

                                    <CardTitle className="text-xl font-bold text-slate-800 dark:text-white group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                                        {category}
                                    </CardTitle>

                                    {/* Animated underline */}
                                    <div className={`w-0 h-0.5 bg-gradient-to-r ${data.color} mx-auto transition-all duration-300 group-hover:w-12`}></div>
                                </CardHeader>

                                <CardContent className="relative z-10">
                                    <div className="space-y-3">
                                        {data.techs.map((tech, techIndex) => (
                                            <Badge
                                                key={tech}
                                                variant="secondary"
                                                className="w-full justify-center py-2 px-4 bg-white/70 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 border border-white/50 dark:border-slate-600/50 hover:bg-white dark:hover:bg-slate-700 transition-all duration-300 hover:scale-105 hover:shadow-md backdrop-blur-sm"
                                                style={{
                                                    animationDelay: `${(index * 100) + (techIndex * 50)}ms`
                                                }}
                                            >
                                                <span className="flex items-center gap-2">
                                                    {hoveredCard === category && (
                                                        <Zap className="h-3 w-3 text-indigo-500" />
                                                    )}
                                                    {tech}
                                                </span>
                                            </Badge>
                                        ))}
                                    </div>
                                </CardContent>

                                {/* Hover effect particles */}
                                {hoveredCard === category && (
                                    <div className="absolute inset-0 pointer-events-none">
                                        <div className="absolute top-4 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                                        <div className="absolute bottom-4 left-4 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
                                        <div className="absolute top-1/2 left-6 w-1.5 h-1.5 bg-purple-400 rounded-full animate-bounce"></div>
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>

                    {/* Bottom decoration */}
                    <div className="flex justify-center mt-16">
                        <div className="flex items-center gap-2 px-6 py-3 bg-white/60 dark:bg-slate-800/60 backdrop-blur-sm rounded-full border border-white/20 dark:border-slate-700/50">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
                            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">Always learning, always growing</span>
                            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}