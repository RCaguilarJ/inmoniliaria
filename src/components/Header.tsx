/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, Landmark, Globe, ArrowUpRight, Phone, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import CountryClubLogo from './CountryClubLogo';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'desarrollos', label: 'Desarrollos' },
    { id: 'alianzas', label: 'Alianzas' },
    { id: 'blog', label: 'Blog' },
    { id: 'bolsa', label: 'Bolsa de Trabajo' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-veq-dark/90 backdrop-blur-md">
      {/* Top micro-bar */}
      <div className="hidden border-b border-white/5 px-6 py-2 text-xs text-stone-400 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 hover:text-veq-gold transition-colors">
              <Phone className="h-3.5 w-3.5 text-veq-gold" />
              +52 (33) 3640 4700
            </span>
            <span className="flex items-center gap-1.5 hover:text-veq-gold transition-colors">
              <MapPin className="h-3.5 w-3.5 text-veq-gold" />
              Av. Pablo Neruda 3107, Col. Providencia, Guadalajara, Jal.
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-veq-gold">
              <Landmark className="h-3.5 w-3.5" />
              Credencial Fiduciaria Solida
            </span>
            <span>•</span>
            <span>Español / EN</span>
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Brand Name & Country Club Emblem */}
        <button 
          onClick={() => handleNavClick('inicio')}
          className="group flex items-center gap-3 text-left focus:outline-none"
          id="btn-nav-logo"
        >
          <div className="h-10 w-10 overflow-visible transition-transform duration-500 group-hover:rotate-[5deg] group-hover:scale-105">
            <CountryClubLogo className="h-10 w-10" showText={false} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-black tracking-wider text-[#005A44] transition-all group-hover:text-[#1F8B74] leading-none">
              COUNTRY CLUB
            </span>
            <span className="font-mono text-[8px] tracking-widest text-stone-500 uppercase mt-0.5 leading-none">
              CONDOMINIOS • GRUPO VEQ
            </span>
          </div>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`btn-nav-desktop-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none ${
                  isActive ? 'text-[#1F8B74] font-semibold' : 'text-stone-600 hover:text-[#005A44]'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#1F8B74]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Contact/Demo Call to Action */}
        <div className="hidden items-center md:flex">
          <button
            onClick={() => handleNavClick('desarrollos')}
            id="btn-nav-cta-header"
            className="group flex items-center gap-2 rounded-full border border-[#1F8B74]/30 bg-[#1F8B74]/5 px-5 py-2.5 text-xs font-semibold tracking-wider text-[#1F8B74] transition-all duration-300 hover:border-[#1F8B74] hover:bg-[#1F8B74] hover:text-white uppercase"
          >
            Ver Desarrollos
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          id="btn-hamburger"
          className="rounded-lg p-2 text-stone-600 hover:bg-stone-100 hover:text-stone-900 focus:outline-none md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-[#005A44]/10 bg-[#F3ECE2] md:hidden"
          >
            <div className="flex flex-col gap-2 px-6 py-4">
              {navItems.map((item) => {
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    id={`btn-nav-mobile-${item.id}`}
                    onClick={() => handleNavClick(item.id)}
                    className={`flex items-center justify-between rounded-md p-3 text-sm font-medium tracking-wide transition-all ${
                      isActive 
                        ? 'bg-[#1F8B74]/10 text-[#1F8B74] font-semibold border-l-4 border-[#1F8B74]' 
                        : 'text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                    }`}
                  >
                    {item.label}
                    {isActive && <span className="h-2 w-2 rounded-full bg-[#1F8B74]" />}
                  </button>
                );
              })}
              <div className="mt-4 border-t border-[#005A44]/10 pt-4">
                <button
                  onClick={() => handleNavClick('desarrollos')}
                  id="btn-nav-cta-header-mobile"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1F8B74] py-3 text-center text-xs font-semibold uppercase tracking-wider text-white transition-all duration-300 active:scale-95"
                >
                  Ver Desarrollos
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
