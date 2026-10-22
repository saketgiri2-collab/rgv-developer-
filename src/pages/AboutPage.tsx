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
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=375%2C+Attur+Layout%2C+Yelahanka+New+Town%2C+Bengaluru%2C+Karnataka+560064"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#B89452] transition-colors leading-relaxed"
                      title="View Headquarters on Google Maps"
                    >
                      <strong>Headquarters:</strong> 375, Attur Layout, Yelahanka New Town, Bengaluru, Karnataka 560064, India.
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => {
                    const leadershipSection = document.getElementById('leadership');
                    if (leadershipSection) {
                      leadershipSection.scrollIntoView({ behavior: 'smooth' });
                    } else {
                      onOpenBookingModal('Corporate Advisory');
                    }
                  }}
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

      {/* Leadership Section */}
      <section id="leadership" className="py-20 bg-[#F7F4EE] border-b border-[#DDD4C5] scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-3 shadow-xs">
              <span className="w-1.5 h-1.5 bg-[#B89452]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                EXECUTIVE STEWARDSHIP
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-[#25231F] tracking-tight">
              Our Leadership
            </h2>
            <p className="text-sm sm:text-base text-[#6F6A61] mt-3 leading-relaxed">
              Guided by a steadfast commitment to legal title integrity, master-planned infrastructure, and long-term investor prosperity across Karnataka.
            </p>
          </div>

          {/* Side-by-Side Leadership Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Owner 1: Nikhil */}
            <div className="bg-white border border-[#DDD4C5] p-8 sm:p-10 shadow-xs hover:border-[#B89452] transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                {/* Header with Monogram Crest */}
                <div className="flex items-center gap-5 pb-6 border-b border-[#DDD4C5]">
                  <div className="relative w-20 h-20 rounded-full bg-[#FAF8F5] border-2 border-[#B89452]/50 flex items-center justify-center shrink-0 shadow-xs group-hover:border-[#B89452] transition-colors">
                    <span className="font-display font-bold text-3xl text-[#B89452] tracking-wider select-none">
                      N
                    </span>
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-[#B89452] flex items-center justify-center shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B89452]" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89452] block mb-1">
                      Company Director
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#25231F] tracking-tight">
                      Nikhil
                    </h3>
                    <p className="text-xs font-semibold text-[#6F6A61] mt-1">
                      Owner & Leadership
                    </p>
                  </div>
                </div>

                {/* Description & Affiliation */}
                <div className="pt-6 space-y-4 text-sm text-[#6F6A61] leading-relaxed">
                  <p>
                    Leading RGV Developers with an uncompromising commitment to title transparency, ethical land acquisition, and delivering master-planned communities that create lasting generational value.
                  </p>
                  <p className="text-xs text-[#25231F] font-medium pt-2 border-t border-[#DDD4C5]/60">
                    Sri Raghavendra Swamy Developers Pvt. Ltd.
                  </p>
                </div>

                {/* Key Focus Points */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#6F6A61]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89452]" />
                    <span className="font-medium text-[#25231F]">Land Strategy</span>
                  </div>
                  <span className="text-[#DDD4C5]">·</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89452]" />
                    <span className="font-medium text-[#25231F]">Legal Compliance</span>
                  </div>
                  <span className="text-[#DDD4C5]">·</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89452]" />
                    <span className="font-medium text-[#25231F]">Investor Trust</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#DDD4C5]">
                <button
                  onClick={() => onOpenBookingModal('Leadership Consultation - Nikhil')}
                  className="w-full py-3 px-4 bg-[#F7F4EE] hover:bg-[#B89452] text-[#25231F] hover:text-white border border-[#DDD4C5] hover:border-[#B89452] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Request Advisory Session</span>
                </button>
              </div>
            </div>

            {/* Owner 2: Kiran */}
            <div className="bg-white border border-[#DDD4C5] p-8 sm:p-10 shadow-xs hover:border-[#B89452] transition-all duration-300 relative group flex flex-col justify-between">
              <div>
                {/* Header with Monogram Crest */}
                <div className="flex items-center gap-5 pb-6 border-b border-[#DDD4C5]">
                  <div className="relative w-20 h-20 rounded-full bg-[#FAF8F5] border-2 border-[#B89452]/50 flex items-center justify-center shrink-0 shadow-xs group-hover:border-[#B89452] transition-colors">
                    <span className="font-display font-bold text-3xl text-[#B89452] tracking-wider select-none">
                      K
                    </span>
                    <span className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white border border-[#B89452] flex items-center justify-center shadow-xs">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#B89452]" />
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#B89452] block mb-1">
                      Company Director
                    </span>
                    <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#25231F] tracking-tight">
                      Kiran
                    </h3>
                    <p className="text-xs font-semibold text-[#6F6A61] mt-1">
                      Owner & Leadership
                    </p>
                  </div>
                </div>

                {/* Description & Affiliation */}
                <div className="pt-6 space-y-4 text-sm text-[#6F6A61] leading-relaxed">
                  <p>
                    Overseeing township execution with rigorous civil standards, planning authority compliance (BMRDA & DPA), and a customer-first approach to project handovers and title registrations.
                  </p>
                  <p className="text-xs text-[#25231F] font-medium pt-2 border-t border-[#DDD4C5]/60">
                    Sri Raghavendra Swamy Developers Pvt. Ltd.
                  </p>
                </div>

                {/* Key Focus Points */}
                <div className="pt-4 flex flex-wrap items-center gap-3 text-xs text-[#6F6A61]">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89452]" />
                    <span className="font-medium text-[#25231F]">Township Delivery</span>
                  </div>
                  <span className="text-[#DDD4C5]">·</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89452]" />
                    <span className="font-medium text-[#25231F]">Infrastructure</span>
                  </div>
                  <span className="text-[#DDD4C5]">·</span>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B89452]" />
                    <span className="font-medium text-[#25231F]">Customer Care</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#DDD4C5]">
                <button
                  onClick={() => onOpenBookingModal('Leadership Consultation - Kiran')}
                  className="w-full py-3 px-4 bg-[#F7F4EE] hover:bg-[#B89452] text-[#25231F] hover:text-white border border-[#DDD4C5] hover:border-[#B89452] text-xs font-bold uppercase tracking-wider transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-2xs"
                >
                  <CalendarCheck className="w-3.5 h-3.5" />
                  <span>Request Advisory Session</span>
                </button>
              </div>
            </div>
          </div>

          {/* Shared Leadership Commitment Card */}
          <div className="mt-12 max-w-4xl mx-auto p-6 sm:p-8 bg-white border border-[#DDD4C5] shadow-xs">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-1.5">
                <span className="text-[11px] font-bold text-[#B89452] uppercase tracking-[0.2em]">
                  DIRECT INVESTOR ADVISORY
                </span>
                <h4 className="font-display font-bold text-lg text-[#25231F]">
                  Connect Directly With Nikhil &amp; Kiran
                </h4>
                <p className="text-xs text-[#6F6A61] max-w-xl leading-relaxed">
                  Whether exploring multi-plot acquisitions, portfolio diversification, or title verification for family legacies, our leadership team provides direct, confidential guidance.
                </p>
              </div>
              <button
                onClick={() => onOpenBookingModal('Leadership Advisory Consultation')}
                className="gold-button py-3.5 px-6 text-white text-xs font-bold uppercase tracking-widest flex items-center gap-2 shrink-0 shadow-md cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>Book Direct Consultation</span>
              </button>
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
