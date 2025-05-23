import { useState, useEffect } from "react";
import
{
    Github,
    Linkedin,
    Facebook,
    Mail,
    MapPin,
    ArrowUpRight,
    Globe,
    Calendar,
    MessageCircle,
    Instagram
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';



export default function ContactSection()
{
    const [isVisible, setIsVisible] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

    useEffect(() =>
    {
        setIsVisible(true);
    }, []);

    const contactMethods = [
        {
            icon: Mail,
            label: "Email",
            value: "kanishkapasindu6@gmail.com",
            href: "kanishkapasindu6@gmail.com",
            description: "Send me an email",
            gradient: "from-blue-500 to-purple-600"
        },
        {
            icon: MapPin,
            label: "Location",
            value: "104/25,Medemulla,Minuwangoda,Gampaha",
            href: "#",
            description: "Based in the Bay Area",
            gradient: "from-green-500 to-teal-600"
        },
        {
            icon: Calendar,
            label: "Schedule",
            value: "Book a call",
            href: "#",
            description: "Let's discuss your project",
            gradient: "from-orange-500 to-red-600"
        }
    ];

    const socialLinks = [
        {
            icon: Github,
            label: "GitHub",
            href: "https://github.com/kpdevSE",
            username: "kpdevSE",
            gradient: "from-gray-700 to-gray-900"
        },
        {
            icon: Linkedin,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/kanishka-pasindu-b976a8252/",
            username: "Kanishka Pasindu",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            icon: Instagram,
            label: "Instargram",
            href: "https://www.instagram.com/kanishka_pasindu?igsh=MXVpcHRpcXdtODk%3D&utm_source=qr",
            username: "_kanishka_pasindu_",
            gradient: "from-purple-600 to-indigo-800"
        },
        {
            icon: Facebook,
            label: "Facebook",
            href: "https://www.facebook.com/stephan.wick.54?mibextid=wwXIfr",
            username: "kanishak paisndu",
            gradient: "from-blue-600 to-blue-800"
        },
        {
            icon: Globe,
            label: "ZENTRIX",
            href: "https://zentrix-solution.vercel.app/",
            username: "Company Website",
            gradient: "from-pink-600 to-pink-800"
        },

    ];

    return (
        <section id="contact" className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-20 px-4 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-green-400/20 to-blue-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Header */}
                <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="inline-block">
                        <h2 className="text-6xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
                            Let's Connect
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full"></div>
                    </div>
                    <p className="text-xl text-gray-600 mt-8 max-w-2xl mx-auto leading-relaxed">
                        Ready to bring your ideas to life? I'm always excited to discuss new opportunities and creative projects.
                    </p>
                </div>

                {/* Contact Methods */}
                <div className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    {contactMethods.map((method, index) => (
                        <Card
                            key={method.label}
                            className={`group cursor-pointer border-0 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 bg-white/70 backdrop-blur-sm overflow-hidden ${hoveredCard === index ? 'scale-105' : ''}`}
                            onMouseEnter={() => setHoveredCard(index)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                            <CardContent className="p-8 relative">
                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <method.icon className="h-8 w-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                                    {method.label}
                                </h3>
                                <p className="text-gray-600 mb-2">{method.description}</p>
                                <div className="flex items-center justify-between">
                                    <span className="font-semibold text-gray-800">{method.value}</span>
                                    <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* Social Links */}
                <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="text-center mb-12">
                        <h3 className="text-3xl font-bold text-gray-900 mb-4">Follow My Journey</h3>
                        <p className="text-gray-600">Connect with me on social platforms</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        {socialLinks.map((social, index) => (
                            <Card
                                key={social.label}
                                className="group cursor-pointer border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden"
                            >
                                <CardContent className="p-6">
                                    <a href={social.href} target="blank">
                                        <div className="flex items-center space-x-4">
                                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${social.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <social.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-bold text-gray-900 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-gray-900 group-hover:to-gray-700 group-hover:bg-clip-text transition-all duration-300">
                                                    {social.label}
                                                </h4>
                                                <p className="text-sm text-gray-600">{social.username}</p>
                                            </div>
                                            <ArrowUpRight className="h-5 w-5 text-gray-400 group-hover:text-gray-700 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                                        </div>
                                    </a>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className={`text-center mt-20 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
                        <div className="relative z-10">
                            <h3 className="text-4xl font-bold text-white mb-4">Ready to Start Something Amazing?</h3>
                            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                                Whether it's a new project, collaboration, or just a friendly chat about technology and design.
                            </p>
                            <Button
                                size="lg"
                                className="bg-white text-gray-900 hover:bg-gray-100 font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                            >
                                <Mail className="mr-2 h-5 w-5" />
                                Get In Touch
                                <ArrowUpRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}