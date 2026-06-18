/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronRight, Inbox, Landmark } from 'lucide-react';
import CountryClubLogo from './CountryClubLogo';

interface FooterProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Footer({ activeTab, setActiveTab }: FooterProps) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
    }, 2000);
  };

  const handleFooterLinkClick = (tabId: string) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full border-t border-[#005A44]/15 bg-[#00120e] text-[#8CC5C3]/80">
      <div className="border-b border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h4 className="font-heading text-lg font-bold tracking-wider text-white uppercase">LUXENT</h4>
            <p className="text-sm text-stone-300">Comercialización de propiedades exclusivas con enfoque premium, digital y personalizado.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <span className="rounded border border-[#1F8B74]/30 bg-[#1F8B74]/20 px-3 py-1.5 text-white">• Segmento Premium</span>
            <span className="rounded border border-[#8CC5C3]/20 bg-[#8CC5C3]/10 px-3 py-1.5 text-[#8CC5C3]">• Experiencia Digital</span>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-lg border border-white/10 bg-[#001c15] p-1">
              <CountryClubLogo className="h-full w-full" showText={false} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-extrabold tracking-wider text-white">LUXENT</span>
              <span className="font-mono text-[7px] tracking-widest text-[#8CC5C3] uppercase">PREMIUM PROPERTIES</span>
            </div>
          </div>
          <p className="pr-4 text-xs font-light leading-relaxed text-stone-300">
            Especialistas en comercialización de propiedades exclusivas, marketing inmobiliario y herramientas digitales para ventas y postventa.
          </p>
          <div className="flex items-center gap-1.5 font-mono text-[10px] text-stone-400">
            <Landmark className="h-3.5 w-3.5 text-[#8CC5C3]" />
            <span>Asesoría premium • marketing • operación digital</span>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="font-heading text-xs font-bold tracking-widest text-[#8CC5C3] uppercase">Navegación</h5>
          <nav className="flex flex-col gap-2.5 text-xs text-stone-300">
            <button onClick={() => handleFooterLinkClick('inicio')} className="flex items-center gap-1 text-left transition-colors hover:text-[#8CC5C3]" id="btn-foot-link-inicio">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Inicio
            </button>
            <button onClick={() => handleFooterLinkClick('nosotros')} className="flex items-center gap-1 text-left transition-colors hover:text-[#8CC5C3]" id="btn-foot-link-nosotros">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Nosotros
            </button>
            <button onClick={() => handleFooterLinkClick('desarrollos')} className="flex items-center gap-1 text-left transition-colors hover:text-[#8CC5C3]" id="btn-foot-link-desarrollos">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Propiedades
            </button>
            <button onClick={() => handleFooterLinkClick('alianzas')} className="flex items-center gap-1 text-left transition-colors hover:text-[#8CC5C3]" id="btn-foot-link-alianzas">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Servicios
            </button>
            <button onClick={() => handleFooterLinkClick('blog')} className="flex items-center gap-1 text-left transition-colors hover:text-[#8CC5C3]" id="btn-foot-link-blog">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Insights
            </button>
          </nav>
        </div>

        <div className="space-y-4 text-xs text-stone-350">
          <h5 className="font-heading text-xs font-bold tracking-widest text-[#8CC5C3] uppercase">Contacto</h5>
          <div className="space-y-3.5 font-light leading-relaxed text-stone-300">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#1F8B74]" />
              <span>Av. Américas 1930-PB, Country Club, 44668, Guadalajara, Jalisco.</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[#1F8B74]" />
              <span>33 1142 9932</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-[#1F8B74]" />
              <span>gerencia@luxent.properties</span>
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <h5 className="font-heading text-xs font-bold tracking-widest text-[#8CC5C3] uppercase">Boletín Luxent</h5>
          <p className="text-xs font-light leading-relaxed text-stone-300">
            Suscríbete para recibir novedades de mercado, propiedades premium y herramientas de comercialización.
          </p>

          {subscribed ? (
            <div className="rounded-lg border border-[#1F8B74]/30 bg-[#1F8B74]/20 p-3 text-center text-xs font-semibold text-white">
              ✔ Correo suscrito con éxito
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="correo@dominio.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-lg border border-white/10 bg-[#001c15] p-3 pr-10 text-xs text-white placeholder-stone-500 outline-none focus:border-[#1F8B74]"
                  id="foot-newsletter"
                />
                <Inbox className="absolute right-3 top-3.5 h-4 w-4 text-stone-400" />
              </div>
              <button
                type="submit"
                id="btn-foot-newsletter"
                className="w-full rounded-lg bg-[#1F8B74] py-2.5 text-center text-xs font-bold tracking-wider text-white uppercase transition-all hover:bg-[#8CC5C3] hover:text-[#00120e]"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </div>

      <div className="border-t border-white/10 bg-[#000a08]/80 px-6 py-6 font-mono text-[10px] text-stone-400">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Luxent. Todos los derechos reservados. La información y los materiales visuales están sujetos a actualización comercial.</p>
          <div className="flex gap-4">
            <a href="#privacidad" className="hover:text-[#8CC5C3]">Aviso de Privacidad</a>
            <span>•</span>
            <a href="#terminos" className="hover:text-[#8CC5C3]">Términos y Condiciones</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
