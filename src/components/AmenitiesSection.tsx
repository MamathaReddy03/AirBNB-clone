import React, { useState } from 'react';
import { AmenityItem } from '../types';
import { getAmenityIcon, AmenitiesModal } from './AmenitiesModal';

interface AmenitiesSectionProps {
  amenities: AmenityItem[];
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ amenities }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredAmenities = amenities.filter((a) => a.featured).slice(0, 10);

  return (
    <div className="pb-10 border-b border-[#ebebeb]" id="amenities">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-6">
        What this place offers
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-8">
        {featuredAmenities.map((item) => (
          <div key={item.id} className="flex items-center gap-4 text-[#222222]">
            <div className="text-[#222222] flex-shrink-0">
              {getAmenityIcon(item.iconName)}
            </div>
            <span className="text-base font-normal text-[#222222] leading-snug">
              {item.name}
            </span>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 border border-[#222222] rounded-lg font-semibold text-sm text-[#222222] hover:bg-[#f7f7f7] transition-colors active:scale-98"
      >
        Show all {amenities.length} amenities
      </button>

      <AmenitiesModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        amenities={amenities}
      />
    </div>
  );
};
