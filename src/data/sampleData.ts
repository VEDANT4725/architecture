
import { DesignProject, Designer, MaterialSwatch, QuizQuestion } from '../types';

export const MATERIAL_SWATCHES: MaterialSwatch[] = [
  {
    id: 'mat-1',
    name: 'Calacatta Viola Marble',
    category: 'Stone',
    textureUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=400',
    color: '#e5dfd9',
    pricePerSqFt: 85,
    description: 'Honed Italian marble with rich cabernet veining and subtle warm undertones.',
    tags: ['Luxury', 'Countertop', 'Accent Wall']
  },
  {
    id: 'mat-2',
    name: 'Smoked White Oak Planks',
    category: 'Flooring',
    textureUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=400',
    color: '#8c7662',
    pricePerSqFt: 18,
    description: 'Wide-plank European oak with wire-brushed finish and matte low-VOC sealant.',
    tags: ['Sustainable', 'Flooring', 'Warm']
  },
  {
    id: 'mat-3',
    name: 'Venetian Lime Wash Plaster',
    category: 'Wall Finish',
    textureUrl: 'https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=400',
    color: '#ded6ca',
    pricePerSqFt: 12,
    description: 'Breathable, natural lime-based finish offering cloud-like tactile texture.',
    tags: ['Texture', 'Organic', 'Low VOC']
  },
  {
    id: 'mat-4',
    name: 'Tactile Bouclé Weave in Cream',
    category: 'Textile',
    textureUrl: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&q=80&w=400',
    color: '#f5f0eb',
    pricePerSqFt: 24,
    description: 'Heavyweight wool-cotton blended bouclé with soft nubby hand feel for upholstery.',
    tags: ['Cozy', 'Upholstery', 'Premium']
  },
  {
    id: 'mat-5',
    name: 'Brushed Champagne Brass',
    category: 'Cabinetry',
    textureUrl: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&q=80&w=400',
    color: '#cfb53b',
    pricePerSqFt: 45,
    description: 'Fingerprint resistant architectural metal hardware trim with soft satin sheen.',
    tags: ['Hardware', 'Metallic', 'Modern']
  },
  {
    id: 'mat-6',
    name: 'Fluted Walnut Panels',
    category: 'Cabinetry',
    textureUrl: 'https://images.unsplash.com/photo-1546484475-7f7bd55792da?auto=format&fit=crop&q=80&w=400',
    color: '#4a3525',
    pricePerSqFt: 32,
    description: 'Acoustic ribbed solid American walnut paneling with rich warm grain.',
    tags: ['Feature Wall', 'Acoustic', 'Wood']
  }
];

export const DESIGN_PROJECTS: DesignProject[] = [
  {
    id: 'proj-1',
    title: 'Kyoto Sanctuary Penthouse',
    style: 'Japandi',
    location: 'Tribeca, New York',
    year: 2024,
    areaSqFt: 3400,
    designerName: 'Elena Rostova',
    designerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    heroImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600',
    afterImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'A minimalist haven harmonizing Japanese wabi-sabi philosophy with Scandinavian comfort. Custom oak joinery, concealed storage, and floor-to-ceiling silk screen dividers.',
    budgetRange: '$180,000 - $250,000',
    tags: ['Penthouse', 'Minimalist', 'Custom Joinery', 'Zen Garden'],
    hotspots: [
      {
        id: 'h1',
        x: 42,
        y: 65,
        title: 'Low Profile Bouclé Sectional',
        brand: 'Lumina Studio Select',
        price: 4850,
        category: 'Seating',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400',
        description: 'Custom curved sofa upholstered in Italian textured wool bouclé.'
      },
      {
        id: 'h2',
        x: 75,
        y: 40,
        title: 'Travertine Sculpture Coffee Table',
        brand: 'Studio Koto',
        price: 2200,
        category: 'Tables',
        image: 'https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=80&w=400',
        description: 'Monolithic raw cut Italian travertine table with honed satin finish.'
      },
      {
        id: 'h3',
        x: 25,
        y: 30,
        title: 'Washi Paper Pendant Light',
        brand: 'Noguchi Edition',
        price: 940,
        category: 'Lighting',
        image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=400',
        description: 'Handcrafted mulberry paper pendant dispersing diffuse warm light.'
      }
    ]
  },
  {
    id: 'proj-2',
    title: 'Solstice Villa & Courtyard',
    style: 'Biophilic Luxury',
    location: 'Malibu, California',
    year: 2023,
    areaSqFt: 5200,
    designerName: 'Mateo Vance',
    designerAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200',
    heroImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1600',
    afterImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Seamless integration of indoor living with coastal native gardens. Features limestone walls, smart circadian lighting system, and a waterfall indoor planter feature.',
    budgetRange: '$350,000 - $500,000',
    tags: ['Coastal', 'Biophilic', 'Smart Home', 'Indoor Water Wall'],
    hotspots: [
      {
        id: 'h4',
        x: 35,
        y: 70,
        title: 'Teak Lounge Chair Set',
        brand: 'Malibu Craft Works',
        price: 3100,
        category: 'Outdoor',
        image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=400',
        description: 'Sustainably harvested solid teak with weather-resistant sailcloth cushions.'
      },
      {
        id: 'h5',
        x: 60,
        y: 45,
        title: 'Linear Fire Trough Table',
        brand: 'Ignis Elements',
        price: 4600,
        category: 'Heating & Decor',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80&w=400',
        description: 'Bioethanol zero-emission architectural fire feature in concrete casing.'
      }
    ]
  },
  {
    id: 'proj-3',
    title: 'Haussmann Modern Loft',
    style: 'Parisian Elegance',
    location: 'Le Marais, Paris',
    year: 2024,
    areaSqFt: 2800,
    designerName: 'Camille Laurent',
    designerAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200',
    heroImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
    beforeImage: 'https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?auto=format&fit=crop&q=80&w=1600',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Restored 19th-century crown mouldings juxtaposed against bold contemporary brass lighting, emerald velvet furniture, and herringbone oak floors.',
    budgetRange: '$220,000 - $310,000',
    tags: ['Historic', 'Parisian', 'Velvet', 'Herringbone'],
    hotspots: [
      {
        id: 'h6',
        x: 50,
        y: 60,
        title: 'Emerald Curved Velvet Sofa',
        brand: 'Maison Atelier',
        price: 5200,
        category: 'Seating',
        image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=400',
        description: 'Rich jewel tone velvet statement sofa with tailored channel tufting.'
      }
    ]
  },
  {
    id: 'proj-4',
    title: 'Monolith Architectural Residence',
    style: 'Warm Minimalist',
    location: 'Zurich, Switzerland',
    year: 2023,
    areaSqFt: 4600,
    designerName: 'Elena Rostova',
    designerAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200',
    heroImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    afterImage: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    gallery: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000'
    ],
    description: 'Smooth poured concrete walls paired with warm cedar slats, hidden ambient cove lighting, and seamless indoor-outdoor polished screed flooring.',
    budgetRange: '$400,000 - $600,000',
    tags: ['Concrete', 'Architectural', 'Alpine Views'],
    hotspots: []
  }
];

export const DESIGNERS: Designer[] = [
  {
    id: 'des-1',
    name: 'Elena Rostova',
    role: 'Principal Architect',
    rating: 4.98,
    reviewsCount: 48,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300',
    coverImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
    bio: 'Specializing in spatial harmony, modern Japandi aesthetics, and high-end residential penthouses across New York and Tokyo.',
    specialties: ['Japandi', 'Warm Minimalist', 'Modern Organic'],
    hourlyRate: 250,
    location: 'New York, NY',
    completedProjects: 64,
    availableSlots: ['Tomorrow, 2:00 PM', 'Thursday, 10:00 AM', 'Friday, 4:00 PM']
  },
  {
    id: 'des-2',
    name: 'Mateo Vance',
    role: 'Senior Interior Designer',
    rating: 4.94,
    reviewsCount: 36,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300',
    coverImage: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800',
    bio: 'Pioneer in biophilic design, sustainable coastal retreats, and smart environmental wellness integration.',
    specialties: ['Biophilic Luxury', 'Modern Organic', 'Mid-Century Modern'],
    hourlyRate: 220,
    location: 'Los Angeles, CA',
    completedProjects: 52,
    availableSlots: ['Wednesday, 11:00 AM', 'Thursday, 3:00 PM', 'Next Monday, 1:00 PM']
  },
  {
    id: 'des-3',
    name: 'Camille Laurent',
    role: 'Lighting Specialist',
    rating: 4.96,
    reviewsCount: 29,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=300',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800',
    bio: 'Parisian-trained architect fusing historic European details with striking contemporary sculptural fixtures.',
    specialties: ['Parisian Elegance', 'Warm Minimalist', 'Japandi'],
    hourlyRate: 280,
    location: 'Paris & London',
    completedProjects: 41,
    availableSlots: ['Tomorrow, 4:00 PM', 'Friday, 11:00 AM']
  }
];

export const STYLE_QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: "How do you feel about clutter & home accessories?",
    subtitle: "Select the atmosphere that resonates with your personal sense of calmness.",
    options: [
      {
        label: "Every object must serve a purpose or bring serene peace",
        description: "Clean surfaces, tactile natural materials, warm neutral hues",
        style: "Japandi",
        imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=500"
      },
      {
        label: "Surrounding myself with plants, raw stone, and natural sunlight",
        description: "Organic forms, indoor greenery walls, warm earthy tones",
        style: "Biophilic Luxury",
        imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=500"
      },
      {
        label: "Sculptural artwork, crown mouldings, and gold accents",
        description: "Classic European charm blended with high-contrast contemporary art",
        style: "Parisian Elegance",
        imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=500"
      },
      {
        label: "Exposed brick, steel beams, and moody warm ambient lamps",
        description: "Industrial heritage with plush leather and architectural lighting",
        style: "Industrial Loft",
        imageUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=500"
      }
    ]
  },
  {
    id: 2,
    question: "What color palette feels most like home?",
    subtitle: "Your color preferences reveal how light and warmth impact your mood.",
    options: [
      {
        label: "Oatmeal, Sand, Muted Walnut, Light Terracotta",
        description: "Warm monochrome neutrals with organic textures",
        style: "Warm Minimalist",
        imageUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=500"
      },
      {
        label: "Forest Greens, Travertine Taupe, Ochre, Bamboo",
        description: "Rich botanical shades inspired by dense cedar forest light",
        style: "Biophilic Luxury",
        imageUrl: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=500"
      },
      {
        label: "Teak, Mustard Velvet, Olive, Off-White",
        description: "Retro warm tones with iconic mid-century pops",
        style: "Mid-Century Modern",
        imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=500"
      },
      {
        label: "Charcoal, Brushed Nickel, Raw Oak, Warm White",
        description: "High-contrast architectural contrast with crisp lines",
        style: "Modern Organic",
        imageUrl: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=500"
      }
    ]
  }
];