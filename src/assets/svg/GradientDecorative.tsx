import React from 'react';

interface GradientDecorativeProps {
    width?: number;
    height?: number;
    gradientId?: string;
    stops?: Array<{ color: string; opacity?: number; offset?: string }>;
    className?: string;
}

const GradientDecorative: React.FC<GradientDecorativeProps> = ({
    width = 106,
    height = 144,
    gradientId = "decorative_gradient",
    stops = [
        { color: "white", offset: "0" },
        { color: "white", opacity: 0, offset: "1" }
    ],
    className = ""
}) => {
    return (
        <svg
            width={width}
            height={height}
            viewBox={`0 0 ${width} ${height}`}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <rect
                opacity="0.1"
                x="-67"
                y="47.127"
                width="113.378"
                height="131.304"
                transform="rotate(-42.8643 -67 47.127)"
                fill={`url(#${gradientId})`}
            />
            <defs>
                <linearGradient
                    id={gradientId}
                    x1="-10.3111"
                    y1="47.127"
                    x2="-10.3111"
                    y2="178.431"
                    gradientUnits="userSpaceOnUse"
                >
                    {stops.map((stop, index) => (
                        <stop
                            key={index}
                            stopColor={stop.color}
                            stopOpacity={stop.opacity}
                            offset={stop.offset}
                        />
                    ))}
                </linearGradient>
            </defs>
        </svg>
    );
};

export default GradientDecorative; 