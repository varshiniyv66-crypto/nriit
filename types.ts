

export interface Faculty {
  id: string;
  name: string;
  designation: string;
  qualification: string;
  specialization: string;
  joiningDate: string;
  isRegular: boolean;
  photo?: string;
}

export interface Lab {
  id: string;
  name: string;
  description: string;
  equipment: string[];
}

export interface Statistic {
  year: string;
  sanctioned: number;
  admitted: number;
}

export interface PEO {
  id: string;
  statement: string;
}

export interface MOU {
  id: string;
  partner: string;
  date: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  studentName?: string;
  description: string;
  date: string;
  type: 'academic' | 'sports' | 'cultural' | 'technical';
}

export interface StudentActivity {
  id: string;
  title: string;
  date: string;
  type: 'workshop' | 'seminar' | 'guest_lecture' | 'industrial_visit' | 'cultural';
  description: string;
}

export interface Department {
  id: string;
  name: string;
  code: string;
  hodName: string;
  intake: number;
  vision: string;
  mission: string[];
  peos: PEO[];
  faculty: Faculty[];
  labs: Lab[];
  stats: Statistic[];
  mous: MOU[];
  achievements: Achievement[];
  activities: StudentActivity[];
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavItem[];
}

export interface PlacementStat {
  year: string;
  placed: number;
  companies: number;
  highestPackage: string;
  averagePackage: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  category: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
}
