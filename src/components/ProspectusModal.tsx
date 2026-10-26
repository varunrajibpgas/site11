import React from 'react';
import { X, Printer, Download, ShieldCheck, Check, Building2, MapPin, Award } from 'lucide-react';

interface ProspectusModalProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigateToDealership: () => void;
}

export const ProspectusModal: React.FC<ProspectusModalProps> = ({
  isOpen,
  onClose,
  onNavigateToDealership
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const textContent = `
================================================================================
INDO BRIGHT PETROLEUM PVT. LTD. (IBP GAS)
OFFICIAL FRANCHISE DEALERSHIP PROSPECTUS (2026-2027)
================================================================================
Corporate Office: Tower B, Spaze I-Tech Park, Sohna Road, Gurugram, Haryana - 122018
Registered Office: Indo Bright Complex, GT Road, Karnal, Haryana - 132001
Phone: +91 82220 22022 | Email: info@ibpgas.co.in | Web: www.ibpgas.co.in
CIN: U11100HR2013PTC050012 | Founded: July 2013 | PESO & BIS IS:3196 Licensed

1. EXECUTIVE SUMMARY:
INDO BRIGHT PETROLEUM PVT. LTD. is an Indian private sector petroleum and clean energy
marketing enterprise distributing non-subsidized commercial, industrial, and domestic LPG,
Auto LPG, and Compressed Bio-Gas (CBG) across India.

2. INFRASTRUCTURE & TERMINALS:
- Automated carousel bottling depots located across Haryana, Uttar Pradesh, and Bihar.
- Dedicated transport tanker fleet and GPS-monitored logistics routes.
- Fully computerized ERP billing and cylinder barcode scanning at all dealer outlets.

3. FRANCHISE TIERS & INVESTMENT GUIDELINES:
- Silver Dealer (Retail & Small Commercial):
  * Monthly Volume: 1,500 - 3,000 Cylinders
  * Land Requirement: 3,500 sq. ft (PESO compliant godown)
  * Estimated Capex: Rs. 18.5 Lakhs (Includes security deposit Rs. 5.0 Lakhs)
  * Projected Monthly Net Profit: Rs. 1.45 Lakhs

- Gold Commercial Stockist (Industrial & Hotel Hubs):
  * Monthly Volume: 5,000 - 12,000 Cylinders
  * Land Requirement: 7,500 sq. ft
  * Estimated Capex: Rs. 38.0 Lakhs (Includes security deposit Rs. 10.0 Lakhs)
  * Projected Monthly Net Profit: Rs. 3.80 Lakhs

- Regional Super Stockist (District Clearing Hub):
  * Monthly Volume: 20,000+ Cylinders
  * Land Requirement: 15,000 sq. ft
  * Estimated Capex: Rs. 85.0 Lakhs (Includes security deposit Rs. 25.0 Lakhs)
  * Projected Monthly Net Profit: Rs. 9.60 Lakhs

4. STATUTORY SAFETY & GODOWN MANDATES:
* All godowns must obtain PESO Form E storage license.
* Minimum safety buffer perimeter around cylinder storage shed.
* Compulsory fire protection with ISI marked DCP extinguishers and sand buckets.
================================================================================
`;
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'INDO_BRIGHT_PETROLEUM_PVT_LTD_Franchise_Prospectus.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-[#FFFFFF] text-[#092B1D] rounded-2xl shadow-[0_24px_64px_rgba(9,43,29,0.4)] border border-[#092B1D]/15 overflow-hidden my-8">
        
        {/* Header Bar */}
        <div className="bg-[#14532D] text-white p-5 sm:p-6 flex items-center justify-between no-print">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white p-1 flex items-center justify-center shadow">
              <img
                src="/assets/aistudio/Image_1_feb42d7f.png"
                alt="IBP GAS"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold font-display">
                Official Franchise Dealership Prospectus
              </h3>
              <p className="text-xs text-[#96d5a3]">
                INDO BRIGHT PETROLEUM PVT. LTD. · Confidential Commercial Document
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={handleDownload}
              className="px-3 py-1.5 text-xs font-semibold bg-[#65C466] text-[#092B1D] hover:bg-[#B7F36B] rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Text Deck</span>
            </button>
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 text-xs font-semibold bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-[#dae5dd] hover:text-white rounded-lg hover:bg-[#092B1D] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Prospectus Document Body */}
        <div className="p-6 sm:p-10 max-h-[75vh] overflow-y-auto space-y-8 font-sans">
          
          {/* Letterhead Header */}
          <div className="border-b border-[#092B1D]/15 pb-6 flex flex-wrap justify-between items-start gap-4">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-extrabold tracking-tight font-display text-[#092B1D]">
                  INDO BRIGHT PETROLEUM PVT. LTD.
                </span>
                <span className="text-xs px-2 py-0.5 rounded bg-[#14532D] text-[#B7F36B] font-bold">
                  IBP GAS
                </span>
              </div>
              <p className="text-xs text-[#404941] mt-1">
                Corporate Office: Tower B, Spaze I-Tech Park, Sohna Road, Gurugram, Haryana - 122018
              </p>
              <p className="text-xs text-[#404941]">
                Registered Office: Indo Bright Complex, GT Road, Karnal, Haryana - 132001
              </p>
              <p className="text-xs text-[#404941]">
                CIN: U11100HR2013PTC050012 · PESO Reg: PESO/WZ/MH/LPG/4821 · BIS IS:3196 Certified
              </p>
            </div>
            <div className="text-right text-xs text-[#404941]">
              <span className="block font-bold text-[#092B1D]">Document: IBP-DOC-PROSPECTUS-2026</span>
              <span className="block">Release Date: October 2026</span>
              <span className="text-[#14532D] font-semibold">Authorized Commercial Release</span>
            </div>
          </div>

          {/* Section 1: Corporate Foundation */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#092B1D] uppercase tracking-wider font-display border-b border-[#092B1D]/08 pb-1">
              1. Corporate Architecture & Network Reach
            </h4>
            <p className="text-xs sm:text-sm text-[#313b36] leading-relaxed">
              <strong>INDO BRIGHT PETROLEUM PVT. LTD.</strong> is an Indian private sector clean fuel enterprise founded in 2013. We market non-subsidized commercial and industrial LPG, domestic cylinders, Auto LPG, and Compressed Bio-Gas (CBG). Our automated electronic carousel bottling terminals across Haryana, UP, and Bihar guarantee 99.98% delivery reliability to thousands of businesses and hundreds of franchise partners.
            </p>
          </div>

          {/* Section 2: Financial Matrix */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#092B1D] uppercase tracking-wider font-display border-b border-[#092B1D]/08 pb-1">
              2. Franchise Dealership Tier Structure
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              <div className="bg-[#F7F8F3] p-4 rounded-xl border border-[#092B1D]/10 space-y-2">
                <span className="font-bold text-sm text-[#14532D] block">Silver Dealer</span>
                <div className="text-[#404941] space-y-1">
                  <div>Volume: 1,500 - 3,000 Cyl/mo</div>
                  <div>Godown Size: 3,500 sq.ft min</div>
                  <div>Capex: ₹18.5 Lakhs</div>
                  <div>Deposit: ₹5.0 Lakhs (Refundable)</div>
                  <div className="font-bold text-[#14532D]">Est. Net ROI: ₹1.45 Lakhs/mo</div>
                  <div>Payback: ~14 Months</div>
                </div>
              </div>

              <div className="bg-[#F7F8F3] p-4 rounded-xl border border-[#14532D]/30 ring-1 ring-[#14532D] space-y-2">
                <span className="font-bold text-sm text-[#14532D] block">Gold Stockist</span>
                <div className="text-[#404941] space-y-1">
                  <div>Volume: 5,000 - 12,000 Cyl/mo</div>
                  <div>Godown Size: 7,500 sq.ft min</div>
                  <div>Capex: ₹38.0 Lakhs</div>
                  <div>Deposit: ₹10.0 Lakhs (Refundable)</div>
                  <div className="font-bold text-[#14532D]">Est. Net ROI: ₹3.80 Lakhs/mo</div>
                  <div>Payback: ~11 Months</div>
                </div>
              </div>

              <div className="bg-[#F7F8F3] p-4 rounded-xl border border-[#092B1D]/10 space-y-2">
                <span className="font-bold text-sm text-[#14532D] block">Super Stockist</span>
                <div className="text-[#404941] space-y-1">
                  <div>Volume: 20,000+ Cyl/mo</div>
                  <div>Godown Size: 15,000 sq.ft min</div>
                  <div>Capex: ₹85.0 Lakhs</div>
                  <div>Deposit: ₹25.0 Lakhs (Refundable)</div>
                  <div className="font-bold text-[#14532D]">Est. Net ROI: ₹9.60 Lakhs/mo</div>
                  <div>Payback: ~9 Months</div>
                </div>
              </div>

            </div>
          </div>

          {/* Section 3: Statutory Compliance & Godown Regulations */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#092B1D] uppercase tracking-wider font-display border-b border-[#092B1D]/08 pb-1">
              3. PESO Statutory Mandates & Storage Rules
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-[#313b36]">
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                <span><strong>PESO License:</strong> The franchisee must submit Form E under the Gas Cylinders Rules for storage approval. IBP technical liaisons assist with architectural layout blueprints.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                <span><strong>Safety Clearances:</strong> Minimum sterile buffer perimeter around cylinder storage shed free of any spark-generating equipment.</span>
              </div>
              <div className="flex items-start gap-2">
                <Check className="w-4 h-4 text-[#14532D] shrink-0 mt-0.5" />
                <span><strong>Fire Protection:</strong> Mandatory ISI-marked Dry Chemical Powder (DCP) extinguishers with water sand buckets and emergency call placard.</span>
              </div>
            </div>
          </div>

          {/* Section 4: Exclusive Dealer Entitlements */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-[#092B1D] uppercase tracking-wider font-display border-b border-[#092B1D]/08 pb-1">
              4. Company Support & Technology Transfer
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#313b36]">
              <div className="p-3 bg-[#F7F8F3] rounded-lg border border-[#092B1D]/06">
                <strong>Computerized Billing CRM:</strong> Cloud-connected billing terminal tracking cylinder barcode scans and customer records.
              </div>
              <div className="p-3 bg-[#F7F8F3] rounded-lg border border-[#092B1D]/06">
                <strong>Territory Protection:</strong> Legally safeguarded radius ensuring zero cross-franchise cannibalization.
              </div>
              <div className="p-3 bg-[#F7F8F3] rounded-lg border border-[#092B1D]/06">
                <strong>Institutional Tie-ups:</strong> Corporate bulk hotel, banquet, and manufacturing leads routed directly to the regional dealer.
              </div>
              <div className="p-3 bg-[#F7F8F3] rounded-lg border border-[#092B1D]/06">
                <strong>Staff Safety Training:</strong> Complimentary safety and emergency response certification for handling staff.
              </div>
            </div>
          </div>

          {/* Signoff / Call to Action */}
          <div className="pt-6 border-t border-[#092B1D]/15 flex flex-wrap items-center justify-between gap-4">
            <div>
              <span className="text-xs text-[#8a9389] block">For Franchise & Dealership Inquiries:</span>
              <span className="text-xs font-bold text-[#092B1D]">Franchise Directorate · INDO BRIGHT PETROLEUM PVT. LTD.</span>
              <span className="text-xs text-[#404941] block">Phone: +91 82220 22022 · Email: info@ibpgas.co.in</span>
            </div>
            <div className="no-print">
              <button
                onClick={() => {
                  onClose();
                  onNavigateToDealership();
                }}
                className="px-6 py-2.5 text-xs font-bold text-white bg-[#14532D] hover:bg-[#092B1D] rounded-lg transition-colors"
              >
                Proceed to Online Franchise Application
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
