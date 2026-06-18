import React from 'react';

interface PageHeroProps {
  image: string;
  title: string;
  subtitle: string;
  eyebrow?: string;
  heightClassName?: string;
  align?: 'center' | 'left';
  children?: React.ReactNode;
}

export default function PageHero({
  image,
  title,
  subtitle,
  eyebrow,
  heightClassName = 'min-h-[320px] md:min-h-[380px]',
  align = 'center',
  children
}: PageHeroProps) {
  const isCentered = align === 'center';

  return (
    <section className={`relative isolate overflow-hidden px-6 ${heightClassName}`}>
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-[#1f2933]/70" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/20 to-[#1f2933]/75" />

      <div className={`relative z-10 mx-auto flex h-full max-w-7xl items-center ${isCentered ? 'justify-center text-center' : 'justify-start text-left'}`}>
        <div className={`space-y-3 ${isCentered ? 'max-w-3xl' : 'max-w-2xl'}`}>
          {eyebrow && (
            <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.32em] text-[#DCE7EF] backdrop-blur-sm">
              {eyebrow}
            </span>
          )}
          <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {title}
          </h1>
          <p className={`text-sm leading-relaxed text-stone-200 sm:text-base ${isCentered ? 'mx-auto max-w-2xl' : 'max-w-xl'}`}>
            {subtitle}
          </p>
          {children}
        </div>
      </div>
    </section>
  );
}
