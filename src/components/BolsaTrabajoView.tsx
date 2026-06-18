/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, MapPin, Briefcase, ChevronDown, Check, X, UploadCloud, CheckCircle, GraduationCap, DollarSign, Award, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { VACANCIES_DATA } from '../data';
import { JobVacancy } from '../types';

export default function BolsaTrabajoView() {
  const [selectedCity, setSelectedCity] = useState('TODAS');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedJob, setSelectedJob] = useState<JobVacancy | null>(null);
  
  // Accordion open status for "Somos VEQ" values representation
  const [openValueIdx, setOpenValueIdx] = useState<number | null>(0);

  // Application process status
  const [isApplying, setIsApplying] = useState(false);
  const [appliedVacancyId, setAppliedVacancyId] = useState<string | null>(null);
  const [applicantFile, setApplicantFile] = useState<File | null>(null);
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [formError, setFormError] = useState('');

  const cities = ['TODAS', 'GUADALAJARA', 'NUEVO VALLARTA', 'CANCÚN', 'TIJUANA'];

  const valuesAccordion = [
    {
      title: "Desarrollo y Bienestar Humano",
      desc: "Promovemos el equilibrio ideal entre la vida personal y laboral. Creemos que un colaborador motivado, sano y capacitado continuamente de forma gratuita es el motor más potente para erigir fiducias sólidas."
    },
    {
      title: "Compromiso Social Tangible",
      desc: "Nuestros equipos participan activamente en programas de alfabetización en obra civil, entrega de raciones balanceadas gratuitas para albañiles y voluntariados en la fundación infantil Kokone."
    },
    {
      title: "Cultura de Innovación y Cero Burocracia",
      desc: "Gozamos de un clima libre de jerarquías lentas. Fomentamos la voz de los profesionales jóvenes donde las buenas ideas de diseño se validan de forma ágil y se ejecutan con presupuestos bien dotados."
    },
    {
      title: "Certeza Corporativa GPTW",
      desc: "Orgullosamente certificados como Great Place to Work. Brindamos esquemas de prestaciones muy superiores a legislaciones tradicionales de México, seguros médicos completos, bonos de productividad y excelente clima de compañerismo."
    }
  ];

  const filteredJobs = VACANCIES_DATA.filter((job) => {
    const matchesCity = selectedCity === 'TODAS' || job.city.toUpperCase() === selectedCity;
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          job.department.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCity && matchesSearch;
  });

  const handleApplySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName || !applicantEmail || !applicantPhone) {
      setFormError("Por favor completa los campos requeridos.");
      return;
    }

    setFormError("");
    setIsApplying(true);
    setTimeout(() => {
      setIsApplying(false);
      setAppliedVacancyId(selectedJob?.id || 'general');
    }, 1500);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setApplicantFile(e.target.files[0]);
    }
  };

  const handleResetApplication = () => {
    setAppliedVacancyId(null);
    setApplicantFile(null);
    setApplicantName('');
    setApplicantEmail('');
    setApplicantPhone('');
    setSelectedJob(null);
    setFormError("");
  };

  return (
    <div className="relative w-full text-left">
      {/* HEADER HERO */}
      <section className="bg-[#F3ECE2] border-b border-[#005A44]/15 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Talento de Alto Rendimiento</span>
              <h1 className="font-heading text-4xl font-bold text-[#005A44] sm:text-5xl">Bolsa de Trabajo</h1>
              <p className="max-w-xl text-stone-600 text-sm">
                Buscamos profesionales comprometidos con la excelencia y que deseen trascender. Únete a una de las empresas fiduciarias y constructoras de mayor prestigio en el país.
              </p>
            </div>

            {/* Direct Search input */}
            <div className="relative max-w-md w-full md:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar vacante por puesto..."
                className="w-full rounded-full border border-stone-200 bg-white px-11 py-3 text-xs text-stone-900 placeholder-stone-450 outline-none transition-all focus:border-[#1F8B74] shadow-sm"
                id="search-jobs"
              />
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-stone-400" />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER CONTROL PANEL */}
      <section className="bg-[#FAF8F4] border-b border-stone-250/55 py-4 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap items-center gap-2">
          <span className="font-mono text-[10px] text-stone-500 font-bold uppercase tracking-widest mr-2">Sede Laboral</span>
          {cities.map((city) => {
            const isActive = selectedCity === city;
            return (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                id={`btn-job-city-${city.toLowerCase()}`}
                className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#1F8B74] text-white font-bold' 
                    : 'border border-stone-200 bg-white text-stone-500 hover:bg-[#1F8B74]/5 hover:text-[#1F8B74]'
                }`}
              >
                {city}
              </button>
            );
          })}
        </div>
      </section>

      {/* JOB VACANCIES LIST */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Convocatorias Abiertas</span>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#005A44]">Nuestras Vacantes Activas</h2>
          </div>

          {filteredJobs.length === 0 ? (
            <div className="text-center border border-dashed border-stone-200 py-16 rounded-xl bg-white">
              <p className="text-stone-500">Por el momento no hay convocatorias activas para el puesto o sede elegida.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCity('TODAS'); }}
                className="mt-4 rounded-full bg-[#1F8B74] px-5 py-2 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#005A44]"
              >
                Ver todas las vacantes
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredJobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  id={`job-row-${job.id}`}
                  className="group cursor-pointer rounded-xl border border-stone-200/65 bg-white p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all duration-300 hover:border-[#1F8B74]/35 hover:shadow-md"
                >
                  <div className="space-y-1.5 text-left">
                    <span className="font-mono text-[9px] font-bold text-[#1F8B74] uppercase tracking-widest px-2 py-0.5 rounded bg-[#1F8B74]/10 border border-[#1F8B74]/20">
                      {job.department}
                    </span>
                    <h3 className="font-heading text-lg font-bold text-[#005A44] group-hover:text-[#1F8B74] transition-colors mt-2">
                      {job.title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-stone-500">
                      <MapPin className="h-3.5 w-3.5 text-stone-450" />
                      {job.city}
                    </div>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedJob(job);
                    }}
                    id={`btn-apply-row-${job.id}`}
                    className="self-start sm:self-auto rounded-full bg-[#1F8B74] px-5 py-2.5 text-xs font-semibold text-white tracking-wider uppercase transition-all duration-300 hover:bg-[#005A44]"
                  >
                    Postularme
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* SOMOS VEQ VALUES ACCORDION SECTION */}
      <section className="bg-[#FAF8F4] border-t border-[#005A44]/15 px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            
            {/* Visual Call To Action */}
            <div className="lg:col-span-5 space-y-4 text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Cultura Organizacional</span>
              <h2 className="font-heading text-3xl font-bold text-[#005A44]">Somos VEQ</h2>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                Nos apasiona crear comunidad tanto fuera como dentro de nuestras oficinas. Buscamos el equilibrio idóneo de bienestar personal y desarrollo profesional constante.
              </p>
              <div className="rounded-xl border border-[#005A44]/15 bg-white p-5 shadow-sm">
                <p className="text-xs font-semibold text-[#005A44]">Certificaciones Clave</p>
                <div className="mt-2.5 flex flex-wrap gap-2.5 text-[10px] font-mono text-stone-500">
                  <span className="bg-emerald-600/10 text-emerald-700 border border-emerald-600/20 rounded px-2.5 py-1">🏆 GPTW Certified 2026</span>
                  <span className="bg-emerald-600/10 text-emerald-700 border border-emerald-600/20 rounded px-2.5 py-1">🌱 Empresa Socialmente Responsable</span>
                </div>
              </div>
            </div>

            {/* Accordion Frame */}
            <div className="lg:col-span-7 space-y-3 text-left">
              {valuesAccordion.map((v, idx) => {
                const isOpen = openValueIdx === idx;
                return (
                  <div
                    key={v.title}
                    className="rounded-xl border border-stone-200 bg-white shadow-sm overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenValueIdx(isOpen ? null : idx)}
                      id={`btn-value-accordion-${idx}`}
                      className="w-full flex items-center justify-between p-5 text-left text-sm font-semibold tracking-wide text-stone-800 hover:text-[#1F8B74] transition-colors focus:outline-none"
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-xs text-[#1F8B74] font-bold">0{idx + 1}.</span>
                        {v.title}
                      </span>
                      <ChevronDown className={`h-4.5 w-4.5 transition-transform duration-300 text-stone-400 ${isOpen ? 'rotate-180 text-[#1F8B74]' : ''}`} />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="px-5 pb-5 pt-0 text-xs text-stone-605 leading-relaxed font-light border-t border-stone-100 bg-stone-50/50 p-5">
                            {v.desc}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* VACANCY DETAIL MODAL DRAWER */}
      <AnimatePresence>
        {selectedJob && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00120e]/85 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-2xl w-full rounded-2xl bg-white border border-[#005A44]/15 shadow-2xl p-6 md:p-8 space-y-6 my-8 max-h-[90vh] overflow-y-auto"
              id="job-modal-panel"
            >
              <button
                onClick={() => { setSelectedJob(null); setAppliedVacancyId(null); setSelectedJob(null); }}
                className="absolute right-4 top-4 rounded-full bg-[#FAF8F4] p-2 text-stone-500 hover:text-[#005A44] hover:bg-white border border-stone-200 shadow-sm focus:outline-none cursor-pointer"
                aria-label="Cerrar vacante"
                id="btn-close-job-modal"
              >
                <X className="h-5 w-5" />
              </button>

              {appliedVacancyId === selectedJob.id ? (
                <div className="flex flex-col items-center justify-center py-10 text-center space-y-5">
                  <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-700 border border-emerald-500/25 animate-bounce">
                    <CheckCircle className="h-12 w-12" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#005A44]">¡Postulación Enviada con éxito!</h3>
                  <p className="max-w-md text-stone-600 text-sm leading-relaxed">
                    Hemos recibido correctamente tus datos para el puesto de <span className="font-semibold text-[#005A44]">{selectedJob.title}</span>. Nuestro departamento de Gestión de Talento revisará tu currículum y portafolio en los próximos 3 días hábiles.
                  </p>
                  <p className="text-xs font-mono text-stone-500">Número de referencia: VEQ-JOB-{Math.floor(Math.random() * 10000)}</p>
                  <button
                    onClick={handleResetApplication}
                    className="rounded-full bg-[#1F8B74] px-6 py-2.5 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#005A44] transition-all cursor-pointer shadow-sm"
                  >
                    Salir de la vacante
                  </button>
                </div>
              ) : (
                <div className="space-y-6 text-left">
                  {/* Title block */}
                  <div className="space-y-2 border-b border-stone-100 pb-4">
                    <span className="font-mono text-[9px] font-bold text-[#1F8B74] uppercase tracking-widest px-2 py-0.5 rounded bg-[#1F8B74]/10 border border-[#1F8B74]/20">
                      {selectedJob.department}
                    </span>
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#005A44] mt-2">{selectedJob.title}</h2>
                    <div className="flex items-center gap-1.5 text-xs text-stone-600">
                      <MapPin className="h-4 w-4 text-[#1F8B74]" />
                      {selectedJob.city}
                    </div>
                  </div>

                  {/* Requirements & Benefits details */}
                  <div className="grid gap-6 sm:grid-cols-2">
                    {/* Requirements */}
                    <div className="space-y-3">
                      <h4 className="font-heading text-base font-semibold text-[#005A44] flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-[#1F8B74]" />
                        Requisitos
                      </h4>
                      <ul className="space-y-2 pl-1.5">
                        {selectedJob.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-600 leading-relaxed font-light">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#1F8B74]" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Benefits */}
                    <div className="space-y-3 bg-[#FAF8F4] border border-stone-200 rounded-xl p-4">
                      <h4 className="font-heading text-base font-semibold text-[#005A44] flex items-center gap-2">
                        <Award className="h-4 w-4 text-[#1F8B74]" />
                        Nuestros Beneficios
                      </h4>
                      <ul className="space-y-2">
                        {selectedJob.benefits.map((ben, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-stone-700 leading-relaxed font-light">
                            <Check className="mt-0.5 h-3.5 w-3.5 text-emerald-600 shrink-0" />
                            {ben}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Administrative form */}
                  <form onSubmit={handleApplySubmit} className="border-t border-stone-100 pt-6 space-y-4">
                    <h4 className="font-heading text-base font-semibold text-[#005A44]">Postularme ahora</h4>
                    
                    {formError && (
                      <div className="text-xs bg-red-50 text-red-700 border border-red-200 rounded p-2">
                        {formError}
                      </div>
                    )}

                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        type="text"
                        required
                        placeholder="Nombre completo"
                        value={applicantName}
                        onChange={(e) => setApplicantName(e.target.value)}
                        className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 outline-none focus:border-[#1F8B74]"
                        id="applicant-name"
                      />
                      <input
                        type="tel"
                        required
                        placeholder="Teléfono móvil"
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 outline-none focus:border-[#1F8B74]"
                        id="applicant-phone"
                      />
                    </div>
                    <input
                      type="email"
                      required
                      placeholder="Correo electrónico"
                      value={applicantEmail}
                      onChange={(e) => setApplicantEmail(e.target.value)}
                      className="w-full rounded-lg border border-stone-200 bg-stone-50 px-4 py-3 text-xs text-stone-900 placeholder-stone-400 outline-none focus:border-[#1F8B74]"
                      id="applicant-email"
                    />

                    {/* Resume File selection */}
                    <div className="rounded-xl border border-dashed border-stone-300 bg-stone-50 p-5 text-center flex flex-col items-center justify-center">
                      <UploadCloud className="h-8 w-8 text-[#1F8B74] mb-2" />
                      <p className="text-xs text-stone-500">Seleccionar currículum o brochure profesional (.pdf, máx. 5MB)</p>
                      
                      <div className="mt-3">
                        <label 
                          htmlFor="pdf-file-upload" 
                          className="cursor-pointer rounded-full bg-white border border-stone-200 px-4 py-2 text-[11px] font-semibold text-stone-700 hover:bg-[#1F8B74] hover:text-white transition-all inline-block uppercase tracking-wider shadow-sm"
                          id="btn-upload-lbl"
                        >
                          {applicantFile ? 'Cambiar archivo' : 'Buscar Archivo'}
                        </label>
                        <input
                          id="pdf-file-upload"
                          type="file"
                          accept=".pdf"
                          onChange={handleFileUpload}
                          className="hidden"
                        />
                      </div>

                      {applicantFile && (
                        <p className="mt-2.5 font-mono text-[10px] text-emerald-700 font-bold flex items-center gap-1 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-0.5 rounded">
                          <Check className="h-3 w-3" />
                          {applicantFile.name} ({(applicantFile.size / 1024 / 1024).toFixed(2)} MB)
                        </p>
                      )}
                    </div>

                    <button
                      type="submit"
                      disabled={isApplying}
                      className="w-full flex items-center justify-center gap-2 rounded-lg bg-[#1F8B74] px-6 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#005A44] transition-all disabled:opacity-50 cursor-pointer"
                      id="btn-job-submit"
                    >
                      {isApplying ? 'Enviando postulación...' : 'Completar Postulación'}
                    </button>
                  </form>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
