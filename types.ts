declare global {
  interface Window {
    scrollTo: (x: number, y: number) => void;
  }
}

export interface NavLink {
  name: string;
  path: string;
}

export interface Stat {
  icon: React.ComponentType<{ className?: string }>;
  value: string;
  label: string;
}

export interface EsgItem {
  id: string;
  title: string;
  fullTitle: string;
  description: string;
  imageUrl: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export interface Service {
    title: string;
    description: string;
    imageUrl: string;
    layout: 'left' | 'right';
}

export interface Project {
    category: string;
    location: string;
    title: string;
    imageUrl: string;
}

export interface Testimonial {
    name: string;
    location: string;
    quote: string;
    avatarUrl: string;
    rating: number;
    position: {
        top: string;
        left: string;
    }
}

export interface FaqItem {
    question: string;
    answer: string;
}

export interface JobPosition {
    id: string;
    title: string;
    department: string;
    location: string;
    type: 'Full-time' | 'Part-time' | 'Contract' | 'Internship';
    experience: string;
    description: string;
    requirements: string[];
    benefits: string[];
    postedDate: string;
    isActive: boolean;
}

export interface Benefit {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}

export interface EmployeeTestimonial {
    name: string;
    position: string;
    department: string;
    quote: string;
    avatarUrl: string;
    yearsAtCompany: string;
}