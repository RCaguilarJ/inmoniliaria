/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { BLOG_DATA, DEVELOPMENTS_DATA } from '../data';
import ContactSection from './ContactSection';
import EditorialIcon, { EditorialIconName } from './EditorialIcon';
import SectionDivider from './SectionDivider';
import heroImage from '../assets/images/veq_hero_towers_1781739523649.jpg';
import contactImage from '../assets/images/veq_jack_levy_1781739538027.jpg';

interface HomeViewProps {
  onNavigate: (tabId: string) => void;
  setSelectedCity?: (city: string) => void;
}

const differentiators = [
  {
    title: 'Segmento premium',
    description: 'Comercializamos propiedades residenciales y comerciales de lujo en ubicaciones exclusivas.',
    icon: 'buildings',
  },
  {
    title: 'Experiencia digital',
    description: 'Integramos soluciones tecnológicas para acompañar al cliente desde la búsqueda hasta el cierre.',
    icon: 'monitor',
  },
  {
    title: 'Marketing especializado',
    description: 'Diseñamos campañas personalizadas para cada propiedad con foco en posicionamiento y conversión.',
    icon: 'chart-line-up',
  },
  {
    title: 'Atención personalizada',
    description: 'Brindamos asesoría integral con seguimiento cercano para clientes de alto perfil.',
    icon: 'handshake',
  },
] satisfies Array<{ title: string; description: string; icon: EditorialIconName }>;

const tools = [
  'Listas de precios en tiempo real',
  'Cotizaciones personalizadas',
  'Brochure digital',
  'Mapas 3D del desarrollo',
  'Disponibilidad en tiempo real',
  'Seguimiento de leads, ventas y postventa',
];

export default function HomeView({ onNavigate }: HomeViewProps) {
  const featuredDevelopments = DEVELOPMENTS_DATA.slice(0, 3);

  return (
    <div className="relative w-full">
      <section className="relative isolate flex min-h-[85vh] items-center overflow-hidden px-6 pb-24 pt-28">
        <img
          src={heroImage}
          alt="Luxent premium properties"
          className="absolute inset-0 h-full w-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-[#1f2933]/72" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-[#1f2933]/86" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <span className="editorial-kicker inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 font-mono text-[#DCE7EF]/80 backdrop-blur-sm">
            Perfil empresarial Luxent · Junio 2025
          </span>
          <h1 className="mt-6 font-heading text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
            Comercialización de propiedades exclusivas dentro del <span className="text-[#DCE7EF]">segmento premium</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-stone-200 sm:text-base">
            En Luxent combinamos conocimiento del mercado inmobiliario, marketing especializado, diseño de vanguardia y herramientas digitales para ofrecer experiencias únicas a clientes de alto perfil.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              onClick={() => onNavigate('desarrollos')}
              id="btn-hero-properties"
              className="group flex items-center justify-center gap-2 rounded-md border border-[#DCE7EF]/30 bg-[#6F899D] px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-[#4F6F86]"
            >
              Ver propiedades
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => onNavigate('alianzas')}
              id="btn-hero-services"
              className="rounded-md border border-white/25 bg-white/8 px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition-all hover:bg-white/15"
            >
              Conocer servicios
            </button>
          </div>
        </div>
      </section>

      <section className="bg-veq-dark-pattern px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="editorial-kicker font-mono text-[#DCE7EF]/55">Propiedades destacadas</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Portafolio seleccionado
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-stone-300">
              Tomamos como base la estructura editorial de referencia y mantenemos la información real de Luxent: propiedades premium, acompañamiento comercial y una operación digital orientada a conversión.
            </p>
          </div>

          <SectionDivider inverse className="mt-8" />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {featuredDevelopments.map((development) => (
              <article
                key={development.id}
                onClick={() => onNavigate('desarrollos')}
                className="group cursor-pointer overflow-hidden rounded-[4px] border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:border-[#DCE7EF]/35 hover:shadow-[0_20px_40px_rgba(180,140,80,0.15)]"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={development.image}
                    alt={development.name}
                    className="h-full w-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.28em] text-[#DCE7EF]">{development.city}</p>
                    <h3 className="mt-2 font-heading text-3xl font-bold text-white">{development.name}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-stone-200">{development.description}</p>
                    <span className="mt-4 inline-flex rounded-md border border-white/25 bg-white/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.24em] text-white">
                      Ver ficha
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="-mt-8 px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-[#D4DEE6] bg-white px-6 py-14 shadow-[0_24px_70px_rgba(79,111,134,0.08)] md:px-10 lg:px-14">
          <div className="text-center">
            <span className="editorial-kicker font-mono text-[#31485C]/55">Qué nos diferencia</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#31485C] sm:text-4xl">
              Una propuesta premium con ejecución <span className="italic">digital</span>
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-stone-600">
              Nuestro objetivo es proporcionar una asesoría integral que combine el conocimiento profundo del mercado inmobiliario con tendencias tecnológicas, diseño visual y comunicación comercial.
            </p>
          </div>

          <SectionDivider className="mt-8" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => {
              return (
                <div key={item.title} className="rounded-[24px] border border-[#D4DEE6] bg-[#F8FBFD] p-6">
                  <EditorialIcon name={item.icon} />
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#31485C]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
              <span className="editorial-kicker font-mono text-[#31485C]/55">Servicios y metodología</span>
              <h3 className="mt-3 font-heading text-3xl font-bold text-[#31485C]">Comercialización, análisis y seguimiento</h3>
              <p className="mt-4 text-sm leading-relaxed text-stone-600">
                Luxent integra comercialización inmobiliaria, consultoría patrimonial, diseño visual y gestión digital para acompañar cada propiedad desde su salida al mercado hasta la postventa.
              </p>
              <div className="mt-8 rounded-[28px] bg-veq-dark-pattern p-6 text-white">
                <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.28em] text-[#DCE7EF]">
                  Infraestructura Luxent
                </div>
                <p className="mt-4 text-sm leading-relaxed text-stone-200">
                  Luxent se ha convertido en la carta de presentación de nuestros desarrollos: un espacio donde los clientes se sienten en casa y encuentran la confianza necesaria para avanzar en su proceso de compra.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {tools.map((tool) => (
                <div key={tool} className="rounded-[22px] border border-[#D4DEE6] bg-white p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="section-icon-chip mt-0.5">
                      <FileText className="h-[18px] w-[18px]" />
                    </span>
                    <p className="text-sm leading-relaxed text-stone-700">{tool}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-veq-dark-pattern px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span className="editorial-kicker font-mono text-[#DCE7EF]/55">Insights Luxent</span>
              <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Mercado, comercialización y producto <span className="italic">inmobiliario</span>
              </h2>
            </div>
            <button
              onClick={() => onNavigate('blog')}
              id="btn-goto-blog"
              className="group inline-flex items-center gap-2 self-start rounded-md border border-white/15 px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#DCE7EF] transition-colors hover:text-white"
            >
              Ver todos
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <SectionDivider inverse className="mt-8" />

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {BLOG_DATA.slice(0, 3).map((article) => (
              <article
                key={article.id}
                onClick={() => onNavigate('blog')}
                className="group cursor-pointer overflow-hidden rounded-[26px] border border-white/10 bg-white/5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-[#DCE7EF]/25"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
                  <div className="absolute right-4 top-4 rounded-full bg-black/55 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.24em] text-white">
                    {article.date}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.24em] text-[#DCE7EF]">{article.category}</p>
                    <h4 className="mt-2 line-clamp-2 font-heading text-xl font-bold text-white">{article.title}</h4>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <ContactSection
        title="Contacta con nuestros asesores"
        subtitle="En Luxent combinamos análisis de mercado, marketing digital, diseño visual y acompañamiento comercial para llevar cada propiedad al segmento correcto."
        formTitle="Solicita asesoría Luxent"
        formSubtitle="Cuéntanos si deseas comercializar una propiedad, estructurar su salida al mercado o recibir acompañamiento comercial y jurídico."
        defaultType="general"
        image={contactImage}
        imageAlt="Equipo Luxent"
      />
    </div>
  );
}
