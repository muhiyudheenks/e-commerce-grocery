/**
 * Static catalogue for the Groziq storefront.
 * This is the single source of truth for the app — there is no backend.
 */

export interface Department {
  slug: string;
  name: string;
  icon: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  department: string;
  price: number;
  mrp?: number;
  unit: string;
  icon: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  bestSeller: boolean;
  description: string;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export const store = {
  name: 'Groziq',
  tagline: 'Smart Shopping. Better Savings.',
  about:
    'Kerala’s neighbourhood grocery, delivering farm-fresh produce and everyday essentials at honest prices.',
  address: '2nd Floor, Marine Drive Arcade, Kochi, Kerala 682031',
  phone: '+91 98470 12345',
  email: 'hello@groziq.in',
  hours: 'Mon – Sat, 7:00 AM – 9:00 PM',
};

export const announcements = [
  'Free delivery above ₹200',
  'Farm-fresh from Kerala',
  'Same-day delivery in Kochi',
];

export const departments: Department[] = [
  { slug: 'vegetables', name: 'Vegetables', icon: '🥬' },
  { slug: 'fruits', name: 'Fruits', icon: '🍌' },
  { slug: 'rice-grains', name: 'Rice & Grains', icon: '🌾' },
  { slug: 'spices', name: 'Spices', icon: '🌶️' },
];

export const products: Product[] = [
  // ---------------------------------------------------------------- Vegetables
  {
    id: 'v1',
    slug: 'nendran-banana-raw',
    name: 'Raw Nendran Banana',
    department: 'vegetables',
    price: 58,
    mrp: 72,
    unit: '1 kg',
    icon: '🍌',
    rating: 4.5,
    reviewCount: 128,
    inStock: true,
    bestSeller: true,
    description:
      'Firm, starchy Nendran picked in Wayanad. The classic choice for thoran, upperi and everyday Kerala cooking.',
  },
  {
    id: 'v2',
    slug: 'tapioca-kappa',
    name: 'Tapioca (Kappa)',
    department: 'vegetables',
    price: 42,
    mrp: 55,
    unit: '1 kg',
    icon: '🥔',
    rating: 4.3,
    reviewCount: 94,
    inStock: true,
    bestSeller: true,
    description:
      'Freshly dug tapioca with a soft, floury texture. Peeled and cleaned, ready to boil for kappa puzhukku.',
  },
  {
    id: 'v3',
    slug: 'drumstick',
    name: 'Drumstick',
    department: 'vegetables',
    price: 36,
    unit: '500 g',
    icon: '🫛',
    rating: 4.2,
    reviewCount: 61,
    inStock: true,
    bestSeller: false,
    description: 'Tender green drumsticks, ideal for sambar and avial. Snapped fresh each morning.',
  },
  {
    id: 'v4',
    slug: 'ash-gourd',
    name: 'Ash Gourd',
    department: 'vegetables',
    price: 32,
    mrp: 40,
    unit: '1 kg',
    icon: '🥒',
    rating: 4.1,
    reviewCount: 47,
    inStock: true,
    bestSeller: false,
    description: 'Mild, watery ash gourd with a clean finish — the backbone of a good olan.',
  },
  {
    id: 'v5',
    slug: 'okra-ladies-finger',
    name: 'Okra (Ladies Finger)',
    department: 'vegetables',
    price: 44,
    unit: '500 g',
    icon: '🌿',
    rating: 4.4,
    reviewCount: 112,
    inStock: true,
    bestSeller: true,
    description: 'Crisp, young okra that snaps cleanly. No fibre, no bruising.',
  },
  {
    id: 'v6',
    slug: 'small-onion-shallots',
    name: 'Small Onion (Shallots)',
    department: 'vegetables',
    price: 96,
    mrp: 120,
    unit: '500 g',
    icon: '🧅',
    rating: 4.6,
    reviewCount: 203,
    inStock: true,
    bestSeller: true,
    description: 'Pungent Kerala shallots with deep flavour. Essential for sambar, chutney and fish curry.',
  },
  {
    id: 'v7',
    slug: 'curry-leaves',
    name: 'Curry Leaves',
    department: 'vegetables',
    price: 12,
    unit: '100 g',
    icon: '🍃',
    rating: 4.7,
    reviewCount: 156,
    inStock: true,
    bestSeller: false,
    description: 'Glossy, aromatic curry leaves cut the same day. Nothing wilted.',
  },
  {
    id: 'v8',
    slug: 'elephant-yam',
    name: 'Elephant Yam (Chena)',
    department: 'vegetables',
    price: 54,
    unit: '1 kg',
    icon: '🍠',
    rating: 4.0,
    reviewCount: 38,
    inStock: true,
    bestSeller: false,
    description: 'Clean-cut chena blocks, peeled and ready for erissery or mezhukkupuratti.',
  },
  {
    id: 'v9',
    slug: 'green-chilli',
    name: 'Green Chilli',
    department: 'vegetables',
    price: 18,
    mrp: 24,
    unit: '250 g',
    icon: '🌶️',
    rating: 4.3,
    reviewCount: 88,
    inStock: true,
    bestSeller: false,
    description: 'Sharp, bright green chillies with a steady heat.',
  },
  {
    id: 'v10',
    slug: 'snake-gourd',
    name: 'Snake Gourd',
    department: 'vegetables',
    price: 34,
    unit: '1 kg',
    icon: '🥒',
    rating: 4.0,
    reviewCount: 29,
    inStock: false,
    bestSeller: false,
    description: 'Long, pale snake gourd with tender seeds. Good for thoran and curries.',
  },
  {
    id: 'v11',
    slug: 'coconut',
    name: 'Fresh Coconut',
    department: 'vegetables',
    price: 38,
    unit: '1 piece',
    icon: '🥥',
    rating: 4.5,
    reviewCount: 174,
    inStock: true,
    bestSeller: false,
    description: 'Mature, heavy coconuts with thick white flesh. De-husked for you.',
  },
  {
    id: 'v12',
    slug: 'tomato',
    name: 'Tomato',
    department: 'vegetables',
    price: 28,
    mrp: 36,
    unit: '1 kg',
    icon: '🍅',
    rating: 4.2,
    reviewCount: 142,
    inStock: true,
    bestSeller: false,
    description: 'Firm, ripe tomatoes graded for even colour and no soft spots.',
  },

  // -------------------------------------------------------------------- Fruits
  {
    id: 'f1',
    slug: 'nendran-banana-ripe',
    name: 'Ripe Nendran Banana',
    department: 'fruits',
    price: 72,
    mrp: 90,
    unit: '1 kg',
    icon: '🍌',
    rating: 4.6,
    reviewCount: 219,
    inStock: true,
    bestSeller: true,
    description: 'Sweet, golden Nendran ripened naturally. Excellent for pazham pori.',
  },
  {
    id: 'f2',
    slug: 'alphonso-mango',
    name: 'Alphonso Mango',
    department: 'fruits',
    price: 320,
    mrp: 400,
    unit: '1 kg',
    icon: '🥭',
    rating: 4.8,
    reviewCount: 287,
    inStock: true,
    bestSeller: true,
    description: 'Seasonal Alphonso with dense, fibreless flesh and a heavy perfume.',
  },
  {
    id: 'f3',
    slug: 'tender-coconut',
    name: 'Tender Coconut',
    department: 'fruits',
    price: 45,
    unit: '1 piece',
    icon: '🥥',
    rating: 4.7,
    reviewCount: 198,
    inStock: true,
    bestSeller: true,
    description: 'Chilled tender coconut, heavy with sweet water. Opened on request.',
  },
  {
    id: 'f4',
    slug: 'pineapple-vazhakulam',
    name: 'Vazhakulam Pineapple',
    department: 'fruits',
    price: 68,
    mrp: 85,
    unit: '1 piece',
    icon: '🍍',
    rating: 4.5,
    reviewCount: 134,
    inStock: true,
    bestSeller: false,
    description: 'GI-tagged Vazhakulam pineapple — low acid, high sugar, deep yellow core.',
  },
  {
    id: 'f5',
    slug: 'papaya',
    name: 'Papaya',
    department: 'fruits',
    price: 52,
    unit: '1 kg',
    icon: '🫐',
    rating: 4.1,
    reviewCount: 72,
    inStock: true,
    bestSeller: false,
    description: 'Tree-ripened papaya with firm orange flesh. Sweet without being cloying.',
  },
  {
    id: 'f6',
    slug: 'robusta-banana',
    name: 'Robusta Banana',
    department: 'fruits',
    price: 48,
    mrp: 60,
    unit: '1 kg',
    icon: '🍌',
    rating: 4.3,
    reviewCount: 165,
    inStock: true,
    bestSeller: false,
    description: 'Everyday eating banana — soft, mild and consistently sweet.',
  },
  {
    id: 'f7',
    slug: 'guava',
    name: 'Guava',
    department: 'fruits',
    price: 64,
    unit: '1 kg',
    icon: '🍈',
    rating: 4.2,
    reviewCount: 58,
    inStock: true,
    bestSeller: false,
    description: 'Crisp white-flesh guava, picked just before full ripeness.',
  },
  {
    id: 'f8',
    slug: 'jackfruit-bulbs',
    name: 'Jackfruit Bulbs',
    department: 'fruits',
    price: 110,
    mrp: 140,
    unit: '500 g',
    icon: '🍈',
    rating: 4.4,
    reviewCount: 91,
    inStock: true,
    bestSeller: false,
    description: 'Cleaned varikka bulbs, deseeded and packed the same day. No mess.',
  },
  {
    id: 'f9',
    slug: 'sapota',
    name: 'Sapota (Chikoo)',
    department: 'fruits',
    price: 58,
    unit: '1 kg',
    icon: '🥝',
    rating: 4.0,
    reviewCount: 43,
    inStock: false,
    bestSeller: false,
    description: 'Malty, honey-sweet sapota. Ripens beautifully on the counter.',
  },
  {
    id: 'f10',
    slug: 'passion-fruit',
    name: 'Passion Fruit',
    department: 'fruits',
    price: 95,
    unit: '500 g',
    icon: '🍇',
    rating: 4.3,
    reviewCount: 67,
    inStock: true,
    bestSeller: false,
    description: 'Wrinkled, fragrant passion fruit from Idukki. Intensely tart.',
  },

  // ------------------------------------------------------------- Rice & Grains
  {
    id: 'r1',
    slug: 'matta-rice',
    name: 'Kerala Matta Rice',
    department: 'rice-grains',
    price: 520,
    mrp: 620,
    unit: '10 kg',
    icon: '🌾',
    rating: 4.7,
    reviewCount: 412,
    inStock: true,
    bestSeller: true,
    description:
      'Rose-red Palakkadan Matta with a coarse bite and nutty aroma. The daily rice of Kerala kitchens.',
  },
  {
    id: 'r2',
    slug: 'jeerakasala-rice',
    name: 'Jeerakasala Rice',
    department: 'rice-grains',
    price: 185,
    mrp: 220,
    unit: '2 kg',
    icon: '🍚',
    rating: 4.6,
    reviewCount: 178,
    inStock: true,
    bestSeller: true,
    description: 'Short-grain aromatic rice, the only correct choice for Thalassery biryani.',
  },
  {
    id: 'r3',
    slug: 'white-rice-pachari',
    name: 'White Rice (Pachari)',
    department: 'rice-grains',
    price: 460,
    unit: '10 kg',
    icon: '🍚',
    rating: 4.3,
    reviewCount: 203,
    inStock: true,
    bestSeller: false,
    description: 'Clean, polished raw rice for idli, dosa and everyday meals.',
  },
  {
    id: 'r4',
    slug: 'toor-dal',
    name: 'Toor Dal',
    department: 'rice-grains',
    price: 158,
    mrp: 185,
    unit: '1 kg',
    icon: '🫘',
    rating: 4.4,
    reviewCount: 156,
    inStock: true,
    bestSeller: false,
    description: 'Bright, evenly sized toor dal that cooks down fast and smooth.',
  },
  {
    id: 'r5',
    slug: 'green-gram',
    name: 'Green Gram (Cherupayar)',
    department: 'rice-grains',
    price: 132,
    unit: '1 kg',
    icon: '🫛',
    rating: 4.5,
    reviewCount: 124,
    inStock: true,
    bestSeller: false,
    description: 'Whole green gram with a tight skin. Sprouts well, cooks evenly.',
  },
  {
    id: 'r6',
    slug: 'rice-flour',
    name: 'Roasted Rice Flour',
    department: 'rice-grains',
    price: 68,
    mrp: 82,
    unit: '1 kg',
    icon: '🌾',
    rating: 4.5,
    reviewCount: 189,
    inStock: true,
    bestSeller: true,
    description: 'Stone-ground and lightly roasted — the shortcut to soft puttu and pathiri.',
  },
  {
    id: 'r7',
    slug: 'black-gram',
    name: 'Black Gram (Uzhunnu)',
    department: 'rice-grains',
    price: 148,
    unit: '1 kg',
    icon: '🫘',
    rating: 4.2,
    reviewCount: 87,
    inStock: true,
    bestSeller: false,
    description: 'Husked white urad dal for fluffy idli batter and crisp vada.',
  },
  {
    id: 'r8',
    slug: 'ragi-flour',
    name: 'Ragi Flour',
    department: 'rice-grains',
    price: 74,
    unit: '1 kg',
    icon: '🌾',
    rating: 4.1,
    reviewCount: 52,
    inStock: true,
    bestSeller: false,
    description: 'Finely milled finger millet with a mild earthy flavour.',
  },
  {
    id: 'r9',
    slug: 'beaten-rice-aval',
    name: 'Beaten Rice (Aval)',
    department: 'rice-grains',
    price: 56,
    unit: '500 g',
    icon: '🍚',
    rating: 4.3,
    reviewCount: 98,
    inStock: true,
    bestSeller: false,
    description: 'Thick red aval that holds its shape. Good for aval nanachathu.',
  },

  // -------------------------------------------------------------------- Spices
  {
    id: 's1',
    slug: 'black-pepper',
    name: 'Wayanad Black Pepper',
    department: 'spices',
    price: 240,
    mrp: 300,
    unit: '250 g',
    icon: '🌶️',
    rating: 4.8,
    reviewCount: 356,
    inStock: true,
    bestSeller: true,
    description:
      'Bold, sun-dried Wayanad peppercorns with high piperine. Sharp heat and a lingering woody finish.',
  },
  {
    id: 's2',
    slug: 'cardamom',
    name: 'Idukki Cardamom',
    department: 'spices',
    price: 380,
    mrp: 460,
    unit: '100 g',
    icon: '🫚',
    rating: 4.9,
    reviewCount: 298,
    inStock: true,
    bestSeller: true,
    description: 'Plump 8mm green pods from Idukki, hand-sorted. Intensely floral.',
  },
  {
    id: 's3',
    slug: 'turmeric-powder',
    name: 'Turmeric Powder',
    department: 'spices',
    price: 86,
    mrp: 105,
    unit: '250 g',
    icon: '🟡',
    rating: 4.5,
    reviewCount: 211,
    inStock: true,
    bestSeller: false,
    description: 'High-curcumin Erode turmeric, ground fine. No colouring, no filler.',
  },
  {
    id: 's4',
    slug: 'chilli-powder',
    name: 'Kashmiri Chilli Powder',
    department: 'spices',
    price: 118,
    unit: '250 g',
    icon: '🌶️',
    rating: 4.6,
    reviewCount: 247,
    inStock: true,
    bestSeller: false,
    description: 'Deep red, mild-heat Kashmiri chilli. Colour without the burn.',
  },
  {
    id: 's5',
    slug: 'coriander-powder',
    name: 'Coriander Powder',
    department: 'spices',
    price: 72,
    mrp: 88,
    unit: '500 g',
    icon: '🟤',
    rating: 4.4,
    reviewCount: 163,
    inStock: true,
    bestSeller: false,
    description: 'Freshly roasted and ground coriander with a warm citrus note.',
  },
  {
    id: 's6',
    slug: 'cinnamon',
    name: 'Cinnamon Bark',
    department: 'spices',
    price: 95,
    unit: '100 g',
    icon: '🪵',
    rating: 4.3,
    reviewCount: 76,
    inStock: true,
    bestSeller: false,
    description: 'Thin, brittle quills that snap cleanly. Sweet and gently spicy.',
  },
  {
    id: 's7',
    slug: 'cloves',
    name: 'Cloves',
    department: 'spices',
    price: 165,
    mrp: 198,
    unit: '100 g',
    icon: '🌰',
    rating: 4.5,
    reviewCount: 102,
    inStock: true,
    bestSeller: false,
    description: 'Oily, full-headed cloves with a strong, clean aroma.',
  },
  {
    id: 's8',
    slug: 'mustard-seeds',
    name: 'Mustard Seeds',
    department: 'spices',
    price: 42,
    unit: '250 g',
    icon: '⚫',
    rating: 4.2,
    reviewCount: 134,
    inStock: true,
    bestSeller: false,
    description: 'Small black mustard that pops fast and evenly in hot oil.',
  },
  {
    id: 's9',
    slug: 'fenugreek-seeds',
    name: 'Fenugreek Seeds',
    department: 'spices',
    price: 38,
    unit: '250 g',
    icon: '🟫',
    rating: 4.0,
    reviewCount: 61,
    inStock: false,
    bestSeller: false,
    description: 'Hard amber seeds with a bitter edge that mellows when toasted.',
  },
];

export const reviews: Review[] = [
  {
    id: 'rv1',
    name: 'Anjali Menon',
    location: 'Kochi',
    rating: 5,
    text:
      'The Matta rice is exactly what I grew up eating. Ordered at night, it was at my door before noon.',
  },
  {
    id: 'rv2',
    name: 'Rahul Nair',
    location: 'Thiruvananthapuram',
    rating: 5,
    text:
      'Shallots and curry leaves actually arrive fresh, not half-wilted. That alone keeps me ordering.',
  },
  {
    id: 'rv3',
    name: 'Fathima Beevi',
    location: 'Kozhikode',
    rating: 4,
    text:
      'Wayanad pepper is the real thing and the price is better than my local shop. Packaging is tidy.',
  },
  {
    id: 'rv4',
    name: 'Thomas Kurian',
    location: 'Thrissur',
    rating: 5,
    text: 'Simple to order, no clutter, no surprise charges at the end. Exactly what I wanted.',
  },
];

export const FREE_DELIVERY_THRESHOLD = 200;
export const DELIVERY_FEE = 30;

export const faqs: Faq[] = [
  {
    question: 'Which areas do you deliver to?',
    answer:
      'We currently deliver across Kochi, Thiruvananthapuram, Kozhikode and Thrissur. Orders placed before 2 PM in Kochi arrive the same day; other districts arrive the next morning.',
  },
  {
    question: 'How do you keep produce fresh?',
    answer:
      'Vegetables and fruits are sourced from farms in Wayanad, Idukki and Palakkad each morning and packed in insulated crates. Nothing sits in a warehouse overnight.',
  },
  {
    question: 'What payment methods do you accept?',
    answer:
      'UPI, all major credit and debit cards, net banking, and cash on delivery. Payment is taken once your order is packed, not before.',
  },
  {
    question: 'What is your returns policy?',
    answer:
      'If any item arrives damaged or below standard, tell us within 24 hours and we will replace it or refund it in full. No packaging or photographs required for fresh produce.',
  },
  {
    question: 'When is delivery free?',
    answer: `Delivery is free on every order above ₹${FREE_DELIVERY_THRESHOLD}. Below that a flat ₹${DELIVERY_FEE} charge applies.`,
  },
];

/** Full-text-ish search across name, department and description. */
export function searchProducts(query: string): Product[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.department.replace('-', ' ').includes(q) ||
      p.description.toLowerCase().includes(q)
  );
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getDepartmentBySlug(slug: string): Department | undefined {
  return departments.find((d) => d.slug === slug);
}

export function getProductsByDepartment(slug: string): Product[] {
  return products.filter((p) => p.department === slug);
}

export function getBestSellers(limit = 8): Product[] {
  return products.filter((p) => p.bestSeller).slice(0, limit);
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.department === product.department && p.id !== product.id)
    .slice(0, limit);
}
