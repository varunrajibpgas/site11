import React from 'react';
import { PhoneCall, ShieldCheck, Mail, MapPin, Award, ArrowUp, Flame, FileText } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenProspectus: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenProspectus
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#07100b] text-[#c0c9be] border-t border-[#65C466]/15 pt-16 pb-12 font-sans">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#65C466]/15">
          
          {/* Brand & Statutory Summary (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center shadow">
                <img
                  src="/assets/aistudio/Image_1_feb42d7f.png"
                  alt="IBP GAS - INDO BRIGHT PETROLEUM PVT. LTD."
                  className="w-full h-full object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white font-display tracking-tight">
                  IBP <span className="text-[#65C466]">GAS</span>
                </span>
                <span className="text-[12px] font-bold text-white block tracking-wider uppercase">
                  INDO BRIGHT PETROLEUM PVT. LTD.
                </span>
              </div>
            </div>

            <p className="text-xs text-[#c0c9be] leading-relaxed max-w-sm">
              <strong>INDO BRIGHT PETROLEUM PVT. LTD.</strong> is an Indian private sector petroleum and clean energy infrastructure enterprise marketing non-subsidized commercial, industrial, domestic LPG, Auto LPG, and Compressed Bio-Gas (CBG) with automated electronic carousels and over 300+ franchised territories.
            </p>

            <div className="pt-2 text-xs space-y-1 text-[#8a9389]">
              <div>Corporate CIN: <span className="font-mono text-white">U11100HR2013PTC050012</span></div>
              <div>PESO Statutory ID: <span className="font-mono text-white">PESO/WZ/MH/LPG/4821</span></div>
              <div>BIS Standard: <span className="font-mono text-white">IS:3196 (Part 1 & 2) & IS:8737</span></div>
              <div>OISD Quality Norm: <span className="font-mono text-white">OISD-144 Storage Compliance</span></div>
            </div>
          </div>

          {/* Clean Energy Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Energy Solutions
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Commercial LPG (19kg, 33kg)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Industrial VOT / LOT Gas
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Domestic LPG Cylinders
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Auto LPG & Dispensing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Compressed Bio-Gas (CBG)
                </button>
              </li>
            </ul>
          </div>

          {/* Franchise Opportunities */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Franchise & Network
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button
                  onClick={() => onNavigate('dealership')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Dealership Tiers & ROI
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('dealership')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Franchise Application Form
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('bottling')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Automated Bottling Depots
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-[#65C466] transition-colors"
                >
                  Live Operations Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenProspectus}
                  className="text-[#B7F36B] font-semibold hover:underline flex items-center gap-1"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Prospectus</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Offices & Contact Details from ibpgas.co.in */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-display">
              Corporate Contact
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#65C466] shrink-0 mt-0.5" />
                <span>Corporate Office: Spaze I-Tech Park, Sohna Road, Gurugram, Haryana - 122018</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#65C466] shrink-0 mt-0.5" />
                <span>Regd. Office: GT Road, Karnal, Haryana - 132001</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#65C466] shrink-0" />
                <a href="mailto:info@ibpgas.co.in" className="hover:text-white font-mono">
                  info@ibpgas.co.in
                </a>
              </div>
              <div className="pt-2 border-t border-[#65C466]/15">
                <span className="text-[11px] text-[#8a9389] block">24/7 National Helpdesk:</span>
                <a
                  href="tel:+918222022022"
                  className="text-white font-bold font-mono text-sm hover:text-[#65C466] transition-colors"
                >
                  +91 82220 22022
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8a9389]">
          <div>
            © {new Date().getFullYear()} <strong>INDO BRIGHT PETROLEUM PVT. LTD.</strong> (IBP GAS). All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span>IS:3196 Certified</span>
            <span>·</span>
            <span>PESO Approved</span>
            <span>·</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-[#dae5dd] hover:text-[#65C466] transition-colors"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
