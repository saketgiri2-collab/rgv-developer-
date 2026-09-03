import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Eye,
  Building,
  Layers,
  X
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface BrochureSectionProps {
  onOpenBookingModal: (projectName?: string) => void;
}

export const BrochureSection: React.FC<BrochureSectionProps> = ({ onOpenBookingModal }) => {
  const [activePageIndex, setActivePageIndex] = useState<number>(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState<boolean>(false);

  const brochurePages = [
    {
      id: 1,
      title: 'Page 1: New City North — Project Overview',
      subtitle: 'Premium Residential & Commercial Plots Near Rajanukunte',
      project: 'New City North',
      price: '₹1,799 / sq.ft.',
      authority: 'BMRDA Approval Awaited (Yelahanka)',
      highlights: [
        'Close to Proposed IRR 90M Ring Road',
        'High Appreciation Potential',
        'Ideal for Living & Investment',
        'Peaceful & Green Environment',
        'Clear DC Conversion & A Katha Status',
      ],
    },
    {
      id: 2,
      title: 'Page 2: New City North — Location Highlights & Payment Chart',
      subtitle: 'Developments Near Location & Navanagara Society Payment Chart',
      project: 'New City North',
      price: '₹1,799 / sq.ft.',
      authority: 'BMRDA Approval Awaited',
      highlights: [
        'Yelahanka - Doddaballapura SH Highway - 5 min',
        'Close to Yelahanka New Town (Existing GBA)',
        'Attached to IRR Ring Road & Close to STRR (10 min)',
        'Near Upcoming Metro Station (Rajankunte - 5 min)',
        'Close to Presidency University of Technology (5 min)',
        'Kempegowda International Airport (20 min)',
        'Foxconn SEZ / ITR Park 12,000 Acres (15 min)',
      ],
    },
    {
      id: 3,
      title: 'Page 3: New City — Overview & Payment Schedule',
      subtitle: 'Secure Your Future with Premium Plots Near Marasandra',
      project: 'New City',
      price: '₹1,199 / sq.ft.',
      authority: 'DPA (Doddaballapura)',
      highlights: [
        'Near to RAI Institute of Technology (5 min)',
        'Upcoming Kwin City & Modi Smart City Axis',
        'Near to Universal Public School & Adithya Engineering',
        'Close to Embassy Tech Park & FIA Grade 2 Race Track',
        'Surrounded by Fast Developing Infrastructure',
        'DC Conversion & A Katha Ownership',
      ],
    },
    {
      id: 4,
      title: 'Page 4: Strategic Location Map & Connectivity Axis',
      subtitle: 'Complete Route Map: Yelahanka New Town to Doddaballapura Corridor',
      project: 'Both Projects',
      price: '₹1,199 to ₹1,799 / sq.ft.',
      authority: 'DPA & BMRDA Corridor',
      highlights: [
        'New City North at Kakkehalli / Rajankunte',
        'New City at Gejjagadahalli / Marasandra',
        'Direct Access from Yelahanka New Town (SH-9 / SH-39 / SH-74)',
        'Proximity to Hesaraghatta Lake, Avalahalli Forest & Rajanukunte Station',
        'Official Office: D4-377, KHB Colony, Yelahanka New Town',
      ],
    },
  ];

  const handleNextPage = () => {
    setActivePageIndex((prev) => (prev + 1) % brochurePages.length);
  };

  const handlePrevPage = () => {
    setActivePageIndex((prev) => (prev - 1 + brochurePages.length) % brochurePages.length);
  };

  return (
    <section id="brochure" className="py-24 relative bg-[#EFE9DE] border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-white border border-[#B89452]/40 mb-3 shadow-xs">
              <FileText className="w-3.5 h-3.5 text-[#B89452]" />
              <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
                OFFICIAL PROJECT E-BROCHURE
              </span>
            </div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight">
              Project Brochure & Documentation
            </h2>
            <p className="text-[#6F6A61] text-sm sm:text-base mt-2 max-w-2xl font-normal">
              Browse the complete official 4-page brochure detailing New City North (₹1,799/sq.ft) and New City (₹1,199/sq.ft), comprehensive location routes, and statutory payment charts.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setIsLightboxOpen(true)}
              className="px-4 py-2.5 bg-white hover:bg-[#F7F4EE] border border-[#DDD4C5] text-xs font-semibold uppercase tracking-wider text-[#25231F] flex items-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <Maximize2 className="w-4 h-4 text-[#B89452]" />
              <span>Full Screen Reader</span>
            </button>
            <button
              onClick={() => onOpenBookingModal('Brochure Request')}
              className="gold-button px-5 py-2.5 text-xs font-bold uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-md"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Request PDF Brochure</span>
            </button>
          </div>
        </div>

        {/* Page Selector Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 mb-8">
          {brochurePages.map((page, idx) => (
            <button
              key={page.id}
              onClick={() => setActivePageIndex(idx)}
              className={`p-3 sm:p-4 text-left border transition-all cursor-pointer ${
                activePageIndex === idx
                  ? 'bg-white border-[#B89452] shadow-xs'
                  : 'bg-[#F7F4EE] border-[#DDD4C5] hover:border-[#B89452] text-[#6F6A61]'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] uppercase font-bold tracking-wider ${
                  activePageIndex === idx ? 'text-[#B89452]' : 'text-[#6F6A61]'
                }`}>
                  Page {page.id} of 4
                </span>
                <span className="text-[10px] px-1.5 py-0.5 bg-white border border-[#DDD4C5] text-[#25231F] font-mono">
                  {page.project}
                </span>
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#25231F] truncate">{page.title.split(':')[1] || page.title}</div>
            </button>
          ))}
        </div>

        {/* Main Brochure Viewer Display */}
        <div className="bg-white border border-[#DDD4C5] shadow-xs overflow-hidden relative">
          {/* Viewer Toolbar */}
          <div className="p-4 bg-[#F7F4EE] border-b border-[#DDD4C5] flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-[#25231F] uppercase tracking-wider">
              <Eye className="w-4 h-4 text-[#B89452]" />
              <span>{brochurePages[activePageIndex].title}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPage}
                className="p-2 bg-white hover:bg-[#EFE9DE] border border-[#DDD4C5] text-[#25231F] transition-all cursor-pointer shadow-xs"
                title="Previous Page"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs font-mono text-[#25231F] px-2 font-bold">
                {activePageIndex + 1} / {brochurePages.length}
              </span>
              <button
                onClick={handleNextPage}
                className="p-2 bg-white hover:bg-[#EFE9DE] border border-[#DDD4C5] text-[#25231F] transition-all cursor-pointer shadow-xs"
                title="Next Page"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsLightboxOpen(true)}
                className="p-2 bg-white hover:bg-[#EFE9DE] border border-[#DDD4C5] text-[#B89452] transition-all cursor-pointer ml-2 shadow-xs"
                title="Fullscreen"
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Brochure Page Body */}
          <div className="p-4 sm:p-8 bg-[#F7F4EE] flex items-center justify-center min-h-[600px]">
            <div className="w-full max-w-4xl bg-[#FCFAF6] text-slate-900 p-6 sm:p-10 rounded shadow-sm border-2 border-[#B89452]/30">
              {/* Top Branding Bar */}
              <div className="flex items-center justify-between border-b-2 border-slate-300 pb-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#0E1118] border-2 border-[#C5A059] flex items-center justify-center font-black text-[#DFBF7A]">
                    RGV
                  </div>
                  <div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-[#0E1118] tracking-wider uppercase">
                      SRI RAGHAVENDRA SWAMI DEVELOPERS
                    </h3>
                    <p className="text-xs text-slate-600 font-semibold tracking-widest uppercase">
                      Building Spaces • Creating Futures
                    </p>
                  </div>
                </div>

                <div className="text-right hidden sm:block">
                  <span className="text-xs font-bold text-slate-500 block">DIRECT ENQUIRY</span>
                  <span className="text-sm font-black text-[#967329] tracking-wider">
                    {siteConfig.company.phoneFormatted}
                  </span>
                </div>
              </div>

              {/* Page 1 Specific Content */}
              {activePageIndex === 0 && (
                <div className="space-y-6">
                  <div className="bg-[#0E1118] text-white p-6 rounded relative overflow-hidden">
                    <div className="relative z-10">
                      <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                        PREMIUM PLOTTED TOWNSHIP
                      </span>
                      <h2 className="font-display font-black text-3xl sm:text-4xl text-white mt-1 uppercase">
                        NEW CITY NORTH
                      </h2>
                      <p className="text-sm text-slate-300 mt-1 font-medium">
                        Residential & Commercial Plots Near Rajanukunte, Yelahanka Taluk
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                    <div className="p-3 bg-white border-2 border-amber-400 rounded">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Starting Price</span>
                      <span className="text-base sm:text-lg font-black text-slate-900">₹1,799 / sqft</span>
                    </div>
                    <div className="p-3 bg-white border-2 border-slate-300 rounded">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Approval Status</span>
                      <span className="text-xs font-bold text-slate-800">BMRDA Awaited</span>
                    </div>
                    <div className="p-3 bg-white border-2 border-slate-300 rounded">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Land Status</span>
                      <span className="text-xs font-bold text-slate-800">DC Conversion</span>
                    </div>
                    <div className="p-3 bg-white border-2 border-slate-300 rounded">
                      <span className="text-[10px] text-slate-500 font-bold uppercase block">Title Quality</span>
                      <span className="text-xs font-bold text-slate-800">A Katha Ready</span>
                    </div>
                  </div>

                  <div className="p-5 bg-amber-50/70 border border-amber-300 rounded space-y-3">
                    <h4 className="text-sm font-black text-amber-950 uppercase tracking-wider">
                      Key Highlights & Connectivity
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-800 font-medium">
                      <div>✓ Close to Proposed 90M IRR Ring Road</div>
                      <div>✓ High Appreciation Potential & Fast Growth</div>
                      <div>✓ Ideal for Living & Strategic Wealth Creation</div>
                      <div>✓ Peaceful Green Environment & Pure Air</div>
                      <div>✓ 60ft Main Avenue & 40ft Internal Roads</div>
                      <div>✓ 15 Mins to Kempegowda Intl Airport</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Page 2 Specific Content: Highlights & Payment Chart */}
              {activePageIndex === 1 && (
                <div className="space-y-5">
                  <div className="border-b-2 border-slate-300 pb-2">
                    <h2 className="font-display font-black text-xl sm:text-2xl text-slate-900 uppercase">
                      NEW CITY NORTH — PAYMENT CHART & NEARBY DEVELOPMENTS
                    </h2>
                    <p className="text-xs text-slate-600 font-medium">
                      Navanagara House Building Co-operative Society Ltd. Milestone Payment Chart
                    </p>
                  </div>

                  {/* Payment Chart Table */}
                  <div className="overflow-x-auto border-2 border-slate-400 rounded">
                    <table className="w-full text-center text-xs">
                      <thead className="bg-[#0E1118] text-white text-[11px] uppercase tracking-wider">
                        <tr>
                          <th className="p-2 border-r border-white/20">Dimensions</th>
                          <th className="p-2 border-r border-white/20">Sq. Ft.</th>
                          <th className="p-2 border-r border-white/20">Total Value</th>
                          <th className="p-2 border-r border-white/20 text-[#DFBF7A]">Down Payment (30%)</th>
                          <th className="p-2 border-r border-white/20">1st Inst. (25%)</th>
                          <th className="p-2 border-r border-white/20">2nd Inst. (25%)</th>
                          <th className="p-2">3rd Inst. (20%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-300 font-medium text-slate-900 bg-white">
                        <tr className="hover:bg-amber-50">
                          <td className="p-2 font-bold">30×40</td>
                          <td className="p-2">1,200</td>
                          <td className="p-2 font-bold">₹21,58,500</td>
                          <td className="p-2 text-emerald-800 font-bold bg-amber-50/50">₹6,47,640</td>
                          <td className="p-2">₹5,39,700</td>
                          <td className="p-2">₹5,39,700</td>
                          <td className="p-2">₹4,31,760</td>
                        </tr>
                        <tr className="hover:bg-amber-50">
                          <td className="p-2 font-bold">30×50</td>
                          <td className="p-2">1,500</td>
                          <td className="p-2 font-bold">₹26,96,200</td>
                          <td className="p-2 text-emerald-800 font-bold bg-amber-50/50">₹8,09,550</td>
                          <td className="p-2">₹6,74,625</td>
                          <td className="p-2">₹6,74,625</td>
                          <td className="p-2">₹5,39,700</td>
                        </tr>
                        <tr className="hover:bg-amber-50">
                          <td className="p-2 font-bold">40×60</td>
                          <td className="p-2">2,400</td>
                          <td className="p-2 font-bold">₹43,17,600</td>
                          <td className="p-2 text-emerald-800 font-bold bg-amber-50/50">₹12,95,280</td>
                          <td className="p-2">₹10,79,400</td>
                          <td className="p-2">₹10,79,400</td>
                          <td className="p-2">₹8,63,520</td>
                        </tr>
                        <tr className="hover:bg-amber-50">
                          <td className="p-2 font-bold">50×80</td>
                          <td className="p-2">4,000</td>
                          <td className="p-2 font-bold">₹71,96,000</td>
                          <td className="p-2 text-emerald-800 font-bold bg-amber-50/50">₹21,58,800</td>
                          <td className="p-2">₹17,99,000</td>
                          <td className="p-2">₹17,99,000</td>
                          <td className="p-2">₹14,39,200</td>
                        </tr>
                        <tr className="hover:bg-amber-50">
                          <td className="p-2 font-bold">80×100</td>
                          <td className="p-2">8,000</td>
                          <td className="p-2 font-bold">₹1,43,92,000</td>
                          <td className="p-2 text-emerald-800 font-bold bg-amber-50/50">₹43,17,600</td>
                          <td className="p-2">₹35,98,000</td>
                          <td className="p-2">₹35,98,000</td>
                          <td className="p-2">₹28,78,400</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  {/* Near Locations List */}
                  <div className="grid grid-cols-2 gap-2 text-[11px] text-slate-800 bg-slate-100 p-3 rounded">
                    <div>• Yelahanka - Doddaballapura SH (5 min)</div>
                    <div>• Attached to IRR Ring Road (90m)</div>
                    <div>• Near Upcoming Rajankunte Metro (5 min)</div>
                    <div>• Close to Presidency University (5 min)</div>
                    <div>• Kempegowda Intl Airport (20 min)</div>
                    <div>• Foxconn ITR Park 12,000 Acres (15 min)</div>
                  </div>
                </div>
              )}

              {/* Page 3 Specific Content: New City Doddaballapura */}
              {activePageIndex === 2 && (
                <div className="space-y-5">
                  <div className="bg-[#0E1118] text-white p-5 rounded">
                    <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest">
                      AFFORDABLE LUXURY PLOTS
                    </span>
                    <h2 className="font-display font-black text-2xl sm:text-3xl text-white mt-0.5 uppercase">
                      WELCOME TO NEW CITY
                    </h2>
                    <p className="text-xs text-slate-300 font-medium">
                      Secure Your Future with Premium Plots Near Marasandra / Doddaballapura
                    </p>
                  </div>

                  <div className="grid grid-cols-4 gap-2 text-center">
                    <div className="p-2.5 bg-white border-2 border-amber-400 rounded">
                      <span className="text-[9px] text-slate-500 font-bold uppercase block">Price</span>
                      <span className="text-sm sm:text-base font-black text-slate-900">₹1,199/sqft</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-300 rounded">
                      <span className="text-[9px] text-slate-500 font-bold uppercase block">Authority</span>
                      <span className="text-xs font-bold text-slate-800">DPA (Doddaballapura)</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-300 rounded">
                      <span className="text-[9px] text-slate-500 font-bold uppercase block">Status</span>
                      <span className="text-xs font-bold text-slate-800">DC Conversion</span>
                    </div>
                    <div className="p-2.5 bg-white border border-slate-300 rounded">
                      <span className="text-[9px] text-slate-500 font-bold uppercase block">Ownership</span>
                      <span className="text-xs font-bold text-slate-800">A Katha</span>
                    </div>
                  </div>

                  {/* Payment Chart for New City */}
                  <div className="overflow-x-auto border-2 border-slate-400 rounded">
                    <table className="w-full text-center text-xs">
                      <thead className="bg-[#0E1118] text-white text-[10px] uppercase">
                        <tr>
                          <th className="p-2">Dimensions</th>
                          <th className="p-2">Sq. Ft.</th>
                          <th className="p-2">Total Value</th>
                          <th className="p-2 text-[#DFBF7A]">Down Payment (30%)</th>
                          <th className="p-2">1st Inst. (25%)</th>
                          <th className="p-2">2nd Inst. (25%)</th>
                          <th className="p-2">3rd Inst. (20%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-300 text-slate-900 bg-white font-medium">
                        <tr>
                          <td className="p-1.5 font-bold">30×40</td>
                          <td className="p-1.5">1,200</td>
                          <td className="p-1.5 font-bold">₹14,38,800</td>
                          <td className="p-1.5 text-emerald-800 font-bold bg-amber-50">₹4,31,640</td>
                          <td className="p-1.5">₹3,59,700</td>
                          <td className="p-1.5">₹3,59,700</td>
                          <td className="p-1.5">₹2,87,760</td>
                        </tr>
                        <tr>
                          <td className="p-1.5 font-bold">30×50</td>
                          <td className="p-1.5">1,500</td>
                          <td className="p-1.5 font-bold">₹17,98,500</td>
                          <td className="p-1.5 text-emerald-800 font-bold bg-amber-50">₹5,39,550</td>
                          <td className="p-1.5">₹4,49,625</td>
                          <td className="p-1.5">₹4,49,625</td>
                          <td className="p-1.5">₹3,59,700</td>
                        </tr>
                        <tr>
                          <td className="p-1.5 font-bold">40×60</td>
                          <td className="p-1.5">2,400</td>
                          <td className="p-1.5 font-bold">₹28,77,600</td>
                          <td className="p-1.5 text-emerald-800 font-bold bg-amber-50">₹8,63,280</td>
                          <td className="p-1.5">₹7,19,400</td>
                          <td className="p-1.5">₹7,19,400</td>
                          <td className="p-1.5">₹5,75,520</td>
                        </tr>
                        <tr>
                          <td className="p-1.5 font-bold">50×80</td>
                          <td className="p-1.5">4,000</td>
                          <td className="p-1.5 font-bold">₹47,96,000</td>
                          <td className="p-1.5 text-emerald-800 font-bold bg-amber-50">₹14,38,800</td>
                          <td className="p-1.5">₹11,99,000</td>
                          <td className="p-1.5">₹11,99,000</td>
                          <td className="p-1.5">₹9,59,200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* Page 4 Specific Content: Strategic Route Map */}
              {activePageIndex === 3 && (
                <div className="space-y-5">
                  <div className="border-b-2 border-slate-300 pb-2">
                    <h2 className="font-display font-black text-xl sm:text-2xl text-slate-900 uppercase">
                      LOCATION CONNECTIVITY & ROUTE GUIDE
                    </h2>
                    <p className="text-xs text-slate-600 font-medium">
                      Seamless Transit Axis from Yelahanka New Town to Doddaballapura
                    </p>
                  </div>

                  {/* Route Corridor Schematic */}
                  <div className="p-4 bg-slate-900 text-white rounded space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-amber-300 border-b border-white/10 pb-2">
                      <span>YELAHANKA NEW TOWN (Start)</span>
                      <span>→</span>
                      <span>RAJANUKUNTE</span>
                      <span>→</span>
                      <span>MARASANDRA</span>
                      <span>→</span>
                      <span>DODDABALLAPURA (North)</span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                      <div className="p-3 bg-white/5 border border-white/10 rounded">
                        <div className="font-bold text-[#DFBF7A] mb-1">📍 New City North (Kakkehalli)</div>
                        <div className="text-slate-300 text-[11px] leading-relaxed">
                          Located directly near Rajankunte transit hub and attached to proposed 90M Intermediate Ring Road (IRR).
                        </div>
                      </div>

                      <div className="p-3 bg-white/5 border border-white/10 rounded">
                        <div className="font-bold text-[#DFBF7A] mb-1">📍 New City (Gejjagadahalli)</div>
                        <div className="text-slate-300 text-[11px] leading-relaxed">
                          Strategically positioned near Marasandra with swift connectivity to Doddaballapura industrial hub and SH-9.
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Office Address Callout Box */}
                  <div className="p-4 bg-amber-50 border-2 border-amber-400 rounded text-xs text-slate-800">
                    <div className="font-bold text-amber-950 uppercase text-xs mb-1">Official Office Address:</div>
                    <p className="font-medium">
                      No D4-377, Karnataka Housing Board Colony, 407 SFS, 4th Stage, 2nd Floor, Yelahanka New Town, Bengaluru - 560064
                    </p>
                  </div>
                </div>
              )}

              {/* Brochure Page Footer */}
              <div className="mt-6 pt-4 border-t-2 border-slate-300 flex flex-wrap items-center justify-between text-xs text-slate-600 gap-3">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Official Publication of Sri Raghavendra Swami Developers Pvt. Ltd.</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <Phone className="w-3.5 h-3.5 text-[#967329]" />
                  <span>Call: {siteConfig.company.phoneFormatted}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Callout Bar */}
          <div className="p-4 bg-[#0A0D14] border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
            <div className="text-xs text-slate-400 font-light">
              Need a printed physical brochure or high-res PDF delivered to your email/WhatsApp?
            </div>
            <button
              onClick={() => onOpenBookingModal('Brochure Physical Copy Request')}
              className="gold-button px-5 py-2 text-xs font-bold uppercase tracking-wider text-black flex items-center gap-2 cursor-pointer"
            >
              <span>Request WhatsApp Delivery</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Lightbox Reader Modal */}
      {isLightboxOpen && (
        <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 overflow-hidden animate-in fade-in duration-200">
          {/* Lightbox Header */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-[#C5A059] text-black font-bold flex items-center justify-center text-xs">
                RGV
              </div>
              <div>
                <h3 className="font-display font-bold text-base text-white">
                  {brochurePages[activePageIndex].title}
                </h3>
                <p className="text-xs text-slate-400">
                  Page {activePageIndex + 1} of {brochurePages.length} • High Resolution Reader
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrevPage}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNextPage}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-all ml-2"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Lightbox Content Viewer */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-6">
            <div className="max-w-4xl w-full bg-white text-slate-900 p-6 sm:p-10 rounded-lg shadow-2xl border-4 border-[#C5A059]">
              <div className="text-center mb-6">
                <span className="text-xs font-bold text-[#C5A059] uppercase tracking-widest block">
                  OFFICIAL TOWNSHIP BROCHURE
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase mt-1">
                  {brochurePages[activePageIndex].title}
                </h2>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  {brochurePages[activePageIndex].subtitle}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-800">
                <div className="p-4 bg-amber-50 border border-amber-300 rounded">
                  <div className="font-bold text-amber-900 uppercase text-xs mb-2">Key Project Attributes:</div>
                  <ul className="space-y-1.5">
                    {brochurePages[activePageIndex].highlights.map((h, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-slate-100 border border-slate-300 rounded flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 block font-medium">Pricing & Approval Authority:</span>
                    <span className="font-bold text-slate-900 text-sm">{brochurePages[activePageIndex].price} • {brochurePages[activePageIndex].authority}</span>
                  </div>
                  <button
                    onClick={() => {
                      setIsLightboxOpen(false);
                      onOpenBookingModal(`Brochure Enquiry - ${brochurePages[activePageIndex].project}`);
                    }}
                    className="gold-button px-4 py-2 text-xs font-bold uppercase tracking-wider text-black"
                  >
                    Enquire Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Lightbox Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs text-slate-400">
            <span>Sri Raghavendra Swami Developers Pvt. Ltd.</span>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsLightboxOpen(false);
                  onOpenBookingModal('Brochure PDF Download');
                }}
                className="gold-button px-5 py-2 text-xs font-bold uppercase tracking-wider text-black"
              >
                Download PDF Copy
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
