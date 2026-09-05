import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Project } from '../types';
import { Hero } from '../components/Hero';
import { Highlights } from '../components/Highlights';
import { BrandIntro } from '../components/BrandIntro';
import { FeaturedProject } from '../components/FeaturedProject';
import { CalendarCheck, ArrowRight, Compass, ShieldCheck, MapPin } from 'lucide-react';

interface HomePageProps {
  onOpenBookingModal: (projectName?: string) => void;
  onViewProjectDetails: (project: Project) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenBookingModal,
  onViewProjectDetails,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#F7F4EE]">
      {/* 1. Premium Hero Section */}
      <Hero
        onOpenBookingModal={() => onOpenBookingModal()}
        onExploreProjects={() => navigate('/projects')}
      />

      {/* 2. Key Trust Metrics & Highlights Strip */}
      <Highlights />

      {/* 3. Main Brand / Project Introduction */}
      <BrandIntro onOpenBookingModal={() => onOpenBookingModal()} />

      {/* 4. One Concise Signature Project Highlight */}
      <FeaturedProject
        onOpenBookingModal={onOpenBookingModal}
        onViewProjectDetails={onViewProjectDetails}
      />

      {/* 5. Clear, Focused "Explore Projects" / "Book a Site Visit" CTA */}
      <section className="py-20 sm:py-24 relative bg-[#EFE9DE] border-t border-[#DDD4C5] overflow-hidden text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-4 rounded-none shadow-xs">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              NEXT STEPS
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight mb-4">
            Find Your Ideal Villa Plot in North Bangalore
          </h2>

          <p className="text-[#6F6A61] text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Browse our full portfolio of approved gated developments or book a complimentary guided site visit with door-to-door AC cab pickup.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link
              to="/projects"
              className="w-full sm:w-auto px-8 py-4 bg-[#B89452] hover:bg-[#D6BD82] text-white font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-md transition-all"
              id="home-cta-explore-projects"
            >
              <Compass className="w-4 h-4 text-white" />
              <span>Explore All Projects</span>
            </Link>

            <button
              onClick={() => onOpenBookingModal()}
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-[#F7F4EE] text-[#25231F] border border-[#DDD4C5] hover:border-[#B89452] font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 shadow-xs transition-all cursor-pointer"
              id="home-cta-book-site-visit"
            >
              <CalendarCheck className="w-4 h-4 text-[#B89452]" />
              <span>Book a Site Visit</span>
            </button>
          </div>

          <div className="mt-8 flex items-center justify-center gap-6 text-xs text-[#6F6A61] flex-wrap">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#B89452]" />
              100% Verified Legal Documents
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-[#B89452]" />
              Prime Growth Locations
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
