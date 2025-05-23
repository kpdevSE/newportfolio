import React, { useState, useEffect } from 'react';
import
{
    Download,
    ChevronRight,
    Github,
    Linkedin,
    Mail,
    ArrowDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection()
{
    const [isVisible, setIsVisible] = useState(false);
    const [currentRole, setCurrentRole] = useState(0);

    const roles = [
        "Full Stack Web Developer",
        "MERN Stack Specialist",
        "UI/UX Enthusiast",
        "NEXT.js Developer"
    ];

    useEffect(() =>
    {
        window.scrollTo(0, 0);


        if ('scrollRestoration' in history)
        {
            history.scrollRestoration = 'manual';
        }

        setIsVisible(true);

        const roleInterval = setInterval(() =>
        {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);

        return () => clearInterval(roleInterval);
    }, []);

    const downloadResume = () =>
    {
        const link = document.createElement('a');
        link.href = '/CV_KanishkaPasindu.pdf';
        link.download = 'Kanishak_Pasindu-resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full opacity-70 animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-green-100 to-blue-100 rounded-full opacity-60 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-50 animate-pulse delay-2000"></div>
            </div>

            <section className="relative pt-20 pb-32 px-4">
                <div className="max-w-6xl mx-auto text-center">
                    {/* Main content */}
                    <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                        }`}>
                        {/* Greeting */}
                        <div className="mb-8">
                            <div className="inline-block px-4 py-2 bg-black/5 backdrop-blur-sm rounded-full mb-6">
                                <span className="text-sm font-medium text-gray-600">👋 Welcome to my portfolio</span>
                            </div>

                            {/* Animated name */}
                            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                                <span className="inline-block animate-fade-in-up">Hi, I'm </span>
                                <span className="text-black relative inline-block animate-fade-in-up delay-300 ml-5 text-blue-600">
                                    Kanishka
                                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 animate-scale-x delay-700"></div>
                                </span>
                            </h1>

                            {/* Animated role */}
                            <div className="h-20 flex items-center justify-center mb-6">
                                <h2 className="text-2xl md:text-3xl text-gray-600 font-medium animate-fade-in-up delay-500">
                                    <span className="inline-block transition-all duration-500 transform">
                                        {roles[currentRole]}
                                    </span>
                                </h2>
                            </div>

                            {/* Description */}
                            <p className={`text-lg text-gray-500 max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-700 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                                }`}>
                                I create beautiful, responsive web applications with modern technologies.
                                Passionate about clean code, user experience, and solving complex problems
                                that make a real difference.
                            </p>
                        </div>

                        {/* Action buttons */}
                        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-16 transition-all duration-700 delay-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                            }`}>
                            <Button
                                size="lg"
                                className="bg-black hover:bg-gray-800 text-white group transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                onClick={downloadResume}
                            >
                                Download Resume
                                <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />

                            </Button>
                        </div>

                        {/* Social links */}
                        <div className={`flex justify-center gap-6 mb-16 transition-all duration-700 delay-1200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                            }`}>
                            {[
                                { icon: Github, href: "https://github.com/kpdevSE", label: "GitHub" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/kanishka-pasindu-b976a8252/", label: "LinkedIn" },
                                { icon: Mail, href: "kanishkapasindu6@gmail.com", label: "Email" }
                            ].map(({ icon: Icon, href, label }, index) => (
                                <a
                                    key={label}
                                    href={href}
                                    className={`p-3 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-black transition-all duration-300 hover:scale-110 hover:shadow-lg group animate-fade-in-up`}
                                    style={{ animationDelay: `${1400 + index * 100}ms` }}
                                    aria-label={label}
                                    target='blank'
                                >
                                    <Icon className="h-5 w-5 text-gray-600 group-hover:text-black transition-colors" />
                                </a>
                            ))}
                        </div>

                        {/* Scroll indicator */}
                        <div className={`transition-all duration-700 delay-1500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'
                            }`}>
                            <div className="flex flex-col items-center text-gray-400">
                                <span className="text-sm mb-2">Scroll to explore</span>
                                <ArrowDown className="h-4 w-4 animate-bounce" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

                @keyframes scale-x {
                    from {
                        transform: scaleX(0);
                    }
                    to {
                        transform: scaleX(1);
                    }
                }

                .animate-fade-in-up {
                    animation: fade-in-up 0.6s ease-out forwards;
                    opacity: 0;
                }

                .animate-scale-x {
                    animation: scale-x 0.8s ease-out forwards;
                }

                .delay-300 {
                    animation-delay: 300ms;
                }

                .delay-500 {
                    animation-delay: 500ms;
                }

                .delay-700 {
                    animation-delay: 700ms;
                }

                .delay-1000 {
                    animation-delay: 1000ms;
                }

                .delay-1200 {
                    animation-delay: 1200ms;
                }

                .delay-1400 {
                    animation-delay: 1400ms;
                }

                .delay-1500 {
                    animation-delay: 1500ms;
                }

                .delay-2000 {
                    animation-delay: 2000ms;
                }
            `}</style>
        </div>
    );
}