import { CylinderProduct, BottlingPlant, FranchiseTier, DealerLocation, SafetyHotspot } from '../types';

export const CYLINDER_PRODUCTS: CylinderProduct[] = [
  {
    id: 'commercial-19kg',
    name: 'IBP 19kg Commercial Vortex',
    capacityKg: 19,
    tareWeightKg: 17.5,
    grossWeightKg: 36.5,
    category: 'Commercial',
    color: 'Orange base with Forest Green Top',
    collarColor: 'Forest Green with White Stencil',
    calorificValue: '11,900 kcal/kg (49.8 MJ/kg)',
    standardPriceEstimateInr: 1780,
    idealFor: ['Restaurants & Cloud Kitchens', 'Hotels & Banquet Centers', 'Commercial Bakeries', 'Catering Units'],
    features: [
      'High-pressure vapour off-take for high-intensity commercial burners',
      'Electronic tare verification with 0.01% weight calibration',
      'Tamper-evident shrink sleeve seal with QR authenticity validation',
      'Zero soot emissions, maintaining clean cookware and kitchen ventilation'
    ],
    specifications: {
      shellMaterial: 'Low Carbon High Tensile Steel (IS:3196 Part 1)',
      testPressureBar: 25.0,
      workingPressureBar: 16.6,
      valveType: 'IS:8737 Self-Closing Brass Valve with Safety Relief',
      standardCompliance: 'PESO & Bureau of Indian Standards (BIS Certified)'
    }
  },
  {
    id: 'industrial-47-5kg',
    name: 'IBP 47.5kg Industrial LOT (Liquid Off-Take)',
    capacityKg: 47.5,
    tareWeightKg: 41.5,
    grossWeightKg: 89.0,
    category: 'Industrial',
    color: 'Industrial Signal Orange with Deep Forest Green Header',
    collarColor: 'Reinforced Deep Forest Green Collar',
    calorificValue: '12,050 kcal/kg (50.4 MJ/kg)',
    standardPriceEstimateInr: 4420,
    idealFor: ['Metal Annealing & Forging Furnaces', 'Powder Coating & Curing Ovens', 'Tea & Food Processing Plants', 'Ceramic & Glass Kilns'],
    features: [
      'Liquid Off-Take (LOT) valve drawing liquid fuel directly to external vaporizers',
      'High sustained flow rate up to 50 kg/hour per manifold without freeze-up',
      'Eliminates cylinder manifold sweating in high-load continuous operations',
      'Heavy-duty industrial footring with oversized drainage & ventilation apertures'
    ],
    specifications: {
      shellMaterial: 'High Tensile Micro-Alloy Steel (IS:3196 Part 2 heavy duty)',
      testPressureBar: 26.0,
      workingPressureBar: 17.2,
      valveType: 'LOT Dual-Port Heavy Duty Valve with Dip Tube',
      standardCompliance: 'PESO SMPV (Unfired) Rules & OISD-144 Standards'
    }
  },
  {
    id: 'hospitality-33kg',
    name: 'IBP 33kg Maxima Hospitality',
    capacityKg: 33,
    tareWeightKg: 28.5,
    grossWeightKg: 61.5,
    category: 'Hospitality',
    color: 'Bright Orange Body with Emerald Green Crown',
    collarColor: 'Emerald Green',
    calorificValue: '11,950 kcal/kg (50.0 MJ/kg)',
    standardPriceEstimateInr: 3080,
    idealFor: ['5-Star Luxury Hotels', 'Central Food Prep Commissaries', 'Hospital Kitchens', 'Industrial Laundries'],
    features: [
      'Balanced mid-range weight optimizing cylinder bank footprint',
      'Vapour draw engineered for multi-station kitchen ranges',
      'Anti-corrosive electrostatic powder coating for high-humidity coastal climates',
      'Compact radius allowing ergonomic handling in tight service corridors'
    ],
    specifications: {
      shellMaterial: 'Low Carbon Steel (IS:3196)',
      testPressureBar: 25.0,
      workingPressureBar: 16.6,
      valveType: 'IS:8737 Precision Brass Valve with Overpressure Relief',
      standardCompliance: 'PESO & BIS Certified'
    }
  },
  {
    id: 'domestic-14-2kg',
    name: 'IBP 14.2kg Domestic Prime',
    capacityKg: 14.2,
    tareWeightKg: 15.3,
    grossWeightKg: 29.5,
    category: 'Domestic',
    color: 'Classic Orange Shell with Green Crown Collar',
    collarColor: 'Forest Green',
    calorificValue: '11,850 kcal/kg (49.6 MJ/kg)',
    standardPriceEstimateInr: 903,
    idealFor: ['Residential Households', 'Gated Communities', 'PG Accommodations', 'Staff Quarters'],
    features: [
      'Subsidized & non-subsidized retail cylinder distribution via local dealers',
      'Automatic safety excess-flow check in regulator valve',
      '5-Year compulsory hydrostatic testing cycle strictly verified before refill',
      'Leak-proof blind-hole collar design protecting valve during transit'
    ],
    specifications: {
      shellMaterial: 'Standard Cylinder Steel (IS:3196)',
      testPressureBar: 24.5,
      workingPressureBar: 16.0,
      valveType: 'Compact 25.6mm Click-On Domestic Valve',
      standardCompliance: 'BIS IS:3196 & PESO Approved'
    }
  }
];

export const BOTTLING_PLANTS: BottlingPlant[] = [
  {
    id: 'plant-pune',
    name: 'Pune Central Automated Bottling Depot',
    location: 'Chakan Industrial Zone, Pune',
    state: 'Maharashtra',
    carouselCapacityPerHour: 1800,
    storageCapacityMt: 450,
    isoCertification: 'ISO 9001:2015 & ISO 14001:2015',
    pesoLicenseNo: 'PESO/WZ/MH/LPG/4821',
    operationalSince: '2016',
    status: 'Operational',
    dailyThroughputCylinders: 14200,
    chiefEngineer: 'R. K. Deshmukh (M.Tech Petroleum)',
    safetyRecordDays: 1842
  },
  {
    id: 'plant-sanand',
    name: 'Sanand Mega Energy Terminal & Depot',
    location: 'GIDC Sanand Phase II, Ahmedabad',
    state: 'Gujarat',
    carouselCapacityPerHour: 2400,
    storageCapacityMt: 750,
    isoCertification: 'ISO 9001:2015 & OHSAS 18001',
    pesoLicenseNo: 'PESO/WZ/GJ/LPG/5912',
    operationalSince: '2018',
    status: 'Active Dispense',
    dailyThroughputCylinders: 19800,
    chiefEngineer: 'H. B. Patel (Chief Plant Ops)',
    safetyRecordDays: 2190
  },
  {
    id: 'plant-coimbatore',
    name: 'Coimbatore Southern Regional Hub',
    location: 'SIDCO Industrial Estate, Coimbatore',
    state: 'Tamil Nadu',
    carouselCapacityPerHour: 1200,
    storageCapacityMt: 300,
    isoCertification: 'ISO 9001:2015 Certified',
    pesoLicenseNo: 'PESO/SZ/TN/LPG/3310',
    operationalSince: '2020',
    status: 'Operational',
    dailyThroughputCylinders: 9500,
    chiefEngineer: 'S. Ramanathan (Lead Inspection)',
    safetyRecordDays: 1420
  },
  {
    id: 'plant-jaipur',
    name: 'Jaipur North Energy Depot',
    location: 'Sitapura Industrial Area, Jaipur',
    state: 'Rajasthan',
    carouselCapacityPerHour: 1400,
    storageCapacityMt: 380,
    isoCertification: 'ISO 9001:2015 & ISO 45001',
    pesoLicenseNo: 'PESO/NZ/RJ/LPG/4198',
    operationalSince: '2019',
    status: 'Operational',
    dailyThroughputCylinders: 11200,
    chiefEngineer: 'Vikram Singh Rathore',
    safetyRecordDays: 1670
  },
  {
    id: 'plant-bokaro',
    name: 'Bokaro Eastern Bulk Logistics Depot',
    location: 'BIAADA Industrial Complex, Bokaro',
    state: 'Jharkhand',
    carouselCapacityPerHour: 1100,
    storageCapacityMt: 280,
    isoCertification: 'ISO 9001:2015',
    pesoLicenseNo: 'PESO/EZ/JH/LPG/2904',
    operationalSince: '2021',
    status: 'Operational',
    dailyThroughputCylinders: 8700,
    chiefEngineer: 'Anil Kumar Soren',
    safetyRecordDays: 1105
  }
];

export const FRANCHISE_TIERS: FranchiseTier[] = [
  {
    id: 'tier-silver',
    tierName: 'Silver Retail Dealer',
    targetMonthlyVolume: '1,500 – 3,000 Cylinders',
    minLandRequirementSqFt: 3500,
    capitalInvestmentLakhs: 18.5,
    securityDepositLakhs: 5.0,
    estimatedMonthlyNetRoiLakhs: 1.45,
    paybackMonths: 14,
    targetDistricts: 'Tier 2 & Tier 3 Talukas, Semi-urban Hubs',
    benefits: [
      'Protected 8-kilometer radius operational exclusivity',
      'Digital billing & automated CRM booking software included',
      'IBP Gas branded signage, dealer canopy & safety equipment pack',
      'Initial 10-day staff safety & handling certification training'
    ],
    idealProfile: 'Established fuel or hardware traders with accessible road frontage and clean title land.'
  },
  {
    id: 'tier-gold',
    tierName: 'Gold Commercial Stockist',
    targetMonthlyVolume: '5,000 – 12,000 Cylinders',
    minLandRequirementSqFt: 7500,
    capitalInvestmentLakhs: 38.0,
    securityDepositLakhs: 10.0,
    estimatedMonthlyNetRoiLakhs: 3.80,
    paybackMonths: 11,
    targetDistricts: 'Industrial Corridors, Major Metro Suburbs, Restaurant Hubs',
    benefits: [
      'Priority delivery dispatch direct from central automated carousels',
      'Direct account allocation for institutional & hotel chain contracts',
      'Dedicated logistics tracking terminal & cylinder barcode scanners',
      'Subsidized transport rate contracts for dedicated delivery trucks'
    ],
    idealProfile: 'Experienced logistics operators, fleet owners, or B2B distributors seeking high-velocity recurring energy cash flows.'
  },
  {
    id: 'tier-super',
    tierName: 'Super Stockist & Regional Distributor',
    targetMonthlyVolume: '20,000+ Cylinders',
    minLandRequirementSqFt: 15000,
    capitalInvestmentLakhs: 85.0,
    securityDepositLakhs: 25.0,
    estimatedMonthlyNetRoiLakhs: 9.60,
    paybackMonths: 9,
    targetDistricts: 'District Headquarters & Regional Logistics Arteries',
    benefits: [
      'Wholesale margin advantage with regional clearing rights',
      'Co-branded IBP Regional Hub terminal status with high visibility',
      'Bulk LOT manifold installation support team assigned directly',
      'Direct seat on the IBP Annual Energy Franchise Advisory Council'
    ],
    idealProfile: 'High-net-worth enterprise investors, institutional energy traders, or warehouse conglomerate operators.'
  }
];

export const SAFETY_HOTSPOTS: SafetyHotspot[] = [
  {
    id: 'spot-collar',
    title: 'Ergonomic Stamped Collar Guard',
    subtitle: 'Impact & Handling Shield',
    description: 'Constructed from heavy-gauge structural steel welded around the neck. Features stamped tare weight (kg), last hydraulic test quarter, and serial registration. Shields the valve against falls and side impacts up to 500 Joules.',
    standard: 'BIS IS:3196 (Part 1) Clause 9 & OISD-144',
    position: { x: 50, y: 15 }
  },
  {
    id: 'spot-valve',
    title: 'Precision Self-Closing Brass Valve',
    subtitle: 'Fail-Safe Pressure Relief',
    description: 'Forged from high-tensile copper-zinc brass (IS:8737) with integrated internal spring-loaded pressure relief mechanism that automatically relieves excess pressure at 25 bar before resealing without catastrophic release.',
    standard: 'IS:8737 Type 1 with PESO certification stamp',
    position: { x: 50, y: 22 }
  },
  {
    id: 'spot-shell',
    title: 'Deep-Drawn High-Tensile Steel Body',
    subtitle: 'Circumferential Submerged Arc Weld',
    description: 'Fabricated from low-carbon, micro-alloyed cold-rolled steel sheets with minimum tensile strength of 410 MPa. Two deep-drawn halves are joined via automated submerged arc welding, inspected via 100% X-ray radiographic checks.',
    standard: 'IS:3196 (Part 1 & 2) Burst Test Pressure: 40 bar',
    position: { x: 50, y: 55 }
  },
  {
    id: 'spot-seal',
    title: 'Tamper-Evident Holographic Seal',
    subtitle: 'Digital Purity Verification',
    description: 'Every cylinder exiting the automated carousel is hermetically sealed with an IBP GAS registered holographic tamper band containing an encrypted micro-QR code linking to bottling batch certificate, net weight, and tare record.',
    standard: 'Indo Bright Petroleum Quality Assurance Seal',
    position: { x: 50, y: 28 }
  },
  {
    id: 'spot-footring',
    title: 'Ventilated Anti-Tip Footring',
    subtitle: 'Ground Airflow & Structural Stability',
    description: 'Continuous circular bottom ring with 4 precision drainage ports prevents water stagnation, eliminating ground corrosion. Elevates the lower cylinder hemisphere 25mm above floor surface to ensure continuous natural air ventilation.',
    standard: 'IS:3196 Ground Stability Standard',
    position: { x: 50, y: 88 }
  }
];

export const DEALER_LOCATIONS: DealerLocation[] = [
  {
    id: 'dl-1',
    name: 'Om Sai Energy Agency (IBP Franchisee)',
    city: 'Pune',
    state: 'Maharashtra',
    pincode: '411019',
    contactPerson: 'Suresh Patil',
    phone: '+91 98221 44011',
    address: 'Plot 42, Bhosari Industrial Area, Pune',
    rating: 4.9,
    emergencyDeliveryAvailable: true,
    cylinderCapacity: 2500
  },
  {
    id: 'dl-2',
    name: 'Navkar Petroleum & Gas Hub',
    city: 'Ahmedabad',
    state: 'Gujarat',
    pincode: '382443',
    contactPerson: 'Bhavin Shah',
    phone: '+91 98791 22340',
    address: 'Survey 112, Changodar Highway, Ahmedabad',
    rating: 4.8,
    emergencyDeliveryAvailable: true,
    cylinderCapacity: 3800
  },
  {
    id: 'dl-3',
    name: 'Sri Krishna Gas Agency',
    city: 'Coimbatore',
    state: 'Tamil Nadu',
    pincode: '641021',
    contactPerson: 'K. Murugan',
    phone: '+91 94432 88910',
    address: '77 Avinashi Road, Peelamedu, Coimbatore',
    rating: 4.9,
    emergencyDeliveryAvailable: true,
    cylinderCapacity: 1800
  },
  {
    id: 'dl-4',
    name: 'Royal Rajputana Energy Distributors',
    city: 'Jaipur',
    state: 'Rajasthan',
    pincode: '302022',
    contactPerson: 'Mahendra Singh',
    phone: '+91 94140 76512',
    address: 'C-89, Road 14, Vishwakarma Industrial Area, Jaipur',
    rating: 4.7,
    emergencyDeliveryAvailable: true,
    cylinderCapacity: 2200
  },
  {
    id: 'dl-5',
    name: 'Bengaluru Industrial Gas Corporation',
    city: 'Bengaluru',
    state: 'Karnataka',
    pincode: '560058',
    contactPerson: 'Arun Hegde',
    phone: '+91 98450 33219',
    address: 'Phase 1, Peenya Industrial Area, Bengaluru',
    rating: 5.0,
    emergencyDeliveryAvailable: true,
    cylinderCapacity: 4500
  },
  {
    id: 'dl-6',
    name: 'Capital Energy Logistics',
    city: 'New Delhi / Gurugram',
    state: 'Haryana',
    pincode: '122016',
    contactPerson: 'Gaurav Aggarwal',
    phone: '+91 98110 55432',
    address: 'Sector 37 Pace City II, Gurugram',
    rating: 4.9,
    emergencyDeliveryAvailable: true,
    cylinderCapacity: 3100
  }
];

export const FUEL_COMPARISON = [
  {
    fuel: 'IBP LPG (Liquid Petroleum Gas)',
    calorificValue: '11,900 kcal/kg',
    thermalEfficiency: '72% - 85%',
    carbonEmissionsKgCo2PerGj: '63.1',
    particulateSoot: 'Zero / Trace',
    operatingCostIndex: '1.0x (Baseline)',
    equipmentLifespan: 'High (clean burning, zero sulphur fouling)'
  },
  {
    fuel: 'High Speed Diesel (HSD)',
    calorificValue: '10,200 kcal/kg',
    thermalEfficiency: '50% - 62%',
    carbonEmissionsKgCo2PerGj: '74.1',
    particulateSoot: 'High (requires soot collectors)',
    operatingCostIndex: '1.34x (+34% more expensive)',
    equipmentLifespan: 'Medium (carbon deposits, nozzle wear)'
  },
  {
    fuel: 'Furnace Oil (FO / LDO)',
    calorificValue: '9,800 kcal/kg',
    thermalEfficiency: '45% - 55%',
    carbonEmissionsKgCo2PerGj: '77.4',
    particulateSoot: 'Very High (heavy sulphur, black smoke)',
    operatingCostIndex: '1.22x (+22% more expensive)',
    equipmentLifespan: 'Low (corrosive SOx acids, frequent cleaning)'
  },
  {
    fuel: 'Commercial Grid Electricity',
    calorificValue: '860 kcal/kWh',
    thermalEfficiency: '85% - 92%',
    carbonEmissionsKgCo2PerGj: '220.0 (Coal grid average)',
    particulateSoot: 'Zero at site (high at power plant)',
    operatingCostIndex: '2.15x (+115% higher power tariffs)',
    equipmentLifespan: 'High (expensive high-kVA demand charges)'
  }
];
