/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import NosotrosView from './components/NosotrosView';
import DevelopmentsView from './components/DevelopmentsView';
import AlianzasView from './components/AlianzasView';
import BlogView from './components/BlogView';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('inicio');
  const [initialCityFilter, setInitialCityFilter] = useState<string | undefined>(undefined);

  const handleSetSelectedCity = (city: string) => {
    setInitialCityFilter(city);
  };

  const handleClearInitialCityFilter = () => {
    setInitialCityFilter(undefined);
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#FAF8F4] text-stone-900 selection:bg-[#1F8B74] selection:text-white">
      {/* GLOBAL HEADER BAR */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* MAIN SCREEN ROUTING */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeTab === 'inicio' && (
              <HomeView 
                onNavigate={setActiveTab} 
                setSelectedCity={handleSetSelectedCity} 
              />
            )}
            {activeTab === 'nosotros' && <NosotrosView />}
            {activeTab === 'desarrollos' && (
              <DevelopmentsView 
                initialCityFilter={initialCityFilter}
                onClearInitialCityFilter={handleClearInitialCityFilter}
              />
            )}
            {activeTab === 'alianzas' && <AlianzasView />}
            {activeTab === 'blog' && <BlogView />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* GLOBAL FOOTER SHORTCUTS */}
      <Footer activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
