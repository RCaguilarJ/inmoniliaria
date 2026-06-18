/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowRight, MapPin, Building2, Flame, Award, ShieldCheck, Milestone, Landmark, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import { DEVELOPMENTS_DATA, BLOG_DATA, STRATEGIC_BANKS } from '../data';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  setSelectedCity?: (city: any) => void;
}

export default function HomeView({ onNavigate, setSelectedCity }: HomeViewProps) {
  const [hoveredMetric, setHoveredMetric] = useState<number | null>(null);
  const [selectedMapCity, setSelectedMapCity] = useState('Guadalajara');

  // Coordinates and addresses for highlighted cities in VEQ's map
  const mapCities = [
    { name: 'Guadalajara', x: '42%', y: '68%', address: 'Av. Pablo Neruda 3107, Providencia', developments: 11 },
    { name: 'León', x: '48%', y: '63%', address: 'Blvd. Campestre 1220, Valle del Campestre', developments: 4 },
    { name: 'Cancún', x: '91%', y: '58%', address: 'Av. Bonampak Sm 4, Local 2A, Zona Hotelera', developments: 1 },
    { name: 'Tijuana', x: '12%', y: '15%', address: 'Calle Brasil 8390, Colonia Francisco I. Madero', developments: 1 },
    { name: 'Nuevo Vallarta', x: '35%', y: '63%', address: 'Paseo de Cocoteros Sur Lote K, Nvo Vallarta', developments: 1 },
    { name: 'Los Cabos', x: '21%', y: '45%', address: 'Carr. Transpeninsular Km 24.5, Cerro Colorado', developments: 1 },
    { name: 'Tulum', x: '89%', y: '65%', address: 'Av. Cobá Sur S/N, Tulum Centro', developments: 1 },
    { name: 'Monterrey', x: '52%', y: '42%', address: 'Av. Lázaro Cárdenas 2400, Valle Oriente', developments: 1 }
  ];

  const currentCityInfo = mapCities.find(c => c.name === selectedMapCity) || mapCities[0];

  return (
    <div className="relative w-full">
      {/* 1. HERO BANNER */}
      <section className="relative flex min-h-[85vh] w-full items-center justify-center overflow-hidden px-6 pb-20 pt-32">
        {/* Background Image with Dark Professional Linear Gradient Overlay */}
        <div className="absolute inset-0 z-0 bg-[#00120e]">
          <img
            src="/src/assets/images/veq_hero_towers_1781739523649.jpg"
            alt="Grupo VEQ Luxury Towers"
            className="h-full w-full object-cover object-center scaling-slow opacity-85"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00100c] via-[#00100c]/70 to-[#00100c]/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00100c]/90 via-transparent to-transparent" />
        </div>

        {/* Content Box */}
        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#8CC5C3]/30 bg-[#1F8B74]/20 px-4.5 py-1.5 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#8CC5C3] animate-ping" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#8CC5C3]">
                Sólida Trayectoria Inmobiliaria
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="font-heading text-4xl font-normal leading-[1.12] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7.5xl"
            >
              Creamos comunidades que <span className="font-serif italic text-[#8CC5C3]">mejoran la calidad de vida</span> de las personas.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="max-w-xl text-lg leading-relaxed text-stone-200"
            >
              Desarrollamos soluciones integrales de vivienda vertical diseñadas con arquitectura de nivel internacional, ubicaciones estratégicas y altos índices de plusvalía en México.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() => onNavigate('desarrollos')}
                id="btn-hero-explore"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#1F8B74] px-8 py-4.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-[#1F8B74]/20 transition-all duration-300 hover:bg-[#005A44] hover:shadow-[#005A44]/30"
              >
                Ver Desarrollos disponibles
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('nosotros')}
                id="btn-hero-about"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4.5 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
              >
                Conócenos
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TRACK RECORD METRICS SECTION */}
      <section className="relative border-y border-[#005A44]/15 bg-[#F3ECE2] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            
            {/* Concluidos Grid */}
            <div className="space-y-6">
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg bg-[#005A44]/10 p-2 text-[#005A44]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#005A44]">Historias de éxito concluidas</h4>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-[#005A44]/10 bg-white p-5 text-center transition-all duration-300 hover:border-[#1F8B74]/40 hover:shadow-md hover:-translate-y-0.5">
                  <p className="font-heading text-4xl font-bold text-[#1F8B74]">28</p>
                  <p className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-widest">Desarrollos concluidos</p>
                </div>
                <div className="rounded-xl border border-[#005A44]/10 bg-white p-5 text-center transition-all duration-300 hover:border-[#1F8B74]/40 hover:shadow-md hover:-translate-y-0.5">
                  <p className="font-heading text-4xl font-bold text-[#1F8B74]">2,015</p>
                  <p className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-widest">Unidades terminadas</p>
                </div>
                <div className="rounded-xl border border-[#005A44]/10 bg-white p-5 text-center transition-all duration-300 hover:border-[#1F8B74]/40 hover:shadow-md hover:-translate-y-0.5">
                  <p className="font-heading text-4xl font-bold text-[#1F8B74]">191,000</p>
                  <p className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-widest">m² desarrollados</p>
                </div>
              </div>
            </div>

            {/* En Construcción Grid */}
            <div className="space-y-6 border-t border-[#005A44]/10 pt-12 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0">
              <div className="flex items-center gap-2.5">
                <div className="rounded-lg bg-[#1F8B74]/10 p-2 text-[#1F8B74]">
                  <Flame className="h-5 w-5 animate-pulse" />
                </div>
                <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Actualmente En Obra</h4>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-xl border border-[#005A44]/10 bg-white p-5 text-center transition-all duration-300 hover:border-[#1F8B74]/40 hover:shadow-md hover:-translate-y-0.5">
                  <p className="font-heading text-4xl font-bold text-[#005A44]">28</p>
                  <p className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-widest">Desarrollos activos</p>
                </div>
                <div className="rounded-xl border border-[#005A44]/10 bg-white p-5 text-center transition-all duration-300 hover:border-[#1F8B74]/40 hover:shadow-md hover:-translate-y-0.5">
                  <p className="font-heading text-4xl font-bold text-[#005A44]">4,639</p>
                  <p className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-widest">Unidades en desarrollo</p>
                </div>
                <div className="rounded-xl border border-[#005A44]/10 bg-white p-5 text-center transition-all duration-300 hover:border-[#1F8B74]/40 hover:shadow-md hover:-translate-y-0.5">
                  <p className="font-heading text-4xl font-bold text-[#005A44]">271,000</p>
                  <p className="mt-1 text-xs font-medium text-stone-600 uppercase tracking-widest">m² bajo construcción</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. MEXICO MAP - "UN LATIDO QUE SE ESCUCHA EN MÉXICO" */}
      <section className="bg-veq-pattern px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Presencia en el Territorio Nacional</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Un latido que se escucha en México</h2>
            <p className="mx-auto mt-3 max-w-xl text-stone-600">
              Estamos presentes en las metrópolis con mayor dinamismo económico y turístico del país. Haz clic en las ciudades para consultar corporativos y desarrollos.
            </p>
          </div>

          <div className="mt-16 grid items-center gap-12 lg:grid-cols-12">
            {/* Left Column: Interactive Map Visual */}
            <div className="relative rounded-2xl border border-[#005A44]/15 bg-white p-6 lg:col-span-8 shadow-sm">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#FCFAF7] border border-[#005A44]/10 rounded-xl flex items-center justify-center">
                {/* Simulated Stylized Map of Mexico */}
                <svg className="h-full w-full opacity-70 p-6 text-[#1F8B74]/55" viewBox="0 0 1000 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outline paths representation */}
                  <path d="M120 100 L 160 130 L 220 200 L 240 280 L 210 320 H 180" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"/>
                  <path d="M220 200 L 320 280 L 400 320 L 450 350 L 500 450 L 520 480 L 540 500 L 560 520 L 600 500" stroke="currentColor" strokeWidth="3"/>
                  <path d="M400 320 L 480 250 L 540 220 L 610 300 M 540 220 L 580 180 L 620 260 L 680 290 L 710 340" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M520 480 L 620 490 L 670 480 L 730 450 L 800 470 L 850 510 L 880 500 L 920 480 M 800 470 L 820 410 L 850 380 L 900 390 L 930 430 L 910 460" stroke="currentColor" strokeWidth="2" fill="none"/>
                  <text x="35%" y="45%" fill="#1F8B74" opacity="0.08" fontSize="32" fontFamily="sans-serif">MÉXICO</text>
                </svg>

                {/* City Pins */}
                {mapCities.map((city) => {
                  const isSelected = city.name === selectedMapCity;
                  return (
                    <button
                      key={city.name}
                      onClick={() => setSelectedMapCity(city.name)}
                      className="absolute group z-20"
                      style={{ left: city.x, top: city.y }}
                      id={`btn-map-pin-${city.name.toLowerCase()}`}
                    >
                      <span className="relative flex h-5 w-5 items-center justify-center">
                        <span className={`absolute inline-flex h-full w-full rounded-full bg-[#1F8B74]/40 opacity-75 ${isSelected ? 'animate-ping' : 'group-hover:animate-ping'}`} />
                        <span className={`relative inline-flex h-2.5 w-2.5 rounded-full border border-white ${isSelected ? 'bg-[#005A44] scale-125' : 'bg-[#1F8B74]/60 group-hover:bg-[#005A44]'} transition-transform`} />
                      </span>
                      <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap font-mono text-[9px] font-semibold tracking-wider uppercase px-1.5 py-0.5 rounded shadow-sm ${isSelected ? 'bg-[#005A44] text-white font-bold' : 'bg-white text-stone-700 border border-stone-200'}`}>
                        {city.name}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Right Column: Address and Stats Info Card */}
            <div className="lg:col-span-4 space-y-6">
              <div className="rounded-xl border border-[#005A44]/15 bg-white p-6 shadow-sm">
                <span className="font-mono text-[10px] font-bold text-[#1F8B74] uppercase tracking-widest bg-[#1F8B74]/5 px-2.5 py-1 rounded border border-[#1F8B74]/15">Sede Seleccionada</span>
                <h3 className="mt-4 font-heading text-2xl font-bold text-[#005A44]">{currentCityInfo.name}</h3>
                
                <div className="mt-6 space-y-4 text-sm text-stone-700">
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#1F8B74]" />
                    <div>
                      <p className="font-semibold text-stone-500 text-xs uppercase tracking-wider">Dirección de Oficinas</p>
                      <p className="mt-1 text-sm text-stone-800 font-medium">{currentCityInfo.address}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Building2 className="mt-1 h-4 w-4 shrink-0 text-[#1F8B74]" />
                    <div>
                      <p className="font-semibold text-stone-500 text-xs uppercase tracking-wider">Desarrollos Activos / Entregados</p>
                      <p className="mt-1 text-sm text-stone-800 font-medium">{currentCityInfo.developments} Proyectos registrados</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200/60">
                  <button
                    onClick={() => {
                      if (setSelectedCity) {
                        setSelectedCity(currentCityInfo.name);
                      }
                      onNavigate('desarrollos');
                    }}
                    id="btn-goto-developments"
                    className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1F8B74] px-4 py-3 text-xs font-bold text-white transition-all hover:bg-[#005A44] shadow-sm uppercase tracking-wider"
                  >
                    Ver Proyectos de {currentCityInfo.name}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Solidez circular widget */}
              <div className="relative overflow-hidden rounded-xl border border-[#005A44]/15 bg-gradient-to-br from-white to-[#F3ECE2] p-6 shadow-sm">
                <div className="absolute right-[-20px] top-[-20px] h-28 w-28 rounded-full border border-[#1F8B74]/10 flex items-center justify-center animate-spin-slow">
                  <div className="h-20 w-20 rounded-full border border-dashed border-[#1F8B74]/25" />
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-6 w-6 text-[#1F8B74]" />
                  <h5 className="font-heading text-lg font-bold text-[#005A44]">Solidez Financiera</h5>
                </div>
                <p className="mt-3 text-xs text-stone-600 leading-relaxed">
                  Línea de crédito autorizada y operada para el desarrollo seguro de nuestros complejos habitacionales.
                </p>
                <div className="mt-4">
                  <p className="font-mono text-[10px] text-stone-500 uppercase tracking-widest">Financiamiento Activo</p>
                  <p className="font-heading text-3xl font-extrabold text-[#1F8B74] mt-1">$2,998 <span className="text-lg font-normal text-stone-700">MDP</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SOLID REPUTATION - RECOGNIZED BY TOP FINANCIAL INSTITUTIONS */}
      <section className="bg-[#F3ECE2] border-y border-[#005A44]/15 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Credenciales Bancarias</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44]">Con el respaldo de las instituciones financieras líderes</h2>
            <p className="mx-auto mt-3 max-w-xl text-stone-600 text-sm">
              Nuestros desarrollos cuentan con el sólido aval de fiduciarias del más alto nivel, garantizando certeza legal absoluta para tu patrimonio.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {STRATEGIC_BANKS.map((bank) => (
              <div
                key={bank.name}
                className="flex items-center justify-center rounded-xl border border-[#005A44]/12 bg-white p-5 text-center transition-all duration-300 hover:border-[#1F8B74]/35 hover:shadow-sm"
              >
                <div>
                  <span className="font-mono text-sm font-semibold text-[#005A44]/80 uppercase tracking-wider">{bank.logo}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. NEWS FROM THE BLOG HIGHLIGHT */}
      <section className="bg-veq-dark px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Noticias y Tendencias</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44]">Blog de Educación Financiera e Inmobiliaria</h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              id="btn-goto-blog"
              className="group flex items-center gap-2 self-start font-mono text-xs font-bold uppercase tracking-wider text-[#1F8B74] hover:text-[#005A44] transition-colors"
            >
              Ver todas las entradas
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_DATA.slice(0, 3).map((article) => (
              <article
                key={article.id}
                onClick={() => onNavigate('blog')}
                className="group cursor-pointer overflow-hidden rounded-xl border border-[#005A44]/15 bg-white transition-all hover:-translate-y-1 hover:shadow-md hover:border-[#1F8B74]/35"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3.5 top-3.5 rounded-full bg-[#005A44]/10 px-2.5 py-1 text-[10px] font-bold text-[#005A44] uppercase tracking-wider backdrop-blur-sm">
                    {article.category}
                  </div>
                </div>
                <div className="p-6 space-y-3">
                  <p className="font-mono text-[10px] font-semibold text-stone-500">{article.date}</p>
                  <h4 className="font-heading text-lg font-bold text-[#005A44] transition-colors group-hover:text-[#1F8B74] line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-stone-600 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION PREVIEWS */}
      <section className="relative px-6 py-28 overflow-hidden bg-gradient-to-br from-[#F3ECE2] to-white border-t border-[#005A44]/15">
        <div className="absolute inset-0 bg-veq-light-pattern opacity-[0.03] pointer-events-none" />
        <div className="relative mx-auto max-w-4xl text-center space-y-6 z-10">
          <h2 className="font-heading text-4xl font-normal leading-tight text-[#005A44] mb-2">¿Quieres vender tu terreno o co-desarrollar con nosotros?</h2>
          <p className="text-base text-stone-700 max-w-2xl mx-auto">
            Buscamos socios con predios estratégicos. Aportamos solidez fiduciaria, gerencia de arquitectura experta y una marca comercial consolidada para maximizar la plusvalía del suelo.
          </p>
          <div className="pt-6 flex flex-col justify-center items-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate('alianzas')}
              id="btn-partner-cta-home"
              className="rounded-full bg-[#1F8B74] px-8 py-4.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#005A44] active:scale-95 transition-all shadow-lg shadow-[#1F8B74]/20 hover:shadow-[#005A44]/35"
            >
              Quiero aliarme con VEQ
            </button>
            <button
              onClick={() => onNavigate('blog')}
              className="rounded-full border border-[#1F8B74]/30 bg-transparent px-8 py-4.5 text-xs font-bold uppercase tracking-wider text-stone-700 hover:bg-[#1F8B74]/10 hover:text-[#1F8B74] transition-all"
            >
              Revisar boletines
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
