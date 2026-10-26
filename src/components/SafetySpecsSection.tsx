import React, { useState } from 'react';
import { SAFETY_HOTSPOTS } from '../data/mockData';
import { SafetyHotspot } from '../types';
import { ShieldCheck, AlertTriangle, PhoneCall, Award, Info, CheckCircle, Crosshair } from 'lucide-react';

export const SafetySpecsSection: React.FC = () => {
  const [activeHotspot, setActiveHotspot] = useState<SafetyHotspot>(SAFETY_HOTSPOTS[1]); // Valve by default

  return (
    <section id="safety" className="bg-[#092B1D] text-[#dae5dd] py-20 border-b border-[#65C466]/15 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-[#65C466] uppercase font-display mb-2">
            05. Safety Engineering & Statutory Compliance
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display [text-wrap:balance]">
            Zero-Compromise Safety Standards by INDO BRIGHT PETROLEUM PVT. LTD.
          </h2>
          <p className="mt-3 text-base text-[#c0c9be] leading-relaxed">
            Every IBP GAS vessel combines high-tensile micro-alloyed steel, precision relief valves, and robotic welding with mandatory five-year hydrostatic testing and tamper-proof authentication seals under PESO and OISD-144 standards.
          </p>
        </div>

        {/* Live Safety Photos from ibpgas.co.in */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <div className="relative rounded-2xl overflow-hidden border border-[#65C466]/20 bg-[#0c1510] group">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="/images/quality&safetychecks.jpg"
                alt="Electronic Tare & Submerged Leak Testing"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-[11px] font-mono text-[#65C466] uppercase font-bold">
                100% Vessel Screening
              </span>
              <h3 className="text-base font-bold font-display mt-0.5">
                Submerged Water Leak Tests & Electronic Weight Sensor
              </h3>
              <p className="text-xs text-[#c0c9be] mt-0.5">
                Every cylinder tested at 25.0 bar test pressure before security sealing.
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden border border-[#65C466]/20 bg-[#0c1510] group">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img
                src="/images/safety-training.jpg"
                alt="Plant Staff Safety Training"
                className="w-full h-full object-cover filter contrast-[1.05] transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent p-5 flex flex-col justify-end text-white">
              <span className="text-[11px] font-mono text-[#B7F36B] uppercase font-bold">
                Certified Workforce
              </span>
              <h3 className="text-base font-bold font-display mt-0.5">
                Regular PESO Drills & Fire Response Training
              </h3>
              <p className="text-xs text-[#c0c9be] mt-0.5">
                Our operations staff undergo mandatory OISD certification modules.
              </p>
            </div>
          </div>
        </div>

        {/* 2-Column Anatomical Explorer */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#10251B] border border-[#65C466]/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          
          {/* Left: Interactive Hotspot Cylinder Image (5 cols) */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-2xl overflow-hidden bg-[#0c1510] border border-[#65C466]/30 p-2 shadow-2xl">
              <img
                src="/assets/aistudio/Image_5_ca95957c.jpeg"
                alt="IBP GAS Cylinder Safety Architecture"
                className="w-full h-full object-contain filter contrast-105"
                referrerPolicy="no-referrer"
              />

              {/* Hotspot Target Pins */}
              {SAFETY_HOTSPOTS.map((spot) => {
                const isActive = activeHotspot.id === spot.id;
                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspot(spot)}
                    style={{ left: `${spot.position.x}%`, top: `${spot.position.y}%` }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#B7F36B] text-[#092B1D] ring-4 ring-[#65C466]/40 scale-125 z-20'
                        : 'bg-[#092B1D]/80 backdrop-blur-sm text-white hover:bg-[#65C466] hover:text-[#092B1D] border border-[#65C466]/40 z-10'
                    }`}
                    title={spot.title}
                  >
                    <Crosshair className="w-4 h-4 animate-spin-slow" />
                  </button>
                );
              })}

              <div className="absolute top-3 left-3 bg-[#0c1510]/80 backdrop-blur-md px-2.5 py-1 rounded text-[10px] text-[#B7F36B] font-mono border border-[#65C466]/20">
                Interactive Anatomy Mode
              </div>
            </div>
          </div>

          {/* Right: Selected Component Detailed Breakdown (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Component Selector Buttons */}
            <div>
              <span className="text-xs font-bold text-[#8a9389] uppercase tracking-wider block mb-2 font-display">
                Click Hotspot or Component Below:
              </span>
              <div className="flex flex-wrap gap-2">
                {SAFETY_HOTSPOTS.map((spot) => {
                  const isActive = activeHotspot.id === spot.id;
                  return (
                    <button
                      key={spot.id}
                      onClick={() => setActiveHotspot(spot)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-[#65C466] text-[#092B1D]'
                          : 'bg-[#18221c] text-[#c0c9be] hover:text-white border border-[#65C466]/15'
                      }`}
                    >
                      {spot.title.split(' ')[0]} {spot.title.split(' ')[1]}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Component Detail Box */}
            <div className="bg-[#18221c] border border-[#65C466]/25 rounded-xl p-6 space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-[#65C466]/15">
                <div>
                  <span className="text-xs text-[#B7F36B] font-semibold uppercase tracking-wider">
                    {activeHotspot.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-white font-display mt-0.5">
                    {activeHotspot.title}
                  </h3>
                </div>
                <div className="p-2 bg-[#092B1D] rounded-lg border border-[#65C466]/30 text-[#65C466]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>

              <p className="text-sm text-[#dae5dd] leading-relaxed">
                {activeHotspot.description}
              </p>

              <div className="pt-2 text-xs bg-[#10251B] p-3 rounded-lg border border-[#65C466]/15">
                <span className="text-[#8a9389] block">Applicable Technical Norm:</span>
                <span className="font-mono text-[#B7F36B] font-semibold">{activeHotspot.standard}</span>
              </div>
            </div>

            {/* Hydrostatic Testing & Re-certification Standard */}
            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15">
                <span className="text-[#8a9389] block font-medium">Hydrostatic Test Frequency:</span>
                <span className="text-white font-bold block mt-1">Every 5 Years (Mandatory)</span>
                <span className="text-[11px] text-[#65C466] mt-0.5 block">Stamped on Collar Inner Flange</span>
              </div>
              <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15">
                <span className="text-[#8a9389] block font-medium">Burst Pressure Factor:</span>
                <span className="text-white font-bold block mt-1">40.0+ Bar Minimum</span>
                <span className="text-[11px] text-[#65C466] mt-0.5 block">Tested on Submerged Water Jacket</span>
              </div>
            </div>

          </div>

        </div>

        {/* 4-Step Emergency Response Protocol Banner */}
        <div className="mt-14 bg-[#10251B] border border-[#65C466]/20 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#ffb4ab] uppercase tracking-wider font-display">
                <AlertTriangle className="w-4 h-4" />
                <span>Standard Operating Procedure (SOP)</span>
              </div>
              <h3 className="text-xl font-bold text-white font-display mt-1">
                4-Step Immediate Protocol in Case of Gas Odour / Leakage
              </h3>
            </div>
            <div className="flex items-center gap-2 bg-[#ffb4ab]/10 border border-[#ffb4ab]/30 px-3.5 py-1.5 rounded-lg text-xs text-[#ffb4ab]">
              <PhoneCall className="w-4 h-4 shrink-0" />
              <span>Emergency 24x7: <strong>+91 82220 22022 / 1800-425-4270</strong></span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
            <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15">
              <span className="w-6 h-6 rounded-full bg-[#14532D] text-[#B7F36B] font-bold font-mono inline-flex items-center justify-center mb-2">
                01
              </span>
              <h4 className="font-bold text-white text-sm mb-1">Isolate Fuel Flow</h4>
              <p className="text-[#c0c9be] leading-relaxed">
                Immediately turn the cylinder valve knob clockwise to the closed position. Put the safety cap securely over the valve.
              </p>
            </div>

            <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15">
              <span className="w-6 h-6 rounded-full bg-[#14532D] text-[#B7F36B] font-bold font-mono inline-flex items-center justify-center mb-2">
                02
              </span>
              <h4 className="font-bold text-white text-sm mb-1">Ventilate Space</h4>
              <p className="text-[#c0c9be] leading-relaxed">
                Open all exterior doors and windows fully. Since LPG is heavier than air, maximize floor-level draft ventilation.
              </p>
            </div>

            <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15">
              <span className="w-6 h-6 rounded-full bg-[#14532D] text-[#B7F36B] font-bold font-mono inline-flex items-center justify-center mb-2">
                03
              </span>
              <h4 className="font-bold text-white text-sm mb-1">No Electrical Sparks</h4>
              <p className="text-[#c0c9be] leading-relaxed">
                DO NOT operate electrical switches, exhaust fans, matches, or mobile phones inside the room. Any spark can cause ignition.
              </p>
            </div>

            <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15">
              <span className="w-6 h-6 rounded-full bg-[#14532D] text-[#B7F36B] font-bold font-mono inline-flex items-center justify-center mb-2">
                04
              </span>
              <h4 className="font-bold text-white text-sm mb-1">Call IBP Emergency</h4>
              <p className="text-[#c0c9be] leading-relaxed">
                Dial our 24x7 emergency helpline +91 82220 22022 from outside the premises. Our emergency quick-response crew will deploy immediately.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
