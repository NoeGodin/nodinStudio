"use client";

interface WBYAnimationProps {
  className?: string;
}

export default function WBYAnimation({ className }: WBYAnimationProps) {
  return (
    <div className={`h-full w-full ${className ?? ""}`}>
      <svg
        viewBox="0 0 180 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
        aria-hidden="true"
      >
        <style>{`
          .wby-body {
            animation: wby-float 3.2s ease-in-out infinite;
          }
          .wby-q {
            animation: wby-pulse 2s ease-in-out infinite;
            transform-origin: 90px 62px;
          }
          @keyframes wby-float {
            0%, 100% { transform: translateY(0px); }
            50%       { transform: translateY(-6px); }
          }
          @keyframes wby-pulse {
            0%, 100% { transform: scale(1);    opacity: 1; }
            50%       { transform: scale(1.14); opacity: 0.75; }
          }
        `}</style>

        <g className="wby-body">
          {/* Shoulders / bust */}
          <path
            d="M18 165 L18 140
               C18 112 46 100 72 96
               L72 86
               L108 86
               L108 96
               C134 100 162 112 162 140
               L162 165 Z"
            fill="#002FA7"
            fillOpacity="0.10"
            stroke="#002FA7"
            strokeWidth="1.5"
            strokeOpacity="0.28"
            strokeLinejoin="round"
          />

          {/* Neck */}
          <rect
            x="72" y="86" width="36" height="14"
            fill="#002FA7"
            fillOpacity="0.07"
          />

          {/* Head circle */}
          <circle
            cx="90" cy="62" r="32"
            fill="#E2EAFF"
            stroke="#002FA7"
            strokeWidth="1.5"
            strokeOpacity="0.35"
          />

          {/* Question mark — pulses independently */}
          <text
            className="wby-q"
            x="90"
            y="76"
            textAnchor="middle"
            fontSize="34"
            fontWeight="700"
            fill="#002FA7"
            fontFamily="Georgia, 'Times New Roman', serif"
          >
            ?
          </text>
        </g>
      </svg>
    </div>
  );
}
