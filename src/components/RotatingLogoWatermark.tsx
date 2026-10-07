import React from 'react';

/**
 * RotatingLogoWatermark
 * Uses the exact original RGV Developers logo (/rgv-logo.svg) already in the project.
 * Positioned fixed in the center of the viewport, continuously rotating at 25s linear infinite,
 * subtle opacity (0.05 - 0.06), pointer-events: none, staying behind interactive content.
 */
export const RotatingLogoWatermark: React.FC = () => {
  return (
    <div
      className="rgv-logo-watermark select-none pointer-events-none"
      aria-hidden="true"
    >
      <img
        src="/rgv-logo.svg"
        alt=""
        aria-hidden="true"
        className="w-[320px] h-[320px] sm:w-[440px] sm:h-[440px] md:w-[560px] md:h-[560px] lg:w-[650px] lg:h-[650px] max-w-[85vw] max-h-[85vh] object-contain opacity-[0.055] pointer-events-none"
      />
    </div>
  );
};
