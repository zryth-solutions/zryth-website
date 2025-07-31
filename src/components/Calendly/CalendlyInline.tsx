"use client";

import React from 'react';
import { InlineWidget } from 'react-calendly';

interface CalendlyInlineProps {
    url?: string;
    height?: string;
    className?: string;
}

const CalendlyInline: React.FC<CalendlyInlineProps> = ({
    url = 'https://calendly.com/zrythsolutions/30min?month=2025-07',
    height = '700px',
    className = ''
}) => {
    return (
        <div className={`calendly-container ${className}`}>
            <div className="calendly-wrapper" style={{ height }}>
                <InlineWidget
                    url={url}
                    styles={{ height, width: '100%' }}
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
    );
};

export default CalendlyInline; 