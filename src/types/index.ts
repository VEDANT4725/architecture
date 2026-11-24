
export type DesignStyle = 
  | 'Japandi' 
  | 'Warm Minimalist' 
  | 'Biophilic Luxury' 
  | 'Modern Organic' 
  | 'Mid-Century Modern' 
  | 'Industrial Loft' 
  | 'Parisian Elegance';

export interface MaterialSwatch {
  id: string;
  name: string;
  category: 'Wall Finish' | 'Flooring' | 'Cabinetry' | 'Textile' | 'Stone';
  textureUrl: string;
  color: string;
  pricePerSqFt: number;
  description: string;
  tags: string[];
}

export interface Hotspot {
  id: string;
  x: number; // percentage
  y: number; // percentage
  title: string;
  brand: string;
  price: number;
  category: string;
  image: string;
  description: string;
}

export interface DesignProject {
  id: string;
  title: string;
  style: DesignStyle;
  location: string;
  year: number;
  areaSqFt: number;
  designerName: string;
  designerAvatar: string;
  heroImage: string;
  beforeImage?: string;
  afterImage: string;
  gallery: string[];
  description: string;
  budgetRange: string;
  hotspots: Hotspot[];
  tags: string[];
}

export interface Designer {
  id: string;
  name: string;
  role: 'Principal Architect' | 'Senior Interior Designer' | 'Lighting Specialist' | 'Landscape Architect';
  rating: number;
  reviewsCount: number;
  avatar: string;
  coverImage: string;
  bio: string;
  specialties: DesignStyle[];
  hourlyRate: number;
  location: string;
  completedProjects: number;
  availableSlots: string[];
}

export interface RoomConfig {
  roomType: 'Living Room' | 'Kitchen' | 'Master Bedroom' | 'Luxury Bathroom' | 'Dining Room';
  lightingMood: 'Daylight' | 'Golden Hour' | 'Ambient Night' | 'Cozy Dusk';
  wallColor: string;
  wallTexture: string;
  flooringId: string;
  accentMaterialId: string;
  furnitureSet: string;
}

export interface QuizQuestion {
  id: number;
  question: string;
  subtitle: string;
  options: {
    label: string;
    description: string;
    style: DesignStyle;
    imageUrl: string;
  }[];
}

export interface CartItem {
  id: string;
  title: string;
  price: number;
  image: string;
  category: string;
}