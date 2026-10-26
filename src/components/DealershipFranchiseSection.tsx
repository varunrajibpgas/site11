import React, { useState } from 'react';
import { FRANCHISE_TIERS } from '../data/mockData';
import { FranchiseTier } from '../types';
import { Building2, CheckCircle2, TrendingUp, DollarSign, FileText, Download, Send, Sparkles, MapPin, ShieldCheck, Check, ArrowRight } from 'lucide-react';

interface DealershipFranchiseSectionProps {
  onOpenProspectus: () => void;
}

export const DealershipFranchiseSection: React.FC<DealershipFranchiseSectionProps> = ({
  onOpenProspectus
}) => {
  const [selectedTier, setSelectedTier] = useState<FranchiseTier>(FRANCHISE_TIERS[1]); // Gold by default
  const [plannedVolume, setPlannedVolume] = useState<number>(6000); // cylinders per month
  
  // Franchise Application Multi-Step Form State
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    firmName: '',
    email: '',
    phone: '',
    state: 'Haryana',
    district: '',
    pincode: '',
    landAreaSqFt: '5000',
    landOwnership: 'Owned',
    hasPesoExperience: 'No',
    budgetLakhs: '35',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [applicationId, setApplicationId] = useState<string>('');

  // Calculate dynamic ROI estimates based on planned volume
  const calculateDynamicRoi = (volume: number) => {
    const monthlyGrossMargin = volume * 88;
    const monthlyOpex = volume * 36 + 45000;
    const monthlyNetProfit = Math.max(0, monthlyGrossMargin - monthlyOpex);
    const requiredCapexLakhs = Number((12 + (volume / 2000) * 4.5).toFixed(1));
    const paybackMonths = Math.max(6, Math.round((requiredCapexLakhs * 100000) / (monthlyNetProfit || 1)));

    return {
      monthlyGrossMargin: Math.round(monthlyGrossMargin),
      monthlyNetProfit: Math.round(monthlyNetProfit),
      requiredCapexLakhs,
      paybackMonths
    };
  };

  const dynamicRoi = calculateDynamicRoi(plannedVolume);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitApplication = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.district) {
      alert('Please fill in the required contact and district fields.');
      return;
    }
    const randId = `IBP-FR-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationId(randId);
    setIsSubmitted(true);
  };

  return (
    <section id="dealership" className="bg-[#F7F8F3] text-[#141e18] py-20 border-b border-[#092B1D]/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-[#14532D] uppercase font-display mb-2">
            04. Dealership & Distributorship Opportunities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B1D] tracking-tight font-display [text-wrap:balance]">
            Partner with INDO BRIGHT PETROLEUM PVT. LTD. (IBP GAS).
          </h2>
          <p className="mt-3 text-base text-[#404941] leading-relaxed">
            Own an exclusive LPG dealership with guaranteed supply from our high-capacity automated carousels, full digital ERP billing terminals, subsidized logistics freight, and high-velocity commercial margins.
          </p>
        </div>

        {/* Live Dealer Outlet Photos from ibpgas.co.in */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#092B1D]/10 bg-[#0c1510] group">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="/images/dealer-outlets.jpg"
                alt="IBP GAS Authorized Outlets Nationwide"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-[11px] font-mono text-[#65C466] uppercase font-bold">
                Storefront Presence
              </span>
              <h3 className="text-base font-bold font-display mt-0.5">
                300+ Verified Dealer Outlets Across India
              </h3>
              <p className="text-xs text-[#c0c9be] mt-0.5">
                Exclusive municipal and taluka territories with zero cannibalization.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#092B1D]/10 bg-[#0c1510] group">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="/images/hero-dealer-showroom.jpg"
                alt="IBP GAS Model Showroom"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-[11px] font-mono text-[#B7F36B] uppercase font-bold">
                Model Experience Center
              </span>
              <h3 className="text-base font-bold font-display mt-0.5">
                Turnkey Branded Showroom & Safety Dispense Gear
              </h3>
              <p className="text-xs text-[#c0c9be] mt-0.5">
                Full interior branding, computerized billing POS, and trained technicians provided.
              </p>
            </div>
          </div>
        </div>

        {/* 3 Franchise Tier Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {FRANCHISE_TIERS.map((tier) => {
            const isSelected = selectedTier.id === tier.id;
            return (
              <div
                key={tier.id}
                onClick={() => setSelectedTier(tier)}
                className={`relative rounded-2xl p-6 sm:p-7 transition-all cursor-pointer border ${
                  isSelected
                    ? 'bg-white border-[#14532D] shadow-[0_16px_36px_rgba(9,43,29,0.12)] ring-2 ring-[#65C466]/40'
                    : 'bg-white border-[#092B1D]/08 hover:border-[#14532D]/40 shadow-[0_8px_24px_rgba(9,43,29,0.04)]'
                }`}
              >
                {isSelected && (
                  <div className="absolute top-4 right-4 bg-[#14532D] text-[#B7F36B] text-[11px] font-bold px-2.5 py-0.5 rounded-full font-display">
                    Recommended Model
                  </div>
                )}

                <div className="text-xs font-bold text-[#14532D] uppercase tracking-wider mb-1">
                  Franchise Tier
                </div>
                <h3 className="text-xl font-bold text-[#092B1D] font-display">
                  {tier.tierName}
                </h3>
                <p className="text-xs text-[#8a9389] mt-0.5">
                  Target: {tier.targetMonthlyVolume}
                </p>

                {/* Financial Summary */}
                <div className="my-5 pt-4 border-t border-[#092B1D]/08 space-y-2.5 text-xs">
                  <div className="flex justify-between items-center">
                    <span className="text-[#404941]">Capital Outlay:</span>
                    <span className="font-extrabold text-[#092B1D] font-mono text-sm">
                      ₹{tier.capitalInvestmentLakhs} Lakhs
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#404941]">Security Deposit:</span>
                    <span className="font-semibold text-[#092B1D] font-mono">
                      ₹{tier.securityDepositLakhs} Lakhs (Refundable)
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#404941]">Est. Monthly Net ROI:</span>
                    <span className="font-bold text-[#14532D] font-mono text-sm">
                      ₹{tier.estimatedMonthlyNetRoiLakhs} Lakhs / mo
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#404941]">Est. Capital Payback:</span>
                    <span className="font-bold text-[#65C466] font-mono">
                      ~{tier.paybackMonths} Months
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-[#404941]">Min Godown Land:</span>
                    <span className="font-medium text-[#092B1D]">
                      {tier.minLandRequirementSqFt.toLocaleString()} sq.ft
                    </span>
                  </div>
                </div>

                {/* Key Benefits */}
                <div className="space-y-2 pt-2">
                  <span className="text-[11px] font-bold text-[#092B1D] uppercase tracking-wider block">
                    Tier Entitlements:
                  </span>
                  {tier.benefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#313b36]">
                      <Check className="w-3.5 h-3.5 text-[#14532D] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-4 border-t border-[#092B1D]/08">
                  <button
                    onClick={() => {
                      setSelectedTier(tier);
                      const element = document.getElementById('franchise-form');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`w-full py-2.5 rounded-lg text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-[#14532D] text-white hover:bg-[#092B1D]'
                        : 'bg-[#F7F8F3] text-[#092B1D] hover:bg-[#eaece5] border border-[#092B1D]/10'
                    }`}
                  >
                    Select {tier.tierName.split(' ')[0]} Model
                  </button>
                </div>

              </div>
            );
          })}
        </div>

        {/* Interactive Volume & Payback Simulator */}
        <div className="mt-14 bg-white rounded-2xl border border-[#092B1D]/10 p-6 sm:p-8 lg:p-10 shadow-[0_8px_24px_rgba(9,43,29,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#14532D] uppercase tracking-wider font-display">
                <TrendingUp className="w-4 h-4 text-[#65C466]" />
                <span>Financial Projections & Godown Sizing</span>
              </div>
              <h3 className="text-2xl font-bold text-[#092B1D] font-display">
                Dealer Revenue & Cashflow Simulator
              </h3>
              <p className="text-sm text-[#404941]">
                Adjust your expected monthly cylinder distribution to project gross operating margins, necessary capital, and anticipated cashflow payback period.
              </p>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs font-bold text-[#092B1D] uppercase tracking-wider">
                    Monthly Sales Target:
                  </span>
                  <span className="text-lg font-extrabold text-[#14532D] font-mono tabular-nums">
                    {plannedVolume.toLocaleString('en-IN')} Cylinders / month
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="20000"
                  step="500"
                  value={plannedVolume}
                  onChange={(e) => setPlannedVolume(Number(e.target.value))}
                  className="w-full h-2.5 bg-[#e4e7df] rounded-lg appearance-none cursor-pointer accent-[#14532D]"
                />
                <div className="flex justify-between text-[11px] text-[#8a9389] mt-1 font-mono">
                  <span>1,000 Cylinders</span>
                  <span>10,000 Cylinders</span>
                  <span>20,000 Cylinders</span>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 text-xs">
                <div className="bg-[#F7F8F3] p-3 rounded-xl border border-[#092B1D]/06">
                  <span className="text-[#8a9389] block">Est. Gross Margin</span>
                  <span className="text-base font-bold text-[#092B1D] font-mono tabular-nums block mt-0.5">
                    ₹{dynamicRoi.monthlyGrossMargin.toLocaleString('en-IN')}/mo
                  </span>
                </div>
                <div className="bg-[#F7F8F3] p-3 rounded-xl border border-[#092B1D]/06">
                  <span className="text-[#8a9389] block">Est. Net Profit</span>
                  <span className="text-base font-bold text-[#14532D] font-mono tabular-nums block mt-0.5">
                    ₹{dynamicRoi.monthlyNetProfit.toLocaleString('en-IN')}/mo
                  </span>
                </div>
                <div className="bg-[#F7F8F3] p-3 rounded-xl border border-[#092B1D]/06">
                  <span className="text-[#8a9389] block">Capex Required</span>
                  <span className="text-base font-bold text-[#092B1D] font-mono tabular-nums block mt-0.5">
                    ₹{dynamicRoi.requiredCapexLakhs} Lakhs
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#092B1D] text-white rounded-xl p-6 sm:p-7 space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#B7F36B]">
                Payback Feasibility
              </span>
              <div className="text-3xl font-extrabold text-white font-display tabular-nums">
                ~{dynamicRoi.paybackMonths} Months
              </div>
              <p className="text-xs text-[#c0c9be] leading-relaxed">
                Based on continuous industrial demand, commercial hotel off-take contracts, and guaranteed delivery quotas from INDO BRIGHT PETROLEUM PVT. LTD. depots.
              </p>
              <div className="pt-3 border-t border-[#65C466]/20 flex items-center justify-between text-xs">
                <span className="text-[#dae5dd]">Complete Franchise Deck:</span>
                <button
                  onClick={onOpenProspectus}
                  className="px-3.5 py-1.5 bg-[#65C466] text-[#092B1D] hover:bg-[#B7F36B] font-bold rounded-md flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  Download Deck
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* 3-Step Interactive Franchise Application Form */}
        <div id="franchise-form" className="mt-14 bg-white rounded-2xl border border-[#092B1D]/10 p-6 sm:p-8 lg:p-10 shadow-[0_8px_24px_rgba(9,43,29,0.04)]">
          
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold text-[#14532D] uppercase tracking-wider font-display">
              Official Expression of Interest
            </span>
            <h3 className="text-2xl font-bold text-[#092B1D] font-display mt-1">
              Apply for an Authorized Dealership with INDO BRIGHT PETROLEUM PVT. LTD.
            </h3>
            <p className="text-xs sm:text-sm text-[#404941] mt-1">
              Our franchise allocation board reviews dossiers within 48 business hours to arrange land feasibility audits and commercial vetting.
            </p>
          </div>

          {isSubmitted ? (
            <div className="p-8 bg-[#F7F8F3] rounded-2xl border border-[#14532D]/20 text-center max-w-2xl mx-auto space-y-4">
              <div className="w-14 h-14 bg-[#14532D] text-[#B7F36B] rounded-full flex items-center justify-center mx-auto shadow-md">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-bold text-[#092B1D] font-display">
                Franchise Application Received
              </h4>
              <p className="text-xs sm:text-sm text-[#404941] leading-relaxed">
                Thank you, <strong>{formData.fullName}</strong>. Your franchise dossier has been registered with <strong>INDO BRIGHT PETROLEUM PVT. LTD.</strong> under docket ID:
              </p>
              <div className="inline-block bg-white px-5 py-2.5 rounded-xl border border-[#14532D]/20 font-mono text-lg font-bold text-[#14532D]">
                {applicationId}
              </div>
              <p className="text-xs text-[#8a9389]">
                Our franchise counselor will contact you via <strong>{formData.phone}</strong> and provide the preliminary godown inspection guidelines.
              </p>
              <div className="pt-4 flex justify-center gap-3">
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-4 py-2 text-xs font-semibold text-[#092B1D] bg-white border border-[#092B1D]/20 rounded-lg hover:bg-[#F7F8F3]"
                >
                  Submit Another Form
                </button>
                <button
                  onClick={onOpenProspectus}
                  className="px-4 py-2 text-xs font-bold text-white bg-[#14532D] rounded-lg hover:bg-[#092B1D]"
                >
                  Read Franchise Guidelines
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmitApplication} className="space-y-6">
              
              {/* Step Indicators */}
              <div className="flex items-center gap-2 sm:gap-4 pb-4 border-b border-[#092B1D]/08 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className={`flex items-center gap-1.5 py-1 px-3 rounded-lg ${
                    currentStep === 1
                      ? 'bg-[#14532D] text-white font-bold'
                      : 'text-[#404941] hover:text-[#092B1D]'
                  }`}
                >
                  <span>1. Applicant Profile</span>
                </button>
                <span className="text-[#8a9389]">/</span>
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className={`flex items-center gap-1.5 py-1 px-3 rounded-lg ${
                    currentStep === 2
                      ? 'bg-[#14532D] text-white font-bold'
                      : 'text-[#404941] hover:text-[#092B1D]'
                  }`}
                >
                  <span>2. Land & Location</span>
                </button>
                <span className="text-[#8a9389]">/</span>
                <button
                  type="button"
                  onClick={() => setCurrentStep(3)}
                  className={`flex items-center gap-1.5 py-1 px-3 rounded-lg ${
                    currentStep === 3
                      ? 'bg-[#14532D] text-white font-bold'
                      : 'text-[#404941] hover:text-[#092B1D]'
                  }`}
                >
                  <span>3. Capital Readiness</span>
                </button>
              </div>

              {/* Step 1: Personal & Business Info */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Full Name of Applicant *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      placeholder="e.g. Rajesh Kumar Sharma"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Firm / Company Name (if applicable)
                    </label>
                    <input
                      type="text"
                      name="firmName"
                      placeholder="e.g. Sharma Energy Enterprises"
                      value={formData.firmName}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="rajesh@sharmaenergy.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Mobile Number (WhatsApp Enabled) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none font-mono"
                    />
                  </div>
                  <div className="sm:col-span-2 flex justify-end pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#14532D] hover:bg-[#092B1D] rounded-lg transition-colors"
                    >
                      Next: Land Details →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2: Location & Godown Land */}
              {currentStep === 2 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Target State *
                    </label>
                    <select
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    >
                      <option value="Haryana">Haryana (Corporate HQ State)</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Other">Other State</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Proposed City / District *
                    </label>
                    <input
                      type="text"
                      name="district"
                      required
                      placeholder="e.g. Karnal, Gurugram, Lucknow, Patna..."
                      value={formData.district}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Available Land Area (Square Feet)
                    </label>
                    <select
                      name="landAreaSqFt"
                      value={formData.landAreaSqFt}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    >
                      <option value="3500">3,500 sq ft (Silver Tier)</option>
                      <option value="5000">5,000 sq ft</option>
                      <option value="7500">7,500 sq ft (Gold Tier)</option>
                      <option value="15000">15,000+ sq ft (Super Stockist)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Land Title Status
                    </label>
                    <select
                      name="landOwnership"
                      value={formData.landOwnership}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    >
                      <option value="Owned">Self Owned (Clear Title)</option>
                      <option value="LongLease">Long Lease (10+ Years)</option>
                      <option value="InProcess">Acquiring Soon</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2 flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(1)}
                      className="px-5 py-2.5 text-xs font-semibold text-[#404941] bg-[#F7F8F3] hover:bg-[#eaece5] rounded-lg"
                    >
                      ← Back
                    </button>
                    <button
                      type="button"
                      onClick={() => setCurrentStep(3)}
                      className="px-6 py-2.5 text-xs font-bold text-white bg-[#14532D] hover:bg-[#092B1D] rounded-lg transition-colors"
                    >
                      Next: Financial Readiness →
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3: Capital & Submit */}
              {currentStep === 3 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Available Investment Capital (INR Lakhs)
                    </label>
                    <select
                      name="budgetLakhs"
                      value={formData.budgetLakhs}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    >
                      <option value="20">₹18 - ₹25 Lakhs (Silver Dealer)</option>
                      <option value="35">₹30 - ₹50 Lakhs (Gold Stockist)</option>
                      <option value="85">₹75+ Lakhs (Regional Super Stockist)</option>
                    </select>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Prior Petroleum / Logistics Experience?
                    </label>
                    <select
                      name="hasPesoExperience"
                      value={formData.hasPesoExperience}
                      onChange={handleInputChange}
                      className="w-full h-11 px-3.5 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    >
                      <option value="No">No prior experience (First-time Energy Investor)</option>
                      <option value="Yes-Fuel">Yes, Petrol / Diesel / Lubricants</option>
                      <option value="Yes-LPG">Yes, Active LPG Dealer / Godown</option>
                      <option value="Yes-Logistics">Commercial Fleet Operator</option>
                    </select>
                  </div>
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-[#092B1D] block mb-1">
                      Additional Remarks / Existing Infrastructure Notes
                    </label>
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="Mention road width, proximity to industrial estates, current commercial networks..."
                      value={formData.notes}
                      onChange={handleInputChange}
                      className="w-full p-3 bg-white border border-[#A7B2AA] focus:border-[#65C466] focus:ring-2 focus:ring-[#65C466]/20 rounded-lg text-sm text-[#092B1D] outline-none"
                    />
                  </div>
                  <div className="sm:col-span-2 flex justify-between pt-2">
                    <button
                      type="button"
                      onClick={() => setCurrentStep(2)}
                      className="px-5 py-2.5 text-xs font-semibold text-[#404941] bg-[#F7F8F3] hover:bg-[#eaece5] rounded-lg"
                    >
                      ← Back
                    </button>
                    <button
                      type="submit"
                      className="px-7 py-3 text-xs font-bold text-[#092B1D] bg-[#65C466] hover:bg-[#B7F36B] shadow-[0_0_20px_rgba(101,196,102,0.3)] rounded-lg transition-colors flex items-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Submit Dealership Dossier</span>
                    </button>
                  </div>
                </div>
              )}

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
