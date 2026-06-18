/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
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
    { id: 'desarrollos', label: 'Propiedades' },
    { id: 'alianzas', label: 'Servicios' },
    { id: 'blog', label: 'Insights' }
  ];

  const handleNavClick = (tabId: string) => {
    setActiveTab(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-[#20252b]/88 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        <button
          onClick={() => handleNavClick('inicio')}
          className="group flex items-center gap-3 text-left focus:outline-none"
          id="btn-nav-logo"
        >
          <div className="h-10 w-10 overflow-visible transition-transform duration-500 group-hover:rotate-[5deg] group-hover:scale-105">
            <CountryClubLogo className="h-10 w-10" showText={false} />
          </div>
          <div className="flex flex-col">
            <span className="font-heading text-lg font-black leading-none tracking-wider text-white transition-all group-hover:text-[#DCE7EF]">
              LUXENT
            </span>
            <span className="mt-0.5 font-mono text-[8px] leading-none tracking-widest text-[#DCE7EF]/70 uppercase">
              PROPERTIES
            </span>
          </div>
        </button>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`btn-nav-desktop-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 text-sm font-medium tracking-wide transition-colors duration-300 focus:outline-none ${
                  isActive ? 'text-[#DCE7EF] font-semibold' : 'text-stone-300 hover:text-white'
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 h-[2px] w-full bg-[#DCE7EF]"
                    transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        <div className="hidden items-center md:flex">
          <button
            onClick={() => handleNavClick('desarrollos')}
            id="btn-nav-cta-header"
            className="editorial-btn-ghost group flex items-center gap-2 rounded-md px-5 py-2.5 text-xs font-semibold tracking-[0.22em] text-white uppercase transition-all duration-300 hover:border-[#DCE7EF]/45 hover:bg-white/10"
          >
            Ver propiedades
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          id="btn-hamburger"
          className="rounded-lg p-2 text-stone-300 hover:bg-white/10 hover:text-white focus:outline-none md:hidden"
          aria-label="Abrir menú"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="border-t border-white/8 bg-[#20252b] md:hidden"
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
                        ? 'border-l-4 border-[#DCE7EF] bg-white/8 text-white font-semibold'
                        : 'text-stone-300 hover:bg-white/8 hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && <span className="h-2 w-2 rounded-full bg-[#DCE7EF]" />}
                  </button>
                );
              })}
              <div className="mt-4 border-t border-white/8 pt-4">
                <button
                  onClick={() => handleNavClick('desarrollos')}
                  id="btn-nav-cta-header-mobile"
                  className="editorial-btn-ghost flex w-full items-center justify-center gap-2 rounded-md py-3 text-center text-xs font-semibold tracking-[0.22em] text-white uppercase transition-all duration-300 active:scale-95"
                >
                  Ver propiedades
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
