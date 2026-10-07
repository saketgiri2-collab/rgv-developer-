import React, { useState, useEffect } from 'react';

export interface PlotScene {
  id: string;
  number: string;
  title: string;
  imageUrl: string;
  motionClass: string;
}

export const PLOT_SCENES: PlotScene[] = [
  {
    id: 'wide-aerial-plots',
    number: '01',
    title: 'Wide Aerial View of Plotted Development',
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2560&q=85',
    motionClass: 'plot-drone-scene-1',
  },
  {
    id: 'closer-aerial-layout',
    number: '02',
    title: 'Closer Aerial View of Demarcated Plots',
    imageUrl: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2560&q=85',
    motionClass: 'plot-drone-scene-2',
  },
  {
    id: 'internal-asphalt-roads',
    number: '03',
    title: 'Camera Traveling Along Internal Asphalt Roads',
    imageUrl: 'https://images.unsplash.com/photo-1508873696983-2df5293cb32f?auto=format&fit=crop&w=2560&q=85',
    motionClass: 'plot-drone-scene-3',
  },
  {
    id: 'rows-of-plots-glide',
    number: '04',
    title: 'Multiple Rows of Individual Plots and Boundaries',
    imageUrl: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2560&q=85',
    motionClass: 'plot-drone-scene-4',
  },
  {
    id: 'high-aerial-rise',
    number: '05',
    title: 'Camera Rising to Wide Aerial View of Township',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=2560&q=85',
    motionClass: 'plot-drone-scene-5',
  },
];

interface PlottedDroneTourProps {
  mousePos: { x: number; y: number };
  isReducedMotion?: boolean;
}

export const PlottedDroneTour: React.FC<PlottedDroneTourProps> = ({
  mousePos,
  isReducedMotion = false,
}) => {
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  // 25-second continuous loop (5 seconds per scene, 1.8s smooth crossfade)
  const SCENE_INTERVAL_MS = 5000;

  useEffect(() => {
    // Preload all 5 scenes in browser memory
    PLOT_SCENES.forEach((scene) => {
      const img = new Image();
      img.src = scene.imageUrl;
    });

    const timer = setInterval(() => {
      setCurrentSceneIndex((prev) => (prev + 1) % PLOT_SCENES.length);
    }, SCENE_INTERVAL_MS);

    return () => clearInterval(timer);
  }, []);

  // Parallax calculation strictly matching prompt:
  // Background: 5–10px on desktop, disabled on mobile
  const bgParallaxX = isReducedMotion ? 0 : (mousePos.x - 0.5) * -8;
  const bgParallaxY = isReducedMotion ? 0 : (mousePos.y - 0.5) * -6;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#0C0C0E]">
      {/* 1. CONTINUOUS CINEMATIC DRONE CAMERA BACKGROUND (ONLY PLOTS, ROADS, LAND, GREENERY) */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-300 ease-out"
        style={{
          transform: `translate3d(${bgParallaxX}px, ${bgParallaxY}px, 0) scale(1.03)`,
        }}
      >
        {PLOT_SCENES.map((scene, idx) => {
          const isActive = idx === currentSceneIndex;
          return (
            <div
              key={scene.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-[1800ms] ease-in-out ${
                isActive ? 'opacity-100 z-1' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={scene.imageUrl}
                alt={`RGV Developers - Plotted Land Drone View: ${scene.title}`}
                loading={idx === 0 ? 'eager' : 'lazy'}
                className={`w-full h-full object-cover object-center ${
                  isActive && !isReducedMotion ? scene.motionClass : 'scale-100'
                }`}
                style={{
                  willChange: 'transform, opacity',
                  filter: 'brightness(0.96) contrast(1.05)',
                }}
              />
            </div>
          );
        })}
      </div>

      {/* 2. SUBTLE DIRECTIONAL GRADIENT OVERLAY (LEFT SIDE ONLY) */}
      {/* Ensures hero text remains completely readable while keeping the plots clearly visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0C0C0E]/92 via-[#0C0C0E]/55 via-45% to-transparent z-2 pointer-events-none" />

      {/* Subtle top & bottom edges blend */}
      <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0C0C0E]/75 to-transparent z-2 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#0C0C0E] to-transparent z-2 pointer-events-none" />
    </div>
  );
};
