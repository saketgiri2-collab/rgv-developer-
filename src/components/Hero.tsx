import React, { useState, useEffect } from 'react';
import { PlottedDroneTour } from './PlottedDroneTour';
import { 
  CalendarCheck, 
  Compass, 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  TrendingUp, 
  FileText,
  CreditCard,
  ChevronDown
} from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: () => void;
  onExploreProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBookingModal, onExploreProjects }) => {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [isReducedMotion, setIsReducedMotion] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    // Detect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setIsReducedMotion(e.matches);
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    // Detect touch / mobile devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      setIsTouchDevice(true);
    }

    return () => {
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (isReducedMotion || isTouchDevice) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePos({ x, y });
  };

  // Parallax strictly matching section 14:
  // Hero content: 3–5px movement on desktop; disabled on mobile
  const contentParallaxX = isReducedMotion || isTouchDevice ? 0 : (mousePos.x - 0.5) * 4;
  const contentParallaxY = isReducedMotion || isTouchDevice ? 0 : (mousePos.y - 0.5) * 3;

  // Exact 4 feature cards requested by user
  const featureCards = [
    { title: 'Prime Growth Corridors', sub: 'Strategic North Bangalore Axis', icon: Compass },
    { title: 'Transparent Documentation', sub: '100% Clear Titles & Approvals', icon: FileText },
    { title: 'World-Class Infrastructure', sub: '60ft Roads & Underground Utilities', icon: Award },
    { title: 'Flexible Payment Schedules', sub: 'Milestone-Linked Investment Plans', icon: CreditCard },
  ];

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[96vh] lg:min-h-screen flex items-center justify-center pt-28 pb-16 sm:pb-24 overflow-hidden bg-[#0C0C0E] text-[#F7F7F7]"
    >
      {/* 1. CINEMATIC PLOTTED-LAND-ONLY DRONE TOUR BACKGROUND */}
      <PlottedDroneTour mousePos={mousePos} isReducedMotion={isReducedMotion} />

      {/* 2. SUBTLE ARCHITECTURAL CORNER ACCENTS */}
      <div className="absolute top-8 left-8 w-10 h-10 border-t border-l border-[#C8A96B]/30 pointer-events-none hidden sm:block z-10" />
      <div className="absolute top-8 right-8 w-10 h-10 border-t border-r border-[#C8A96B]/30 pointer-events-none hidden sm:block z-10" />
      <div className="absolute bottom-8 left-8 w-10 h-10 border-b border-l border-[#C8A96B]/30 pointer-events-none hidden sm:block z-10" />
      <div className="absolute bottom-8 right-8 w-10 h-10 border-b border-r border-[#C8A96B]/30 pointer-events-none hidden sm:block z-10" />

      {/* 3. STABLE FOREGROUND HERO CONTENT WITH SEQUENCED CINEMATIC CASCADE */}
      <div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start lg:items-center text-left lg:text-center transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${contentParallaxX}px, ${contentParallaxY}px, 0)`,
        }}
      >
        {/* Subtle Brand Identity Emblem */}
        <div className="relative mb-5 flex items-center gap-3 animate-in fade-in duration-700">
          <div className="relative hero-logo-micro p-1 rounded-full bg-gradient-to-b from-[#2a2419] via-[#161619] to-[#0d0d0f] border border-[#C8A96B]/50 shadow-[0_0_20px_rgba(200,169,107,0.3)] overflow-hidden">
            <img
              src="/rgv-logo.svg"
              alt="RGV Developers Official Logo"
              className="w-12 h-12 sm:w-14 sm:h-14 object-contain rounded-full"
            />
            <div className="hero-sheen-sweep absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />
          </div>

          <div className="flex flex-col text-left">
            <span className="font-display font-bold text-xs sm:text-sm tracking-widest text-[#F7F7F7] uppercase">
              RGV DEVELOPERS
            </span>
            <span className="text-[9px] font-mono tracking-widest text-[#DEBA67] uppercase">
              SRI RAGHAVENDRA SWAMY DEVELOPERS
            </span>
          </div>
        </div>

        {/* 1. EYEBROW (Fades in first) */}
        <div 
          className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-[#141416]/90 backdrop-blur-md border border-[#C8A96B]/40 mb-5 shadow-sm"
          style={{ animation: 'heroFadeIn 0.8s ease-out 0.1s both' }}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[10px] sm:text-xs font-semibold tracking-[0.22em] text-[#DEBA67] uppercase font-mono">
            LUXURY PLOTTED TOWNSHIPS & VILLA DEVELOPMENTS
          </span>
        </div>

        {/* 2 & 3. MAIN HEADLINE (Slides upward, Line 2 in Gold) */}
        <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.08] max-w-5xl mb-5 drop-shadow-[0_4px_24px_rgba(0,0,0,0.85)]">
          <span 
            className="block text-[#F7F7F7]"
            style={{ animation: 'heroSlideUp 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both' }}
          >
            BUILDING SPACES.
          </span>
          <span 
            className="block bg-gradient-to-r from-[#DEBA67] via-[#F3E5AB] to-[#C8A96B] bg-clip-text text-transparent drop-shadow-[0_2px_20px_rgba(200,169,107,0.3)]"
            style={{ animation: 'heroSlideUpGold 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.55s both' }}
          >
            CREATING FUTURES.
          </span>
        </h1>

        {/* 4. DESCRIPTION (Fades in) */}
        <p 
          className="text-sm sm:text-base md:text-lg text-[#E8E2D5] max-w-2xl mb-8 leading-relaxed font-normal tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]"
          style={{ animation: 'heroFadeIn 0.8s ease-out 0.8s both' }}
        >
          Premium real estate destinations designed for modern living, generational wealth, and long-term capital appreciation in strategic high-growth corridors.
        </p>

        {/* 5. BUTTONS (Appear with smooth elevation) */}
        <div 
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-5 w-full sm:w-auto mb-12"
          style={{ animation: 'heroFadeIn 0.8s ease-out 1.05s both' }}
        >
          {/* Primary CTA */}
          <button
            onClick={onOpenBookingModal}
            className="group relative overflow-hidden bg-gradient-to-r from-[#B89452] via-[#C8A96B] to-[#B89452] hover:from-[#C8A96B] hover:via-[#DEBA67] hover:to-[#C8A96B] text-black font-bold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_30px_rgba(200,169,107,0.4)] cursor-pointer flex items-center justify-center gap-3 border border-[#F3E5AB]/60 rounded-none shadow-lg"
            id="hero-book-site-visit-btn"
          >
            <CalendarCheck className="w-4 h-4 text-black transition-transform duration-300 group-hover:scale-110" />
            <span className="font-semibold tracking-wider">BOOK A FREE SITE VISIT</span>
            <ArrowRight className="w-3.5 h-3.5 text-black transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          {/* Secondary CTA */}
          <button
            onClick={onExploreProjects}
            className="group relative overflow-hidden bg-[#161619]/85 backdrop-blur-md hover:bg-[#1f1f24] text-[#DEBA67] hover:text-white border border-[#C8A96B]/50 hover:border-[#DEBA67] font-bold text-xs tracking-widest uppercase px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_25px_rgba(0,0,0,0.6)] cursor-pointer flex items-center justify-center gap-3 rounded-none shadow-md"
            id="hero-explore-projects-btn"
          >
            <Compass className="w-4 h-4 text-[#C8A96B] transition-transform duration-300 group-hover:rotate-45" />
            <span>EXPLORE PROJECTS</span>
            <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </button>
        </div>

        {/* 6. FEATURE CARDS (Appear slightly afterward in translucent glass style) */}
        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl w-full mb-6"
          style={{ animation: 'heroFadeIn 0.8s ease-out 1.3s both' }}
        >
          {featureCards.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="group flex items-start gap-3 p-3 bg-[#101014]/80 backdrop-blur-md border border-white/10 hover:border-[#C8A96B]/60 text-left transition-all duration-300 hover:-translate-y-0.5 rounded-none shadow-md"
              >
                <div className="w-8 h-8 bg-[#18181d] border border-[#C8A96B]/30 flex items-center justify-center shrink-0 group-hover:border-[#DEBA67] transition-colors">
                  <Icon className="w-4 h-4 text-[#DEBA67]" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-[#F7F7F7] leading-snug group-hover:text-[#DEBA67] transition-colors">
                    {item.title}
                  </span>
                  <span className="text-[10px] text-[#A69F93] leading-tight mt-0.5">
                    {item.sub}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 7. BOTTOM VIP SITE VISIT BANNER (Appears last) */}
        <div 
          className="flex items-center gap-2.5 text-xs text-[#DDD4C5] bg-[#101014]/90 backdrop-blur-md border border-[#C8A96B]/30 px-4 py-2 rounded-none shadow-md"
          style={{ animation: 'heroFadeIn 0.8s ease-out 1.55s both' }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#DEBA67] opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#DEBA67]" />
          </span>
          <span>Complimentary VIP Site Visit with AC Cab Service available this weekend</span>
        </div>

        {/* Downward Navigation Cue */}
        <button
          onClick={onExploreProjects}
          aria-label="Scroll to explore projects"
          className="mt-8 opacity-70 hover:opacity-100 transition-opacity cursor-pointer group flex flex-col items-center gap-1"
        >
          <span className="text-[9px] tracking-widest text-[#C8A96B]/80 uppercase group-hover:text-[#DEBA67] font-mono">
            SCROLL TO EXPLORE
          </span>
          <ChevronDown className="w-4 h-4 text-[#C8A96B] animate-bounce group-hover:text-[#DEBA67]" />
        </button>
      </div>
    </section>
  );
};
