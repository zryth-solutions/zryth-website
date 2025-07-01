"use client";

import { useEffect, useState } from "react";

export default function WhatsAppFloat() {
    const [isVisible, setIsVisible] = useState(false);
    const phoneNumber = "+91 9870661438";
    const message = "Hello! I'm interested in your services.";

    // Show button after scrolling down 300 pixels
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const handleWhatsAppClick = () => {
        const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, "")}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, "_blank");
    };

    return (
        <>
            {/* Custom CSS for ripple effects only */}
            <style jsx>{`
                @keyframes ripple-1 {
                    0% {
                        transform: scale(1);
                        opacity: 0.8;
                    }
                    100% {
                        transform: scale(1.8);
                        opacity: 0;
                    }
                }
                
                @keyframes ripple-2 {
                    0% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                    100% {
                        transform: scale(1.4);
                        opacity: 0;
                    }
                }
                
                .ripple-1 {
                    animation: ripple-1 3s infinite;
                    animation-delay: 0s;
                }
                
                .ripple-2 {
                    animation: ripple-2 3s infinite;
                    animation-delay: 1.5s;
                }
            `}</style>

            <div className="fixed bottom-24 right-8 z-[999]">
                {isVisible && (
                    <div className="group relative">
                        {/* Ripple effect rings */}
                        <div className="ripple-1 absolute inset-0 rounded-full bg-green-400"></div>
                        <div className="ripple-2 absolute inset-0 rounded-full bg-green-500"></div>

                        {/* Main WhatsApp button - smaller for mobile */}
                        <div
                            onClick={handleWhatsAppClick}
                            className="relative flex h-12 w-12 md:h-14 md:w-14 cursor-pointer items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition-all duration-300 ease-in-out hover:bg-green-600 hover:scale-110 hover:shadow-2xl active:scale-95"
                            aria-label="Contact us on WhatsApp"
                        >
                            {/* WhatsApp Icon SVG - smaller for mobile */}
                            <svg
                                className="h-6 w-6 md:h-8 md:w-8 transition-transform duration-200 group-hover:scale-110"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.488" />
                            </svg>
                        </div>

                        {/* Enhanced Tooltip */}
                        <div className="absolute bottom-full right-0 mb-3 hidden whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white opacity-0 shadow-lg transition-all duration-300 group-hover:block group-hover:opacity-100">
                            💬 Chat with us on WhatsApp!
                            <div className="absolute top-full right-4 transform border-4 border-transparent border-t-gray-900"></div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
} 