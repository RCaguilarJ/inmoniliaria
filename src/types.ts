/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Development {
  id: string;
  name: string;
  city: 'Cancún' | 'Guadalajara' | 'León' | 'Los Cabos' | 'Nuevo Vallarta' | 'Tijuana' | 'Tulum' | 'Monterrey';
  status: 'Concluido' | 'En Desarrollo' | 'Próximo';
  description: string;
  address: string;
  image: string;
  units?: number;
  areaSqM?: number;
  amenities?: string[];
  bannerText?: string;
}

export interface Initiative {
  id: string;
  title: string;
  description: string;
  impact: string;
  image: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  date: string;
  category: 'Inversión Inmobiliaria' | 'Tendencias' | 'Notas de Prensa' | 'Consejos' | 'Eventos' | 'Uncategorized';
  excerpt: string;
  content: string;
  image: string;
}

export interface JobVacancy {
  id: string;
  title: string;
  city: 'Guadalajara' | 'Nuevo Vallarta' | 'Cancún' | 'Tijuana' | 'Nacional';
  department: string;
  requirements: string[];
  benefits: string[];
}

export interface Alliance {
  id: string;
  partnerName: string;
  role: string;
  description: string;
  image: string;
}
