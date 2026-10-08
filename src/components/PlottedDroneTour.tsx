import React from 'react';
import { BengaluruPlottedLandscape } from './BengaluruPlottedLandscape';

interface PlottedDroneTourProps {
  mousePos: { x: number; y: number };
  isReducedMotion?: boolean;
}

/**
 * PlottedDroneTour
 * Dedicated cinematic plotted-development landscape for RGV Developers hero section.
 * Renders an ultra-realistic aerial/drone view of a master-planned township in Bengaluru,
 * featuring demarcated residential plots, asphalt internal roads, constructed villas,
 * road infrastructure, and natural green surroundings.
 */
export const PlottedDroneTour: React.FC<PlottedDroneTourProps> = ({
  mousePos,
  isReducedMotion = false,
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0 bg-[#090A0D]">
      <BengaluruPlottedLandscape mousePos={mousePos} isReducedMotion={isReducedMotion} />
    </div>
  );
};
