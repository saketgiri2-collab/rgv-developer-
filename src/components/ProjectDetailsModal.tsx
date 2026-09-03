import React, { useState } from 'react';
import { Project } from '../types';
import {
  X,
  MapPin,
  ShieldCheck,
  CalendarCheck,
  Download,
  CheckCircle2,
  FileCheck,
  Layers,
  Building,
  Maximize2,
  ArrowRight,
} from 'lucide-react';
import { getProjectWhatsAppLink } from '../services/leadService';

interface ProjectDetailsModalProps {
  project: Project | null;
  onClose: () => void;
  onBookSiteVisit: (projectName: string) => void;
}

export const ProjectDetailsModal: React.FC<ProjectDetailsModalProps> = ({
  project,
  onClose,
  onBookSiteVisit,
}) => {
  if (!project) return null;

  const [activeTab, setActiveTab] = useState<'overview' | 'masterplan' | 'specifications'>('overview');

  return (
    <div className="fixed inset-0 z-50 bg-[#25231F]/60 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white border border-[#DDD4C5] shadow-2xl overflow-hidden my-6 max-h-[92vh] flex flex-col rounded-3xl">
        {/* Header with Project Image Backdrop */}
        <div className="relative h-48 sm:h-64 w-full bg-[#EFE9DE] overflow-hidden shrink-0">
          <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/50 to-transparent" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/90 text-[#25231F] hover:text-[#B89452] border border-[#DDD4C5] shadow-sm transition-all cursor-pointer z-10"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Project Title overlay */}
          <div className="absolute bottom-4 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <span className="px-3 py-1 bg-[#F7F4EE] text-[#B89452] text-[10px] font-bold uppercase tracking-widest border border-[#DDD4C5] rounded-full">
                {project.status} • {project.totalArea}
              </span>
              <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#25231F] mt-2">
                {project.name}
              </h2>
              <div className="flex items-center gap-1.5 text-xs text-[#6F6A61]">
                <MapPin className="w-3.5 h-3.5 text-[#B89452]" />
                <span>{project.location}</span>
              </div>
            </div>

            <div className="text-left sm:text-right bg-white/95 p-3 border border-[#DDD4C5] backdrop-blur-sm rounded-2xl shadow-sm">
              <span className="text-[10px] text-[#6F6A61] block uppercase tracking-wider font-medium">Starting Price</span>
              <span className="text-lg font-bold text-[#B89452]">
                {project.startingPrice}
              </span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-[#DDD4C5] bg-[#F7F4EE] px-6 shrink-0 gap-4">
          <button
            onClick={() => setActiveTab('overview')}
            className={`py-3.5 px-3 text-xs font-bold tracking-widest uppercase border-b-2 transition-all cursor-pointer ${
              activeTab === 'overview'
                ? 'border-[#B89452] text-[#B89452]'
                : 'border-transparent text-[#6F6A61] hover:text-[#25231F]'
            }`}
          >
            Overview & Highlights
          </button>
          <button
            onClick={() => setActiveTab('specifications')}
            className={`py-3.5 px-3 text-xs font-bold tracking-widest uppercase border-b-2 transition-all cursor-pointer ${
              activeTab === 'specifications'
                ? 'border-[#B89452] text-[#B89452]'
                : 'border-transparent text-[#6F6A61] hover:text-[#25231F]'
            }`}
          >
            Layout Specifications
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1 bg-white">
          {activeTab === 'overview' && (
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-[#B89452] uppercase tracking-widest mb-2">
                  About Development
                </h4>
                <p className="text-xs sm:text-sm text-[#6F6A61] leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Highlights Checklist */}
              <div>
                <h4 className="text-xs font-bold text-[#B89452] uppercase tracking-widest mb-3">
                  Key Infrastructure & Features
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {project.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#25231F]">
                      <CheckCircle2 className="w-4 h-4 text-[#B89452] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery preview strip if available */}
              {project.gallery && project.gallery.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold text-[#B89452] uppercase tracking-widest mb-3">
                    Project Vistas
                  </h4>
                  <div className="grid grid-cols-3 gap-3">
                    {project.gallery.slice(0, 3).map((img, idx) => (
                      <div key={idx} className="overflow-hidden aspect-video bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl">
                        <img src={img} alt={`${project.name} ${idx + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === 'specifications' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl">
                  <span className="text-[11px] text-[#6F6A61] block">Total Layout Area</span>
                  <span className="text-sm font-bold text-[#25231F] mt-0.5 block">{project.totalArea}</span>
                </div>
                <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl">
                  <span className="text-[11px] text-[#6F6A61] block">Plot Dimensions</span>
                  <span className="text-sm font-bold text-[#25231F] mt-0.5 block">{project.plotSizes}</span>
                </div>
                <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl">
                  <span className="text-[11px] text-[#6F6A61] block">Road Widths</span>
                  <span className="text-sm font-bold text-[#25231F] mt-0.5 block">{project.roadWidths}</span>
                </div>
                <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl">
                  <span className="text-[11px] text-[#6F6A61] block">Approval / Authority</span>
                  <span className="text-sm font-bold text-[#B89452] mt-0.5 block">{project.approvals}</span>
                </div>
              </div>

              <div className="p-5 bg-[#F7F4EE] border border-[#DDD4C5] text-xs text-[#6F6A61] space-y-2 rounded-2xl">
                <div className="font-bold text-[#B89452] uppercase tracking-wider">Infrastructure Standards:</div>
                <div>• Underground electrical cabling with feeder pillars</div>
                <div>• Centralized overhead water storage with dedicated supply lines</div>
                <div>• Heavy-duty blacktop bitumen roads with concrete curbing</div>
                <div>• Rainwater harvesting recharge pits along road perimeters</div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#F7F4EE] border-t border-[#DDD4C5] flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <a
            href={getProjectWhatsAppLink(project.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#128C7E] hover:underline font-semibold"
          >
            Chat on WhatsApp about this project
          </a>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookSiteVisit(project.name);
              }}
              className="gold-button w-full sm:w-auto px-7 py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md cursor-pointer rounded-full text-white"
            >
              <CalendarCheck className="w-4 h-4 text-white" />
              <span>Book VIP Site Visit</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
