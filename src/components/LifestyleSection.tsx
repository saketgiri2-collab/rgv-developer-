import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { Heart, Sparkles, Check, ArrowRight, ShieldCheck } from 'lucide-react';

interface LifestyleSectionProps {
  onOpenBookingModal: () => void;
}

export const LifestyleSection: React.FC<LifestyleSectionProps> = ({ onOpenBookingModal }) => {
  return (
    <section className="py-28 relative bg-[#EFE9DE] border-t border-[#DDD4C5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Emotional Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#B89452]/40 rounded-full shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#B89452]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                {siteConfig.lifestyle.badge}
              </span>
            </div>

            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight leading-tight">
              {siteConfig.lifestyle.title}
            </h2>

            <p className="text-sm sm:text-base text-[#6F6A61] leading-relaxed font-normal">
              {siteConfig.lifestyle.description}
            </p>

            {/* Checklist of lifestyle points */}
            <div className="space-y-3.5 pt-2">
              {siteConfig.lifestyle.points.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#25231F]">
                  <div className="w-5 h-5 rounded bg-white border border-[#DDD4C5] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <Check className="w-3 h-3 text-[#B89452]" />
                  </div>
                  <span className="font-normal">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={onOpenBookingModal}
                className="gold-button px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center gap-2 shadow-md cursor-pointer rounded-full"
              >
                <span>Discover Your Future Home</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Right Column: Family Lifestyle Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative overflow-hidden border border-[#DDD4C5] shadow-xs bg-[#F7F4EE] aspect-4/3 group rounded-3xl">
              <img
                src={siteConfig.lifestyle.image}
                alt="Family living in peaceful green real estate community"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25231F]/60 via-transparent to-transparent" />

              {/* Floating quote card */}
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/95 backdrop-blur-md border border-[#DDD4C5] shadow-sm rounded-2xl">
                <p className="text-xs sm:text-sm text-[#25231F] italic font-normal leading-relaxed">
                  "Give your loved ones the space to breathe, run freely in nature, and build a lasting family sanctuary."
                </p>
                <div className="mt-3 text-[11px] font-bold text-[#B89452] uppercase tracking-widest">
                  — The RGV Living Philosophy
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

