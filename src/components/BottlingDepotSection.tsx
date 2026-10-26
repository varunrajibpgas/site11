import React, { useState } from 'react';
import { BOTTLING_PLANTS } from '../data/mockData';
import { BottlingPlant } from '../types';
import { Factory, ShieldCheck, CheckCircle2, Search, FileCheck, Gauge, Warehouse, Cpu, AlertCircle, ArrowRight } from 'lucide-react';

interface BottlingDepotSectionProps {
  onNavigateToDealership: () => void;
}

export const BottlingDepotSection: React.FC<BottlingDepotSectionProps> = ({
  onNavigateToDealership
}) => {
  const [selectedPlant, setSelectedPlant] = useState<BottlingPlant>(BOTTLING_PLANTS[0]);
  const [batchQuery, setBatchQuery] = useState<string>('IBP-HR-2026-B81');
  const [verifiedBatch, setVerifiedBatch] = useState<{
    id: string;
    plant: string;
    tareKg: number;
    hydrostaticBar: number;
    fillingTime: string;
    valveSerial: string;
    passed: boolean;
  } | null>({
    id: 'IBP-HR-2026-B81',
    plant: 'Haryana Automated Bottling Depot',
    tareKg: 17.52,
    hydrostaticBar: 25.0,
    fillingTime: '2026-10-26 10:30 IST',
    valveSerial: 'V-984421-IS8737',
    passed: true
  });

  const handleVerifyBatch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!batchQuery.trim()) return;
    
    setVerifiedBatch({
      id: batchQuery.toUpperCase().trim(),
      plant: selectedPlant.name,
      tareKg: 17.50 + Number((Math.random() * 0.08 - 0.04).toFixed(2)),
      hydrostaticBar: 25.0,
      fillingTime: '2026-10-26 09:15 IST',
      valveSerial: `V-${Math.floor(100000 + Math.random() * 900000)}-IS8737`,
      passed: true
    });
  };

  return (
    <section id="bottling" className="bg-[#10251B] text-[#dae5dd] py-20 border-b border-[#65C466]/15 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-[#65C466] uppercase font-display mb-2">
            02. Automated Bottling & Distribution Infrastructure
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display [text-wrap:balance]">
            State-of-the-Art Bottling Terminals Across Strategic Energy Corridors.
          </h2>
          <p className="mt-3 text-base text-[#c0c9be] leading-relaxed">
            Operated by <strong>INDO BRIGHT PETROLEUM PVT. LTD.</strong>, our bottling plants across Haryana, Uttar Pradesh, and Bihar are equipped with 24-station electronic carousels, automated tare weight sensors, and laser leak detection, packaging thousands of cylinders daily under strict PESO and OISD-144 safety guidelines.
          </p>
        </div>

        {/* 2-Column Split Depot & Plant Images */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          {/* Panoramic Cylinder Staging Yard (7 cols) */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-[#65C466]/20 bg-[#0c1510] group">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="/assets/aistudio/Image_7_46e4f0b4.jpeg"
                alt="IBP GAS Cylinder Staging Depot"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1510] via-black/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-[11px] font-mono text-[#B7F36B] uppercase font-semibold">
                High-Volume Staging Depot
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-white font-display mt-0.5">
                Multi-Tier Finished Cylinder Stacks Ready for Highway Dispatch
              </h3>
              <p className="text-xs text-[#dae5dd] mt-1 hidden sm:block">
                All vessels feature double-coat protective orange & green epoxy with certified stamped tare weights.
              </p>
            </div>
          </div>

          {/* Carousel Operations photo from ibpgas.co.in (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#65C466]/20 bg-[#0c1510] group">
            <div className="aspect-[16/9] lg:aspect-auto lg:h-full w-full overflow-hidden">
              <img
                src="/images/bottling-plant.jpg"
                alt="Automated Carousel Filling Operations"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#0c1510] via-black/30 to-transparent p-6 flex flex-col justify-end">
              <span className="text-[11px] font-mono text-[#65C466] uppercase font-semibold">
                Electronic Carousel Hall
              </span>
              <h3 className="text-lg font-bold text-white font-display mt-0.5">
                2,400 Cylinders/Hour Automated Filling
              </h3>
              <p className="text-xs text-[#dae5dd] mt-1">
                Zero human error with precision mass-flow meters and automatic cutoffs.
              </p>
            </div>
          </div>

        </div>

        {/* Interactive Plant Selector & Real-Time Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Plant Switcher List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-[#8a9389] uppercase tracking-wider block mb-2 font-display">
              Select Regional Bottling Terminal:
            </span>
            {BOTTLING_PLANTS.map((plant) => {
              const isSelected = selectedPlant.id === plant.id;
              return (
                <button
                  key={plant.id}
                  onClick={() => setSelectedPlant(plant)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-[#14532D] border-[#65C466] shadow-[0_0_20px_rgba(101,196,102,0.25)] text-white'
                      : 'bg-[#18221c] border-[#65C466]/15 text-[#c0c9be] hover:border-[#65C466]/40 hover:text-white'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-sm font-display">{plant.name}</span>
                    <span className="text-[11px] font-mono text-[#B7F36B] px-2 py-0.5 rounded bg-[#092B1D]">
                      {plant.state}
                    </span>
                  </div>
                  <div className="text-xs text-[#dae5dd]/80 mt-1 flex items-center gap-2">
                    <span>{plant.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono">{plant.carouselCapacityPerHour} Cyl/hr</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Selected Plant Specification & Real Quality Verification (7 cols) */}
          <div className="lg:col-span-7 bg-[#18221c] border border-[#65C466]/20 rounded-2xl p-6 sm:p-8 space-y-6">
            
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#65C466]/15">
              <div>
                <span className="text-xs text-[#65C466] uppercase font-bold tracking-wider">
                  Terminal Profile & Licensing
                </span>
                <h4 className="text-xl font-bold text-white font-display mt-0.5">
                  {selectedPlant.name}
                </h4>
                <p className="text-xs text-[#8a9389] mt-0.5">
                  Chief In-Charge: {selectedPlant.chiefEngineer} · Commissioned {selectedPlant.operationalSince}
                </p>
              </div>
              <div className="text-right">
                <span className="text-[11px] text-[#8a9389] block">Safety Milestone</span>
                <span className="text-lg font-extrabold text-[#B7F36B] font-mono tabular-nums">
                  {selectedPlant.safetyRecordDays} Days
                </span>
                <span className="text-[10px] text-[#65C466] block">Zero Loss-Time Incidents</span>
              </div>
            </div>

            {/* Throughput Metric Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
              <div className="bg-[#10251B] p-3 rounded-xl border border-[#65C466]/15">
                <span className="text-[#8a9389] block">Carousel Speed</span>
                <span className="text-lg font-bold text-white font-mono tabular-nums mt-0.5 block">
                  {selectedPlant.carouselCapacityPerHour} /hr
                </span>
                <span className="text-[10px] text-[#65C466]">Electronic Carousel</span>
              </div>
              <div className="bg-[#10251B] p-3 rounded-xl border border-[#65C466]/15">
                <span className="text-[#8a9389] block">LPG Bulk Storage</span>
                <span className="text-lg font-bold text-white font-mono tabular-nums mt-0.5 block">
                  {selectedPlant.storageCapacityMt} MT
                </span>
                <span className="text-[10px] text-[#65C466]">Mounded Bullets</span>
              </div>
              <div className="bg-[#10251B] p-3 rounded-xl border border-[#65C466]/15">
                <span className="text-[#8a9389] block">Daily Dispatch</span>
                <span className="text-lg font-bold text-white font-mono tabular-nums mt-0.5 block">
                  {selectedPlant.dailyThroughputCylinders.toLocaleString('en-IN')}
                </span>
                <span className="text-[10px] text-[#65C466]">Cylinders / 24h</span>
              </div>
              <div className="bg-[#10251B] p-3 rounded-xl border border-[#65C466]/15">
                <span className="text-[#8a9389] block">Quality Audit</span>
                <span className="text-sm font-bold text-[#B7F36B] mt-0.5 block truncate">
                  ISO 9001:2015
                </span>
                <span className="text-[10px] text-[#8a9389]">Certified Unit</span>
              </div>
            </div>

            {/* PESO Registration */}
            <div className="bg-[#10251B] p-3.5 rounded-xl border border-[#65C466]/15 flex items-center justify-between text-xs">
              <div>
                <span className="text-[#8a9389] block">PESO Statutory License Number:</span>
                <span className="font-mono text-white font-semibold">{selectedPlant.pesoLicenseNo}</span>
              </div>
              <div className="text-right">
                <span className="text-[#8a9389] block">Regulatory Standard:</span>
                <span className="text-[#65C466] font-semibold">OISD-144 Compliance</span>
              </div>
            </div>

            {/* Live Dispatch Batch Certification Lookup */}
            <div className="pt-2 border-t border-[#65C466]/15">
              <div className="flex items-center gap-2 mb-3">
                <FileCheck className="w-4 h-4 text-[#65C466]" />
                <h5 className="text-xs font-bold text-white uppercase tracking-wider font-display">
                  Live Dispatch Batch Certification Lookup
                </h5>
              </div>

              <form onSubmit={handleVerifyBatch} className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="w-4 h-4 text-[#8a9389] absolute left-3 top-3" />
                  <input
                    type="text"
                    value={batchQuery}
                    onChange={(e) => setBatchQuery(e.target.value)}
                    placeholder="Enter Batch ID (e.g. IBP-HR-2026-B81)"
                    className="w-full bg-[#10251B] border border-[#65C466]/20 rounded-lg pl-9 pr-3 py-2 text-xs text-white placeholder-[#8a9389] focus:outline-none focus:border-[#65C466]"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 text-xs font-bold text-[#092B1D] bg-[#65C466] hover:bg-[#B7F36B] rounded-lg transition-colors whitespace-nowrap"
                >
                  Verify Certificate
                </button>
              </form>

              {verifiedBatch && (
                <div className="mt-4 p-4 rounded-xl bg-[#10251B] border border-[#65C466]/30 text-xs space-y-2">
                  <div className="flex items-center justify-between pb-2 border-b border-[#65C466]/15">
                    <span className="font-bold text-[#B7F36B] font-mono">{verifiedBatch.id}</span>
                    <span className="text-[11px] font-bold text-[#65C466] flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      PESO & BIS Cleared
                    </span>
                  </div>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-[11px] text-[#c0c9be]">
                    <div>
                      <span className="text-[#8a9389] block">Origin Plant:</span>
                      <span className="text-white truncate block">{selectedPlant.name.split(' ')[0]} Hub</span>
                    </div>
                    <div>
                      <span className="text-[#8a9389] block">Tare Mass:</span>
                      <span className="text-white font-mono">{verifiedBatch.tareKg} kg (Passed)</span>
                    </div>
                    <div>
                      <span className="text-[#8a9389] block">Hydrostatic Test:</span>
                      <span className="text-white font-mono">{verifiedBatch.hydrostaticBar} Bar</span>
                    </div>
                    <div>
                      <span className="text-[#8a9389] block">Valve Serial:</span>
                      <span className="text-white font-mono">{verifiedBatch.valveSerial}</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={onNavigateToDealership}
                className="px-5 py-2.5 text-xs font-bold text-[#092B1D] bg-[#65C466] hover:bg-[#B7F36B] rounded-lg transition-colors flex items-center gap-1.5"
              >
                <span>Partner as a Bottling Depot Franchisee</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
