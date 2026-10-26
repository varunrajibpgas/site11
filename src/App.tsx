import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CylinderSolutionsSection } from './components/CylinderSolutionsSection';
import { BottlingDepotSection } from './components/BottlingDepotSection';
import { InfrastructureGallerySection } from './components/InfrastructureGallerySection';
import { DealershipFranchiseSection } from './components/DealershipFranchiseSection';
import { SafetySpecsSection } from './components/SafetySpecsSection';
import { LeadershipAboutSection } from './components/LeadershipAboutSection';
import { ProspectusModal } from './components/ProspectusModal';
import { Footer } from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('overview');
  const [prospectusModalOpen, setProspectusModalOpen] = useState<boolean>(false);

  // Observer to track visible sections on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['overview', 'products', 'dealership', 'bottling', 'gallery', 'safety', 'leadership'];
      const scrollPosition = window.scrollY + 200;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0c1510] text-[#dae5dd] flex flex-col font-sans selection:bg-[#65C466] selection:text-[#092B1D]">
      
      {/* 3-Zone Top Navigation Bar */}
      <Navbar
        onOpenProspectus={() => setProspectusModalOpen(true)}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />

      <main className="flex-1">
        
        {/* Hero Section: INDO BRIGHT PETROLEUM PVT. LTD. with live site photos */}
        <HeroSection
          onExploreDealership={() => handleNavigate('dealership')}
          onExploreProducts={() => handleNavigate('products')}
          onOpenProspectus={() => setProspectusModalOpen(true)}
        />

        {/* Energy Solutions & Products Lineup (Commercial, Industrial, Domestic, Auto LPG, CBG) */}
        <CylinderSolutionsSection
          onNavigateToDealership={() => handleNavigate('dealership')}
          onOpenProspectus={() => setProspectusModalOpen(true)}
        />

        {/* Bottling Depots & Automated Carousels */}
        <BottlingDepotSection
          onNavigateToDealership={() => handleNavigate('dealership')}
        />

        {/* Live Operations & Infrastructure Gallery (Showroom, Fleet, Bottling, Safety) */}
        <InfrastructureGallerySection />

        {/* Dealership & Franchise Ecosystem with ROI Simulator & 3-Step Form */}
        <DealershipFranchiseSection
          onOpenProspectus={() => setProspectusModalOpen(true)}
        />

        {/* Structural Integrity & 4-Step Safety SOP */}
        <SafetySpecsSection />

        {/* Corporate Governance & Executive Leadership */}
        <LeadershipAboutSection />

      </main>

      {/* Corporate Quiet Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenProspectus={() => setProspectusModalOpen(true)}
      />

      {/* Official Dealership Franchise Prospectus Viewer */}
      <ProspectusModal
        isOpen={prospectusModalOpen}
        onClose={() => setProspectusModalOpen(false)}
        onNavigateToDealership={() => handleNavigate('dealership')}
      />

    </div>
  );
}
