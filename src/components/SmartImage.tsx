import React, { useState, useEffect, useRef } from 'react';
import { VERIFIED_FALLBACKS, FallbackCategory } from '../utils/imageUtils';

interface SmartImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src?: string;
  alt: string;
  fallbackCategory?: FallbackCategory;
  containerClassName?: string;
  showSkeleton?: boolean;
}

export const SmartImage: React.FC<SmartImageProps> = ({
  src,
  alt,
  fallbackCategory = 'general',
  className = '',
  containerClassName = '',
  showSkeleton = true,
  loading = 'lazy',
  ...props
}) => {
  const [currentSrc, setCurrentSrc] = useState<string>('');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const [fallbackIndex, setFallbackIndex] = useState<number>(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const fallbackList = VERIFIED_FALLBACKS[fallbackCategory] || VERIFIED_FALLBACKS.general;

  useEffect(() => {
    // If src is empty or undefined, use first fallback immediately
    const targetSrc = (!src || typeof src !== 'string' || !src.trim()) 
      ? fallbackList[0] 
      : src;

    setCurrentSrc(targetSrc);
    setIsLoaded(false);
    setFallbackIndex(0);

    // Timeout safety: Ensure image becomes visible even if onLoad event is suppressed or delayed
    const safetyTimer = setTimeout(() => {
      if (imgRef.current && imgRef.current.naturalWidth > 0) {
        setIsLoaded(true);
      }
    }, 600);

    return () => clearTimeout(safetyTimer);
  }, [src, fallbackCategory]);

  // Check if image is already cached and loaded by browser
  useEffect(() => {
    if (imgRef.current && imgRef.current.complete && imgRef.current.naturalWidth > 0) {
      setIsLoaded(true);
    }
  }, [currentSrc]);

  const handleError = () => {
    // Gracefully cascade to next fallback from pool
    if (fallbackIndex < fallbackList.length) {
      setCurrentSrc(fallbackList[fallbackIndex]);
      setFallbackIndex(prev => prev + 1);
    } else {
      // Last resort: standard verified luxury architectural image
      setCurrentSrc(VERIFIED_FALLBACKS.general[0]);
    }
  };

  return (
    <div className={`relative overflow-hidden bg-gray-900 ${containerClassName}`}>
      {/* Sleek skeleton placeholder while loading */}
      {showSkeleton && !isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse flex items-center justify-center z-0 pointer-events-none">
          <div className="w-8 h-8 rounded-full border border-white/10 border-t-porsche-red/60 animate-spin"></div>
        </div>
      )}

      <img
        ref={imgRef}
        src={currentSrc || fallbackList[0]}
        alt={alt}
        referrerPolicy="no-referrer"
        loading={loading}
        onLoad={() => setIsLoaded(true)}
        onError={handleError}
        className={`${className} transition-opacity duration-200 relative z-10 ${
          isLoaded ? 'opacity-100' : 'opacity-70'
        }`}
        {...props}
      />
    </div>
  );
};

