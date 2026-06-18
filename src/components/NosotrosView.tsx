/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Target, Heart, Eye, Award, Quote, Sprout, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { INITIATIVES_DATA } from '../data';

export default function NosotrosView() {
  const [selectedInitiative, setSelectedInitiative] = useState<string | null>(null);

  const values = [
    { title: "Empatía Humana", desc: "Priorizamos el trato justo y el crecimiento de cada miembro de nuestra cadena de valor, desde los constructores hasta los compradores.", icon: Heart },
    { title: "Visión Sólida", desc: "Planes maestros pensados en trascender, combinando la viabilidad comercial con la plusvalía de largo plazo.", icon: Eye },
    { title: "Entrega Impecable", desc: "Supervisión obsesiva del detalle de acabados y fiducias transparentes garantizan certeza patrimonial permanente.", icon: Award }
  ];

  const currentInitiative = INITIATIVES_DATA.find(init => init.id === selectedInitiative);

  return (
    <div className="relative w-full">
      {/* HEADER SECTION */}
      <section className="bg-[#F3ECE2] border-b border-[#005A44]/15 px-6 py-20">
        <div className="mx-auto max-w-7xl text-center space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">¿Quiénes Somos?</span>
          <h1 className="font-heading text-4xl font-bold text-[#005A44] sm:text-5xl">Nuestra Identidad y Filosofía</h1>
          <p className="mx-auto max-w-2xl text-stone-600 text-sm">
            Grupo VEQ es una de las fiduciarias constructoras e inmobiliarias de mayor crecimiento en el sector habitacional de México, enfocada en redefinir el concepto de comunidad integrada.
          </p>
        </div>
      </section>

      {/* PRESIDENCIA - LETTER FROM JACK LEVY */}
      <section className="bg-gradient-to-br from-white to-[#FAF8F4] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Left Letter Content */}
            <div className="space-y-6 lg:col-span-7">
              <div className="flex items-center gap-2">
                <Quote className="h-8 w-8 text-[#1F8B74] opacity-50" />
                <span className="font-mono text-xs font-bold text-[#1F8B74] uppercase tracking-widest">Carta de Nuestro Presidente</span>
              </div>
              <h2 className="font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Soy Jack Levy</h2>
              <div className="space-y-4 text-stone-700 text-sm leading-relaxed">
                <p>
                  "Cuando fundamos Grupo VEQ, lo hicimos con la convicción indestructible de que los desarrollos residenciales complejos no deben ser solo cúmulos de concreto apilados, sino verdaderas comunidades vivas donde las personas encuentren paz, seguridad y arraigo."
                </p>
                <p>
                  "Durante estos años, hemos entregado con orgullo más de 2,000 llaves residenciales a familias e inversionistas que confiaron su capital en nuestras fiducias bancarias. Nuestra misión no concluye en la entrega de la llave; comienza ahí, donde cada desarrollo dinamiza la plusvalía del territorio de nuestros socios, brindando tranquilidad jurídica absoluta."
                </p>
                <p>
                  "A su vez, comprendemos que el verdadero progreso es el que asume responsabilidad social. A través de fiducias comunitarias, dignificamos el quehacer diario de nuestros trabajadores de construcción e impulsamos la nutrición infantil. Estamos construyendo el México del mañana con el corazón puesto en la empatía humana."
                </p>
              </div>
              <div className="pt-4 border-t border-[#005A44]/15">
                <p className="font-heading text-lg font-bold text-[#005A44]">Jack Levy</p>
                <p className="font-mono text-xs text-[#1F8B74] uppercase tracking-wider mt-0.5">Fundador y Presidente de Grupo VEQ</p>
              </div>
            </div>

            {/* Right Photo Frame */}
            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm rounded-2xl border border-[#1F8B74]/20 p-3 bg-white shadow-md">
                <div className="aspect-square overflow-hidden rounded-xl border border-stone-200">
                  <img
                    src="/src/assets/images/veq_jack_levy_1781739538027.jpg"
                    alt="Jack Levy Presidente"
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="mt-4 text-center pb-2">
                  <p className="font-mono text-[9px] text-stone-500 uppercase tracking-widest">Retrato Corporativo Oficial</p>
                  <p className="text-sm font-semibold text-stone-700 mt-1">"Trascendencia a través de la empatía"</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE VALUES BENTO */}
      <section className="bg-[#F3ECE2] border-y border-[#005A44]/15 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Pilares Corporativos</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44]">Nuestros Valores Fundantes</h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-xl border border-stone-200 bg-white p-6 hover:border-[#1F8B74]/35 transition-all hover:shadow-md group">
                  <div className="rounded-lg bg-[#1F8B74]/10 p-3 text-[#1F8B74] w-fit transition-transform group-hover:scale-105">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h4 className="mt-5 font-heading text-xl font-bold text-[#005A44] group-hover:text-[#1F8B74] transition-colors">{v.title}</h4>
                  <p className="mt-2.5 text-stone-600 text-sm leading-relaxed">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SOCIAL INITIATIVES */}
      <section className="bg-[#FAF8F4] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="text-center space-y-2">
            <div className="flex items-center justify-center gap-1.5 text-[#1F8B74]">
              <HeartHandshake className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Nuestras Iniciativas Sociales</span>
            </div>
            <h2 className="font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Fuerza comunitaria e impacto real</h2>
            <p className="mx-auto max-w-xl text-stone-600 text-sm">
              En Grupo VEQ creemos que edificar va más allá del ladrillo. Nos comprometemos activamente con el bienestar social de nuestros colaboradores y las infancias vulnerables.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {INITIATIVES_DATA.map((init) => (
              <div
                key={init.id}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-[#005A44]/15 bg-white transition-all hover:-translate-y-0.5 hover:shadow-md hover:border-[#1F8B74]/35"
              >
                <div>
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={init.image}
                      alt={init.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-6">
                    <h4 className="font-heading text-xl font-bold text-[#005A44] group-hover:text-[#1F8B74] transition-colors">{init.title}</h4>
                    <p className="mt-2.5 text-stone-700 text-sm leading-relaxed line-clamp-3 md:line-clamp-none">{init.description}</p>
                  </div>
                </div>
                <div className="p-6 pt-0">
                  <div className="mt-4 rounded-lg bg-[#1F8B74]/10 border border-[#1F8B74]/20 p-4">
                    <p className="font-mono text-[9px] font-bold text-[#1F8B74] uppercase tracking-widest">Impacto Medible</p>
                    <p className="mt-1 text-xs font-semibold text-stone-800">{init.impact}</p>
                  </div>
                  <button
                    onClick={() => setSelectedInitiative(init.id)}
                    id={`btn-init-details-${init.id}`}
                    className="mt-4 w-full rounded-lg border border-stone-200 bg-stone-50 py-2.5 text-center text-xs font-semibold text-stone-700 hover:bg-[#1F8B74] hover:text-white hover:border-[#1F8B74] transition-all uppercase tracking-wider"
                  >
                    Saber más
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INITIATIVE MODAL */}
      <AnimatePresence>
        {selectedInitiative && currentInitiative && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00120e]/80 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-xl w-full rounded-2xl bg-white border border-[#005A44]/15 p-6 shadow-2xl space-y-4"
              id="initiative-modal-box"
            >
              <h3 className="font-heading text-2xl font-bold text-[#005A44]">{currentInitiative.title}</h3>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img src={currentInitiative.image} alt={currentInitiative.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <p className="text-sm text-stone-750 leading-relaxed text-left">{currentInitiative.description}</p>
              
              <div className="rounded-xl bg-[#1F8B74]/10 border border-[#1F8B74]/20 p-4 text-left">
                <span className="font-mono text-[9px] font-bold text-[#1F8B74] uppercase tracking-widest">Indicador del Programa</span>
                <p className="mt-1 text-sm font-semibold text-[#005A44]">{currentInitiative.impact}</p>
              </div>

              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="rounded-full bg-[#1F8B74] px-6 py-2 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#005A44]"
                  id="btn-close-init-modal"
                >
                  Entendido
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
