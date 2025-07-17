"use client";

import React from 'react';
import { InlineWidget } from 'react-calendly';

interface CalendlyInlineProps {
    url?: string;
    height?: string;
    className?: string;
    width?: string;
}

const CalendlyInline: React.FC<CalendlyInlineProps> = ({
    url = 'https://calendly.com/zrythsolutions/30min?month=2025-07',
    height = '200px', // Reduced height from 700px
    width = '100%',
    className = ''
}) => {
    return (
        <div id="calendly-hero">
            <style jsx global>{`
                .calendly-container {
                    width: 100%;
                    max-width: 1200px;
                    margin: 0 auto;
                    overflow: hidden;
                    border: none;
                    border-radius: 0px;
                }
                
                .calendly-wrapper {
                    width: 100%;
                    overflow: hidden;
                    scrollbar-width: none; /* Firefox */
                    -ms-overflow-style: none; /* Internet Explorer and Edge */
                }
                
                .calendly-wrapper::-webkit-scrollbar {
                    display: none; /* Hide scrollbar for Chrome, Safari and Opera */
                }
                
                .calendly-wrapper iframe {
                    border: none !important;
                    outline: none !important;
                    box-shadow: none !important;
                }
                
                /* Additional Calendly specific overrides */
                .calendly-inline-widget {
                    border: none !important;
                    box-shadow: none !important;
                }
                
                .calendly-inline-widget iframe {
                    border: none !important;
                    box-shadow: none !important;
                }
            `}</style>

            <div className={`calendly-container ${className}`}>
                <div
                    className="calendly-wrapper"
                    style={{ height: height }}
                >
                    <InlineWidget
                        url={url}
                        styles={{
                            height: height,
                            width: '100%',
                            border: 'none',
                            outline: 'none'
                        }}
                        pageSettings={{
                            backgroundColor: 'ffffff',
                            hideEventTypeDetails: false,
                            hideLandingPageDetails: false,
                            primaryColor: '0BB489',
                            textColor: '4d5055'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CalendlyInline; 