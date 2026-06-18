/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Calendar, User, ArrowRight, X, Mail, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_DATA } from '../data';
import { BlogArticle } from '../types';

export default function BlogView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TODAS');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const categories = ['TODAS', 'NOTAS DE PRENSA', 'TENDENCIAS', 'CONSEJOS'];

  const filteredArticles = BLOG_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'TODAS' || article.category.toUpperCase() === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
      <section className="border-b border-[#005A44]/15 bg-[#F3ECE2] px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Insights Luxent</span>
              <h1 className="font-heading text-4xl font-bold text-[#005A44] sm:text-5xl">Mercado, producto y comercialización</h1>
              <p className="max-w-xl text-sm text-stone-600">
                Contenido sobre comercialización premium, marketing inmobiliario, análisis de mercado y operación digital aplicada al sector inmobiliario.
              </p>
            </div>

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

      <section className="border-b border-stone-200/50 bg-[#FAF8F4] py-4 px-6">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-2">
          {categories.map((category) => {
            const isActive = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                id={`btn-blog-category-${category.replace(' ', '-').toLowerCase()}`}
                className={`rounded-full px-5 py-1.5 text-xs font-medium tracking-wider uppercase transition-all duration-300 ${
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

      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {filteredArticles.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-stone-200 bg-white py-20 text-center">
              <p className="text-stone-500">No se encontraron artículos con tus filtros de búsqueda.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('TODAS');
                }}
                className="mt-4 rounded-full bg-[#1F8B74] px-5 py-2 text-xs font-bold tracking-wider text-white uppercase hover:bg-[#005A44]"
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
                    <div className="absolute right-4 top-4 rounded bg-[#005A44] px-3 py-1 font-mono text-[9px] font-bold tracking-widest text-[#8CC5C3] uppercase border border-[#005A44]/10 backdrop-blur-sm">
                      {article.category}
                    </div>
                  </div>

                  <div className="flex min-h-[220px] flex-col justify-between space-y-3 p-6">
                    <div className="space-y-2.5 text-left">
                      <div className="flex items-center gap-3 text-[10px] font-mono text-stone-555">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3.5 w-3.5 text-stone-500" />
                          {article.date}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <User className="h-3.5 w-3.5 text-stone-500" />
                          Equipo Luxent
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-bold leading-snug text-[#005A44] transition-colors group-hover:text-[#1F8B74] line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-xs leading-relaxed text-stone-600 line-clamp-3">{article.excerpt}</p>
                    </div>

                    <span className="flex items-center gap-1 border-t border-stone-100 pt-4 font-mono text-[10px] font-bold tracking-wider text-[#1F8B74] uppercase transition-colors group-hover:text-[#005A44]">
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

      <section className="border-t border-[#005A44]/15 bg-gradient-to-br from-[#FAF8F4] to-[#F3ECE2] py-16 px-6">
        <div className="mx-auto max-w-4xl rounded-2xl border border-stone-200 bg-white p-8 text-center shadow-md">
          <span className="mb-3 inline-block rounded-full border border-[#1F8B74]/20 bg-[#1F8B74]/10 p-3.5 text-[#1F8B74] animate-pulse">
            <Mail className="h-6 w-6" />
          </span>
          <h3 className="font-heading text-2xl font-bold leading-tight text-[#005A44]">Boletín Luxent</h3>
          <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-stone-600">
            Recibe análisis de mercado, servicios digitales y novedades de propiedades premium directamente en tu bandeja de entrada.
          </p>

          {newsletterSubscribed ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mx-auto mt-6 flex max-w-md items-center justify-center gap-2 rounded-lg border border-emerald-500/25 bg-emerald-500/10 py-3 text-sm font-semibold text-emerald-700"
            >
              <CheckCircle className="h-5 w-5 animate-bounce" />
              ¡Te has suscrito con éxito al boletín!
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="mx-auto mt-6 flex max-w-md flex-col gap-3 sm:flex-row">
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
                className="rounded-full bg-[#1F8B74] px-6 py-3 text-xs font-bold tracking-wider text-white uppercase transition-all hover:bg-[#005A44] active:scale-95 shadow-sm cursor-pointer"
              >
                Suscribirme
              </button>
            </form>
          )}
        </div>
      </section>

      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#00120e]/85 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative my-8 w-full max-w-3xl overflow-hidden rounded-2xl border border-[#005A44]/15 bg-white shadow-2xl"
              id="article-reader-panel"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-stone-200 bg-white/95 p-2 text-stone-600 shadow-sm hover:text-[#005A44] focus:outline-none cursor-pointer"
                aria-label="Cerrar artículo"
                id="btn-close-reader"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/9] w-full overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="rounded bg-[#005A44] px-2.5 py-0.5 text-[9px] font-bold tracking-widest text-white uppercase">
                    {selectedArticle.category}
                  </span>
                  <h2 className="mt-2.5 font-heading text-2xl font-bold tracking-tight text-[#005A44] md:text-3xl line-clamp-2 leading-snug">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              <div className="max-h-[60vh] space-y-6 overflow-y-auto p-6 text-left text-sm font-light leading-relaxed text-stone-700 md:p-8">
                <div className="flex items-center gap-4 border-b border-stone-200 pb-4 font-mono text-xs text-stone-500">
                  <p>Escrito por: <span className="text-stone-700">Equipo Luxent</span></p>
                  <p>Fecha: <span className="text-stone-700">{selectedArticle.date}</span></p>
                </div>

                <div className="space-y-4 text-stone-755">
                  <p className="text-base font-normal leading-relaxed italic text-stone-800">{selectedArticle.excerpt}</p>
                  <div className="space-y-4">
                    <p>{selectedArticle.content}</p>
                    <p>
                      En Luxent la estrategia comercial parte del análisis del mercado, del perfil del cliente y de la definición correcta del producto inmobiliario. Esa combinación permite estructurar mejor la comunicación, el pricing y el seguimiento comercial.
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between rounded-b-xl border border-stone-200 bg-stone-50/50 p-6 pt-6">
                  <div>
                    <h5 className="font-heading text-sm font-bold text-[#005A44]">¿Te interesa una asesoría?</h5>
                    <p className="mt-0.5 text-xs text-stone-605">Nuestro equipo puede ayudarte a estructurar la estrategia comercial adecuada.</p>
                  </div>
                  <button
                    onClick={() => {
                      setSelectedArticle(null);
                      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                    }}
                    className="rounded-full bg-[#1F8B74] px-4 py-2 text-xs font-bold tracking-wider text-white uppercase transition-colors hover:bg-[#005A44] shadow-sm cursor-pointer"
                  >
                    Solicitar contacto
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
