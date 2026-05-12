import { ReactNode } from 'react';
import type { Icons } from './components/ui/LucideIcons';

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

export interface IndustryItem {
  id: number;
  title: string;
  description: string;
  icon: ReactNode;
}

export interface ProcessStep {
  id: number;
  title: string;
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}
