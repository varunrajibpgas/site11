import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Award, ShieldCheck, Flame, Building, Truck, ChevronRight } from 'lucide-react';

interface HeroSectionProps {
  onExploreDealership: () => void;
  onExploreProducts: () => void;
  onOpenProspectus: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onExploreDealership,
  onExploreProducts,
  onOpenProspectus
}) => {
  const [activeHeroTab, setActiveHeroTab] = useState<'dispatch' | 'showroom'>('dispatch');

  return (
    <section id="overview" className="relative overflow-hidden bg-[#092B1D] pt-10 pb-20 border-b border-[#65C466]/15">
      {/* Ambient Radial Backlighting */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#65C466]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[450px] h-[450px] bg-[#14532D]/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Full Company Legal Entity Ribbon */}
        <div className="mb-6 inline-flex flex-wrap items-center gap-2 px-3.5 py-1.5 rounded-lg bg-[#10251B] border border-[#65C466]/30 text-xs font-semibold text-[#dae5dd]">
          <span className="text-[#65C466] font-bold">OFFICIAL COMPANY:</span>
          <span className="text-white font-extrabold font-display tracking-wide">
            INDO BRIGHT PETROLEUM PVT. LTD.
          </span>
          <span className="text-[#8a9389]">|</span>
          <span className="text-[#B7F36B] font-mono">IBP GAS · Established 2013</span>
        </div>

        {/* Main 2-Column Responsive Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Corporate Pitch & Proposition (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* The Official ibpgas.co.in Headline Tagline */}
            <div className="text-xs font-bold tracking-wider text-[#65C466] uppercase font-display">
              India's Premier Clean Energy & LPG Distribution Network
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-white leading-[1.12] font-display [text-wrap:balance]">
              Powering Industries. Fueling Businesses. Energizing India.
            </h1>

            {/* Value Proposition Prose highlighting INDO BRIGHT PETROLEUM PVT. LTD. */}
            <p className="text-base sm:text-lg text-[#c0c9be] max-w-2xl leading-relaxed font-sans">
              <strong>INDO BRIGHT PETROLEUM PVT. LTD.</strong> (IBP GAS) delivers high-calorific, non-subsidized LPG and clean energy solutions to hotels, manufacturing facilities, commercial kitchens, and rural-urban households across India. Backed by automated electronic carousels and an expanding dealership network spanning hundreds of cities.
            </p>

            {/* Bullet Proof Points from Live Site */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dae5dd]">
                <CheckCircle2 className="w-4 h-4 text-[#65C466] shrink-0 mt-0.5" />
                <span><strong className="text-white">Commercial & Industrial:</strong> High-pressure VOT & LOT cylinder banks</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dae5dd]">
                <CheckCircle2 className="w-4 h-4 text-[#65C466] shrink-0 mt-0.5" />
                <span><strong className="text-white">Automated Bottling:</strong> Multi-carousel plants across Haryana, UP & Bihar</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dae5dd]">
                <CheckCircle2 className="w-4 h-4 text-[#65C466] shrink-0 mt-0.5" />
                <span><strong className="text-white">Franchise Exclusivity:</strong> Lucrative margins & protected dealer territories</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs sm:text-sm text-[#dae5dd]">
                <CheckCircle2 className="w-4 h-4 text-[#65C466] shrink-0 mt-0.5" />
                <span><strong className="text-white">Future Energy:</strong> Expanding into Auto LPG and Compressed Bio-Gas (CBG)</span>
              </div>
            </div>

            {/* Conversion CTA Group: Strictly focused on Dealership, Prospectus, and Products (NO Book Gas) */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <button
                onClick={onExploreDealership}
                className="px-6 py-3.5 text-sm font-bold text-[#092B1D] bg-[#65C466] hover:bg-[#B7F36B] shadow-[0_0_24px_rgba(101,196,102,0.4)] rounded-lg transition-all transform active:scale-95 flex items-center gap-2 group whitespace-nowrap"
              >
                <span>Apply for Dealership Franchise</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={onOpenProspectus}
                className="px-5 py-3.5 text-sm font-semibold text-white bg-[#14532D] hover:bg-[#18221c] border border-[#65C466]/30 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap"
              >
                <span>Download Franchise Deck</span>
              </button>

              <button
                onClick={onExploreProducts}
                className="px-4 py-3.5 text-xs font-semibold text-[#c0c9be] hover:text-white transition-colors"
              >
                View Energy Lineup ↓
              </button>
            </div>

            {/* Regulatory Compliance Footnote */}
            <div className="pt-1 flex items-center gap-2 text-xs text-[#8a9389]">
              <ShieldCheck className="w-4 h-4 text-[#B7F36B] shrink-0" />
              <span>Incorporated under the Ministry of Corporate Affairs, Govt of India · PESO & BIS IS:3196 Licensed</span>
            </div>

          </div>

          {/* Right Column: Live Site Visual Showcase with Real Hotlinked Photos (5 cols) */}
          <div className="lg:col-span-5 relative space-y-4">
            
            {/* Live Site Photographic Showcase Card */}
            <div className="bg-[#10251B] border border-[#65C466]/25 rounded-2xl p-5 shadow-[0_24px_64px_rgba(0,0,0,0.55)]">
              
              {/* Photo Switcher Tabs */}
              <div className="flex items-center justify-between pb-3 border-b border-[#65C466]/15">
                <span className="text-xs font-bold text-[#65C466] uppercase tracking-wider">
                  Live Operations View
                </span>
                <div className="flex items-center gap-1.5 p-1 bg-[#0c1510] rounded-lg border border-[#65C466]/20 text-[11px]">
                  <button
                    onClick={() => setActiveHeroTab('dispatch')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeHeroTab === 'dispatch'
                        ? 'bg-[#14532D] text-white font-bold'
                        : 'text-[#8a9389] hover:text-white'
                    }`}
                  >
                    Fleet Logistics
                  </button>
                  <button
                    onClick={() => setActiveHeroTab('showroom')}
                    className={`px-2.5 py-1 rounded font-medium transition-colors ${
                      activeHeroTab === 'showroom'
                        ? 'bg-[#14532D] text-white font-bold'
                        : 'text-[#8a9389] hover:text-white'
                    }`}
                  >
                    Dealer Showroom
                  </button>
                </div>
              </div>

              {/* Dynamic Image Display with Authentic High-Res Photos */}
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden bg-[#0c1510] border border-[#65C466]/20 my-3 group">
                <img
                  src={
                    activeHeroTab === 'dispatch'
                      ? '/images/hero-lpg-dispatch.jpg'
                      : '/images/hero-dealer-showroom.jpg'
                  }
                  alt={
                    activeHeroTab === 'dispatch'
                      ? 'IBP GAS Bulk Tankers and Dispatch Logistics'
                      : 'IBP GAS Franchise Showroom and Outlet'
                  }
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c1510] via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-[#dae5dd]">
                  <span className="font-bold text-white block">
                    {activeHeroTab === 'dispatch'
                      ? 'Bulk LPG Transportation Fleet & Highway Tankers'
                      : 'Authorized IBP GAS Dealer Showroom Experience'}
                  </span>
                  <span className="text-[11px] text-[#96d5a3]">
                    Indo Bright Petroleum Pvt. Ltd. Operations
                  </span>
                </div>
              </div>

              {/* Cylinder Anchor Preview using the user-provided cylinder photo */}
              <div className="bg-[#18221c] p-3 rounded-xl border border-[#65C466]/20 flex items-center gap-3.5">
                <div className="w-12 h-16 bg-[#0c1510] rounded-lg p-1 border border-[#65C466]/30 shrink-0 flex items-center justify-center overflow-hidden">
                  <img
                    src="/assets/aistudio/Image_5_ca95957c.jpeg"
                    alt="Signature IBP GAS Cylinder"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-white truncate font-display">
                      Signature Double-Coat Cylinder
                    </span>
                    <span className="text-[10px] text-[#B7F36B] font-mono font-bold">
                      IS:3196 Certified
                    </span>
                  </div>
                  <p className="text-[11px] text-[#8a9389] mt-0.5 truncate">
                    Orange body with Forest Green crown & collar guard
                  </p>
                  <div className="flex items-center gap-2 mt-1 text-[10px] text-[#65C466]">
                    <span>High-calorific propane-butane mix</span>
                    <span>·</span>
                    <span>Zero soot</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>

        {/* 4-Column Metric Proof Strip */}
        <div className="mt-14 pt-8 border-t border-[#65C466]/20 grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          
          <div className="relative bg-[#10251B] p-5 rounded-xl border border-[#65C466]/15 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#65C466]" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
              300+
            </div>
            <div className="text-xs font-semibold text-[#8a9389] tracking-wider uppercase mt-1">
              Authorized Franchise Outlets
            </div>
            <p className="text-xs text-[#c0c9be] mt-1.5">
              Rapidly expanding network across North, Central, and Eastern India.
            </p>
          </div>

          <div className="relative bg-[#10251B] p-5 rounded-xl border border-[#65C466]/15 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#B7F36B]" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
              1,00,000+
            </div>
            <div className="text-xs font-semibold text-[#8a9389] tracking-wider uppercase mt-1">
              Commercial & Domestic Users
            </div>
            <p className="text-xs text-[#c0c9be] mt-1.5">
              Powering restaurants, catering, bakeries, factories, and homes.
            </p>
          </div>

          <div className="relative bg-[#10251B] p-5 rounded-xl border border-[#65C466]/15 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#65C466]" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
              5+
            </div>
            <div className="text-xs font-semibold text-[#8a9389] tracking-wider uppercase mt-1">
              Modern Bottling Plants
            </div>
            <p className="text-xs text-[#c0c9be] mt-1.5">
              Automated electronic carousels in Haryana, UP, Bihar & terminals.
            </p>
          </div>

          <div className="relative bg-[#10251B] p-5 rounded-xl border border-[#65C466]/15 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-[#B7F36B]" />
            <div className="text-3xl sm:text-4xl font-extrabold text-white font-display tabular-nums tracking-tight">
              100%
            </div>
            <div className="text-xs font-semibold text-[#8a9389] tracking-wider uppercase mt-1">
              PESO & BIS Verified
            </div>
            <p className="text-xs text-[#c0c9be] mt-1.5">
              Mandatory 25-bar hydrostatic tests and electronic tare calibration.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
