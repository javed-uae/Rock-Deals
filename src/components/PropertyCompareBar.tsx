import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Layers, X, ArrowRight, Trash2 } from 'lucide-react';
import { PropertyItem } from './PropertyCompareModal';

interface PropertyCompareBarProps {
  selectedProperties: PropertyItem[];
  onRemove: (id: number) => void;
  onClear: () => void;
  onOpenModal: () => void;
}

export const PropertyCompareBar: React.FC<PropertyCompareBarProps> = ({
  selectedProperties,
  onRemove,
  onClear,
  onOpenModal,
}) => {
  if (selectedProperties.length === 0) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.95 }}
        transition={{ type: 'spring', damping: 22, stiffness: 220 }}
        className="fixed bottom-20 sm:bottom-6 left-1/2 -translate-x-1/2 z-[130] w-[calc(100vw-24px)] max-w-2xl bg-dark/95 backdrop-blur-2xl border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.8)] px-3 sm:px-4 py-2.5 flex items-center justify-between gap-2.5 sm:gap-4 rounded-xl"
      >
        {/* Left: Indicator & Thumbnails */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-hidden">
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-porsche-red opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-porsche-red"></span>
            </span>
            <div className="hidden xs:block">
              <span className="text-[10px] font-technical uppercase font-bold tracking-widest text-white/50 block">Compare</span>
              <span className="text-xs font-display font-black text-white">{selectedProperties.length}/3 Selected</span>
            </div>
          </div>

          <div className="h-6 w-px bg-white/15 hidden xs:block shrink-0"></div>

          {/* Selected Units Thumbnails */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
            {selectedProperties.map((p) => (
              <div 
                key={p.id}
                className="relative group shrink-0 w-10 h-10 sm:w-11 sm:h-11 rounded-lg overflow-hidden border border-white/20 bg-black/50"
                title={`${p.title} (${p.price})`}
              >
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover" 
                  referrerPolicy="no-referrer"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onRemove(p.id);
                  }}
                  className="absolute inset-0 bg-dark/80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
                  aria-label={`Remove ${p.title}`}
                >
                  <X className="w-3.5 h-3.5 text-porsche-red" />
                </button>
              </div>
            ))}

            {selectedProperties.length < 3 && (
              <div className="hidden sm:flex items-center text-[10px] font-technical text-white/40 tracking-wider uppercase pl-1">
                + Select {3 - selectedProperties.length} more
              </div>
            )}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onClear}
            className="text-white/40 hover:text-porsche-red p-1.5 transition-colors"
            title="Clear all selected"
          >
            <Trash2 className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenModal}
            className="px-3.5 sm:px-4 py-2 bg-porsche-red hover:bg-porsche-red/90 active:scale-95 text-white text-[11px] sm:text-xs font-technical font-bold uppercase tracking-wider rounded-lg flex items-center gap-1.5 shadow-[0_0_20px_rgba(213,0,28,0.5)] transition-all"
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Compare Now ({selectedProperties.length})</span>
            <ArrowRight className="w-3 h-3 hidden sm:inline" />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
