/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, Building2, FileText, Globe, Layers, Mail, MapPin, Phone, ShieldCheck, Sparkles, Users } from 'lucide-react';
import { motion } from 'motion/react';
import { BLOG_DATA } from '../data';
import heroImage from '../assets/images/veq_hero_towers_1781739523649.jpg';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  setSelectedCity?: (city: any) => void;
}

const differentiators = [
  {
    title: 'Segmento premium',
    description: 'Comercializamos propiedades residenciales y comerciales de lujo en ubicaciones exclusivas.',
    icon: Building2,
  },
  {
    title: 'Experiencia digital',
    description: 'Integramos soluciones tecnológicas para acompañar al cliente desde la búsqueda hasta el cierre.',
    icon: Globe,
  },
  {
    title: 'Marketing especializado',
    description: 'Diseñamos campañas personalizadas para cada propiedad con foco en posicionamiento y conversión.',
    icon: Sparkles,
  },
  {
    title: 'Atención personalizada',
    description: 'Brindamos asesoría integral con seguimiento cercano para clientes de alto perfil.',
    icon: Users,
  },
];

const services = [
  'Venta y alquiler de propiedades de lujo.',
  'Asesoría personalizada y atención exclusiva.',
  'Consultoría de inversiones inmobiliarias.',
  'Tours virtuales, renders y fotografía de alta calidad.',
  'Campañas de marketing digital adaptadas a cada propiedad.',
  'Gestión y posicionamiento en redes sociales.',
];

const tools = [
  'Listas de precios en tiempo real',
  'Cotizaciones personalizadas',
  'Brochure digital',
  'Mapas 3D del desarrollo',
  'Disponibilidad en tiempo real',
  'Seguimiento de leads, ventas y postventa',
];

export default function HomeView({ onNavigate }: HomeViewProps) {
  return (
    <div className="relative w-full">
      <section className="relative flex min-h-[82vh] w-full items-center overflow-hidden px-6 pb-20 pt-28">
        <div className="absolute inset-0 z-0 bg-[#00120e]">
          <img
            src={heroImage}
            alt="Luxent premium properties"
            className="h-full w-full object-cover object-center opacity-70"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#00100c]/92 via-[#00100c]/70 to-[#00100c]/35" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#00100c] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 rounded-full border border-[#8CC5C3]/30 bg-[#1F8B74]/20 px-4 py-1.5 backdrop-blur-md"
            >
              <span className="h-2 w-2 rounded-full bg-[#8CC5C3]" />
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#8CC5C3]">
                Perfil empresarial Luxent · Junio 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading text-4xl font-normal leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Comercialización de <span className="italic text-[#8CC5C3]">propiedades exclusivas</span> dentro del segmento premium.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl text-lg leading-relaxed text-stone-200"
            >
              En Luxent combinamos conocimiento del mercado inmobiliario, marketing especializado, diseño de vanguardia y herramientas digitales para ofrecer experiencias únicas a clientes de alto perfil.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <button
                onClick={() => onNavigate('desarrollos')}
                id="btn-hero-properties"
                className="group flex items-center justify-center gap-3 rounded-full bg-[#1F8B74] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-[#1F8B74]/20 transition-all duration-300 hover:bg-[#005A44]"
              >
                Ver propiedades
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => onNavigate('alianzas')}
                id="btn-hero-services"
                className="rounded-full border border-white/30 bg-white/10 px-8 py-4 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white/50"
              >
                Conocer servicios
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#005A44]/15 bg-[#F3ECE2] px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Qué nos diferencia</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Una propuesta premium con ejecución digital</h2>
            <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
              Nuestro objetivo es proporcionar una asesoría integral que combine el conocimiento profundo del mercado inmobiliario con las últimas tendencias tecnológicas, de diseño y de comunicación digital.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-2xl border border-[#005A44]/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#1F8B74]/30 hover:shadow-md">
                  <div className="w-fit rounded-xl bg-[#1F8B74]/10 p-3 text-[#1F8B74]">
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
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Servicios clave</span>
            <h2 className="font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Asesoría, comercialización y posicionamiento</h2>
            <p className="text-sm leading-relaxed text-stone-600">
              Luxent integra comercialización inmobiliaria, consultoría patrimonial, diseño visual y gestión digital para acompañar cada propiedad desde su salida al mercado hasta la postventa.
            </p>

            <div className="rounded-2xl border border-[#005A44]/12 bg-[#FAF8F4] p-6">
              <div className="flex items-start gap-3">
                <ShieldCheck className="mt-0.5 h-5 w-5 text-[#1F8B74]" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#005A44]">Asesoramiento jurídico</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Acompañamos al desarrollador y al cliente desde la gestación del proyecto inmobiliario hasta la escrituración y la postventa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {services.map((service) => (
              <div key={service} className="rounded-2xl border border-stone-200 bg-[#FAF8F4] p-5 text-sm text-stone-700 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#1F8B74]" />
                  <p className="leading-relaxed">{service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#005A44]/15 bg-[#F3ECE2] px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Metodología y herramientas</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Procesos digitales para ventas y postventa</h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-600">
              Trabajamos con herramientas que permiten administrar información comercial en tiempo real y dar seguimiento continuo a leads, ventas y experiencia del cliente.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool) => (
                <div key={tool} className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <FileText className="mt-0.5 h-4 w-4 text-[#1F8B74]" />
                    <p className="text-sm leading-relaxed text-stone-700">{tool}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-[#005A44]/15 bg-white p-6 shadow-md">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[#1F8B74]">Infraestructura Luxent</span>
              <h3 className="mt-3 font-heading text-2xl font-bold text-[#005A44]">Una experiencia que transmite confianza</h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                Luxent se ha convertido en la carta de presentación de nuestros desarrollos: un espacio donde los clientes se sienten en casa y encuentran la confianza necesaria para avanzar en su proceso de compra.
              </p>

              <div className="mt-6 space-y-4 border-t border-stone-200 pt-6 text-sm text-stone-700">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-[#1F8B74]" />
                  <span>gerencia@luxent.properties</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-[#1F8B74]" />
                  <span>33 1142 9932</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-[#1F8B74]" />
                  <span>Av. Américas 1930-PB, Country Club, 44668, Guadalajara, Jalisco.</span>
                </div>
                <div className="flex items-start gap-3">
                  <Layers className="mt-0.5 h-4 w-4 text-[#1F8B74]" />
                  <span>Benchmarking y análisis de mercado enfocados en Zona Country, Las Lomas y perfil del cliente.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#00120e] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#8CC5C3]">Insights Luxent</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-white">Contenido sobre mercado, comercialización y producto inmobiliario</h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              id="btn-goto-blog"
              className="group flex items-center gap-2 self-start font-mono text-xs font-bold uppercase tracking-wider text-[#8CC5C3] transition-colors hover:text-white"
            >
              Ver todos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {BLOG_DATA.slice(0, 3).map((article) => (
              <article
                key={article.id}
                onClick={() => onNavigate('blog')}
                className="group cursor-pointer overflow-hidden rounded-xl border border-white/10 bg-white transition-all hover:-translate-y-1 hover:border-[#1F8B74]/35 hover:shadow-md"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute right-3.5 top-3.5 rounded-full bg-[#005A44]/80 px-2.5 py-1 text-[10px] font-bold text-white uppercase tracking-wider backdrop-blur-sm">
                    {article.category}
                  </div>
                </div>
                <div className="space-y-3 p-6">
                  <p className="font-mono text-[10px] font-semibold text-stone-500">{article.date}</p>
                  <h4 className="font-heading text-lg font-bold text-[#005A44] transition-colors group-hover:text-[#1F8B74] line-clamp-2">
                    {article.title}
                  </h4>
                  <p className="text-sm text-stone-600 line-clamp-3">{article.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden border-t border-[#005A44]/15 bg-gradient-to-br from-[#F3ECE2] to-white px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Contacto directo</span>
          <h2 className="mt-2 font-heading text-4xl font-normal leading-tight text-[#005A44]">¿Buscas comercializar una propiedad premium o estructurar su salida al mercado?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-stone-700">
            En Luxent combinamos análisis de mercado, marketing digital, diseño visual y acompañamiento comercial para llevar cada propiedad al segmento correcto.
          </p>
          <div className="pt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate('alianzas')}
              id="btn-home-contact-services"
              className="rounded-full bg-[#1F8B74] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#005A44]"
            >
              Ver servicios Luxent
            </button>
            <button
              onClick={() => onNavigate('desarrollos')}
              className="rounded-full border border-[#1F8B74]/30 bg-transparent px-8 py-4 text-xs font-bold uppercase tracking-wider text-stone-700 transition-all hover:bg-[#1F8B74]/10 hover:text-[#1F8B74]"
            >
              Explorar portafolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
