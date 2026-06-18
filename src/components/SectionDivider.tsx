import React from 'react';
import { Sparkles } from 'lucide-react';

interface SectionDividerProps {
  inverse?: boolean;
  className?: string;
}

export default function SectionDivider({ inverse = false, className = '' }: SectionDividerProps) {
  return (
    <div className={`mx-auto flex max-w-xl items-center gap-4 ${className}`}>
      <div className={`h-px flex-1 ${inverse ? 'bg-[#DCE7EF]/35' : 'bg-[#6F899D]/30'}`} />
      <span className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${inverse ? 'border-[#DCE7EF]/30 bg-white/5 text-[#DCE7EF]' : 'border-[#6F899D]/20 bg-[#6F899D]/8 text-[#6F899D]'}`}>
        <Sparkles className="h-4 w-4" />
      </span>
      <div className={`h-px flex-1 ${inverse ? 'bg-[#DCE7EF]/35' : 'bg-[#6F899D]/30'}`} />
    </div>
  );
}
