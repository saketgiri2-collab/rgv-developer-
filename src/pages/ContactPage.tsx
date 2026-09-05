import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { SiteVisitForm } from '../components/SiteVisitForm';
import { siteConfig } from '../config/siteConfig';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageSquare,
  ShieldCheck,
  CalendarCheck,
  Building,
} from 'lucide-react';

interface ContactPageProps {
  onOpenBookingModal: (projectName?: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="GET IN TOUCH"
        title="Contact Us & Schedule Your VIP Site Visit"
        subtitle="Speak directly with our senior property advisors or schedule a complimentary private AC cab site visit to New City North or New City."
        currentPageName="Contact"
      />

      {/* Main Contact & Form Section */}
      <section className="py-20 bg-[#F7F4EE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Left Column: Contact Cards & Office Details */}
            <div className="lg:col-span-4 space-y-6">
              {/* Official Office Details Card */}
              <div className="p-8 bg-white border border-[#DDD4C5] shadow-sm space-y-6">
                <div className="flex items-center gap-3 pb-4 border-b border-[#DDD4C5]">
                  <img
                    src="/rgv-logo.svg"
                    alt="RGV Developers Logo"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 object-contain rounded-full bg-white border border-[#B89452]/40 p-0.5 shadow-xs"
                  />
                  <div>
                    <h3 className="font-display font-bold text-lg text-[#25231F]">
                      RGV Developers
                    </h3>
                    <p className="text-xs text-[#B89452] font-semibold uppercase tracking-wider">
                      Sri Raghavendra Swamy Developers
                    </p>
                  </div>
                </div>

                <div className="space-y-4 text-sm text-[#6F6A61]">
                  {/* Address */}
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-[#B89452] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#25231F] block mb-0.5">
                        Corporate Headquarters
                      </span>
                      <p className="leading-relaxed">
                        No D4-377, Karnataka Housing Board Colony, 407 SFS, 4th Stage, Yelahanka New Town, Bengaluru - 560064
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 text-[#B89452] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#25231F] block mb-0.5">
                        Direct Sales & Inquiry Line
                      </span>
                      <a
                        href="tel:7624997854"
                        className="text-[#25231F] font-bold hover:text-[#B89452] transition-colors"
                      >
                        +91 7624997854
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 text-[#B89452] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#25231F] block mb-0.5">
                        Official Project Email
                      </span>
                      <a
                        href="mailto:NewcityNorth62@gmail.com"
                        className="text-[#25231F] font-medium hover:text-[#B89452] transition-colors break-all"
                      >
                        NewcityNorth62@gmail.com
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#B89452] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#25231F] block mb-0.5">
                        Operational Hours
                      </span>
                      <p>Mon – Sun: 9:00 AM – 7:30 PM</p>
                      <p className="text-xs text-[#B89452] font-semibold mt-1">
                        Guided Site Visits Arranged 7 Days a Week
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick WhatsApp Action */}
                <div className="pt-2">
                  <a
                    href="https://wa.me/917624997854?text=Hello%20RGV%20Developers,%20I%20would%20like%20to%20inquire%20about%20your%20villa%20plots."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Trust Badge Card */}
              <div className="p-6 bg-white border border-[#DDD4C5] space-y-3 text-xs text-[#6F6A61] shadow-xs">
                <div className="flex items-center gap-2 text-[#25231F] font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4 text-[#B89452]" />
                  <span>VIP Site Visit Guarantee</span>
                </div>
                <p className="leading-relaxed">
                  Every site visit includes a dedicated vehicle pickup from your doorstep or nearest metro station, guided layout tour, and zero pressure consultation.
                </p>
              </div>
            </div>

            {/* Right Column: Full Site Visit Reservation Form */}
            <div className="lg:col-span-8">
              <div className="bg-white border border-[#DDD4C5] p-6 sm:p-10 shadow-sm">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#F7F4EE] border border-[#B89452]/30 mb-3 shadow-xs">
                    <span className="w-1.5 h-1.5 bg-[#B89452]" />
                    <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                      RESERVATION FORM
                    </span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#25231F]">
                    Book Your Site Visit or Request Callback
                  </h2>
                  <p className="text-sm text-[#6F6A61] mt-1 font-normal">
                    Fill in your details below. Our property coordinator will confirm your preferred time slot and pickup arrangements within 15 minutes.
                  </p>
                </div>

                <SiteVisitForm onOpenBookingModal={onOpenBookingModal} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
