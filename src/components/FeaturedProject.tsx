import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Project } from '../types';
import {
  Sparkles,
  MapPin,
  CalendarCheck,
  Download,
  ShieldCheck,
  Check,
  Maximize,
  ArrowRight,
  Layers,
  Building,
} from 'lucide-react';

interface FeaturedProjectProps {
  onOpenBookingModal: (projectName?: string) => void;
  onViewProjectDetails: (project: Project) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  onOpenBookingModal,
  onViewProjectDetails,
}) => {
  const project = siteConfig.featuredProject;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const allImages = [project.image, ...(project.gallery || [])];

  return (
    <section className="py-24 relative bg-[#F7F4EE] border-t border-[#DDD4C5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Pill */}
        <div className="text-center sm:text-left mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 shadow-xs rounded-none">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              FEATURED SIGNATURE TOWNSHIP
            </span>
          </div>
        </div>

        {/* 2-Column Spotlight Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Image Showcase with Gallery Thumbnails */}
          <div className="lg:col-span-6 space-y-4">
            <div className="relative rounded-none overflow-hidden border border-[#DDD4C5] hover:border-[#B89452] shadow-md bg-white aspect-4/3 group transition-all">
              <img
                src={allImages[activeImageIndex]}
                alt={project.name}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Status Badge */}
              <div className="absolute top-4 left-4">
                <span className="px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest bg-white/95 text-[#B89452] border border-[#DDD4C5] backdrop-blur-md rounded-none shadow-xs">
                  {project.status} • {project.totalArea}
                </span>
              </div>

              {/* Bottom Quick Info */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/95 backdrop-blur-md p-3.5 border border-[#DDD4C5] rounded-none shadow-sm">
                <div className="flex items-center gap-2 text-xs text-[#25231F]">
                  <MapPin className="w-4 h-4 text-[#B89452]" />
                  <span className="truncate font-medium">{project.addressShort}</span>
                </div>
                <button
                  onClick={() => onViewProjectDetails(project)}
                  className="text-xs text-[#B89452] font-bold tracking-wider uppercase hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span>Explore Plan</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Thumbnail Selectors */}
            <div className="grid grid-cols-4 gap-3">
              {allImages.slice(0, 4).map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative rounded-none overflow-hidden aspect-video border transition-all cursor-pointer ${
                    activeImageIndex === idx
                      ? 'border-[#B89452] shadow-sm'
                      : 'border-[#DDD4C5] opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Project Deep Details */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#B89452] uppercase tracking-widest mb-2">
                <span>{project.approvals}</span>
              </div>

              <h3 className="font-display font-bold text-3xl sm:text-4xl text-[#25231F] tracking-tight leading-tight">
                {project.name}
              </h3>

              <p className="text-sm sm:text-base text-[#6F6A61] mt-3 leading-relaxed font-normal">
                {project.description}
              </p>
            </div>

            {/* Key Specs Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-white border border-[#DDD4C5] rounded-none shadow-xs">
              <div className="p-2.5 border-r border-[#DDD4C5]">
                <span className="block text-[10px] uppercase font-semibold text-[#6F6A61] tracking-wider">Starting Price</span>
                <span className="text-sm sm:text-base font-bold text-[#B89452]">
                  {project.startingPrice}
                </span>
              </div>
              <div className="p-2.5 border-r border-[#DDD4C5]">
                <span className="block text-[10px] uppercase font-semibold text-[#6F6A61] tracking-wider">Plot Sizes</span>
                <span className="text-xs sm:text-sm font-semibold text-[#25231F]">
                  {project.plotSizes}
                </span>
              </div>
              <div className="p-2.5">
                <span className="block text-[10px] uppercase font-semibold text-[#6F6A61] tracking-wider">Avenue Roads</span>
                <span className="text-xs sm:text-sm font-semibold text-[#25231F]">
                  {project.roadWidths}
                </span>
              </div>
            </div>

            {/* Feature Checkpoints */}
            <div className="space-y-2.5">
              <h4 className="text-xs font-bold tracking-widest text-[#6F6A61] uppercase">
                Project Highlights & Infrastructure
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {project.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-2 text-xs text-[#25231F]">
                    <div className="w-4 h-4 bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center shrink-0 mt-0.5 rounded-none">
                      <Check className="w-2.5 h-2.5 text-[#B89452]" />
                    </div>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Conversion CTA Group */}
            <div className="pt-3 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={() => onOpenBookingModal(project.name)}
                className="gold-button w-full sm:w-auto px-7 py-3.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2.5 shadow-md cursor-pointer rounded-none"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>Book Your Free Site Visit</span>
              </button>

              <button
                onClick={() => onViewProjectDetails(project)}
                className="w-full sm:w-auto px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-[#B89452] bg-white hover:bg-[#F7F4EE] border border-[#B89452] transition-all flex items-center justify-center gap-2 cursor-pointer rounded-none shadow-xs"
              >
                <Download className="w-4 h-4 text-[#B89452]" />
                <span>Get Project Details & Plan</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
