export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
  colorTheme: 'secondary' | 'sky' | 'indigo' | 'amber' | 'emerald';
  details?: {
    overview: string;
    deliverables: string[];
    outcomes: string[];
  };
}

export interface InterestItem {
  id: string;
  name: string;
  iconName: string;
  colorTheme: 'secondary' | 'sky' | 'indigo' | 'amber' | 'emerald';
  description: string;
}

export interface PillarItem {
  title: string;
  category: string;
  subtitle: string;
  iconName: string;
  glowColor: string;
}

export interface ContactFormData {
  fullName: string;
  email: string;
  organization: string;
  collaborationArea: string;
  message: string;
}
