/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  defaultType?: 'general' | 'terreno' | 'desarrollo';
  developmentName?: string;
  customMessage?: string;
}

export default function ContactForm({
  title = 'Inicia tu proyecto con Luxent',
  subtitle = 'Llena el formulario y un asesor se pondrá en contacto contigo para atender tu consulta comercial.',
  defaultType = 'general',
  developmentName,
  customMessage
}: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    type: defaultType,
    city: 'Guadalajara',
    message: customMessage || (developmentName ? `Me interesa información sobre la propiedad: ${developmentName}` : ''),
    newsletter: true
  });

  React.useEffect(() => {
    if (customMessage) {
      setFormData(prev => ({ ...prev, message: customMessage }));
    }
  }, [customMessage]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      alert('Por favor completa los campos requeridos (Nombre, E-mail, Teléfono).');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1500);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      phone: '',
      type: defaultType,
      city: 'Guadalajara',
      message: '',
      newsletter: true
    });
    setSubmitted(false);
  };

  return (
    <div className="w-full rounded-2xl border border-[#005A44]/15 bg-white p-6 shadow-xl md:p-8" id="contact-panel">
      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center py-12 text-center"
        >
          <div className="rounded-full bg-[#1F8B74]/15 p-4 text-[#1F8B74]">
            <CheckCircle2 className="h-14 w-14 animate-pulse" />
          </div>
          <h3 className="mt-6 font-heading text-2xl font-bold text-[#005A44]">¡Mensaje recibido!</h3>
          <p className="mx-auto mt-3 max-w-sm text-sm text-stone-600">
            Gracias <span className="font-semibold text-[#005A44]">{formData.name}</span>, hemos registrado tu solicitud con éxito.
          </p>

          <div className="mt-8 w-full rounded-xl border border-[#005A44]/12 bg-[#FAF8F4] p-5 text-left text-xs text-stone-700">
            <p className="border-b border-stone-200 pb-2 font-semibold uppercase tracking-wider text-[#1F8B74]">Detalles del ticket</p>
            <div className="mt-2.5 space-y-1.5 font-mono">
              <p><span className="text-stone-500">Motivo:</span> {formData.type === 'terreno' ? 'Comercialización de Proyecto' : formData.type === 'desarrollo' ? 'Interés en Propiedad' : 'Asesoría General'}</p>
              {developmentName && <p><span className="text-stone-500">Propiedad:</span> {developmentName}</p>}
              <p><span className="text-stone-500">Ubicación de interés:</span> {formData.city}</p>
              <p><span className="text-stone-500">Teléfono:</span> {formData.phone}</p>
              <p><span className="text-stone-500">Fecha:</span> {new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <button
            onClick={handleReset}
            className="mt-8 rounded-full border border-[#1F8B74]/30 bg-transparent px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-stone-700 transition-all hover:bg-[#1F8B74]/10 hover:text-[#1F8B74]"
            id="btn-contact-reset"
          >
            Enviar otra consulta
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-1 text-left">
            <h3 className="font-heading text-2xl font-bold tracking-tight text-[#005A44]">{title}</h3>
            <p className="font-light text-sm text-stone-605">{subtitle}</p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5 text-left">
              <label htmlFor="input-name" className="text-[10px] font-bold uppercase tracking-wider text-[#415A52]/90">Nombre completo *</label>
              <input
                id="input-name"
                type="text"
                required
                placeholder="Ej. Nombre Apellido"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-405 outline-none transition-all focus:border-[#1F8B74] focus:ring-1 focus:ring-[#1F8B74]"
              />
            </div>

            <div className="space-y-1.5 text-left">
              <label htmlFor="input-phone" className="text-[10px] font-bold uppercase tracking-wider text-[#415A52]/90">Teléfono de contacto *</label>
              <input
                id="input-phone"
                type="tel"
                required
                placeholder="Ej. 33 1142 9932"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-405 outline-none transition-all focus:border-[#1F8B74] focus:ring-1 focus:ring-[#1F8B74]"
              />
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="input-email" className="text-[10px] font-bold uppercase tracking-wider text-[#415A52]/90">E-mail *</label>
            <input
              id="input-email"
              type="email"
              required
              placeholder="ejemplo@correo.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-405 outline-none transition-all focus:border-[#1F8B74] focus:ring-1 focus:ring-[#1F8B74]"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1.5 text-left">
              <label htmlFor="select-type" className="text-[10px] font-bold uppercase tracking-wider text-[#415A52]/90">Área de interés</label>
              <div className="relative">
                <select
                  id="select-type"
                  value={formData.type}
                  onChange={(e: any) => setFormData({ ...formData, type: e.target.value, message: e.target.value === 'terreno' ? 'Quiero comercializar un proyecto o propiedad dentro del segmento premium...' : formData.message })}
                  className="w-full appearance-none rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 pr-10 text-sm text-stone-900 outline-none transition-all focus:border-[#1F8B74]"
                >
                  <option value="general" className="bg-white">Quiero Asesoría</option>
                  <option value="desarrollo" className="bg-white">Comprar / Rentar Propiedad</option>
                  <option value="terreno" className="bg-white">Comercializar un Proyecto</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-stone-500" />
              </div>
            </div>

            <div className="space-y-1.5 text-left">
              <label htmlFor="select-city" className="text-[10px] font-bold uppercase tracking-wider text-[#415A52]/90">Ciudad</label>
              <div className="relative">
                <select
                  id="select-city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full appearance-none rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 pr-10 text-sm text-stone-900 outline-none transition-all focus:border-[#1F8B74]"
                >
                  <option value="Guadalajara" className="bg-white">Guadalajara</option>
                  <option value="Cancún" className="bg-white">Cancún</option>
                  <option value="León" className="bg-white">León</option>
                  <option value="Los Cabos" className="bg-white">Los Cabos</option>
                  <option value="Nuevo Vallarta" className="bg-white">Nuevo Vallarta</option>
                  <option value="Tijuana" className="bg-white">Tijuana</option>
                  <option value="Tulum" className="bg-white">Tulum</option>
                  <option value="Monterrey" className="bg-white">Monterrey</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3.5 top-3.5 h-4 w-4 text-stone-500" />
              </div>
            </div>
          </div>

          <div className="space-y-1.5 text-left">
            <label htmlFor="text-message" className="text-[10px] font-bold uppercase tracking-wider text-[#415A52]/90">Mensaje</label>
            <textarea
              id="text-message"
              rows={3}
              placeholder="Escribe aquí tus dudas o detalles específicos de tu consulta..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full resize-none rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-405 outline-none transition-all focus:border-[#1F8B74] focus:ring-1 focus:ring-[#1F8B74]"
            />
          </div>

          <div className="flex items-start gap-2.5 py-1 text-left">
            <input
              id="checkbox-newsletter"
              type="checkbox"
              checked={formData.newsletter}
              onChange={(e) => setFormData({ ...formData, newsletter: e.target.checked })}
              className="mt-1 h-4 w-4 rounded border-stone-300 text-[#1F8B74] focus:ring-[#1F8B74]"
            />
            <label htmlFor="checkbox-newsletter" className="text-[11px] leading-tight text-stone-500">
              Acepto los términos de privacidad y deseo recibir actualizaciones periódicas sobre propiedades premium, herramientas comerciales y novedades de Luxent.
            </label>
          </div>

          <button
            type="submit"
            id="btn-contact-submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center gap-2.5 rounded-lg bg-[#1F8B74] px-6 py-4.5 text-sm font-semibold tracking-wider text-white uppercase shadow-lg shadow-[#1F8B74]/15 transition-all duration-300 hover:bg-[#005A44] active:scale-98 disabled:opacity-50"
          >
            {isSubmitting ? 'Registrando datos...' : 'Enviar mensaje'}
            <Send className="h-4 w-4" />
          </button>
        </form>
      )}
    </div>
  );
}
