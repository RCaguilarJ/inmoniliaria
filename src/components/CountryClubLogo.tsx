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
        viewBox={showText ? '0 0 760 420' : '0 0 220 220'}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-full w-full"
      >
        {!showText && (
          <>
            <path
              d="M54 28H166C172.627 28 178 33.3726 178 40V104C178 147.078 143.078 182 100 182C56.9218 182 22 147.078 22 104V60C22 42.3269 36.3269 28 54 28Z"
              fill="#FFFFFF"
            />
            <path
              d="M123 42C117.5 60.5 110 68 92 73.5C109.5 79 117 86.5 123 105C128.5 86.5 136 79 154 73.5C136.5 68 129 60.5 123 42Z"
              fill="#5B7B92"
            />
          </>
        )}

        {showText && (
          <>
            <path
              d="M324 34H436C442.627 34 448 39.3726 448 46V110C448 153.078 413.078 188 370 188C326.922 188 292 153.078 292 110V66C292 48.3269 306.327 34 324 34Z"
              fill="#FFFFFF"
            />
            <path
              d="M393 48C387.5 66.5 380 74 362 79.5C379.5 85 387 92.5 393 111C398.5 92.5 406 85 424 79.5C406.5 74 399 66.5 393 48Z"
              fill="#5B7B92"
            />

            <text
              x="380"
              y="292"
              textAnchor="middle"
              fill="#FFFFFF"
              style={{
                fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                fontSize: '96px',
                fontWeight: 300,
                letterSpacing: '8px'
              }}
            >
              LUXENT
            </text>

            <text
              x="380"
              y="360"
              textAnchor="middle"
              fill="#FFFFFF"
              style={{
                fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
                fontSize: '34px',
                fontWeight: 400,
                letterSpacing: '18px'
              }}
            >
              PROPERTIES
            </text>
          </>
        )}
      </svg>
    </div>
  );
}
