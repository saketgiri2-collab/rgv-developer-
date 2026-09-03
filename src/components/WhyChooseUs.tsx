import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  Navigation,
  CheckCircle2,
  Layers,
  Users,
  BadgeIndianRupee,
  TrendingUp,
  Award,
  ShieldCheck,
} from 'lucide-react';

interface WhyChooseUsProps {
  onOpenBookingModal: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenBookingModal }) => {
  const iconMap: Record<string, React.ReactNode> = {
    Navigation: <Navigation className="w-5 h-5 text-[#B89452]" />,
    CheckCircle2: <CheckCircle2 className="w-5 h-5 text-[#B89452]" />,
    Layers: <Layers className="w-5 h-5 text-[#B89452]" />,
    Users: <Users className="w-5 h-5 text-[#B89452]" />,
    BadgeIndianRupee: <BadgeIndianRupee className="w-5 h-5 text-[#B89452]" />,
    TrendingUp: <TrendingUp className="w-5 h-5 text-[#B89452]" />,
  };

  return (
    <section id="why-us" className="py-24 relative bg-[#EFE9DE] border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-3 rounded-none shadow-xs">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              {siteConfig.whyChooseUs.badge}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight mb-4">
            {siteConfig.whyChooseUs.title}
          </h2>

          <p className="text-[#6F6A61] text-sm sm:text-base font-normal">
            {siteConfig.whyChooseUs.description}
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {siteConfig.whyChooseUs.pillars.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="bg-white border border-[#DDD4C5] p-6 sm:p-7 flex flex-col justify-between group hover:border-[#B89452] transition-all rounded-none shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-11 h-11 bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center group-hover:border-[#B89452] transition-all shadow-xs rounded-none">
                    {iconMap[pillar.iconName] || <ShieldCheck className="w-5 h-5 text-[#B89452]" />}
                  </div>
                  <span className="text-xs font-bold text-[#6F6A61]/50 group-hover:text-[#B89452] transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-[#25231F] mb-2.5 group-hover:text-[#B89452] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6F6A61] leading-relaxed font-normal">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#DDD4C5] flex items-center text-[11px] text-[#B89452] font-semibold uppercase tracking-wider">
                <span>Guaranteed Benchmark</span>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Trust Callout */}
        <div className="bg-white border border-[#DDD4C5] p-8 md:p-12 relative flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xs rounded-none">
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#25231F]">
              Experience the RGV Standard in Person
            </h3>
            <p className="text-sm text-[#6F6A61] font-normal leading-relaxed">
              Nothing compares to walking down the wide avenues, feeling the quiet green atmosphere, and inspecting the high-grade civil infrastructure with your own eyes.
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-[#B89452]">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89452]" />
                Free AC Cab Pickup
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89452]" />
                Dedicated Property Specialist
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#B89452]" />
                Full Legal Documents Folder
              </span>
            </div>
          </div>

          <button
            onClick={onOpenBookingModal}
            className="gold-button px-8 py-4 text-xs font-bold uppercase tracking-widest whitespace-nowrap shadow-md shrink-0 cursor-pointer rounded-none"
          >
            Schedule Free VIP Visit Today
          </button>
        </div>
      </div>
    </section>
  );
};
