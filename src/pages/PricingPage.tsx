import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { PriceInvestment } from '../components/PriceInvestment';

interface PricingPageProps {
  onOpenBookingModal: (projectName?: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onOpenBookingModal }) => {
  return (
    <div className="bg-[#F7F4EE] min-h-screen">
      <PageHeader
        badge="PRICING & FINANCING"
        title="Transparent Pricing & Investment Calculator"
        subtitle="Calculate plot purchase costs, estimated monthly EMIs, and projected 3-5 year capital appreciation with complete price transparency."
        currentPageName="Pricing"
      />

      <PriceInvestment onOpenBookingModal={onOpenBookingModal} />
    </div>
  );
};
