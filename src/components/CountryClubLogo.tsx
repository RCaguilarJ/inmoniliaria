/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CountryClubLogoProps {
  className?: string;
  showText?: boolean;
}

export default function CountryClubLogo({ className = 'h-32 w-32', showText = true }: CountryClubLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <svg
        viewBox="0 0 400 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full drop-shadow-lg"
      >
        {/* Outer deep jungle green/teal pebble */}
        <path
          d="M210 82C290 85 360 170 345 240C330 305 210 320 150 295C90 270 95 180 130 115C155 80 185 81 210 82Z"
          fill="#005A44"
        />

        {/* Middle medium teal/forest green pebble, shifted slightly top-right */}
        <path
          d="M213 125C268 130 320 188 310 238C300 282 205 295 165 273C125 251 130 192 155 150C173 123 193 124 213 125Z"
          fill="#1F8B74"
        />

        {/* Inner light mint/aqua-teal core pebble */}
        <path
          d="M212 165C246 168 277 205 269 240C261 268 200 275 178 253C156 231 162 195 178 178C191 165 201 164 212 165Z"
          fill="#8CC5C3"
        />

        {showText && (
          <>
            {/* "CONDOMINIOS" Subtitle */}
            <text
              x="200"
              y="350"
              textAnchor="middle"
              fill="#005A44"
              style={{
                fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                fontSize: '25px',
                fontWeight: 300,
                letterSpacing: '10px',
                textTransform: 'uppercase',
                opacity: 0.95
              }}
            >
              CONDOMINIOS
            </text>

            {/* "country club" Title */}
            <text
              x="200"
              y="400"
              textAnchor="middle"
              fill="#005A44"
              style={{
                fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                fontSize: '44px',
                fontWeight: 800,
                letterSpacing: '-1.5px',
                wordSpacing: '-2px'
              }}
            >
              country club
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
