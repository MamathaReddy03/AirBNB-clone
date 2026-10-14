import React, { useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Share, Heart } from 'lucide-react';
import { Photo } from '../types';

interface LightboxProps {
  photos: Photo[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
  onShare?: () => void;
  isSaved?: boolean;
  onToggleSave?: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  photos,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
  onShare,
  isSaved,
  onToggleSave,
}) => {
  const currentPhoto = photos[currentIndex] || photos[0];
  const total = photos.length;
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const activeThumbnailRef = useRef<HTMLButtonElement>(null);

  const handlePrev = useCallback(() => {
    onNavigate((currentIndex - 1 + total) % total);
  }, [currentIndex, total, onNavigate]);

  const handleNext = useCallback(() => {
    onNavigate((currentIndex + 1) % total);
  }, [currentIndex, total, onNavigate]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'ArrowRight') {
        handleNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  // Auto-scroll active thumbnail into center of the strip
  useEffect(() => {
    if (!isOpen || !thumbnailStripRef.current || !activeThumbnailRef.current) return;
    const strip = thumbnailStripRef.current;
    const thumb = activeThumbnailRef.current;
    const stripCenter = strip.scrollLeft + strip.clientWidth / 2;
    const thumbCenter = thumb.offsetLeft + thumb.offsetWidth / 2;
    strip.scrollTo({ left: thumbCenter - strip.clientWidth / 2, behavior: 'smooth' });
  }, [currentIndex, isOpen]);

  // Prevent background body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between select-none animate-in fade-in duration-200">
      {/* Top Controls Bar */}
      <div className="h-16 px-6 flex items-center justify-between text-white z-20">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-sm font-semibold hover:bg-white/10 px-3.5 py-2 rounded-lg transition-colors"
          aria-label="Close photo viewer"
        >
          <X className="w-5 h-5" />
          <span className="hidden sm:inline">Close</span>
        </button>

        {/* Counter */}
        <div className="text-sm font-semibold tracking-wider text-white/90">
          {currentIndex + 1} / {total}
        </div>

        {/* Share & Save Actions */}
        <div className="flex items-center gap-2">
          {onShare && (
            <button
              onClick={onShare}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              title="Share"
            >
              <Share className="w-5 h-5" />
            </button>
          )}
          {onToggleSave && (
            <button
              onClick={onToggleSave}
              className="p-2 rounded-full hover:bg-white/10 text-white transition-colors"
              title="Save"
            >
              <Heart
                className={`w-5 h-5 ${
                  isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-white'
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Main Center Image Stage with Motion Animation */}
      <div className="relative flex-1 flex items-center justify-center px-4 md:px-16 overflow-hidden">
        {/* Left Nav Arrow */}
        <button
          onClick={handlePrev}
          className="absolute left-4 md:left-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs border border-white/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Previous photo"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Right Nav Arrow */}
        <button
          onClick={handleNext}
          className="absolute right-4 md:right-8 z-30 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-xs border border-white/20 transition-all hover:scale-110 active:scale-95"
          aria-label="Next photo"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        <div className="relative max-w-5xl max-h-[75vh] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentPhoto.id}
              src={currentPhoto.url}
              alt={currentPhoto.caption}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.22, ease: 'easeOut' }}
              className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Info & Thumbnail Carousel */}
      <div className="p-4 bg-gradient-to-t from-black via-black/80 to-transparent z-20 space-y-3">
        {/* Caption */}
        <div className="max-w-4xl mx-auto text-center">
          <div className="text-xs uppercase tracking-widest text-neutral-400 font-bold mb-0.5">
            {currentPhoto.category}
          </div>
          <p className="text-sm font-medium text-white/90 truncate">
            {currentPhoto.caption}
          </p>
        </div>

        {/* Thumbnails Carousel — auto-scrolls to keep active thumb visible */}
        <div
          ref={thumbnailStripRef}
          className="max-w-4xl mx-auto flex items-center gap-2 overflow-x-auto py-1 scrollbar-none scroll-smooth"
        >
          {photos.map((photo, index) => (
            <button
              key={photo.id}
              ref={index === currentIndex ? activeThumbnailRef : null}
              onClick={() => onNavigate(index)}
              className={`relative flex-shrink-0 w-14 h-10 rounded-md overflow-hidden transition-all duration-200 ${
                index === currentIndex
                  ? 'ring-2 ring-white scale-110 opacity-100'
                  : 'opacity-40 hover:opacity-70 hover:scale-105'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
