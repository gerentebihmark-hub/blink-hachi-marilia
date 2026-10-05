import React from 'react';

export const BakeryPattern = ({ className }: { className?: string }) => {
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 overflow-hidden ${className || ''}`}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="bakery-pattern" x="0" y="0" width="160" height="240" patternUnits="userSpaceOnUse">
            <g stroke="rgba(255,255,255,0.14)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
              
              {/* Background structural grid */}
              <path d="M 0,0 H 160 M 0,80 H 160 M 0,160 H 160 M 0,240 H 160" strokeOpacity="0.6" />
              <path d="M 0,0 V 240 M 80,0 V 240 M 160,0 V 240" strokeOpacity="0.6" />
              
              {/* Tile 1 (0,0): Geometric Star Anise */}
              <g transform="translate(0,0)">
                <path d="M 0,0 L 80,80 M 0,80 L 80,0" strokeOpacity="0.4" />
                <path d="M 40,15 L 48,32 L 65,40 L 48,48 L 40,65 L 32,48 L 15,40 L 32,32 Z" strokeWidth="1.5" />
                <path d="M 40,25 L 45,35 L 55,40 L 45,45 L 40,55 L 35,45 L 25,40 L 35,35 Z" />
                <circle cx="40" cy="40" r="4" />
                {/* Corner arcs */}
                <path d="M 0,20 A 20,20 0 0,0 20,0 M 60,0 A 20,20 0 0,0 80,20 M 60,80 A 20,20 0 0,1 80,60 M 0,60 A 20,20 0 0,1 20,80" strokeOpacity="0.5" />
              </g>

              {/* Tile 2 (80,0): Heart in Cup */}
              <g transform="translate(80,0)">
                <circle cx="40" cy="40" r="30" strokeDasharray="3 3" strokeOpacity="0.8"/>
                <path d="M 20,48 A 20,20 0 0,0 60,48 Z" strokeWidth="1.5" />
                <path d="M 15,48 H 65" />
                {/* Heart */}
                <path d="M 40,25 A 8,8 0 0,1 55,25 C 55,35 40,42 40,42 C 40,42 25,35 25,25 A 8,8 0 0,1 40,25 Z" strokeWidth="1.5" />
                {/* Handle */}
                <path d="M 60,40 C 68,40 68,48 60,48" strokeWidth="1.5" />
                <path d="M 0,40 H 10 M 70,40 H 80 M 40,0 V 10 M 40,70 V 80" strokeOpacity="0.6"/>
              </g>

              {/* Tile 3 (0,80): Coffee Bean & Leaves */}
              <g transform="translate(0,80)">
                <rect x="15" y="15" width="50" height="50" rx="25" strokeWidth="1.5" />
                <rect x="23" y="23" width="34" height="34" rx="17" strokeOpacity="0.6" />
                {/* Inner Bean Oval */}
                <ellipse cx="40" cy="40" rx="8" ry="12" transform="rotate(45 40 40)" strokeWidth="1.5" />
                {/* S-curve line (middle of bean) */}
                <path d="M 32,48 C 40,46 41,34 48,32" strokeWidth="1.5" />
                {/* Corner hatching & arcs */}
                <path d="M 0,0 L 20,20 M 80,0 L 60,20 M 0,80 L 20,60 M 80,80 L 60,60" fill="none" strokeOpacity="0.5"/>
              </g>

              {/* Tile 4 (80,80): Moka Pot */}
              <g transform="translate(80,80)">
                <path d="M 0,0 L 80,80 M 0,80 L 80,0" strokeOpacity="0.3" />
                <polygon points="40,15 52,40 28,40" strokeWidth="1.5" />
                <rect x="28" y="40" width="24" height="4" strokeWidth="1.5" />
                <polygon points="28,44 52,44 60,72 20,72" strokeWidth="1.5" />
                {/* Handle */}
                <path d="M 52,25 L 64,25 L 64,55 L 56,48" strokeWidth="1.5" />
                {/* Spout */}
                <polygon points="28,24 16,28 25,35" strokeWidth="1.5" />
                <circle cx="40" cy="12" r="3" strokeWidth="1.5" />
                <path d="M 0,40 H 80 M 40,0 V 80" strokeOpacity="0.2" />
              </g>

              {/* Tile 5 (0,160): Pour Over / Filter Coffee */}
              <g transform="translate(0,160)">
                <path d="M 0,40 A 40,40 0 0,0 40,0 M 80,40 A 40,40 0 0,1 40,80" strokeWidth="1.5" strokeOpacity="0.8" />
                {/* Filter */}
                <polygon points="22,18 58,18 45,45 35,45" strokeWidth="1.5" />
                {/* Carafe */}
                <polygon points="35,45 45,45 62,75 18,75" strokeWidth="1.5" />
                <path d="M 22,25 H 58 M 28,35 H 52 M 26,60 H 54 M 23,68 H 57" strokeOpacity="0.5" />
                {/* Handle */}
                <path d="M 62,60 C 72,60 72,75 62,75" strokeWidth="1.5" />
                {/* Droplets */}
                <circle cx="40" cy="55" r="1.5" fill="rgba(255,255,255,0.14)" />
                <circle cx="40" cy="65" r="1.5" fill="rgba(255,255,255,0.14)" />
              </g>

              {/* Tile 6 (80,160): Geometric French Press / Tea */}
              <g transform="translate(80,160)">
                <rect x="15" y="15" width="50" height="50" transform="rotate(45 40 40)" strokeDasharray="2 4" strokeOpacity="0.7"/>
                <path d="M 40,0 V 80 M 0,40 H 80" strokeOpacity="0.4" />
                <rect x="25" y="25" width="30" height="40" rx="4" strokeWidth="1.5" />
                {/* Top Lid */}
                <rect x="22" y="20" width="36" height="5" rx="2" strokeWidth="1.5" />
                <path d="M 40,20 V 10 M 35,10 H 45" strokeWidth="1.5" />
                {/* Plunger down inside */}
                <path d="M 40,25 V 50 M 25,50 H 55 M 25,60 H 55" strokeWidth="1.5" strokeOpacity="0.7" />
                 {/* Handle */}
                <path d="M 55,35 H 65 V 55 H 55" strokeWidth="1.5" />
                {/* Small geometric circles */}
                <circle cx="15" cy="15" r="2.5" />
                <circle cx="65" cy="15" r="2.5" />
                <circle cx="15" cy="65" r="2.5" />
                <circle cx="65" cy="65" r="2.5" />
              </g>

            </g>
          </pattern>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#bakery-pattern)" />
      </svg>
    </div>
  );
};
