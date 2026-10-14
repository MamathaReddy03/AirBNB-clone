import React from 'react';
import { Share, Heart, Grid, MapPin } from 'lucide-react';
import { Photo } from '../types';

interface HeroGalleryProps {
  photos: Photo[];
  onOpenPhotoTour: () => void;
  onOpenPhotoIndex: (index: number) => void;
  onShare: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({
  photos,
  onOpenPhotoTour,
  onOpenPhotoIndex,
  onShare,
  isSaved,
  onToggleSave,
}) => {
  const displayPhotos = photos.slice(0, 5);

  return (
    <div className="pt-8 reveal-section">
      {/* Cinematic full-width title bar */}
      <div className="flex flex-col gap-3 mb-6">
        {/* Location line — inline with pin, no badge box */}
        <div className="flex items-center gap-1.5 text-[#0D5C63] text-sm font-medium">
          <MapPin className="w-3.5 h-3.5 fill-[#0D5C63]/20" aria-hidden="true" />
          <span>Candolim, North Goa</span>
          <span className="text-[#0D5C63]/40 mx-1">—</span>
          <span className="text-[#717171] font-normal">200m from Candolim Beach</span>
        </div>

        {/* Title row with share/save inline */}
        <div className="flex items-start justify-between gap-6">
          <h1 className="font-display text-[30px] md:text-[40px] lg:text-[46px] text-[#1a1a1a] leading-[1.1] tracking-[-0.02em] max-w-3xl">
            Romantic Jacuzzi 1BHK{' '}
            <em className="not-italic text-[#0D5C63]">Candolim</em>
          </h1>

          <div className="flex items-center gap-1 text-sm font-medium text-[#222222] flex-shrink-0 mt-1">
            <button
              onClick={onShare}
              aria-label="Share listing"
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-neutral-100 transition-colors"
            >
              <Share className="w-4 h-4" aria-hidden="true" />
              <span className="underline underline-offset-2 hidden sm:inline">Share</span>
            </button>

            <button
              onClick={onToggleSave}
              aria-label={isSaved ? 'Remove from wishlist' : 'Save to wishlist'}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl hover:bg-neutral-100 transition-colors"
            >
              <Heart
                className={`w-4 h-4 transition-all duration-200 ${
                  isSaved ? 'fill-[#FF385C] text-[#FF385C] scale-110' : 'text-[#222222]'
                }`}
                aria-hidden="true"
              />
              <span className="underline underline-offset-2 hidden sm:inline">
                {isSaved ? 'Saved' : 'Save'}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Asymmetric photo grid: large hero left + 3 stacked right + 1 full-width bottom-right */}
      <div
        className="relative rounded-3xl overflow-hidden bg-neutral-200 cursor-pointer"
        style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gridTemplateRows: '280px 200px', gap: '3px' }}
      >
        {/* Main hero — spans left column full height */}
        {displayPhotos[0] && (
          <div
            className="relative overflow-hidden group"
            style={{ gridRow: '1 / 3' }}
            onClick={() => onOpenPhotoIndex(0)}
            role="button"
            aria-label="View main photo"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoIndex(0)}
          >
            <img
              src={displayPhotos[0].url}
              alt={displayPhotos[0].caption || 'Main living area'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
            {/* Subtle vignette on main photo */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
          </div>
        )}

        {/* Right top row: 2 side-by-side */}
        {displayPhotos[1] && (
          <div
            className="relative overflow-hidden group hidden md:block"
            onClick={() => onOpenPhotoIndex(1)}
            role="button"
            aria-label="View photo 2"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoIndex(1)}
          >
            <img
              src={displayPhotos[1].url}
              alt={displayPhotos[1].caption || 'Photo 2'}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />
          </div>
        )}

        {/* Right bottom: 2 side-by-side with count overlay on last */}
        <div className="hidden md:grid grid-cols-2 gap-[3px]" style={{ gridColumn: 2 }}>
          {displayPhotos[2] && (
            <div
              className="relative overflow-hidden group"
              onClick={() => onOpenPhotoIndex(2)}
              role="button"
              aria-label="View photo 3"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoIndex(2)}
            >
              <img
                src={displayPhotos[2].url}
                alt={displayPhotos[2].caption || 'Photo 3'}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
            </div>
          )}

          {displayPhotos[3] && (
            <div
              className="relative overflow-hidden group"
              onClick={() => onOpenPhotoIndex(3)}
              role="button"
              aria-label="View photo 4"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && onOpenPhotoIndex(3)}
            >
              <img
                src={displayPhotos[3].url}
                alt={displayPhotos[3].caption || 'Photo 4'}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              {/* Dark overlay with total count */}
              <div
                className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                onClick={(e) => { e.stopPropagation(); onOpenPhotoTour(); }}
              />
            </div>
          )}
        </div>

        {/* Show all photos button — bottom right */}
        <button
          onClick={onOpenPhotoTour}
          className="absolute bottom-4 right-4 flex items-center gap-2 bg-white text-[#222222] text-xs font-semibold px-4 py-2.5 rounded-xl shadow-lg hover:shadow-xl hover:bg-neutral-50 transition-all duration-200 border border-neutral-200 z-10"
          aria-label={`Show all ${photos.length} photos`}
        >
          <Grid className="w-3.5 h-3.5" aria-hidden="true" />
          Show all {photos.length} photos
        </button>
      </div>
    </div>
  );
};
