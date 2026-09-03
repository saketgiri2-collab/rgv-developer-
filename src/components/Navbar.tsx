import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, CalendarCheck, User, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: (projectName?: string) => void;
  onOpenLoginModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal, onOpenLoginModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = [
        'home',
        'projects',
        'layout',
        'brochure',
        'investment',
        'amenities',
        'location',
        'gallery',
        'why-us',
        'about',
        'visit',
      ];

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Projects', href: '#projects' },
    { name: 'Layout', href: '#layout' },
    { name: 'Brochure', href: '#brochure' },
    { name: 'Pricing', href: '#investment' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Location', href: '#location' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Why RGV', href: '#why-us' },
    { name: 'About', href: '#about' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F4EE]/95 backdrop-blur-md border-b border-[#DDD4C5] py-3 shadow-sm'
          : 'bg-[#F7F4EE]/90 backdrop-blur-sm border-b border-[#DDD4C5]/60 py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Official Uploaded Emblem */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 sm:gap-3 group text-left shrink-0"
            id="nav-brand-logo"
          >
            <img
              src="/rgv-logo.svg"
              alt="RGV Developers Official Logo"
              referrerPolicy="no-referrer"
              className="w-10 h-10 sm:w-11 sm:h-11 object-contain rounded-full bg-white border border-[#DDD4C5] p-0.5 shadow-sm group-hover:border-[#B89452] transition-all"
            />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-[#25231F] group-hover:text-[#B89452] transition-colors leading-tight">
                RGV DEVELOPERS
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#B89452] uppercase block font-medium truncate max-w-[170px] sm:max-w-none">
                Sri Raghavendra Swamy Developers
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-5">
            {navLinks.map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-xs font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                    isActive ? 'text-[#B89452] font-bold' : 'text-[#25231F]/80 hover:text-[#B89452]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B89452]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Medium Screen Compact Navigation */}
          <nav className="hidden lg:flex xl:hidden items-center gap-3">
            {navLinks.slice(0, 6).map((link) => {
              const targetId = link.href.replace('#', '');
              const isActive = activeSection === targetId;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`text-[11px] font-semibold tracking-wider uppercase transition-colors ${
                    isActive ? 'text-[#B89452] font-bold' : 'text-[#25231F]/70 hover:text-[#B89452]'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Direct Phone Link */}
            <a
              href="tel:7624997854"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#25231F] hover:text-[#B89452] px-3 py-2 border border-[#DDD4C5] hover:border-[#B89452] bg-white transition-all"
              id="nav-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#B89452]" />
              <span className="tracking-wide">7624997854</span>
            </a>

            {/* Portal Login Button */}
            {onOpenLoginModal && (
              <button
                onClick={onOpenLoginModal}
                className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-[#6F6A61] hover:text-[#B89452] px-2.5 py-2 transition-colors cursor-pointer"
                title="Member Portal"
              >
                <User className="w-3.5 h-3.5 text-[#6F6A61]" />
                <span>Portal</span>
              </button>
            )}

            {/* Primary CTA */}
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-[#B89452] hover:bg-[#D6BD82] text-white px-4 py-2.5 text-xs font-bold tracking-wider uppercase flex items-center gap-2 shadow-sm transition-all cursor-pointer"
              id="nav-book-visit-btn"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-white" />
              <span>Book Site Visit</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:7624997854"
              className="p-2 bg-white border border-[#DDD4C5] text-[#B89452]"
              title="Call 7624997854"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-[#B89452] text-white text-[11px] px-3 py-1.5 font-bold uppercase cursor-pointer"
            >
              Visit
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#25231F] hover:text-[#B89452] border border-[#DDD4C5] bg-white focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
              id="nav-hamburger-btn"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#B89452]" /> : <Menu className="w-5 h-5 text-[#25231F]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-[#DDD4C5] shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-5 py-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Mobile Header Branding */}
            <div className="flex items-center gap-3 pb-3 border-b border-[#DDD4C5]">
              <img
                src="/rgv-logo.svg"
                alt="RGV Developers Official Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-contain rounded-full bg-white border border-[#DDD4C5] p-0.5 shadow-xs shrink-0"
              />
              <div>
                <span className="font-display font-bold text-sm text-[#25231F] block">
                  RGV DEVELOPERS
                </span>
                <span className="text-[10px] text-[#B89452] uppercase font-semibold">
                  Sri Raghavendra Swamy Developers Pvt. Ltd.
                </span>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="grid grid-cols-1 divide-y divide-[#DDD4C5]/50">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="py-3 px-2 flex items-center justify-between text-sm font-semibold tracking-wide uppercase text-[#25231F]/85 hover:text-[#B89452] transition-colors"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-[#6F6A61]/40" />
                </a>
              ))}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-[#DDD4C5] flex flex-col gap-2.5">
              <a
                href="tel:7624997854"
                className="flex items-center justify-center gap-2 w-full py-3 border border-[#DDD4C5] bg-[#F7F4EE] text-xs font-semibold tracking-wider text-[#25231F]"
              >
                <Phone className="w-4 h-4 text-[#B89452]" />
                <span>Call Now: 7624997854</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="bg-[#B89452] hover:bg-[#D6BD82] text-white w-full py-3.5 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <CalendarCheck className="w-4 h-4 text-white" />
                <span>Book a VIP Site Visit</span>
              </button>

              {onOpenLoginModal && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenLoginModal();
                  }}
                  className="w-full py-2.5 text-center text-xs text-[#6F6A61] hover:text-[#B89452] font-medium"
                >
                  Member / Client Portal Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
