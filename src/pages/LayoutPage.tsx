import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { LayoutSection } from '../components/LayoutSection';

interface LayoutPageProps {
  onOpenBookingModal: (projectName?: string) => void;
}

export const LayoutPage: React.FC<LayoutPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="ARCHITECTURAL BLUEPRINT"
        title="Master Layout Plans & Plot Dimensions"
        subtitle="Explore detailed engineering layouts, avenue road alignments, dedicated green zones, and standardized plot dimensions (30x40, 30x50, and premium corner plots)."
        currentPageName="Layout"
      />

      <LayoutSection onOpenBookingModal={onOpenBookingModal} />
    </div>
  );
};
