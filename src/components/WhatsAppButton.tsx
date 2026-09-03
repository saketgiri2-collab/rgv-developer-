import React, { useState } from 'react';
import { getWhatsAppLink } from '../services/leadService';
import { MessageCircle } from 'lucide-react';

export const WhatsAppButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip on Desktop */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3.5 py-2 bg-white border border-[#DDD4C5] shadow-md transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-3 pointer-events-none'
        }`}
      >
        <div className="w-2 h-2 rounded-full bg-[#25d366] animate-pulse" />
        <span className="text-xs font-semibold text-[#25231F] whitespace-nowrap">
          Chat with RGV on WhatsApp: 7624997854
        </span>
      </div>

      {/* Floating Action Button */}
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#25d366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-2xl whatsapp-pulse transition-transform hover:scale-105 cursor-pointer rounded-full border-2 border-white/80"
        aria-label="Chat with RGV Developers on WhatsApp"
        id="floating-whatsapp-btn"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-white text-transparent" />
      </a>
    </aside>
  );
};
