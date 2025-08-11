import React from 'react';

interface IconProps {
    width?: number;
    height?: number;
    className?: string;
}

// Email Icon
export const EmailIcon: React.FC<IconProps> = ({
    width = 32,
    height = 32,
    className = ""
}) => (
    <svg width={width} height={height} viewBox="0 0 32 32" className={className}>
        <defs>
            <linearGradient id="email-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A4D73" />
                <stop offset="100%" stopColor="#1A2B45" />
            </linearGradient>
        </defs>
        <path
            d="M28 7H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h24c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 4l-12 7.5L4 11v-2l12 7.5L28 9v2z"
            fill="url(#email-gradient)"
        />
    </svg>
);

// Phone Icon
export const PhoneIcon: React.FC<IconProps> = ({
    width = 32,
    height = 32,
    className = ""
}) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 32 32"
        className={className}
    >
        <defs>
            <linearGradient id="phone-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A4D73" />
                <stop offset="100%" stopColor="#1A2B45" />
            </linearGradient>
        </defs>
        <path
            d="M25.64 20.347l-3.593-1.535c-.694-.297-1.584-.049-2.063.541l-1.547 1.898c-2.87-1.02-5.254-3.404-6.273-6.273l1.898-1.547c.59-.479.838-1.369.541-2.063L12.653 7.36c-.317-.742-1.098-1.148-1.888-.98l-3.051.649c-.895.191-1.714 1.089-1.714 2.019 0 9.389 7.611 17 17 17 .93 0 1.828-.819 2.019-1.714l.649-3.051c.168-.79-.238-1.571-.98-1.888z"
            fill="url(#phone-gradient)"
        />
    </svg>
);

// LinkedIn Icon
export const LinkedInIcon: React.FC<IconProps> = ({
    width = 32,
    height = 32,
    className = ""
}) => (
    <svg width={width} height={height} viewBox="0 0 32 32" className={className}>
        <defs>
            <linearGradient id="linkedin-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3A4D73" />
                <stop offset="100%" stopColor="#1A2B45" />
            </linearGradient>
        </defs>
        <path
            d="M27.26 3.74H4.74C3.23 3.74 2 4.97 2 6.48v19.04c0 1.51 1.23 2.74 2.74 2.74h22.52c1.51 0 2.74-1.23 2.74-2.74V6.48c0-1.51-1.23-2.74-2.74-2.74zM10.28 24.3H6.15V12.08h4.13v12.22zm-2.07-13.93c-1.32 0-2.39-1.07-2.39-2.39s1.07-2.39 2.39-2.39 2.39 1.07 2.39 2.39-1.07 2.39-2.39 2.39zm18.09 13.93h-4.13v-5.95c0-1.54-.03-3.52-2.14-3.52-2.15 0-2.48 1.68-2.48 3.41v6.06h-4.13V12.08h3.96v1.67h.06c.55-1.04 1.9-2.14 3.91-2.14 4.18 0 4.95 2.75 4.95 6.32v6.37z"
            fill="url(#linkedin-gradient)"
        />
    </svg>
);

// Success Check Icon
export const CheckIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

// Error Warning Icon
export const ErrorIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "" }) => (
    <svg
        className={className}
        width={width}
        height={height}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

// Loading Spinner Icon
export const LoadingSpinner: React.FC<IconProps> = ({ width = 24, height = 24, className = "animate-spin" }) => (
    <svg
        className={className}
        width={width}
        height={height}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
    >
        <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
        />
        <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
    </svg>
);

// Checkmark Icon (used in Hero "Learn More" button)
export const CheckmarkIcon: React.FC<IconProps> = ({ width = 24, height = 24, className = "fill-current" }) => (
    <svg
        className={className}
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
    </svg>
); 