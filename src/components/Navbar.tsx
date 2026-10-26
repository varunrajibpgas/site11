import React, { useState } from 'react';
import { ShieldCheck, Menu, X, ArrowRight, Flame, Award } from 'lucide-react';

interface NavbarProps {
  onOpenProspectus: () => void;
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenProspectus,
  onNavigate,
  activeSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'overview', label: 'Overview' },
    { id: 'products', label: 'Energy Solutions' },
    { id: 'dealership', label: 'Dealership Franchise' },
    { id: 'bottling', label: 'Bottling Depots' },
    { id: 'gallery', label: 'Live Operations' },
    { id: 'safety', label: 'Safety & PESO' },
    { id: 'leadership', label: 'Leadership & About' }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#0c1510]/95 backdrop-blur-md border-b border-[#65C466]/15 transition-all">
      {/* Top Corporate Legal Strip */}
      <div className="bg-[#07100b] border-b border-[#65C466]/10 py-1 px-4 sm:px-6 lg:px-8 text-[11px] text-[#8a9389]">
        <div className="max-w-[1320px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#dae5dd] tracking-wide uppercase">
              INDO BRIGHT PETROLEUM PVT. LTD.
            </span>
            <span className="hidden md:inline text-[#404941]">|</span>
            <span className="hidden md:inline text-[#c0c9be]">
              CIN: U11100HR2013PTC050012 · Founded in 2013
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">24x7 Helpdesk: <strong className="text-[#65C466] font-mono">+91 82220 22022</strong></span>
            <span className="text-[#B7F36B] font-mono">PESO Registered</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-6 h-20">
          
          {/* Zone 1: Brand Wordmark with Full Company Entity */}
          <a
            href="#overview"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('overview');
            }}
            className="flex items-center gap-3 group whitespace-nowrap shrink-0"
          >
            <div className="relative w-12 h-12 rounded-lg bg-white p-1 flex items-center justify-center shadow-md overflow-hidden transition-transform group-hover:scale-105 border border-slate-200">
              <img
                src="/assets/aistudio/Image_1_feb42d7f.png"
                alt="IBP GAS - INDO BRIGHT PETROLEUM PVT. LTD."
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-display">
                  IBP <span className="text-[#65C466]">GAS</span>
                </span>
                <span className="text-[10px] bg-[#14532D] text-[#B7F36B] font-bold px-1.5 py-0.5 rounded font-mono">
                  PVT. LTD.
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#dae5dd] tracking-wider uppercase">
                INDO BRIGHT PETROLEUM PVT. LTD.
              </span>
            </div>
          </a>

          {/* Zone 2: Concise Single-Line Navigation Links */}
          <nav className="hidden xl:flex items-center gap-6 text-sm font-medium text-[#c0c9be]">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative py-1 whitespace-nowrap shrink-0 transition-colors text-xs font-semibold ${
                    isActive
                      ? 'text-[#65C466]'
                      : 'text-[#c0c9be] hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#65C466] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action (Franchise Opportunity) + Prospectus */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenProspectus}
              className="px-3.5 py-2 text-xs font-semibold text-[#dae5dd] hover:text-white bg-[#18221c] hover:bg-[#222c27] border border-[#65C466]/20 rounded-lg transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#B7F36B]" />
              Prospectus Deck
            </button>
            <button
              onClick={() => handleNavClick('dealership')}
              className="px-4 py-2.5 text-xs font-bold text-[#092B1D] bg-[#65C466] hover:bg-[#B7F36B] shadow-[0_0_20px_rgba(101,196,102,0.35)] rounded-lg transition-all transform active:scale-95 whitespace-nowrap shrink-0 flex items-center gap-1.5"
            >
              <Flame className="w-3.5 h-3.5 fill-current" />
              Franchise Dealership
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-2">
            <button
              onClick={() => handleNavClick('dealership')}
              className="px-3 py-1.5 text-xs font-bold text-[#092B1D] bg-[#65C466] rounded-md sm:hidden"
            >
              Franchise
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#dae5dd] hover:text-white hover:bg-[#18221c] rounded-md"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#10251B] border-b border-[#65C466]/20 px-4 py-5 space-y-3">
          <div className="text-xs text-[#8a9389] uppercase tracking-wider pb-1 border-b border-[#65C466]/10 font-bold">
            INDO BRIGHT PETROLEUM PVT. LTD.
          </div>
          <div className="flex flex-col space-y-1.5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`text-left px-3 py-2 text-xs font-semibold rounded-lg transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#14532D] text-[#B7F36B]'
                    : 'text-[#dae5dd] hover:bg-[#18221c]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div className="pt-3 border-t border-[#65C466]/15 flex flex-col gap-2">
            <button
              onClick={() => {
                onOpenProspectus();
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-semibold text-white bg-[#18221c] border border-[#65C466]/20 rounded-lg"
            >
              View Official Franchise Prospectus
            </button>
            <button
              onClick={() => {
                handleNavClick('dealership');
                setMobileMenuOpen(false);
              }}
              className="w-full text-center px-4 py-2.5 text-xs font-bold text-[#092B1D] bg-[#65C466] rounded-lg"
            >
              Apply for Dealership / Distributorship
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
