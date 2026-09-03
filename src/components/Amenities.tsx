import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Building2,
  Waves,
  Dumbbell,
  Trees,
  Smile,
  Trophy,
  Footprints,
  Route,
  Zap,
  ShieldCheck,
  Droplets,
  Sprout,
  Sparkles,
  Layers,
} from 'lucide-react';

interface AmenitiesProps {
  onOpenBookingModal: () => void;
}

export const Amenities: React.FC<AmenitiesProps> = ({ onOpenBookingModal }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const iconMap: Record<string, React.ReactNode> = {
    Building2: <Building2 className="w-6 h-6 text-[#B89452]" />,
    Waves: <Waves className="w-6 h-6 text-[#B89452]" />,
    Dumbbell: <Dumbbell className="w-6 h-6 text-[#B89452]" />,
    Trees: <Trees className="w-6 h-6 text-[#B89452]" />,
    Smile: <Smile className="w-6 h-6 text-[#B89452]" />,
    Trophy: <Trophy className="w-6 h-6 text-[#B89452]" />,
    Footprints: <Footprints className="w-6 h-6 text-[#B89452]" />,
    Route: <Route className="w-6 h-6 text-[#B89452]" />,
    Zap: <Zap className="w-6 h-6 text-[#B89452]" />,
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#B89452]" />,
    Droplets: <Droplets className="w-6 h-6 text-[#B89452]" />,
    Sprout: <Sprout className="w-6 h-6 text-[#B89452]" />,
  };

  const categories = [
    { id: 'all', label: 'All Amenities (40+)' },
    { id: 'recreation', label: 'Club & Sports' },
    { id: 'wellness', label: 'Wellness & Health' },
    { id: 'infrastructure', label: 'Civil Infrastructure' },
    { id: 'nature', label: 'Green & Nature' },
    { id: 'security', label: 'Security & Safety' },
  ];

  const filteredAmenities =
    activeCategory === 'all'
      ? siteConfig.amenities
      : siteConfig.amenities.filter((a) => a.category === activeCategory);

  return (
    <section id="amenities" className="py-24 relative bg-[#EFE9DE] border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-3 rounded-none shadow-xs">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              WORLD-CLASS LIFESTYLE
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight mb-4">
            Designed for Better Living
          </h2>

          <p className="text-[#6F6A61] text-sm sm:text-base font-normal">
            Every square foot is planned to elevate daily living, fostering holistic physical wellness, community engagement, and childhood joy.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 text-xs font-semibold tracking-wider transition-all cursor-pointer rounded-none ${
                activeCategory === cat.id
                  ? 'bg-[#B89452] text-white font-bold shadow-xs'
                  : 'bg-white text-[#6F6A61] hover:text-[#25231F] border border-[#DDD4C5]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredAmenities.map((amenity) => (
            <div
              key={amenity.id}
              className="bg-white border border-[#DDD4C5] p-6 flex flex-col justify-between group hover:border-[#B89452] transition-all rounded-none shadow-xs"
            >
              <div>
                <div className="w-12 h-12 bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center mb-5 group-hover:border-[#B89452] transition-all shadow-xs rounded-none">
                  {iconMap[amenity.iconName] || <Sparkles className="w-6 h-6 text-[#B89452]" />}
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-[#25231F] mb-2 group-hover:text-[#B89452] transition-colors">
                  {amenity.title}
                </h3>

                <p className="text-xs text-[#6F6A61] leading-relaxed font-normal">
                  {amenity.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#DDD4C5] flex items-center justify-between text-[11px] text-[#B89452] font-medium opacity-80 group-hover:opacity-100">
                <span className="capitalize">{amenity.category}</span>
                <span className="text-[#DDD4C5]">●</span>
                <span className="text-[#6F6A61]">Included</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 text-center">
          <button
            onClick={onOpenBookingModal}
            className="gold-button inline-flex items-center gap-2 px-8 py-3.5 text-xs font-bold uppercase tracking-widest shadow-md cursor-pointer rounded-none"
          >
            <span>Experience The Amenities In Person</span>
          </button>
        </div>
      </div>
    </section>
  );
};
