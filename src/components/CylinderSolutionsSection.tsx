import React, { useState } from 'react';
import { Flame, Check, ShieldCheck, Calculator, ArrowUpRight, CheckCircle2, TrendingDown, Leaf, Zap, Award } from 'lucide-react';

interface ProductOffering {
  id: string;
  name: string;
  category: string;
  iconImage: string;
  heroImage?: string;
  tagline: string;
  description: string;
  availableSizes: string[];
  keyBenefits: string[];
  specs: {
    calorificValue: string;
    compliance: string;
    targetSectors: string;
  };
}

const PRODUCTS_OFFERING: ProductOffering[] = [
  {
    id: 'commercial',
    name: 'Commercial LPG',
    category: 'Hospitality & Commercial',
    iconImage: '/images/commercial-lpg.png',
    heroImage: '/images/commercial-lpg.jpg',
    tagline: 'High-Pressure Pure Flame for Restaurants, Hotels & Caterers',
    description: 'Engineered specifically for heavy culinary demands, our commercial cylinders deliver sustained high-vapour off-take rates, eliminating burner sputtering, soot deposits on cookware, and sudden flame extinction during peak service hours.',
    availableSizes: ['19 kg Vortex', '33 kg Maxima', '35 kg Commercial Bank', '47.5 kg LOT'],
    keyBenefits: [
      'Zero soot and smoke emission, keeping kitchens clean & hygienic',
      'High thermal heat value of 11,900 kcal/kg for rapid cooking turnaround',
      'Electronic tare verification on automated carousels before dispatch',
      'Tamper-proof holographic QR security seals on every cylinder'
    ],
    specs: {
      calorificValue: '11,900 kcal/kg (49.8 MJ/kg)',
      compliance: 'IS:3196 Low Carbon Steel & IS:8737 Precision Brass Valve',
      targetSectors: 'Hotels, Cloud Kitchens, Banquet Halls, Bakeries, Canteens'
    }
  },
  {
    id: 'industrial',
    name: 'Industrial Gas & VOT/LOT Systems',
    category: 'Manufacturing & Heavy Process',
    iconImage: '/images/industrial-gas.png',
    heroImage: '/images/products.jpg',
    tagline: 'Vaporizer Operated Twin (VOT) & Liquid Off-Take (LOT) Manifolds',
    description: 'Tailored for industrial heating, powder coating, annealing furnaces, ceramic kilns, and tea drying plants. Our LOT systems draw liquid LPG directly into vaporizers, enabling continuous withdrawal of up to 50 kg/hr per manifold without cylinder freezing.',
    availableSizes: ['47.5 kg LOT Cylinder', '47.5 kg VOT Cylinder', 'Bulk LPG Tankers'],
    keyBenefits: [
      'Eliminates cylinder sweating and freezing in high-load continuous ops',
      'Significant cost savings vs diesel (HSD) and dirty furnace oil (LDO)',
      'Substantially lower sulphur and carbon footprint under clean air norms',
      'Turnkey manifold engineering, piping, and PESO Form E liaison support'
    ],
    specs: {
      calorificValue: '12,050 kcal/kg (50.4 MJ/kg)',
      compliance: 'PESO SMPV (Unfired) Rules & OISD-144 Standards',
      targetSectors: 'Metal Treatment, Glass Kilns, Agro-Processing, Textile Steam'
    }
  },
  {
    id: 'domestic',
    name: 'Domestic LPG',
    category: 'Households & Communities',
    iconImage: '/images/domestic-lpg.png',
    heroImage: '/images/hero-dealer-showroom.jpg',
    tagline: 'Safe, Clean & Efficient Cooking Energy for Every Home',
    description: 'Providing households with reliable, subsidized and non-subsidized LPG cylinders backed by rigorous five-year hydrostatic testing cycles, automatic excess-flow safety valves, and fast local doorstep delivery through authorized dealers.',
    availableSizes: ['6 kg Mini Portable', '12 kg Rural Prime', '14.2 kg Domestic Standard'],
    keyBenefits: [
      'Strict 5-year compulsory hydrostatic testing cycle stamped on collar',
      'Accurate weight assurance with automated computerized carousel filling',
      'Click-on self-closing valve compatible with all standard domestic regulators',
      'Prompt doorstep delivery with booking SMS and delivery OTP security'
    ],
    specs: {
      calorificValue: '11,850 kcal/kg (49.6 MJ/kg)',
      compliance: 'BIS Certified IS:3196 (Part 1 & 2)',
      targetSectors: 'Residential Apartments, Rural Homes, Gated Communities, Staff Quarters'
    }
  },
  {
    id: 'auto-lpg',
    name: 'Auto LPG (Automotive Clean Fuel)',
    category: 'Mobility & Clean Transport',
    iconImage: '/images/auto-lpg.png',
    heroImage: '/images/delivery-fleet.jpg',
    tagline: 'Cost-Effective, Low-Emission Automotive Propellant',
    description: 'A superior alternative to petrol and diesel for passenger cars, autorickshaws, and commercial fleet vans. Auto LPG offers up to 40% fuel expense savings while drastically reducing particulate matter (PM2.5) and greenhouse emissions.',
    availableSizes: ['ALDS (Auto LPG Dispensing Stations)', 'Fleet Bulk Refueling'],
    keyBenefits: [
      'Over 40% operating cost reduction compared to petrol',
      'Significantly lower engine carbon deposits, extending spark plug & oil life',
      'High octane rating (~105-110) providing smooth, knock-free acceleration',
      'Compliant with Motor Vehicles Act and PESO Auto LPG dispensing guidelines'
    ],
    specs: {
      calorificValue: '11,920 kcal/kg · Octane Rating: 105+',
      compliance: 'IS:14861 Automotive LPG Specification & PESO Code',
      targetSectors: 'Taxis, Commercial Fleets, Autorickshaws, Private Commuters'
    }
  },
  {
    id: 'cbg-energy',
    name: 'Compressed Bio-Gas (CBG)',
    category: 'Renewable Clean Energy',
    iconImage: '/images/cbg-energy.png',
    heroImage: '/images/bottling-plant.jpg',
    tagline: 'Decarbonizing India Through Sustainable Renewable Bio-Fuel',
    description: 'Indo Bright Petroleum is actively investing in Compressed Bio-Gas (CBG) plants under the SATAT initiative, processing agricultural residue, press mud, and animal biomass into high-purity compressed biomethane (>90% CH4) for commercial and automotive consumption.',
    availableSizes: ['Cascades (3000L / 4500L)', 'Grid Injection', 'Industrial Bulk Off-take'],
    keyBenefits: [
      '100% renewable and domestic carbon-neutral green fuel',
      'Supports agrarian circular economy and reduces stubble burning pollution',
      'Generates valuable organic bio-fertilizer as co-product for farming',
      'Seamless drop-in replacement for natural gas with zero infrastructure change'
    ],
    specs: {
      calorificValue: '12,500 kcal/kg · Methane Purity: >90%',
      compliance: 'SATAT Initiative, Ministry of Petroleum and Natural Gas',
      targetSectors: 'Industrial Boilers, Commercial Transport, Urban City Gas Distribution'
    }
  }
];

interface CylinderSolutionsSectionProps {
  onNavigateToDealership: () => void;
  onOpenProspectus: () => void;
}

export const CylinderSolutionsSection: React.FC<CylinderSolutionsSectionProps> = ({
  onNavigateToDealership,
  onOpenProspectus
}) => {
  const [activeTab, setActiveTab] = useState<string>('commercial');
  
  // Fuel Calculator State
  const [baselineFuel, setBaselineFuel] = useState<'diesel' | 'furnaceOil' | 'electricity'>('diesel');
  const [monthlyConsumption, setMonthlyConsumption] = useState<number>(3000);

  const selectedProduct = PRODUCTS_OFFERING.find((p) => p.id === activeTab) || PRODUCTS_OFFERING[0];

  // Dynamic Fuel Savings calculation
  const calculateSavings = () => {
    let costCurrent = 0;
    let costLpg = 0;
    let co2Current = 0;
    let co2Lpg = 0;

    if (baselineFuel === 'diesel') {
      costCurrent = monthlyConsumption * 94;
      const lpgKgRequired = (monthlyConsumption * 10200 * 0.55) / (11900 * 0.80);
      costLpg = lpgKgRequired * 93;
      co2Current = (monthlyConsumption * 2.68) / 1000;
      co2Lpg = (lpgKgRequired * 1.51) / 1000;
    } else if (baselineFuel === 'furnaceOil') {
      costCurrent = monthlyConsumption * 62;
      const lpgKgRequired = (monthlyConsumption * 9800 * 0.48) / (11900 * 0.80);
      costLpg = lpgKgRequired * 93;
      co2Current = (monthlyConsumption * 3.15) / 1000;
      co2Lpg = (lpgKgRequired * 1.51) / 1000;
    } else {
      costCurrent = monthlyConsumption * 11.5;
      const lpgKgRequired = (monthlyConsumption * 860 * 0.88) / (11900 * 0.80);
      costLpg = lpgKgRequired * 93;
      co2Current = (monthlyConsumption * 0.82) / 1000;
      co2Lpg = (lpgKgRequired * 1.51) / 1000;
    }

    const netSavings = Math.max(0, costCurrent - costLpg);
    const savingsPercent = Math.min(65, Math.round((netSavings / (costCurrent || 1)) * 100));
    const co2AvoidedTonnes = Math.max(0, co2Current - co2Lpg);

    return {
      costCurrent: Math.round(costCurrent),
      costLpg: Math.round(costLpg),
      netSavings: Math.round(netSavings),
      savingsPercent,
      co2AvoidedTonnes: co2AvoidedTonnes.toFixed(1)
    };
  };

  const savings = calculateSavings();

  return (
    <section id="products" className="bg-[#F7F8F3] text-[#141e18] py-20 border-b border-[#092B1D]/10">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-[#14532D] uppercase font-display mb-2">
            01. Energy Portfolio & Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#092B1D] tracking-tight font-display [text-wrap:balance]">
            Comprehensive Clean Energy Products by INDO BRIGHT PETROLEUM PVT. LTD.
          </h2>
          <p className="mt-3 text-base text-[#404941] leading-relaxed">
            From high-turnover commercial cylinders for hotel kitchens to high-load VOT/LOT industrial installations, Auto LPG, and Compressed Bio-Gas (CBG), IBP GAS powers India’s sustainable energy transformation.
          </p>
        </div>

        {/* 5 Product Tabs with Real Site Artworks */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 pb-6 border-b border-[#092B1D]/10">
          {PRODUCTS_OFFERING.map((prod) => {
            const isActive = activeTab === prod.id;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveTab(prod.id)}
                className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                  isActive
                    ? 'bg-[#14532D] text-white shadow-md border-[#14532D]'
                    : 'bg-white text-[#404941] hover:text-[#092B1D] hover:bg-[#eaece5] border-[#092B1D]/10'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-10 h-10 rounded-lg bg-white/10 p-1 flex items-center justify-center overflow-hidden">
                    <img
                      src={prod.iconImage}
                      alt={prod.name}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className={`text-[10px] px-1.5 py-0.5 rounded font-mono font-bold ${
                    isActive ? 'bg-[#092B1D] text-[#B7F36B]' : 'bg-[#F0F2EB] text-[#404941]'
                  }`}>
                    {prod.category.split(' ')[0]}
                  </span>
                </div>
                <div>
                  <h4 className="text-xs font-bold leading-tight font-display">
                    {prod.name}
                  </h4>
                  <span className={`text-[10px] block mt-0.5 ${isActive ? 'text-[#96d5a3]' : 'text-[#8a9389]'}`}>
                    {prod.availableSizes[0]}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Product Detailed Showcase */}
        <div className="mt-8 bg-white rounded-2xl border border-[#092B1D]/10 p-6 sm:p-8 lg:p-10 shadow-[0_8px_24px_rgba(9,43,29,0.04)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Product Details (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <span className="text-xs font-semibold text-[#14532D] uppercase tracking-wider">
                  {selectedProduct.category} Division
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#092B1D] font-display mt-0.5">
                  {selectedProduct.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#65C466] mt-1">
                  {selectedProduct.tagline}
                </p>
                <p className="text-xs sm:text-sm text-[#404941] mt-3 leading-relaxed">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Available Sizes Strip */}
              <div>
                <h4 className="text-xs font-bold text-[#092B1D] uppercase tracking-wider mb-2 font-display">
                  Available Cylinder Sizes & Manifold Configurations:
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedProduct.availableSizes.map((size, idx) => (
                    <span
                      key={idx}
                      className="bg-[#14532D] text-white px-3 py-1.5 rounded-lg font-mono font-bold shadow-sm"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Benefits */}
              <div>
                <h4 className="text-xs font-bold text-[#092B1D] uppercase tracking-wider mb-2.5 font-display">
                  Core Engineering & Operational Advantages:
                </h4>
                <div className="space-y-2">
                  {selectedProduct.keyBenefits.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#313b36]">
                      <CheckCircle2 className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Navigate to Dealership or View Prospectus (NO Book Gas) */}
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onNavigateToDealership}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-[#14532D] hover:bg-[#092B1D] rounded-lg transition-colors flex items-center gap-1.5"
                >
                  <span>Apply for Dealership in {selectedProduct.name}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#65C466]" />
                </button>
                <button
                  onClick={onOpenProspectus}
                  className="px-4 py-2.5 text-xs font-semibold text-[#092B1D] bg-[#F7F8F3] hover:bg-[#eaece5] border border-[#092B1D]/15 rounded-lg transition-colors"
                >
                  View Technical Prospectus
                </button>
              </div>

            </div>

            {/* Right Column: High-Res Image & Statutory Specs (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Product Photo Showcase */}
              <div className="relative aspect-[16/11] rounded-xl overflow-hidden bg-[#0c1510] border border-[#092B1D]/10 group">
                <img
                  src={selectedProduct.heroImage || selectedProduct.iconImage}
                  alt={selectedProduct.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-xs text-white">
                  <span className="font-bold block font-display">{selectedProduct.name}</span>
                  <span className="text-[11px] text-[#96d5a3]">
                    Indo Bright Petroleum Pvt. Ltd. Official Product
                  </span>
                </div>
              </div>

              {/* Technical Specifications Box */}
              <div className="bg-[#F7F8F3] rounded-xl p-5 border border-[#092B1D]/08 space-y-3 text-xs">
                <div className="flex items-center gap-2 pb-2 border-b border-[#092B1D]/10">
                  <ShieldCheck className="w-4 h-4 text-[#14532D]" />
                  <span className="font-bold text-[#092B1D] uppercase font-display">
                    Statutory & Quality Compliance
                  </span>
                </div>

                <div>
                  <span className="text-[#8a9389] block">Calorific Energy Rating:</span>
                  <span className="font-semibold text-[#092B1D]">{selectedProduct.specs.calorificValue}</span>
                </div>

                <div>
                  <span className="text-[#8a9389] block">Applicable Standard Norms:</span>
                  <span className="font-semibold text-[#092B1D]">{selectedProduct.specs.compliance}</span>
                </div>

                <div>
                  <span className="text-[#8a9389] block">Target Industrial Applications:</span>
                  <span className="font-semibold text-[#092B1D]">{selectedProduct.specs.targetSectors}</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Industrial Fuel Conversion & Carbon Savings Auditor */}
        <div className="mt-14 bg-[#141e18] text-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-[#65C466]/20 relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#65C466] uppercase tracking-wider font-display mb-1">
              <Calculator className="w-4 h-4" />
              <span>Commercial Energy Auditor</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
              Commercial Fuel Switch & Carbon Emission Calculator
            </h3>
            <p className="text-sm text-[#c0c9be] mt-1">
              Simulate operational expenditure reduction and carbon avoidance when replacing dirty furnace oil, diesel, or peak electric tariffs with high-purity IBP LPG.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Input Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div>
                <label className="text-xs font-semibold text-[#c0c9be] uppercase tracking-wider block mb-2">
                  Select Your Current Baseline Fuel:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => setBaselineFuel('diesel')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                      baselineFuel === 'diesel'
                        ? 'bg-[#65C466] text-[#092B1D]'
                        : 'bg-[#222c27] text-[#c0c9be] hover:text-white'
                    }`}
                  >
                    High Speed Diesel
                  </button>
                  <button
                    onClick={() => setBaselineFuel('furnaceOil')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                      baselineFuel === 'furnaceOil'
                        ? 'bg-[#65C466] text-[#092B1D]'
                        : 'bg-[#222c27] text-[#c0c9be] hover:text-white'
                    }`}
                  >
                    Furnace Oil (LDO)
                  </button>
                  <button
                    onClick={() => setBaselineFuel('electricity')}
                    className={`py-2.5 px-3 rounded-lg text-xs font-bold transition-all ${
                      baselineFuel === 'electricity'
                        ? 'bg-[#65C466] text-[#092B1D]'
                        : 'bg-[#222c27] text-[#c0c9be] hover:text-white'
                    }`}
                  >
                    Commercial Power
                  </button>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-semibold text-[#c0c9be] uppercase tracking-wider">
                    Monthly Fuel Consumption:
                  </label>
                  <span className="text-sm font-bold text-[#B7F36B] font-mono tabular-nums">
                    {monthlyConsumption.toLocaleString('en-IN')} {baselineFuel === 'electricity' ? 'kWh' : 'Liters'}/month
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="25000"
                  step="250"
                  value={monthlyConsumption}
                  onChange={(e) => setMonthlyConsumption(Number(e.target.value))}
                  className="w-full h-2 bg-[#2d3731] rounded-lg appearance-none cursor-pointer accent-[#65C466]"
                />
                <div className="flex justify-between text-[11px] text-[#8a9389] mt-1 font-mono">
                  <span>500 {baselineFuel === 'electricity' ? 'kWh' : 'L'}</span>
                  <span>10,000</span>
                  <span>25,000 {baselineFuel === 'electricity' ? 'kWh' : 'L'} (Industrial Load)</span>
                </div>
              </div>

              <div className="p-4 bg-[#18221c] rounded-xl border border-[#65C466]/10 text-xs text-[#c0c9be] space-y-1.5">
                <div className="flex justify-between">
                  <span>Estimated Current Monthly Expense:</span>
                  <span className="font-mono text-white">₹{savings.costCurrent.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span>Projected IBP LPG Energy Spend:</span>
                  <span className="font-mono text-[#65C466]">₹{savings.costLpg.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Savings Display (5 cols) */}
            <div className="lg:col-span-5 bg-[#092B1D] border border-[#65C466]/30 rounded-xl p-6 space-y-5 text-center">
              <div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#8a9389]">
                  Projected Net Monthly Savings
                </span>
                <div className="text-3xl sm:text-4xl font-extrabold text-[#B7F36B] font-display tabular-nums mt-1">
                  ₹{savings.netSavings.toLocaleString('en-IN')}
                </div>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-[#65C466] bg-[#14532D] px-2.5 py-1 rounded-full mt-2">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>{savings.savingsPercent}% Operating Cost Reduction</span>
                </div>
              </div>

              <div className="pt-4 border-t border-[#65C466]/20 flex items-center justify-center gap-6 text-left">
                <div className="flex items-center gap-2">
                  <Leaf className="w-5 h-5 text-[#65C466] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#8a9389] block">CO₂ Avoided</span>
                    <span className="text-sm font-bold text-white font-mono">{savings.co2AvoidedTonnes} Tonnes/mo</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-[#B7F36B] shrink-0" />
                  <div>
                    <span className="text-[11px] text-[#8a9389] block">Thermal Efficiency</span>
                    <span className="text-sm font-bold text-white font-mono">82% vs ~52%</span>
                  </div>
                </div>
              </div>

              <button
                onClick={onNavigateToDealership}
                className="w-full py-3 text-xs font-bold text-[#092B1D] bg-[#65C466] hover:bg-[#B7F36B] rounded-lg transition-colors"
              >
                Inquire for Industrial Manifold & Franchise Supply
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
