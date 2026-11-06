import React, { useState } from 'react';
import { Check, Copy, Share2 } from 'lucide-react';

interface SocialShareProps {
  title: string;
  summary?: string;
  url?: string;
  variant?: 'compact' | 'expanded' | 'minimal';
  theme?: 'dark' | 'light';
  className?: string;
  onShareInitiated?: (platform: string) => void;
}

export const SocialShare: React.FC<SocialShareProps> = ({
  title,
  summary = '',
  url,
  variant = 'compact',
  theme = 'dark',
  className = '',
  onShareInitiated,
}) => {
  const [copied, setCopied] = useState(false);

  // Determine current or constructed URL
  const shareUrl = url || (typeof window !== 'undefined' ? window.location.href : 'https://rockdeals.ae');
  const shareText = summary ? `${title} - ${summary}` : title;

  const handleShare = (platform: string, shareLink: string) => {
    onShareInitiated?.(platform);
    if (typeof window !== 'undefined') {
      window.open(shareLink, '_blank', 'noopener,noreferrer,width=600,height=500');
    }
  };

  const handleCopyLink = async (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    try {
      if (typeof navigator !== 'undefined' && navigator.clipboard) {
        await navigator.clipboard.writeText(shareUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      }
    } catch {
      // fallback
      const textArea = document.createElement('textarea');
      textArea.value = shareUrl;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const encodedUrl = encodeURIComponent(shareUrl);
  const encodedText = encodeURIComponent(title);

  const shareTargets = [
    {
      name: 'WhatsApp',
      color: 'hover:bg-[#25D366] hover:text-white hover:border-[#25D366]',
      url: `https://api.whatsapp.com/send?text=${encodeURIComponent(`${title}\n\n${shareUrl}`)}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.477-.15-.678.15-.2.301-.778.978-.953 1.178-.176.2-.351.226-.652.075-1.956-.978-3.238-2.115-4.524-4.32-.176-.3-.019-.463.132-.613.136-.135.301-.351.451-.527.151-.175.2-.3.301-.501.101-.2.05-.376-.025-.526-.075-.15-.678-1.632-.928-2.234-.244-.588-.493-.508-.678-.518-.175-.009-.376-.011-.577-.011-.201 0-.527.075-.803.376-.276.301-1.054 1.03-1.054 2.511 0 1.481 1.079 2.912 1.23 3.113.15.201 2.124 3.243 5.144 4.549 2.513 1.087 3.024.871 3.57.818.547-.052 1.78-.727 2.031-1.429.251-.702.251-1.303.176-1.429-.076-.125-.276-.201-.577-.351zM12.04 2C6.52 2 2.04 6.48 2.04 12c0 1.834.495 3.555 1.357 5.042L2 22l5.12-1.341C8.558 21.493 10.245 22 12.04 22c5.52 0 10-4.48 10-10S17.56 2 12.04 2zm0 18.25c-1.62 0-3.13-.48-4.4-1.3l-.32-.2-3.26.85.87-3.18-.21-.34c-.89-1.37-1.38-2.98-1.38-4.68 0-4.66 3.79-8.45 8.45-8.45 4.66 0 8.45 3.79 8.45 8.45 0 4.66-3.79 8.45-8.45 8.45z"/>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      color: 'hover:bg-[#0A66C2] hover:text-white hover:border-[#0A66C2]',
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'X',
      color: 'hover:bg-black hover:text-white hover:border-black',
      url: `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      name: 'Telegram',
      color: 'hover:bg-[#229ED9] hover:text-white hover:border-[#229ED9]',
      url: `https://t.me/share/url?url=${encodedUrl}&text=${encodedText}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      color: 'hover:bg-[#1877F2] hover:text-white hover:border-[#1877F2]',
      url: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: (
        <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
          <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.374 14.5 5 15.667 5H18V0h-3.889C10.667 0 9 1.667 9 4.667V8z"/>
        </svg>
      )
    }
  ];

  // COMPACT VARIANT (perfect for alert popups, floating cards)
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`} onClick={(e) => e.stopPropagation()}>
        <span className={`text-[9px] uppercase tracking-wider font-black mr-0.5 ${theme === 'dark' ? 'text-white/40' : 'text-dark/40'}`}>
          Share:
        </span>
        
        {shareTargets.slice(0, 3).map((target) => (
          <button
            key={target.name}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleShare(target.name, target.url);
            }}
            title={`Share on ${target.name}`}
            className={`w-7 h-7 flex items-center justify-center transition-all duration-300 border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10 text-white/70 hover:text-white' 
                : 'bg-gray-100 border-gray-200 text-dark/70 hover:text-dark'
            } ${target.color}`}
          >
            {target.icon}
          </button>
        ))}

        {/* Copy Link Button */}
        <button
          type="button"
          onClick={handleCopyLink}
          title={copied ? 'Link Copied!' : 'Copy Link'}
          className={`h-7 px-2 flex items-center gap-1 transition-all duration-300 border text-[9px] font-black uppercase tracking-wider ${
            copied
              ? 'bg-green-600 border-green-600 text-white'
              : theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white/70 hover:bg-porsche-red hover:border-porsche-red hover:text-white'
                : 'bg-gray-100 border-gray-200 text-dark/70 hover:bg-porsche-red hover:border-porsche-red hover:text-white'
          }`}
        >
          {copied ? (
            <>
              <Check className="w-3 h-3 text-white" />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy className="w-3 h-3" />
              <span>Link</span>
            </>
          )}
        </button>
      </div>
    );
  }

  // MINIMAL VARIANT (icon only row)
  if (variant === 'minimal') {
    return (
      <div className={`flex items-center gap-1.5 ${className}`} onClick={(e) => e.stopPropagation()}>
        {shareTargets.map((target) => (
          <button
            key={target.name}
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleShare(target.name, target.url);
            }}
            title={`Share on ${target.name}`}
            className={`w-6 h-6 flex items-center justify-center transition-all duration-300 border ${
              theme === 'dark' 
                ? 'bg-white/5 border-white/10 text-white/60 hover:text-white' 
                : 'bg-gray-50 border-gray-200 text-dark/60 hover:text-dark'
            } ${target.color}`}
          >
            {target.icon}
          </button>
        ))}
        <button
          type="button"
          onClick={handleCopyLink}
          title={copied ? 'Link Copied!' : 'Copy Link'}
          className={`w-6 h-6 flex items-center justify-center transition-all duration-300 border ${
            copied
              ? 'bg-green-600 border-green-600 text-white'
              : theme === 'dark'
                ? 'bg-white/5 border-white/10 text-white/60 hover:bg-porsche-red hover:border-porsche-red hover:text-white'
                : 'bg-gray-50 border-gray-200 text-dark/60 hover:bg-porsche-red hover:border-porsche-red hover:text-white'
          }`}
        >
          {copied ? <Check className="w-3 h-3 text-white" /> : <Copy className="w-3 h-3" />}
        </button>
      </div>
    );
  }

  // EXPANDED VARIANT (for comprehensive article view)
  return (
    <div className={`bg-gray-50 border border-gray-200/80 p-4 md:p-5 ${className}`}>
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 bg-porsche-red/10 text-porsche-red flex items-center justify-center flex-shrink-0">
            <Share2 className="w-4 h-4" />
          </div>
          <div>
            <p className="text-[10px] tracking-[0.25em] uppercase font-black text-porsche-red leading-none mb-1">
              Spread Market Intelligence
            </p>
            <p className="text-xs font-display font-black uppercase text-dark tracking-tight">
              Share This Real Estate Report
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
          {shareTargets.map((target) => (
            <button
              key={target.name}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleShare(target.name, target.url);
              }}
              className={`flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 text-dark/80 text-[10px] font-black uppercase tracking-wider transition-all duration-300 hover:shadow-xs cursor-pointer ${target.color}`}
            >
              {target.icon}
              <span className="hidden sm:inline">{target.name}</span>
            </button>
          ))}

          {/* Copy Link with Toast */}
          <button
            type="button"
            onClick={handleCopyLink}
            className={`flex items-center gap-2 px-3.5 py-2 border text-[10px] font-black uppercase tracking-wider transition-all duration-300 cursor-pointer ${
              copied
                ? 'bg-green-600 border-green-600 text-white'
                : 'bg-dark border-dark text-white hover:bg-porsche-red hover:border-porsche-red'
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Link Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Link</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
