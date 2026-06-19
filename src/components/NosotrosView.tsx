/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { FileText, Scale } from 'lucide-react';
import { INITIATIVES_DATA } from '../data';
import ContactSection from './ContactSection';
import EditorialIcon, { EditorialIconName } from './EditorialIcon';
import PageHero from './PageHero';
import SectionDivider from './SectionDivider';
import heroImage from '../assets/images/real-selected/tdp-facade-north.jpg';
import profileImage from '../assets/images/real-selected/tdp-reception.jpg';

const differentiators = [
  {
    title: 'Segmento premium',
    description: 'Enfocados en la comercialización de propiedades de lujo residenciales, comerciales y exclusivas.',
    icon: 'buildings',
  },
  {
    title: 'Experiencia digital',
    description: 'Soluciones tecnológicas de vanguardia para ofrecer una experiencia fluida de búsqueda, análisis y cierre.',
    icon: 'monitor',
  },
  {
    title: 'Marketing especializado',
    description: 'Campañas personalizadas, posicionamiento SEO/SEM, redes sociales y contenidos visuales para cada propiedad.',
    icon: 'chart-line-up',
  },
  {
    title: 'Diseño de vanguardia',
    description: 'Presentaciones visuales sofisticadas que capturan la esencia de cada desarrollo y realzan sus mejores atributos.',
    icon: 'pen-nib',
  },
  {
    title: 'Community management',
    description: 'Gestión de comunidades y presencia online para sostener relaciones de confianza y valor continuo.',
    icon: 'users-three',
  },
  {
    title: 'Equipo multidisciplinario',
    description: 'Nuestra clave está en un equipo comprometido con la excelencia comercial, operativa y digital.',
    icon: 'briefcase',
  },
] satisfies Array<{ title: string; description: string; icon: EditorialIconName }>;

export default function NosotrosView() {
  return (
    <div className="relative w-full">
      <PageHero
        image={heroImage}
        eyebrow="Quiénes somos"
        title="Luxent"
        subtitle="Nos especializamos en la comercialización de propiedades exclusivas dentro del segmento premium, con un enfoque innovador, digital y personalizado."
      />

      <section className="bg-veq-dark-pattern px-6 py-20 text-white">
        <div className="editorial-media-frame mx-auto grid max-w-7xl overflow-hidden rounded-[34px] border-white/10 bg-black/10 lg:grid-cols-2">
          <div className="p-8 md:p-12">
            <span className="editorial-kicker font-mono text-[#DCE7EF]/55">Perfil Luxent</span>
            <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white">Asesoría integral con base comercial y <span className="italic">digital</span></h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-stone-200">
              <p>
                Nuestro objetivo es combinar conocimiento profundo del mercado inmobiliario con las últimas tendencias tecnológicas y digitales. A través de atención al detalle, marketing, diseño y comunicación digital, facilitamos la compra, venta y alquiler de propiedades que redefinen el lujo.
              </p>
              <p>
                Luxent se ha convertido en un espacio donde los clientes se sienten en casa y encuentran la confianza necesaria para avanzar en la compra de proyectos inmobiliarios premium.
              </p>
              <p>
                Brindamos acompañamiento integral desde la definición comercial del producto hasta la escrituración y la postventa, con una operación pensada para clientes de alto perfil y desarrollos de alto valor.
              </p>
            </div>
          </div>

          <div className="min-h-[420px]">
            <img
              src={profileImage}
              alt="Perfil Luxent"
              className="h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      <section className="-mt-8 px-6 pb-24">
        <div className="editorial-panel mx-auto max-w-7xl rounded-[36px] px-6 py-14 md:px-10 lg:px-14">
          <div className="text-center">
            <span className="editorial-kicker font-mono text-[#31485C]/55">Qué nos diferencia</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#31485C] sm:text-4xl">
              Excelencia comercial, visual y <span className="italic">operativa</span>
            </h2>
          </div>

          <SectionDivider className="mt-8" />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {differentiators.map((item) => {
              return (
                <div key={item.title} className="editorial-card rounded-[24px] p-6">
                  <EditorialIcon name={item.icon} />
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#31485C]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{item.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-16">
            <div className="text-center">
              <span className="editorial-kicker font-mono text-[#31485C]/55">Nuestras iniciativas</span>
              <h3 className="mt-3 font-heading text-3xl font-bold text-[#31485C]">Líneas de trabajo que sostienen la experiencia <span className="italic">Luxent</span></h3>
            </div>

            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {INITIATIVES_DATA.map((initiative) => (
                <article key={initiative.id} className="editorial-media-frame overflow-hidden rounded-[28px] bg-white">
                  <div className="grid md:grid-cols-[1.15fr_1fr] lg:grid-cols-1">
                    <img
                      src={initiative.image}
                      alt={initiative.title}
                      className="h-full min-h-[260px] w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="editorial-dark-card border-0 bg-veq-dark-pattern p-6 text-white">
                      <h4 className="font-heading text-3xl font-bold">{initiative.title}</h4>
                      <p className="mt-3 text-sm leading-relaxed text-stone-200">{initiative.description}</p>
                      <p className="mt-4 border-t border-white/10 pt-4 text-xs leading-relaxed text-[#DCE7EF]">{initiative.impact}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-2">
              <div className="editorial-card rounded-[24px] p-6">
                <div className="flex items-start gap-3">
                  <FileText className="mt-0.5 h-5 w-5 text-[#6F899D]" />
                  <div>
                    <h4 className="font-heading text-2xl font-bold text-[#31485C]">Estudios y análisis de mercado</h4>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      Trabajamos con análisis enfocados en Zona Country, Las Lomas y perfil del cliente para ayudar a definir producto inmobiliario, precios y formas de pago con mayor precisión comercial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="editorial-card rounded-[24px] p-6">
                <div className="flex items-start gap-3">
                  <Scale className="mt-0.5 h-5 w-5 text-[#6F899D]" />
                  <div>
                    <h4 className="font-heading text-2xl font-bold text-[#31485C]">Asesoramiento jurídico</h4>
                    <p className="mt-3 text-sm leading-relaxed text-stone-600">
                      Brindamos asesoramiento y acompañamiento al desarrollador y al cliente desde la etapa de gestación del proyecto inmobiliario hasta la escrituración y el seguimiento posterior.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection
        title="Contacta con nuestros asesores"
        subtitle="Agenda una cita con uno de nuestros asesores y conoce cómo Luxent puede acompañarte en comercialización, posicionamiento y cierre."
        formTitle="Solicita una asesoría"
        formSubtitle="Cuéntanos tu necesidad y te contactaremos con el equipo adecuado."
        defaultType="general"
        image={profileImage}
        imageAlt="Luxent"
      />
    </div>
  );
}
