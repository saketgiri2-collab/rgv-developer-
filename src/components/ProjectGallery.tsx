import React, { useState, useEffect } from 'react';
import { siteConfig } from '../config/siteConfig';
import { GalleryItem } from '../types';
import { Sparkles, Maximize2, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';

export const ProjectGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Photos' },
    { id: 'infrastructure', label: 'Roads & Grand Entrance' },
    { id: 'clubhouse', label: 'Luxury Clubhouse' },
    { id: 'landscape', label: 'Parks & Landscapes' },
    { id: 'villas', label: 'Villa Architecture' },
  ];

  const filteredItems =
    activeCategory === 'all'
      ? siteConfig.gallery
      : siteConfig.gallery.filter((item) => item.category === activeCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeLightboxIndex === null) return;
      if (e.key === 'Escape') setActiveLightboxIndex(null);
      if (e.key === 'ArrowRight') handleNextLightbox();
      if (e.key === 'ArrowLeft') handlePrevLightbox();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeLightboxIndex, filteredItems.length]);

  const handleNextLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => ((prev! + 1) % filteredItems.length));
  };

  const handlePrevLightbox = () => {
    if (activeLightboxIndex === null) return;
    setActiveLightboxIndex((prev) => (prev! === 0 ? filteredItems.length - 1 : prev! - 1));
  };

  return (
    <section id="gallery" className="py-24 relative bg-[#F7F4EE] border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-3 rounded-none shadow-xs">
              <span className="w-1.5 h-1.5 bg-[#B89452]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                VISUAL SHOWCASE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight">
              Experience the Project
            </h2>
            <p className="text-[#6F6A61] text-sm sm:text-base mt-2 max-w-xl font-normal">
              Explore the architectural finesse, serene landscaping, and European-standard infrastructure of RGV developments.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 p-1.5 bg-[#EFE9DE] border border-[#DDD4C5] self-start md:self-auto rounded-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setActiveLightboxIndex(null);
                }}
                className={`px-3.5 py-1.5 text-xs font-semibold tracking-wider transition-all cursor-pointer rounded-none ${
                  activeCategory === cat.id
                    ? 'bg-[#B89452] text-white font-bold shadow-xs'
                    : 'text-[#6F6A61] hover:text-[#25231F]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setActiveLightboxIndex(index)}
              className="group relative overflow-hidden bg-white border border-[#DDD4C5] hover:border-[#B89452] cursor-pointer aspect-4/3 shadow-xs transition-all rounded-none"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25231F]/90 via-[#25231F]/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon */}
              <div className="absolute top-4 right-4 w-9 h-9 bg-[#25231F]/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity border border-[#B89452]/40 rounded-none">
                <Maximize2 className="w-4 h-4 text-[#D6BD82]" />
              </div>

              {/* Caption Card at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#D6BD82] block mb-1">
                  {item.category.replace('-', ' ')}
                </span>
                <h3 className="font-display font-bold text-base sm:text-lg text-white mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-white/80 line-clamp-2 font-normal">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxIndex !== null && filteredItems[activeLightboxIndex] && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          {/* Close button */}
          <button
            onClick={() => setActiveLightboxIndex(null)}
            className="absolute top-6 right-6 p-3 bg-neutral-900 text-white hover:text-[#C5A059] transition-all border border-white/20 z-50 cursor-pointer rounded-none"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Navigation Controls */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrevLightbox();
            }}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 bg-neutral-900 text-white hover:text-[#C5A059] transition-all border border-white/20 z-50 cursor-pointer rounded-none"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNextLightbox();
            }}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 bg-neutral-900 text-white hover:text-[#C5A059] transition-all border border-white/20 z-50 cursor-pointer rounded-none"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Center Content */}
          <div className="max-w-5xl w-full flex flex-col items-center max-h-[90vh]">
            <div className="relative overflow-hidden border border-white/20 shadow-2xl bg-black max-h-[70vh] flex items-center justify-center rounded-none">
              <img
                src={filteredItems[activeLightboxIndex].image}
                alt={filteredItems[activeLightboxIndex].title}
                className="max-h-[70vh] w-auto object-contain"
              />
            </div>

            <div className="mt-4 text-center max-w-2xl px-4">
              <div className="text-xs text-[#C5A059] font-bold tracking-widest uppercase mb-1">
                Image {activeLightboxIndex + 1} of {filteredItems.length}
              </div>
              <h3 className="font-display font-bold text-lg sm:text-xl text-white">
                {filteredItems[activeLightboxIndex].title}
              </h3>
              <p className="text-xs sm:text-sm text-white/70 mt-1 font-light">
                {filteredItems[activeLightboxIndex].caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
