/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, FileText, Globe, Layers, Presentation, Scale, Sparkles, Users } from 'lucide-react';
import ContactSection from './ContactSection';
import PageHero from './PageHero';
import SectionDivider from './SectionDivider';
import heroImage from '../assets/images/veq_countryclub_1781741180731.jpg';
import contactImage from '../assets/images/veq_jack_levy_1781739538027.jpg';

const services = [
  {
    title: 'Venta y alquiler de propiedades de lujo',
    description: 'Comercialización de propiedades residenciales, comerciales y exclusivas dentro del segmento premium.',
    icon: Globe,
  },
  {
    title: 'Asesoría personalizada',
    description: 'Atención exclusiva para clientes de alto perfil con acompañamiento durante todo el proceso comercial.',
    icon: Users,
  },
  {
    title: 'Consultoría de inversiones',
    description: 'Análisis estratégico de oportunidades inmobiliarias con visión patrimonial y de largo plazo.',
    icon: Compass,
  },
  {
    title: 'Diseño visual y tours',
    description: 'Renders, fotografía y recorridos virtuales pensados para presentar cada propiedad con alto estándar visual.',
    icon: Presentation,
  },
  {
    title: 'Marketing digital',
    description: 'Campañas adaptadas a cada propiedad con SEO/SEM, pauta digital, redes sociales y contenidos visuales.',
    icon: Sparkles,
  },
  {
    title: 'Community management',
    description: 'Gestión de comunidad, presencia online y relacionamiento continuo con prospectos y clientes.',
    icon: Layers,
  },
];

const tools = [
  'Listas de precios en tiempo real',
  'Cotizaciones personalizadas',
  'Brochure digital',
  'Mapas 3D del desarrollo',
  'Disponibilidad en tiempo real',
  'Estados de cuenta',
  'Alertas de falta de pago',
  'Emisión de CFDI y complementos de pago',
  'Apropiación de leads y clientes',
  'Reportes de ventas en tiempo real',
  'Seguimiento a expediente de postventa',
  'Toda la información del cliente en un mismo lugar',
];

export default function AlianzasView() {
  const topServices = services.slice(0, 3);
  const bottomServices = services.slice(3);

  return (
    <div className="relative w-full text-left">
      <PageHero
        image={heroImage}
        eyebrow="Servicios Luxent"
        title="Comercialización premium con estructura digital"
        subtitle="Integramos marketing, diseño, análisis comercial, atención personalizada y herramientas de seguimiento para posicionar propiedades exclusivas y acompañar a cada cliente con precisión."
      />

      <section className="bg-veq-dark-pattern px-6 py-20 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-[#DCE7EF]">Servicios estratégicos</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white sm:text-4xl">
              La base comercial que sostiene cada operación
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-stone-300">
              Mantenemos la información real de Luxent, pero la presentamos con una estructura visual editorial: portada, bloques destacados, paneles blancos y cierres de contacto consistentes.
            </p>
          </div>

          <SectionDivider inverse className="mt-8" />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {topServices.map((service) => {
              const Icon = service.icon;
              return (
                <article key={service.title} className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="inline-flex rounded-2xl bg-white/10 p-3 text-[#DCE7EF]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-6 font-heading text-2xl font-bold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-300">{service.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="-mt-8 px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[36px] border border-[#D4DEE6] bg-white px-6 py-14 shadow-[0_24px_70px_rgba(79,111,134,0.08)] md:px-10 lg:px-14">
          <div className="text-center">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-[#6F899D]">Metodología, procesos y herramientas</span>
            <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-[#31485C] sm:text-4xl">
              Operación comercial en tiempo real
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-stone-600">
              Administramos leads, ventas y postventa con herramientas que concentran pricing, disponibilidad, documentación, cobranza y seguimiento comercial en una sola operación.
            </p>
          </div>

          <SectionDivider className="mt-8" />

          <div className="mt-12 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="rounded-[28px] bg-veq-dark-pattern p-8 text-white">
                <span className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-[#DCE7EF]">Análisis comercial</span>
                <h3 className="mt-4 font-heading text-3xl font-bold">Benchmarking, perfil del cliente y definición de producto</h3>
                <p className="mt-4 text-sm leading-relaxed text-stone-200">
                  El análisis de mercado permite definir producto inmobiliario, precios, formas de pago y narrativa comercial con base en zonas objetivo como Country y Las Lomas.
                </p>
                <div className="mt-8 rounded-[22px] border border-white/10 bg-white/5 p-5">
                  <div className="flex items-start gap-3">
                    <Scale className="mt-0.5 h-5 w-5 text-[#DCE7EF]" />
                    <div>
                      <h4 className="font-heading text-xl font-bold text-white">Asesoramiento jurídico</h4>
                      <p className="mt-2 text-sm leading-relaxed text-stone-300">
                        Acompañamiento al desarrollador y al cliente desde la gestación del proyecto inmobiliario hasta la escrituración y la postventa.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
              {tools.map((tool) => (
                <div key={tool} className="rounded-[22px] border border-[#D4DEE6] bg-[#F8FBFD] p-5 shadow-sm">
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex rounded-full bg-[#6F899D]/10 p-2 text-[#6F899D]">
                      <FileText className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-relaxed text-stone-700">{tool}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {bottomServices.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-[24px] border border-[#D4DEE6] bg-white p-6 shadow-sm">
                  <div className="inline-flex rounded-2xl bg-[#6F899D]/10 p-3 text-[#6F899D]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-2xl font-bold text-[#31485C]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-veq-dark-pattern px-6 py-20 text-white">
        <div className="mx-auto max-w-5xl rounded-[30px] border border-white/10 bg-black/10 p-8 text-center md:p-12">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.32em] text-[#DCE7EF]">Infraestructura Luxent</span>
          <h2 className="mt-4 font-heading text-4xl font-bold tracking-tight text-white">
            Un espacio que transmite confianza y acelera decisiones
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-stone-200">
            Luxent funciona como carta de presentación de nuestros desarrollos y genera la confianza necesaria para concretar operaciones con claridad comercial, soporte documental y seguimiento puntual.
          </p>
        </div>
      </section>

      <ContactSection
        title="Contacta con nuestros asesores"
        subtitle="Cuéntanos si necesitas comercializar una propiedad, estructurar su salida al mercado o recibir acompañamiento comercial y jurídico."
        formTitle="Solicitar asesoría Luxent"
        formSubtitle="Comparte el contexto de tu proyecto o propiedad y te contactaremos con el especialista adecuado."
        defaultType="general"
        image={contactImage}
        imageAlt="Luxent"
      />
    </div>
  );
}
