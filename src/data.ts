/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Development, Initiative, BlogArticle, JobVacancy, Alliance } from './types';
import veqOperaImage from './assets/images/veq_opera_1781741132258.jpg';
import veqTorreDelPradoImage from './assets/images/veq_torredelprado_1781741156146.jpg';
import veqCountryClubImage from './assets/images/veq_countryclub_1781741180731.jpg';
import veqTravesseraImage from './assets/images/veq_travessera_1781741204206.jpg';
import veqPaseoDeGraciaImage from './assets/images/veq_paseodegracia_1781741234147.jpg';
import veqDevelopmentThumbImage from './assets/images/veq_development_thumb_1781739550936.jpg';
import countryClubLobbyChandelierWide from './assets/images/countryclub-real/lobby-chandelier-wide.jpg';
import countryClubLobbyLounge from './assets/images/countryclub-real/lobby-lounge.jpg';
import countryClubPoolDeck from './assets/images/countryclub-real/pool-deck.jpg';
import countryClubLivingRoom from './assets/images/countryclub-real/living-room.jpg';
import countryClubBalconyView from './assets/images/countryclub-real/balcony-view.jpg';
import countryClubWalkInCloset from './assets/images/countryclub-real/walk-in-closet.jpg';
import countryClubBedroomSuite from './assets/images/countryclub-real/bedroom-suite.jpg';

export const DEVELOPMENTS_DATA: Development[] = [
  {
    id: 'veq-opera',
    name: 'Ópera',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Un ícono residencial de alto perfil en Guadalajara, con ubicación estratégica sobre Av. Juan Palomar y Arias y una propuesta enfocada en exclusividad vertical.',
    address: 'Av. Juan Palomar y Arias, Guadalajara, Jal.',
    image: veqOperaImage,
    units: 110,
    areaSqM: 18400,
    amenities: ['Lobby triple altura', 'Infinity Pool', 'Club privado', 'Wellness Center', 'Seguridad 24/7', 'Área de co-working premium'],
    bannerText: 'Cúspide de exclusividad vertical.'
  },
  {
    id: 'veq-torredelprado',
    name: 'Torre del Prado',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Proyecto residencial consolidado en Providencia con balcones panorámicos, diseño abierto y posicionamiento comercial de entrega inmediata.',
    address: 'Av. Pablo Neruda, Providencia, Guadalajara, Jal.',
    image: veqTorreDelPradoImage,
    units: 82,
    areaSqM: 12500,
    amenities: ['Parque central privado', 'Sky bar', 'Gimnasio climatizado', 'Área infantil', 'Control de acceso biométrico'],
    bannerText: 'Estilo sofisticado frente a áreas verdes.'
  },
  {
    id: 'veq-countryclub',
    name: 'Condominios Country Club',
    city: 'Guadalajara',
    status: 'En Desarrollo',
    description: 'Proyecto residencial premium frente al Country Club de Guadalajara, con tipologías residenciales de 112.76 m² a 175.15 m², amenidades integradas y una experiencia comercial respaldada por material real del proyecto.',
    address: 'Av. Américas 1930 Int. L3, Col. Country Club, Guadalajara, Jal.',
    image: countryClubLobbyChandelierWide,
    amenities: ['Alberca y terraza', 'Kids zone', 'Gimnasio', 'Bodegas personales', 'Storage & delivery', 'Salas de juegos & sports bar', 'Business center', 'Accesos controlados', 'Zona WiFi'],
    bannerText: 'Frente al Country Club.',
    unitMix: ['112.76 m²', '158.23 m²', '161.55 m²', '175.15 m²'],
    contact: {
      phone: '(33) 1142 9932',
      email: 'ventas@luxent.properties',
      website: 'www.condominioscountryclub.com',
    },
    reelVideo: {
      src: '/videos/countryclub/country-club-reel-marzo-2026.mp4',
      poster: countryClubBalconyView,
      label: 'Registro audiovisual real · Marzo 2026',
    },
    gallery: [
      {
        src: countryClubLobbyChandelierWide,
        alt: 'Lobby de doble altura en Condominios Country Club',
        label: 'Lobby',
      },
      {
        src: countryClubLobbyLounge,
        alt: 'Sala lounge en Condominios Country Club',
        label: 'Lounge',
      },
      {
        src: countryClubPoolDeck,
        alt: 'Alberca y terraza en Condominios Country Club',
        label: 'Alberca y terraza',
      },
      {
        src: countryClubLivingRoom,
        alt: 'Área social interior en Condominios Country Club',
        label: 'Área social',
      },
      {
        src: countryClubBalconyView,
        alt: 'Vista desde balcón en Condominios Country Club',
        label: 'Vista al green',
      },
      {
        src: countryClubWalkInCloset,
        alt: 'Walk-in closet en Condominios Country Club',
        label: 'Vestidor',
      },
      {
        src: countryClubBedroomSuite,
        alt: 'Recámara principal en Condominios Country Club',
        label: 'Recámara principal',
      },
    ],
  },
  {
    id: 'veq-travessera',
    name: 'Travessera',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Arquitectura boutique pensada para maximizar privacidad, confort y eficiencia espacial en una ubicación residencial consolidada.',
    address: 'Zona Providencia, Guadalajara, Jal.',
    image: veqTravesseraImage,
    units: 45,
    areaSqM: 6800,
    amenities: ['Roof garden con fogateros', 'Asadores empotrados', 'Gimnasio de pesas', 'Bicicleteros', 'Circuito cerrado TV'],
    bannerText: 'Exclusividad inteligente a tu alcance.'
  },
  {
    id: 'veq-paseodegracia',
    name: 'Paseo de Gracia',
    city: 'Guadalajara',
    status: 'En Desarrollo',
    description: 'Condominio horizontal premium sobre Av. Paseo de Gracia, con lotes residenciales, casa club y comercialización por etapas.',
    address: 'Av. Paseo de Gracia, Guadalajara, Jal.',
    image: veqPaseoDeGraciaImage,
    units: 34,
    areaSqM: 15800,
    amenities: ['Doble filtro de seguridad', 'Casa Club de lujo', 'Cancha de pádel profesional', 'Sendero arbolado', 'Juegos infantiles y pet zone'],
    bannerText: 'El pináculo del condominio horizontal.'
  },
  {
    id: 'lirical-towers',
    name: 'Lírica Towers',
    city: 'Guadalajara',
    status: 'En Desarrollo',
    description: 'Desarrollo residencial contemporáneo con imagen local disponible en el proyecto y orientación clara a plusvalía urbana.',
    address: 'Av. Circunvalación Agustín Yáñez, Guadalajara, Jal.',
    image: veqDevelopmentThumbImage,
    units: 140,
    areaSqM: 14500,
    amenities: ['Alberca climatizada', 'Gimnasio equipado', 'Sky bar', 'Área de co-working', 'Seguridad 24/7'],
    bannerText: 'Estilo de vida redefinido.'
  }
];

export const INITIATIVES_DATA: Initiative[] = [
  {
    id: 'servicio-premium',
    title: 'Servicio premium',
    description: 'La experiencia del cliente parte de una atención personalizada, procesos claros y acompañamiento comercial durante todo el recorrido.',
    impact: 'Atención enfocada en clientes de alto perfil, con comunicación precisa y seguimiento cercano.',
    image: veqCountryClubImage
  },
  {
    id: 'experiencia-digital',
    title: 'Experiencia digital',
    description: 'Integramos herramientas comerciales como brochures, disponibilidad en tiempo real y materiales visuales para facilitar la toma de decisiones.',
    impact: 'Mejor visibilidad del inventario y una presentación comercial más consistente.',
    image: veqOperaImage
  },
  {
    id: 'analisis-comercial',
    title: 'Análisis comercial',
    description: 'La definición de producto, precio y narrativa comercial se apoya en lectura de mercado y perfil del cliente.',
    impact: 'Mayor claridad para estructurar salida al mercado y estrategia comercial.',
    image: veqPaseoDeGraciaImage
  }
];

export const BLOG_DATA: BlogArticle[] = [
  {
    id: 'segmento-premium',
    title: 'Por qué el segmento premium exige una estrategia comercial distinta',
    date: 'Junio 2025',
    category: 'Tendencias',
    excerpt: 'Luxent opera dentro del segmento premium con un enfoque centrado en atención personalizada, posicionamiento selectivo y experiencia de marca.',
    content: 'La comercialización de propiedades premium requiere precisión en el mensaje, curaduría del inventario y un entendimiento profundo del perfil del cliente. Luxent estructura la comunicación y la experiencia comercial para responder a ese nivel de exigencia.',
    image: veqCountryClubImage
  },
  {
    id: 'experiencia-digital',
    title: 'Experiencia digital en real estate: del brochure a la disponibilidad en tiempo real',
    date: 'Junio 2025',
    category: 'Consejos',
    excerpt: 'La experiencia digital ya no es un extra. Es parte central del proceso comercial para proyectos y propiedades de alto valor.',
    content: 'Cotizadores, brochures digitales, mapas 3D y disponibilidad en tiempo real permiten acelerar decisiones y dar claridad al cliente. En Luxent estas herramientas forman parte del proceso comercial cotidiano.',
    image: veqOperaImage
  },
  {
    id: 'marketing-especializado',
    title: 'Marketing especializado para propiedades exclusivas',
    date: 'Junio 2025',
    category: 'Consejos',
    excerpt: 'Cada propiedad necesita una estrategia distinta de posicionamiento, pauta, contenido visual y narrativa comercial.',
    content: 'Luxent diseña campañas adaptadas a cada propiedad con SEO/SEM, publicidad digital dirigida, redes sociales y piezas visuales capaces de comunicar valor, ubicación y estilo de vida con mayor precisión.',
    image: veqTravesseraImage
  },
  {
    id: 'diseno-vanguardia',
    title: 'Diseño visual de vanguardia: cómo vender mejor una propiedad',
    date: 'Junio 2025',
    category: 'Tendencias',
    excerpt: 'Renders, recorridos virtuales y fotografía de calidad elevan la percepción de valor y mejoran la conversación comercial.',
    content: 'Una presentación visual sofisticada permite capturar la esencia de cada propiedad y resaltar sus atributos diferenciales. Esa capa visual es clave para un segmento donde la percepción de detalle importa desde el primer contacto.',
    image: veqPaseoDeGraciaImage
  },
  {
    id: 'benchmarking-mercado',
    title: 'Benchmarking inmobiliario: la base para definir producto, precio y formas de pago',
    date: 'Junio 2025',
    category: 'Notas de Prensa',
    excerpt: 'El análisis de mercado permite diseñar mejor el producto y orientar la comercialización hacia el cliente correcto.',
    content: 'Los estudios de mercado y benchmarking en zonas como Country y Las Lomas ayudan a definir producto inmobiliario, precios, narrativa y esquemas de pago con una base comercial más sólida.',
    image: veqTorreDelPradoImage
  },
  {
    id: 'acompanamiento-legal',
    title: 'Acompañamiento legal desde la gestación hasta la postventa',
    date: 'Junio 2025',
    category: 'Notas de Prensa',
    excerpt: 'La confianza en un proyecto inmobiliario se construye también con acompañamiento jurídico claro y continuo.',
    content: 'Luxent acompaña a desarrolladores y clientes desde la etapa de gestación del proyecto hasta la escrituración y la postventa, integrando claridad operativa y soporte comercial a lo largo del proceso.',
    image: veqDevelopmentThumbImage
  }
];

export const VACANCIES_DATA: JobVacancy[] = [];

export const ALLIANCE_PARTNERS: Alliance[] = [];

export const STRATEGIC_BANKS = [];
