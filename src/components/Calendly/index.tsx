"use client";

import Link from "next/link";
import CalendlyInline from "./CalendlyInline";
import { CallToActionLeftDecorative, CallToActionRightDecorative } from "../../assets/svg";

// Hero Section Component
const CallToActionHero = () => {
    return (
        <section
            className="relative z-10 overflow-hidden py-20 lg:py-[115px]"
            style={{
                background: 'radial-gradient(circle at 30% 40%, #3A4D73, #1A2B45)'
            }}
        >
            <div className="container mx-auto">
                <div className="relative overflow-hidden">
                    <div className="-mx-4 flex flex-wrap items-stretch">
                        <div className="w-full px-4">
                            <div className="mx-auto max-w-[570px] text-center">
                                <h2 className="mb-2.5 text-3xl font-bold text-white md:text-[38px] md:leading-[1.44]">
                                    <span>Ready to Transform Your Business?</span>
                                    <span className="text-3xl font-normal md:text-[40px]">
                                        {" "}
                                        Let&apos;s Build Together{" "}
                                    </span>
                                </h2>
                                <Link
                                    href="#calendly-booking"
                                    className="inline-block rounded-md border border-transparent bg-secondary px-7 py-3 text-base font-medium text-white transition hover:bg-[#0BB489]"
                                >
                                    Start Your Project
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <span className="absolute left-0 top-0">
                    <CallToActionLeftDecorative />
                </span>
                <span className="absolute bottom-0 right-0">
                    <CallToActionRightDecorative />
                </span>
            </div>
        </section>
    );
};

// Booking Section Component
interface BookingSectionProps {
    title?: string;
    description?: string;
    calendlyHeight?: string;
    className?: string;
}

const BookingSection: React.FC<BookingSectionProps> = ({
    title = "Schedule Your Consultation",
    description = "Book a 30-minute consultation to discuss your project requirements and explore how Zryth can help transform your business.",
    calendlyHeight = "700px",
    className = ""
}) => {
    return (
        <section id="calendly-booking" className={`bg-white py-12 lg:py-[60px] ${className}`}>
            <div className="container mx-auto">
                <div className="mx-auto max-w-[700px] text-center mb-12">
                    <h3 className="mb-4 text-3xl font-bold text-dark md:text-[40px] md:leading-[1.2]">
                        {title}
                    </h3>
                    <p className="text-base leading-[1.5] text-body-color">
                        {description}
                    </p>
                </div>
                <div className="mx-auto max-w-[1200px]">
                    <CalendlyInline
                        height={calendlyHeight}
                        className=""
                    />
                </div>
            </div>
        </section>
    );
};

// Main CallToAction Component (combines hero and booking)
const CallToAction = () => {
    return (
        <>
            <CallToActionHero />
            <BookingSection />
        </>
    );
};

// Export all components
export default CallToAction;
export { CalendlyInline, CallToActionHero, BookingSection }; 