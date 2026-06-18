/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Calendar, Search, User, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { BLOG_DATA } from '../data';
import { BlogArticle } from '../types';
import ContactSection from './ContactSection';
import PageHero from './PageHero';
import SectionDivider from './SectionDivider';
import heroImage from '../assets/images/veq_travessera_1781741204206.jpg';
import contactImage from '../assets/images/veq_jack_levy_1781739538027.jpg';

export default function BlogView() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('TODAS');
  const [selectedArticle, setSelectedArticle] = useState<BlogArticle | null>(null);

  const categories = ['TODAS', 'NOTAS DE PRENSA', 'TENDENCIAS', 'CONSEJOS'];

  const filteredArticles = BLOG_DATA.filter((article) => {
    const matchesCategory = selectedCategory === 'TODAS' || article.category.toUpperCase() === selectedCategory;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative w-full text-left">
      <PageHero
        image={heroImage}
        eyebrow="Insights Luxent"
        title="Blog"
        subtitle="Contenido sobre comercialización premium, marketing inmobiliario, análisis de mercado y operación digital aplicada al sector inmobiliario."
      />

      <section className="bg-veq-dark-pattern px-6 py-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-5">
            <div className="flex flex-wrap items-center gap-3">
              {categories.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    id={`btn-blog-category-${category.replace(' ', '-').toLowerCase()}`}
                    className={`rounded-md border px-4 py-2 text-[10px] font-bold uppercase tracking-[0.22em] transition-all ${
                      isActive
                        ? 'border-[#DCE7EF] bg-[#DCE7EF] text-[#31485C]'
                        : 'border-white/15 bg-white/5 text-[#DCE7EF] hover:bg-white/10'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}

              <div className="relative ml-auto w-full max-w-md">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar artículo..."
                  className="w-full rounded-md border border-white/15 bg-white/8 px-11 py-3 text-xs text-white placeholder:text-stone-400 outline-none transition-all focus:border-[#DCE7EF]"
                  id="search-blog"
                />
                <Search className="absolute left-4 top-3.5 h-4 w-4 text-stone-400" />
              </div>
            </div>

            <SectionDivider inverse className="mt-2 max-w-5xl" />
          </div>

          {filteredArticles.length === 0 ? (
            <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 py-20 text-center">
              <p className="text-stone-300">No se encontraron artículos con tus filtros de búsqueda.</p>
            </div>
          ) : (
            <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredArticles.map((article) => (
                <article
                  key={article.id}
                  onClick={() => setSelectedArticle(article)}
                  className="group cursor-pointer overflow-hidden rounded-[26px] border border-white/10 bg-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-[#DCE7EF]/25"
                  id={`article-card-${article.id}`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/25 to-transparent" />
                    <div className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                      {article.date}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.22em] text-[#DCE7EF]">{article.category}</p>
                      <h3 className="mt-2 line-clamp-2 font-heading text-2xl font-bold leading-snug text-white">{article.title}</h3>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

      <ContactSection
        title="Contacta con nuestros asesores"
        subtitle="Si alguno de estos temas conecta con tu proyecto o tu estrategia comercial, conversemos. Podemos ayudarte a estructurar la salida al mercado correcta."
        formTitle="Solicita una conversación"
        formSubtitle="Compártenos tu consulta y te contactaremos con el equipo Luxent."
        defaultType="general"
        image={contactImage}
        imageAlt="Luxent"
      />

      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-[#1f2933]/85 p-4 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              className="relative my-8 w-full max-w-4xl overflow-hidden rounded-[28px] border border-[#D4DEE6] bg-white shadow-2xl"
              id="article-reader-panel"
            >
              <button
                onClick={() => setSelectedArticle(null)}
                className="absolute right-4 top-4 z-10 rounded-full border border-stone-200 bg-white/95 p-2 text-stone-600 shadow-sm hover:text-[#4F6F86] focus:outline-none"
                aria-label="Cerrar artículo"
                id="btn-close-reader"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="relative aspect-[16/8] w-full overflow-hidden">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-left">
                  <span className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[9px] font-bold tracking-[0.2em] text-white uppercase">
                    {selectedArticle.category}
                  </span>
                  <h2 className="mt-3 font-heading text-3xl font-bold tracking-tight text-white md:text-4xl">
                    {selectedArticle.title}
                  </h2>
                </div>
              </div>

              <div className="max-h-[60vh] space-y-6 overflow-y-auto p-6 text-left text-sm font-light leading-relaxed text-stone-700 md:p-8">
                <div className="flex flex-wrap items-center gap-4 border-b border-stone-200 pb-4 font-mono text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <User className="h-3.5 w-3.5" />
                    Equipo Luxent
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {selectedArticle.date}
                  </span>
                </div>

                <div className="space-y-4 text-stone-700">
                  <p className="text-base font-normal leading-relaxed italic text-stone-800">{selectedArticle.excerpt}</p>
                  <p>{selectedArticle.content}</p>
                  <p>
                    En Luxent la estrategia comercial parte del análisis del mercado, del perfil del cliente y de la definición correcta del producto inmobiliario. Esa combinación permite estructurar mejor la comunicación, el pricing y el seguimiento comercial.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
