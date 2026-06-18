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

// Let's use the actual generated thumbnail for key properties and elegant mock URLs for others
export const DEVELOPMENTS_DATA: Development[] = [
  {
    id: 'veq-opera',
    name: 'Ópera',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Un ícono de majestuosidad vertical en el horizonte de Guadalajara. Ópera fusiona la elegancia clásica con el diseño sustentable del futuro, ofreciendo residencias elevadas con vistas de 360 grados de la ciudad y amenidades de categoría mundial.',
    address: 'Av. Juan Palomar y Arias, Guadalajara, Jal.',
    image: veqOperaImage,
    units: 110,
    areaSqM: 18400,
    amenities: ['Lobby triple altura', 'Infinity Pool', 'Club privado', 'Wellness Centre', 'Seguridad 24/7', 'Área de co-working premium'],
    bannerText: 'Cúspide de exclusividad vertical.'
  },
  {
    id: 'veq-torredelprado',
    name: 'Torre del Prado',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'La armonía perfecta entre el dinamismo metropolitano y la serenidad natural. Torre del Prado cuenta con departamentos de diseño abierto, balcones panorámicos de cristal templado y excepcionales jardines privados en Providencia.',
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
    description: 'Nuestra gema residencial vertical frente al legendario campo de golf Country Club. Vive rodeado de majestuosos árboles maduros, aire fresco y acabados artesanales del más alto lujo en una ubicación financiera inmejorable.',
    address: 'Vía Providencia / Country Club, Guadalajara, Jal.',
    image: veqCountryClubImage,
    units: 145,
    areaSqM: 26500,
    amenities: ['Panoramic Golf View', 'Alberca templada', 'Simulador de golf virtual', 'Sauna & Vapor', 'Cigar Room', 'Conserjería 24/7'],
    bannerText: 'La vida frente al Green.'
  },
  {
    id: 'veq-travessera',
    name: 'Travessera',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Arquitectura boutique pensada en la optimización del espacio, el confort y la privacidad. Travessera ofrece una distribución inteligente con ventilación natural óptima en el corazón de una zona residencial privilegiada.',
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
    description: 'El proyecto de condominio horizontal más exclusivo. Lotes residenciales premium organizados a través de una avenida de curvas orgánicas, parques integrados y servicios subterráneos con seguridad perimetral de grado militar.',
    address: 'Av. Paseo de Gracia, Guadalajara, Jal.',
    image: veqPaseoDeGraciaImage,
    units: 34,
    areaSqM: 15800,
    amenities: ['Doble filtro de seguridad', 'Casa Club de lujo', 'Cancha de Pádel profesional', 'Sendero arbolado', 'Juegos infantiles y Pet standard'],
    bannerText: 'El pináculo del condominio horizontal.'
  },
  {
    id: 'lirical-towers',
    name: 'Lírica Towers',
    city: 'Guadalajara',
    status: 'En Desarrollo',
    description: 'Espacios que vibran en sintonía con tu estilo de vida. Un desarrollo residencial de arquitectura contemporánea en una de las zonas con mayor plusvalía de Guadalajara.',
    address: 'Av. Circunvalación Agustín Yáñez, Guadalajara, Jal.',
    image: veqDevelopmentThumbImage,
    units: 140,
    areaSqM: 14500,
    amenities: ['Alberca climatizada', 'Gimnasio equipado', 'Sky bar', 'Área de co-working', 'Seguridad 24/7'],
    bannerText: 'Estilo de vida redefinido.'
  },
  {
    id: 'alana-wellness',
    name: 'Alana Wellness Living',
    city: 'Nuevo Vallarta',
    status: 'En Desarrollo',
    description: 'Experimenta la combinación perfecta entre comodidad y accesibilidad, donde cada detalle ha sido cuidadosamente diseñado para elevar tu estilo y calidad de vida frente al pacífico.',
    address: 'Paseo de los Cocoteros, Nuevo Vallarta, Nay.',
    image: 'https://picsum.photos/seed/alana_wellness/800/600',
    units: 180,
    areaSqM: 22000,
    amenities: ['Yoga studio', 'Spa privado', 'Acceso directo a playa', 'Huerto orgánico', 'Pool bar'],
    bannerText: 'Tu santuario de bienestar.'
  },
  {
    id: 'okun-living',
    name: 'Okún Living',
    city: 'Cancún',
    status: 'En Desarrollo',
    description: 'Conéctate con tu entorno en sofisticados espacios de diseño vanguardista, integrados de manera armoniosa con las espectaculares vistas y naturaleza del caribe mexicano.',
    address: 'Av. Bonampak, Zona Hotelera Norte, Cancún, Q.R.',
    image: 'https://picsum.photos/seed/okun_living/800/600',
    units: 120,
    areaSqM: 18500,
    amenities: ['Infinity pool', 'Club de playa', 'Marina zen', 'Gimnasio wellness', 'Seguridad privada'],
    bannerText: 'Sofisticación frente al mar.'
  },
  {
    id: 'alana-cerro',
    name: 'Alana Cerro Colorado',
    city: 'Los Cabos',
    status: 'Concluido',
    description: 'Residencias exclusivas con vistas panorámicas incomparables al Mar de Cortés. Un oasis de paz y lujo desértico moderno.',
    address: 'Cerro Colorado, San José del Cabo, B.C.S.',
    image: 'https://picsum.photos/seed/alana_cerro/800/600',
    units: 64,
    areaSqM: 11200,
    amenities: ['Mirador', 'Fogateros', 'Cava de vinos', 'Gimnasio panorámico', 'Infinity pool'],
    bannerText: 'Lujo en el desierto.'
  },
  {
    id: 'arbole-garden',
    name: 'Arbolé Garden',
    city: 'León',
    status: 'Concluido',
    description: 'Un concepto innovador que integra amplias áreas verdes con arquitectura de primer nivel para brindar un entorno familiar seguro, armónico y natural.',
    address: 'Zona Campestre, León, Gto.',
    image: 'https://picsum.photos/seed/arbole/800/600',
    units: 96,
    areaSqM: 15400,
    amenities: ['Parque central', 'Juegos infantiles', 'Pet park', 'Salón de ventos', 'Asadores'],
    bannerText: 'Sintonía con la naturaleza.'
  },
  {
    id: 'black-eleven',
    name: 'Black Eleven',
    city: 'Tijuana',
    status: 'Próximo',
    description: 'Redefiniendo el skyline urbano con una propuesta de usos mixtos que conjuga residencias premium, gastronomía selecta y suites de negocios sofisticados.',
    address: 'Zona Río, Tijuana, B.C.',
    image: 'https://picsum.photos/seed/blackeleven/800/600',
    units: 210,
    areaSqM: 31000,
    amenities: ['Business Lounge', 'Sky deck', 'Restaurantes en lobby', 'Concierge service', 'Cardio room'],
    bannerText: 'Vanguardia urbana en la frontera.'
  },
  {
    id: 'coordenada-central',
    name: 'Coordenada Central',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'El corazón de tu nuevo comienzo. Departamentos diseñados eficientemente para jóvenes profesionales que buscan cercanía, seguridad y accesibilidad.',
    address: 'Calzada Federalismo, Guadalajara, Jal.',
    image: 'https://picsum.photos/seed/coordenadacentral/800/600',
    units: 110,
    areaSqM: 9500,
    amenities: ['Roof garden', 'Bicicleteros', 'Lavandería común', 'Asadores', 'Área de fogatas'],
    bannerText: 'Conectividad absoluta.'
  },
  {
    id: 'coordenada-country',
    name: 'Coordenada Country',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Ubicado estratégicamente a unos pasos de la zona financiera de Guadalajara, ofrece un estilo de vida de altura con la máxima comodidad y seguridad.',
    address: 'Providencia / Country Club, Guadalajara, Jal.',
    image: 'https://picsum.photos/seed/coordenadacountry/800/600',
    units: 145,
    areaSqM: 18000,
    amenities: ['Lobby doble altura', 'Sauna', 'Business center', 'Pool table lounge', 'Jacuzzi'],
    bannerText: 'Exclusividad urbana.'
  },
  {
    id: 'coordenada-lafayette',
    name: 'Coordenada Lafayette',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'En el distrito más cultural e histórico de la ciudad. Diseñado para respirar el arte, gastronomía y dinamismo bohemio de la zona Lafayette.',
    address: 'Colonia Americana, Guadalajara, Jal.',
    image: 'https://picsum.photos/seed/lafayette/800/600',
    units: 82,
    areaSqM: 8900,
    amenities: ['Galería de arte', 'Cafetería interna', 'Bici-port', 'Terraza zen', 'Co-working public'],
  },
  {
    id: 'meridiano-101',
    name: 'Meridiano 101',
    city: 'León',
    status: 'Concluido',
    description: 'Un referente de diseño vertical en el Bajío. Su silueta icónica y acabados premium atraen a inversionistas de alto perfil que valoran el rendimiento sólido.',
    address: 'Blvd. Adolfo López Mateos, León, Gto.',
    image: 'https://picsum.photos/seed/meridiano/800/600',
    units: 154,
    areaSqM: 19800,
    amenities: ['Fire pits', 'Pista de jogging', 'Cancha de pádel', 'Alberca de nado', 'Club House'],
  },
  {
    id: 'punta-mayor',
    name: 'Punta Mayor',
    city: 'León',
    status: 'Próximo',
    description: 'Un master plan residencial diseñado para la vida familiar contemporánea en una ubicación privilegiada con alta rentabilidad constante.',
    address: 'Valle del Campestre, León, Gto.',
    image: 'https://picsum.photos/seed/puntamayor/800/600',
    units: 125,
    areaSqM: 16200,
    amenities: ['Cancha de fútbol infantil', 'Salón de yoga', 'Kids club', 'Parrillas gourmet', 'Splash park'],
  },
  {
    id: 'soho-5220',
    name: 'Soho 5220',
    city: 'Guadalajara',
    status: 'En Desarrollo',
    description: 'Inspirado en el modernismo industrial neoyorquino, adaptado al dinamismo corporativo de Zapopan. Ladrillo, metal y vistas a la ciudad.',
    address: 'Av. Patria, Zapopan, Jal.',
    image: 'https://picsum.photos/seed/soho5220/800/600',
    units: 105,
    areaSqM: 13900,
    amenities: ['Club social tipo rascacielos', 'Micro-cine', 'Gimnasio funcional', 'Spa mascotas', 'Cava privada'],
  },
  {
    id: 'veq-asuncion',
    name: 'Asunción Collection',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Elegancia clásica combinada con facilidades modernas en una de las colonias residenciales tradicionales más cotizadas y arboladas.',
    address: 'Av. De la Asunción, Zapopan, Jal.',
    image: 'https://picsum.photos/seed/asuncion/800/600',
    units: 72,
    areaSqM: 10400,
    amenities: ['Salón lounge', 'Asadores', 'Seguridad biométrica', 'Gimnasio', 'Área infantil'],
  },
  {
    id: 'veq-brasilia',
    name: 'Brasilia Collection',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Espacios habitables fluidos con balcones corridos y diseño sostenible que recolecta aguas de lluvia e incorpora energía solar comunitaria.',
    address: 'Colomos Providencia, Guadalajara, Jal.',
    image: 'https://picsum.photos/seed/brasilia/800/600',
    units: 90,
    areaSqM: 12500,
    amenities: ['Paneles solares', 'Eco-roof terrace', 'Alberca templada', 'Gimnasio pilates', 'Wifi central'],
  },
  {
    id: 'veq-martinica',
    name: 'Martinica Collection',
    city: 'León',
    status: 'En Desarrollo',
    description: 'Ubicación clave cerca de universidades y distritos de negocios del Bajío, ideal para arrendamiento corporativo y estudiantes con alto perfil.',
    address: 'La Martinica, León, Gto.',
    image: 'https://picsum.photos/seed/martinica/800/600',
    units: 115,
    areaSqM: 14100,
    amenities: ['Estudio de grabación', 'Salas de junta', 'Gimnasio de pesas', 'Zona de drones', 'Conserje'],
  },
  {
    id: 'veq-severodiaz',
    name: 'Severo Díaz Collection',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Estilo boutique de tan solo 45 departamentos selectos con acceso controlado en una ubicación de máxima tranquilidad a cuadras del Centro Histórico.',
    address: 'Severo Díaz, Guadalajara, Jal.',
    image: 'https://picsum.photos/seed/severo/800/600',
    units: 45,
    areaSqM: 6100,
    amenities: ['Patio con fuente', 'Terraza de lectura', 'Cámaras térmicas', 'Estacionamiento subterráneo'],
  },
  {
    id: 'veq-villamorelos',
    name: 'Villa Morelos Collection',
    city: 'Guadalajara',
    status: 'En Desarrollo',
    description: 'Conecta con tu nuevo estilo de vida urbano. Ofrece unidades habitacionales funcionales con acceso inmediato a ciclovías y transporte sustentable.',
    address: 'Av. Morelos, Guadalajara, Jal.',
    image: 'https://picsum.photos/seed/villamorelos/800/600',
    units: 135,
    areaSqM: 15200,
    amenities: ['Taller de bicis', 'Sky-lounge', 'Huerto ecológico', 'Área de paseo', 'Estaciones de carga EV'],
  },
  {
    id: 'villadhara',
    name: 'VillaDhara',
    city: 'Guadalajara',
    status: 'Concluido',
    description: 'Un concepto innovador y exclusivo donde el agua, el aire y el diseño paisajístico se mezclan para dar vida a un oasis inigualable en Zapopan.',
    address: 'Valle Real, Zapopan, Jal.',
    image: 'https://picsum.photos/seed/villadhara/800/600',
    units: 80,
    areaSqM: 14700,
    amenities: ['Club privado', 'Cancha de tenis', 'Lago artificial', 'Gimnasio crossfit', 'Restaurantes privados'],
  }
];

export const INITIATIVES_DATA: Initiative[] = [
  {
    id: 'comedores',
    title: 'Comedores dignos de obra',
    description: 'Para nuestro personal de construcción, hemos creado espacios limpios y techados donde pueden tomar sus alimentos calientes y balanceados. Buscamos dignificar el oficio de la construcción y asegurar que todos laboren bajo trato humano.',
    impact: 'Mejora en calidad de alimentación para más de 1,200 trabajadores activos semanalmente.',
    image: 'https://picsum.photos/seed/comedores/800/600'
  },
  {
    id: 'aulas',
    title: 'Aulas Educativas en Obra',
    description: 'Creemos en el valor de acompañar a las personas con procesos claros, atención cercana y herramientas que hagan más humana la experiencia inmobiliaria.',
    impact: '64 alumnos activos cursando certificados académicos oficiales SEP en 3 aulas interactivas instaladas en las obras.',
    image: 'https://picsum.photos/seed/aulas/800/600'
  },
  {
    id: 'kokone',
    title: 'Kokone',
    description: 'A través de nuestra iniciativa de aportación patronal directa, proporcionamos financiamiento para comedores, equipamiento didáctico y alimentación balanceada diaria para niñas, niños y adolescentes de 6 a 17 años que asisten a centros infantiles de prevención social.',
    impact: 'Protección infantil y alimentación nutritiva diaria para más de 150 pequeños en riesgo de vulnerabilidad.',
    image: 'https://picsum.photos/seed/kokone/800/600'
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

export const VACANCIES_DATA: JobVacancy[] = [
  {
    id: 'coord-titulacion',
    title: 'Coordinador de titulación',
    city: 'Guadalajara',
    department: 'Operaciones Jurídicas & Ventas',
    requirements: [
      'Licenciatura terminada en Derecho o Administración Pública con título.',
      'Experiencia mínima de 3 años coordinando firmas y avalúos con notarías públicas.',
      'Dominio de trámites de créditos Infonavit, Fovissste y Bancarios.',
      'Excelente trato al cliente y proactividad.'
    ],
    benefits: [
      'Sueldo altamente competitivo + bonos trimestrales por metas de firmas.',
      'Seguro de Gastos Médicos Mayores (SGMM).',
      'Vales de despensa y fondo de ahorro superior por ley mexicana.',
      'Plan de carrera profesional estructurado dentro de la corporación.'
    ]
  },
  {
    id: 'aux-compras',
    title: 'Auxiliar de Compras',
    city: 'Guadalajara',
    department: 'Suministros & Materiales',
    requirements: [
      'Licenciatura en Administración, Comercio Internacional o Ingeniería Civil.',
      'Experiencia de 2 años en compras de materiales de construcción de obra civil y acabados.',
      'Manejo intermedio de sistemas ERP (SAP, Intelisis u Oracle).',
      'Habilidades sólidas de negociación comercial y trato a proveedores.'
    ],
    benefits: [
      'Prestaciones de ley superiores desde el primer día laboral.',
      'Horario de lunes a viernes con opción a home office parcial.',
      'Capacitaciones continuas pagadas.',
      'Descuentos exclusivos en desarrollos de la empresa.'
    ]
  },
  {
    id: 'diseno-grafico',
    title: 'Diseñador Gráfico',
    city: 'Guadalajara',
    department: 'Marketing y Comunicación',
    requirements: [
      'Licenciatura en Diseño Gráfico, Animación o Comunicación Visual.',
      'Portafolio sólido demostrando diseño premium de marcas y brochure inmobiliario.',
      'Intermedio/Avanzado en Figma, Adobe Illustrator, Photoshop e InDesign.',
      'Noción de renderizado 3D básico o edición de video es un gran plus.'
    ],
    benefits: [
      'Equipo de trabajo Apple de última generación provisto para tus labores.',
      'Esquema híbrido de trabajo flexible.',
      'Sueldo mensual garantizado neto con bono de incentivo creativo.',
      'Clases de inglés corporativas gratuitas de nivel avanzado.'
    ]
  },
  {
    id: 'coord-acabados',
    title: 'Coordinador de Acabados',
    city: 'Nuevo Vallarta',
    department: 'Supervisión de Obra',
    requirements: [
      'Arquitecto o Ingeniero Civil con cédula profesional.',
      'Experiencia de 4 años en supervisión de entrega y acabados residenciales de lujo.',
      'Conocimiento en materiales pétreos, maderas, carpintería fina y herrajes.',
      'Ojo impecable para el detalle y control de calidad estricto.'
    ],
    benefits: [
      'Automóvil utilitario corporativo con viáticos de combustible cubiertos.',
      'Seguro de vida y gastos médicos mayores.',
      'Días adicionales de vacaciones según antigüedad acelerada.',
      'Hospedaje complementario de transición si vienes de otro estado.'
    ]
  },
  {
    id: 'gerente-obra',
    title: 'Gerente de Obra',
    city: 'Guadalajara',
    department: 'Construcción y Proyectos',
    requirements: [
      'Ingeniería Civil o Arquitectura con Maestría en Administración de la Construcción.',
      'Mínimo 6 años lidiando con edificaciones verticales superiores a 15 niveles.',
      'Manejo impecable de presupuestos, contratistas, y reportes de avance físico.',
      'Habilidades innatas de liderazgo y solución rápida de conflictos técnicos.'
    ],
    benefits: [
      'Atractiva prima vacacional doble por encima de reglamentos obligatorios.',
      'Bono anual basado directamente en eficiencias presupuestarias de obra.',
      'Seguro médico completo para ti y tu núcleo familiar directo.',
      'Membresía anual gratuita para clubes de desarrollo profesional.'
    ]
  },
  {
    id: 'gerente-cobranza',
    title: 'Gerente de Cobranza',
    city: 'Guadalajara',
    department: 'Finanzas e Hipotecario',
    requirements: [
      'Licenciatura en Contabilidad, Finanzas o Economía.',
      'Experiencia sólida de 5 años administrando carteras vencidas preventivas y judiciales.',
      'Conocimiento de contratos de preventa inmobiliaria y esquemas de aportaciones recurrentes.',
      'Excelente liderazgo y mediación conciliatoria.'
    ],
    benefits: [
      'Sueldo base + comisiones por recuperación de cartera vencida.',
      'Gozas de todas las prestaciones de ley superiores más vales de gasolina.',
      'Fondo de retiro pensionario complementario por desempeño constante.',
      'Excelente clima laboral certificado Great Place to Work.'
    ]
  }
];

export const ALLIANCE_PARTNERS: Alliance[] = [
  {
    id: 'tacher',
    partnerName: 'Tacher Arquitectos',
    role: 'Desarrollos con sello distintivo',
    description: 'Colaboramos estrechamente con el prestigioso despacho Tacher Arquitectos para crear espacios residenciales icónicos y únicos en su tipo, que no solo embellecen las ciudades, sino que generan comunidades sustentables de verdadero valor patrimonial duradero.',
    image: 'https://picsum.photos/seed/tacher/800/500'
  },
  {
    id: 'huber',
    partnerName: 'Huber Design Studio',
    role: 'Diseño interior que inspira',
    description: 'Nuestros desarrollos cobran sofisticación en cada rincón gracias a la colaboración estratégica internacional con el estudio de interiores Huber, quienes infunden tendencias de vanguardia, confort natural, y materiales selectos en lobbies, amenities y departamentos.',
    image: 'https://picsum.photos/seed/huber_interior/800/500'
  },
  {
    id: 'fernandez',
    partnerName: 'Corporativo Fernández',
    role: 'Sinergia para espacios excepcionales',
    description: 'La consolidación sólida con Corporativo Fernández nos permite unificar esfuerzos de gestión territorial, optimización de recursos y velocidad operativa de primer nivel, garantizando entregas oportunas libres de cualquier vicio legal u operativo.',
    image: 'https://picsum.photos/seed/corp_fernandez/800/500'
  }
];

export const STRATEGIC_BANKS = [
  { name: 'BanBajío', logo: '🏦 BanBajío' },
  { name: 'SHF', logo: '🏢 SHF (Sociedad Hipotecaria Federal)' },
  { name: 'Banregio', logo: '💼 Banregio' },
  { name: 'BBVA', logo: '🌐 BBVA' },
  { name: 'Santander', logo: '🔴 Santander' },
  { name: 'Metrofinanciera', logo: '📐 Metrofinanciera' }
];
