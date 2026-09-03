import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { CalendarCheck, Compass, ShieldCheck, Award, TrendingUp, Sparkles, ChevronDown, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onExploreProjects }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-28 pb-20 overflow-hidden bg-[#F7F4EE]">
      {/* Background Image - Bright, Crystal-Clear Luxury Villa with Professional High-End Real Estate Presentation */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteConfig.hero.backgroundImage}
          alt="RGV Developers Luxury Villa Estate"
          className="w-full h-full object-cover object-center sm:object-[center_40%] lg:object-[center_35%] brightness-100 contrast-[1.02] transition-transform duration-1000 ease-out"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center' }}
        />
        {/* Subtle Top Gradient for Navbar Header Legibility */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none" />
        
        {/* Subtle Bottom Edge Transition Gradient to Next Section */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#F7F4EE] via-[#F7F4EE]/60 to-transparent pointer-events-none" />

        {/* Ultra-subtle Centered Ambient Layer to enhance text contrast while keeping the house luminous and vibrant */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/35 via-black/15 to-black/35 pointer-events-none" />
      </div>

      {/* Geometric Corner Brackets */}
      <div className="geo-corner-tl" />
      <div className="geo-corner-br" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full text-center flex flex-col items-center">
        {/* Geometric Gold Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-none bg-white/95 backdrop-blur-md border border-[#B89452]/40 shadow-sm mb-6">
          <span className="w-1.5 h-1.5 bg-[#B89452]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] text-[#B89452] uppercase">
            {siteConfig.hero.badge}
          </span>
        </div>

        {/* Main Headline with High-Contrast Typography & Subtle Text Shadow for pristine readability over bright background */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-white tracking-tight leading-[1.05] max-w-5xl mb-6 drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
          {siteConfig.hero.headline}{' '}
          <span className="text-[#D6BD82] block sm:inline drop-shadow-[0_4px_16px_rgba(0,0,0,0.85)]">
            {siteConfig.hero.highlightedText}
          </span>
        </h1>

        {/* Subheadline with clear contrast and high readability */}
        <p className="text-base sm:text-lg md:text-xl text-white max-w-2xl mb-10 leading-relaxed font-normal drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
          {siteConfig.hero.subheadline}
        </p>

        {/* Geometric Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full sm:w-auto mb-14">
          <button
            onClick={onOpenBookingModal}
            className="bg-[#B89452] text-white px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#D6BD82] transition-all flex items-center justify-center gap-3 shadow-md cursor-pointer w-full sm:w-auto"
            id="hero-book-site-visit-btn"
          >
            <CalendarCheck className="w-4 h-4 text-white" />
            <span>{siteConfig.hero.primaryCtaText}</span>
          </button>

          <button
            onClick={onExploreProjects}
            className="border border-[#B89452] bg-white/95 backdrop-blur-md px-8 py-4 font-bold text-xs tracking-widest uppercase hover:bg-[#F7F4EE] text-[#B89452] transition-all flex items-center justify-center gap-3 cursor-pointer w-full sm:w-auto shadow-sm"
            id="hero-explore-projects-btn"
          >
            <Compass className="w-4 h-4 text-[#B89452]" />
            <span>{siteConfig.hero.secondaryCtaText}</span>
          </button>
        </div>

        {/* Trust Badges Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl w-full">
          {siteConfig.hero.trustPoints.map((point, index) => {
            const icons = [Compass, ShieldCheck, Award, TrendingUp];
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point}
                className="flex items-center gap-3 p-3.5 bg-white/95 backdrop-blur-md border border-[#DDD4C5] text-left hover:border-[#B89452] transition-all rounded-none shadow-sm"
              >
                <div className="w-8 h-8 bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#B89452]" />
                </div>
                <span className="text-xs font-medium text-[#25231F] leading-tight">
                  {point}
                </span>
              </div>
            );
          })}
        </div>

        {/* Live Visitor Note */}
        <div className="mt-8 flex items-center gap-2 text-xs text-[#25231F] bg-white/95 backdrop-blur-md border border-[#DDD4C5] px-4 py-1.5 rounded-none shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#B89452] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#B89452]"></span>
          </span>
          <span>Complimentary VIP Site Visit with AC Cab Service available this weekend</span>
        </div>

        {/* Subtle Scroll Down Prompt */}
        <div className="mt-12 animate-bounce cursor-pointer opacity-80 hover:opacity-100 transition-opacity" onClick={onExploreProjects}>
          <ChevronDown className="w-6 h-6 text-[#B89452] drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]" />
        </div>
      </div>
    </section>
  );
};
