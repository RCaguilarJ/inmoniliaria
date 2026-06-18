/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, ChevronRight, Inbox, Landmark } from 'lucide-react';
import { motion } from 'motion/react';
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
      {/* Top Banner section */}
      <div className="border-b border-white/10 px-6 py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-1">
            <h4 className="font-heading text-lg font-bold text-white uppercase tracking-wider">GRUPO VEQ</h4>
            <p className="text-sm text-stone-300">Creamos comunidades que mejoran la calidad de vida de las personas.</p>
          </div>
          <div className="flex flex-wrap gap-4 text-xs font-mono">
            <span className="rounded bg-[#1F8B74]/20 border border-[#1F8B74]/30 px-3 py-1.5 text-white">• 28 Desarrollos Concluidos</span>
            <span className="rounded bg-[#8CC5C3]/10 border border-[#8CC5C3]/20 px-3 py-1.5 text-[#8CC5C3]">• Presencia Multiciudad</span>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        
        {/* Col 1: About / Brand */}
        <div className="space-y-5">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 bg-[#001c15] border border-white/10 rounded-lg p-1">
              <CountryClubLogo className="h-full w-full" showText={false} />
            </div>
            <div className="flex flex-col">
              <span className="font-heading text-sm font-extrabold tracking-wider text-white">
                COUNTRY CLUB
              </span>
              <span className="font-mono text-[7px] tracking-widest text-[#8CC5C3] uppercase">
                CONDOMINIOS • GRUPO VEQ
              </span>
            </div>
          </div>
          <p className="text-xs leading-relaxed text-stone-300 font-light pr-4">
            Líderes en fiducias y construcciones de complejos departamentales de primer nivel con el sello distintivo y la plusvalía de Grupo VEQ.
          </p>
          <div className="flex items-center gap-1.5 text-[10px] text-stone-400 font-mono">
            <Landmark className="h-3.5 w-3.5 text-[#8CC5C3]" />
            <span>Fideicomisos Autorizados BanBajío / BBVA</span>
          </div>
        </div>

        {/* Col 2: Shortcuts */}
        <div className="space-y-4">
          <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-[#8CC5C3]">Sitio Demo</h5>
          <nav className="flex flex-col gap-2.5 text-xs text-stone-300">
            <button onClick={() => handleFooterLinkClick('inicio')} className="flex items-center gap-1 hover:text-[#8CC5C3] transition-colors text-left" id="btn-foot-link-inicio">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Inicio
            </button>
            <button onClick={() => handleFooterLinkClick('nosotros')} className="flex items-center gap-1 hover:text-[#8CC5C3] transition-colors text-left" id="btn-foot-link-nosotros">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Nosotros
            </button>
            <button onClick={() => handleFooterLinkClick('desarrollos')} className="flex items-center gap-1 hover:text-[#8CC5C3] transition-colors text-left" id="btn-foot-link-desarrollos">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Desarrollos Activos
            </button>
            <button onClick={() => handleFooterLinkClick('alianzas')} className="flex items-center gap-1 hover:text-[#8CC5C3] transition-colors text-left" id="btn-foot-link-alianzas">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Alianzas de Terrenos
            </button>
            <button onClick={() => handleFooterLinkClick('blog')} className="flex items-center gap-1 hover:text-[#8CC5C3] transition-colors text-left" id="btn-foot-link-blog">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Blog Financiero
            </button>
            <button onClick={() => handleFooterLinkClick('bolsa')} className="flex items-center gap-1 hover:text-[#8CC5C3] transition-colors text-left" id="btn-foot-link-bolsa">
              <ChevronRight className="h-3 w-3 text-[#1F8B74]" /> Bolsa de Trabajo
            </button>
          </nav>
        </div>

        {/* Col 3: Sede Contact */}
        <div className="space-y-4 text-xs text-stone-350">
          <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-[#8CC5C3]">Oficinas Centrales</h5>
          <div className="space-y-3.5 leading-relaxed font-light text-stone-300">
            <p className="flex items-start gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-[#1F8B74]" />
              <span>Av. Pablo Neruda 3107, Col. Providencia, Guadalajara, Jalisco, México. C.P. 44630</span>
            </p>
            <p className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-[#1F8B74]" />
              <span>+52 (33) 3640 4700</span>
            </p>
            <p className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-[#1F8B74]" />
              <span>contacto@grupoveq.com.mx</span>
            </p>
          </div>
        </div>

        {/* Col 4: Quick Newsletter */}
        <div className="space-y-4">
          <h5 className="font-heading text-xs font-bold uppercase tracking-widest text-[#8CC5C3]">Boletín Trimestral</h5>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            Suscríbete para recibir lanzamientos prioritarios de departamentos y oportunidades premium.
          </p>

          {subscribed ? (
            <div className="rounded-lg bg-[#1F8B74]/20 border border-[#1F8B74]/30 p-3 text-center text-xs font-semibold text-white">
              ✔ Correo suscrito con éxito
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="ejemplo@correo.com"
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
                className="w-full rounded-lg bg-[#1F8B74] py-2.5 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#8CC5C3] hover:text-[#00120e] transition-all"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>

      </div>

      {/* Under copyright bar */}
      <div className="border-t border-white/10 bg-[#000a08]/80 px-6 py-6 text-[10px] text-stone-400 font-mono">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Grupo VEQ. Todos los derechos reservados. Las renders, áreas y dimensiones de departamentos son puramente ilustrativas.</p>
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
