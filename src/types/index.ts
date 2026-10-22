export type Accent = "gold" | "blue" | "green";

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  avatar?: string; // optional image URL; initials are used when omitted
  accent: Accent;
  outcome?: string; // short, concrete result shown under the quote
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  tags: string[];
  iconName: string;
  colorTheme: "secondary" | "sky" | "indigo" | "amber" | "emerald" | "blue";
  details?: {
    overview: string;
    deliverables: string[];
    outcomes: string[];
  };
}

export interface CaseStudyItem {
  id: string;
  number: string;
  title: string;
  img_url: string;
  description: string;
  iconName: string;
  colorTheme: "secondary" | "sky" | "indigo" | "amber" | "emerald" | "blue";
  details?: {
    challenge: string;
    approach: string;
    solution: string;
    impact: string;
  };
}

export interface SpeakingItem {
  id: string;
  name: string;
  iconName: string;
  colorTheme: "secondary" | "sky" | "indigo" | "amber" | "emerald";
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
