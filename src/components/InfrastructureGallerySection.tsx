import React, { useState } from 'react';
import { Camera, Maximize2, X, CheckCircle2, ChevronRight, Eye } from 'lucide-react';

interface GalleryItem {
  id: string;
  title: string;
  category: 'Bottling & Depots' | 'Logistics Fleet' | 'Dealer Network' | 'Safety & Quality' | 'Corporate';
  image: string;
  description: string;
  highlight: string;
}

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'g-bottling-1',
    title: 'Automated Electronic Bottling Carousels',
    category: 'Bottling & Depots',
    image: '/images/bottling-plant.jpg',
    description: 'High-speed 24-head automated carousels filling and calibrating cylinders with electronic tare accuracy at our regional terminals in Haryana, UP, and Bihar.',
    highlight: '2,400 Cylinders / Hour Peak Capacity'
  },
  {
    id: 'g-depot-stacks',
    title: 'Depot Cylinder Staging Yard',
    category: 'Bottling & Depots',
    image: '/assets/aistudio/Image_7_46e4f0b4.jpeg',
    description: 'Freshly tested and filled IBP GAS cylinders stacked in the staging yard ready for immediate loading onto highway distribution trucks.',
    highlight: 'Double-Coat Anti-Corrosive Finish'
  },
  {
    id: 'g-showroom',
    title: 'Authorized Dealer Experience Showroom',
    category: 'Dealer Network',
    image: '/images/hero-dealer-showroom.jpg',
    description: 'Modern branded dealership showroom showcasing commercial burners, domestic connections, safety valves, and industrial manifolds.',
    highlight: 'Turnkey Franchise Outlets'
  },
  {
    id: 'g-fleet',
    title: 'Dedicated Logistics & Distribution Fleet',
    category: 'Logistics Fleet',
    image: '/images/delivery-fleet.jpg',
    description: 'Specially licensed petroleum logistics trucks delivering bulk orders and daily refills to hotels, bakeries, manufacturing plants, and dealers.',
    highlight: 'GPS-Tracked Route Logistics'
  },
  {
    id: 'g-outlets',
    title: 'Nationwide Dealer Storefronts',
    category: 'Dealer Network',
    image: '/images/dealer-outlets.jpg',
    description: 'Over 300 active authorized distributor outlets providing local supply reliability and prompt cylinder exchange across municipal districts.',
    highlight: '300+ Active Franchises'
  },
  {
    id: 'g-safety-checks',
    title: '100% Quality & Electronic Safety Testing',
    category: 'Safety & Quality',
    image: '/images/quality&safetychecks.jpg',
    description: 'Rigorous multi-stage inspection including automated tare verification, submerged water leak testing, and laser valve sniffer screening.',
    highlight: 'Zero-Leakage Assurance'
  },
  {
    id: 'g-safety-training',
    title: 'Workforce Safety Training & PESO SOP Drills',
    category: 'Safety & Quality',
    image: '/images/safety-training.jpg',
    description: 'Regular fire prevention, hazardous material handling, and emergency shutdown drills for all terminal staff and franchisee delivery drivers.',
    highlight: 'OISD-144 Compliance'
  },
  {
    id: 'g-corporate',
    title: 'Corporate Headquarters & Operations Center',
    category: 'Corporate',
    image: '/images/corporate-office.jpg',
    description: 'Central management, energy trading, and national franchise administration hub of INDO BRIGHT PETROLEUM PVT. LTD.',
    highlight: 'Gurugram & Karnal, Haryana'
  },
  {
    id: 'g-commercial-ops',
    title: 'Commercial Kitchen & Hotel Gas Manifolds',
    category: 'Bottling & Depots',
    image: '/images/commercial-lpg.jpg',
    description: 'Industrial and commercial LPG piping setups delivering sustained flame pressure to commercial restaurant ranges and banquet operations.',
    highlight: 'Continuous Flame Intensity'
  },
  {
    id: 'g-products-suite',
    title: 'Complete LPG Cylinder Portfolio',
    category: 'Bottling & Depots',
    image: '/images/products.jpg',
    description: 'Comprehensive cylinder inventory ranging from domestic household sizes to heavy-duty 47.5kg VOT/LOT industrial units.',
    highlight: 'BIS IS:3196 Standard Steel'
  }
];

export const InfrastructureGallerySection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = ['All', 'Bottling & Depots', 'Logistics Fleet', 'Dealer Network', 'Safety & Quality', 'Corporate'];

  const filteredItems = selectedCategory === 'All'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <section id="gallery" className="bg-[#10251B] text-[#dae5dd] py-20 border-b border-[#65C466]/15 relative">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-bold tracking-wider text-[#65C466] uppercase font-display mb-2">
              03. Live Operations & Infrastructure Gallery
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-display [text-wrap:balance]">
              Inside INDO BRIGHT PETROLEUM PVT. LTD. (IBP GAS)
            </h2>
            <p className="mt-3 text-sm text-[#c0c9be] leading-relaxed">
              Explore authentic glimpses into our automated bottling carousels, dedicated logistics fleet, nationwide dealer showrooms, and certified safety testing facilities.
            </p>
          </div>

          {/* Category Filter Pills / Buttons */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-[#0c1510] rounded-xl border border-[#65C466]/20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#14532D] text-white font-bold shadow-sm'
                    : 'text-[#8a9389] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="bg-[#18221c] rounded-2xl border border-[#65C466]/20 overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.4)] group cursor-pointer hover:border-[#65C466]/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#0c1510]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18221c] via-transparent to-transparent opacity-80" />
                
                <span className="absolute top-3 left-3 bg-[#0c1510]/85 backdrop-blur-md px-2.5 py-1 rounded text-[11px] font-mono text-[#B7F36B] border border-[#65C466]/30">
                  {item.category}
                </span>

                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#0c1510]/80 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4 text-[#65C466]" />
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <h3 className="text-base font-bold text-white font-display group-hover:text-[#65C466] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#c0c9be] mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#65C466]/15 flex items-center justify-between text-xs">
                  <span className="text-[#8a9389] text-[11px] font-medium">Metric:</span>
                  <span className="text-[#B7F36B] font-mono font-bold text-[11px]">
                    {item.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {activeItem && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <div className="relative w-full max-w-4xl bg-[#10251B] border border-[#65C466]/30 rounded-2xl overflow-hidden shadow-2xl">
              
              <div className="flex items-center justify-between p-4 border-b border-[#65C466]/20 bg-[#0c1510]">
                <div>
                  <span className="text-[11px] font-mono text-[#B7F36B] uppercase">
                    {activeItem.category} · INDO BRIGHT PETROLEUM PVT. LTD.
                  </span>
                  <h3 className="text-lg font-bold text-white font-display">
                    {activeItem.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActiveItem(null)}
                  className="p-1.5 rounded-lg text-[#dae5dd] hover:text-white hover:bg-[#18221c]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="relative max-h-[65vh] bg-[#0c1510] flex items-center justify-center overflow-hidden">
                <img
                  src={activeItem.image}
                  alt={activeItem.title}
                  className="w-full max-h-[65vh] object-contain"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-5 bg-[#18221c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <p className="text-xs sm:text-sm text-[#dae5dd] max-w-2xl leading-relaxed">
                  {activeItem.description}
                </p>
                <div className="shrink-0 bg-[#0c1510] px-4 py-2 rounded-xl border border-[#65C466]/30 text-right">
                  <span className="text-[10px] text-[#8a9389] block uppercase font-medium">Standard / Capacity</span>
                  <span className="text-xs font-bold text-[#65C466] font-mono">{activeItem.highlight}</span>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
