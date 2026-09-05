import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Amenities } from '../components/Amenities';
import { LifestyleSection } from '../components/LifestyleSection';

interface AmenitiesPageProps {
  onOpenBookingModal: (projectName?: string) => void;
}

export const AmenitiesPage: React.FC<AmenitiesPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="LIFESTYLE & INFRASTRUCTURE"
        title="World-Class Amenities & Living Standards"
        subtitle="Designed for modern families seeking a balanced blend of peaceful green living, secure gated environs, and world-class civil infrastructure."
        currentPageName="Amenities"
      />

      {/* Primary Infrastructure Amenities Grid */}
      <Amenities onOpenBookingModal={() => onOpenBookingModal()} />

      {/* Gated Community Lifestyle Experience */}
      <LifestyleSection onOpenBookingModal={() => onOpenBookingModal()} />
    </div>
  );
};
