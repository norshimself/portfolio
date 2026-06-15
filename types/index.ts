export interface NavLink {
  href: string;
  label: string;
  icon: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  website?: string;
  responsibilities?: string[];
}

export interface WorkItem {
  image: string;
  category: string;
  title: string;
  date: string;
  href: string;
  role?: string;
  description?: string;
  stack?: string[];
}

export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  items: string[];
}

export type TechLevel = 'core' | 'proficient' | 'familiar';

export interface TechItem {
  name: string;
  image: string;
  description: string;
  category: string;
  level: TechLevel;
}

export interface TestimonialItem {
  text: string;
  name: string;
  role: string;
  avatar: string;
}

export interface PartnerItem {
  src: string;
  alt: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  iconClass: string;
}

export interface AwardItem {
  number: number;
  title: string;
  date: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
