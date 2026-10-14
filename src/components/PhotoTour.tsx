import React, { useState, useEffect } from 'react';
import { ChevronLeft, Share, Heart, X, Grid, Filter } from 'lucide-react';
import { Photo } from '../types';

interface PhotoTourProps {
  photos: Photo[];
  isOpen: boolean;
  onClose: () => void;
  onSelectPhoto: (index: number) => void;
  onShare: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
}

export const PhotoTour: React.FC<PhotoTourProps> = ({
  photos,
  isOpen,
  onClose,
  onSelectPhoto,
  onShare,
  isSaved,
  onToggleSave,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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

  const categories = ['All', ...Array.from(new Set(photos.map((p) => p.category)))];

  const filteredPhotos =
    selectedCategory === 'All'
      ? photos
      : photos.filter((p) => p.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-45 bg-white overflow-y-auto animate-in fade-in duration-200">
      {/* Sticky Top Header */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-[#ebebeb] px-6 lg:px-12 h-18 flex items-center justify-between">
        {/* Back Button */}
        <button
          onClick={onClose}
          className="flex items-center gap-2 p-2 -ml-2 rounded-full hover:bg-[#f7f7f7] font-semibold text-sm text-[#222222] transition-colors"
        >
          <ChevronLeft className="w-5 h-5 text-[#222222]" />
          <span>Back to listing</span>
        </button>

        {/* Title */}
        <h2 className="hidden md:block font-bold text-base text-[#222222] truncate max-w-md text-center">
          Photo tour · Romantic Jacuzzi 1BHK Candolim
        </h2>

        {/* Action buttons */}
        <div className="flex items-center gap-3">
          <button
            onClick={onShare}
            className="flex items-center gap-2 p-2 px-3 rounded-lg hover:bg-[#f7f7f7] font-medium text-sm text-[#222222] transition-colors"
          >
            <Share className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </button>

          <button
            onClick={onToggleSave}
            className="flex items-center gap-2 p-2 px-3 rounded-lg hover:bg-[#f7f7f7] font-medium text-sm text-[#222222] transition-colors"
          >
            <Heart
              className={`w-4 h-4 ${
                isSaved ? 'fill-[#FF385C] text-[#FF385C]' : 'text-[#222222]'
              }`}
            />
            <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
          </button>
        </div>
      </div>

      {/* Category Filter Pills Bar */}
      <div className="bg-white border-b border-[#f0f0f0] sticky top-18 z-20 px-6 lg:px-12 py-3 overflow-x-auto flex items-center gap-2 scrollbar-none shadow-2xs">
        {categories.map((cat) => {
          const count = cat === 'All' ? photos.length : photos.filter((p) => p.category === cat).length;
          const isActive = selectedCategory === cat;

          return (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs md:text-sm font-semibold whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#222222] text-white shadow-xs'
                  : 'bg-[#f7f7f7] text-[#717171] hover:text-[#222222] hover:bg-[#ebebeb]'
              }`}
            >
              {cat} <span className="opacity-75">({count})</span>
            </button>
          );
        })}
      </div>

      {/* Photos Grid Content */}
      <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
        {selectedCategory === 'All' ? (
          // Grouped by Category in All view
          categories
            .filter((c) => c !== 'All')
            .map((cat) => {
              const catPhotos = photos.filter((p) => p.category === cat);
              if (catPhotos.length === 0) return null;

              return (
                <div key={cat} className="space-y-4">
                  <div className="flex items-center justify-between border-b border-[#ebebeb] pb-2">
                    <h3 className="text-xl font-bold text-[#222222]">{cat}</h3>
                    <span className="text-xs text-[#717171] font-medium">
                      {catPhotos.length} photo{catPhotos.length > 1 ? 's' : ''}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {catPhotos.map((photo) => {
                      const originalIndex = photos.findIndex((p) => p.id === photo.id);
                      return (
                        <div
                          key={photo.id}
                          onClick={() => onSelectPhoto(originalIndex)}
                          className="group cursor-pointer space-y-2"
                        >
                          <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-100 border border-[#ebebeb]">
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                          </div>
                          <p className="text-xs md:text-sm font-medium text-[#222222] leading-snug">
                            {photo.caption}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
        ) : (
          // Single Category Filtered View
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPhotos.map((photo) => {
              const originalIndex = photos.findIndex((p) => p.id === photo.id);
              return (
                <div
                  key={photo.id}
                  onClick={() => onSelectPhoto(originalIndex)}
                  className="group cursor-pointer space-y-2"
                >
                  <div className="relative aspect-4/3 overflow-hidden rounded-xl bg-neutral-100 border border-[#ebebeb]">
                    <img
                      src={photo.url}
                      alt={photo.caption}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                  </div>
                  <p className="text-xs md:text-sm font-medium text-[#222222] leading-snug">
                    {photo.caption}
                  </p>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
