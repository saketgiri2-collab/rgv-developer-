import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Highlights } from './components/Highlights';
import { FeaturedProject } from './components/FeaturedProject';
import { ProjectsSection } from './components/ProjectsSection';
import { PriceInvestment } from './components/PriceInvestment';
import { Amenities } from './components/Amenities';
import { LayoutSection } from './components/LayoutSection';
import { BrochureSection } from './components/BrochureSection';
import { LocationSection } from './components/LocationSection';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectGallery } from './components/ProjectGallery';
import { LifestyleSection } from './components/LifestyleSection';
import { BrandIntro } from './components/BrandIntro';
import { SiteVisitForm } from './components/SiteVisitForm';
import { LeadCTA } from './components/LeadCTA';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { QuickCallBar } from './components/QuickCallBar';
import { LeadModal } from './components/LeadModal';
import { LoginModal } from './components/LoginModal';
import { ProjectDetailsModal } from './components/ProjectDetailsModal';

export default function App() {
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

  const handleScrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewProjectDetails = (project: Project) => {
    setSelectedProjectForModal(project);
  };

  return (
    <div className="min-h-screen bg-[#F7F4EE] text-[#25231F] selection:bg-[#B89452] selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenBookingModal={handleOpenBookingModal}
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBookingModal={() => handleOpenBookingModal()}
          onExploreProjects={handleScrollToProjects}
        />

        {/* 2. Key Metrics & Highlights */}
        <Highlights />

        {/* 3. Featured Flagship Project */}
        <FeaturedProject
          onOpenBookingModal={handleOpenBookingModal}
          onViewProjectDetails={handleViewProjectDetails}
        />

        {/* 4. Complete Townships & Projects Directory */}
        <ProjectsSection
          onOpenBookingModal={handleOpenBookingModal}
          onViewProjectDetails={handleViewProjectDetails}
        />

        {/* 5. Pricing & Investment Calculator */}
        <PriceInvestment onOpenBookingModal={handleOpenBookingModal} />

        {/* 6. World-Class Amenities */}
        <Amenities onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 7. Interactive Master Layout Blueprint */}
        <LayoutSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 8. Interactive Multi-Page Brochure Viewer */}
        <BrochureSection onOpenBookingModal={handleOpenBookingModal} />

        {/* 9. Strategic Connectivity & Location Map */}
        <LocationSection />

        {/* 10. Why Choose RGV Developers (Trust Factors) */}
        <WhyChooseUs onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 11. High-Resolution Project Photo Gallery */}
        <ProjectGallery />

        {/* 12. Gated Community Lifestyle Experience */}
        <LifestyleSection onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 13. Brand Legacy & Company Background */}
        <BrandIntro onOpenBookingModal={() => handleOpenBookingModal()} />

        {/* 14. Comprehensive Site Visit Reservation Section */}
        <section id="visit" className="py-24 relative bg-[#F7F4EE] border-t border-[#DDD4C5]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SiteVisitForm onOpenBookingModal={handleOpenBookingModal} />
          </div>
        </section>

        {/* 15. Final Lead Call-To-Action Banner */}
        <LeadCTA
          onOpenBookingModal={handleOpenBookingModal}
          onOpenBrochureModal={() => handleOpenBookingModal(undefined, true)}
        />
      </main>

      {/* 16. Comprehensive Corporate Footer */}
      <Footer
        onOpenLoginModal={() => setIsLoginModalOpen(true)}
        onOpenBookingModal={() => handleOpenBookingModal()}
      />

      {/* Floating Instant Communication Widgets */}
      <WhatsAppButton />
      <QuickCallBar onOpenBookingModal={() => handleOpenBookingModal()} />

      {/* Interactive Modals */}
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
  );
}
