import React from 'react';
import { Award, ShieldCheck, Target, HeartHandshake, MapPin, Mail, Phone } from 'lucide-react';

export const LeadershipAboutSection: React.FC = () => {
  return (
    <section id="leadership" className="bg-[#092B1D] text-[#dae5dd] py-20 border-b border-[#65C466]/15 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-bold tracking-wider text-[#65C466] uppercase font-display mb-2">
            06. Corporate Governance & Executive Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display [text-wrap:balance]">
            Building India’s Most Trusted Independent Clean Energy Infrastructure.
          </h2>
          <p className="mt-3 text-base text-[#c0c9be] leading-relaxed">
            Incorporated in 2013 under the leadership of seasoned petroleum professionals, <strong>INDO BRIGHT PETROLEUM PVT. LTD.</strong> has transformed private sector LPG marketing with high safety compliance, tech-enabled distribution, and long-term franchisee empowerment.
          </p>
        </div>

        {/* 2-Column Story & Leadership Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#10251B] border border-[#65C466]/20 rounded-2xl p-6 sm:p-8 lg:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          
          {/* Left: Leadership Portrait from live site (4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-center text-center">
            <div className="relative w-56 sm:w-64 aspect-[3/4] rounded-2xl overflow-hidden border-2 border-[#65C466]/30 shadow-2xl bg-[#0c1510]">
              <img
                src="/images/director.jpg"
                alt="Priyaa, Director HR - INDO BRIGHT PETROLEUM PVT. LTD."
                className="w-full h-full object-cover filter contrast-[1.05]"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1510] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <span className="text-sm font-bold text-white block font-display">Priyaa</span>
                <span className="text-xs text-[#65C466] font-medium">Director HR & Corporate Affairs</span>
              </div>
            </div>

            <div className="mt-4 p-3 bg-[#18221c] rounded-xl border border-[#65C466]/20 text-xs text-[#c0c9be] w-full max-w-[260px]">
              <span className="text-[#8a9389] block font-mono text-[10px] uppercase">Corporate Entity</span>
              <strong className="text-white text-xs">INDO BRIGHT PETROLEUM PVT. LTD.</strong>
            </div>
          </div>

          {/* Right: Corporate Pillars & Mission (8 cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            <div className="space-y-3">
              <span className="text-xs font-semibold text-[#B7F36B] uppercase tracking-wider">
                Our Corporate Mandate
              </span>
              <h3 className="text-2xl font-bold text-white font-display">
                Delivering Calorific Excellence, Safety, and Reliable Energy Partnerships
              </h3>
              <p className="text-sm text-[#dae5dd] leading-relaxed">
                Since our inception in July 2013, Indo Bright Petroleum has bridged critical clean fuel gaps across urban hospitality corridors and rural semi-urban clusters. By integrating 24-station automated carousel bottling with high-tensile micro-alloyed cylinders, we provide businesses with uninterrupted energy supplies free from soot, adulteration, or sudden supply disruption.
              </p>
            </div>

            {/* 3 Core Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              
              <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#14532D] text-[#65C466] flex items-center justify-center mb-2">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">PESO & BIS Rigor</h4>
                <p className="text-[#c0c9be] leading-relaxed">
                  Every cylinder undergoes hydro-testing, tare calibration, and electronic valve sniffer screening.
                </p>
              </div>

              <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#14532D] text-[#65C466] flex items-center justify-center mb-2">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Franchisee Success</h4>
                <p className="text-[#c0c9be] leading-relaxed">
                  Clear territory protection, healthy distributor margins, and digital billing software support.
                </p>
              </div>

              <div className="bg-[#18221c] p-4 rounded-xl border border-[#65C466]/15 space-y-1.5">
                <div className="w-8 h-8 rounded-lg bg-[#14532D] text-[#65C466] flex items-center justify-center mb-2">
                  <Target className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-white text-sm">Clean Tech Future</h4>
                <p className="text-[#c0c9be] leading-relaxed">
                  Pioneering industrial LPG conversions, Auto LPG stations, and Compressed Bio-Gas (CBG) projects.
                </p>
              </div>

            </div>

            {/* Registered & Corporate Office Coordinates from live site */}
            <div className="pt-4 border-t border-[#65C466]/15 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#c0c9be]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#65C466] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Corporate Office (Gurugram):</strong>
                  <span>Tower B, Spaze I-Tech Park, Sohna Road, Sector 49, Gurugram, Haryana - 122018</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#65C466] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block">Registered Office (Karnal):</strong>
                  <span>Indo Bright Complex, GT Road, Karnal, Haryana - 132001</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
