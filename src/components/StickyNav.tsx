import React, { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { ListingData } from '../types';

interface StickyNavProps {
  listing: ListingData;
  onReserveClick: () => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({ listing, onReserveClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('photos');

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 550);

      const sections = ['photos', 'amenities', 'reviews', 'location'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      window.scrollTo({ top: elementRect - bodyRect - 100, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  const NAV_ITEMS = [
    { id: 'photos', label: 'Photos' },
    { id: 'amenities', label: 'Amenities' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'location', label: 'Location' },
  ];

  return (
    <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-[#e8e8e8] transition-all duration-300">
      <div className="max-w-[1280px] mx-auto px-6 xl:px-10 h-[52px] flex items-center justify-between">
        {/* Nav tabs — teal active indicator instead of black */}
        <nav className="flex items-center gap-1 h-full" aria-label="Page sections">
          {NAV_ITEMS.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative h-full px-3 text-sm font-medium transition-colors ${
                activeSection === id
                  ? 'text-[#0D5C63]'
                  : 'text-[#717171] hover:text-[#1a1a1a]'
              }`}
              aria-current={activeSection === id ? 'true' : undefined}
            >
              {label}
              {/* Teal underline indicator */}
              {activeSection === id && (
                <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#0D5C63] rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Mini price + reserve */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <div className="flex items-baseline gap-1">
              <span className="font-display text-[17px] text-[#1a1a1a] leading-none">
                ₹{listing.pricePerNight.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#717171]">/ night</span>
            </div>
            <div className="flex items-center justify-end gap-1 text-[11px] text-[#1a1a1a] mt-0.5">
              <Star className="w-2.5 h-2.5 fill-[#FF385C] text-[#FF385C]" aria-hidden="true" />
              <span className="font-semibold">{listing.rating}</span>
              <span className="text-[#717171]">({listing.reviewCount})</span>
            </div>
          </div>

          <button
            onClick={onReserveClick}
            className="bg-gradient-to-r from-[#E61E4D] to-[#D70466] hover:brightness-105 active:scale-[0.98] text-white font-semibold text-sm px-5 py-2.5 rounded-xl shadow-sm transition-all"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
};
