export interface ServiceItem {
  id: string;
  category: "cut" | "color" | "scalp" | "bridal" | "nails";
  categoryLabel: string;
  name: string;
  tagline: string;
  duration: string;
  price: string;
  image: string;
  description: string;
  features: string[];
  recommendedStylist: string;
  isPopular?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: string;
  image: string;
  bio: string;
  accolades: string;
}

export interface LookbookItem {
  id: string;
  category: "balayage" | "cut" | "treatment" | "editorial";
  title: string;
  technique: string;
  stylist: string;
  image: string;
  description: string;
}

export interface Testimonial {
  id: string;
  author: string;
  service: string;
  stylist: string;
  rating: number;
  date: string;
  comment: string;
  avatar: string;
}

export const SALON_INFO = {
  name: "ÉLAN",
  fullName: "ÉLAN Hair Atelier & Scalp Sanctuary",
  tagline: "Haute Coiffure, Bespoke Color & Holistic Scalp Wellness",
  address: "442 Hudson Street, Greenwich Village, New York, NY 10014",
  phone: "+1 (212) 555-0198",
  email: "concierge@elansalonnyc.com",
  instagram: "@elan.atelier.nyc",
  googleRating: 4.9,
  reviewsCount: "1,240+",
  hours: [
    { days: "Tuesday – Friday", hours: "9:00 AM – 8:00 PM" },
    { days: "Saturday", hours: "9:00 AM – 7:00 PM" },
    { days: "Sunday", hours: "10:00 AM – 5:00 PM (VIP By Appointment)" },
    { days: "Monday", hours: "Closed (Education & Atelier Masterclasses)" },
  ],
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "sculpture-cut",
    category: "cut",
    categoryLabel: "Couture Cut & Style",
    name: "Architectural Precision Haircut & Blowout",
    tagline: "Custom sculpted silhouette tailored to bone structure and natural growth pattern",
    duration: "75 mins",
    price: "Starts at $145",
    image: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=800&q=80",
    description: "Includes an in-depth cranial geometry consultation, customized botanical scalp cleanse, hot stone shoulder decompression, and our signature silk-touch round brush styling finish.",
    features: ["Personalized Face-Shape Analysis", "Botanical Scalp Wash & Acupressure", "Precision Wet & Dry Detailing", "Signature Silk Finish"],
    recommendedStylist: "Creative Director",
    isPopular: true,
  },
  {
    id: "french-balayage",
    category: "color",
    categoryLabel: "Bespoke Color",
    name: "Couture French Balayage & Gloss Melting",
    tagline: "Sun-drenched, seamless multi-tonal dimensional lightening",
    duration: "180 mins",
    price: "Starts at $320",
    image: "https://images.unsplash.com/photo-1519699047748-de8e457a634e?auto=format&fit=crop&w=800&q=80",
    description: "Hand-painted bespoke highlights customized for seamless root transitions and low-maintenance longevity. Finished with an organic amino acid toner and high-gloss moisture glaze.",
    features: ["Freehand Clay Painting Technique", "Custom Tone Harmonization", "Bond-Building K18 Infusion", "High-Shine Glaze Seal"],
    recommendedStylist: "Master Colorist",
    isPopular: true,
  },
  {
    id: "japanese-head-spa",
    category: "scalp",
    categoryLabel: "Scalp Sanctuary",
    name: "Holistic Japanese Trichology Head Spa",
    tagline: "Deep follicular detoxification, circulation therapy & tension release",
    duration: "90 mins",
    price: "Starts at $195",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    description: "Microscopic scalp camera diagnostics followed by exfoliating sea kelp scrubs, warm mist herbal waterfall therapy, shiatsu pressure point massage, and cellular peptide nourishment.",
    features: ["Digital Scalp Micro-Analysis", "Warm Hydro-Waterfall Circulation", "Organic Herbal Clay Purifier", "Lymphatic & Neck Drainage"],
    recommendedStylist: "Lead Trichologist",
    isPopular: true,
  },
  {
    id: "rich-brunette-gloss",
    category: "color",
    categoryLabel: "Bespoke Color",
    name: "Liquid Glass Espresso Brunette & Root Smudge",
    tagline: "Deep reflective undertones with mirror-like multidimensional shine",
    duration: "120 mins",
    price: "Starts at $210",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=800&q=80",
    description: "Infuse your hair with rich cocoa, chestnut, or molten bronze tones. Features non-ammonia European pigments that repair hair fibers while depositing luminous translucent pigment.",
    features: ["Zero-Ammonia Vegan Formula", "Bespoke Tone Blending", "Thermal Keratin Shield", "UV Reflection Booster"],
    recommendedStylist: "Master Colorist",
  },
  {
    id: "k18-cellular-repair",
    category: "scalp",
    categoryLabel: "Scalp Sanctuary",
    name: "K18 Molecular Peptide Reconstruction Ritual",
    tagline: "Reverses chemical and thermal damage at the inner keratin chain level",
    duration: "60 mins",
    price: "Starts at $135",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=800&q=80",
    description: "Clinically proven patented biotech peptide mist that reconnects broken polypeptide chains. Restores elasticity, tensile strength, and virgin softness to over-processed hair.",
    features: ["Patented Bioactive Peptide Delivery", "Porosity Equalization", "Micro-Steam Vapor Seal", "Take-Home Maintenance Dose"],
    recommendedStylist: "Lead Trichologist",
    isPopular: true,
  },
  {
    id: "bridal-editorial",
    category: "bridal",
    categoryLabel: "Bridal & Editorial",
    name: "Atelier Bridal Masterpiece & Veiling Preview",
    tagline: "Timeless, romantic couture hair sculpting for your most unforgettable day",
    duration: "120 mins",
    price: "Starts at $295",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=800&q=80",
    description: "A private bridal suite session designed to complement your gown neckline and personal style. Includes champagne service, veil placement engineering, and trial run photography.",
    features: ["Private Champagne Lounge", "Pre-Wedding Trial Consultation", "Custom Accessory & Veil Placement", "Weather-Resistant All-Day Hold"],
    recommendedStylist: "Senior Editorial Stylist",
  },
  {
    id: "couture-blowout",
    category: "cut",
    categoryLabel: "Couture Cut & Style",
    name: "Manhattan Runway Velvet Blowout & Waves",
    tagline: "Voluminous, weightless body with lasting humidity protection",
    duration: "50 mins",
    price: "Starts at $95",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=800&q=80",
    description: "Transformative thermal blow dry incorporating cold-air locking, ceramic rollers, and weightless French marula oils for red-carpet bounce and 72-hour anti-frizz longevity.",
    features: ["Scalp Invigoration Wash", "Ceramic Roller Memory Set", "French Marula Gloss Infusion", "Custom Beach Wave or Sleek Finish"],
    recommendedStylist: "Creative Director",
  },
  {
    id: "russian-manicure",
    category: "nails",
    categoryLabel: "Nails & Esthetics",
    name: "Atelier E-File Precision Russian Gel Manicure",
    tagline: "Meticulous dry cuticle perfection with flawless under-skin pigment line",
    duration: "75 mins",
    price: "Starts at $115",
    image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=800&q=80",
    description: "European dry diamond e-file hardware manicure delivering clean cuticle alignment, apex nail architecture strengthening, and chip-free medical-grade Japanese gel polish.",
    features: ["Diamond E-File Cuticle Precision", "Rubber Base Structural Apex", "Japanese Non-Toxic Gel", "Warm Jojoba Hand Cocoon"],
    recommendedStylist: "Senior Editorial Stylist",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "creative-director",
    name: "Creative Director",
    role: "Atelier Founder & Master Stylist",
    experience: "16+ Years Experience",
    specialty: "Precision Face-Sculpting & French Textured Cuts",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80",
    bio: "Former educator at leading European academies and runway director for New York Fashion Week. Founded ÉLAN to merge architectural precision with clean, effortless hair vitality.",
    accolades: "Winner: NYC Stylist of the Year 2024",
  },
  {
    id: "master-colorist",
    name: "Master Colorist",
    role: "Balayage & Color Director",
    experience: "12+ Years Experience",
    specialty: "Lived-In Dimensional Blondes & Glaze Formulation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    bio: "Trained colorists across Paris and Milan. Celebrated for a signature 'invisible grow-out' balayage technique, delivering bespoke light tones that transition seamlessly for months.",
    accolades: "Featured in Vogue & Harper's Bazaar",
  },
  {
    id: "lead-trichologist",
    name: "Lead Trichologist",
    role: "Head Spa & Scalp Director",
    experience: "10+ Years Experience",
    specialty: "Japanese Head Spa & Cellular Hair Reconstruction",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
    bio: "Certified by the International Association of Trichologists in Tokyo, bridging dermatological scalp science with restorative Japanese water spa therapies for profound follicle rejuvenation.",
    accolades: "Certified Trichology Specialist (IAT)",
  },
  {
    id: "editorial-stylist",
    name: "Senior Editorial Stylist",
    role: "Bridal & Texture Lead",
    experience: "9+ Years Experience",
    specialty: "Haute Couture Updos, Modern Waves & Russian E-file",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    bio: "Specializing in high-profile bridal celebrations and editorial runway shoots, crafting soft romantic updos and immaculate nails that preserve their vitality through 14+ hours of events.",
    accolades: "Over 200+ Luxury Bridal Silhouettes Styled",
  },
];

export const LOOKBOOK_GALLERY: LookbookItem[] = [
  {
    id: "lk-1",
    category: "balayage",
    title: "Vanilla Cream Dimensional Balayage",
    technique: "Freehand Clay Painting & Lowlight Weaving",
    stylist: "Master Colorist",
    image: "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&w=900&q=80",
    description: "Soft babylights around the hairline transitioning into molten honey and vanilla ribboning for effortless sun-bleached radiance.",
  },
  {
    id: "lk-2",
    category: "cut",
    title: "French Collarbone Textured Lob",
    technique: "Dry Razoring & Weight Redistribution",
    stylist: "Creative Director",
    image: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?auto=format&fit=crop&w=900&q=80",
    description: "Custom weight removal through the interior leaves perimeter density while allowing airy movement with just a quick air dry.",
  },
  {
    id: "lk-3",
    category: "treatment",
    title: "Post-Head Spa Hair Revitalization",
    technique: "Japanese Hydrotherapy & Peptide Seal",
    stylist: "Lead Trichologist",
    image: "https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=900&q=80",
    description: "Transformative before-and-after follicle clarification removing stubborn hard water mineral buildup and replenishing natural lipid layers.",
  },
  {
    id: "lk-4",
    category: "balayage",
    title: "Molten Amber Brunette Gloss Melt",
    technique: "Shadow Root & Botanical Color Infusion",
    stylist: "Master Colorist",
    image: "https://images.unsplash.com/photo-1516914943479-89db7d9ae7f2?auto=format&fit=crop&w=900&q=80",
    description: "Zero bleach formulation depositing deep warm undertones that glow with radiant bronze under natural sunlight.",
  },
  {
    id: "lk-5",
    category: "editorial",
    title: "Bespoke Bohemian Bridal Crown Updo",
    technique: "Air-textured Braiding & Pearl Wire Setting",
    stylist: "Senior Editorial Stylist",
    image: "https://images.unsplash.com/photo-1596455607563-ad6193f76b17?auto=format&fit=crop&w=900&q=80",
    description: "Delicate face-framing tendrils anchored with a durable internal cushion base designed to withstand humidity and dancing.",
  },
  {
    id: "lk-6",
    category: "cut",
    title: "Silk Touch Velvet Blowout",
    technique: "Ceramic Thermal Sculpting & Cold Locking",
    stylist: "Creative Director",
    image: "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&w=900&q=80",
    description: "The signature ÉLAN blowout featuring mirror shine, feather-light roots, and sculpted sweeping ends.",
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: "t-1",
    author: "Verified Guest • Manhattan",
    service: "Couture French Balayage",
    stylist: "Master Colorist",
    rating: 5,
    date: "2 weeks ago",
    comment: "I have been going to top salons in Manhattan for 10 years, and nothing compares to the atelier's French balayage. Five months after my appointment and my color still looks intentional and pristine. No brassiness, no harsh demarcation lines. Worth every penny.",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "t-2",
    author: "Verified Guest • Greenwich Village",
    service: "Japanese Trichology Head Spa",
    stylist: "Lead Trichologist",
    rating: 5,
    date: "1 month ago",
    comment: "The Head Spa is a transcendent sensory ritual. Seeing my scalp under the camera before and after was eye-opening. The herbal waterfall and shoulder massage relieved weeks of computer tension. My hair has never felt so light and silky.",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&w=150&q=80",
  },
  {
    id: "t-3",
    author: "Verified Guest • SoHo",
    service: "Architectural Precision Haircut",
    stylist: "Creative Director",
    rating: 5,
    date: "3 weeks ago",
    comment: "The master stylist is truly an artist. They spent 15 minutes examining how my hair naturally falls and my facial features before even touching their scissors. The haircut grows out gorgeously and requires barely 5 minutes to style in the morning.",
    avatar: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&w=150&q=80",
  },
];
