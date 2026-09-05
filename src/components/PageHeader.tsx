import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  currentPageName: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  currentPageName,
}) => {
  return (
    <section className="relative pt-32 sm:pt-36 pb-14 sm:pb-16 bg-[#F7F4EE] border-b border-[#DDD4C5] overflow-hidden">
      {/* Subtle Luxury Pattern Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#EFE9DE]/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B89452]/5 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#6F6A61] mb-6">
          <Link
            to="/"
            className="hover:text-[#B89452] flex items-center gap-1 transition-colors font-medium"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3 h-3 text-[#DDD4C5]" />
          <span className="text-[#25231F] font-semibold">{currentPageName}</span>
        </nav>

        <div className="max-w-4xl">
          {/* Geometric Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-4 rounded-none shadow-xs">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              {badge}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#25231F] tracking-tight leading-[1.1] mb-4">
            {title}
          </h1>

          {/* Subtitle */}
          <p className="text-[#6F6A61] text-sm sm:text-base md:text-lg leading-relaxed max-w-3xl font-normal">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};
