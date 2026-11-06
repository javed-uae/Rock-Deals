import React, { useState, useMemo, useRef, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  MapPin, 
  Calendar, 
  Wallet, 
  Building2, 
  CheckCircle2, 
  X, 
  ChevronRight, 
  ChevronLeft, 
  Maximize2, 
  Phone, 
  Download, 
  Share2, 
  Calculator, 
  Filter,
  Sparkles,
  Layers,
  Flame,
  Award,
  ShieldCheck,
  TrendingUp,
  ExternalLink,
  MessageCircle,
  Clock,
  Zap,
  Tag,
  Camera
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { NEW_LAUNCHES, NewLaunchProject } from '../data/newLaunches';
import { SocialShare } from './SocialShare';
import { SmartImage } from './SmartImage';
import { DeveloperBadge } from './DeveloperBadge';
import { getProjectGalleryWithFallbacks, getFallbackCategory } from '../utils/imageUtils';

interface NewLaunchesViewProps {
  onBack: () => void;
  onEnquire: (projectName?: string) => void;
  onOpenCalculator?: (price?: number) => void;
  initialSearch?: string;
}

export const NewLaunchesView: React.FC<NewLaunchesViewProps> = ({ 
  onBack, 
  onEnquire, 
  onOpenCalculator,
  initialSearch = ''
}) => {
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedDeveloper, setSelectedDeveloper] = useState<string>('All');
  const [selectedCity, setSelectedCity] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<string>('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('All');
  const [selectedHandover, setSelectedHandover] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc' | 'roi'>('newest');
  
  const [selectedProject, setSelectedProject] = useState<NewLaunchProject | null>(null);
  const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
  const [isFullscreenLightbox, setIsFullscreenLightbox] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const modalScrollRef = useRef<HTMLDivElement>(null);

  // Auto reset scroll to top whenever a project is opened
  useEffect(() => {
    if (selectedProject) {
      setActiveGalleryIndex(0);
      if (modalScrollRef.current) {
        modalScrollRef.current.scrollTop = 0;
      }
    }
  }, [selectedProject]);


  // Extract unique developers
  const developers = useMemo(() => {
    const list = Array.from(new Set(NEW_LAUNCHES.map(p => p.developer))).filter(Boolean);
    return ['All', ...list.sort()];
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let list = NEW_LAUNCHES.filter(project => {
      // Search text
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = project.name.toLowerCase().includes(q);
        const matchesDev = project.developer.toLowerCase().includes(q);
        const matchesLoc = project.location.toLowerCase().includes(q) || project.fullAddress.toLowerCase().includes(q);
        if (!matchesName && !matchesDev && !matchesLoc) return false;
      }

      // Developer filter
      if (selectedDeveloper !== 'All' && project.developer !== selectedDeveloper) {
        return false;
      }

      // City filter
      if (selectedCity !== 'All' && project.city !== selectedCity) {
        return false;
      }

      // Property type filter
      if (selectedType !== 'All' && project.type !== selectedType) {
        return false;
      }

      // Price filter
      if (selectedPriceRange !== 'All') {
        const price = project.startingPrice;
        if (selectedPriceRange === 'under2m' && price >= 2000000) return false;
        if (selectedPriceRange === '2m-4m' && (price < 2000000 || price > 4000000)) return false;
        if (selectedPriceRange === '4m-8m' && (price < 4000000 || price > 8000000)) return false;
        if (selectedPriceRange === 'over8m' && price < 8000000) return false;
      }

      // Handover filter
      if (selectedHandover !== 'All') {
        if (!project.handover.includes(selectedHandover)) return false;
      }

      return true;
    });

    // Sorting
    if (sortBy === 'price-asc') {
      list = [...list].sort((a, b) => a.startingPrice - b.startingPrice);
    } else if (sortBy === 'price-desc') {
      list = [...list].sort((a, b) => b.startingPrice - a.startingPrice);
    } else if (sortBy === 'roi') {
      list = [...list].sort((a, b) => parseFloat(b.roiEstimate) - parseFloat(a.roiEstimate));
    }

    return list;
  }, [searchQuery, selectedDeveloper, selectedCity, selectedType, selectedPriceRange, selectedHandover, sortBy]);

  const openWhatsApp = (project: NewLaunchProject) => {
    const message = encodeURIComponent(
      `Hello Rock Deals, I am interested in the newly launched project "${project.name}" by ${project.developer} (${project.priceFormatted}, Handover ${project.handover}). Please provide VIP pre-launch allocation, unit layout sheets, and 0% commission pricing details.`
    );
    window.open(`https://wa.me/971529178630?text=${message}`, '_blank');
  };

  const resetFilters = () => {
    setSearchQuery('');
    setSelectedDeveloper('All');
    setSelectedCity('All');
    setSelectedType('All');
    setSelectedPriceRange('All');
    setSelectedHandover('All');
    setSortBy('newest');
  };

  return (
    <div className="min-h-screen bg-[#FBFBFA] font-sans text-dark">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-4 md:gap-8">
            <button 
              onClick={onBack}
              className="group flex items-center gap-2.5 text-dark/50 hover:text-porsche-red transition-colors text-xs font-technical font-bold uppercase tracking-widest min-h-[44px]"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </button>
            <div className="h-4 w-px bg-gray-200 hidden sm:block"></div>
            <div className="flex items-baseline gap-1">
              <span className="text-dark font-display font-black text-xl tracking-tighter">ROCK</span>
              <span className="text-dark/40 font-display font-light text-xl tracking-tighter">DEALS</span>
              <span className="text-porsche-red font-display font-black text-xl">.</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-porsche-red/10 text-porsche-red text-[11px] font-technical font-bold tracking-widest uppercase rounded-full">
              <span className="w-2 h-2 rounded-full bg-porsche-red animate-pulse"></span>
              Live New Launches
            </span>
            <button
              onClick={() => onEnquire('VIP Launch Allocation')}
              className="px-4 py-2 bg-dark hover:bg-porsche-red text-white text-xs font-black tracking-widest uppercase transition-colors"
            >
              Register VIP
            </button>
          </div>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="bg-dark text-white relative overflow-hidden py-10 sm:py-16 md:py-20 border-b border-white/10">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(#D5001C_1px,transparent_1px)] [background-size:24px_24px]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-6 sm:mb-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-porsche-red text-white text-[9px] sm:text-[10px] font-black uppercase tracking-[0.25em] mb-3 sm:mb-4">
                <Flame className="w-3.5 h-3.5" />
                OFFICIAL REVERSE-ENGINEERED LAUNCH REGISTRY
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-black tracking-tight uppercase leading-[1.08]">
                Dubai & Abu Dhabi <br />
                <span className="text-porsche-red">Exclusive New Launches</span>
              </h1>
              <p className="mt-2.5 sm:mt-4 text-white/60 text-xs sm:text-sm md:text-base max-w-2xl font-light leading-relaxed">
                Explore real-time off-plan releases directly from Dubai & Abu Dhabi’s top master developers. 
                Enjoy priority unit selection, pre-launch pricing, and 0% brokerage fees.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-4 shrink-0">
              <div className="bg-white/5 border border-white/10 p-3 sm:p-4">
                <p className="text-[9px] sm:text-[10px] font-technical uppercase tracking-widest text-white/40 mb-0.5">Live Launches</p>
                <p className="text-xl sm:text-2xl font-display font-black text-white">{NEW_LAUNCHES.length}</p>
                <p className="text-[9px] sm:text-[10px] text-porsche-red font-bold mt-0.5">Verified Inventory</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 sm:p-4">
                <p className="text-[9px] sm:text-[10px] font-technical uppercase tracking-widest text-white/40 mb-0.5">Commission</p>
                <p className="text-xl sm:text-2xl font-display font-black text-porsche-red">0%</p>
                <p className="text-[9px] sm:text-[10px] text-white/60 font-bold mt-0.5">Direct Developer</p>
              </div>
              <div className="bg-white/5 border border-white/10 p-3 sm:p-4 col-span-2 sm:col-span-1">
                <p className="text-[9px] sm:text-[10px] font-technical uppercase tracking-widest text-white/40 mb-0.5">Golden Visa</p>
                <p className="text-xl sm:text-2xl font-display font-black text-white">Eligible</p>
                <p className="text-[9px] sm:text-[10px] text-white/60 font-bold mt-0.5">Investments 2M+ AED</p>
              </div>
            </div>
          </div>

          {/* Quick Search Bar */}
          <div className="bg-white p-2 md:p-3 shadow-2xl flex flex-col md:flex-row gap-2 border border-white/20">
            <div className="flex-1 flex items-center gap-3 px-3 py-2 bg-gray-50 border border-gray-200">
              <Search className="w-4 h-4 text-dark/40" />
              <input 
                type="text" 
                placeholder="Search by project name, developer, or location..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent text-dark placeholder:text-dark/40 text-xs sm:text-sm focus:outline-none font-medium"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="text-dark/40 hover:text-dark text-xs">
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex items-center gap-2">
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="flex-1 sm:flex-none px-3 py-2 bg-gray-50 border border-gray-200 text-dark text-xs font-technical font-bold uppercase tracking-wider focus:outline-none"
              >
                <option value="All">All Cities</option>
                <option value="Dubai">Dubai</option>
                <option value="Abu Dhabi">Abu Dhabi</option>
              </select>

              <select
                value={selectedDeveloper}
                onChange={(e) => setSelectedDeveloper(e.target.value)}
                className="flex-1 sm:flex-none px-3 py-2 bg-gray-50 border border-gray-200 text-dark text-xs font-technical font-bold uppercase tracking-wider focus:outline-none max-w-[150px] truncate"
              >
                <option value="All">All Developers</option>
                {developers.filter(d => d !== 'All').map(dev => (
                  <option key={dev} value={dev}>{dev}</option>
                ))}
              </select>

              <button 
                onClick={resetFilters}
                className="px-3.5 py-2 bg-gray-100 hover:bg-gray-200 text-dark text-xs font-technical font-bold uppercase tracking-wider transition-colors whitespace-nowrap"
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Chips Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-[56px] sm:top-[69px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-2 sm:py-2.5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4">
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-4 px-4 sm:mx-0 sm:px-0">
            <span className="text-dark/40 font-technical font-bold uppercase text-[10px] tracking-widest shrink-0 mr-1">
              Type:
            </span>

            {/* Type Filter */}
            {['All', 'Apartment', 'Villa', 'Townhouse', 'Penthouse'].map(t => (
              <button
                key={t}
                onClick={() => setSelectedType(t)}
                className={`px-3 py-1.5 text-[11px] font-technical uppercase font-bold tracking-wider transition-colors shrink-0 ${
                  selectedType === t 
                    ? 'bg-dark text-white' 
                    : 'bg-gray-100 text-dark/70 hover:bg-gray-200'
                }`}
              >
                {t}
              </button>
            ))}

            <div className="h-4 w-px bg-gray-300 shrink-0 mx-1"></div>

            {/* Price Filter */}
            <select
              value={selectedPriceRange}
              onChange={(e) => setSelectedPriceRange(e.target.value)}
              className="px-2.5 py-1.5 bg-gray-100 text-dark text-[11px] font-technical uppercase font-bold tracking-wider focus:outline-none border-none shrink-0"
            >
              <option value="All">Price: Any</option>
              <option value="under2m">Under AED 2M</option>
              <option value="2m-4m">AED 2M - 4M</option>
              <option value="4m-8m">AED 4M - 8M</option>
              <option value="over8m">Above AED 8M</option>
            </select>

            {/* Handover Filter */}
            <select
              value={selectedHandover}
              onChange={(e) => setSelectedHandover(e.target.value)}
              className="px-2.5 py-1.5 bg-gray-100 text-dark text-[11px] font-technical uppercase font-bold tracking-wider focus:outline-none border-none shrink-0"
            >
              <option value="All">Handover: Any</option>
              <option value="2026">2026</option>
              <option value="2027">2027</option>
              <option value="2028">2028</option>
              <option value="2029">2029</option>
            </select>
          </div>

          {/* Sort By & Launch count */}
          <div className="flex items-center justify-between sm:justify-end gap-2 text-xs pt-1 sm:pt-0 border-t sm:border-t-0 border-gray-100">
            <div className="flex items-center gap-1.5">
              <span className="text-dark/40 font-technical font-bold uppercase text-[10px] tracking-widest">
                Sort:
              </span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-2 py-1 bg-gray-100 text-dark text-[11px] font-technical uppercase font-bold tracking-wider focus:outline-none border-none"
              >
                <option value="newest">Featured Newest</option>
                <option value="price-asc">Price (Low to High)</option>
                <option value="price-desc">Price (High to Low)</option>
                <option value="roi">Highest Target ROI</option>
              </select>
            </div>
            <span className="text-[11px] font-technical text-dark/50">
              <span className="font-bold text-dark">{filteredProjects.length}</span> launches
            </span>
          </div>
        </div>
      </div>

      {/* Main Grid Section */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-6 sm:py-10 pb-24 sm:pb-12">
        {filteredProjects.length === 0 ? (
          <div className="bg-white border border-gray-200 p-12 text-center max-w-lg mx-auto">
            <Building2 className="w-12 h-12 text-dark/20 mx-auto mb-4" />
            <h3 className="text-lg font-display font-black uppercase text-dark mb-2">No Launches Found</h3>
            <p className="text-xs text-dark/50 mb-6 font-light">
              No new launches matched your exact filter combination. Try adjusting your search query or reset the filters.
            </p>
            <button
              onClick={resetFilters}
              className="px-5 py-2.5 bg-porsche-red text-white text-xs font-bold uppercase tracking-widest hover:bg-dark transition-colors"
            >
              Reset All Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="group bg-white border border-gray-200 hover:border-dark hover:shadow-2xl hover:shadow-dark/10 transition-all duration-300 flex flex-col overflow-hidden relative"
              >
                {/* Top Image Container */}
                <div 
                  className="relative h-64 overflow-hidden bg-gray-950 cursor-pointer"
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveGalleryIndex(0);
                  }}
                >
                  <SmartImage 
                    src={project.heroImage} 
                    alt={project.name} 
                    fallbackCategory={getFallbackCategory(project.name, project.type, project.location)}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    containerClassName="w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none"></div>

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2 pointer-events-none">
                    <span className="px-2.5 py-1 bg-porsche-red text-white text-[9px] font-black uppercase tracking-[0.2em] shadow-md flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      {project.badge}
                    </span>
                    <span className="px-2.5 py-1 bg-dark/80 backdrop-blur-md text-white text-[10px] font-technical font-bold uppercase tracking-wider">
                      {project.city}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Details */}
                  <div className="absolute bottom-3 left-3 right-3 text-white">
                    <p className="text-[10px] font-technical uppercase tracking-widest text-white/70 mb-0.5">
                      {project.developer}
                    </p>
                    <h3 className="text-xl font-display font-black uppercase tracking-tight text-white group-hover:text-porsche-red transition-colors line-clamp-1">
                      {project.name}
                    </h3>
                  </div>

                  {/* Gallery count indicator */}
                  {project.gallery && project.gallery.length > 1 && (
                    <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/70 text-white text-[9px] font-technical font-bold uppercase tracking-wider">
                      +{project.gallery.length} Photos
                    </div>
                  )}
                </div>

                {/* Content Body */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Location & Property Type */}
                    <div className="flex items-center justify-between text-xs text-dark/60 mb-4 pb-3 border-b border-gray-100">
                      <div className="flex items-center gap-1.5 truncate max-w-[200px]">
                        <MapPin className="w-3.5 h-3.5 text-porsche-red shrink-0" />
                        <span className="truncate font-medium">{project.location}</span>
                      </div>
                      <span className="px-2 py-0.5 bg-gray-100 text-dark/70 text-[10px] font-technical font-bold uppercase tracking-wider shrink-0">
                        {project.type}
                      </span>
                    </div>

                    {/* Key Technical Specs Grid */}
                    <div className="grid grid-cols-2 gap-3 mb-4 bg-gray-50/80 p-3 border border-gray-100">
                      <div>
                        <p className="text-[9px] font-technical uppercase tracking-widest text-dark/40">Starting From</p>
                        <p className="text-sm font-technical font-extrabold text-porsche-red">{project.priceFormatted}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-technical uppercase tracking-widest text-dark/40">Handover Date</p>
                        <p className="text-sm font-technical font-extrabold text-dark">{project.handover}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-technical uppercase tracking-widest text-dark/40">Payment Plan</p>
                        <p className="text-xs font-technical font-bold text-dark/80">{project.paymentPlan}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-technical uppercase tracking-widest text-dark/40">Est. ROI</p>
                        <p className="text-xs font-technical font-bold text-emerald-600 flex items-center gap-0.5">
                          <TrendingUp className="w-3 h-3" />
                          {project.roiEstimate}
                        </p>
                      </div>
                    </div>

                    {/* Description preview */}
                    <p className="text-xs text-dark/60 font-light line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Card Action Buttons */}
                  <div className="pt-3 border-t border-gray-100 flex items-center gap-2">
                    <button
                      onClick={() => {
                        setSelectedProject(project);
                        setActiveGalleryIndex(0);
                      }}
                      className="flex-1 py-2.5 bg-dark hover:bg-porsche-red text-white text-xs font-black tracking-widest uppercase transition-colors flex items-center justify-center gap-1.5 min-h-[44px]"
                    >
                      <span>Explore</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => openWhatsApp(project)}
                      className="px-3 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white transition-colors flex items-center justify-center min-h-[44px]"
                      title="Direct WhatsApp Allocation"
                      aria-label="Direct WhatsApp Allocation"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </button>

                    {onOpenCalculator && (
                      <button
                        onClick={() => onOpenCalculator(project.startingPrice)}
                        className="px-3 py-2.5 bg-gray-100 hover:bg-gray-200 text-dark transition-colors flex items-center justify-center min-h-[44px]"
                        title="Calculate Mortgage & ROI"
                        aria-label="Calculate Mortgage & ROI"
                      >
                        <Calculator className="w-4 h-4 text-dark/70" />
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (() => {
          const projectCategory = getFallbackCategory(selectedProject.name, selectedProject.type, selectedProject.location);
          const safeGallery = getProjectGalleryWithFallbacks(selectedProject.gallery, selectedProject.heroImage, projectCategory);
          const safeActiveIndex = activeGalleryIndex < safeGallery.length ? activeGalleryIndex : 0;

          return (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 md:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
              <motion.div
                ref={modalScrollRef}
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.25 }}
                className="bg-white w-full max-w-5xl max-h-[92vh] overflow-y-auto shadow-2xl border border-white/20 relative flex flex-col scroll-smooth"
              >
                {/* Sticky Modal Header */}
                <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-4 sm:px-6 py-3.5 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                    <span className="px-2.5 py-1 bg-porsche-red text-white text-[9px] font-black uppercase tracking-[0.2em]">
                      {selectedProject.badge}
                    </span>
                    <DeveloperBadge 
                      name={selectedProject.developer} 
                      logoUrl={selectedProject.developerLogo} 
                      size="sm" 
                    />
                    <span className="text-[11px] font-technical uppercase font-bold text-dark/40 hidden sm:inline">
                      ID #{selectedProject.id} • {selectedProject.city}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Quick View Photos Button */}
                    <button
                      onClick={() => setIsFullscreenLightbox(true)}
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-porsche-red hover:text-white text-dark text-xs font-technical uppercase font-bold tracking-wider transition-colors min-h-[38px]"
                      title="View all high-res photos"
                    >
                      <Camera className="w-3.5 h-3.5" />
                      <span>{safeGallery.length} Photos</span>
                    </button>

                    <button
                      onClick={() => setSelectedProject(null)}
                      className="w-9 h-9 rounded-full bg-gray-100 hover:bg-dark hover:text-white flex items-center justify-center transition-colors min-h-[44px] min-w-[44px]"
                      aria-label="Close details"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Gallery Carousel with Touch Swiping */}
                <div 
                  className="relative bg-black min-h-[300px] sm:min-h-[400px] md:min-h-[460px] h-72 sm:h-96 md:h-[460px] w-full shrink-0 overflow-hidden select-none touch-pan-y"
                  onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                  onTouchEnd={(e) => {
                    if (touchStartX === null) return;
                    const diff = e.changedTouches[0].clientX - touchStartX;
                    if (diff > 45) {
                      // Swiped right -> prev image
                      setActiveGalleryIndex(safeActiveIndex > 0 ? safeActiveIndex - 1 : safeGallery.length - 1);
                    } else if (diff < -45) {
                      // Swiped left -> next image
                      setActiveGalleryIndex(safeActiveIndex < safeGallery.length - 1 ? safeActiveIndex + 1 : 0);
                    }
                    setTouchStartX(null);
                  }}
                >
                  <SmartImage 
                    src={safeGallery[safeActiveIndex]} 
                    alt={`${selectedProject.name} - Photo ${safeActiveIndex + 1}`} 
                    fallbackCategory={projectCategory}
                    className="w-full h-full object-cover"
                    containerClassName="w-full h-full min-h-[300px] sm:min-h-[400px] md:min-h-[460px]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none"></div>

                  {/* Fullscreen Expansion Button */}
                  <button
                    onClick={() => setIsFullscreenLightbox(true)}
                    className="absolute top-4 right-4 z-20 px-3 py-1.5 rounded-full bg-black/60 hover:bg-porsche-red text-white flex items-center gap-1.5 backdrop-blur-md transition-all shadow-lg text-xs font-technical uppercase font-bold"
                    title="View Fullscreen High-Res Render"
                    aria-label="View Fullscreen High-Res Render"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Fullscreen</span>
                  </button>

                  {/* Gallery Navigation Controls for Desktop/Tablet */}
                  {safeGallery.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveGalleryIndex(safeActiveIndex > 0 ? safeActiveIndex - 1 : safeGallery.length - 1)}
                        className="hidden sm:flex absolute left-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-porsche-red text-white items-center justify-center transition-colors min-h-[44px] min-w-[44px] shadow-lg z-10"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => setActiveGalleryIndex(safeActiveIndex < safeGallery.length - 1 ? safeActiveIndex + 1 : 0)}
                        className="hidden sm:flex absolute right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-black/60 hover:bg-porsche-red text-white items-center justify-center transition-colors min-h-[44px] min-w-[44px] shadow-lg z-10"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>

                      {/* Image Counter Badge */}
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/75 backdrop-blur-sm text-white text-xs font-technical font-bold uppercase tracking-widest rounded-full z-10 flex items-center gap-1.5">
                        <Camera className="w-3.5 h-3.5 text-porsche-red" />
                        <span>{safeActiveIndex + 1} / {safeGallery.length} Photos</span>
                      </div>

                      {/* Mobile Touch Pagination Dots */}
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 sm:hidden">
                        {safeGallery.slice(0, 10).map((_, dotIdx) => (
                          <button
                            key={dotIdx}
                            onClick={() => setActiveGalleryIndex(dotIdx)}
                            className={`h-1.5 transition-all rounded-full ${
                              safeActiveIndex === dotIdx ? 'w-5 bg-porsche-red' : 'w-1.5 bg-white/50'
                            }`}
                            aria-label={`Slide ${dotIdx + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}

                  {/* Overlay Title */}
                  <div className="absolute bottom-4 left-4 sm:left-6 right-6 text-white pointer-events-none hidden sm:block">
                    <p className="text-xs font-technical uppercase tracking-widest text-porsche-red font-bold">
                      Official Master Launch • {selectedProject.developer}
                    </p>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-black uppercase tracking-tight text-white drop-shadow-md">
                      {selectedProject.name}
                    </h2>
                  </div>
                </div>

                {/* Gallery Thumbnails Strip */}
                {safeGallery.length > 1 && (
                  <div className="px-4 sm:px-6 py-2.5 bg-gray-950 flex items-center gap-2 overflow-x-auto no-scrollbar shrink-0">
                    {safeGallery.map((imgUrl, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`relative w-16 h-11 sm:w-20 sm:h-12 shrink-0 border-2 overflow-hidden transition-all rounded-sm ${
                          safeActiveIndex === idx ? 'border-porsche-red scale-105 opacity-100 shadow-md ring-2 ring-porsche-red/50' : 'border-transparent opacity-50 hover:opacity-100'
                        }`}
                      >
                        <SmartImage 
                          src={imgUrl} 
                          alt={`Thumbnail ${idx + 1}`} 
                          fallbackCategory={projectCategory}
                          className="w-full h-full object-cover"
                          containerClassName="w-full h-full"
                          showSkeleton={false}
                          loading="eager"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Modal Body Content */}
                <div className="p-6 md:p-8 space-y-8">
                  {/* Stats & Pricing Banner */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50 p-5 border border-gray-200">
                    <div>
                      <p className="text-[10px] font-technical uppercase tracking-widest text-dark/40 mb-1">Starting Price</p>
                      <p className="text-xl font-display font-black text-porsche-red">{selectedProject.priceFormatted}</p>
                      <p className="text-[10px] text-dark/50 mt-0.5">0% Agency Brokerage</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-technical uppercase tracking-widest text-dark/40 mb-1">Handover Schedule</p>
                      <p className="text-xl font-display font-black text-dark">{selectedProject.handover}</p>
                      <p className="text-[10px] text-dark/50 mt-0.5">Target Completion</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-technical uppercase tracking-widest text-dark/40 mb-1">Payment Plan</p>
                      <p className="text-xl font-display font-black text-dark">{selectedProject.paymentPlan}</p>
                      <p className="text-[10px] text-dark/50 mt-0.5">Direct Developer Terms</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-technical uppercase tracking-widest text-dark/40 mb-1">Estimated ROI</p>
                      <p className="text-xl font-display font-black text-emerald-600">{selectedProject.roiEstimate}</p>
                      <p className="text-[10px] text-dark/50 mt-0.5">High Rental Yield</p>
                    </div>
                  </div>

                  {/* Description & Developer Profile */}
                  <div>
                    <h4 className="text-xs font-technical uppercase tracking-widest font-black text-dark/40 mb-3">
                      Project Overview & Architecture
                    </h4>
                    <p className="text-sm md:text-base text-dark/70 font-light leading-relaxed whitespace-pre-line">
                      {selectedProject.description}
                    </p>
                  </div>

                  {/* Dedicated Architectural Renders & Visual Tour Gallery in Details */}
                  <div className="space-y-4 pt-4 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 bg-porsche-red inline-block"></span>
                          <h4 className="text-sm font-technical uppercase tracking-widest font-black text-dark">
                            Project Architectural Renders & Visual Gallery
                          </h4>
                        </div>
                        <p className="text-xs text-dark/50 mt-0.5">
                          High-resolution master exterior views, interiors, and resort amenities
                        </p>
                      </div>
                      <button
                        onClick={() => setIsFullscreenLightbox(true)}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-dark hover:bg-porsche-red text-white text-xs font-technical uppercase font-bold tracking-wider transition-colors self-start sm:self-auto shadow-sm"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View All {safeGallery.length} High-Res Photos</span>
                      </button>
                    </div>

                    {/* Visual Photo Cards Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                      {safeGallery.slice(0, 6).map((imgUrl, photoIdx) => (
                        <div
                          key={photoIdx}
                          onClick={() => {
                            setActiveGalleryIndex(photoIdx);
                            setIsFullscreenLightbox(true);
                          }}
                          className="group relative h-40 sm:h-52 md:h-56 bg-gray-900 border border-gray-200 overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all"
                        >
                          <SmartImage 
                            src={imgUrl}
                            alt={`${selectedProject.name} visual render ${photoIdx + 1}`}
                            fallbackCategory={projectCategory}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            containerClassName="w-full h-full"
                            loading="eager"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-60 group-hover:opacity-90 transition-opacity"></div>
                          
                          <div className="absolute top-2.5 left-2.5 px-2 py-0.5 bg-black/70 backdrop-blur-sm text-white text-[10px] font-technical uppercase font-bold tracking-wider">
                            Photo #{photoIdx + 1}
                          </div>

                          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white text-xs font-technical">
                            <span className="font-bold uppercase tracking-wider text-[11px] truncate pr-2">
                              {photoIdx === 0 ? 'Master Façade' : photoIdx === 1 ? 'Waterfront Living' : photoIdx === 2 ? 'Luxury Interiors' : photoIdx === 3 ? 'Panoramic Terrace' : `Visual Render 0${photoIdx + 1}`}
                            </span>
                            <span className="shrink-0 flex items-center gap-1 text-[10px] text-porsche-red bg-white px-2 py-0.5 font-black uppercase tracking-wider opacity-90 group-hover:opacity-100 transition-opacity">
                              <Maximize2 className="w-3 h-3" />
                              View
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center justify-between text-[11px] font-technical uppercase tracking-wider text-dark/50 pt-1">
                      <span>Tap any image to inspect high-resolution render</span>
                      <span className="text-emerald-700 font-bold">Official Direct Developer Imagery</span>
                    </div>
                  </div>

                  {/* Key Investment Highlights */}
                  <div>
                    <h4 className="text-xs font-technical uppercase tracking-widest font-black text-dark/40 mb-3">
                      Rock Deals Executive Highlights

                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {selectedProject.highlights.map((hl, i) => (
                      <div key={i} className="flex items-start gap-2.5 p-3 bg-gray-50 border border-gray-100 text-xs font-medium text-dark/80">
                        <CheckCircle2 className="w-4 h-4 text-porsche-red shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                    <div className="flex items-start gap-2.5 p-3 bg-gray-50 border border-gray-100 text-xs font-medium text-dark/80">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>DLD Approved & RERA Escrow Account Guaranteed</span>
                    </div>
                  </div>
                </div>

                {/* Payment Plan Milestones */}
                {selectedProject.paymentMilestones && selectedProject.paymentMilestones.length > 0 && (
                  <div>
                    <h4 className="text-xs font-technical uppercase tracking-widest font-black text-dark/40 mb-3">
                      Payment Milestone Schedule
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {selectedProject.paymentMilestones.map((ms, idx) => (
                        <div key={idx} className="p-4 bg-white border border-gray-200 shadow-sm relative">
                          <span className="text-[10px] font-technical uppercase tracking-widest text-dark/40 block mb-1">
                            Milestone #{idx + 1}
                          </span>
                          <p className="text-sm font-bold text-dark mb-1">{ms.milestone}</p>
                          <span className="text-lg font-display font-black text-porsche-red">
                            {ms.percentage || 'On Schedule'}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Amenities Grid */}
                {selectedProject.amenities && selectedProject.amenities.length > 0 && (
                  <div>
                    <h4 className="text-xs font-technical uppercase tracking-widest font-black text-dark/40 mb-3">
                      World-Class Amenities & Features
                    </h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                      {selectedProject.amenities.map((amenity, i) => (
                        <div key={i} className="px-3 py-2 bg-gray-50 border border-gray-100 text-xs font-medium text-dark/80 flex items-center gap-2">
                          <Sparkles className="w-3.5 h-3.5 text-porsche-red shrink-0" />
                          <span className="truncate">{amenity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Location & Address */}
                <div className="bg-gray-50 p-5 border border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <p className="text-[10px] font-technical uppercase tracking-widest text-dark/40 mb-1">Prime Address</p>
                    <p className="text-sm font-bold text-dark flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-porsche-red" />
                      {selectedProject.fullAddress}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-dark/60 font-light">Direct Developer Allocation</span>
                  </div>
                </div>

                {/* Social Share Section */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs font-technical font-bold uppercase tracking-wider text-dark/50">
                    <Share2 className="w-4 h-4" />
                    <span>Share This Launch:</span>
                  </div>
                  <SocialShare 
                    title={`${selectedProject.name} by ${selectedProject.developer} - New Launch in ${selectedProject.location}`}
                    url={window.location.href}
                    description={`Exclusive launch: ${selectedProject.name} starting from ${selectedProject.priceFormatted}. Handover ${selectedProject.handover}. 0% Commission with Rock Deals.`}
                  />
                </div>

                {/* Action Buttons */}
                <div className="pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={() => {
                      onEnquire(`${selectedProject.name} (VIP Launch Allocation)`);
                      setSelectedProject(null);
                    }}
                    className="w-full sm:flex-1 py-4 bg-porsche-red hover:bg-dark text-white text-xs font-black tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <span>Request VIP Priority Allocation</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => openWhatsApp(selectedProject)}
                    className="w-full sm:w-auto px-6 py-4 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black tracking-[0.15em] uppercase transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Instant WhatsApp VIP Desk</span>
                  </button>

                  {onOpenCalculator && (
                    <button
                      onClick={() => {
                        onOpenCalculator(selectedProject.startingPrice);
                        setSelectedProject(null);
                      }}
                      className="w-full sm:w-auto px-5 py-4 bg-gray-100 hover:bg-gray-200 text-dark text-xs font-technical font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 min-h-[48px]"
                    >
                      <Calculator className="w-4 h-4" />
                      <span>ROI Calculator</span>
                    </button>
                  )}
                </div>
              </div>

              {/* Mobile Sticky Bottom CTA Bar */}
              <div className="sm:hidden sticky bottom-0 left-0 right-0 p-3 bg-white/95 backdrop-blur-md border-t border-gray-200 shadow-2xl flex items-center gap-2 z-40">
                <button
                  onClick={() => openWhatsApp(selectedProject)}
                  className="flex-1 py-3 bg-emerald-600 active:bg-emerald-700 text-white text-[11px] font-technical font-black tracking-wider uppercase rounded-xl flex items-center justify-center gap-1.5 shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={() => {
                    onEnquire(`${selectedProject.name} (VIP Launch Allocation)`);
                    setSelectedProject(null);
                  }}
                  className="flex-[1.4] py-3 bg-porsche-red active:bg-dark text-white text-[11px] font-technical font-black tracking-wider uppercase rounded-xl flex items-center justify-center gap-1 shadow-md"
                >
                  <span>VIP Allocation</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        );
      })()}
    </AnimatePresence>

      {/* Fullscreen High-Resolution Lightbox Viewer */}
      <AnimatePresence>
        {isFullscreenLightbox && selectedProject && (
          <div className="fixed inset-0 z-[150] bg-black/95 flex flex-col justify-between p-4 sm:p-8 backdrop-blur-xl select-none">
            {/* Lightbox Header */}
            <div className="flex items-center justify-between text-white border-b border-white/10 pb-4">
              <div>
                <p className="text-xs font-technical uppercase tracking-widest text-porsche-red font-bold">
                  {selectedProject.developer} • Launch Gallery
                </p>
                <h3 className="text-lg sm:text-2xl font-display font-black uppercase text-white">
                  {selectedProject.name}
                </h3>
              </div>
              <button
                onClick={() => setIsFullscreenLightbox(false)}
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-porsche-red text-white flex items-center justify-center transition-colors"
                aria-label="Close fullscreen view"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Lightbox Main Render */}
            {(() => {
              const projectCategory = getFallbackCategory(selectedProject.name, selectedProject.type, selectedProject.location);
              const safeGallery = getProjectGalleryWithFallbacks(selectedProject.gallery, selectedProject.heroImage, projectCategory);
              const safeActiveIndex = activeGalleryIndex < safeGallery.length ? activeGalleryIndex : 0;

              return (
                <div 
                  className="relative flex-1 flex items-center justify-center my-4 overflow-hidden"
                  onTouchStart={(e) => setTouchStartX(e.touches[0].clientX)}
                  onTouchEnd={(e) => {
                    if (touchStartX === null) return;
                    const diff = e.changedTouches[0].clientX - touchStartX;
                    if (diff > 45) {
                      setActiveGalleryIndex(safeActiveIndex > 0 ? safeActiveIndex - 1 : safeGallery.length - 1);
                    } else if (diff < -45) {
                      setActiveGalleryIndex(safeActiveIndex < safeGallery.length - 1 ? safeActiveIndex + 1 : 0);
                    }
                    setTouchStartX(null);
                  }}
                >
                  <SmartImage
                    src={safeGallery[safeActiveIndex]}
                    alt={`${selectedProject.name} Fullscreen`}
                    fallbackCategory={projectCategory}
                    className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
                    containerClassName="flex items-center justify-center w-full h-full"
                  />

                  {safeGallery.length > 1 && (
                    <>
                      <button
                        onClick={() => setActiveGalleryIndex(safeActiveIndex > 0 ? safeActiveIndex - 1 : safeGallery.length - 1)}
                        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-porsche-red text-white flex items-center justify-center transition-all shadow-xl"
                        aria-label="Previous image"
                      >
                        <ChevronLeft className="w-8 h-8" />
                      </button>
                      <button
                        onClick={() => setActiveGalleryIndex(safeActiveIndex < safeGallery.length - 1 ? safeActiveIndex + 1 : 0)}
                        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/60 hover:bg-porsche-red text-white flex items-center justify-center transition-all shadow-xl"
                        aria-label="Next image"
                      >
                        <ChevronRight className="w-8 h-8" />
                      </button>
                    </>
                  )}
                </div>
              );
            })()}

            {/* Lightbox Footer Thumbnails */}
            {(() => {
              const projectCategory = getFallbackCategory(selectedProject.name, selectedProject.type, selectedProject.location);
              const safeGallery = getProjectGalleryWithFallbacks(selectedProject.gallery, selectedProject.heroImage, projectCategory);
              const safeActiveIndex = activeGalleryIndex < safeGallery.length ? activeGalleryIndex : 0;

              return (
                <div className="flex items-center justify-between border-t border-white/10 pt-4 gap-4">
                  <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
                    {safeGallery.map((img, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveGalleryIndex(idx)}
                        className={`w-16 h-12 shrink-0 rounded overflow-hidden border-2 transition-all ${
                          safeActiveIndex === idx ? 'border-porsche-red scale-105 opacity-100' : 'border-transparent opacity-40 hover:opacity-80'
                        }`}
                      >
                        <SmartImage
                          src={img}
                          alt="Thumbnail"
                          fallbackCategory={projectCategory}
                          className="w-full h-full object-cover"
                          containerClassName="w-full h-full"
                          showSkeleton={false}
                        />
                      </button>
                    ))}
                  </div>

                  <span className="text-white/60 font-technical text-xs font-bold shrink-0">
                    {safeActiveIndex + 1} / {safeGallery.length}
                  </span>
                </div>
              );
            })()}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default NewLaunchesView;
