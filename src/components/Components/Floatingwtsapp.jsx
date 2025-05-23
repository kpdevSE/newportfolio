import { MessageCircle } from "lucide-react";

export default function FloatingWhatsAppButton()
{
    return (
        <a
            href="https://wa.me/94715644565"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-110 group"
        >
            <MessageCircle className="w-6 h-6 group-hover:rotate-12 transition-transform" />
            <span className="sr-only">Chat on WhatsApp</span>
        </a>
    );
}
