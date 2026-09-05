import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { BrochureSection } from '../components/BrochureSection';

interface BrochurePageProps {
  onOpenBookingModal: (projectName?: string, isBrochure?: boolean) => void;
}

export const BrochurePage: React.FC<BrochurePageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="PROJECT DOCUMENTATION"
        title="Official Project Brochure & Blueprints"
        subtitle="Review full project specifications, approved master layout plans, infrastructural highlights, and route maps for New City North and New City."
        currentPageName="Brochure"
      />

      <BrochureSection onOpenBookingModal={(project) => onOpenBookingModal(project, true)} />
    </div>
  );
};
