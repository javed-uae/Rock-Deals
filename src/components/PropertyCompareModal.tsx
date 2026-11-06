import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Check, 
  ArrowRight, 
  Building2, 
  MapPin, 
  Calendar, 
  TrendingUp, 
  Layers, 
  Maximize, 
  Bed, 
  Bath, 
  Share2, 
  Phone,
  Sparkles,
  ShieldCheck,
  Plus
} from 'lucide-react';

export interface PropertyItem {
  id: number;
  title: string;
  category: string;
  price: string;
  rawPrice: number;
  location: string;
  developer: string;
  type: string;
  bedrooms: string;
  bathrooms: string;
  builtUpArea: string;
  pricePerSqFt: string;
  handover: string;
  paymentPlan: string;
  estimatedROI: string;
  amenities: string[];
  image: string;
  badge?: string;
}

interface PropertyCompareModalProps {
  isOpen: boolean;
  onClose: () => void;
  properties: PropertyItem[];
  allProperties: PropertyItem[];
  onRemove: (id: number) => void;
  onAdd: (id: number) => void;
  onClear: () => void;
  onEnquire: (propertyTitle: string) => void;
}

export const PropertyCompareModal: React.FC<PropertyCompareModalProps> = ({
  isOpen,
  onClose,
  properties,
  allProperties,
  onRemove,
  onAdd,
  onClear,
  onEnquire,
}) => {
  if (!isOpen) return null;

  // Find lowest price and highest ROI among compared properties for smart badges
  const lowestPriceId = properties.length > 1 
    ? [...properties].sort((a, b) => a.rawPrice - b.rawPrice)[0]?.id 
    : null;

  const highestRoiId = properties.length > 1
    ? [...properties].sort((a, b) => {
        const roiA = parseFloat(a.estimatedROI) || 0;
        const roiB = parseFloat(b.estimatedROI) || 0;
        return roiB - roiA;
      })[0]?.id
    : null;

  // Unselected properties for quick addition
  const availableToAdd = allProperties.filter(
    p => !properties.some(selected => selected.id === p.id)
  );

  const handleWhatsAppComparison = () => {
    const propertySummary = properties
      .map((p, i) => `${i + 1}. ${p.title} (${p.location}) - ${p.price} [Plan: ${p.paymentPlan}, ROI: ${p.estimatedROI}]`)
      .join('%0A');
    
    const message = `Hello Rock Deals VIP Desk,%0A%0AI would like to receive an in-depth comparison advisory for these ${properties.length} Dubai properties:%0A%0A${propertySummary}%0A%0APlease provide available unit allocations and payment schedules.`;
    window.open(`https://wa.me/971529178630?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-2 sm:p-4 md:p-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 20 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white w-full max-w-6xl max-h-[92vh] flex flex-col shadow-2xl border border-gray-100 overflow-hidden relative"
        >
          {/* Top Porsche Red accent bar */}
          <div className="h-1 bg-porsche-red w-full shrink-0" />

          {/* Modal Header */}
          <div className="px-4 sm:px-8 py-4 sm:py-5 border-b border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shrink-0">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 bg-porsche-red text-white text-[9px] font-black uppercase tracking-[0.2em]">
                  SIDE-BY-SIDE EVALUATION
                </span>
                <span className="text-xs font-technical uppercase tracking-widest text-dark/50 font-bold">
                  {properties.length} of 3 Properties Selected
                </span>
              </div>
              <h2 className="text-lg sm:text-2xl font-display font-black uppercase tracking-tight text-dark">
                Compare Luxury Properties
              </h2>
            </div>

            <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
              {properties.length > 0 && (
                <>
                  <button
                    onClick={handleWhatsAppComparison}
                    className="px-3 py-2 bg-dark hover:bg-porsche-red text-white text-[11px] font-technical uppercase font-bold tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5 text-porsche-red group-hover:text-white" />
                    <span>WhatsApp Advisory</span>
                  </button>
                  <button
                    onClick={onClear}
                    className="px-3 py-2 text-dark/50 hover:text-porsche-red text-[11px] font-technical uppercase font-bold tracking-wider transition-colors border border-gray-200 hover:border-porsche-red"
                  >
                    Clear All
                  </button>
                </>
              )}
              <button
                onClick={onClose}
                className="w-9 h-9 flex items-center justify-center bg-gray-100 hover:bg-porsche-red hover:text-white text-dark transition-colors"
                aria-label="Close comparison modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Comparison Table / Matrix Body */}
          <div className="flex-1 overflow-x-auto overflow-y-auto p-4 sm:p-8">
            {properties.length === 0 ? (
              <div className="py-20 text-center max-w-md mx-auto">
                <Layers className="w-12 h-12 text-dark/20 mx-auto mb-4" />
                <h3 className="font-display font-black text-xl uppercase text-dark mb-2">No Properties Selected</h3>
                <p className="text-xs sm:text-sm text-dark/50 font-light mb-6">
                  Add up to 3 properties to evaluate them side by side on starting price, payment plans, handover dates, and projected ROI.
                </p>
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-porsche-red text-white text-xs font-technical font-bold uppercase tracking-widest hover:bg-dark transition-colors"
                >
                  Browse Portfolio
                </button>
              </div>
            ) : (
              <div className="min-w-[680px]">
                {/* Properties Cards Header Columns */}
                <div className="grid grid-cols-3 gap-4 pb-6 border-b border-gray-200">
                  {properties.map((p) => {
                    const isLowestPrice = p.id === lowestPriceId;
                    const isHighestRoi = p.id === highestRoiId;

                    return (
                      <div key={p.id} className="relative bg-gray-50 border border-gray-200 p-3 sm:p-4 flex flex-col justify-between group">
                        {/* Remove button */}
                        <button
                          onClick={() => onRemove(p.id)}
                          className="absolute top-2 right-2 z-10 w-6 h-6 bg-dark/80 hover:bg-porsche-red text-white flex items-center justify-center transition-colors"
                          title="Remove from comparison"
                        >
                          <X className="w-3.5 h-3.5" />
                        </button>

                        <div>
                          {/* Image */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-gray-900 mb-3">
                            <img 
                              src={p.image} 
                              alt={p.title} 
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              referrerPolicy="no-referrer"
                            />
                            <div className="absolute bottom-2 left-2 flex flex-wrap gap-1">
                              {isLowestPrice && (
                                <span className="px-2 py-0.5 bg-emerald-600 text-white text-[8px] font-black uppercase tracking-wider">
                                  Best Price Point
                                </span>
                              )}
                              {isHighestRoi && (
                                <span className="px-2 py-0.5 bg-porsche-red text-white text-[8px] font-black uppercase tracking-wider">
                                  Top Target Yield
                                </span>
                              )}
                            </div>
                          </div>

                          <span className="text-[9px] font-technical uppercase tracking-widest text-dark/40 font-bold block mb-0.5">
                            {p.developer}
                          </span>
                          <h4 className="font-display font-black text-sm sm:text-base uppercase text-dark leading-tight line-clamp-2 mb-1">
                            {p.title}
                          </h4>
                          <div className="flex items-center gap-1 text-[11px] text-dark/60 font-medium mb-3">
                            <MapPin className="w-3 h-3 text-porsche-red shrink-0" />
                            <span className="truncate">{p.location}</span>
                          </div>

                          <div className="mb-4">
                            <p className="text-[10px] font-technical uppercase tracking-widest text-dark/40">Starting Price</p>
                            <p className="text-lg sm:text-xl font-display font-black text-porsche-red">{p.price}</p>
                            <p className="text-[10px] font-technical text-dark/50">{p.pricePerSqFt}</p>
                          </div>
                        </div>

                        <button
                          onClick={() => onEnquire(p.title)}
                          className="w-full py-2 bg-porsche-red hover:bg-dark text-white text-[10px] sm:text-[11px] font-technical font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <span>Enquire on Unit</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    );
                  })}

                  {/* Add Property Placeholder if < 3 selected */}
                  {Array.from({ length: 3 - properties.length }).map((_, idx) => (
                    <div 
                      key={`empty-${idx}`} 
                      className="border-2 border-dashed border-gray-200 bg-gray-50/50 p-6 flex flex-col items-center justify-center text-center"
                    >
                      <Plus className="w-8 h-8 text-dark/20 mb-2" />
                      <p className="font-display font-black text-xs sm:text-sm uppercase text-dark/40 mb-1">
                        Compare Another Unit
                      </p>
                      <p className="text-[10px] text-dark/40 max-w-[180px] mb-4 font-light">
                        Select a property below to compare side by side
                      </p>

                      {availableToAdd.length > 0 && (
                        <select
                          onChange={(e) => {
                            const id = Number(e.target.value);
                            if (id) onAdd(id);
                          }}
                          defaultValue=""
                          className="w-full max-w-[200px] bg-white border border-gray-200 text-dark text-[11px] font-technical font-bold uppercase p-2 focus:outline-none focus:border-porsche-red"
                        >
                          <option value="" disabled>+ Pick a Property</option>
                          {availableToAdd.map(avail => (
                            <option key={avail.id} value={avail.id}>
                              {avail.title.slice(0, 30)}... ({avail.price})
                            </option>
                          ))}
                        </select>
                      )}
                    </div>
                  ))}
                </div>

                {/* Synchronized Specs Rows */}
                <div className="divide-y divide-gray-100 text-xs mt-4">
                  {/* Category & Architectural Type */}
                  <div className="py-3.5">
                    <p className="font-technical uppercase font-bold text-[10px] tracking-widest text-dark/40 mb-1.5">
                      Category & Style
                    </p>
                    <div className="grid grid-cols-3 gap-4 font-technical font-bold text-dark">
                      {properties.map(p => (
                        <div key={p.id} className="bg-gray-50 p-2.5">
                          <span className="block text-porsche-red uppercase text-[10px]">{p.category}</span>
                          <span className="text-xs">{p.type}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bedrooms & Bathrooms */}
                  <div className="py-3.5">
                    <p className="font-technical uppercase font-bold text-[10px] tracking-widest text-dark/40 mb-1.5">
                      Bedrooms & Baths
                    </p>
                    <div className="grid grid-cols-3 gap-4 font-technical text-dark">
                      {properties.map(p => (
                        <div key={p.id} className="flex items-center gap-3 bg-gray-50 p-2.5">
                          <div className="flex items-center gap-1 font-bold">
                            <Bed className="w-3.5 h-3.5 text-porsche-red" />
                            <span>{p.bedrooms}</span>
                          </div>
                          <span className="text-gray-300">|</span>
                          <div className="flex items-center gap-1 font-bold">
                            <Bath className="w-3.5 h-3.5 text-porsche-red" />
                            <span>{p.bathrooms}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Built-Up Area */}
                  <div className="py-3.5">
                    <p className="font-technical uppercase font-bold text-[10px] tracking-widest text-dark/40 mb-1.5">
                      Built-Up Area (Sq.Ft.)
                    </p>
                    <div className="grid grid-cols-3 gap-4 font-technical text-dark">
                      {properties.map(p => (
                        <div key={p.id} className="flex items-center gap-1.5 bg-gray-50 p-2.5 font-bold">
                          <Maximize className="w-3.5 h-3.5 text-porsche-red" />
                          <span>{p.builtUpArea}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Estimated ROI */}
                  <div className="py-3.5">
                    <p className="font-technical uppercase font-bold text-[10px] tracking-widest text-dark/40 mb-1.5">
                      Target Rental Yield (ROI)
                    </p>
                    <div className="grid grid-cols-3 gap-4 font-technical text-dark">
                      {properties.map(p => (
                        <div key={p.id} className="flex items-center gap-1.5 bg-emerald-50/70 border border-emerald-200/50 p-2.5">
                          <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="font-black text-emerald-700">{p.estimatedROI}</span>
                          <span className="text-[10px] text-emerald-600/70 ml-auto uppercase font-bold">Projected</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Handover Timeline */}
                  <div className="py-3.5">
                    <p className="font-technical uppercase font-bold text-[10px] tracking-widest text-dark/40 mb-1.5">
                      Handover Schedule
                    </p>
                    <div className="grid grid-cols-3 gap-4 font-technical text-dark">
                      {properties.map(p => (
                        <div key={p.id} className="flex items-center gap-1.5 bg-gray-50 p-2.5 font-bold">
                          <Calendar className="w-3.5 h-3.5 text-porsche-red" />
                          <span>{p.handover}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Payment Plan */}
                  <div className="py-3.5">
                    <p className="font-technical uppercase font-bold text-[10px] tracking-widest text-dark/40 mb-1.5">
                      Payment Scheme
                    </p>
                    <div className="grid grid-cols-3 gap-4 font-technical text-dark">
                      {properties.map(p => (
                        <div key={p.id} className="bg-gray-50 p-2.5">
                          <span className="font-bold text-dark block">{p.paymentPlan}</span>
                          <span className="text-[10px] text-dark/50">Direct Developer Terms</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Commission & DLD Transparency */}
                  <div className="py-3.5">
                    <p className="font-technical uppercase font-bold text-[10px] tracking-widest text-dark/40 mb-1.5">
                      Brokerage & DLD Support
                    </p>
                    <div className="grid grid-cols-3 gap-4 font-technical text-dark">
                      {properties.map(p => (
                        <div key={p.id} className="flex items-center gap-1.5 bg-gray-50 p-2.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="font-bold text-emerald-700">0% Commission</span>
                          <span className="text-[10px] text-dark/50 ml-auto">Free DLD Advisory</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Key Amenities */}
                  <div className="py-3.5">
                    <p className="font-technical uppercase font-bold text-[10px] tracking-widest text-dark/40 mb-2">
                      Key Signature Amenities
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      {properties.map(p => (
                        <div key={p.id} className="flex flex-wrap gap-1">
                          {p.amenities.map((amenity, i) => (
                            <span 
                              key={i} 
                              className="px-2 py-0.5 bg-gray-100 text-dark/70 text-[10px] font-technical uppercase font-medium flex items-center gap-1"
                            >
                              <Check className="w-2.5 h-2.5 text-porsche-red" />
                              {amenity}
                            </span>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Modal Footer */}
          <div className="px-4 sm:px-8 py-3.5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
            <p className="text-[11px] font-technical text-dark/50 text-center sm:text-left">
              Rock Deals VIP Guarantee: Official master developer pricing with direct unit allocations and zero brokerage overhead.
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={onClose}
                className="px-4 py-2 bg-white border border-gray-200 text-dark text-xs font-technical uppercase font-bold hover:bg-gray-100 transition-colors"
              >
                Close Comparison
              </button>
              {properties.length > 0 && (
                <button
                  onClick={handleWhatsAppComparison}
                  className="px-4 py-2 bg-porsche-red hover:bg-dark text-white text-xs font-technical uppercase font-bold tracking-wider transition-colors flex items-center gap-1.5 shadow-sm"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Request Full Comparison PDF</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
