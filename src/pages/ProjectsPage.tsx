import React from 'react';
import { Project } from '../types';
import { PageHeader } from '../components/PageHeader';
import { ProjectsSection } from '../components/ProjectsSection';
import { CalendarCheck, Phone, ArrowRight, ShieldCheck } from 'lucide-react';

interface ProjectsPageProps {
  onOpenBookingModal: (projectName?: string) => void;
  onViewProjectDetails: (project: Project) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  onOpenBookingModal,
  onViewProjectDetails,
}) => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="PORTFOLIO & DEVELOPMENTS"
        title="Master-Planned Townships & Villa Plots"
        subtitle="Explore premium plotted developments with BMRDA/DPA compliance, asphalt blacktop roads, underground utilities, and strategic North Bangalore connectivity."
        currentPageName="Projects"
      />

      {/* Main Projects Section */}
      <ProjectsSection
        onOpenBookingModal={onOpenBookingModal}
        onViewProjectDetails={onViewProjectDetails}
      />

      {/* Assistance Strip */}
      <section className="py-16 bg-[#F7F4EE] border-t border-[#DDD4C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 bg-white border border-[#DDD4C5] shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                NEED EXPERT GUIDANCE?
              </span>
              <h3 className="font-display font-bold text-2xl text-[#25231F]">
                Schedule a Guided Site Visit or Consultation
              </h3>
              <p className="text-sm text-[#6F6A61] max-w-xl">
                Our property advisors provide detailed plot-by-plot guidance, survey maps, bank loan pre-approvals, and customized payment plans.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:7624997854"
                className="px-5 py-3 border border-[#DDD4C5] hover:border-[#B89452] bg-[#F7F4EE] text-xs font-bold tracking-wider text-[#25231F] uppercase flex items-center gap-2 transition-all shadow-xs"
              >
                <Phone className="w-4 h-4 text-[#B89452]" />
                <span>Call 7624997854</span>
              </a>

              <button
                onClick={() => onOpenBookingModal()}
                className="gold-button text-white px-6 py-3 text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>Book Free Visit</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
