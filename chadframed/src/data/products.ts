import type { Product } from '../types';

export const products: Product[] = [
  {
    id: 'prd_01',
    name: 'UNDER EYE ELIXIR',
    slug: 'under-eye-elixir',
    category: 'Aesthetics',
    type: 'physical',
    price: 12499,
    currency: 'INR',
    images: ['/img1.png'],
    description: 'A high-performance serum designed to target under-eye fatigue, dark circles, and fine lines. Engineered with clinical precision for optimal skin recovery.',
    specifications: {
      'Volume': '30ml / 1.0 fl oz',
      'Skin Type': 'All Skin Types',
      'Active Ingredients': 'Caffeine, Peptides, Hyaluronic Acid',
      'Usage': 'Daily, AM and PM'
    },
    availability: 'in_stock',
    isFeatured: true
  },
  {
    id: 'prd_02',
    name: 'OBSIDIAN JAWLINE SCULPTOR',
    slug: 'obsidian-jawline-sculptor',
    category: 'Tools',
    type: 'physical',
    price: 8999,
    currency: 'INR',
    images: ['/img2.png'], // Placeholder image
    description: 'Precision-engineered tool for defining and sculpting the jawline through targeted resistance training.',
    specifications: {
      'Material': 'Medical-grade Silicone',
      'Resistance Level': 'Advanced (45 lbs)',
      'Dimensions': '3x3x2 cm'
    },
    availability: 'in_stock',
    isFeatured: false
  },
  {
    id: 'wrk_01',
    name: 'PROJECT SYMMETRY',
    slug: 'project-symmetry',
    category: 'Programs',
    type: 'digital',
    price: 14999,
    currency: 'INR',
    images: ['/img2.png'], // Placeholder image
    description: 'A 12-week comprehensive program focused on muscular hypertrophy, structural symmetry, and aesthetic proportion.',
    specifications: {
      'Duration': '12 Weeks',
      'Difficulty': 'Advanced',
      'Equipment': 'Full Gym Access Required',
      'Format': 'Digital PDF + Video Library'
    },
    availability: 'in_stock',
    isFeatured: true
  }
];
