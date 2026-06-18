/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Send, Users, Compass, KeyRound, Landmark, Milestone, Map } from 'lucide-react';
import { motion } from 'motion/react';
import { ALLIANCE_PARTNERS } from '../data';
import ContactForm from './ContactForm';

export default function AlianzasView() {
  return (
    <div className="relative w-full text-left">
      {/* HEADER HERO */}
      <section className="bg-[#F3ECE2] border-b border-[#005A44]/15 px-6 py-20 text-center space-y-3">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Sinergias de Alto Impacto</span>
        <h1 className="font-heading text-4xl font-bold text-[#005A44] sm:text-5xl">Alianzas Estratégicas</h1>
        <p className="mx-auto max-w-2xl text-stone-600 text-sm">
          Unimos experiencia, talento y solidez financiera para consolidar proyectos habitacionales excepcionales. Conoce a los profesionales que impulsan nuestro ecosistema.
        </p>
      </section>

      {/* ALLIANCE PARTNERS LIST */}
      <section className="bg-[#FAF8F4] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Aliados Destacados</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44]">Despachos y Socios de Clase Mundial</h2>
          </div>

          <div className="grid gap-12">
            {ALLIANCE_PARTNERS.map((partner, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div 
                  key={partner.id}
                  className={`grid gap-8 items-center lg:grid-cols-12 ${isEven ? '' : 'lg:flex-row-reverse'}`}
                >
                  {/* Text Frame */}
                  <div className={`space-y-4 lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="font-mono text-[10px] font-bold text-[#1F8B74] uppercase tracking-widest bg-[#1F8B74]/10 border border-[#1F8B74]/20 px-3 py-1 rounded inline-block">
                      {partner.role}
                    </span>
                    <h3 className="font-heading text-3xl font-bold text-[#005A44] mt-3">{partner.partnerName}</h3>
                    <p className="text-sm text-stone-700 leading-relaxed font-light">
                      {partner.description}
                    </p>
                    <div className="flex gap-4 pt-2 font-mono text-[10px] text-stone-600">
                      <span>• Fideicomiso Activo</span>
                      <span>• Supervisión de Calidad</span>
                      <span>• Práctica Verde</span>
                    </div>
                  </div>

                  {/* Image Frame */}
                  <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="rounded-2xl border border-[#005A44]/12 bg-white p-3 shadow-md">
                      <div className="aspect-[16/10] overflow-hidden rounded-xl border border-stone-200">
                        <img
                          src={partner.image}
                          alt={partner.partnerName}
                          className="h-full w-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TU TERRENO - FORM SUBMISSION */}
      <section className="bg-[#F3ECE2] border-t border-[#005A44]/15 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Value Propositions on the Left */}
            <div className="lg:col-span-6 space-y-8">
              <div className="space-y-3">
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">¿Tienes un Terreno?</span>
                <h2 className="font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Aporta tu predio y co-desarrolla de la mano de VEQ</h2>
                <p className="text-stone-650 text-sm leading-relaxed">
                  Buscamos terrenos con factibilidad residential o comercial en Guadalajara, León, Cancún, Los Cabos, Tijuana, Nuevo Vallarta y Monterrey. Aliarte con Grupo VEQ es sinónimo de plusvalía y transparencia absoluta.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="rounded-xl bg-[#1F8B74]/10 p-3 text-[#1F8B74] h-fit">
                    <Landmark className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-heading text-lg font-bold text-[#005A44]">Estructuración Fiduciaria</h5>
                    <p className="text-stone-600 text-xs mt-1 leading-relaxed">Aportación garantizada a fideicomiso bancario de primer nivel, asegurando la propiedad original del socio hasta la liquidación de utilidades.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-[#1F8B74]/10 p-3 text-[#1F8B74] h-fit">
                    <Compass className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-heading text-lg font-bold text-[#005A44]">Análisis de Factibilidad Técnico-Económico</h5>
                    <p className="text-stone-600 text-xs mt-1 leading-relaxed">Evaluación gratuita por nuestro staff de ingeniería de valor para proponer la máxima densidad y usabilidad constructiva legal del predio.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="rounded-xl bg-[#1F8B74]/10 p-3 text-[#1F8B74] h-fit">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <h5 className="font-heading text-lg font-bold text-[#005A44]">Fuerza de Ventas Consolidada</h5>
                    <p className="text-stone-600 text-xs mt-1 leading-relaxed">Más de 20 años de marca posicionada y cartera de inversionistas recurrentes que agilizan los fondos de preventa acelerada.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquire Form on the Right */}
            <div className="lg:col-span-6">
              <ContactForm
                title="Aportación de Terreno o Alianza"
                subtitle="Describe las características y ubicación de tu predio para que nuestro comité directivo de expansión lo revise de inmediato."
                defaultType="terreno"
              />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
