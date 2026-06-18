/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, MapPin, Layers, Building, Eye, X, TreePine, ShieldAlert, Wifi, Info,
  ShieldCheck, Video, Globe, FileText, Check, Lock, Sparkles, Play, Pause, RefreshCw, Volume2, HelpCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DEVELOPMENTS_DATA } from '../data';
import { Development } from '../types';
import ContactForm from './ContactForm';
import CountryClubLogo from './CountryClubLogo';

interface DevelopmentsViewProps {
  initialCityFilter?: string;
  onClearInitialCityFilter?: () => void;
}

// Custom interactive structures to represent details from corporate flyer
interface UnitInventory {
  code: string;
  bedrooms: number;
  area: number;
  price: string;
  status: 'Disponible' | 'Apartado' | 'Vendido';
}

interface WhyBenefit {
  title: string;
  desc: string;
  icon: 'ShieldCheck' | 'Building' | 'Sparkles' | 'Globe' | 'MapPin' | 'TreePine' | 'Check' | 'Layers' | 'FileText';
}

interface WorkProgressMilestone {
  label: string;
  status: 'completado' | 'en-proceso' | 'pendiente';
  percentage: number;
  date: string;
}

const CUSTOM_PROJECT_BENEFITS: Record<string, { benefits: WhyBenefit[]; progress: number; milestones: WorkProgressMilestone[]; units: UnitInventory[] }> = {
  'veq-opera': {
    benefits: [
      { title: 'Fideicomiso Autorizado BanBajío', desc: 'Respaldo fiduciario sólido e inquebrantable. Capital garantizado bajo estructuración con BanBajío para máxima protección.', icon: 'ShieldCheck' },
      { title: 'Gran Plusvalía Histórica', desc: 'Av. Juan Palomar supera la media metropolitana con un 12.4% de plusvalía anualizada constante.', icon: 'Layers' },
      { title: 'Lobby Monumental Triple Altura', desc: 'Impresionante recepción en mármol y maderas finas que establece la categoría Grand Luxury del edificio.', icon: 'Building' },
      { title: 'Doble Frente de Viento', desc: 'Ventilación cruzada pasiva e iluminación natural envolvente que minimiza los consumos energéticos.', icon: 'Sparkles' }
    ],
    progress: 100,
    milestones: [
      { label: 'Cimentaciones y Pilotes Profundos', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Estructuración Vertical (Piso 32)', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Instalaciones y Mamposterías', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Equipamiento de Alberca y Club', status: 'completado', percentage: 100, date: 'Concluido' }
    ],
    units: [
      { code: 'Depto 302', bedrooms: 2, area: 115, price: '$5,450,000 MXN', status: 'Disponible' },
      { code: 'Depto 501', bedrooms: 1, area: 82, price: '$4,120,000 MXN', status: 'Vendido' },
      { code: 'Depto 804', bedrooms: 3, area: 154, price: '$7,845,000 MXN', status: 'Apartado' },
      { code: 'Depto 1201 (PH)', bedrooms: 3, area: 210, price: '$11,250,000 MXN', status: 'Disponible' },
      { code: 'Depto 1402', bedrooms: 2, area: 135, price: '$6,910,000 MXN', status: 'Disponible' }
    ]
  },
  'veq-torredelprado': {
    benefits: [
      { title: 'Fideicomiso BBVA', desc: 'Administración de obra y cuentas bajo supervisión de auditoría de BBVA Bancomer Co.', icon: 'Globe' },
      { title: 'Ubicación Premium Providencia', desc: 'Rodeado de camellones arbolados, cafeterías de especialidad de autor y exclusivas zonas de esparcimiento.', icon: 'MapPin' },
      { title: 'Comunidades que Mejoran Vidas', desc: 'Diseño integral biofílico con amplios jardines y andadores para un contacto natural permanente.', icon: 'TreePine' },
      { title: 'Conectividad & Rentas Rápidas', desc: 'Excelente perfil para alquiler a perfiles corporativos directivos y de consulados.', icon: 'Check' }
    ],
    progress: 100,
    milestones: [
      { label: 'Forjado de Sótanos', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Estructuración Vertical Completa', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Instalación de Carpinterías y Canceles', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Pruebas e Individualización Legal', status: 'completado', percentage: 100, date: 'Concluido' }
    ],
    units: [
      { code: 'Depto 102', bedrooms: 2, area: 110, price: '$4,950,000 MXN', status: 'Vendido' },
      { code: 'Depto 404', bedrooms: 2, area: 110, price: '$5,150,000 MXN', status: 'Disponible' },
      { code: 'Depto 601', bedrooms: 3, area: 145, price: '$6,800,000 MXN', status: 'Disponible' },
      { code: 'Depto 902 (PH)', bedrooms: 3, area: 198, price: '$9,480,000 MXN', status: 'Apartado' }
    ]
  },
  'veq-countryclub': {
    benefits: [
      { title: 'Frente al Green del Golf Club', desc: 'Vistas panorámicas infinitas al emblemático e histórico campo de golf Country Club.', icon: 'TreePine' },
      { title: 'Simulador Virtual Trackman', desc: 'Perfecciona tu swing sin salir de casa con el mejor equipamiento analítico de golf digital de Zapopan.', icon: 'Layers' },
      { title: 'Doble Filtro de Acceso', desc: 'Máxima seguridad con circuito cerrado integral inteligente redundante y guardias dedicados.', icon: 'ShieldCheck' },
      { title: 'Lanzamiento Exclusivo Preventa', desc: 'La más valiosa tasa de ganancia por plusvalía durante las fases cruciales de edificación.', icon: 'Sparkles' }
    ],
    progress: 75,
    milestones: [
      { label: 'Estructura Principal del Rascacielos', status: 'completado', percentage: 100, date: 'Terminado' },
      { label: 'Instalaciones Hidráulicas y Eléctricas', status: 'en-proceso', percentage: 85, date: 'Actual (Jun 2026)' },
      { label: 'Mamposterías e Interiores de Lujo', status: 'en-proceso', percentage: 60, date: 'En Curso' },
      { label: 'Amenidades de Country y Detalles', status: 'pendiente', percentage: 0, date: 'Octubre 2026' }
    ],
    units: [
      { code: 'Depto 204', bedrooms: 2, area: 130, price: '$7,200,000 MXN', status: 'Disponible' },
      { code: 'Depto 502', bedrooms: 2, area: 130, price: '$7,450,000 MXN', status: 'Disponible' },
      { code: 'Depto 1101', bedrooms: 3, area: 185, price: '$11,900,000 MXN', status: 'Apartado' },
      { code: 'Depto 2203 (Sky)', bedrooms: 3, area: 240, price: '$16,400,000 MXN', status: 'Disponible' }
    ]
  },
  'veq-travessera': {
    benefits: [
      { title: 'Arquitectura精品 Boutique', desc: 'Exclusivo complejo de solo 45 residencias verticales, limitando el tráfico y promoviendo el confort.', icon: 'Building' },
      { title: 'Eficiencia Espacial Completa', desc: 'Plantas sumamente aprovechadas que eliminan pasillos inútiles, maximizando iluminación.', icon: 'Layers' },
      { title: 'Fideicomiso Seguro BBVA', desc: 'Certeza fiduciaria íntegra para blindar tu patrimonio financiero en cada etapa.', icon: 'ShieldCheck' },
      { title: 'Bajo Costo Administrativo', desc: 'Diseño estructural de bajo consumo que limita las elevadas cuotas habituales de mantenimiento.', icon: 'Check' }
    ],
    progress: 100,
    milestones: [
      { label: 'Pilotes y Subestructura', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Estructura Completa de Acero', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Acabados Premium Recubrimientos', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Firma Notarial y Entregas', status: 'completado', percentage: 100, date: 'Concluido' }
    ],
    units: [
      { code: 'Depto 101', bedrooms: 1, area: 75, price: '$3,600,000 MXN', status: 'Disponible' },
      { code: 'Depto 203', bedrooms: 2, area: 98, price: '$4,450,000 MXN', status: 'Vendido' },
      { code: 'Depto 304', bedrooms: 2, area: 98, price: '$4,600,000 MXN', status: 'Disponible' }
    ]
  },
  'veq-paseodegracia': {
    benefits: [
      { title: 'Condominio Horizontal de Autor', desc: 'Pocos desarrollos ofrecen lotes de alta gama en un entorno arbolado privado de total paz.', icon: 'TreePine' },
      { title: 'Vialidad Orgánica Sinuosa', desc: 'El diseño urbano limita el tránsito acelerado, incrementando la estética natural del fraccionamiento.', icon: 'Globe' },
      { title: 'Casa Club Magnífica Estilo Wellness', desc: 'Alberca climatizada, canchas de pádel reglamentarias y área social de usos múltiples.', icon: 'Sparkles' },
      { title: 'Seguridad Militarizada 24/7', desc: 'Doble esclusa de acceso y controles automatizados por reconocimiento de placas.', icon: 'ShieldCheck' }
    ],
    progress: 40,
    milestones: [
      { label: 'Trazados y Catastros Individuales', status: 'completado', percentage: 100, date: 'Terminado' },
      { label: 'Canalizaciones Subterráneas Redes', status: 'completado', percentage: 100, date: 'Terminado' },
      { label: 'Pavimentos de Alta Calidad e Ingresos', status: 'en-proceso', percentage: 35, date: 'En curso' },
      { label: 'Equipamiento Casa Club de Lujo', status: 'pendiente', percentage: 0, date: 'Octubre 2026' }
    ],
    units: [
      { code: 'Lote 03', bedrooms: 0, area: 310, price: '$4,340,000 MXN', status: 'Disponible' },
      { code: 'Lote 06', bedrooms: 0, area: 310, price: '$4,340,000 MXN', status: 'Vendido' },
      { code: 'Lote 14', bedrooms: 0, area: 420, price: '$6,100,000 MXN', status: 'Disponible' },
      { code: 'Lote 17', bedrooms: 0, area: 350, price: '$4,900,000 MXN', status: 'Apartado' },
      { code: 'Lote 32', bedrooms: 0, area: 310, price: '$4,400,000 MXN', status: 'Disponible' }
    ]
  }
};

const getProjectExtraData = (id: string, name: string) => {
  return CUSTOM_PROJECT_BENEFITS[id] || {
    benefits: [
      { title: 'Fideicomiso Garantizado Seguro', desc: 'Respaldo fiduciario completo para proteger tu inversión de capital contra riesgos legales.', icon: 'ShieldCheck' },
      { title: 'Ubicación de Alta Demanda', desc: 'Excelente conectividad metropolitana y cercanía a centros educativos y comerciales premium.', icon: 'MapPin' },
      { title: 'Amenidades para el Trato Humano', desc: 'Gimnasio climatizado, terrazas de convivencia y seguridad patrullada las 24 horas.', icon: 'Sparkles' },
      { title: 'Plusvalía Estable Sostenida', desc: 'Historial de plusvalía y facilidades de colocación inmediata en el sector inmobiliario.', icon: 'Layers' }
    ],
    progress: 92,
    milestones: [
      { label: 'Cimentaciones y Sótanos', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Estructuración Vertical Completa', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Instalaciones de Ductería y Redes', status: 'completado', percentage: 100, date: 'Concluido' },
      { label: 'Acabados Finales y Pinturas', status: 'en-proceso', percentage: 70, date: 'En curso' }
    ],
    units: [
      { code: 'Depto 201', bedrooms: 2, area: 85, price: '$3,850,000 MXN', status: 'Disponible' },
      { code: 'Depto 302', bedrooms: 1, area: 64, price: '$2,900,000 MXN', status: 'Vendido' },
      { code: 'Depto 405', bedrooms: 2, area: 92, price: '$4,150,000 MXN', status: 'Disponible' },
      { code: 'Depto 502 (PH)', bedrooms: 3, area: 140, price: '$6,400,000 MXN', status: 'Disponible' }
    ]
  };
};

const renderIconByName = (name: string, className = "h-5 w-5 text-veq-gold") => {
  switch (name) {
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Building': return <Building className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'MapPin': return <MapPin className={className} />;
    case 'TreePine': return <TreePine className={className} />;
    case 'Check': return <Check className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'FileText': return <FileText className={className} />;
    default: return <Sparkles className={className} />;
  }
};

export default function DevelopmentsView({ initialCityFilter, onClearInitialCityFilter }: DevelopmentsViewProps) {
  const [selectedCity, setSelectedCity] = useState<string>('TODAS');
  const [selectedStatus, setSelectedStatus] = useState<string>('TODOS');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedDevelopment, setSelectedDevelopment] = useState<Development | null>(null);

  // Sub-tabs states for the interactive project modal
  const [activeModalTab, setActiveModalTab] = useState<'info' | 'why' | 'progress' | 'units'>('info');
  const [selectedUnit, setSelectedUnit] = useState<string | null>(null);
  const [customMessage, setCustomMessage] = useState<string>('');
  const [isPlayingVideo, setIsPlayingVideo] = useState<boolean>(true);
  const [videoProgress, setVideoProgress] = useState<number>(35); // simulated drone position percentage

  // Sync with home map click redirection if helpful
  useEffect(() => {
    if (initialCityFilter) {
      setSelectedCity(initialCityFilter.toUpperCase());
    }
  }, [initialCityFilter]);

  // Reset interactive modal states when switching selected project
  useEffect(() => {
    if (selectedDevelopment) {
      setActiveModalTab('info');
      setSelectedUnit(null);
      setCustomMessage('');
      setIsPlayingVideo(true);
      setVideoProgress(35);
    }
  }, [selectedDevelopment]);

  const cities = ['TODAS', 'CANCÚN', 'GUADALAJARA', 'LEÓN', 'LOS CABOS', 'NUEVO VALLARTA', 'TIJUANA', 'TULUM'];
  const statuses = ['TODOS', 'CONCLUIDOS', 'EN DESARROLLO', 'PRÓXIMO'];

  const filteredDevelopments = DEVELOPMENTS_DATA.filter((dev) => {
    const matchesCity = selectedCity === 'TODAS' || dev.city.toUpperCase() === selectedCity;
    
    let matchesStatus = true;
    if (selectedStatus !== 'TODOS') {
      if (selectedStatus === 'CONCLUIDOS') matchesStatus = dev.status === 'Concluido';
      if (selectedStatus === 'EN DESARROLLO') matchesStatus = dev.status === 'En Desarrollo';
      if (selectedStatus === 'PRÓXIMO') matchesStatus = dev.status === 'Próximo';
    }

    const matchesSearch = dev.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          dev.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          dev.address.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCity && matchesStatus && matchesSearch;
  });

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    if (onClearInitialCityFilter) {
      onClearInitialCityFilter();
    }
  };

  return (
    <div className="relative w-full">
      {/* HEADER HERO */}
      <section className="bg-[#F3ECE2] border-b border-[#005A44]/15 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Portafolio Inmobiliario</span>
              <h1 className="font-heading text-4xl font-bold text-[#005A44] sm:text-5xl">Nuestros Desarrollos</h1>
              <p className="max-w-xl text-stone-605 text-sm">
                Explora nuestra gama de residencias de vanguardia. Diseñamos espacios óptimos que combinan plusvalía, sustentabilidad y excelente ubicación.
              </p>
            </div>

            {/* Direct Search input */}
            <div className="relative max-w-md w-full md:w-80">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar desarrollo o calle..."
                className="w-full rounded-full border border-stone-250 bg-white px-11 py-3 text-xs text-stone-900 placeholder-stone-400 outline-none transition-all focus:border-[#1F8B74] shadow-sm"
                id="search-developments"
              />
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-stone-400" />
            </div>
          </div>
        </div>
      </section>

      {/* FILTER CONTROL PANEL */}
      <section className="bg-white border-b border-[#005A44]/15 py-6 px-6">
        <div className="mx-auto max-w-7xl space-y-5">
          {/* Cities Toggles */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest">Filtrar por Ciudad</span>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => {
                const isActive = selectedCity === city;
                return (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    id={`tab-city-${city.toLowerCase()}`}
                    className={`rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#1F8B74] text-white font-bold shadow-sm' 
                        : 'border border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                    }`}
                  >
                    {city}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status Progress Toggles */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] font-bold text-stone-500 uppercase tracking-widest">Filtrar por Avance de Obra</span>
            <div className="flex flex-wrap gap-2">
              {statuses.map((status) => {
                const isActive = selectedStatus === status;
                return (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    id={`tab-status-${status.replace(' ', '-').toLowerCase()}`}
                    className={`border rounded-full px-4.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-all duration-300 ${
                      isActive 
                        ? 'border-[#1F8B74] bg-[#1F8B74]/10 text-[#1F8B74] font-semibold' 
                        : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                    }`}
                  >
                    {status}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO GRID CATALOG */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          {filteredDevelopments.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#005A44]/20 py-20 text-center bg-[#FCFAF7]">
              <span className="rounded-full bg-stone-100 p-4 text-stone-500 border border-stone-200">
                <Info className="h-8 w-8" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-[#005A44]">Sin desarrollos disponibles</h3>
              <p className="mt-2 text-stone-600 text-sm max-w-xs">
                Por el momento no tenemos proyectos registrados que coincidan con la combinación de filtros seleccionada.
              </p>
              <button
                onClick={() => { setSelectedCity('TODAS'); setSelectedStatus('TODOS'); setSearchTerm(''); }}
                className="mt-6 rounded-full bg-[#1F8B74] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#005A44]"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDevelopments.map((dev) => (
                <div
                  key={dev.id}
                  onClick={() => setSelectedDevelopment(dev)}
                  className="group cursor-pointer overflow-hidden rounded-xl border border-[#005A44]/15 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#1F8B74]/40 hover:shadow-md"
                  id={`dev-card-${dev.id}`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Status badge representation */}
                    <div className="absolute left-4 top-4 flex gap-2">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        dev.status === 'Concluido' 
                          ? 'bg-[#1F8B74] text-white shadow-sm' 
                          : dev.status === 'En Desarrollo'
                          ? 'bg-[#005A44] text-white shadow-sm'
                          : 'bg-stone-600 text-white shadow-sm'
                      }`}>
                        {dev.status}
                      </span>
                    </div>

                    <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-[#005A44] uppercase tracking-widest shadow-sm border border-stone-100">
                      {dev.city}
                    </div>

                    {dev.bannerText && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                        <p className="font-serif italic text-xs text-[#8CC5C3] font-medium">{dev.bannerText}</p>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-heading text-xl font-bold text-[#005A44] transition-colors group-hover:text-[#1F8B74] flex items-center gap-2">
                        {dev.name}
                        {dev.id === 'veq-countryclub' && (
                          <span className="inline-block transition-transform duration-300 group-hover:scale-110">
                            <CountryClubLogo className="h-6 w-6 overflow-visible" showText={false} />
                          </span>
                        )}
                      </h4>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-500">
                        <MapPin className="h-3 w-3 text-[#1F8B74]" />
                        <span className="line-clamp-1">{dev.address}</span>
                      </p>
                    </div>

                    <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {dev.description}
                    </p>

                    <div className="flex items-center justify-between border-t border-stone-100 pt-4">
                      <div className="flex gap-4 text-xs font-mono text-stone-500">
                        {dev.units && (
                          <span className="flex items-center gap-1">
                            <Layers className="h-3.5 w-3.5 text-stone-600" />
                            {dev.units} u.
                          </span>
                        )}
                        {dev.areaSqM && (
                          <span className="flex items-center gap-1">
                            <Building className="h-3.5 w-3.5 text-stone-600" />
                            {dev.areaSqM.toLocaleString()} m²
                          </span>
                        )}
                      </div>
                      
                      <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#1F8B74] group-hover:text-[#005A44] transition-colors">
                        Ficha Técnica
                        <Eye className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DEVELOPMENT DETAIL POPUP MODAL */}
      <AnimatePresence>
        {selectedDevelopment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#00120e]/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="relative max-w-5xl w-full rounded-2xl bg-white border border-[#005A44]/15 shadow-2xl overflow-hidden my-8"
              id="dev-modal-panel"
            >
              <button
                onClick={() => setSelectedDevelopment(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-stone-100 p-2 text-stone-600 hover:bg-[#1F8B74] hover:text-white border border-stone-200 focus:outline-none transition-colors"
                aria-label="Cerrar ventana"
                id="btn-close-dev-modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="grid lg:grid-cols-12 max-h-[90vh] overflow-y-auto lg:overflow-visible">
                {/* Left Column: Interactive Tab Panels */}
                <div className="p-6 md:p-8 lg:col-span-7 space-y-6 lg:max-h-[90vh] lg:overflow-y-auto">
                  
                  {/* TAB MENU BAR */}
                  <div className="grid grid-cols-2 gap-2 sm:flex sm:flex-wrap border-b border-stone-200 pb-5">
                    <button
                      onClick={() => setActiveModalTab('info')}
                      className={`rounded-lg py-2.5 px-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border ${
                        activeModalTab === 'info'
                          ? 'bg-[#1F8B74]/15 border-[#1F8B74] text-[#1F8B74] shadow-sm'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                    >
                      <Building className="h-3.5 w-3.5" />
                      Ficha Técnica
                    </button>
                    <button
                      onClick={() => setActiveModalTab('why')}
                      className={`rounded-lg py-2.5 px-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border ${
                        activeModalTab === 'why'
                          ? 'bg-[#1F8B74]/15 border-[#1F8B74] text-[#1F8B74] shadow-sm'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                    >
                      <ShieldCheck className="h-3.5 w-3.5" />
                      Por qué elegirlo
                    </button>
                    <button
                      onClick={() => setActiveModalTab('progress')}
                      className={`rounded-lg py-2.5 px-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border ${
                        activeModalTab === 'progress'
                          ? 'bg-[#1F8B74]/15 border-[#1F8B74] text-[#1F8B74] shadow-sm'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                    >
                      <Video className="h-3.5 w-3.5" />
                      Avance de Obra
                    </button>
                    <button
                      onClick={() => setActiveModalTab('units')}
                      className={`rounded-lg py-2.5 px-3.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 border ${
                        activeModalTab === 'units'
                          ? 'bg-[#1F8B74]/15 border-[#1F8B74] text-[#1F8B74] shadow-sm'
                          : 'border-stone-200 bg-white text-stone-600 hover:bg-stone-50 hover:text-stone-900'
                      }`}
                    >
                      <Layers className="h-3.5 w-3.5" />
                      Disponibilidad
                    </button>
                  </div>

                  {/* TAB CONTENT: FICHA TECNICA */}
                  {activeModalTab === 'info' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="relative rounded-xl overflow-hidden shadow-lg aspect-video">
                        <img
                          src={selectedDevelopment.image}
                          alt={selectedDevelopment.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute right-4 bottom-4 rounded bg-black/75 px-3 py-1 font-mono text-xs text-[#8CC5C3] uppercase tracking-wider border border-white/5">
                          {selectedDevelopment.city}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-baseline gap-3">
                          <h2 className="font-heading text-3xl font-bold text-[#005A44]">{selectedDevelopment.name}</h2>
                          <span className="rounded-full bg-[#1F8B74]/10 border border-[#1F8B74]/25 px-3 py-0.5 text-[10px] font-bold uppercase text-[#1F8B74]">
                            {selectedDevelopment.status}
                          </span>
                        </div>
                        <p className="flex items-center gap-1.5 text-xs text-stone-600 font-medium font-sans">
                          <MapPin className="h-3.5 w-3.5 text-[#1F8B74]" />
                          {selectedDevelopment.address}
                        </p>
                      </div>

                      {selectedDevelopment.id === 'veq-countryclub' && (
                        <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-stone-200/65 bg-gradient-to-br from-[#005A44]/15 via-transparent to-transparent shadow-inner">
                          <CountryClubLogo className="h-44 w-44" showText={true} />
                          <div className="mt-2 text-[10px] uppercase tracking-widest text-[#1F8B74] font-mono text-center font-bold">
                            Identidad Exclusiva Residencial
                          </div>
                        </div>
                      )}

                      <div className="space-y-3">
                        <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#005A44]">Concepto Arquitectónico</h5>
                        <p className="text-sm text-stone-700 leading-relaxed font-light">
                          {selectedDevelopment.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 rounded-xl bg-[#FAF8F4] p-4.5 border border-stone-200/85">
                        {selectedDevelopment.units && (
                          <div>
                            <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">Unidades Totales</p>
                            <p className="text-lg font-bold text-[#005A44] mt-0.5">{selectedDevelopment.units} Unidades</p>
                          </div>
                        )}
                        {selectedDevelopment.areaSqM && (
                          <div>
                            <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">Superficie de Obra</p>
                            <p className="text-lg font-bold text-[#005A44] mt-0.5">{selectedDevelopment.areaSqM.toLocaleString()} m² de construcción</p>
                          </div>
                        )}
                      </div>

                      {selectedDevelopment.amenities && (
                        <div className="space-y-3">
                          <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#005A44]">Amenidades Premium</h5>
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {selectedDevelopment.amenities.map((amenity, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-stone-750 font-medium bg-[#FAF8F4] border border-stone-200/60 rounded-lg p-2.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#1F8B74]" />
                                {amenity}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}

                  {/* TAB CONTENT: POR QUE ELEGIRLO */}
                  {activeModalTab === 'why' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Ventajas Clave</span>
                        <h3 className="font-heading text-2xl font-bold text-[#005A44] uppercase">¿Por qué elegir {selectedDevelopment.name}?</h3>
                        <p className="text-stone-600 text-xs">Propuesta de valor blindada, solidez fiduciaria corporativa y altos índices de plusvalía.</p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {getProjectExtraData(selectedDevelopment.id, selectedDevelopment.name).benefits.map((benefit, idx) => (
                          <div key={idx} className="rounded-xl border border-stone-200 bg-[#FAF8F4] p-5 space-y-3 hover:border-[#1F8B74]/35 transition-all hover:shadow-sm">
                            <div className="inline-flex rounded-lg bg-[#1F8B74]/10 border border-[#1F8B74]/20 p-2 text-[#1F8B74]">
                              {renderIconByName(benefit.icon, "h-5 w-5 text-[#1F8B74]")}
                            </div>
                            <h4 className="font-heading text-base font-bold text-[#005A44]">{benefit.title}</h4>
                            <p className="text-xs text-stone-600 leading-relaxed font-light">{benefit.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-xl bg-stone-50 border border-stone-200 p-4 flex gap-3 items-center">
                        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 p-2 text-emerald-600">
                          <Check className="h-4 w-4" />
                        </span>
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-[#005A44] uppercase">Fideicomisos Protegidos</p>
                          <p className="text-[10px] text-stone-600 font-light">Todos nuestros desarrollos cuentan con fiduciarias institucionales BanBajío o BBVA para blindaje bursátil total.</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB CONTENT: AVANCE DE OBRA */}
                  {activeModalTab === 'progress' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Supervisión y Bitácoras</span>
                        <h3 className="font-heading text-2xl font-bold text-[#005A44] uppercase">Avance de Obra & Certificación</h3>
                        <p className="text-stone-600 text-xs text-light">Mantenemos transparencia absoluta en la bitácora física de cada uno de nuestros complejos residenciales.</p>
                      </div>

                      {/* SIMULATED LIVE DRONE / CAMERA FEED FOR COUNTRY CLUB DEVELOPMENTS */}
                      {selectedDevelopment.id === 'veq-countryclub' ? (
                        <div className="relative rounded-xl border border-[#005A44]/15 bg-black overflow-hidden shadow-2xl">
                          <div className="aspect-video bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-stone-900 to-black flex flex-col items-center justify-center p-6 text-center group">
                            
                            {/* HUD Overlays (Drone Telemetry) */}
                            <div className="absolute inset-x-4 top-4 flex justify-between items-start text-[9px] font-mono text-emerald-400 pointer-events-none select-none">
                              <div className="space-y-1 bg-black/60 p-2 rounded backdrop-blur-sm border border-emerald-500/10">
                                <span className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-emerald-400">
                                  <span className={`h-2 w-2 rounded-full bg-emerald-500 ${isPlayingVideo ? 'animate-ping' : ''}`} />
                                  ● LIVE DRONE FEED
                                </span>
                                <p>CAM: MA-04 4K HLG</p>
                                <p>ALT: 114m AGL</p>
                                <p>SPD: 3.2 m/s</p>
                              </div>
                              <div className="space-y-0.5 text-right bg-black/60 p-2 rounded backdrop-blur-sm border border-emerald-500/10">
                                <p>LAT: 20.6736° N</p>
                                <p>LON: 103.3444° W</p>
                                <p>REC TIM: 03:24:12</p>
                                <p>BATTERY: 84%</p>
                              </div>
                            </div>

                            {/* Simulated Video Looping graphics */}
                            {isPlayingVideo ? (
                              <div className="space-y-4">
                                <div className="relative">
                                  <RefreshCw className="h-12 w-12 text-[#1F8B74] animate-spin stroke-1" />
                                  <span className="absolute inset-0 flex items-center justify-center text-[10px] font-bold font-mono text-white">4K</span>
                                </div>
                                <div className="space-y-1">
                                  <p className="text-xs font-semibold text-stone-200">Transmitiendo avances de "Condominios Country Club" registrados...</p>
                                  <p className="text-[10px] text-stone-500 font-mono">Dron automático barriendo estructura superior y acabados húmedos</p>
                                </div>
                              </div>
                            ) : (
                              <div className="space-y-3">
                                <Play className="h-12 w-12 text-stone-600 hover:text-white transition-colors cursor-pointer" onClick={() => setIsPlayingVideo(true)} />
                                <p className="text-xs text-stone-400">Video pausado. Presiona reproducir para reactivar el stream del dron.</p>
                              </div>
                            )}

                            {/* Video Control Bar */}
                            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded bg-black/85 p-2 backdrop-blur border border-white/5">
                              <div className="flex items-center gap-2">
                                <button 
                                  onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                                  className="text-stone-300 hover:text-white rounded bg-white/5 p-1 text-xs"
                                >
                                  {isPlayingVideo ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                                </button>
                                <span className="font-mono text-[9px] text-stone-500">CANAL VEQ_drone_country.mov</span>
                              </div>
                              <div className="flex items-center gap-3">
                                <div className="flex items-center gap-1.5 text-[9px] font-mono text-[#1F8B74] uppercase">
                                  <Volume2 className="h-3.5 w-3.5" />
                                  <span>Audio de Obra</span>
                                </div>
                                <span className="inline-block rounded bg-red-500/10 px-2 py-0.5 text-[8px] font-bold text-red-400 uppercase tracking-wider">MARZO 2026 - EN DESARROLLO</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative rounded-xl border border-[#1F8B74]/20 overflow-hidden shadow-lg aspect-video flex flex-col justify-end bg-gradient-to-t from-black to-stone-900 group">
                          <img 
                            src={selectedDevelopment.image} 
                            alt={selectedDevelopment.name} 
                            className="absolute inset-0 h-full w-full object-cover opacity-25 filter blur-xs group-hover:scale-101 transition-transform" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="relative p-6 space-y-4 z-10">
                            <div className="inline-flex items-center gap-2 rounded bg-[#1F8B74]/20 px-3 py-1 border border-[#1F8B74]/30 text-xs font-mono text-white uppercase">
                              <Check className="h-3.5 w-3.5" />
                              <span>Complejo Concluido exitosamente</span>
                            </div>
                            <h4 className="font-heading text-xl font-bold text-white uppercase tracking-wider">Proyecto Terminado al 100%</h4>
                            <p className="text-xs text-stone-300 font-light leading-relaxed">
                              La obra civil, acabados finos y áreas arboladas han sido completamente concluidas y certificadas ante las autoridades municipales. Cuenta con entrega física inmediata e individualización legal disponible.
                            </p>
                          </div>
                        </div>
                      )}

                      {/* General/Milestone checklist progress */}
                      <div className="space-y-3">
                        <div className="flex items-center justify-between">
                          <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#005A44]">Hitos del Avance Físico</h5>
                          <span className="font-mono text-xs font-bold text-[#1F8B74]">{getProjectExtraData(selectedDevelopment.id, selectedDevelopment.name).progress}% Completado</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-2 w-full rounded-full bg-stone-100 border border-stone-200 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-[#1F8B74] transition-all duration-1000" 
                            style={{ width: `${getProjectExtraData(selectedDevelopment.id, selectedDevelopment.name).progress}%` }} 
                          />
                        </div>

                        {/* List of Milestones */}
                        <div className="mt-4 space-y-2.5">
                          {getProjectExtraData(selectedDevelopment.id, selectedDevelopment.name).milestones.map((milestone, idx) => (
                            <div key={idx} className="flex items-center justify-between rounded-lg border border-stone-200/60 bg-stone-50/50 px-4 py-3 text-xs text-stone-700">
                              <div className="flex items-center gap-3">
                                {milestone.status === 'completado' ? (
                                  <span className="rounded-full bg-emerald-500/10 p-1 text-emerald-600">
                                    <Check className="h-3.5 w-3.5" />
                                  </span>
                                ) : milestone.status === 'en-proceso' ? (
                                  <span className="rounded-full bg-[#1F8B74]/15 p-1 text-[#1F8B74] animate-pulse">
                                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                                  </span>
                                ) : (
                                  <span className="rounded-full bg-stone-100 p-1 text-stone-400">
                                    <Lock className="h-3.5 w-3.5" />
                                  </span>
                                )}
                                <span className={milestone.status === 'completado' ? 'text-stone-400 font-light line-through' : 'text-stone-850 font-medium'}>
                                  {milestone.label}
                                </span>
                              </div>
                              <span className="font-mono text-[10px] text-stone-600">{milestone.date}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* TAB CONTENT: DISPONIBILIDAD INVENTARIO */}
                  {activeModalTab === 'units' && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <div className="space-y-2">
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#1F8B74]">Directorio de Unidades</span>
                        <h3 className="font-heading text-2xl font-bold text-[#005A44] uppercase">Inventario y Stock Disponible</h3>
                        <p className="text-stone-600 text-xs">Haz clic sobre cualquier unidad marcada en <span className="text-emerald-600 font-bold">Disponible</span> para seleccionarla y precargar automáticamente tu mensaje de cotización.</p>
                      </div>

                      {/* Display warning or selected indicator */}
                      {selectedUnit ? (
                        <div className="rounded-xl bg-[#1F8B74]/10 border border-[#1F8B74]/25 p-4 flex gap-3 items-center animate-pulse">
                          <span className="rounded-full bg-[#1F8B74]/15 p-2 text-[#1F8B74]">
                            <Check className="h-4 w-4" />
                          </span>
                          <div className="space-y-0.5 text-xs">
                            <p className="font-bold text-[#005A44] uppercase">Unidad Seleccionada: {selectedUnit}</p>
                            <p className="text-[10px] text-stone-600">Hemos redactado una solicitud formal de cotización en el formulario de la derecha.</p>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-xl bg-stone-50 border border-stone-200 p-4 flex gap-3 items-center">
                          <span className="rounded-full bg-[#1F8B74]/10 p-2 text-[#1F8B74]">
                            <Sparkles className="h-4 w-4" />
                          </span>
                          <div className="space-y-0.5 text-xs text-stone-650 leading-tight">
                            <p className="font-bold text-stone-800 uppercase">Sin unidad pre-establecida</p>
                            <p className="text-[10px]">El formulario enviará una consulta sobre el complejo inmobiliario en términos generales.</p>
                          </div>
                        </div>
                      )}

                      {/* Inventory table board */}
                      <div className="space-y-3">
                        <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#005A44]">Unidades de este Desarrollo</h5>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {getProjectExtraData(selectedDevelopment.id, selectedDevelopment.name).units.map((unit) => {
                            const isAvailable = unit.status === 'Disponible';
                            const isSelected = selectedUnit === unit.code;

                            const handleUnitClick = () => {
                              if (!isAvailable) return;
                              setSelectedUnit(unit.code);
                              
                              const bedroomsText = unit.bedrooms > 0 
                                ? `${unit.bedrooms} recám.` 
                                : 'lote premium';
                              
                              setCustomMessage(
                                `Hola, me interesa adquirir y recibir más detalles sobre la unidad DISPONIBLE: ${unit.code} (${bedroomsText}, ${unit.area} m²) del desarrollo vertical "${selectedDevelopment.name}". Por favor envíenme costos de escrituración, esquemas de pago preferenciales y opciones de preventa. Gracias.`
                              );
                            };

                            return (
                              <button
                                key={unit.code}
                                disabled={!isAvailable}
                                onClick={handleUnitClick}
                                className={`w-full rounded-xl border text-left p-4.5 transition-all duration-300 flex items-center justify-between ${
                                  isSelected
                                    ? 'border-[#1F8B74] bg-[#1F8B74]/10'
                                    : !isAvailable
                                    ? 'border-stone-150 bg-stone-50/55 opacity-40 cursor-not-allowed'
                                    : 'border-stone-200 bg-stone-50/20 hover:bg-stone-50 hover:border-stone-300 cursor-pointer'
                                }`}
                              >
                                <div className="space-y-1">
                                  <p className="text-sm font-bold text-[#005A44] font-heading">{unit.code}</p>
                                  <p className="text-[10px] text-stone-600 font-mono uppercase tracking-wider">
                                    {unit.area} m²{unit.bedrooms > 0 ? ` • ${unit.bedrooms} Recámaras` : ' • Gated Lot'}
                                  </p>
                                </div>
                                <div className="text-right space-y-1">
                                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest ${
                                    unit.status === 'Disponible' 
                                      ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 font-bold'
                                      : unit.status === 'Apartado'
                                      ? 'bg-yellow-500/10 border border-yellow-500/20 text-yellow-600 font-bold'
                                      : 'bg-stone-100 border border-stone-200 text-stone-500'
                                  }`}>
                                    {isSelected ? '✔ Seleccionado' : unit.status}
                                  </span>
                                  {isAvailable && (
                                    <p className="text-xs font-bold text-stone-850 mt-1 font-mono">{unit.price}</p>
                                  )}
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </div>

                    </motion.div>
                  )}

                </div>

                {/* Right Column: Pre-filled contact form */}
                <div className="p-6 md:p-8 lg:col-span-5 bg-[#FAF8F4] border-l border-stone-200/80 lg:max-h-[90vh] lg:overflow-y-auto">
                  <ContactForm
                    title="Solicitar cotización"
                    subtitle={`Déjanos tus datos para agendar una videollamada o visita guiada a ${selectedDevelopment.name}.`}
                    defaultType="desarrollo"
                    developmentName={selectedDevelopment.name}
                    customMessage={customMessage || undefined}
                  />
                  <div className="mt-6 text-center text-xs text-stone-600">
                    Al enviar apruebas fiducias y regulaciones de Grupo VEQ.
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
