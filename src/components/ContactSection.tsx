import React from 'react';
import ContactForm from './ContactForm';
import SectionDivider from './SectionDivider';

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
  formTitle?: string;
  formSubtitle?: string;
  defaultType?: 'general' | 'terreno' | 'desarrollo';
  developmentName?: string;
  customMessage?: string;
  image: string;
  imageAlt?: string;
}

export default function ContactSection({
  title = 'Contacta con nuestros asesores',
  subtitle = 'Agenda una cita con uno de nuestros asesores y conoce todos los detalles de tu próxima operación inmobiliaria. Completa el formulario y nos comunicaremos contigo lo más pronto posible.',
  formTitle = 'Solicita atención personalizada',
  formSubtitle = 'Compártenos tus datos y el motivo de tu consulta para canalizarte con el equipo adecuado.',
  defaultType = 'general',
  developmentName,
  customMessage,
  image,
  imageAlt = 'Luxent'
}: ContactSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#F3F7FA] px-6 pb-24 pt-8">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <span className="translate-y-12 rotate-[78deg] text-[84px] font-light tracking-[0.45em] text-[#DCE7EF]/60 sm:text-[132px]">
          LUXENT
        </span>
      </div>

      <div className="editorial-panel relative mx-auto max-w-7xl rounded-[36px] px-6 py-14 md:px-10 lg:px-14">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl font-bold tracking-tight text-[#31485C]">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">{subtitle}</p>
        </div>

        <SectionDivider className="mt-8" />

        <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <ContactForm
              title={formTitle}
              subtitle={formSubtitle}
              defaultType={defaultType}
              developmentName={developmentName}
              customMessage={customMessage}
              surface="plain"
            />
          </div>

          <div className="lg:col-span-5">
            <div className="editorial-media-frame overflow-hidden rounded-[28px] bg-[#F3F7FA] shadow-sm">
              <img
                src={image}
                alt={imageAlt}
                className="aspect-[4/3] h-full w-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
