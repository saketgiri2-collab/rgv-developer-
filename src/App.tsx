import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Project } from './types';
import { ScrollToTop } from './components/ScrollToTop';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuickCallBar } from './components/QuickCallBar';
import { LeadModal } from './components/LeadModal';
import { LoginModal } from './components/LoginModal';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';
import { CinematicIntro } from './components/CinematicIntro';
import { RotatingLogoWatermark } from './components/RotatingLogoWatermark';

// Dedicated Page Views
import { HomePage } from './pages/HomePage';
import { ProjectsPage } from './pages/ProjectsPage';
import { LayoutPage } from './pages/LayoutPage';
import { BrochurePage } from './pages/BrochurePage';
import { PricingPage } from './pages/PricingPage';
import { AmenitiesPage } from './pages/AmenitiesPage';
import { LocationPage } from './pages/LocationPage';
import { GalleryPage } from './pages/GalleryPage';
import { WhyRgvPage } from './pages/WhyRgvPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [showIntro, setShowIntro] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingModalProject, setBookingModalProject] = useState<string | undefined>(undefined);
  const [isBrochureModal, setIsBrochureModal] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<Project | null>(null);

  const handleOpenBookingModal = (projectName?: string, isBrochure = false) => {
    setBookingModalProject(projectName);
    setIsBrochureModal(isBrochure);
    setIsBookingModalOpen(true);
  };

  const handleViewProjectDetails = (project: Project) => {
    setSelectedProjectForModal(project);
  };

  return (
    <BrowserRouter>
      {/* Cinematic 2-3s Opening Experience (can be replayed via footer) */}
      {showIntro && (
        <CinematicIntro onComplete={() => setShowIntro(false)} />
      )}

      <div
        className="min-h-screen bg-[#F7F4EE] text-[#25231F] selection:bg-[#B89452] selection:text-white flex flex-col justify-between transition-opacity duration-300 opacity-100 scale-100 blur-0"
      >
        {/* Scroll To Top on Route Change */}
        <ScrollToTop />

        {/* Persistent Rotating Original RGV Logo Background Watermark */}
        <RotatingLogoWatermark />

        {/* Global Navigation Bar */}
        <Navbar
          onOpenBookingModal={handleOpenBookingModal}
          onOpenLoginModal={() => setIsLoginModalOpen(true)}
        />

        {/* Dedicated Route Routing */}
        <main className="grow">
          <Routes>
            {/* 1. HOME → / */}
            <Route
              path="/"
              element={
                <HomePage
                  onOpenBookingModal={handleOpenBookingModal}
                  onViewProjectDetails={handleViewProjectDetails}
                  onReplayIntro={() => setShowIntro(true)}
                />
              }
            />

            {/* 2. PROJECTS → /projects */}
            <Route
              path="/projects"
              element={
                <ProjectsPage
                  onOpenBookingModal={handleOpenBookingModal}
                  onViewProjectDetails={handleViewProjectDetails}
                />
              }
            />

            {/* 3. LAYOUT → /layout */}
            <Route
              path="/layout"
              element={<LayoutPage onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* 4. BROCHURE → /brochure */}
            <Route
              path="/brochure"
              element={<BrochurePage onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* 5. PRICING → /pricing */}
            <Route
              path="/pricing"
              element={<PricingPage onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* 6. AMENITIES → /amenities */}
            <Route
              path="/amenities"
              element={<AmenitiesPage onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* 7. LOCATION → /location */}
            <Route path="/location" element={<LocationPage />} />

            {/* 8. GALLERY → /gallery */}
            <Route path="/gallery" element={<GalleryPage />} />

            {/* 9. WHY RGV → /why-rgv */}
            <Route
              path="/why-rgv"
              element={<WhyRgvPage onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* 10. ABOUT US → /about */}
            <Route
              path="/about"
              element={<AboutPage onOpenBookingModal={handleOpenBookingModal} />}
            />
            <Route path="/about-us" element={<Navigate to="/about" replace />} />

            {/* 11. CONTACT → /contact */}
            <Route
              path="/contact"
              element={<ContactPage onOpenBookingModal={handleOpenBookingModal} />}
            />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Corporate Footer */}
        <Footer
          onOpenLoginModal={() => setIsLoginModalOpen(true)}
          onOpenBookingModal={() => handleOpenBookingModal()}
          onReplayIntro={() => setShowIntro(true)}
        />

        {/* Floating Instant Communication Widgets */}
        <WhatsAppButton />
        <QuickCallBar onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* Global Interactive Modals */}
        <LeadModal
          isOpen={isBookingModalOpen}
          onClose={() => setIsBookingModalOpen(false)}
          initialProject={bookingModalProject}
          isBrochureMode={isBrochureModal}
        />

        <LoginModal
          isOpen={isLoginModalOpen}
          onClose={() => setIsLoginModalOpen(false)}
        />

        {selectedProjectForModal && (
          <ProjectDetailsModal
            project={selectedProjectForModal}
            onClose={() => setSelectedProjectForModal(null)}
            onBookSiteVisit={(projectName) => handleOpenBookingModal(projectName)}
          />
        )}
      </div>
    </BrowserRouter>
  );
}
