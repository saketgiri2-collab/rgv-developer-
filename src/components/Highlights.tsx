import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, Award, Sparkles } from 'lucide-react';

export const Highlights: React.FC = () => {
  return (
    <section className="py-16 relative bg-[#EFE9DE] border-y border-[#DDD4C5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-2">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              KEY DEVELOPMENT METRICS
            </span>
          </div>
          <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#25231F]">
            Project Highlights at a Glance
          </h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {siteConfig.highlights.map((metric, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 bg-white border border-[#DDD4C5] text-center flex flex-col items-center justify-center hover:border-[#B89452] transition-all rounded-none group shadow-xs"
            >
              <div className="font-display font-bold text-3xl sm:text-4xl text-[#25231F] mb-1">
                <span className="text-[#B89452]">{metric.value}</span>
                <span className="text-lg sm:text-xl text-[#6F6A61] ml-1 font-semibold">
                  {metric.suffix}
                </span>
              </div>
              <div className="text-xs font-bold tracking-wider text-[#25231F] uppercase mt-1">{metric.label}</div>
              <div className="text-[11px] text-[#6F6A61] font-light mt-0.5">{metric.sublabel}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
