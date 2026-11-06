export type PropertyType = 'Apartment' | 'Villa' | 'Townhouse' | 'Penthouse';

export interface Developer {
  id: number;
  name: string;
  logo: string;
  tagline: string;
  description: string;
  projectCount: number;
}

export interface PaymentPlanMilestone {
  milestone: string;
  percentage: string;
}

export interface Project {
  id: number;
  developerId: number;
  name: string;
  location: string;
  type: PropertyType;
  price: string;
  handover: string;
  paymentPlan: string;
  description: string;
  highlights: string[];
  amenities: string[];
  gallery: string[];
  heroImage: string;
  paymentPlanBreakdown?: PaymentPlanMilestone[];
}
