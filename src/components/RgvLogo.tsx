import React from 'react';

interface RgvLogoProps {
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const RgvLogo: React.FC<RgvLogoProps> = ({ 
  className = '', 
  size = 'md',
  showText = false
}) => {
  const sizeClasses = {
    xs: 'w-7 h-7',
    sm: 'w-8 h-8 sm:w-9 sm:h-9',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-16 h-16 sm:w-20 sm:h-20',
    xl: 'w-24 h-24 sm:w-28 sm:h-28',
  };

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Official Circular Logo */}
      <img
        src="/rgv-logo.svg"
        alt="RGV Developers - Sri Raghavendra Swamy Developers Pvt. Ltd. Official Logo"
        referrerPolicy="no-referrer"
        className={`${sizeClasses[size]} object-contain rounded-full shrink-0 shadow-xs bg-white border border-[#B89452]/40`}
      />

      {showText && (
        <div className="flex flex-col text-left">
          <span className="font-display font-bold text-base sm:text-lg tracking-wider text-[#25231F] leading-tight">
            RGV DEVELOPERS
          </span>
          <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#B89452] uppercase font-semibold">
            Sri Raghavendra Swamy Developers
          </span>
        </div>
      )}
    </div>
  );
};
