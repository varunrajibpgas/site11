export interface CylinderProduct {
  id: string;
  name: string;
  capacityKg: number;
  tareWeightKg: number;
  grossWeightKg: number;
  category: 'Commercial' | 'Industrial' | 'Domestic' | 'Hospitality';
  color: string;
  collarColor: string;
  calorificValue: string;
  standardPriceEstimateInr: number;
  idealFor: string[];
  features: string[];
  specifications: {
    shellMaterial: string;
    testPressureBar: number;
    workingPressureBar: number;
    valveType: string;
    standardCompliance: string;
  };
}

export interface BottlingPlant {
  id: string;
  name: string;
  location: string;
  state: string;
  carouselCapacityPerHour: number;
  storageCapacityMt: number;
  isoCertification: string;
  pesoLicenseNo: string;
  operationalSince: string;
  status: 'Operational' | 'Active Dispense' | 'Maintenance Window';
  dailyThroughputCylinders: number;
  chiefEngineer: string;
  safetyRecordDays: number;
}

export interface FranchiseTier {
  id: string;
  tierName: string;
  targetMonthlyVolume: string;
  minLandRequirementSqFt: number;
  capitalInvestmentLakhs: number;
  securityDepositLakhs: number;
  estimatedMonthlyNetRoiLakhs: number;
  paybackMonths: number;
  targetDistricts: string;
  benefits: string[];
  idealProfile: string;
}

export interface DealerLocation {
  id: string;
  name: string;
  city: string;
  state: string;
  pincode: string;
  contactPerson: string;
  phone: string;
  address: string;
  rating: number;
  emergencyDeliveryAvailable: boolean;
  cylinderCapacity: number;
}

export interface SafetyHotspot {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  standard: string;
  position: { x: number; y: number }; // percentage coords on cylinder
}
