import React, { useState, useMemo, useCallback } from 'react';
import { 
  APIProvider, 
  Map, 
  AdvancedMarker, 
  Pin, 
  InfoWindow 
} from '@vis.gl/react-google-maps';
import { 
  Layers, 
  Maximize2, 
  Compass, 
  MapPin, 
  TrendingUp, 
  Building2, 
  ExternalLink, 
  Sparkles,
  Search,
  Filter,
  DollarSign,
  ArrowRight
} from 'lucide-react';

export interface DubaiZone {
  id: string;
  name: string;
  tagline: string;
  areas: string[];
  yield: string;
  pricePerSqft: string;
  description: string;
  image: string;
  position: { lat: number; lng: number };
  category: 'waterfront' | 'urban' | 'golf' | 'heritage' | 'master';
  topProjects: string[];
  link?: string;
}

export const DUBAI_ZONES: DubaiZone[] = [
  {
    id: 'downtown',
    name: 'Downtown Dubai',
    tagline: 'The Center of Now',
    areas: ['Burj Khalifa', 'Dubai Mall', 'Opera District', 'The Address'],
    yield: '6.5%',
    pricePerSqft: '2,800 AED',
    description: 'The prestigious epicenter of Dubai, home to the Burj Khalifa and Dubai Mall. Offers premium urban living with iconic skyline views and unmatched global prestige.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1200',
    position: { lat: 25.1972, lng: 55.2744 },
    category: 'urban',
    topProjects: ['Burj Crown', 'Address Downtown', 'St. Regis Residences', 'Burj Royale'],
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'palm-jumeirah',
    name: 'Palm Jumeirah',
    tagline: 'Eighth Wonder of the World',
    areas: ['The Crescent', 'Fronds', 'Golden Mile', 'Palm West Beach'],
    yield: '5.8%',
    pricePerSqft: '3,200 AED',
    description: 'The iconic man-made archipelago offering ultra-luxury beachfront villas and penthouses. Globally recognized as the pinnacle of elite coastal real estate.',
    image: 'https://images.unsplash.com/photo-1580674684081-7617fbf3d745?auto=format&fit=crop&q=80&w=1200',
    position: { lat: 25.1124, lng: 55.1390 },
    category: 'waterfront',
    topProjects: ['Armani Beach Residences', 'Como Residences', 'One Palm', 'Six Senses Residences'],
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'marina',
    name: 'Dubai Marina',
    tagline: 'Waterfront Cosmopolitan Life',
    areas: ['Marina Walk', 'JBR', 'Marina Promenade', 'Marina Mall'],
    yield: '7.2%',
    pricePerSqft: '1,750 AED',
    description: 'A vibrant canal district lined with skyscrapers, mega-yachts, and promenade dining. Extremely popular among international tenants ensuring consistent high yields.',
    image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1200',
    position: { lat: 25.0805, lng: 55.1403 },
    category: 'waterfront',
    topProjects: ['Sobha Seahaven', 'Cavalli Tower', 'Marina Living', 'LIV Waterside'],
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'business-bay',
    name: 'Business Bay',
    tagline: 'Metropolitan Canal Enclave',
    areas: ['Executive Towers', 'Bay Square', 'Marasi Drive', 'Canal Front'],
    yield: '7.4%',
    pricePerSqft: '1,850 AED',
    description: 'Dubai\'s central commercial and luxury residential artery running alongside the Dubai Water Canal, bordering Downtown with exceptional capital growth.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    position: { lat: 25.1837, lng: 55.2666 },
    category: 'urban',
    topProjects: ['Binghatti Bugatti Residences', 'Canal Crown', 'The Quayside', 'Peninsula Four'],
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'creek-harbour',
    name: 'Dubai Creek Harbour',
    tagline: 'Future Waterfront Masterpiece',
    areas: ['Creek Island', 'Creek Beach', 'Address Grand', 'The Island District'],
    yield: '8.1%',
    pricePerSqft: '1,950 AED',
    description: 'A forward-looking waterfront master development by Emaar, offering modern luxury residences overlooking the Ras Al Khor sanctuary and Dubai skyline.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    position: { lat: 25.1985, lng: 55.3524 },
    category: 'waterfront',
    topProjects: ['Creek Gate', 'Creek Waters', 'Palace Residences', 'Vida Creek Beach'],
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'hills-estate',
    name: 'Dubai Hills Estate',
    tagline: 'Green Heart of Dubai',
    areas: ['Sidra Villas', 'Maple', 'Park Heights', 'Golf Grove'],
    yield: '6.8%',
    pricePerSqft: '1,650 AED',
    description: 'A master-planned family golf community centered around an 18-hole championship course, Dubai Hills Mall, and vast rolling green parks.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    position: { lat: 25.1158, lng: 55.2612 },
    category: 'golf',
    topProjects: ['Fairway Villas', 'Club Place', 'Golf Grand', 'Park Horizon'],
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'jvc',
    name: 'Jumeirah Village Circle (JVC)',
    tagline: 'Top Gross Rental Cash-Flow',
    areas: ['District 10 to 18', 'Circle Mall', 'Halfa Park'],
    yield: '8.9%',
    pricePerSqft: '1,150 AED',
    description: 'Dubai\'s number-one investment destination for off-plan cash-flow yields. Boasts consistent 8.5–10% rental yields with 1% monthly developer payment plans.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    position: { lat: 25.0560, lng: 55.2090 },
    category: 'master',
    topProjects: ['Binghatti Luna', 'Danube Elitz', 'Oxford Terraces', 'Samana Waves'],
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  },
  {
    id: 'arabian-ranches',
    name: 'Arabian Ranches',
    tagline: 'Premier Desert Oasis',
    areas: ['Ranches 1', 'Ranches 2', 'Ranches 3', 'Polo Club'],
    yield: '6.2%',
    pricePerSqft: '1,450 AED',
    description: 'Dubai\'s benchmark gated villa community offering spacious family villas, world-class polo club, golf facilities, and tranquil suburban security.',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1200',
    position: { lat: 25.0536, lng: 55.2638 },
    category: 'golf',
    topProjects: ['May Ranches 3', 'Raya', 'Bliss', 'Joy Villas'],
    link: 'https://www.bayut.com/mybayut/dubai-sales-market-report-h1-2023/'
  }
];

// Dark luxury map styling matching Rock Deals brand
const DARK_LUXURY_MAP_STYLE: google.maps.MapTypeStyle[] = [
  { elementType: 'geometry', stylers: [{ color: '#161616' }] },
  { elementType: 'labels.text.stroke', stylers: [{ color: '#161616' }] },
  { elementType: 'labels.text.fill', stylers: [{ color: '#8a8a8a' }] },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#d5001c' }]
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }]
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#1b2219' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#262626' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [{ color: '#1f1f1f' }]
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }]
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#383838' }]
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#090d12' }]
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#3d4b5c' }]
  }
];

export const GoogleMapsDubai: React.FC<{
  onSearchZone?: (zoneName: string) => void;
}> = ({ onSearchZone }) => {
  const [selectedZone, setSelectedZone] = useState<DubaiZone | null>(DUBAI_ZONES[0]);
  const [filterMode, setFilterMode] = useState<'all' | 'waterfront' | 'highYield'>('all');
  const [mapTypeId, setMapTypeId] = useState<'roadmap' | 'satellite' | 'hybrid'>('roadmap');

  // API Key resolution from environment
  const apiKey = (import.meta as any).env?.VITE_GOOGLE_MAPS_API_KEY || 
                 (process.env as any).VITE_GOOGLE_MAPS_API_KEY || 
                 (process.env as any).GOOGLE_MAPS_API_KEY || 
                 '';

  const filteredZones = useMemo(() => {
    return DUBAI_ZONES.filter(z => {
      if (filterMode === 'highYield') return parseFloat(z.yield) >= 7.2;
      if (filterMode === 'waterfront') return z.category === 'waterfront';
      return true;
    });
  }, [filterMode]);

  const defaultCenter = useMemo(() => ({ lat: 25.1350, lng: 55.2300 }), []);

  return (
    <div className="space-y-6">
      {/* Top Filter & Map Controller Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[10px] font-technical uppercase tracking-[0.4em] text-white/40 font-bold">
            Filter Investment Zones:
          </span>
          <div className="inline-flex p-1 bg-black/80 border border-white/10">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3 py-1.5 text-[10px] font-technical uppercase tracking-wider transition-all cursor-pointer ${
                filterMode === 'all' ? 'bg-porsche-red text-white font-bold shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              All Zones ({DUBAI_ZONES.length})
            </button>
            <button
              onClick={() => setFilterMode('waterfront')}
              className={`px-3 py-1.5 text-[10px] font-technical uppercase tracking-wider transition-all cursor-pointer ${
                filterMode === 'waterfront' ? 'bg-porsche-red text-white font-bold shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              Waterfront
            </button>
            <button
              onClick={() => setFilterMode('highYield')}
              className={`px-3 py-1.5 text-[10px] font-technical uppercase tracking-wider transition-all cursor-pointer ${
                filterMode === 'highYield' ? 'bg-porsche-red text-white font-bold shadow-sm' : 'text-white/60 hover:text-white'
              }`}
            >
              High Yield (&ge;7.2%)
            </button>
          </div>
        </div>

        {/* View Mode: Dark Vector vs Satellite */}
        <div className="flex items-center gap-3">
          <span className="text-[10px] font-technical uppercase tracking-wider text-white/40 font-bold hidden sm:inline">
            Map Layer:
          </span>
          <div className="inline-flex p-1 bg-black/80 border border-white/10">
            <button
              onClick={() => setMapTypeId('roadmap')}
              className={`px-2.5 py-1 text-[10px] font-technical uppercase tracking-wider transition-all cursor-pointer ${
                mapTypeId === 'roadmap' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              Dark Luxury
            </button>
            <button
              onClick={() => setMapTypeId('satellite')}
              className={`px-2.5 py-1 text-[10px] font-technical uppercase tracking-wider transition-all cursor-pointer ${
                mapTypeId === 'satellite' ? 'bg-white text-black font-bold' : 'text-white/60 hover:text-white'
              }`}
            >
              Satellite
            </button>
          </div>
        </div>
      </div>

      {/* Main Grid: Google Maps Viewport + Interactive Zone Inspector */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* Left Column: Google Maps Container with Explicit Height (CF2) */}
        <div className="lg:col-span-8 bg-[#121212] border border-white/10 relative overflow-hidden h-[500px] sm:h-[580px] md:h-[640px] w-full shadow-2xl">
          <APIProvider apiKey={apiKey} region="AE" language="en">
            <Map
              defaultCenter={defaultCenter}
              defaultZoom={11}
              mapTypeId={mapTypeId}
              mapId="DEMO_MAP_ID"
              internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
              gestureHandling="greedy"
              disableDefaultUI={false}
              styles={mapTypeId === 'roadmap' ? DARK_LUXURY_MAP_STYLE : undefined}
              className="w-full h-full"
            >
              {filteredZones.map((zone) => {
                const isSelected = selectedZone?.id === zone.id;
                return (
                  <AdvancedMarker
                    key={zone.id}
                    position={zone.position}
                    onClick={() => setSelectedZone(zone)}
                    title={zone.name}
                  >
                    <div className={`group relative cursor-pointer transition-transform duration-300 ${isSelected ? 'scale-125 z-30' : 'hover:scale-110'}`}>
                      <div className={`px-2.5 py-1 text-[10px] font-technical font-black tracking-wider uppercase rounded-none border shadow-2xl flex items-center gap-1.5 whitespace-nowrap ${
                        isSelected 
                          ? 'bg-porsche-red text-white border-white' 
                          : 'bg-black/90 text-white border-white/30 group-hover:border-porsche-red'
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                        <span>{zone.name}</span>
                        <span className="text-[9px] font-mono text-white/80 bg-white/20 px-1 py-0.2">
                          {zone.yield}
                        </span>
                      </div>
                      {/* Marker bottom pointer */}
                      <div className={`w-2 h-2 mx-auto rotate-45 -mt-1 border-r border-b ${
                        isSelected ? 'bg-porsche-red border-white' : 'bg-black border-white/30'
                      }`} />
                    </div>
                  </AdvancedMarker>
                );
              })}

              {/* InfoWindow on Selected Zone */}
              {selectedZone && (
                <InfoWindow
                  position={selectedZone.position}
                  onCloseClick={() => setSelectedZone(null)}
                  pixelOffset={[0, -25]}
                >
                  <div className="p-2 max-w-xs text-dark font-sans">
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="font-display font-black text-sm uppercase text-dark">
                        {selectedZone.name}
                      </span>
                      <span className="text-[10px] font-technical font-black px-1.5 py-0.5 bg-porsche-red text-white">
                        {selectedZone.yield} Yield
                      </span>
                    </div>
                    <p className="text-[11px] text-dark/70 font-light mb-2 line-clamp-2">
                      {selectedZone.description}
                    </p>
                    <div className="text-[10px] font-mono text-dark/60 mb-2">
                      Avg: <strong className="text-dark">{selectedZone.pricePerSqft}</strong>
                    </div>
                    {onSearchZone && (
                      <button
                        onClick={() => onSearchZone(selectedZone.name)}
                        className="w-full py-1.5 bg-dark hover:bg-porsche-red text-white text-[10px] font-technical uppercase font-bold tracking-wider transition-colors cursor-pointer"
                      >
                        Explore Properties Here
                      </button>
                    )}
                  </div>
                </InfoWindow>
              )}
            </Map>
          </APIProvider>

          {/* Map Overlay Attribution Badge */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/10 text-[10px] font-mono text-white/80 uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Google Maps Platform &bull; Dubai Investment Geospatial Radar</span>
          </div>
        </div>

        {/* Right Column: Zone Intelligence Dossier */}
        <div className="lg:col-span-4 bg-[#121212] border border-white/10 p-6 flex flex-col justify-between">
          {selectedZone ? (
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.25em] text-porsche-red font-bold mb-1">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{selectedZone.tagline}</span>
                </div>
                <h3 className="text-2xl font-display font-black text-white uppercase tracking-tight">
                  {selectedZone.name}
                </h3>
                <p className="text-xs text-white/60 font-light mt-2 leading-relaxed">
                  {selectedZone.description}
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 gap-3 py-4 border-y border-white/10">
                <div className="bg-black/60 p-3 border border-white/5">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">Gross Rental Yield</span>
                  <span className="text-xl font-technical font-bold text-emerald-400">{selectedZone.yield}</span>
                </div>
                <div className="bg-black/60 p-3 border border-white/5">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-widest block">Average Rate / SqFt</span>
                  <span className="text-xl font-technical font-bold text-white">{selectedZone.pricePerSqft}</span>
                </div>
              </div>

              {/* Key Neighborhoods */}
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                  Prime Sub-Enclaves & Promenades
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedZone.areas.map(a => (
                    <span key={a} className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-white/70">
                      {a}
                    </span>
                  ))}
                </div>
              </div>

              {/* Top Developments */}
              <div>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                  Featured Off-Plan Allocations
                </span>
                <ul className="space-y-1.5 text-xs text-white/80">
                  {selectedZone.topProjects.map(proj => (
                    <li key={proj} className="flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-porsche-red" />
                      <span>{proj}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action */}
              <div className="pt-2">
                <button
                  onClick={() => onSearchZone && onSearchZone(selectedZone.name)}
                  className="w-full py-3 bg-porsche-red hover:bg-red-700 text-white font-technical font-black text-xs uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Filter Properties in {selectedZone.name}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-20 text-white/40">
              <MapPin className="w-8 h-8 mx-auto mb-2 opacity-30" />
              <p className="text-xs font-mono">Select any pin on the map to inspect district metrics.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

export default GoogleMapsDubai;
