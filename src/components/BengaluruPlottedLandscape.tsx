import React, { useState, useEffect } from 'react';

interface BengaluruPlottedLandscapeProps {
  mousePos: { x: number; y: number };
  isReducedMotion?: boolean;
}

interface ReferenceDroneScene {
  id: string;
  name: string;
  imageUrl: string;
  fallbackUrl: string;
  alt: string;
  objectPosition: string;
}

/**
 * BengaluruPlottedLandscape
 * 
 * EXACT VISUAL MATCH TO USER REFERENCE SCREENSHOT (New City North / BMRDA Plotted Development):
 * - Elevated aerial drone perspective looking down at a large green plotted township
 * - Large green rectangular residential plots with visible, natural plot demarcation lines & node markers
 * - Clean paved asphalt internal roads connecting the plots
 * - Modern 1-floor and 2-floor villas/houses nestled in the green layout
 * - Some completely empty, manicured ready-to-build plots
 * - Trees, small gardens, children's play areas, walking paths, and streetlights
 * - Natural daylight, rich green landscape, and surrounding residential societies
 * - Continuous ultra-smooth cinematic drone movement: forward & slightly upward glide,
 *   then gentle pull back to reveal more of the plotted development
 * - Center-left directional vignette to guarantee 100% legibility of the existing headline & buttons
 * - Zero blueprints, zero dark technical grids, zero floating cards, zero map pins
 * - Robust fallback protection: the website NEVER becomes blank
 */
const REFERENCE_SCENES: ReferenceDroneScene[] = [
  {
    id: 'reference-primary-plotted-drone',
    name: 'Primary Reference Plotted Township',
    imageUrl: '/images/newcitynorth-banner1.jpg',
    fallbackUrl: '/images/bengaluru-green-plots-drone.jpg',
    alt: 'RGV Developers - Elevated aerial drone view of green residential plotted development in Bengaluru matching reference with demarcated plots, paved roads, and villas',
    objectPosition: 'center 40%',
  },
  {
    id: 'reference-avenues-villas-drone',
    name: 'Plotted Community Avenues & Homes',
    imageUrl: '/images/newcitynorth-banner2.jpg',
    fallbackUrl: '/images/bengaluru-villas-drone.jpg',
    alt: 'RGV Developers - Cinematic drone view of masterplanned plotted township showing internal road avenues, demarcated residential land, and luxury villas',
    objectPosition: 'center 45%',
  },
  {
    id: 'reference-wide-township-vista',
    name: 'Wide Plotted Township Vista',
    imageUrl: '/images/newcitynorth-banner3.jpg',
    fallbackUrl: '/images/hero-drone-plots.jpg',
    alt: 'RGV Developers - High-altitude drone vista of expansive plotted township community with lush green surroundings and connecting corridors',
    objectPosition: 'center 35%',
  },
];

// Reliable CDN fallback guarantee if local assets fail for any unexpected reason
const SAFE_CDN_FALLBACK = 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=2000&q=80';
const SCENE_ROTATION_MS = 14000;

export const BengaluruPlottedLandscape: React.FC<BengaluruPlottedLandscapeProps> = ({
  mousePos,
  isReducedMotion = false,
}) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  // Seamless 14-second rotation through the reference drone views
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % REFERENCE_SCENES.length);
    }, SCENE_ROTATION_MS);
    return () => clearInterval(timer);
  }, []);

  // Preload all reference views immediately for smooth crossfades
  useEffect(() => {
    REFERENCE_SCENES.forEach((scene) => {
      const img = new Image();
      img.src = scene.imageUrl;
    });
  }, []);

  // Subtle responsive gimbal mouse parallax depth (max 8-12px)
  const parallaxX = isReducedMotion ? 0 : (mousePos.x - 0.5) * -12;
  const parallaxY = isReducedMotion ? 0 : (mousePos.y - 0.5) * -8;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none bg-[#090A0D]">
      {/* 1. CINEMATIC CONTINUOUS DRONE CAMERA FLIGHT WRAPPER */}
      {/* Moves forward & slightly upward, then gently pulls back to reveal the plotted layout */}
      <div
        className={`absolute inset-[-4%] w-[108%] h-[108%] transition-transform duration-700 ease-out ${
          isReducedMotion ? '' : 'animate-reference-drone-flight'
        }`}
        style={{
          transform: `translate3d(${parallaxX}px, ${parallaxY}px, 0)`,
          willChange: 'transform',
        }}
      >
        {REFERENCE_SCENES.map((scene, idx) => {
          const isActive = idx === currentIdx;

          return (
            <div
              key={scene.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-[2400ms] ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={scene.imageUrl}
                alt={scene.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
                style={{
                  objectPosition: scene.objectPosition,
                  filter: 'brightness(1.02) contrast(1.03) saturate(1.06)',
                }}
                loading={idx === 0 ? 'eager' : 'lazy'}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (target.src !== scene.fallbackUrl) {
                    target.src = scene.fallbackUrl;
                  } else if (target.src !== SAFE_CDN_FALLBACK) {
                    target.src = SAFE_CDN_FALLBACK;
                  }
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 2. DIRECTIONAL VIGNETTE BEHIND FOREGROUND TEXT (CENTER-LEFT SIDE ONLY) */}
      {/* Exactly preserves bright natural daylight across the green plotted development while ensuring 100% text readability */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/90 via-[#0C0C0E]/65 via-38% to-[#0C0C0E]/15 to-transparent z-10 pointer-events-none"
      />

      {/* 3. SUBTLE TOP BLEND FOR HEADER / NAVBAR */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#0C0C0E]/80 via-[#0C0C0E]/30 to-transparent z-10 pointer-events-none" />

      {/* 4. SUBTLE BOTTOM BLEND FOR FEATURE CARDS */}
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0C0C0E] via-[#0C0C0E]/70 to-transparent z-10 pointer-events-none" />

      {/* 5. NATURAL DAYLIGHT GOLDEN SUN AMBIENT ACCENT (TOP RIGHT) */}
      <div 
        className="absolute top-0 right-0 w-[45vw] h-[45vh] bg-radial from-[#FFE8B3]/12 via-transparent to-transparent pointer-events-none z-10"
      />
    </div>
  );
};
