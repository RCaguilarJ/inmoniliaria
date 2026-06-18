/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, Eye, FileText, Globe, Layers, Scale, ShieldCheck, Sparkles, Users } from 'lucide-react';

const differentiators = [
  {
    title: 'Segmento premium',
    description: 'Enfocados en la comercialización de propiedades de lujo residenciales, comerciales y exclusivas.',
    icon: Eye,
  },
  {
    title: 'Experiencia digital',
    description: 'Soluciones tecnológicas de vanguardia para ofrecer una experiencia fluida de búsqueda, análisis y cierre.',
    icon: Globe,
  },
  {
    title: 'Marketing especializado',
    description: 'Campañas personalizadas, posicionamiento SEO/SEM, redes sociales y contenidos visuales para cada propiedad.',
    icon: Sparkles,
  },
  {
    title: 'Diseño de vanguardia',
    description: 'Presentaciones visuales sofisticadas que capturan la esencia de cada desarrollo y realzan sus mejores atributos.',
    icon: Layers,
  },
  {
    title: 'Community management',
    description: 'Gestión de comunidades y presencia online para sostener relaciones de confianza y valor continuo.',
    icon: Users,
  },
  {
    title: 'Equipo multidisciplinario',
    description: 'Nuestra clave está en un equipo comprometido con la excelencia comercial, operativa y digital.',
    icon: ShieldCheck,
  },
];

export default function NosotrosView() {
  return (
    <div className="relative w-full">
      <section className="border-b border-[#005A44]/15 bg-[#F3ECE2] px-6 py-20">
        <div className="mx-auto max-w-6xl text-center space-y-3">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Quiénes somos</span>
          <h1 className="font-heading text-4xl font-bold text-[#005A44] sm:text-5xl">Luxent</h1>
          <p className="mx-auto max-w-3xl text-sm leading-relaxed text-stone-600">
            En Luxent nos especializamos en la comercialización de propiedades exclusivas dentro del segmento premium. Con un enfoque innovador y personalizado, ofrecemos experiencias únicas y soluciones inmobiliarias de alta gama para clientes exigentes.
          </p>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-2xl border border-[#005A44]/12 bg-[#FAF8F4] p-8 shadow-sm">
              <div className="flex items-center gap-3 text-[#1F8B74]">
                <Compass className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Objetivo</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold text-[#005A44]">Asesoría integral con base comercial y digital</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                Nuestro objetivo es combinar conocimiento profundo del mercado inmobiliario con las últimas tendencias tecnológicas y digitales. A través de atención al detalle, marketing, diseño y comunicación digital, facilitamos la compra, venta y alquiler de propiedades que redefinen el lujo.
              </p>
            </div>

            <div className="rounded-2xl border border-[#005A44]/12 bg-[#00120e] p-8 shadow-sm">
              <div className="flex items-center gap-3 text-[#8CC5C3]">
                <FileText className="h-5 w-5" />
                <span className="font-mono text-xs font-bold uppercase tracking-widest">Infraestructura</span>
              </div>
              <h2 className="mt-4 font-heading text-3xl font-bold text-white">La carta de presentación de nuestros desarrollos</h2>
              <p className="mt-4 text-sm leading-relaxed text-stone-300">
                Luxent se ha convertido en un espacio donde los clientes se sienten en casa y encuentran la confianza necesaria para avanzar en la compra de proyectos inmobiliarios premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#005A44]/15 bg-[#F3ECE2] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Qué nos diferencia</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44]">Excelencia comercial, visual y operativa</h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <div className="w-fit rounded-lg bg-[#1F8B74]/10 p-3 text-[#1F8B74]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#005A44]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[#005A44]/12 bg-[#FAF8F4] p-8 shadow-sm">
            <div className="flex items-center gap-3 text-[#1F8B74]">
              <Layers className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Estudios y análisis de mercado</span>
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold text-[#005A44]">Benchmarking y definición de producto</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Trabajamos con análisis enfocados en Zona Country, Las Lomas y perfil del cliente para ayudar a definir producto inmobiliario, precios y formas de pago con mayor precisión comercial.
            </p>
          </div>

          <div className="rounded-2xl border border-[#005A44]/12 bg-[#FAF8F4] p-8 shadow-sm">
            <div className="flex items-center gap-3 text-[#1F8B74]">
              <Scale className="h-5 w-5" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest">Asesoramiento jurídico</span>
            </div>
            <h3 className="mt-4 font-heading text-2xl font-bold text-[#005A44]">Acompañamiento desde la gestación hasta la postventa</h3>
            <p className="mt-4 text-sm leading-relaxed text-stone-600">
              Brindamos asesoramiento y acompañamiento al desarrollador y al cliente desde la etapa de gestación del proyecto inmobiliario hasta la escrituración y el seguimiento posterior.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
