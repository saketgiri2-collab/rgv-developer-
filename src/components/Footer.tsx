import React from 'react';
import { siteConfig } from '../config/siteConfig';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  ShieldCheck, 
  FileCheck2, 
  ArrowRight
} from 'lucide-react';

interface FooterProps {
  onOpenLoginModal?: () => void;
  onOpenBookingModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenLoginModal, onOpenBookingModal }) => {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#EFE9DE] border-t border-[#DDD4C5] text-[#6F6A61] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top VIP Site Visit Banner */}
        <div className="bg-white border border-[#DDD4C5] rounded-none p-6 sm:p-8 mb-16 shadow-xs flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              Schedule Your VIP Site Tour
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-[#25231F]">
              Experience Our Plotted Communities in Person
            </h3>
            <p className="text-sm text-[#6F6A61] max-w-xl font-normal">
              Complimentary weekend and weekday site visit cab arrangements available directly to New City North and New City.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:7624997854"
              className="px-5 py-3 border border-[#DDD4C5] hover:border-[#B89452] bg-[#F7F4EE] text-xs font-bold tracking-wider text-[#25231F] uppercase flex items-center gap-2 transition-all shadow-xs"
            >
              <Phone className="w-4 h-4 text-[#B89452]" />
              <span>7624997854</span>
            </a>
            {onOpenBookingModal && (
              <button
                onClick={onOpenBookingModal}
                className="gold-button text-white px-6 py-3 text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-md transition-all cursor-pointer"
              >
                <span>Book Free Visit</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            )}
          </div>
        </div>

        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#DDD4C5]">
          
          {/* Brand & Vision (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src="/rgv-logo.svg"
                alt="RGV Developers Official Logo"
                referrerPolicy="no-referrer"
                className="w-12 h-12 object-contain rounded-full bg-white border border-[#B89452]/40 p-0.5 shadow-xs shrink-0"
              />
              <div>
                <span className="font-display font-bold text-xl text-[#25231F] tracking-wider block leading-tight">
                  RGV DEVELOPERS
                </span>
                <span className="text-[9.5px] tracking-[0.2em] text-[#B89452] uppercase font-semibold">
                  Sri Raghavendra Swamy Developers
                </span>
              </div>
            </div>

            <p className="text-sm text-[#6F6A61] leading-relaxed font-normal">
              Building Spaces. Creating Futures. Premium master-planned plotted townships, gated villa communities, and high-growth real estate assets engineered for long-term appreciation.
            </p>

            <div className="pt-2 flex flex-col gap-2 text-xs text-[#25231F]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#B89452] shrink-0" />
                <span>BMRDA & DPA Planning Compliance Standards</span>
              </div>
              <div className="flex items-center gap-2">
                <FileCheck2 className="w-4 h-4 text-[#B89452] shrink-0" />
                <span>100% Transparent Legal Titles & Survey Documentation</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#B89452] uppercase border-b border-[#DDD4C5] pb-2">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-[#6F6A61]">
              <li><a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="hover:text-[#B89452] transition-colors">Home</a></li>
              <li><a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="hover:text-[#B89452] transition-colors">Projects</a></li>
              <li><a href="#layout" onClick={(e) => handleNavClick(e, '#layout')} className="hover:text-[#B89452] transition-colors">Master Layout</a></li>
              <li><a href="#brochure" onClick={(e) => handleNavClick(e, '#brochure')} className="hover:text-[#B89452] transition-colors">Project Brochure</a></li>
              <li><a href="#investment" onClick={(e) => handleNavClick(e, '#investment')} className="hover:text-[#B89452] transition-colors">Pricing & EMI</a></li>
              <li><a href="#amenities" onClick={(e) => handleNavClick(e, '#amenities')} className="hover:text-[#B89452] transition-colors">Amenities</a></li>
              <li><a href="#gallery" onClick={(e) => handleNavClick(e, '#gallery')} className="hover:text-[#B89452] transition-colors">Photo Gallery</a></li>
              <li><a href="#location" onClick={(e) => handleNavClick(e, '#location')} className="hover:text-[#B89452] transition-colors">Location & Axis</a></li>
              <li><a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="hover:text-[#B89452] transition-colors">Why RGV</a></li>
              <li><a href="#about" onClick={(e) => handleNavClick(e, '#about')} className="hover:text-[#B89452] transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Featured Projects (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#B89452] uppercase border-b border-[#DDD4C5] pb-2">
              Our Townships
            </h4>
            <div className="space-y-3 text-xs">
              <div className="p-3 bg-white border border-[#DDD4C5] shadow-xs">
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="font-bold text-sm text-[#25231F] hover:text-[#B89452] block">
                  New City North
                </a>
                <span className="text-[#6F6A61] block text-[11px]">Near Rajankunte, Yelahanka Taluk</span>
                <span className="text-[#B89452] font-bold block mt-1">₹1,799 / sq.ft. • BMRDA Approval Awaited</span>
              </div>

              <div className="p-3 bg-white border border-[#DDD4C5] shadow-xs">
                <a href="#projects" onClick={(e) => handleNavClick(e, '#projects')} className="font-bold text-sm text-[#25231F] hover:text-[#B89452] block">
                  New City
                </a>
                <span className="text-[#6F6A61] block text-[11px]">Doddaballapura Highway Corridor</span>
                <span className="text-[#B89452] font-bold block mt-1">₹1,199 / sq.ft. • DPA (Doddaballapura)</span>
              </div>

              <div className="text-[11px] text-[#6F6A61] pt-1">
                Completed: Doddaballapura • Chikkaballapura • Mysore • Devanahalli
              </div>
            </div>
          </div>

          {/* Contact Details (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold tracking-[0.2em] text-[#B89452] uppercase border-b border-[#DDD4C5] pb-2">
              Corporate Office
            </h4>
            
            <div className="space-y-2.5 text-xs text-[#6F6A61]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#B89452] shrink-0 mt-0.5" />
                <span>
                  No D4-377, Karnataka Housing Board Colony, 407 SFS, 4th Stage, Yelahanka New Town, Bengaluru - 560064
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#B89452] shrink-0" />
                <a href="tel:7624997854" className="font-semibold text-[#25231F] hover:text-[#B89452]">
                  +91 7624997854
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#B89452] shrink-0" />
                <a href="mailto:NewcityNorth62@gmail.com" className="hover:text-[#B89452] truncate">
                  NewcityNorth62@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#B89452] shrink-0" />
                <span>Mon – Sun: 9:00 AM – 7:30 PM (Visits 7 Days)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Regulatory Disclaimer */}
        <div className="py-6 border-b border-[#DDD4C5] text-[11px] text-[#6F6A61]/75 leading-relaxed">
          <p>{siteConfig.disclaimer}</p>
        </div>

        {/* Bottom Copyright & Portal Link */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#6F6A61]">
          <div>
            © {currentYear} {siteConfig.company.name}. All Rights Reserved.
          </div>

          <div className="flex items-center gap-5 flex-wrap">
            {onOpenLoginModal && (
              <button 
                onClick={onOpenLoginModal} 
                className="hover:text-[#B89452] text-[#25231F] font-semibold cursor-pointer"
              >
                Member / Investor Portal Login
              </button>
            )}
            <a href="#visit" onClick={(e) => handleNavClick(e, '#visit')} className="hover:text-[#B89452]">Schedule Visit</a>
            <a href="#why-us" onClick={(e) => handleNavClick(e, '#why-us')} className="hover:text-[#B89452]">Trust & Compliance</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
