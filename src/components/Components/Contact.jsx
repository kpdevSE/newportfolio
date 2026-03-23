import { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  MapPin,
  ArrowUpRight,
  Globe,
  Calendar,
  MessageCircle,
  Instagram,
  Code2,
  Terminal,
  Cpu,
  HardDrive,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GlitchText, ChromaticAberration, RGBSplitText } from "../animations/HackerAnimations";

export default function ContactSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [typedText, setTypedText] = useState("");
  const [currentContactIndex, setCurrentContactIndex] = useState(0);
  const [terminalLines, setTerminalLines] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const [isTyping, setIsTyping] = useState(true);

  const contactCommands = [
    "root@kpdev:~$ ping contact.server",
    "> PING successful - Contact server online",
    "root@kpdev:~$ netstat -an | grep :443",
    "> Secure connections available",
    "root@kpdev:~$ ./establish_connection.sh",
    "> Ready to receive communications...",
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (currentContactIndex < contactCommands.length) {
      const currentCommand = contactCommands[currentContactIndex];
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
            setCurrentContactIndex(prev => prev + 1);
          }, 1000);
        }
      }, 80);

      return () => clearInterval(typeInterval);
    } else {
      setIsTyping(false);
    }
  }, [currentContactIndex]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "kanishkapasindu6@gmail.com",
      href: "kanishkapasindu6@gmail.com",
      description: "Send me an email",
      gradient: "from-blue-500 to-purple-600",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "104/25,Medemulla,Minuwangoda,Gampaha",
      href: "#",
      description: "Based in the Bay Area",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: Calendar,
      label: "Schedule",
      value: "Book a call",
      href: "#",
      description: "Let's discuss your project",
      gradient: "from-orange-500 to-red-600",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/kpdevSE",
      username: "kpdevSE",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kanishka-pasindu-b976a8252/",
      username: "Kanishka Pasindu",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: Instagram,
      label: "Instargram",
      href: "https://www.instagram.com/kanishka_pasindu?igsh=MXVpcHRpcXdtODk%3D&utm_source=qr",
      username: "_kanishka_pasindu_",
      gradient: "from-purple-600 to-indigo-800",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/stephan.wick.54?mibextid=wwXIfr",
      username: "kanishak paisndu",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      icon: Globe,
      label: "ZENTRIX",
      href: "https://zentrix-solution.vercel.app/",
      username: "Company Website",
      gradient: "from-pink-600 to-pink-800",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-white text-black font-mono py-20 px-4 relative overflow-hidden"
    >
      {/* Technical grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-30"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-gray-200/50 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-300/50 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gray-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Terminal Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white border-2 border-black rounded-lg p-6 mb-8 shadow-lg shadow-gray-500/20 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-black text-sm ml-4">terminal@kpdev-contact</span>
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
            <GlitchText intensity="high">
              <ChromaticAberration>
                CONNECT.PROTOCOL
              </ChromaticAberration>
            </GlitchText>
          </h2>
          <div className="w-24 h-0.5 bg-black mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            <span className="text-gray-500">//</span> Establishing secure communication channels for collaboration...
          </p>
        </div>

        {/* Connection Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "RESPONSE_TIME", value: "< 24H", icon: <Cpu className="h-6 w-6" /> },
            { label: "AVAILABILITY", value: "24/7", icon: <HardDrive className="h-6 w-6" /> },
            { label: "CHANNELS", value: "05", icon: <Terminal className="h-6 w-6" /> },
            { label: "STATUS", value: "ONLINE", icon: <Wifi className="h-6 w-6" /> },
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

        {/* Contact Methods */}
        <div
          className={`grid md:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {contactMethods.map((method, index) => (
            <Card
              key={method.label}
              className={`group cursor-pointer border-2 border-black shadow-lg hover:shadow-2xl hover:shadow-gray-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 bg-white backdrop-blur-sm overflow-hidden ${
                hoveredCard === index ? "scale-105 border-black" : ""
              }`}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-black"></div>
              <CardContent className="p-8 relative">
                {/* Command Line */}
                <div className="mb-4 p-3 bg-gray-100 border border-gray-300 rounded text-sm">
                  <span className="text-gray-700">$</span> <span className="text-black">./connect --method={method.label.toLowerCase()}</span>
                </div>
                
                <div
                  className="w-16 h-16 rounded-xl bg-gray-100 border-2 border-black text-black flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300"
                >
                  <method.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-2 group-hover:text-gray-700 transition-all duration-300">
                  {method.label}
                </h3>
                <p className="text-gray-600 mb-2 text-sm">
                  {method.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-gray-700">
                    {method.value}
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Social Links */}
        <div
          className={`transition-all duration-1000 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-black mb-4">
              SOCIAL_NETWORKS.CONNECT
            </h3>
            <p className="text-gray-700">
              <span className="text-gray-500">//</span> Multiple communication protocols available
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <Card
                key={social.label}
                className="group cursor-pointer border-2 border-black shadow-lg hover:shadow-xl hover:shadow-gray-500/20 transition-all duration-300 bg-white backdrop-blur-sm overflow-hidden"
              >
                <CardContent className="p-6">
                  <a href={social.href} target="blank">
                    <div className="flex items-center space-x-4">
                      <div
                        className="w-12 h-12 rounded-xl bg-gray-100 border-2 border-black text-black flex items-center justify-center group-hover:scale-110 group-hover:bg-black group-hover:text-white transition-all duration-300"
                      >
                        <social.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-black group-hover:text-gray-700 transition-all duration-300">
                          {social.label}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {social.username}
                        </p>
                      </div>
                      <ArrowUpRight className="h-5 w-5 text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                    </div>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-600 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-white border-2 border-black rounded-2xl p-12 shadow-2xl relative overflow-hidden backdrop-blur-sm">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-black"></div>
            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-black mb-4">
                INITIALIZE_COLLABORATION.EXE
              </h3>
              <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
                <span className="text-gray-500">//</span> Ready to execute innovative projects and deploy cutting-edge solutions together.
              </p>
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Mail className="mr-2 h-5 w-5" />
                ./send_message.sh
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Terminal */}
        <div className="flex justify-center mt-16">
          <div className="bg-white border-2 border-black rounded-lg p-4 shadow-lg shadow-gray-500/20">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
              <span className="text-black text-sm">
                root@kpdev:~$ echo "Let's build something amazing together"
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
  );
}
