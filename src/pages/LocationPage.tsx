import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { LocationSection } from '../components/LocationSection';

export const LocationPage: React.FC = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="STRATEGIC CONNECTIVITY"
        title="Location Advantage & North Bangalore Axis"
        subtitle="Unmatched road and rail connectivity connecting you effortlessly to Rajankunte, Yelahanka, KIADB Aerospace SEZ, and Kempegowda International Airport."
        currentPageName="Location"
      />

      <LocationSection />
    </div>
  );
};
