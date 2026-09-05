import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { siteConfig } from '../config/siteConfig';
import { ShieldCheck, FileCheck2, Award, Users, CheckCircle2, Building, MapPin, CalendarCheck } from 'lucide-react';

interface AboutPageProps {
  onOpenBookingModal: (projectName?: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="OUR HERITAGE & VISION"
        title="About RGV Developers"
        subtitle="Sri Raghavendra Swamy Developers Pvt. Ltd. — Building master-planned communities, delivering clear land titles, and fostering lasting prosperity since 2016."
        currentPageName="About Us"
      />

      {/* Main Brand Narrative */}
      <section className="py-20 bg-white border-b border-[#DDD4C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F7F4EE] border border-[#B89452]/40 shadow-xs">
                <span className="w-1.5 h-1.5 bg-[#B89452]" />
                <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                  OUR STORY & PHILOSOPHY
                </span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#25231F] tracking-tight">
                Transforming Strategic Land Into High-Value Gated Communities
              </h2>

              <div className="space-y-4 text-base text-[#6F6A61] leading-relaxed">
                <p>
                  Founded under the legal corporate entity <strong>Sri Raghavendra Swamy Developers Pvt. Ltd.</strong>, RGV Developers has consistently championed integrity, legal transparency, and engineering quality in Bangalore's plotted development landscape.
                </p>
                <p>
                  We believe that land ownership is not merely a financial transaction; it is the cornerstone of generational security and family legacy. Every layout we develop undergoes exhaustive title scrutiny by senior legal counsels, boundary verification, and adherence to planning norms (BMRDA & DPA).
                </p>
                <p>
                  From Rajankunte in Yelahanka Taluk to Doddaballapura, Chikkaballapura, Devanahalli, and Mysore, our projects have created immense value for over 1,000 delighted families and investors.
                </p>
              </div>

              {/* Core Pillars List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  '100% Clear & Marketable Titles',
                  'BMRDA & DPA Planning Approvals',
                  'Rigorous Civil Infrastructure Standards',
                  'Complete Bank Loan Pre-approvals',
                  'Dedicated Post-Purchase Registry Support',
                  'On-Schedule Township Handover',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs font-semibold text-[#25231F]">
                    <CheckCircle2 className="w-4 h-4 text-[#B89452] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Corporate Stats Card */}
            <div className="lg:col-span-5">
              <div className="p-8 bg-[#F7F4EE] border border-[#DDD4C5] space-y-6 shadow-sm">
                <div className="flex items-center gap-4 pb-6 border-b border-[#DDD4C5]">
                  <img
                    src="/rgv-logo.svg"
                    alt="RGV Developers Logo"
                    referrerPolicy="no-referrer"
                    className="w-14 h-14 object-contain rounded-full bg-white border border-[#B89452]/40 p-1 shadow-xs"
                  />
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#25231F]">
                      RGV DEVELOPERS
                    </h3>
                    <p className="text-xs text-[#B89452] font-semibold uppercase tracking-wider">
                      Sri Raghavendra Swamy Developers Pvt. Ltd.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-4 bg-white border border-[#DDD4C5]">
                    <span className="font-display font-bold text-3xl text-[#25231F] block">
                      2016
                    </span>
                    <span className="text-[11px] text-[#6F6A61] uppercase tracking-wider font-medium">
                      Established
                    </span>
                  </div>

                  <div className="p-4 bg-white border border-[#DDD4C5]">
                    <span className="font-display font-bold text-3xl text-[#B89452] block">
                      1000+
                    </span>
                    <span className="text-[11px] text-[#6F6A61] uppercase tracking-wider font-medium">
                      Happy Clients
                    </span>
                  </div>

                  <div className="p-4 bg-white border border-[#DDD4C5]">
                    <span className="font-display font-bold text-3xl text-[#B89452] block">
                      10+
                    </span>
                    <span className="text-[11px] text-[#6F6A61] uppercase tracking-wider font-medium">
                      Townships Delivered
                    </span>
                  </div>

                  <div className="p-4 bg-white border border-[#DDD4C5]">
                    <span className="font-display font-bold text-3xl text-[#25231F] block">
                      100%
                    </span>
                    <span className="text-[11px] text-[#6F6A61] uppercase tracking-wider font-medium">
                      Title Clarity
                    </span>
                  </div>
                </div>

                <div className="p-4 bg-white border border-[#DDD4C5] space-y-2 text-xs text-[#6F6A61]">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#B89452] shrink-0 mt-0.5" />
                    <span>
                      <strong>Headquarters:</strong> No D4-377, Karnataka Housing Board Colony, 407 SFS, 4th Stage, Yelahanka New Town, Bengaluru - 560064
                    </span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookingModal('Corporate Advisory')}
                  className="w-full gold-button py-3.5 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-white" />
                  <span>Connect With Our Leadership</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Delivered Footprint */}
      <section className="py-20 bg-[#F7F4EE] border-b border-[#DDD4C5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              PROVEN TRACK RECORD
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl text-[#25231F] mb-4">
            Our Delivered Footprint Across Karnataka
          </h2>

          <p className="text-sm text-[#6F6A61] max-w-2xl mx-auto mb-12 font-normal">
            A demonstrable history of completed plotted layouts with executed registrations, customer occupancy, and substantial capital appreciation.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                region: 'Doddaballapura Corridor',
                tag: 'Residential Township',
                description: 'Fully developed plotted layout with blacktop roads and complete boundary demarcations.',
              },
              {
                region: 'Chikkaballapura Highway',
                tag: 'Highway Development',
                description: 'Fast-appreciating plotted community near educational institutes and medical colleges.',
              },
              {
                region: 'Mysore Urban Expansion',
                tag: 'Completed Gated Layout',
                description: 'Serene plotted development designed with avenue plantations and water distribution.',
              },
              {
                region: 'Devanahalli Airport Axis',
                tag: 'High-Growth Plotted Enclave',
                description: 'Strategic residential plots close to Kempegowda International Airport and Aerospace SEZ.',
              },
            ].map((col) => (
              <div
                key={col.region}
                className="p-6 bg-white border border-[#DDD4C5] text-left hover:border-[#B89452] transition-all shadow-xs"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#B89452] block mb-2">
                  {col.tag}
                </span>
                <h3 className="font-display font-bold text-lg text-[#25231F] mb-2">
                  {col.region}
                </h3>
                <p className="text-xs text-[#6F6A61] leading-relaxed font-normal">
                  {col.description}
                </p>
                <div className="mt-4 pt-3 border-t border-[#DDD4C5] flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>100% Handed Over & Registered</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
