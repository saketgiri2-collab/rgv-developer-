import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { ProjectGallery } from '../components/ProjectGallery';

export const GalleryPage: React.FC = () => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="ACTUAL SITE DEVELOPMENTS"
        title="High-Resolution Photo Gallery"
        subtitle="Explore high-definition drone perspectives, on-ground asphalt blacktop roads, tree-lined avenue plantations, and entrance archways across our townships."
        currentPageName="Gallery"
      />

      <ProjectGallery />
    </div>
  );
};
