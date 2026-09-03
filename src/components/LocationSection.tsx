import React, { useState } from 'react';
import { siteConfig } from '../config/siteConfig';
import {
  MapPin,
  Navigation,
  ExternalLink,
  Plane,
  Building,
  GraduationCap,
  HeartPulse,
  Clock,
  Compass,
  Sparkles,
} from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Plane: <Plane className="w-5 h-5 text-[#B89452]" />,
    Building: <Building className="w-5 h-5 text-[#B89452]" />,
    GraduationCap: <GraduationCap className="w-5 h-5 text-[#B89452]" />,
    HeartPulse: <HeartPulse className="w-5 h-5 text-[#B89452]" />,
  };

  const currentCategory = siteConfig.location.landmarkCategories[activeTab];

  return (
    <section id="location" className="py-24 relative bg-[#F7F4EE] border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-3 rounded-none shadow-xs">
            <span className="w-1.5 h-1.5 bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              {siteConfig.location.badge}
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight mb-4">
            {siteConfig.location.title}
          </h2>

          <p className="text-[#6F6A61] text-sm sm:text-base font-normal">
            {siteConfig.location.description}
          </p>
        </div>

        {/* 2-Column Location Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Proximity Tabs & Landmarks */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            {/* Category Navigation Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 bg-[#EFE9DE] border border-[#DDD4C5] rounded-none">
              {siteConfig.location.landmarkCategories.map((cat, idx) => (
                <button
                  key={cat.category}
                  onClick={() => setActiveTab(idx)}
                  className={`p-2.5 text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer rounded-none ${
                    activeTab === idx
                      ? 'bg-white border border-[#B89452] text-[#25231F] shadow-xs'
                      : 'text-[#6F6A61] hover:text-[#25231F]'
                  }`}
                >
                  <div className="shrink-0">{iconMap[cat.icon]}</div>
                  <span className="truncate w-full text-center text-[11px]">{cat.category}</span>
                </button>
              ))}
            </div>

            {/* Landmark List Cards */}
            <div className="bg-white border border-[#DDD4C5] p-6 flex-1 flex flex-col justify-between rounded-none shadow-xs">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DDD4C5]">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 bg-[#F7F4EE] flex items-center justify-center border border-[#DDD4C5] rounded-none">
                      {iconMap[currentCategory.icon]}
                    </div>
                    <h3 className="font-display font-bold text-lg text-[#25231F]">
                      {currentCategory.category} Proximity
                    </h3>
                  </div>
                  <span className="text-[11px] text-[#6F6A61]">Drive Time Analysis</span>
                </div>

                <div className="space-y-3">
                  {currentCategory.items.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-between hover:border-[#B89452] transition-colors rounded-none"
                    >
                      <div className="flex items-center gap-3">
                        <MapPin className="w-4 h-4 text-[#B89452] shrink-0" />
                        <span className="text-xs sm:text-sm font-medium text-[#25231F]">
                          {item.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[11px] px-2 py-0.5 bg-white border border-[#DDD4C5] text-[#6F6A61] rounded-none">
                          {item.distance}
                        </span>
                        <span className="text-xs font-bold text-[#B89452] flex items-center gap-1">
                          <Clock className="w-3 h-3 text-[#B89452]" />
                          {item.travelTime}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highway & Transit Note */}
              <div className="mt-6 pt-4 border-t border-[#DDD4C5] flex items-center justify-between text-xs text-[#6F6A61]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-emerald-600 rounded-none" />
                  <span>Signals-free expressway corridor</span>
                </div>
                <a
                  href={siteConfig.location.googleMapsDirectionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B89452] hover:underline flex items-center gap-1 font-semibold uppercase tracking-wider text-[11px]"
                >
                  <span>Open in Maps</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Embedded Map / Google Maps Card */}
          <div className="lg:col-span-6 bg-white border border-[#DDD4C5] flex flex-col justify-between shadow-xs rounded-none">
            <div className="relative h-80 sm:h-96 w-full bg-[#EFE9DE]">
              <iframe
                title="RGV Developers Location Map"
                src={siteConfig.location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
              {/* Map Floating Tag */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-4 py-2.5 border border-[#DDD4C5] shadow-sm max-w-xs rounded-none">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-red-600 rounded-none" />
                  <span className="text-xs font-bold text-[#25231F] uppercase tracking-wider">RGV Developers Site Hub</span>
                </div>
                <p className="text-[11px] text-[#6F6A61] mt-0.5">
                  {siteConfig.location.projectLocationName}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="p-6 bg-[#F7F4EE] flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-[#DDD4C5]">
              <div>
                <h4 className="text-sm font-bold text-[#25231F]">Planning to visit the site?</h4>
                <p className="text-xs text-[#6F6A61]">
                  Complimentary site visit cab pickup available across city hubs.
                </p>
              </div>

              <a
                href={siteConfig.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-button px-6 py-3 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shrink-0 shadow-md cursor-pointer rounded-none"
              >
                <Navigation className="w-4 h-4 text-white" />
                <span>Get Driving Directions</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
