import React, { useEffect, useState } from 'react';

interface CinematicIntroProps {
  onComplete: () => void;
  isReducedMotion?: boolean;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({
  onComplete,
  isReducedMotion = false,
}) => {
  // Phases: 1 (Black Screen), 2 (Logo 3D Reveal), 3 (Light Burst), 4 (Logo Transition & Exit)
  const [phase, setPhase] = useState<1 | 2 | 3 | 4>(1);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // If reduced motion is requested, finish quickly with a gentle fade
    if (isReducedMotion) {
      const quickTimer = setTimeout(() => {
        setIsExiting(true);
        setTimeout(onComplete, 400);
      }, 600);
      return () => clearTimeout(quickTimer);
    }

    // Phase 1 -> Phase 2 (at ~300ms: logo appears small and begins 3D reveal)
    const t1 = setTimeout(() => {
      setPhase(2);
    }, 300);

    // Phase 2 -> Phase 3 (at ~1150ms: logo settles, light burst and expanding glow)
    const t2 = setTimeout(() => {
      setPhase(3);
    }, 1150);

    // Phase 3 -> Phase 4 (at ~1600ms: logo ascends toward navbar & plotted scene expands)
    const t3 = setTimeout(() => {
      setPhase(4);
    }, 1600);

    // Final finish (at ~1950ms: intro unmounts, virtual drone tour takes flight)
    const t4 = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 350);
    }, 1950);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter') {
        skipIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isReducedMotion, onComplete]);

  const skipIntro = () => {
    setIsExiting(true);
    setTimeout(onComplete, 250);
  };

  return (
    <aside
      aria-label="Cinematic website intro"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#0C0C0E] transition-opacity duration-500 overflow-hidden ${
        isExiting ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ perspective: '1200px' }}
    >
      {/* Background Architectural Canvas & Subtle Edge Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Deep radial ambiance */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(200,169,107,0.08)_0%,rgba(16,16,18,0.95)_70%,#0C0C0E_100%)]" />

        {/* Subtle architectural coordinates grid */}
        <div
          className={`absolute inset-0 opacity-20 transition-opacity duration-1000 ${
            phase >= 2 ? 'opacity-30' : 'opacity-10'
          }`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(200, 169, 107, 0.08) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(200, 169, 107, 0.08) 1px, transparent 1px)`,
            backgroundSize: '48px 48px',
          }}
        />

        {/* Phase 4: Plotted development aerial scene expands behind the logo */}
        <div
          className={`absolute inset-0 transition-all duration-1000 ease-out pointer-events-none ${
            phase >= 4 ? 'opacity-40 scale-100 blur-0' : 'opacity-0 scale-90 blur-sm'
          }`}
        >
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2400&q=85"
            alt="Plotted Development Aerial Expansion"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0C0C0E]/60" />
        </div>

        {/* Phase 1 & 2: Edge gold particles floating in */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="intro-particle p-tl" />
          <div className="intro-particle p-tr" />
          <div className="intro-particle p-bl" />
          <div className="intro-particle p-br" />
          <div className="intro-particle p-c1" />
          <div className="intro-particle p-c2" />
        </div>
      </div>

      {/* PHASE 3: LIGHT BURST LAYER */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none transition-all duration-700 ease-out ${
          phase >= 3 ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`}
      >
        {/* Soft Radial Gold Flare Glow */}
        <div className="w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] rounded-full bg-[radial-gradient(circle,rgba(216,192,138,0.22)_0%,rgba(200,169,107,0.08)_40%,transparent_70%)] animate-pulse" />

        {/* Expanding Thin Architectural Rings */}
        <div className="absolute w-[220px] h-[220px] sm:w-[280px] sm:h-[280px] rounded-full border border-[#D8C08A]/40 animate-ping opacity-35" />
        <div className="absolute w-[320px] h-[320px] sm:w-[420px] sm:h-[420px] rounded-full border border-[#C8A96B]/25 transition-transform duration-1000 ease-out scale-110" />
        <div className="absolute w-[440px] h-[440px] sm:w-[560px] sm:h-[560px] rounded-full border border-dashed border-[#C8A96B]/15 animate-spin-slow" />

        {/* Subtle Horizontal Lens Flare Line */}
        <div className="absolute w-3/4 max-w-2xl h-[1px] bg-gradient-to-r from-transparent via-[#D8C08A]/60 to-transparent blur-[0.5px]" />
      </div>

      {/* PHASE 2 & 4: LOGO 3D REVEAL & TRANSITION CONTAINER */}
      <div
        className={`relative z-20 flex flex-col items-center text-center transition-all duration-700 ease-out ${
          phase === 1
            ? 'opacity-0 scale-[0.4] blur-[10px]'
            : phase === 2
            ? 'opacity-100 scale-100 blur-0'
            : phase === 3
            ? 'opacity-100 scale-100 blur-0'
            : 'opacity-95 -translate-y-8 scale-90 blur-0' // Phase 4 upward motion
        }`}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* 3D Rotating Logo Container */}
        <div
          className={`relative p-2 rounded-full transition-transform duration-1000 ease-out ${
            phase === 2 ? 'intro-logo-3d-spin' : ''
          }`}
          style={{
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle Outer Halo Ring */}
          <div className="absolute -inset-2.5 rounded-full border border-[#C8A96B]/30 animate-pulse pointer-events-none" />

          {/* Genuine Uploaded RGV Logo */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden p-1 bg-gradient-to-b from-[#2a2419] via-[#151518] to-[#0c0c0e] shadow-[0_0_35px_rgba(200,169,107,0.25)] border border-[#C8A96B]/50 flex items-center justify-center">
            <img
              src="/rgv-logo.svg"
              alt="RGV Developers Official Emblem"
              className="w-full h-full object-contain rounded-full"
            />

            {/* Golden Light Sweep Across the Logo (Phase 2 & 3) */}
            <div
              className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none ${
                phase >= 2 ? 'intro-shimmer-sweep' : ''
              }`}
            />
          </div>
        </div>

        {/* Brand Typographic Reveal */}
        <div
          className={`mt-6 transition-all duration-700 delay-150 ${
            phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="w-6 h-[1px] bg-gradient-to-r from-transparent to-[#C8A96B]" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.35em] text-[#D8C08A] uppercase">
              SRI RAGHAVENDRA SWAMY DEVELOPERS
            </span>
            <span className="w-6 h-[1px] bg-gradient-to-l from-transparent to-[#C8A96B]" />
          </div>

          <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-[0.18em] text-[#F7F7F7] uppercase drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)]">
            RGV DEVELOPERS
          </h1>

          <p className="mt-2 text-xs sm:text-sm font-light tracking-[0.25em] text-[#C8A96B] uppercase">
            CRAFTING TOMORROW'S LANDSCAPES
          </p>
        </div>

        {/* Phase 3 Status indicator line */}
        <div
          className={`mt-6 w-32 h-[1.5px] bg-[#222] overflow-hidden rounded-full transition-opacity duration-500 ${
            phase >= 2 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="w-full h-full bg-gradient-to-r from-[#97763B] via-[#D8C08A] to-[#97763B] animate-progress" />
        </div>
      </div>

      {/* Skip Button (Top Right) */}
      <button
        onClick={skipIntro}
        className="absolute top-6 right-6 sm:top-8 sm:right-8 z-30 px-3.5 py-1.5 text-[11px] font-medium tracking-widest text-[#F7F7F7]/60 hover:text-[#D8C08A] border border-white/10 hover:border-[#C8A96B]/50 bg-black/40 backdrop-blur-md uppercase transition-all duration-200 cursor-pointer rounded-none"
        title="Press Escape to skip"
      >
        Skip Intro <span className="opacity-40 text-[9px]">ESC</span>
      </button>

      {/* Subtle Bottom Architectural Coordinate */}
      <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-[9px] tracking-widest text-[#C8A96B]/40 uppercase pointer-events-none">
        <span>ARCHITECTURAL CINEMATICS</span>
        <span className="hidden sm:inline">BANGALORE NORTH · EST. 2016</span>
        <span>LAT 13.1007° N</span>
      </div>
    </aside>
  );
};
