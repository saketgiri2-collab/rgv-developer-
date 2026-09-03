import React, { useState, useRef } from 'react';
import { 
  Maximize2, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw, 
  Download, 
  MapPin, 
  Compass, 
  Layers, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Building2,
  Trophy,
  X
} from 'lucide-react';

interface LayoutSectionProps {
  onOpenBookingModal: (projectName?: string) => void;
}

export const LayoutSection: React.FC<LayoutSectionProps> = ({ onOpenBookingModal }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'all' | 'amenities' | 'plots' | 'roads'>('all');
  const [selectedPlotDetail, setSelectedPlotDetail] = useState<string | null>(null);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.3, 3));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.3, 0.8));
  const handleResetZoom = () => setZoomLevel(1);

  const plotDimensions = [
    { label: '30 × 40', metric: '9.14m × 12.19m', sqFt: '1,200 Sq. Ft.', color: '#38bdf8' },
    { label: '30 × 50', metric: '9.14m × 15.24m', sqFt: '1,500 Sq. Ft.', color: '#a855f7' },
    { label: '40 × 60', metric: '12.19m × 18.28m', sqFt: '2,400 Sq. Ft.', color: '#10b981' },
    { label: '50 × 80', metric: '15.24m × 24.38m', sqFt: '4,000 Sq. Ft.', color: '#f59e0b' },
    { label: '80 × 100', metric: '24.38m × 30.48m', sqFt: '8,000 Sq. Ft.', color: '#ec4899' },
  ];

  const layoutFeatures = [
    { name: 'IRR 90M Major Highway Entrance', icon: 'Road' },
    { name: 'Cricket Stadium & Practice Pitch', icon: 'Trophy' },
    { name: 'Club House & Community Center', icon: 'Building' },
    { name: 'Sports Arena, Tennis Court & Gym', icon: 'Dumbbell' },
    { name: 'Landscaped Parks & Green Buffers', icon: 'Trees' },
    { name: 'Dedicated OHT & STP Facilities', icon: 'Droplets' },
  ];

  return (
    <section id="layout" className="py-24 relative bg-[#F7F4EE] border-t border-[#DDD4C5]">
      {/* Background Subtle Accents */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#B89452_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-3 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#B89452]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                MASTER PLAN BLUEPRINT
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight">
              Township Master Layout
            </h2>
            <p className="text-[#6F6A61] text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Architecturally planned 50+ acre township featuring 460+ plotted units, full-size cricket stadium, sports complex, wide avenue roads, and landscaped recreation parks.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="px-4 py-2.5 bg-white hover:bg-[#EFE9DE] border border-[#DDD4C5] text-xs font-semibold uppercase tracking-wider text-[#25231F] flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <Maximize2 className="w-4 h-4 text-[#B89452]" />
              <span>Full Screen View</span>
            </button>
            <button
              onClick={() => onOpenBookingModal('Layout Plot Selection')}
              className="gold-button px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <span>Enquire Available Plots</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Dimension & Legend Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {plotDimensions.map((dim, idx) => (
            <div 
              key={idx} 
              className="p-3.5 bg-white border border-[#DDD4C5] shadow-xs flex flex-col justify-between hover:border-[#B89452] transition-all"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-bold text-[#25231F] tracking-wide">{dim.label}</span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: dim.color }} />
              </div>
              <div className="text-[11px] text-[#B89452] font-medium">{dim.sqFt}</div>
              <div className="text-[10px] text-[#6F6A61] font-normal mt-0.5">{dim.metric}</div>
            </div>
          ))}
        </div>

        {/* Main Layout Viewer Card */}
        <div className="bg-white border border-[#DDD4C5] shadow-xs overflow-hidden relative">
          {/* Viewer Toolbar */}
          <div className="p-4 bg-[#EFE9DE] border-b border-[#DDD4C5] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-emerald-600 rounded-full animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#25231F]">
                New City North Master Layout Map
              </span>
              <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 bg-white border border-[#DDD4C5] text-[#6F6A61]">
                Plots #1 to #461
              </span>
            </div>

            {/* Zoom Controls */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleZoomIn}
                className="p-2 bg-white hover:bg-[#F7F4EE] border border-[#DDD4C5] text-[#6F6A61] hover:text-[#25231F] transition-all cursor-pointer shadow-xs"
                title="Zoom In"
              >
                <ZoomIn className="w-4 h-4" />
              </button>
              <button
                onClick={handleZoomOut}
                className="p-2 bg-white hover:bg-[#F7F4EE] border border-[#DDD4C5] text-[#6F6A61] hover:text-[#25231F] transition-all cursor-pointer shadow-xs"
                title="Zoom Out"
              >
                <ZoomOut className="w-4 h-4" />
              </button>
              <button
                onClick={handleResetZoom}
                className="p-2 bg-white hover:bg-[#F7F4EE] border border-[#DDD4C5] text-[#6F6A61] hover:text-[#25231F] transition-all cursor-pointer text-xs font-semibold px-3 shadow-xs"
                title="Reset Zoom"
              >
                <RotateCcw className="w-3.5 h-3.5 inline mr-1" />
                <span>{Math.round(zoomLevel * 100)}%</span>
              </button>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="p-2 bg-white hover:bg-[#F7F4EE] border border-[#DDD4C5] text-[#B89452] transition-all cursor-pointer shadow-xs"
                title="Open Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Interactive Layout Canvas Container */}
          <div className="relative overflow-auto p-4 sm:p-8 bg-[#F7F4EE] flex items-center justify-center min-h-[550px] max-h-[750px]">
            <div 
              style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center center', transition: 'transform 0.2s ease-out' }}
              className="cursor-grab active:cursor-grabbing w-full max-w-4xl"
              onClick={() => setIsLightboxOpen(true)}
            >
              {/* High Fidelity Master Layout Vector Rendering */}
              <div className="bg-[#FAF7F0] text-slate-900 p-6 sm:p-10 rounded shadow-sm border-2 border-[#B89452]/40 relative select-none">
                {/* Master Plan Header Banner */}
                <div className="flex items-center justify-between border-b-2 border-slate-300 pb-4 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#0E1118] border-2 border-[#C5A059] flex items-center justify-center font-bold text-[#DFBF7A]">
                      RGV
                    </div>
                    <div>
                      <h3 className="font-display font-black text-xl sm:text-2xl text-[#0E1118] tracking-wider uppercase">
                        New City North — Master Layout
                      </h3>
                      <p className="text-xs text-slate-600 font-medium tracking-wide">
                        Near Rajankunte, Yelahanka Taluk, Bengaluru • 50+ Acres Master Township
                      </p>
                    </div>
                  </div>

                  {/* Compass North Arrow */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 border-2 border-red-600 rounded-full flex items-center justify-center relative font-black text-red-600">
                      <span className="text-sm">N</span>
                      <div className="absolute -top-1 w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-8 border-b-red-600" />
                    </div>
                  </div>
                </div>

                {/* Road Infrastructure Top Indicator */}
                <div className="bg-slate-800 text-white p-2.5 text-center text-xs font-bold tracking-widest uppercase mb-4 rounded flex items-center justify-between px-6">
                  <span>← Towards Rajankunte & Yelahanka</span>
                  <span className="text-amber-300 font-black">★ IRR 90 METER PROPOSED RING ROAD CORRIDOR ★</span>
                  <span>Towards Doddaballapura Highway →</span>
                </div>

                {/* Township Core Schematic Grid */}
                <div className="grid grid-cols-12 gap-3 border-2 border-slate-400 p-4 bg-white">
                  {/* Left Sector: Main Entrance & Waiting Lounge */}
                  <div className="col-span-12 md:col-span-3 space-y-3">
                    <div className="p-3 bg-amber-100 border-2 border-amber-400 text-center rounded">
                      <span className="text-[10px] font-black uppercase text-amber-900 block">Grand Entrance Arch</span>
                      <span className="text-xs font-bold text-slate-900">24.38 Ft / 80 Ft Main Avenue</span>
                    </div>

                    <div className="p-3 bg-blue-50 border border-blue-300 text-center rounded">
                      <span className="text-[10px] font-bold text-blue-900 uppercase block">Society Waiting Area</span>
                      <span className="text-xs font-semibold text-blue-800">VIP Lounge & Visitors Parking</span>
                    </div>

                    {/* Plots 1 to 50 Preview */}
                    <div className="p-3 bg-emerald-50 border border-emerald-300 rounded space-y-2">
                      <div className="flex justify-between text-[11px] font-bold text-emerald-900">
                        <span>Plots 1 — 50</span>
                        <span className="px-1.5 py-0.5 bg-emerald-200 text-emerald-950 text-[10px] font-bold">A-Sector</span>
                      </div>
                      <div className="text-[10px] text-slate-600">Sizes: 30×40, 40×60 Villa Plots</div>
                      <div className="grid grid-cols-5 gap-1 text-[9px] font-bold text-center">
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                          <div key={num} className="p-1 bg-white border border-emerald-400 hover:bg-amber-100 cursor-pointer">
                            #{num}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 bg-amber-50 border border-amber-300 rounded">
                      <div className="text-[10px] font-bold uppercase text-amber-900 mb-1">Internal Avenue Roads</div>
                      <div className="text-[10px] text-slate-700 space-y-0.5">
                        <div>• 24.38 Ft Asphalt Main Roads</div>
                        <div>• 18.28 Ft Connecting Roads</div>
                        <div>• 12.19 Ft Internal Crosses</div>
                      </div>
                    </div>
                  </div>

                  {/* Center Sector: Residential Plots 51 to 350 */}
                  <div className="col-span-12 md:col-span-6 space-y-3">
                    <div className="grid grid-cols-2 gap-3">
                      {/* Sub Sector B */}
                      <div className="p-3 bg-slate-50 border border-slate-300 rounded">
                        <div className="flex justify-between text-[11px] font-bold text-slate-800 mb-1">
                          <span>Sector B (Plots 51—200)</span>
                          <span className="text-[9px] text-[#C5A059] font-bold">Standard 30×40</span>
                        </div>
                        <div className="grid grid-cols-6 gap-1 text-[9px] text-center font-bold">
                          {[51, 52, 60, 65, 70, 75, 80, 90, 100, 110, 120, 130].map((n) => (
                            <div key={n} className="p-1 bg-white border border-slate-300 hover:bg-emerald-100 cursor-pointer">
                              #{n}
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Sub Sector C */}
                      <div className="p-3 bg-slate-50 border border-slate-300 rounded">
                        <div className="flex justify-between text-[11px] font-bold text-slate-800 mb-1">
                          <span>Sector C (Plots 201—350)</span>
                          <span className="text-[9px] text-emerald-600 font-bold">Luxury 40×60</span>
                        </div>
                        <div className="grid grid-cols-6 gap-1 text-[9px] text-center font-bold">
                          {[201, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310].map((n) => (
                            <div key={n} className="p-1 bg-white border border-slate-300 hover:bg-emerald-100 cursor-pointer">
                              #{n}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Landscaped Central Parks Banner */}
                    <div className="p-2.5 bg-emerald-600 text-white text-center rounded font-bold text-xs flex items-center justify-center gap-2">
                      <Sparkles className="w-4 h-4 text-amber-300" />
                      <span>CENTRAL LANDSCAPED PARKS, JOGGING TRACK & MEDITATION PLAZA</span>
                    </div>

                    {/* Sector D: Plots 351 to 461 */}
                    <div className="p-3 bg-purple-50 border border-purple-200 rounded">
                      <div className="flex justify-between text-[11px] font-bold text-purple-900 mb-1">
                        <span>Sector D (Plots 351—461)</span>
                        <span className="text-[9px] text-purple-700 font-bold">Estate 50×80 / 80×100</span>
                      </div>
                      <div className="grid grid-cols-8 gap-1 text-[9px] text-center font-bold">
                        {[351, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 455, 458, 459, 460, 461].map((n) => (
                          <div key={n} className="p-1 bg-white border border-purple-300 hover:bg-purple-200 cursor-pointer">
                            #{n}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Sector: World Class Amenities & Sports Hub */}
                  <div className="col-span-12 md:col-span-3 space-y-3">
                    <div className="p-3 bg-emerald-100 border-2 border-emerald-500 rounded text-center">
                      <Trophy className="w-5 h-5 text-emerald-800 mx-auto mb-1" />
                      <span className="text-[11px] font-black uppercase text-emerald-950 block">CRICKET STADIUM</span>
                      <span className="text-[10px] text-emerald-800 font-medium">Full Match Pitch & Pavilion</span>
                    </div>

                    <div className="p-3 bg-blue-100 border-2 border-blue-500 rounded text-center">
                      <Building2 className="w-5 h-5 text-blue-800 mx-auto mb-1" />
                      <span className="text-[11px] font-black uppercase text-blue-950 block">CLUB HOUSE & GYM</span>
                      <span className="text-[10px] text-blue-800 font-medium">Indoor Games, Tennis Court & Pool</span>
                    </div>

                    <div className="p-2.5 bg-slate-100 border border-slate-300 rounded text-center space-y-1">
                      <div className="text-[10px] font-bold text-slate-800 uppercase">Statutory Utilities</div>
                      <div className="flex justify-around text-[10px] font-semibold text-slate-700">
                        <span className="px-2 py-0.5 bg-white border border-slate-300">OHT Tank</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-300">STP Plant</span>
                        <span className="px-2 py-0.5 bg-white border border-slate-300">Civic CA</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer Blueprint Details */}
                <div className="mt-4 pt-3 border-t-2 border-slate-300 flex flex-wrap items-center justify-between text-[11px] text-slate-600 gap-2">
                  <div className="flex items-center gap-4">
                    <span><strong>Total Plots:</strong> 461 Units</span>
                    <span><strong>Road Grid:</strong> 24.38ft / 18.28ft / 12.19ft / 9.14ft</span>
                    <span><strong>Approvals:</strong> BMRDA Approval Awaited (Yelahanka)</span>
                  </div>
                  <div className="text-right font-bold text-slate-900">
                    Developed by Sri Raghavendra Swami Developers Pvt. Ltd.
                  </div>
                </div>
              </div>
            </div>

            {/* Click to expand overlay hint */}
            <div className="absolute bottom-4 right-4 bg-[#25231F]/90 backdrop-blur-md px-3 py-1.5 border border-[#B89452]/40 text-xs text-[#D6BD82] flex items-center gap-2 pointer-events-none rounded-md">
              <Maximize2 className="w-3.5 h-3.5" />
              <span>Click layout to zoom or view full screen</span>
            </div>
          </div>

          {/* Bottom Amenities & Specifications Callouts */}
          <div className="p-6 bg-white border-t border-[#DDD4C5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#B89452]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#25231F] uppercase tracking-wider">Exact Dimension Markings</h4>
                <p className="text-[11px] text-[#6F6A61] mt-0.5 font-normal">
                  Standard 30×40 (1200 sq.ft), 30×50 (1500 sq.ft), 40×60 (2400 sq.ft), 50×80 (4000 sq.ft) & 80×100 (8000 sq.ft) plots clearly demarcated.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#B89452]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#25231F] uppercase tracking-wider">Direct IRR Ring Road Entry</h4>
                <p className="text-[11px] text-[#6F6A61] mt-0.5 font-normal">
                  Direct connectivity to 90-meter Proposed Intermediate Ring Road (IRR) with wide 24.38-foot internal asphalt avenue roads.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#F7F4EE] border border-[#DDD4C5] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-4 h-4 text-[#B89452]" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-[#25231F] uppercase tracking-wider">Dedicated Sports & Leisure</h4>
                <p className="text-[11px] text-[#6F6A61] mt-0.5 font-normal">
                  Features in-house full-scale cricket stadium, club house, tennis courts, gym, underground utilities, and landscaped parks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 overflow-hidden animate-in fade-in duration-200">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C5A059] text-black font-bold flex items-center justify-center text-xs">
                RGV
              </div>
              <div>
                <h3 className="font-display font-bold text-base sm:text-lg text-white">
                  Township Master Layout Blueprint (Full Resolution)
                </h3>
                <p className="text-[11px] text-slate-400">
                  New City North • Plots 1 to 461 • Cricket Stadium & Sports Enclave
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  onOpenBookingModal('Layout Plot Selection');
                }}
                className="gold-button px-4 py-1.5 text-xs font-bold uppercase tracking-wider hidden sm:flex items-center gap-1.5"
              >
                <span>Book This Plot</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all cursor-pointer"
                title="Close"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lightbox Scalable Image / Render Area */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6">
            <div className="max-w-5xl w-full bg-white text-slate-900 p-6 sm:p-10 rounded-lg shadow-2xl border-4 border-[#C5A059]">
              {/* Full Schematic Render */}
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-3 mb-4">
                <div>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900 uppercase">
                    New City North Master Layout Map
                  </h2>
                  <p className="text-xs text-slate-600 font-medium">
                    Sri Raghavendra Swami Developers Pvt. Ltd. • Near Rajankunte, Bengaluru
                  </p>
                </div>
                <div className="w-10 h-10 border-2 border-red-600 rounded-full flex items-center justify-center font-bold text-red-600">
                  N ↑
                </div>
              </div>

              {/* Road & Layout Overview */}
              <div className="bg-slate-900 text-amber-300 p-2 text-center text-xs font-bold uppercase tracking-widest mb-4">
                ★ IRR 90 METER PROPOSED RING ROAD • DIRECT ACCESS HIGHWAY ★
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                <div className="p-4 bg-amber-50 border border-amber-300 rounded space-y-2">
                  <div className="font-bold text-amber-900 uppercase text-xs">Main Entrance & Amenities</div>
                  <div>• Society Waiting Area & Lounge</div>
                  <div>• 24.38 Ft Main Avenue Road</div>
                  <div>• Plots 1 to 50 (Executive Villa Plots)</div>
                  <div>• 24/7 Security Cabin & Guard Enclave</div>
                </div>

                <div className="p-4 bg-blue-50 border border-blue-300 rounded space-y-2">
                  <div className="font-bold text-blue-900 uppercase text-xs">Central Residential Enclave</div>
                  <div>• Plots 51 to 350 (30×40 & 40×60)</div>
                  <div>• Central Landscaped Parks & Jogging Track</div>
                  <div>• Underground Cabling & Water Supply</div>
                  <div>• 18.28 Ft & 12.19 Ft Internal Crosses</div>
                </div>

                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded space-y-2">
                  <div className="font-bold text-emerald-900 uppercase text-xs">Sports Arena & Stadium</div>
                  <div>• Full-Size Cricket Stadium & Pitch</div>
                  <div>• Club House, Gym & Tennis Court</div>
                  <div>• Plots 351 to 461 (Estate Plots)</div>
                  <div>• Overhead Water Tank (OHT) & STP</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t-2 border-slate-300 flex justify-between items-center text-xs text-slate-600">
                <span>Plot Dimensions: 30×40 (1200 sqft), 30×50 (1500 sqft), 40×60 (2400 sqft), 50×80 (4000 sqft), 80×100 (8000 sqft)</span>
                <span className="font-bold text-slate-900">Price: ₹1,799 / sq.ft • BMRDA Approval Awaited</span>
              </div>
            </div>
          </div>

          {/* Lightbox Footer Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-400">
            <span>Official Master Plan for New City North Township</span>
            <button
              onClick={() => {
                setIsLightboxOpen(false);
                onOpenBookingModal('Master Layout Plan Consultation');
              }}
              className="gold-button px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black"
            >
              Request Plot Availability & Pricing
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
