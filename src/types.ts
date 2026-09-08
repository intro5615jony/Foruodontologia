export interface HeroSlide {
  id: string;
  image: string;
  alt: string;
  caption: string;
  objectPosition?: string;
}

export interface SpecialtyBarItem {
  id: string;
  title: string;
  category: string;
  iconName: string;
  treatmentId?: string;
}

export interface Specialist {
  id: string;
  name: string;
  role: string;
  cro: string;
  image: string;
  bio: string;
  curriculum: string;
  highlights: string[];
  objectPosition?: string;
  modalObjectPosition?: string;
}

export type TreatmentCategory = 'all' | 'estetica' | 'reabilitacao' | 'ortodontia' | 'prevencao';

export interface TreatmentItem {
  id: string;
  title: string;
  subtitle: string;
  category: TreatmentCategory;
  highlightTag: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  benefits: string[];
  indications?: string[];
}

export interface TestimonialPlaceholderItem {
  id: string;
  authorLabel: string;
  quotePlaceholder: string;
  source?: string;
  avatarUrl?: string;
}

export interface WhyForUItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface ExperienceStep {
  step: string;
  title: string;
  description: string;
}

export interface ClinicSpacePhoto {
  id: string;
  title: string;
  description: string;
  image: string;
  aspect: 'large' | 'secondary';
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  treatment: string;
  preferredDoctor?: string;
  preferredShift: string;
  notes?: string;
}

