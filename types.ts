export interface NavItem {
  label: string;
  href: string;
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface TeamMember {
  name: string;
  role: string;
  description: string;
  image: string;
}

export enum BusinessType {
  CONSUMER = 'CONSUMER',
  INDUSTRIAL = 'INDUSTRIAL'
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
  details: string[];
}