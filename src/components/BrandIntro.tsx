import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, FileCheck2, Compass, Sparkles, Award, ArrowUpRight } from 'lucide-react';

interface BrandIntroProps {
  onOpenBookingModal: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onOpenBookingModal }) => {
  const iconMap: Record<string, React.ReactNode> = {
    ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#B89452]" />,
    FileCheck2: <FileCheck2 className="w-6 h-6 text-[#B89452]" />,
    Compass: <Compass className="w-6 h-6 text-[#B89452]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#B89452]" />,
  };

  return (
    <section id="about" className="py-24 relative bg-[#F7F4EE] overflow-hidden border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/30 mb-4 rounded-none shadow-xs">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              {siteConfig.brandIntro.badge}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight mb-6">
            {siteConfig.brandIntro.title}
          </h2>

          <div className="space-y-4 text-[#6F6A61] text-base sm:text-lg leading-relaxed font-normal">
            <p>{siteConfig.brandIntro.paragraph1}</p>
            <p className="text-[#6F6A61]/85 text-sm sm:text-base">{siteConfig.brandIntro.paragraph2}</p>
          </div>
        </div>

        {/* 4 Geometric Trust Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {siteConfig.brandIntro.cards.map((card, index) => (
            <div
              key={card.title}
              className="p-6 bg-white border border-[#DDD4C5] hover:border-[#B89452] transition-all rounded-none relative group flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="w-12 h-12 bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center mb-5 group-hover:border-[#B89452] transition-all rounded-none">
                  {iconMap[card.icon] || <ShieldCheck className="w-6 h-6 text-[#B89452]" />}
                </div>

                <h3 className="font-display font-bold text-base sm:text-lg text-[#25231F] mb-2 group-hover:text-[#B89452] transition-colors">
                  {card.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6F6A61] leading-relaxed font-normal">
                  {card.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DDD4C5] flex items-center justify-between text-xs text-[#B89452] font-semibold tracking-wider uppercase">
                <span>Pillar 0{index + 1}</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Geometric CTA Banner Strip */}
        <div className="mt-12 p-6 sm:p-8 bg-[#EFE9DE] border border-[#DDD4C5] flex flex-col md:flex-row items-center justify-between gap-6 rounded-none shadow-xs">
          <div className="flex items-center gap-4 text-left">
            <div className="w-12 h-12 bg-white border border-[#B89452]/40 flex items-center justify-center shrink-0 rounded-none shadow-xs">
              <Award className="w-6 h-6 text-[#B89452]" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-[#25231F] tracking-wide">
                Looking for Plotted Developments in North Bangalore?
              </h4>
              <p className="text-xs sm:text-sm text-[#6F6A61]">
                Explore our ongoing master-planned townships with transparent documentation.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBookingModal}
            className="gold-button px-6 py-3 text-xs font-bold uppercase tracking-widest whitespace-nowrap shrink-0 cursor-pointer rounded-none"
          >
            Speak to a Property Advisor
          </button>
        </div>
      </div>
    </section>
  );
};
