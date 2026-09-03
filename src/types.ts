/**
 * Global Type Definitions for RGV Developers Real Estate Platform
 */

export interface Project {
  id: string;
  name: string;
  tagline: string;
  category: 'plotted' | 'villas' | 'commercial' | 'luxury' | 'completed';
  location: string;
  addressShort: string;
  status: 'Ready to Construct' | 'Under Development' | 'New Launch' | 'Sold Out' | 'Fast Selling' | 'Delivered' | 'Completed';
  startingPrice: string;
  pricePerSqFt?: string;
  pricePerSqYd?: string;
  plotSizes: string;
  totalArea: string;
  totalUnits: string;
  roadWidths: string;
  approvals: string;
  image: string;
  gallery: string[];
  description: string;
  highlights: string[];
  brochureUrl?: string;
  featured?: boolean;
}

export interface CompletedProject {
  id: string;
  name: string;
  location: string;
  totalArea: string;
  unitsDelivered: string;
  completionYear: string;
  image: string;
  status: string;
  highlights: string[];
}

export interface PlotDimensionOption {
  dimension: string;
  width: number;
  length: number;
  sqFt: number;
  label: string;
}

export interface PaymentMilestone {
  stage: string;
  percentage: number;
  title: string;
  description: string;
}

export interface Amenity {
  id: string;
  title: string;
  description: string;
  iconName: string;
  category: 'wellness' | 'infrastructure' | 'recreation' | 'security' | 'nature';
}

export interface LandmarkCategory {
  category: string;
  icon: string;
  items: {
    name: string;
    distance: string;
    travelTime: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'master-plan' | 'clubhouse' | 'landscape' | 'infrastructure' | 'villas';
  image: string;
  caption: string;
}

export interface LeadFormData {
  fullName: string;
  phone: string;
  email: string;
  preferredProject: string;
  preferredDate: string;
  preferredSlot?: string;
  requirementType?: string;
  message?: string;
  source?: string;
}

export interface LeadSubmissionResult {
  success: boolean;
  message: string;
  leadId?: string;
  timestamp?: string;
}

export interface TrustPillar {
  title: string;
  description: string;
  iconName: string;
}

export interface HighlightMetric {
  value: string;
  suffix?: string;
  label: string;
  sublabel: string;
}

export interface SiteConfig {
  company: {
    name: string;
    legalName: string;
    tagline: string;
    foundedYear: string;
    statutoryCompliance: string;
    phone: string;
    phoneFormatted: string;
    whatsappNumber: string;
    whatsappDisplay: string;
    email: string;
    salesEmail: string;
    address: {
      line1: string;
      line2: string;
      city: string;
      state: string;
      pincode: string;
      country: string;
    };
    workingHours: string;
    social: {
      facebook: string;
      instagram: string;
      youtube: string;
      linkedin: string;
    };
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
    ogImage: string;
  };
  hero: {
    badge: string;
    headline: string;
    highlightedText: string;
    subheadline: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    trustPoints: string[];
    backgroundImage: string;
  };
  brandIntro: {
    badge: string;
    title: string;
    paragraph1: string;
    paragraph2: string;
    cards: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  featuredProject: Project;
  projects: Project[];
  completedProjects: CompletedProject[];
  plotDimensions: PlotDimensionOption[];
  paymentMilestones: PaymentMilestone[];
  amenities: Amenity[];
  gallery: GalleryItem[];
  location: {
    badge: string;
    title: string;
    description: string;
    mapEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    projectLocationName: string;
    landmarkCategories: LandmarkCategory[];
  };
  highlights: HighlightMetric[];
  whyChooseUs: {
    badge: string;
    title: string;
    description: string;
    pillars: TrustPillar[];
    visualImage: string;
  };
  investmentBenefits: {
    badge: string;
    title: string;
    description: string;
    benefits: {
      title: string;
      description: string;
      icon: string;
    }[];
  };
  lifestyle: {
    badge: string;
    title: string;
    description: string;
    image: string;
    points: string[];
  };
  ctaBanner: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  disclaimer: string;
}
