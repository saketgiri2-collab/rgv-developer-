import React from 'react';
import { getWhatsAppLink } from '../services/leadService';
import { Phone, CalendarCheck, MessageCircle } from 'lucide-react';

interface QuickCallBarProps {
  onOpenBookingModal: () => void;
}

export const QuickCallBar: React.FC<QuickCallBarProps> = ({ onOpenBookingModal }) => {
  return (
    <aside aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-[#F7F4EE]/95 backdrop-blur-md border-t border-[#DDD4C5] px-3 py-2 shadow-lg flex items-center justify-between gap-2">
      {/* Call Button */}
      <a
        href="tel:7624997854"
        className="flex-1 py-2.5 bg-white border border-[#DDD4C5] text-[#25231F] flex items-center justify-center gap-1.5 text-xs font-semibold rounded-none hover:border-[#B89452] shadow-xs"
        id="mobile-quick-call"
      >
        <Phone className="w-3.5 h-3.5 text-[#B89452]" />
        <span>Call</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-1 py-2.5 bg-[#25d366]/10 border border-[#25d366]/30 text-[#128C7E] flex items-center justify-center gap-1.5 text-xs font-semibold rounded-none shadow-xs"
        id="mobile-quick-whatsapp"
      >
        <MessageCircle className="w-3.5 h-3.5 text-[#128C7E]" />
        <span>WhatsApp</span>
      </a>

      {/* Site Visit CTA */}
      <button
        onClick={onOpenBookingModal}
        className="flex-1.5 gold-button text-white py-2.5 px-2 text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md rounded-none cursor-pointer"
        id="mobile-quick-book"
      >
        <CalendarCheck className="w-3.5 h-3.5 text-white" />
        <span>Book Visit</span>
      </button>
    </aside>
  );
};
