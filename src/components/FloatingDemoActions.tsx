import React from 'react';
import {
  CaretUp,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  TiktokLogo,
  WhatsappLogo,
  YoutubeLogo,
} from '@phosphor-icons/react';

const SOCIAL_ITEMS = [
  { id: 'linkedin', icon: LinkedinLogo, label: 'LinkedIn demo' },
  { id: 'facebook', icon: FacebookLogo, label: 'Facebook demo' },
  { id: 'instagram', icon: InstagramLogo, label: 'Instagram demo' },
  { id: 'youtube', icon: YoutubeLogo, label: 'YouTube demo' },
  { id: 'tiktok', icon: TiktokLogo, label: 'TikTok demo' },
] as const;

export default function FloatingDemoActions() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <aside className="pointer-events-none fixed left-8 top-1/2 z-40 hidden -translate-y-1/2 xl:flex xl:flex-col xl:items-center xl:gap-4">
        <span className="h-24 w-px bg-[#C9A96E]/55" />

        <div className="pointer-events-auto flex flex-col gap-3">
          {SOCIAL_ITEMS.map(({ id, icon: Icon, label }) => (
            <button
              key={id}
              type="button"
              aria-label={label}
              className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#C9A96E]/45 bg-[#1f1f1f]/72 text-[#C9A96E] backdrop-blur-sm transition-all hover:border-[#C9A96E]/70 hover:bg-[#23211f]/92"
            >
              <Icon size={22} weight="regular" />
            </button>
          ))}
        </div>

        <span className="h-24 w-px bg-[#C9A96E]/55" />
      </aside>

      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
        <button
          type="button"
          aria-label="Volver arriba"
          onClick={handleScrollTop}
          className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f1f1f]/88 text-white shadow-[0_18px_32px_rgba(0,0,0,0.24)] backdrop-blur-sm transition-all hover:bg-[#292929]"
        >
          <CaretUp size={24} weight="bold" />
        </button>

        <button
          type="button"
          aria-label="WhatsApp demo"
          className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#E6C07A]/55 bg-[#E6C07A] text-white shadow-[0_18px_32px_rgba(180,140,80,0.28)] transition-all hover:bg-[#ddb86e]"
        >
          <WhatsappLogo size={26} weight="regular" />
        </button>
      </div>
    </>
  );
}
