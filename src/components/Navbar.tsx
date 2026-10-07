import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Menu, X, CalendarCheck, User, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenBookingModal: (projectName?: string) => void;
  onOpenLoginModal?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBookingModal, onOpenLoginModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu whenever route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Projects', href: '/projects' },
    { name: 'Layout', href: '/layout' },
    { name: 'Brochure', href: '/brochure' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Amenities', href: '/amenities' },
    { name: 'Location', href: '/location' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Why RGV', href: '/why-rgv' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0d0d10]/95 backdrop-blur-lg border-b border-[#C8A96B]/30 py-2.5 sm:py-3 shadow-2xl'
          : 'bg-[#101012]/45 backdrop-blur-md border-b border-white/10 py-3.5 sm:py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo with Official Uploaded Emblem */}
          <Link
            to="/"
            className="flex items-center gap-2.5 sm:gap-3 group text-left shrink-0"
            id="nav-brand-logo"
          >
            <div className="relative p-0.5 rounded-full bg-gradient-to-b from-[#2a2419] to-[#0c0c0e] border border-[#C8A96B]/40 group-hover:border-[#D8C08A] transition-colors shadow-sm">
              <img
                src="/rgv-logo.svg"
                alt="RGV Developers Official Logo"
                referrerPolicy="no-referrer"
                className="w-9 h-9 sm:w-10 sm:h-10 object-contain rounded-full"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-wider text-[#F7F7F7] group-hover:text-[#D8C08A] transition-colors leading-tight">
                RGV DEVELOPERS
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.2em] text-[#C8A96B] uppercase block font-medium truncate max-w-[170px] sm:max-w-none">
                Sri Raghavendra Swamy Developers
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Full Width on 2XL) */}
          <nav className="hidden 2xl:flex items-center gap-4">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[11px] font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                    isActive ? 'text-[#D8C08A] font-bold' : 'text-[#F7F7F7]/80 hover:text-[#D8C08A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B89452] to-[#D8C08A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Medium/Large Screen Navigation (XL) */}
          <nav className="hidden xl:flex 2xl:hidden items-center gap-3">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[10.5px] font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                    isActive ? 'text-[#D8C08A] font-bold' : 'text-[#F7F7F7]/80 hover:text-[#D8C08A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B89452] to-[#D8C08A]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Compact Tablet Navigation (LG) */}
          <nav className="hidden lg:flex xl:hidden items-center gap-2.5">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = location.pathname === link.href;
              return (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[10px] font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                    isActive ? 'text-[#D8C08A] font-bold' : 'text-[#F7F7F7]/80 hover:text-[#D8C08A]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-[#B89452] to-[#D8C08A]" />
                  )}
                </Link>
              );
            })}
            <Link
              to="/contact"
              className={`text-[10px] font-semibold tracking-wider uppercase transition-colors relative py-1 ${
                location.pathname === '/contact' ? 'text-[#D8C08A] font-bold' : 'text-[#F7F7F7]/80 hover:text-[#D8C08A]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Action CTAs */}
          <div className="hidden md:flex items-center gap-2.5 shrink-0">
            {/* Direct Phone Link */}
            <a
              href="tel:7624997854"
              className="flex items-center gap-1.5 text-xs font-semibold text-[#F7F7F7] hover:text-[#D8C08A] px-2.5 py-2 border border-white/15 hover:border-[#C8A96B] bg-[#18181b]/80 backdrop-blur-md transition-all rounded-none"
              id="nav-call-btn"
            >
              <Phone className="w-3.5 h-3.5 text-[#C8A96B]" />
              <span className="tracking-wide">7624997854</span>
            </a>

            {/* Portal Login Button */}
            {onOpenLoginModal && (
              <button
                onClick={onOpenLoginModal}
                className="hidden lg:flex items-center gap-1.5 text-xs font-medium text-[#DDD4C5]/80 hover:text-[#D8C08A] px-2 py-2 transition-colors cursor-pointer"
                title="Member Portal"
              >
                <User className="w-3.5 h-3.5 text-[#C8A96B]" />
                <span>Portal</span>
              </button>
            )}

            {/* Primary CTA */}
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-gradient-to-r from-[#B89452] via-[#C8A96B] to-[#B89452] hover:from-[#C8A96B] hover:to-[#D8C08A] text-black px-4 py-2 text-xs font-bold tracking-wider uppercase flex items-center gap-1.5 shadow-md hover:shadow-[0_4px_16px_rgba(200,169,107,0.35)] transition-all cursor-pointer rounded-none border border-[#E5D4A6]/60"
              id="nav-book-visit-btn"
            >
              <CalendarCheck className="w-3.5 h-3.5 text-black" />
              <span>Book Visit</span>
            </button>
          </div>

          {/* Mobile Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="tel:7624997854"
              className="p-2 bg-[#18181b]/90 border border-white/15 text-[#D8C08A]"
              title="Call 7624997854"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => onOpenBookingModal()}
              className="bg-gradient-to-r from-[#B89452] to-[#C8A96B] text-black text-[11px] px-3 py-1.5 font-bold uppercase cursor-pointer"
            >
              Visit
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-[#F7F7F7] hover:text-[#D8C08A] border border-white/15 bg-[#18181b]/90 focus:outline-none cursor-pointer"
              aria-label="Toggle menu"
              id="nav-hamburger-btn"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5 text-[#D8C08A]" /> : <Menu className="w-5 h-5 text-[#F7F7F7]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[#101013]/98 backdrop-blur-xl border-b border-[#C8A96B]/30 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-5 py-5 space-y-3 max-h-[85vh] overflow-y-auto">
            {/* Mobile Header Branding */}
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <img
                src="/rgv-logo.svg"
                alt="RGV Developers Official Logo"
                referrerPolicy="no-referrer"
                className="w-10 h-10 object-contain rounded-full bg-black/40 border border-[#C8A96B]/50 p-0.5 shadow-xs shrink-0"
              />
              <div>
                <span className="font-display font-bold text-sm text-[#F7F7F7] block">
                  RGV DEVELOPERS
                </span>
                <span className="text-[10px] text-[#C8A96B] uppercase font-semibold">
                  Sri Raghavendra Swamy Developers Pvt. Ltd.
                </span>
              </div>
            </div>

            {/* Mobile Nav Links - All Separate Pages */}
            <div className="grid grid-cols-1 divide-y divide-white/5">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`py-2.5 px-2 flex items-center justify-between text-sm font-semibold tracking-wide uppercase transition-colors ${
                      isActive ? 'text-[#D8C08A] font-bold bg-[#18181d]' : 'text-[#F7F7F7]/85 hover:text-[#D8C08A]'
                    }`}
                  >
                    <span>{link.name}</span>
                    <ChevronRight className="w-4 h-4 text-[#C8A96B]/50" />
                  </Link>
                );
              })}
            </div>

            {/* Mobile Action Buttons */}
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2.5">
              <a
                href="tel:7624997854"
                className="flex items-center justify-center gap-2 w-full py-3 border border-white/15 bg-[#18181b] text-xs font-semibold tracking-wider text-[#F7F7F7] hover:border-[#C8A96B]"
              >
                <Phone className="w-4 h-4 text-[#C8A96B]" />
                <span>Call Now: 7624997854</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="bg-gradient-to-r from-[#B89452] via-[#C8A96B] to-[#B89452] hover:from-[#C8A96B] hover:to-[#D8C08A] text-black w-full py-3.5 text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 shadow-lg cursor-pointer border border-[#E5D4A6]/60"
              >
                <CalendarCheck className="w-4 h-4 text-black" />
                <span>Book a VIP Site Visit</span>
              </button>

              {onOpenLoginModal && (
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onOpenLoginModal();
                  }}
                  className="w-full py-2.5 text-center text-xs text-[#DDD4C5]/80 hover:text-[#D8C08A] font-medium"
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
