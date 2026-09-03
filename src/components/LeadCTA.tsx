import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { CalendarCheck, Download, Sparkles, PhoneCall, ShieldCheck } from 'lucide-react';

interface LeadCTAProps {
  onOpenBookingModal: (subject?: string) => void;
  onOpenBrochureModal: () => void;
}

export const LeadCTA: React.FC<LeadCTAProps> = ({
  onOpenBookingModal,
  onOpenBrochureModal,
}) => {
  return (
    <section className="py-24 relative bg-[#EFE9DE] border-t border-[#DDD4C5] overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#B89452]/40 mb-4 rounded-full shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#B89452]" />
          <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
            EXCLUSIVE INVITATION
          </span>
        </div>

        <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight mb-4 max-w-3xl mx-auto">
          {siteConfig.ctaBanner.title}
        </h2>

        <p className="text-[#6F6A61] text-sm sm:text-base max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
          {siteConfig.ctaBanner.subtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto mb-8">
          <button
            onClick={() => onOpenBookingModal('High Conversion CTA Banner')}
            className="gold-button w-full sm:w-auto px-8 py-4 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md cursor-pointer rounded-full"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>{siteConfig.ctaBanner.primaryCta}</span>
          </button>

          <button
            onClick={onOpenBrochureModal}
            className="w-full sm:w-auto px-7 py-4 text-xs font-semibold text-[#25231F] hover:text-[#25231F] bg-white hover:bg-[#F7F4EE] border border-[#DDD4C5] hover:border-[#B89452] transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer rounded-full"
          >
            <Download className="w-4 h-4 text-[#B89452]" />
            <span>{siteConfig.ctaBanner.secondaryCta}</span>
          </button>
        </div>

        {/* Trust Badges under CTA */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[#6F6A61] font-normal">
          <span className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Zero Booking Cancellation Fees
          </span>
          <span className="flex items-center gap-1.5">
            <PhoneCall className="w-4 h-4 text-[#B89452]" />
            Instant Callback within 15 Minutes
          </span>
        </div>
      </div>
    </section>
  );
};

