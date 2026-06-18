import React from 'react';
import {
  Buildings,
  Monitor,
  ChartLineUp,
  Handshake,
  PenNib,
  UsersThree,
  Briefcase,
  Key,
  UserCircle,
  TrendUp,
} from '@phosphor-icons/react';

export type EditorialIconName =
  | 'buildings'
  | 'monitor'
  | 'chart-line-up'
  | 'handshake'
  | 'pen-nib'
  | 'users-three'
  | 'briefcase'
  | 'key'
  | 'user-circle'
  | 'trend-up';

interface EditorialIconProps {
  name: EditorialIconName;
  className?: string;
  size?: number;
}

const ICONS = {
  'buildings': Buildings,
  'monitor': Monitor,
  'chart-line-up': ChartLineUp,
  'handshake': Handshake,
  'pen-nib': PenNib,
  'users-three': UsersThree,
  'briefcase': Briefcase,
  'key': Key,
  'user-circle': UserCircle,
  'trend-up': TrendUp,
} as const;

export default function EditorialIcon({
  name,
  className = 'text-[#C9A96E]',
  size = 28,
}: EditorialIconProps) {
  const Icon = ICONS[name];

  return <Icon size={size} weight="light" className={className} aria-hidden="true" />;
}
