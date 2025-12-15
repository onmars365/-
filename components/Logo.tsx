import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <svg
      viewBox="0 0 160 50"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-label="朗坤"
    >
      <g transform="translate(0, 0)">
        {/* Orbit Ring - Tilted Ellipse */}
        <ellipse
          cx="30"
          cy="25"
          rx="28"
          ry="12"
          transform="rotate(-20 30 25)"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        
        {/* Stars */}
        <path
          d="M18 10 L20 6 L22 10 L26 11 L22 13 L20 17 L18 13 L14 11 Z"
          fill="currentColor"
        />
        <path
          d="M28 8 L29 6 L30 8 L32 8.5 L30 9 L29 11 L28 9 L26 8.5 Z"
          fill="currentColor"
        />

        {/* LK Text */}
        <text
          x="14"
          y="34"
          fontFamily="'Times New Roman', serif"
          fontWeight="bold"
          fontSize="24"
        >
          LK
        </text>
      </g>

      {/* Langkun Text */}
      <text
        x="70"
        y="38"
        fontFamily="'Noto Serif SC', 'Songti SC', serif"
        fontWeight="900"
        fontSize="32"
      >
        朗坤
      </text>
    </svg>
  );
};

export default Logo;