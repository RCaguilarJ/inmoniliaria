/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, MapPin, Layers, Building, Eye, X, TreePine, ShieldAlert, Wifi, Info,
  ShieldCheck, Video, Globe, FileText, Check, Lock, Sparkles, Play, Pause, RefreshCw, Volume2, HelpCircle,
  Phone, Mail, ExternalLink, Image as ImageIcon
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { DEVELOPMENTS_DATA } from '../data';
import { Development } from '../types';
import ContactForm from './ContactForm';
import ContactSection from './ContactSection';
import CountryClubLogo from './CountryClubLogo';
import PageHero from './PageHero';
import SectionDivider from './SectionDivider';
import heroImage from '../assets/images/veq_countryclub_1781741180731.jpg';
import contactImage from '../assets/images/veq_jack_levy_1781739538027.jpg';

interface DevelopmentsViewProps {
  initialCityFilter?: string;
  onClearInitialCityFilter?: () => void;
}

// Custom interactive structures to represent details from corporate flyer
interface UnitInventory {
  code: string;
  bedrooms?: number;
  area: number;
  price: string;
  status: 'Disponible' | 'Apartado' | 'Vendido';
  meta?: string;
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

interface ProjectSheetFlags {
  immediateDelivery?: boolean;
  brochure?: boolean;
  website?: boolean;
  progress?: boolean;
  availability?: boolean;
  showUnit?: boolean;
  note?: string;
}

const PROJECT_SHEET_FLAGS: Record<string, ProjectSheetFlags> = {
  'veq-opera': {
    immediateDelivery: true,
    website: true,
    availability: true,
    note: 'Av. Juan Palomar y Arias aparece referenciada directamente en el PDF de proyectos.'
  },
  'veq-torredelprado': {
    immediateDelivery: true,
    website: true,
    progress: true,
    showUnit: true
  },
  'veq-countryclub': {
    brochure: true,
    website: true,
    progress: true,
    availability: true,
    showUnit: true,
    note: 'Ficha enriquecida con brochure comercial y registro audiovisual real entregado por el cliente en marzo de 2026.'
  },
  'veq-travessera': {
    immediateDelivery: true,
    website: true,
    progress: true,
    availability: true
  },
  'veq-paseodegracia': {
    brochure: true,
    progress: true,
    availability: true,
    note: 'Identificado en el PDF como condominio horizontal sobre Av. Paseo de Gracia.'
  }
};

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
      { title: 'Frente al Country Club', desc: 'La narrativa comercial del proyecto se ancla en una ubicación premium sobre Av. Américas y en su relación directa con el entorno Country Club.', icon: 'TreePine' },
      { title: 'Tipologías residenciales claras', desc: 'El brochure comercial presenta configuraciones de 112.76 m², 158.23 m², 161.55 m² y 175.15 m² para una conversación de venta más precisa.', icon: 'Layers' },
      { title: 'Amenidades verificables', desc: 'Alberca y terraza, kids zone, gimnasio, bodegas personales, business center y accesos controlados forman parte de la pieza comercial entregada.', icon: 'ShieldCheck' },
      { title: 'Material real del proyecto', desc: 'El recorrido audiovisual y la galería interior aportan una percepción más humana y confiable que un render genérico.', icon: 'Sparkles' }
    ],
    progress: 82,
    milestones: [
      { label: 'Lobby e interiores documentados', status: 'completado', percentage: 100, date: 'Marzo 2026' },
      { label: 'Áreas comunes y terraza registradas', status: 'completado', percentage: 100, date: 'Marzo 2026' },
      { label: 'Material audiovisual comercial activo', status: 'completado', percentage: 100, date: 'Marzo 2026' },
      { label: 'Seguimiento comercial y disponibilidad', status: 'en-proceso', percentage: 82, date: 'Actual' }
    ],
    units: [
      { code: 'Tipo A', area: 112.76, price: 'Solicitar cotización', status: 'Disponible', meta: 'Tipología residencial' },
      { code: 'Tipo B', area: 158.23, price: 'Solicitar cotización', status: 'Disponible', meta: 'Tipología residencial' },
      { code: 'Tipo C', area: 161.55, price: 'Solicitar cotización', status: 'Disponible', meta: 'Tipología residencial' },
      { code: 'Tipo D', area: 175.15, price: 'Solicitar cotización', status: 'Disponible', meta: 'Tipología residencial' }
    ]
  },
  'veq-travessera': {
    benefits: [
      { title: 'Arquitectura Boutique', desc: 'Exclusivo complejo de solo 45 residencias verticales, limitando el tráfico y promoviendo el confort.', icon: 'Building' },
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
  const projectVideoRef = useRef<HTMLVideoElement | null>(null);

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
    }
  }, [selectedDevelopment]);

  useEffect(() => {
    const video = projectVideoRef.current;

    if (!video) return;

    if (isPlayingVideo) {
      video.play().catch(() => {
        setIsPlayingVideo(false);
      });
      return;
    }

    video.pause();
  }, [isPlayingVideo, selectedDevelopment, activeModalTab]);

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

  const getProjectSheetFlags = (id: string): ProjectSheetFlags => PROJECT_SHEET_FLAGS[id] || {};
  const selectedGallery = selectedDevelopment?.gallery ?? [];
  const featuredGallery = selectedGallery.slice(0, 3);
  const secondaryGallery = selectedGallery.slice(3, 7);

  return (
    <div className="relative w-full">
      <PageHero
        image={heroImage}
        eyebrow="Portafolio inmobiliario"
        title="Nuestros desarrollos"
        subtitle="Explora la selección de propiedades de Luxent. Conservamos la información real del portafolio y la presentamos con una estructura visual más editorial y ordenada."
      />

      <section className="-mt-10 px-6 pb-8">
        <div className="editorial-panel mx-auto max-w-7xl rounded-[36px] px-6 py-10 md:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-3xl font-bold tracking-tight text-[#31485C] sm:text-4xl">Busca tu próximo proyecto</h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              Filtra desarrollos por ciudad, etapa comercial o búsqueda directa sin alterar la información real ya integrada en el sitio.
            </p>
          </div>

          <SectionDivider className="mt-8" />

          <div className="mt-8 space-y-5">
            <div className="relative mx-auto max-w-md w-full">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar desarrollo o calle..."
                className="w-full rounded-md border border-stone-200 bg-white px-11 py-3 text-xs text-stone-900 placeholder-stone-400 outline-none transition-all focus:border-[#6F899D] shadow-sm"
                id="search-developments"
              />
              <Search className="absolute left-4 top-3.5 h-4 w-4 text-stone-400" />
            </div>

          {/* Cities Toggles */}
          <div className="space-y-2">
            <span className="block text-center font-mono text-[10px] font-bold text-stone-500 uppercase tracking-[0.28em]">Filtrar por ciudad</span>
            <div className="flex flex-wrap justify-center gap-2">
              {cities.map((city) => {
                const isActive = selectedCity === city;
                return (
                  <button
                    key={city}
                    onClick={() => handleCitySelect(city)}
                    id={`tab-city-${city.toLowerCase()}`}
                    className={`rounded-md border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive 
                        ? 'border-[#6F899D] bg-[#6F899D] text-white font-bold shadow-sm' 
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
            <span className="block text-center font-mono text-[10px] font-bold text-stone-500 uppercase tracking-[0.28em]">Filtrar por avance de obra</span>
            <div className="flex flex-wrap justify-center gap-2">
              {statuses.map((status) => {
                const isActive = selectedStatus === status;
                return (
                  <button
                    key={status}
                    onClick={() => setSelectedStatus(status)}
                    id={`tab-status-${status.replace(' ', '-').toLowerCase()}`}
                    className={`rounded-md border px-4.5 py-1.5 text-xs font-medium uppercase tracking-[0.2em] transition-all duration-300 ${
                      isActive 
                        ? 'border-[#6F899D] bg-[#6F899D]/10 text-[#6F899D] font-semibold' 
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
        </div>
      </section>

      {/* PORTFOLIO GRID CATALOG */}
      <section className="px-6 py-12">
        <div className="mx-auto max-w-7xl">
          {filteredDevelopments.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-[#4F6F86]/20 py-20 text-center bg-[#FAFCFD]">
              <span className="rounded-full bg-stone-100 p-4 text-stone-500 border border-stone-200">
                <Info className="h-8 w-8" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-bold text-[#4F6F86]">Sin desarrollos disponibles</h3>
              <p className="mt-2 text-stone-600 text-sm max-w-xs">
                Por el momento no tenemos proyectos registrados que coincidan con la combinación de filtros seleccionada.
              </p>
              <button
                onClick={() => { setSelectedCity('TODAS'); setSelectedStatus('TODOS'); setSearchTerm(''); }}
                className="mt-6 rounded-full bg-[#6F899D] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#4F6F86]"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredDevelopments.map((dev) => {
                const flags = getProjectSheetFlags(dev.id);

                return (
                <div
                  key={dev.id}
                  onClick={() => setSelectedDevelopment(dev)}
                  className="editorial-media-frame group cursor-pointer overflow-hidden rounded-[4px] bg-white transition-all duration-300 hover:border-[#6F899D]/40 hover:shadow-[0_20px_40px_rgba(180,140,80,0.15)]"
                  id={`dev-card-${dev.id}`}
                >
                  <div className="relative aspect-[16/11] overflow-hidden">
                    <img
                      src={dev.image}
                      alt={dev.name}
                      className="h-full w-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Status badge representation */}
                    <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                      <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${
                        dev.status === 'Concluido' 
                          ? 'bg-[#6F899D] text-white shadow-sm' 
                          : dev.status === 'En Desarrollo'
                          ? 'bg-[#4F6F86] text-white shadow-sm'
                          : 'bg-stone-600 text-white shadow-sm'
                      }`}>
                        {dev.status}
                      </span>
                      {flags.immediateDelivery && (
                        <span className="rounded-full border border-stone-100 bg-white/95 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4F6F86] shadow-sm">
                          Entrega inmediata
                        </span>
                      )}
                    </div>

                    <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[10px] font-bold text-[#4F6F86] uppercase tracking-widest shadow-sm border border-stone-100">
                      {dev.city}
                    </div>

                    {dev.bannerText && (
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                        <p className="font-serif italic text-xs text-[#DCE7EF] font-medium">{dev.bannerText}</p>
                      </div>
                    )}
                  </div>

                  <div className="p-6 space-y-4">
                    <div>
                      <h4 className="font-heading text-xl font-bold text-[#4F6F86] transition-colors group-hover:text-[#6F899D] flex items-center gap-2">
                        {dev.name}
                        {dev.id === 'veq-countryclub' && (
                          <span className="inline-block transition-transform duration-300 group-hover:scale-110">
                            <CountryClubLogo className="h-6 w-6 overflow-visible" showText={false} />
                          </span>
                        )}
                      </h4>
                      <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-500">
                        <MapPin className="h-3 w-3 text-[#6F899D]" />
                        <span className="line-clamp-1">{dev.address}</span>
                      </p>
                    </div>

                    <p className="text-sm text-stone-600 line-clamp-3 leading-relaxed">
                      {dev.description}
                    </p>

                    {(flags.website || flags.brochure || flags.progress || flags.availability || flags.showUnit) && (
                      <div className="flex flex-wrap gap-2">
                        {flags.website && <span className="rounded-full bg-[#6F899D]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#6F899D]">Sitio web</span>}
                        {flags.brochure && <span className="rounded-full bg-[#4F6F86]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4F6F86]">Brochure</span>}
                        {flags.progress && <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-700">Avance de obra</span>}
                        {flags.availability && <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Disponibilidad</span>}
                        {flags.showUnit && <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700">Departamento muestra</span>}
                      </div>
                    )}

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
                      
                      <span className="flex items-center gap-1 font-mono text-[10px] font-bold uppercase tracking-wider text-[#6F899D] group-hover:text-[#4F6F86] transition-colors">
                        Ficha Técnica
                        <Eye className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </div>
              )})}
            </div>
          )}
        </div>
      </section>

      <ContactSection
        title="Contacta con nuestros asesores"
        subtitle="Si te interesa alguno de estos desarrollos, agenda una videollamada o una visita guiada. Conservamos el inventario real y te ayudamos a canalizar la consulta correctamente."
        formTitle="Solicitar información"
        formSubtitle="Déjanos tus datos y te ayudaremos a revisar disponibilidad, etapas comerciales y siguientes pasos."
        defaultType="desarrollo"
        image={contactImage}
        imageAlt="Luxent"
      />

      {/* DEVELOPMENT DETAIL POPUP MODAL */}
      <AnimatePresence>
        {selectedDevelopment && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4A687E]/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              className="relative max-w-5xl w-full rounded-2xl bg-white border border-[#4F6F86]/15 shadow-2xl overflow-hidden my-8"
              id="dev-modal-panel"
            >
              <button
                onClick={() => setSelectedDevelopment(null)}
                className="absolute right-4 top-4 z-10 rounded-full bg-stone-100 p-2 text-stone-600 hover:bg-[#6F899D] hover:text-white border border-stone-200 focus:outline-none transition-colors"
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
                          ? 'bg-[#6F899D]/15 border-[#6F899D] text-[#6F899D] shadow-sm'
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
                          ? 'bg-[#6F899D]/15 border-[#6F899D] text-[#6F899D] shadow-sm'
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
                          ? 'bg-[#6F899D]/15 border-[#6F899D] text-[#6F899D] shadow-sm'
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
                          ? 'bg-[#6F899D]/15 border-[#6F899D] text-[#6F899D] shadow-sm'
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
                      {featuredGallery.length > 0 ? (
                        <div className="grid gap-3 md:grid-cols-12">
                          <div className="relative overflow-hidden rounded-[26px] shadow-lg md:col-span-7">
                            <img
                              src={featuredGallery[0].src}
                              alt={featuredGallery[0].alt}
                              className="h-full min-h-[280px] w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 rounded-full bg-black/65 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-white">
                              {featuredGallery[0].label ?? selectedDevelopment.city}
                            </div>
                            <div className="absolute right-4 top-4 rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#4F6F86] shadow-sm">
                              {selectedDevelopment.city}
                            </div>
                          </div>

                          <div className="grid gap-3 md:col-span-5">
                            {featuredGallery.slice(1).map((item) => (
                              <div key={item.src} className="relative overflow-hidden rounded-[22px] shadow-lg">
                                <img
                                  src={item.src}
                                  alt={item.alt}
                                  className="h-[138px] w-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                                {item.label && (
                                  <div className="absolute bottom-3 left-3 rounded-full bg-black/60 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white">
                                    {item.label}
                                  </div>
                                )}
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <div className="relative aspect-video overflow-hidden rounded-xl shadow-lg">
                          <img
                            src={selectedDevelopment.image}
                            alt={selectedDevelopment.name}
                            className="h-full w-full object-cover"
                          />
                          <div className="absolute right-4 bottom-4 rounded bg-black/75 px-3 py-1 font-mono text-xs uppercase tracking-wider text-[#DCE7EF] border border-white/5">
                            {selectedDevelopment.city}
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <div className="flex items-baseline gap-3">
                          <h2 className="font-heading text-3xl font-bold text-[#4F6F86]">{selectedDevelopment.name}</h2>
                          <span className="rounded-full bg-[#6F899D]/10 border border-[#6F899D]/25 px-3 py-0.5 text-[10px] font-bold uppercase text-[#6F899D]">
                            {selectedDevelopment.status}
                          </span>
                        </div>
                        <p className="flex items-center gap-1.5 text-xs text-stone-600 font-medium font-sans">
                          <MapPin className="h-3.5 w-3.5 text-[#6F899D]" />
                          {selectedDevelopment.address}
                        </p>
                        {(getProjectSheetFlags(selectedDevelopment.id).website ||
                          getProjectSheetFlags(selectedDevelopment.id).brochure ||
                          getProjectSheetFlags(selectedDevelopment.id).progress ||
                          getProjectSheetFlags(selectedDevelopment.id).availability ||
                          getProjectSheetFlags(selectedDevelopment.id).showUnit) && (
                          <div className="flex flex-wrap gap-2 pt-1">
                            {getProjectSheetFlags(selectedDevelopment.id).website && <span className="rounded-full bg-[#6F899D]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#6F899D]">Sitio web</span>}
                            {getProjectSheetFlags(selectedDevelopment.id).brochure && <span className="rounded-full bg-[#4F6F86]/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4F6F86]">Brochure</span>}
                            {getProjectSheetFlags(selectedDevelopment.id).progress && <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-700">Avance de obra</span>}
                            {getProjectSheetFlags(selectedDevelopment.id).availability && <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-emerald-700">Disponibilidad</span>}
                            {getProjectSheetFlags(selectedDevelopment.id).showUnit && <span className="rounded-full bg-amber-500/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-amber-700">Departamento muestra</span>}
                            {getProjectSheetFlags(selectedDevelopment.id).immediateDelivery && <span className="rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-[#4F6F86] border border-stone-200">Entrega inmediata</span>}
                          </div>
                        )}
                        {getProjectSheetFlags(selectedDevelopment.id).note && (
                          <p className="text-[11px] leading-relaxed text-stone-500">
                            {getProjectSheetFlags(selectedDevelopment.id).note}
                          </p>
                        )}
                      </div>

                      {selectedDevelopment.id === 'veq-countryclub' && (
                        <div className="flex flex-col items-center justify-center p-8 rounded-xl border border-stone-200/65 bg-gradient-to-br from-[#4F6F86]/15 via-transparent to-transparent shadow-inner">
                          <CountryClubLogo className="h-44 w-44" showText={true} />
                          <div className="mt-2 text-[10px] uppercase tracking-widest text-[#6F899D] font-mono text-center font-bold">
                            Identidad Exclusiva Residencial
                          </div>
                        </div>
                      )}

                      <div className="space-y-3">
                        <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#4F6F86]">Concepto Arquitectónico</h5>
                        <p className="text-sm text-stone-700 leading-relaxed font-light">
                          {selectedDevelopment.description}
                        </p>
                      </div>

                      {(selectedDevelopment.units || selectedDevelopment.areaSqM) && (
                        <div className="grid grid-cols-2 gap-4 rounded-xl bg-[#F3F7FA] p-4.5 border border-stone-200/85">
                          {selectedDevelopment.units && (
                            <div>
                              <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">Unidades Totales</p>
                              <p className="text-lg font-bold text-[#4F6F86] mt-0.5">{selectedDevelopment.units} Unidades</p>
                            </div>
                          )}
                          {selectedDevelopment.areaSqM && (
                            <div>
                              <p className="text-xs text-stone-500 font-mono uppercase tracking-wider">Superficie de Obra</p>
                              <p className="text-lg font-bold text-[#4F6F86] mt-0.5">{selectedDevelopment.areaSqM.toLocaleString()} m² de construcción</p>
                            </div>
                          )}
                        </div>
                      )}

                      {(selectedDevelopment.unitMix?.length || selectedDevelopment.contact) && (
                        <div className="rounded-[24px] border border-stone-200 bg-white p-5 shadow-sm">
                          <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                            {selectedDevelopment.unitMix?.length ? (
                              <div className="space-y-3">
                                <div className="flex items-center gap-2">
                                  <span className="section-icon-chip h-10 w-10">
                                    <Layers className="h-[18px] w-[18px]" />
                                  </span>
                                  <div>
                                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-stone-500">Superficies publicadas</p>
                                    <h5 className="font-heading text-lg font-bold text-[#4F6F86]">Tipologías del brochure</h5>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {selectedDevelopment.unitMix.map((size) => (
                                    <span
                                      key={size}
                                      className="rounded-full border border-[#6F899D]/18 bg-[#6F899D]/8 px-3 py-1.5 font-mono text-[11px] font-semibold text-[#4F6F86]"
                                    >
                                      {size}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            ) : null}

                            {selectedDevelopment.contact ? (
                              <div className="grid gap-2 text-sm text-stone-600 sm:grid-cols-2">
                                {selectedDevelopment.contact.phone && (
                                  <a
                                    href={`tel:${selectedDevelopment.contact.phone.replace(/\D/g, '')}`}
                                    className="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 transition-colors hover:border-[#6F899D]/25 hover:text-[#4F6F86]"
                                  >
                                    <Phone className="h-4 w-4 text-[#C9A96E]" />
                                    <span>{selectedDevelopment.contact.phone}</span>
                                  </a>
                                )}
                                {selectedDevelopment.contact.email && (
                                  <a
                                    href={`mailto:${selectedDevelopment.contact.email}`}
                                    className="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 transition-colors hover:border-[#6F899D]/25 hover:text-[#4F6F86]"
                                  >
                                    <Mail className="h-4 w-4 text-[#C9A96E]" />
                                    <span>{selectedDevelopment.contact.email}</span>
                                  </a>
                                )}
                                {selectedDevelopment.contact.website && (
                                  <a
                                    href={`https://${selectedDevelopment.contact.website}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex items-center gap-2 rounded-xl border border-stone-200 bg-stone-50 px-3 py-2 transition-colors hover:border-[#6F899D]/25 hover:text-[#4F6F86] sm:col-span-2"
                                  >
                                    <ExternalLink className="h-4 w-4 text-[#C9A96E]" />
                                    <span>{selectedDevelopment.contact.website}</span>
                                  </a>
                                )}
                              </div>
                            ) : null}
                          </div>
                        </div>
                      )}

                      {selectedDevelopment.amenities && (
                        <div className="space-y-3">
                          <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#4F6F86]">Amenidades Premium</h5>
                          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                            {selectedDevelopment.amenities.map((amenity, idx) => (
                              <div key={idx} className="flex items-center gap-2 text-xs text-stone-750 font-medium bg-[#F3F7FA] border border-stone-200/60 rounded-lg p-2.5">
                                <span className="h-1.5 w-1.5 rounded-full bg-[#6F899D]" />
                                {amenity}
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

                      {secondaryGallery.length > 0 && (
                        <div className="space-y-3">
                          <div className="flex items-center gap-2">
                            <span className="section-icon-chip h-10 w-10">
                              <ImageIcon className="h-[18px] w-[18px]" />
                            </span>
                            <div>
                              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-stone-500">Selección visual</p>
                              <h5 className="font-heading text-lg font-bold text-[#4F6F86]">Galería real del proyecto</h5>
                            </div>
                          </div>

                          <div className="grid gap-3 sm:grid-cols-2">
                            {secondaryGallery.map((item) => (
                              <figure key={item.src} className="group overflow-hidden rounded-[22px] border border-stone-200 bg-white shadow-sm">
                                <div className="overflow-hidden">
                                  <img
                                    src={item.src}
                                    alt={item.alt}
                                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                                  />
                                </div>
                                {item.label && (
                                  <figcaption className="px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">
                                    {item.label}
                                  </figcaption>
                                )}
                              </figure>
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
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6F899D]">Ventajas Clave</span>
                        <h3 className="font-heading text-2xl font-bold text-[#4F6F86] uppercase">¿Por qué elegir {selectedDevelopment.name}?</h3>
                        <p className="text-stone-600 text-xs">Propuesta de valor blindada, solidez fiduciaria corporativa y altos índices de plusvalía.</p>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        {getProjectExtraData(selectedDevelopment.id, selectedDevelopment.name).benefits.map((benefit, idx) => (
                          <div key={idx} className="rounded-xl border border-stone-200 bg-[#F3F7FA] p-5 space-y-3 hover:border-[#6F899D]/35 transition-all hover:shadow-sm">
                            <div className="inline-flex rounded-lg bg-[#6F899D]/10 border border-[#6F899D]/20 p-2 text-[#6F899D]">
                              {renderIconByName(benefit.icon, "h-5 w-5 text-[#6F899D]")}
                            </div>
                            <h4 className="font-heading text-base font-bold text-[#4F6F86]">{benefit.title}</h4>
                            <p className="text-xs text-stone-600 leading-relaxed font-light">{benefit.desc}</p>
                          </div>
                        ))}
                      </div>

                      <div className="rounded-xl bg-stone-50 border border-stone-200 p-4 flex gap-3 items-center">
                        <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 p-2 text-emerald-600">
                          <Check className="h-4 w-4" />
                        </span>
                        <div className="space-y-0.5">
                          <p className="text-xs font-bold text-[#4F6F86] uppercase">Fideicomisos Protegidos</p>
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
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6F899D]">Supervisión y Bitácoras</span>
                        <h3 className="font-heading text-2xl font-bold text-[#4F6F86] uppercase">Avance de Obra & Certificación</h3>
                        <p className="text-stone-600 text-xs text-light">Mantenemos transparencia absoluta en la bitácora física de cada uno de nuestros complejos residenciales.</p>
                      </div>

                      {selectedDevelopment.reelVideo ? (
                        <div className="grid gap-4 lg:grid-cols-[minmax(0,1.35fr)_280px]">
                          <div className="relative overflow-hidden rounded-[26px] border border-[#4F6F86]/15 bg-black shadow-2xl">
                            <video
                              ref={projectVideoRef}
                              src={selectedDevelopment.reelVideo.src}
                              poster={selectedDevelopment.reelVideo.poster}
                              className="aspect-video h-full w-full cursor-pointer object-cover"
                              muted
                              loop
                              playsInline
                              preload="none"
                              onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                              onPlay={() => setIsPlayingVideo(true)}
                              onPause={() => setIsPlayingVideo(false)}
                            />

                            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between p-4">
                              <div className="rounded-full bg-black/65 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-white backdrop-blur-sm">
                                {selectedDevelopment.reelVideo.label ?? 'Registro real del proyecto'}
                              </div>
                              <div className="rounded-full bg-white/95 px-3 py-1 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#4F6F86] shadow-sm">
                                Material del cliente
                              </div>
                            </div>

                            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-black/72 px-4 py-3 text-white backdrop-blur-sm">
                              <div className="flex items-center gap-2">
                                <button
                                  onClick={() => setIsPlayingVideo(!isPlayingVideo)}
                                  className="rounded-full border border-white/15 bg-white/8 p-2 text-white transition-colors hover:bg-white/14"
                                  type="button"
                                >
                                  {isPlayingVideo ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                                </button>
                                <div>
                                  <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-[#DCE7EF]">Recorrido real</p>
                                  <p className="text-[11px] text-stone-300">Se incorporó el video entregado por Luxent para humanizar la ficha.</p>
                                </div>
                              </div>
                              <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[9px] uppercase tracking-[0.22em] text-stone-300 md:flex">
                                <Volume2 className="h-3.5 w-3.5 text-[#C9A96E]" />
                                Audio original
                              </div>
                            </div>
                          </div>

                          <div className="space-y-4">
                            <div className="rounded-[22px] border border-stone-200 bg-white p-4 shadow-sm">
                              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.24em] text-stone-500">Registro editorial</p>
                              <h5 className="mt-2 font-heading text-lg font-bold text-[#4F6F86]">Material visual con carácter real</h5>
                              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                                En lugar de una simulación genérica, la ficha ahora utiliza evidencia visual entregada por el cliente: lobby, interiores, terraza y recorrido audiovisual.
                              </p>
                            </div>

                            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                              {featuredGallery.slice(0, 2).map((item) => (
                                <figure key={item.src} className="overflow-hidden rounded-[20px] border border-stone-200 bg-white shadow-sm">
                                  <img src={item.src} alt={item.alt} className="h-32 w-full object-cover" />
                                  {item.label && (
                                    <figcaption className="px-3 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-stone-500">
                                      {item.label}
                                    </figcaption>
                                  )}
                                </figure>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <div className="relative rounded-xl border border-[#6F899D]/20 overflow-hidden shadow-lg aspect-video flex flex-col justify-end bg-gradient-to-t from-black to-stone-900 group">
                          <img 
                            src={selectedDevelopment.image} 
                            alt={selectedDevelopment.name} 
                            className="absolute inset-0 h-full w-full object-cover opacity-25 filter blur-xs group-hover:scale-101 transition-transform" 
                            referrerPolicy="no-referrer"
                          />
                          <div className="relative p-6 space-y-4 z-10">
                            <div className="inline-flex items-center gap-2 rounded bg-[#6F899D]/20 px-3 py-1 border border-[#6F899D]/30 text-xs font-mono text-white uppercase">
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
                          <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#4F6F86]">Hitos del Avance Físico</h5>
                          <span className="font-mono text-xs font-bold text-[#6F899D]">{getProjectExtraData(selectedDevelopment.id, selectedDevelopment.name).progress}% Completado</span>
                        </div>
                        {/* Progress Bar */}
                        <div className="h-2 w-full rounded-full bg-stone-100 border border-stone-200 overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-[#6F899D] transition-all duration-1000" 
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
                                  <span className="rounded-full bg-[#6F899D]/15 p-1 text-[#6F899D] animate-pulse">
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
                        <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#6F899D]">Directorio de Unidades</span>
                        <h3 className="font-heading text-2xl font-bold text-[#4F6F86] uppercase">Inventario y Stock Disponible</h3>
                        <p className="text-stone-600 text-xs">Haz clic sobre cualquier unidad marcada en <span className="text-emerald-600 font-bold">Disponible</span> para seleccionarla y precargar automáticamente tu mensaje de cotización.</p>
                      </div>

                      {/* Display warning or selected indicator */}
                      {selectedUnit ? (
                        <div className="rounded-xl bg-[#6F899D]/10 border border-[#6F899D]/25 p-4 flex gap-3 items-center animate-pulse">
                          <span className="rounded-full bg-[#6F899D]/15 p-2 text-[#6F899D]">
                            <Check className="h-4 w-4" />
                          </span>
                          <div className="space-y-0.5 text-xs">
                            <p className="font-bold text-[#4F6F86] uppercase">Unidad Seleccionada: {selectedUnit}</p>
                            <p className="text-[10px] text-stone-600">Hemos redactado una solicitud formal de cotización en el formulario de la derecha.</p>
                          </div>
                        </div>
                      ) : (
                        <div className="rounded-xl bg-stone-50 border border-stone-200 p-4 flex gap-3 items-center">
                          <span className="rounded-full bg-[#6F899D]/10 p-2 text-[#6F899D]">
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
                        <h5 className="font-heading text-sm font-bold uppercase tracking-wider text-[#4F6F86]">Unidades de este Desarrollo</h5>
                        <div className="grid gap-3 sm:grid-cols-2">
                          {getProjectExtraData(selectedDevelopment.id, selectedDevelopment.name).units.map((unit) => {
                            const isAvailable = unit.status === 'Disponible';
                            const isSelected = selectedUnit === unit.code;

                            const handleUnitClick = () => {
                              if (!isAvailable) return;
                              setSelectedUnit(unit.code);
                              
                              const bedroomsText = unit.meta
                                ? unit.meta.toLowerCase()
                                : unit.bedrooms && unit.bedrooms > 0
                                ? `${unit.bedrooms} recám.`
                                : 'tipología residencial';
                              
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
                                    ? 'border-[#6F899D] bg-[#6F899D]/10'
                                    : !isAvailable
                                    ? 'border-stone-150 bg-stone-50/55 opacity-40 cursor-not-allowed'
                                    : 'border-stone-200 bg-stone-50/20 hover:bg-stone-50 hover:border-stone-300 cursor-pointer'
                                }`}
                              >
                                <div className="space-y-1">
                                  <p className="text-sm font-bold text-[#4F6F86] font-heading">{unit.code}</p>
                                  <p className="text-[10px] text-stone-600 font-mono uppercase tracking-wider">
                                    {unit.area} m²
                                    {unit.meta
                                      ? ` • ${unit.meta}`
                                      : unit.bedrooms && unit.bedrooms > 0
                                      ? ` • ${unit.bedrooms} Recámaras`
                                      : ' • Tipología residencial'}
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
                                    {isSelected ? '✓ Seleccionado' : unit.status}
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
                <div className="p-6 md:p-8 lg:col-span-5 bg-[#F3F7FA] border-l border-stone-200/80 lg:max-h-[90vh] lg:overflow-y-auto">
                  <ContactForm
                    title="Solicitar cotización"
                    subtitle={`Déjanos tus datos para agendar una videollamada o visita guiada a ${selectedDevelopment.name}.`}
                    defaultType="desarrollo"
                    developmentName={selectedDevelopment.name}
                    customMessage={customMessage || undefined}
                  />
                  <div className="mt-6 text-center text-xs text-stone-600">
                    Al enviar aceptas el seguimiento comercial y la política de contacto de Luxent.
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
