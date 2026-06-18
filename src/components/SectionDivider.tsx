import React from 'react';

interface SectionDividerProps {
  inverse?: boolean;
  className?: string;
}

export default function SectionDivider({ inverse = false, className = '' }: SectionDividerProps) {
  return (
    <div className={`mx-auto ${className}`}>
      <div className={`section-rule ${inverse ? 'opacity-80' : 'opacity-100'}`} />
    </div>
  );
}
