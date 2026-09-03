import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import { Project, CompletedProject } from '../types';
import { MapPin, ArrowRight, ShieldCheck, FileText, CheckCircle2, MessageSquare, Award, CheckCircle } from 'lucide-react';
import { getProjectWhatsAppLink } from '../services/leadService';

interface ProjectsSectionProps {
  onOpenBookingModal: (projectName?: string) => void;
  onViewProjectDetails: (project: Project) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onOpenBookingModal,
  onViewProjectDetails,
}) => {
  const [selectedTab, setSelectedTab] = useState<'all' | 'ongoing' | 'completed'>('all');

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Fast Selling':
        return 'bg-[#B89452]/15 text-[#B89452] border-[#B89452]/40';
      case 'New Launch':
        return 'bg-[#B89452]/15 text-[#B89452] border-[#B89452]/40';
      case 'Ready to Construct':
        return 'bg-[#6F6A61]/15 text-[#25231F] border-[#DDD4C5]';
      case '100% Delivered':
      case 'Completed':
      case 'Delivered':
        return 'bg-[#6F6A61]/15 text-[#25231F] border-[#DDD4C5]';
      default:
        return 'bg-[#F7F4EE] text-[#6F6A61] border-[#DDD4C5]';
    }
  };

  const showOngoing = selectedTab === 'all' || selectedTab === 'ongoing';
  const showCompleted = selectedTab === 'all' || selectedTab === 'completed';

  return (
    <section id="projects" className="py-24 relative bg-[#EFE9DE] border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/30 mb-3 rounded-none shadow-xs">
              <span className="w-1.5 h-1.5 bg-[#B89452]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                PORTFOLIO & DEVELOPMENTS
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight">
              Our Ongoing & Completed Projects
            </h2>
            <p className="text-[#6F6A61] text-sm sm:text-base mt-2 max-w-xl font-normal">
              Master-planned townships in high-potential corridors like Rajankunte & Doddaballapura, alongside a proven track record of successful deliveries.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-1 p-1 bg-white border border-[#DDD4C5] self-start md:self-auto rounded-none shadow-xs">
            <button
              onClick={() => setSelectedTab('all')}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer rounded-none ${
                selectedTab === 'all'
                  ? 'bg-[#B89452] text-white'
                  : 'text-[#6F6A61] hover:text-[#25231F] hover:bg-[#F7F4EE]'
              }`}
            >
              All Projects ({siteConfig.projects.length + siteConfig.completedProjects.length})
            </button>
            <button
              onClick={() => setSelectedTab('ongoing')}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer rounded-none ${
                selectedTab === 'ongoing'
                  ? 'bg-[#B89452] text-white'
                  : 'text-[#6F6A61] hover:text-[#25231F] hover:bg-[#F7F4EE]'
              }`}
            >
              Ongoing Projects ({siteConfig.projects.length})
            </button>
            <button
              onClick={() => setSelectedTab('completed')}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-all cursor-pointer rounded-none ${
                selectedTab === 'completed'
                  ? 'bg-[#B89452] text-white'
                  : 'text-[#6F6A61] hover:text-[#25231F] hover:bg-[#F7F4EE]'
              }`}
            >
              Completed Projects ({siteConfig.completedProjects.length})
            </button>
          </div>
        </div>

        {/* Ongoing Projects Section */}
        {showOngoing && (
          <div className="mb-14">
            {selectedTab === 'all' && (
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#DDD4C5]">
                <span className="w-2.5 h-2.5 bg-[#B89452] rounded-full animate-pulse" />
                <h3 className="font-display font-bold text-xl text-[#25231F] tracking-wide">
                  Ongoing Projects
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {siteConfig.projects.map((project) => (
                <div
                  key={project.id}
                  className="bg-white border border-[#DDD4C5] hover:border-[#B89452] transition-all rounded-none flex flex-col group shadow-xs"
                >
                  {/* Image Container with Badges */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    {/* Status & Approvals Badges */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span
                        className={`px-3 py-1 text-[10px] font-bold tracking-widest uppercase border backdrop-blur-md rounded-none ${getStatusBadgeColor(
                          project.status
                        )}`}
                      >
                        {project.status}
                      </span>
                      <span className="px-3 py-1 text-[10px] font-bold tracking-widest uppercase bg-white/95 text-[#B89452] border border-[#DDD4C5] backdrop-blur-md rounded-none shadow-xs">
                        {project.totalArea}
                      </span>
                    </div>

                    {/* Starting Price Tag */}
                    <div className="absolute bottom-4 right-4 text-right bg-white/95 backdrop-blur-md px-3.5 py-1.5 border border-[#DDD4C5] rounded-none shadow-sm">
                      <span className="block text-[9px] uppercase font-bold tracking-widest text-[#6F6A61]">
                        Starting From
                      </span>
                      <span className="text-base sm:text-lg font-bold text-[#B89452]">
                        {project.startingPrice}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Name & Tagline */}
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="font-display font-bold text-xl sm:text-2xl text-[#25231F] group-hover:text-[#B89452] transition-colors">
                            {project.name}
                          </h3>
                          <p className="text-xs text-[#B89452] font-medium tracking-wide">
                            {project.tagline}
                          </p>
                        </div>
                      </div>

                      {/* Location with Icon */}
                      <div className="flex items-center gap-1.5 text-xs text-[#6F6A61] mb-4">
                        <MapPin className="w-4 h-4 text-[#B89452] shrink-0" />
                        <span>{project.location}</span>
                      </div>

                      {/* Specifications Pill Grid */}
                      <div className="grid grid-cols-2 gap-2.5 py-3.5 my-3 border-y border-[#DDD4C5] text-xs">
                        <div className="flex flex-col">
                          <span className="text-[#6F6A61] text-[11px]">Plot Dimensions</span>
                          <span className="text-[#25231F] font-semibold text-[11px] leading-tight">
                            30×40, 30×50, 40×60, 50×80
                          </span>
                        </div>
                        <div className="flex flex-col">
                          <span className="text-[#6F6A61] text-[11px]">Road Dimensions</span>
                          <span className="text-[#25231F] font-semibold">{project.roadWidths}</span>
                        </div>
                        <div className="flex flex-col col-span-2">
                          <span className="text-[#6F6A61] text-[11px]">Legal Approvals</span>
                          <span className="text-[#25231F] font-medium flex items-center gap-1">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#B89452]" />
                            {project.approvals}
                          </span>
                        </div>
                      </div>

                      {/* Bullet Highlights */}
                      <div className="space-y-1.5 mb-6">
                        {project.highlights.slice(0, 4).map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-[#6F6A61] font-normal">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#B89452] shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* CTAs */}
                    <div className="space-y-2.5 pt-2">
                      <div className="grid grid-cols-2 gap-2">
                        <button
                          onClick={() => onViewProjectDetails(project)}
                          className="w-full py-2.5 text-xs font-bold tracking-wider uppercase text-[#B89452] bg-white hover:bg-[#F7F4EE] border border-[#B89452] transition-all flex items-center justify-center gap-1.5 cursor-pointer rounded-none shadow-xs"
                        >
                          <FileText className="w-3.5 h-3.5 text-[#B89452]" />
                          <span>View Details</span>
                        </button>

                        <a
                          href={getProjectWhatsAppLink(project.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-2.5 text-xs font-bold tracking-wider uppercase text-[#25231F] bg-[#F7F4EE] hover:bg-[#EFE9DE] border border-[#DDD4C5] transition-all flex items-center justify-center gap-1.5 rounded-none shadow-xs"
                        >
                          <MessageSquare className="w-3.5 h-3.5 text-[#B89452]" />
                          <span>WhatsApp Price</span>
                        </a>
                      </div>

                      <button
                        onClick={() => onOpenBookingModal(project.name)}
                        className="gold-button w-full py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md cursor-pointer rounded-none"
                      >
                        <span>Book a Free VIP Site Visit</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Completed Projects Showcase */}
        {showCompleted && (
          <div>
            {selectedTab === 'all' && (
              <div className="flex items-center gap-3 mb-6 pb-2 border-b border-[#DDD4C5] pt-6">
                <Award className="w-5 h-5 text-[#B89452]" />
                <h3 className="font-display font-bold text-xl text-[#25231F] tracking-wide">
                  Delivered & Completed Projects
                </h3>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {siteConfig.completedProjects.map((cp) => (
                <div
                  key={cp.id}
                  className="bg-white border border-[#DDD4C5] hover:border-[#B89452] transition-all rounded-none flex flex-col group overflow-hidden shadow-xs"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-neutral-100">
                    <img
                      src={cp.image}
                      alt={cp.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 text-[10px] font-bold tracking-wider uppercase bg-white/95 text-[#6F6A61] border border-[#DDD4C5] backdrop-blur-md rounded-none shadow-xs">
                        {cp.status}
                      </span>
                    </div>

                    <div className="absolute bottom-3 right-3 bg-white/95 px-2.5 py-1 border border-[#DDD4C5] text-[10px] font-bold text-[#B89452] shadow-xs">
                      {cp.totalArea}
                    </div>
                  </div>

                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-display font-bold text-base text-[#25231F] mb-1 group-hover:text-[#B89452] transition-colors">
                        {cp.name}
                      </h4>
                      <div className="flex items-center gap-1 text-xs text-[#6F6A61] mb-3">
                        <MapPin className="w-3.5 h-3.5 text-[#B89452] shrink-0" />
                        <span>{cp.location}</span>
                      </div>

                      <div className="py-2 border-y border-[#DDD4C5] text-xs mb-3 flex justify-between">
                        <span className="text-[#6F6A61]">Units Delivered:</span>
                        <span className="text-[#25231F] font-semibold">{cp.unitsDelivered}</span>
                      </div>

                      <div className="space-y-1 text-[11px] text-[#6F6A61]">
                        {cp.highlights.slice(0, 2).map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5">
                            <CheckCircle className="w-3 h-3 text-[#B89452] shrink-0" />
                            <span className="truncate">{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => onOpenBookingModal(`Enquiry about ${cp.name}`)}
                      className="mt-4 w-full py-2 text-[11px] font-bold tracking-wider uppercase text-[#B89452] bg-white hover:bg-[#F7F4EE] border border-[#B89452] transition-all cursor-pointer rounded-none shadow-xs"
                    >
                      Enquire Next Phase
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
