import React from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  LandPlot,
  LineChart,
  ShieldAlert,
  HeartHandshake,
  Lock,
  Landmark,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

interface InvestmentBenefitsProps {
  onOpenBookingModal: (subject?: string) => void;
}

export const InvestmentBenefits: React.FC<InvestmentBenefitsProps> = ({
  onOpenBookingModal,
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    LandPlot: <LandPlot className="w-5 h-5 text-[#B89452]" />,
    LineChart: <LineChart className="w-5 h-5 text-[#B89452]" />,
    ShieldAlert: <ShieldAlert className="w-5 h-5 text-[#B89452]" />,
    HeartHandshake: <HeartHandshake className="w-5 h-5 text-[#B89452]" />,
    Lock: <Lock className="w-5 h-5 text-[#B89452]" />,
    Landmark: <Landmark className="w-5 h-5 text-[#B89452]" />,
  };

  return (
    <section className="py-28 relative bg-[#F7F4EE] border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#EFE9DE] border border-[#DDD4C5] rounded-full mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              {siteConfig.investmentBenefits.badge}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight mb-4">
            {siteConfig.investmentBenefits.title}
          </h2>

          <p className="text-[#6F6A61] text-sm sm:text-base font-normal">
            {siteConfig.investmentBenefits.description}
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {siteConfig.investmentBenefits.benefits.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-[#DDD4C5] p-7 sm:p-8 flex flex-col justify-between group hover:border-[#B89452]/40 transition-all rounded-2xl shadow-sm hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center mb-5 group-hover:border-[#B89452]/50 transition-all shadow-xs">
                  {iconMap[item.icon] || <TrendingUp className="w-5 h-5 text-[#B89452]" />}
                </div>

                <h3 className="font-display font-bold text-lg text-[#25231F] mb-2.5 group-hover:text-[#B89452] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#6F6A61] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#DDD4C5] flex items-center text-[11px] text-[#B89452] font-semibold uppercase tracking-wider">
                <span>Value Driver</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Bar */}
        <div className="text-center">
          <button
            onClick={() => onOpenBookingModal('Investment Advisory Consultation')}
            className="gold-button inline-flex items-center gap-2.5 px-8 py-4 text-xs font-bold uppercase tracking-widest shadow-md cursor-pointer rounded-full text-white"
          >
            <span>Talk to our Senior Property Advisor</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
};

