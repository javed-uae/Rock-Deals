// Rock Deals Luxury Real Estate Image Fallback & Optimization Engine
// Provides high-resolution, verified architectural renders for Dubai developments

export const VERIFIED_FALLBACKS = {
  waterfront: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
  ],
  villa: [
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600',
  ],
  skyscraper: [
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&q=80&w=1600',
  ],
  penthouse: [
    'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=1600',
  ],
  general: [
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&q=80&w=1600',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1600',
  ]
};

export type FallbackCategory = 'waterfront' | 'villa' | 'skyscraper' | 'penthouse' | 'general';

export function getFallbackCategory(
  projectName?: string,
  type?: string,
  location?: string
): FallbackCategory {
  const text = `${projectName || ''} ${type || ''} ${location || ''}`.toLowerCase();
  
  if (text.includes('waterfront') || text.includes('beach') || text.includes('island') || text.includes('marina') || text.includes('creek') || text.includes('sea') || text.includes('palm')) {
    return 'waterfront';
  }
  if (text.includes('villa') || text.includes('mansion') || text.includes('townhouse') || text.includes('estate') || text.includes('gardens')) {
    return 'villa';
  }
  if (text.includes('penthouse') || text.includes('sky villa') || text.includes('residence') || text.includes('interiors')) {
    return 'penthouse';
  }
  if (text.includes('tower') || text.includes('heights') || text.includes('view') || text.includes('skyscraper') || text.includes('downtown')) {
    return 'skyscraper';
  }
  return 'general';
}

export function getProjectGalleryWithFallbacks(
  gallery: string[] = [],
  heroImage?: string,
  category: FallbackCategory = 'general'
): string[] {
  const validImages: string[] = [];
  
  // Clean up any known 403 or empty strings
  const candidateList = [heroImage, ...gallery].filter(Boolean) as string[];
  
  candidateList.forEach(url => {
    if (url && typeof url === 'string') {
      const trimmed = url.trim();
      // Filter out known broken or 403 URLs
      if (
        trimmed && 
        !trimmed.includes('photo-1600607687940-47a0f9259d4b') &&
        !trimmed.includes('aeternitas-image-78bf1be9fb58d208.jpg') &&
        !trimmed.includes('district-one-west-phase-1-image-06d2a4ea3c870c55.jpg') &&
        !trimmed.includes('samana-ocean-pearl-apartment-image-00aa9cb89c3ca270.webp') &&
        !trimmed.includes('/developers/') // S3 developer logos which are 403
      ) {
        if (!validImages.includes(trimmed)) {
          validImages.push(trimmed);
        }
      }
    }
  });

  // Ensure every project has at least 4 high-res gallery images
  const pool = VERIFIED_FALLBACKS[category] || VERIFIED_FALLBACKS.general;
  for (let i = 0; i < pool.length && validImages.length < 5; i++) {
    if (!validImages.includes(pool[i])) {
      validImages.push(pool[i]);
    }
  }

  return validImages;
}
