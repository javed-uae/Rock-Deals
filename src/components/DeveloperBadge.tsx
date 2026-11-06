import React, { useState } from 'react';
import { Building2, ShieldCheck } from 'lucide-react';

interface DeveloperBadgeProps {
  name: string;
  logoUrl?: string | null;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const DeveloperBadge: React.FC<DeveloperBadgeProps> = ({
  name,
  logoUrl,
  className = '',
  size = 'md'
}) => {
  const [logoFailed, setLogoFailed] = useState<boolean>(!logoUrl || logoUrl.includes('/developers/'));

  const sizeClasses = {
    sm: 'text-[10px] px-2 py-0.5 gap-1.5',
    md: 'text-xs px-3 py-1 gap-2',
    lg: 'text-sm px-4 py-1.5 gap-2.5'
  };

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-3.5 h-3.5',
    lg: 'w-4 h-4'
  };

  if (!logoFailed && logoUrl) {
    return (
      <div className={`inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-md border border-gray-100 shadow-sm ${className}`}>
        <img 
          src={logoUrl} 
          alt={name} 
          referrerPolicy="no-referrer"
          onError={() => setLogoFailed(true)}
          className="h-4 max-w-[80px] object-contain"
        />
        <span className="text-dark/70 font-technical font-bold text-[11px] uppercase tracking-wider">{name}</span>
      </div>
    );
  }

  // High-trust luxury badge fallback
  return (
    <div className={`inline-flex items-center bg-dark/90 text-white font-technical font-bold tracking-widest uppercase rounded-md shadow-sm border border-white/10 ${sizeClasses[size]} ${className}`}>
      <Building2 className={`${iconSizes[size]} text-porsche-red shrink-0`} />
      <span className="truncate">{name}</span>
      <ShieldCheck className={`${iconSizes[size]} text-emerald-400 shrink-0 ml-0.5`} />
    </div>
  );
};
