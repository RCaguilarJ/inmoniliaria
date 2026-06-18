/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, X, Mail, CheckCircle, BookOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_DATA } from '../data';
import { BlogArticle } from '../types';

export default function BlogView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TODAS');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['TODAS', 'INVERSIÓN INMOBILIARIA'];

  const filteredArticles = BLOG_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'TODAS' || article.category.toUpperCase() === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 2000);
  };

  return (
    <div className="relative w-full text-left">
      {/* HEADER HERO */}
      <section className="bg-[#F3ECE2] border-b border-[#005A44]/15 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Educación Financiera</span>
              <h1 className="font-heading text-4xl font-bold text-[#005A44] sm:text-5xl">Nuestro Blog e Informes</h1>
              <p className="max-w-xl text-stone-600 text-sm">
                Mantente actualizado con las principales tendencias de plusvalía, fórmulas de cálculo de ROI y novedades de fomento comunitario en el sector inmobiliario de México.
              </p>
            </div>

            {/* Direct Search input */}
            <div className="relative max-w-md w-full md:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar artículo..."
                className="w-full rounded-full border border-stone-200 bg-white px-11 py-3 text-xs text-stone-900 placeholder-stone-450 outline-none transition-all focus:border-[#1F8B74] shadow-sm"
                id="search-blog"
              />
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-stone-400" />
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY SELECTOR */}
      <section className="bg-[#FAF8F4] border-b border-stone-200/50 py-4 px-6">
        <div className="mx-auto max-w-7xl flex flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                id={`btn-blog-category-${category.replace(' ', '-').toLowerCase()}`}
                className={`rounded-full px-5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                  isActive 
                    ? 'bg-[#1F8B74] text-white font-bold' 
                    : 'border border-stone-200 bg-white text-stone-600 hover:bg-[#1F8B74]/5 hover:text-[#1F8B74]'
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>
      </section>

      {/* ARTICLES GRID */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-20 border border-dashed border-stone-200 rounded-2xl bg-white">
              <p className="text-stone-500">No se encontraron artículos con tus filtros de búsqueda.</p>
              <button 
                onClick={() => { setSearchTerm(''); setSelectedCategory('TODAS'); }} 
                className="mt-4 rounded-full bg-[#1F8B74] px-5 py-2 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#005A44]"
              >
                Ver todos
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer overflow-hidden rounded-xl border border-stone-200/60 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1F8B74]/35 hover:shadow-lg"
                  id={`article-card-${article.id}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute right-4 top-4 rounded bg-[#005A44] px-3 py-1 font-mono text-[9px] font-bold text-[#8CC5C3] uppercase tracking-widest border border-[#005A44]/10 backdrop-blur-sm">
                      {article.category}
                    </div>
                  </div>

                  <div className="p-6 space-y-3 flex flex-col justify-between min-h-[220px]">
                    <div className="space-y-2.5 text-left">
                      <div className="flex items-center gap-3 text-[10px] font-mono text-stone-555">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-stone-500" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5 text-stone-500" />
                          Consejo Editorial VEQ
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-[#005A44] transition-colors group-hover:text-[#1F8B74] leading-snug line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>

                    <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#1F8B74] group-hover:text-[#005A44] transition-colors pt-4 border-t border-stone-100">
                      Leer artículo completo
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER ROW SUB */}
      <section className="bg-gradient-to-br from-[#FAF8F4] to-[#F3ECE2] border-t border-[#005A44]/15 py-16 px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-stone-200 bg-white p-8 shadow-md text-center">
          <span className="rounded-full bg-[#1F8B74]/10 p-3.5 text-[#1F8B74] inline-block mb-3 border border-[#1F8B74]/20 animate-pulse">
            <Mail className="h-6 w-6" />
          </span>
          <h3 className="font-heading text-2xl font-bold text-[#005A44] leading-tight">Boletín Mensual Financiero</h3>
          <p className="mt-2 text-stone-600 text-sm max-w-md mx-auto leading-relaxed">
            Recibe análisis de plusvalía y ofertas especiales de preventas de residencias de Grupo VEQ directamente en tu bandeja de entrada de forma trimestral.
          </p>

          {newsletterSubscribed ? (
            <motion.div 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mt-6 flex items-center justify-center gap-2 text-emerald-700 font-semibold text-sm bg-emerald-500/10 border border-emerald-500/25 rounded-lg py-3 max-w-md mx-auto"
            >
              <CheckCircle className="h-5 w-5 animate-bounce" />
              ¡Te has suscrito con éxito al boletín!
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                required
                placeholder="Tu correo electrónico..."
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="flex-1 rounded-full border border-stone-200 bg-stone-50 px-5 py-3 text-xs text-stone-900 placeholder-stone-400 outline-none focus:border-[#1F8B74] shadow-inner"
                id="newsletter-email-input"
              />
              <button
                type="submit"
                id="btn-sub-newsletter"
                className="rounded-full bg-[#1F8B74] px-6 py-3 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#005A44] active:scale-95 transition-all shadow-sm cursor-pointer"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </section>

      {/* ARTICLE READER POPUP MODAL */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00120e]/85 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative max-w-3xl w-full rounded-2xl bg-white border border-[#005A44]/15 shadow-2xl overflow-hidden my-8"
              id="article-reader-panel"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-white/95 p-2 text-stone-600 hover:text-[#005A44] border border-stone-200 shadow-sm focus:outline-none cursor-pointer"
                aria-label="Cerrar artículo"
                id="btn-close-reader"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="rounded bg-[#005A44] px-2.5 py-0.5 text-[9px] font-bold text-white uppercase tracking-widest">
                    {selectedArticle.category}
                  </span>
                  <h2 className="mt-2.5 font-heading text-2xl md:text-3xl font-bold text-[#005A44] tracking-tight line-clamp-2 leading-snug">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              <div className="p-6 md:p-8 space-y-6 max-h-[60vh] overflow-y-auto font-light leading-relaxed text-stone-700 text-sm text-left">
                
                {/* Meta details */}
                <div className="flex items-center gap-4 text-xs text-stone-500 font-mono pb-4 border-b border-stone-200">
                  <p>Escrito por: <span className="text-stone-700">Consejo Editorial VEQ</span></p>
                  <p>Fecha: <span className="text-stone-700">{selectedArticle.date}</span></p>
                </div>

                <div className="space-y-4 font-light text-stone-755">
                  <p className="text-base text-stone-800 font-normal leading-relaxed italic">
                    {selectedArticle.excerpt}
                  </p>
                  
                  {/* Styled body content lines */}
                  <div className="space-y-4">
                    <p>{selectedArticle.content}</p>
                    <p>Las proyecciones realizadas demuestran la robustez de las tasas de ocupación que logran los corredores analizados. Además del beneficio económico por concepto de rentas directas, el factor de plusvalía acumulado anual, promediado del 8% al 12% neto en la última década, convierte a los fideicomisos de preventa compartidos de Grupo VEQ en una de las rutas fiduciarias más estables y líquidas para diversificar carteras patrimoniales en todo México.</p>
                  </div>
                </div>

                {/* Closing signature */}
                <div className="pt-6 border-t border-stone-200 flex justify-between items-center bg-stone-50/50 -mx-6 md:-mx-8 p-6 mt-6 rounded-b-xl border">
                  <div>
                    <h5 className="font-heading text-sm font-bold text-[#005A44]">¿Te interesa invertir?</h5>
                    <p className="text-xs text-stone-605 mt-0.5">Nuestros asesores hipotecarios están disponibles.</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }}
                    className="rounded-full bg-[#1F8B74] px-4 py-2 text-xs font-bold text-white uppercase tracking-wider hover:bg-[#005A44] transition-colors shadow-sm cursor-pointer"
                  >
                    Cotizar hoy mismo
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
