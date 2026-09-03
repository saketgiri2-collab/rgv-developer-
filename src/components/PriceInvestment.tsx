import React, { useState } from 'react';
import {
  TrendingUp,
  Calculator,
  ShieldCheck,
  Building,
  CheckCircle2,
  HelpCircle,
  ArrowRight,
  BadgeIndianRupee,
  Clock,
  Sparkles,
} from 'lucide-react';

interface PriceInvestmentProps {
  onOpenBookingModal: (subject?: string) => void;
}

export const PriceInvestment: React.FC<PriceInvestmentProps> = ({ onOpenBookingModal }) => {
  const plotOptions = [
    { label: '30 × 40 = 1200 Sq. Ft.', dimension: '30 × 40', sqFt: 1200 },
    { label: '30 × 50 = 1500 Sq. Ft.', dimension: '30 × 50', sqFt: 1500 },
    { label: '40 × 60 = 2400 Sq. Ft.', dimension: '40 × 60', sqFt: 2400 },
    { label: '50 × 80 = 4000 Sq. Ft.', dimension: '50 × 80', sqFt: 4000 },
  ];

  const projectRates = [
    { name: 'New City North (Near Rajankunte)', rate: 1799, location: 'Near Rajankunte' },
    { name: 'New City (Doddaballapura)', rate: 1199, location: 'Doddaballapura' },
  ];

  const [selectedPlot, setSelectedPlot] = useState(plotOptions[0]);
  const [selectedRate, setSelectedRate] = useState(1799); // ₹1,799 / sq.ft default for New City North
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30);
  const [loanTenureYears, setLoanTenureYears] = useState<number>(3); // 3 Years default tenure
  const [interestRate, setInterestRate] = useState<number>(8.5);

  // Dynamic Price Calculation
  const totalCost = selectedPlot.sqFt * selectedRate;
  const downPaymentAmount = Math.round((totalCost * downPaymentPercent) / 100);
  const loanAmount = totalCost - downPaymentAmount;

  // Monthly EMI Calculation: [P x R x (1+R)^N]/[(1+R)^N-1]
  const monthlyRate = interestRate / (12 * 100);
  const totalMonths = loanTenureYears * 12;
  const emi =
    loanAmount > 0
      ? Math.round(
          (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
            (Math.pow(1 + monthlyRate, totalMonths) - 1)
        )
      : 0;

  // Milestone payment calculations (30% / 25% / 25% / 20%)
  const milestone1 = Math.round((totalCost * 30) / 100);
  const milestone2 = Math.round((totalCost * 25) / 100);
  const milestone3 = Math.round((totalCost * 25) / 100);
  const milestone4 = Math.round((totalCost * 20) / 100);

  const formatINR = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="investment" className="py-28 relative bg-[#F7F4EE] border-t border-[#DDD4C5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white border border-[#B89452]/40 rounded-full mb-3 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B89452]" />
            <span className="text-[11px] font-bold tracking-[0.25em] text-[#B89452] uppercase">
              TRANSPARENT PRICING & VALUE
            </span>
          </div>

          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-[#25231F] tracking-tight mb-4">
            Invest in the Right Location. Build Your Future.
          </h2>

          <p className="text-[#6F6A61] text-sm sm:text-base font-normal">
            Transparent plot sizing, structured 30% / 25% / 25% / 20% milestone payments, and high-potential corridors tailored for solid long-term value appreciation.
          </p>
        </div>

        {/* Investment & Price Interactive Tool */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Estimator */}
          <div className="lg:col-span-7 p-7 sm:p-9 bg-white border border-[#DDD4C5] shadow-xs rounded-2xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-[#DDD4C5] gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#F7F4EE] flex items-center justify-center border border-[#DDD4C5]">
                  <Calculator className="w-5 h-5 text-[#B89452]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg text-[#25231F]">
                    Plot Investment & EMI Estimator
                  </h3>
                  <p className="text-xs text-[#6F6A61] font-normal">
                    Select your plot dimensions and configure financing
                  </p>
                </div>
              </div>

              {/* Project Rate Selector */}
              <div className="flex items-center gap-1.5 bg-[#F7F4EE] p-1 border border-[#DDD4C5] rounded-xl">
                {projectRates.map((p) => (
                  <button
                    key={p.rate}
                    type="button"
                    onClick={() => setSelectedRate(p.rate)}
                    className={`px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase transition-all rounded-lg cursor-pointer ${
                      selectedRate === p.rate
                        ? 'bg-[#B89452] text-white font-bold shadow-xs'
                        : 'text-[#6F6A61] hover:text-[#25231F]'
                    }`}
                  >
                    ₹{p.rate.toLocaleString('en-IN')}/sq.ft
                  </button>
                ))}
              </div>
            </div>

            {/* Select Plot Size - ONLY 4 Required Dimensions */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center">
                <label className="block text-xs font-semibold uppercase tracking-wider text-[#25231F]">
                  1. Select Plot Dimension
                </label>
                <span className="text-[11px] text-[#B89452] font-semibold">
                  Rate: ₹{selectedRate.toLocaleString('en-IN')} / sq.ft
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {plotOptions.map((opt) => {
                  const plotVal = opt.sqFt * selectedRate;
                  const isSelected = selectedPlot.sqFt === opt.sqFt;
                  return (
                    <button
                      key={opt.dimension}
                      type="button"
                      onClick={() => setSelectedPlot(opt)}
                      className={`p-4 text-left border text-xs transition-all cursor-pointer rounded-xl ${
                        isSelected
                          ? 'bg-[#F7F4EE] border-[#B89452] text-[#25231F] shadow-xs'
                          : 'bg-white border-[#DDD4C5] text-[#6F6A61] hover:text-[#25231F] hover:border-[#B89452]'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-1">
                        <div className="font-bold text-sm text-[#25231F]">
                          {opt.label}
                        </div>
                        {isSelected && (
                          <span className="w-2 h-2 rounded-full bg-[#B89452]" />
                        )}
                      </div>
                      <div className="text-[11px] text-[#B89452] font-medium">
                        Total: {formatINR(plotVal)}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sliders for Downpayment & Tenure */}
            <div className="space-y-6 pt-2">
              <div>
                <div className="flex justify-between text-xs font-medium text-[#25231F] mb-2">
                  <span>Starting Down Payment ({downPaymentPercent}%)</span>
                  <span className="text-[#B89452] font-bold">{formatINR(downPaymentAmount)}</span>
                </div>
                <input
                  type="range"
                  min="20"
                  max="70"
                  step="5"
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#B89452] bg-[#DDD4C5] h-2 cursor-pointer rounded-full"
                />
                <div className="flex justify-between text-[10px] text-[#6F6A61] mt-1">
                  <span>Standard Starting: 30%</span>
                  <span>50%</span>
                  <span>70% Self-Funded</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-medium text-[#25231F] mb-2">
                  <span>Loan Tenure ({loanTenureYears} Years)</span>
                  <span className="text-[#B89452] font-bold">@ {interestRate}% p.a. approx</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="15"
                  step="1"
                  value={loanTenureYears}
                  onChange={(e) => setLoanTenureYears(Number(e.target.value))}
                  className="w-full accent-[#B89452] bg-[#DDD4C5] h-2 cursor-pointer rounded-full"
                />
                <div className="flex justify-between text-[10px] text-[#6F6A61] mt-1">
                  <span>1 Year</span>
                  <span className="text-[#B89452] font-semibold">3 Years (Default)</span>
                  <span>5 Years</span>
                  <span>10 Years</span>
                  <span>15 Years</span>
                </div>
              </div>
            </div>

            {/* Cost Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-5 bg-[#F7F4EE] border border-[#DDD4C5] mt-8 rounded-xl">
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#6F6A61] block tracking-wider">Total Valuation</span>
                <span className="text-base sm:text-lg font-bold text-[#25231F]">
                  {formatINR(totalCost)}
                </span>
                <span className="text-[10px] text-[#6F6A61] block mt-0.5">
                  ({selectedPlot.sqFt} sq.ft @ ₹{selectedRate}/sq.ft)
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#6F6A61] block tracking-wider">Bank Loan</span>
                <span className="text-base sm:text-lg font-bold text-[#25231F]">
                  {formatINR(loanAmount)}
                </span>
                <span className="text-[10px] text-[#6F6A61] block mt-0.5">
                  ({100 - downPaymentPercent}% balance financed)
                </span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-semibold text-[#B89452] block tracking-wider">Estimated EMI ({loanTenureYears}Y)</span>
                <span className="text-base sm:text-lg font-bold text-[#B89452]">
                  {formatINR(emi)} / mo
                </span>
                <span className="text-[10px] text-[#6F6A61] block mt-0.5">
                  ({totalMonths} monthly installments)
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Milestone Payment Plan (30% / 25% / 25% / 20%) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 sm:p-8 bg-white border border-[#DDD4C5] space-y-5 rounded-2xl shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-display font-bold text-xl text-[#25231F]">
                    Milestone Payment Plan
                  </h3>
                  <p className="text-xs text-[#6F6A61] font-normal mt-0.5">
                    For {selectedPlot.label} ({formatINR(totalCost)})
                  </p>
                </div>
                <div className="px-2.5 py-1 bg-[#F7F4EE] border border-[#DDD4C5] rounded-lg text-[10px] font-bold text-[#B89452] uppercase">
                  4 Stages
                </div>
              </div>

              <div className="space-y-3 text-xs">
                {/* Milestone 1: Starting Down Payment: 30% */}
                <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl transition-all hover:border-[#B89452]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 bg-white text-[#B89452] font-bold flex items-center justify-center text-[11px] border border-[#DDD4C5] rounded-full">
                        1
                      </span>
                      <span className="text-[#25231F] font-semibold">Starting Down Payment</span>
                    </div>
                    <span className="text-[#B89452] font-extrabold">30%</span>
                  </div>
                  <div className="flex justify-between items-center pl-8 text-[11px]">
                    <span className="text-[#6F6A61]">Initial Booking & Agreement</span>
                    <span className="text-[#25231F] font-bold">{formatINR(milestone1)}</span>
                  </div>
                </div>

                {/* Milestone 2: Second Payment: 25% */}
                <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl transition-all hover:border-[#B89452]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 bg-white text-[#B89452] font-bold flex items-center justify-center text-[11px] border border-[#DDD4C5] rounded-full">
                        2
                      </span>
                      <span className="text-[#25231F] font-semibold">Second Payment</span>
                    </div>
                    <span className="text-[#B89452] font-extrabold">25%</span>
                  </div>
                  <div className="flex justify-between items-center pl-8 text-[11px]">
                    <span className="text-[#6F6A61]">Layout Grading & Avenue Roads</span>
                    <span className="text-[#25231F] font-bold">{formatINR(milestone2)}</span>
                  </div>
                </div>

                {/* Milestone 3: Third Payment: 25% */}
                <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl transition-all hover:border-[#B89452]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 bg-white text-[#B89452] font-bold flex items-center justify-center text-[11px] border border-[#DDD4C5] rounded-full">
                        3
                      </span>
                      <span className="text-[#25231F] font-semibold">Third Payment</span>
                    </div>
                    <span className="text-[#B89452] font-extrabold">25%</span>
                  </div>
                  <div className="flex justify-between items-center pl-8 text-[11px]">
                    <span className="text-[#6F6A61]">Underground Utilities & Drainage</span>
                    <span className="text-[#25231F] font-bold">{formatINR(milestone3)}</span>
                  </div>
                </div>

                {/* Milestone 4: Final Payment: 20% */}
                <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] rounded-xl transition-all hover:border-[#B89452]">
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2.5">
                      <span className="w-6 h-6 bg-white text-[#B89452] font-bold flex items-center justify-center text-[11px] border border-[#DDD4C5] rounded-full">
                        4
                      </span>
                      <span className="text-[#25231F] font-semibold">Final Payment</span>
                    </div>
                    <span className="text-[#B89452] font-extrabold">20%</span>
                  </div>
                  <div className="flex justify-between items-center pl-8 text-[11px]">
                    <span className="text-[#6F6A61]">Registration & Physical Handover</span>
                    <span className="text-[#25231F] font-bold">{formatINR(milestone4)}</span>
                  </div>
                </div>
              </div>

              {/* Responsible Legal Note */}
              <div className="p-4 bg-[#F7F4EE] border border-[#DDD4C5] flex items-start gap-3 text-[11px] text-[#6F6A61] rounded-xl font-normal">
                <ShieldCheck className="w-4 h-4 text-[#B89452] shrink-0 mt-0.5" />
                <span>
                  All calculations are dynamic estimates. Transparent documentation and bank loan assistance provided by RGV Developers.
                </span>
              </div>

              <button
                onClick={() => onOpenBookingModal(`Investment Plan - ${selectedPlot.label}`)}
                className="gold-button w-full py-3.5 text-xs font-bold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md cursor-pointer rounded-full"
              >
                <span>Discuss Investment & Booking</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
