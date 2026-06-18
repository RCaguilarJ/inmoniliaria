/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Compass, FileText, Globe, Layers, Presentation, Scale, Sparkles, Users } from 'lucide-react';
import ContactForm from './ContactForm';

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
  return (
    <div className="relative w-full text-left">
      <section className="border-b border-[#005A44]/15 bg-[#F3ECE2] px-6 py-20 text-center">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Servicios Luxent</span>
        <h1 className="mt-2 font-heading text-4xl font-bold text-[#005A44] sm:text-5xl">Comercialización premium con estructura digital</h1>
        <p className="mx-auto mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
          Integramos marketing, diseño, análisis comercial, atención personalizada y herramientas de seguimiento para posicionar propiedades exclusivas y acompañar a cada cliente con precisión.
        </p>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div key={service.title} className="rounded-2xl border border-stone-200 bg-[#FAF8F4] p-6 shadow-sm">
                  <div className="w-fit rounded-xl bg-[#1F8B74]/10 p-3 text-[#1F8B74]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 font-heading text-xl font-bold text-[#005A44]">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-[#005A44]/15 bg-[#F3ECE2] px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5 space-y-4">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Metodología, procesos y herramientas</span>
            <h2 className="font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Operación comercial en tiempo real</h2>
            <p className="text-sm leading-relaxed text-stone-600">
              Administramos leads, ventas y postventa con herramientas que concentran pricing, disponibilidad, documentación, cobranza y seguimiento comercial en una sola operación.
            </p>

            <div className="rounded-2xl border border-[#005A44]/12 bg-white p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <Scale className="mt-0.5 h-5 w-5 text-[#1F8B74]" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#005A44]">Asesoramiento jurídico</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Acompañamiento al desarrollador y al cliente desde la gestación del proyecto inmobiliario hasta la escrituración y la postventa.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
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
      </section>

      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Análisis comercial</span>
              <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44] sm:text-4xl">Benchmarking, perfil del cliente y definición de producto</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                El análisis de mercado permite definir producto inmobiliario, precios, formas de pago y narrativa comercial con base en zonas objetivo como Country y Las Lomas.
              </p>
            </div>

            <div className="rounded-2xl border border-[#005A44]/12 bg-[#FAF8F4] p-6">
              <div className="flex items-start gap-3">
                <Layers className="mt-0.5 h-5 w-5 text-[#1F8B74]" />
                <div>
                  <h3 className="font-heading text-lg font-bold text-[#005A44]">Infraestructura Luxent</h3>
                  <p className="mt-1 text-sm leading-relaxed text-stone-600">
                    Un espacio que funciona como carta de presentación de nuestros desarrollos y genera la confianza necesaria para concretar operaciones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <ContactForm
              title="Solicitar asesoría Luxent"
              subtitle="Cuéntanos si necesitas comercializar una propiedad, estructurar su salida al mercado o recibir acompañamiento comercial y jurídico."
              defaultType="general"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
