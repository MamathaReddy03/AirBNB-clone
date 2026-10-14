import React, { useState } from 'react';
import {
  X, Search, Bath, Wifi, Laptop, Waves, Utensils, Car, Tv, Wind,
  Zap, Sun, Sparkles, Flame, Droplet, Droplets, Layers, Shirt,
  Check, Moon, Maximize2, Box, Coffee, Square, Grid, Wine, Dumbbell,
  ArrowUpDown, AlertCircle, ShieldAlert, HeartPulse, ShieldCheck,
  Camera, KeyRound, Brush, Briefcase, CalendarCheck, Umbrella
} from 'lucide-react';
import { AmenityItem } from '../types';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  amenities: AmenityItem[];
}

export const getAmenityIcon = (iconName: string, className = "w-6 h-6 stroke-[1.6]") => {
  switch (iconName) {
    case 'Bath': return <Bath className={className} />;
    case 'Wifi': return <Wifi className={className} />;
    case 'Laptop': return <Laptop className={className} />;
    case 'Waves': return <Waves className={className} />;
    case 'Utensils': return <Utensils className={className} />;
    case 'Car': return <Car className={className} />;
    case 'Tv': return <Tv className={className} />;
    case 'Wind': return <Wind className={className} />;
    case 'Zap': return <Zap className={className} />;
    case 'Sun': return <Sun className={className} />;
    case 'Sparkles': return <Sparkles className={className} />;
    case 'Flame': return <Flame className={className} />;
    case 'Droplet': return <Droplet className={className} />;
    case 'Droplets': return <Droplets className={className} />;
    case 'Layers': return <Layers className={className} />;
    case 'Shirt': return <Shirt className={className} />;
    case 'Check': return <Check className={className} />;
    case 'Moon': return <Moon className={className} />;
    case 'Maximize2': return <Maximize2 className={className} />;
    case 'Box': return <Box className={className} />;
    case 'Coffee': return <Coffee className={className} />;
    case 'Square': return <Square className={className} />;
    case 'Grid': return <Grid className={className} />;
    case 'Wine': return <Wine className={className} />;
    case 'Dumbbell': return <Dumbbell className={className} />;
    case 'ArrowUpDown': return <ArrowUpDown className={className} />;
    case 'AlertCircle': return <AlertCircle className={className} />;
    case 'ShieldAlert': return <ShieldAlert className={className} />;
    case 'HeartPulse': return <HeartPulse className={className} />;
    case 'ShieldCheck': return <ShieldCheck className={className} />;
    case 'Camera': return <Camera className={className} />;
    case 'KeyRound': return <KeyRound className={className} />;
    case 'Brush': return <Brush className={className} />;
    case 'Briefcase': return <Briefcase className={className} />;
    case 'CalendarCheck': return <CalendarCheck className={className} />;
    case 'Umbrella': return <Umbrella className={className} />;
    default: return <Check className={className} />;
  }
};

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({
  isOpen,
  onClose,
  amenities,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredAmenities = searchQuery.trim()
    ? amenities.filter(
        (a) =>
          a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          a.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          (a.description && a.description.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    : amenities;

  // Group by category
  const categoriesMap = filteredAmenities.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, AmenityItem[]>);

  const categories = Object.keys(categoriesMap);

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white w-full max-w-2xl rounded-2xl max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-5 border-b border-[#ebebeb] flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded-full hover:bg-[#f7f7f7] transition-colors"
          >
            <X className="w-5 h-5 text-[#222222]" />
          </button>
          <h2 className="font-bold text-base text-[#222222]">What this place offers</h2>
          <div className="w-8" />
        </div>

        {/* Search Input */}
        <div className="p-5 pb-2 border-b border-[#f0f0f0]">
          <div className="relative">
            <Search className="w-4 h-4 text-[#717171] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search amenities (e.g., wifi, jacuzzi, pool, ac)"
              className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#dddddd] text-sm focus:outline-hidden focus:border-[#222222] transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#717171] hover:text-[#222222]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Categories List */}
        <div className="p-6 overflow-y-auto space-y-8 divide-y divide-[#ebebeb]">
          {categories.length === 0 ? (
            <div className="text-center py-12 text-[#717171] text-sm">
              No amenities found matching "{searchQuery}"
            </div>
          ) : (
            categories.map((cat, idx) => (
              <div key={cat} className={idx > 0 ? 'pt-8' : ''}>
                <h3 className="text-lg font-bold text-[#222222] mb-4">{cat}</h3>
                <div className="space-y-4">
                  {categoriesMap[cat].map((amenity) => (
                    <div key={amenity.id} className="flex items-start gap-4 pb-3 border-b border-[#f7f7f7] last:border-b-0">
                      <div className="text-[#222222] mt-0.5">
                        {getAmenityIcon(amenity.iconName)}
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#222222]">
                          {amenity.name}
                        </div>
                        {amenity.description && (
                          <div className="text-xs text-[#717171] mt-0.5">
                            {amenity.description}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
