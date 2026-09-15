export interface Article {
  id: string;
  title: string;
  category: 'Brottmål' | 'Migrationsrätt' | 'Familjerätt' | 'Socialrätt' | 'Tvistemål' | 'Arvsrätt' | 'Allmänt';
  content: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  imageUrl?: string;
}

export interface Staff {
  id: string;
  name: string;
  title: 'Advokat / Delägare' | 'Advokat' | 'Biträdande jurist' | 'Paralegal' | 'Administrativ chef' | 'Paralegal / Administrativ chef' | 'Advokatassistent';
  bio: string;
  email: string;
  phone?: string;
  imageUrl: string;
  specialties: string[];
  education: string[];
  languages: string[];
  isOfficeSharing?: boolean;
}

export interface Booking {
  id: string;
  name: string;
  email: string;
  phone: string;
  practiceArea: string;
  preferredStaffId?: string;
  date: string;
  time: string;
  description: string;
  createdAt: string;
  status: 'Väntar på bekräftelse' | 'Bekräftad' | 'Avbokad';
}

export interface CareerPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Heltid' | 'Deltid' | 'Praktik';
  description: string;
  requirements: string[];
  qualifications: string[];
}
