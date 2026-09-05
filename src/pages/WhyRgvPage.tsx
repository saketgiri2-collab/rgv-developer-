import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { WhyChooseUs } from '../components/WhyChooseUs';
import { InvestmentBenefits } from '../components/InvestmentBenefits';

interface WhyRgvPageProps {
  onOpenBookingModal: (projectName?: string) => void;
}

export const WhyRgvPage: React.FC<WhyRgvPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="TRUST & CREDIBILITY"
        title="Why Choose RGV Developers"
        subtitle="Uncompromising legal verification, clear titles, high civil engineering execution, and customer-first values that have earned the loyalty of 1000+ homeowners."
        currentPageName="Why RGV"
      />

      {/* Core Trust Pillars */}
      <WhyChooseUs onOpenBookingModal={() => onOpenBookingModal()} />

      {/* Investment Value Drivers */}
      <InvestmentBenefits onOpenBookingModal={onOpenBookingModal} />
    </div>
  );
};
