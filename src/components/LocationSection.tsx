import React, { useState } from 'react';
import { MapPin, Navigation, Compass, Plus, Minus, ExternalLink } from 'lucide-react';
import { ListingData } from '../types';

interface LocationSectionProps {
  listing: ListingData;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ listing }) => {
  const [zoomLevel, setZoomLevel] = useState(14);
  const [mapType, setMapType] = useState<'street' | 'satellite'>('street');

  return (
    <div className="py-10 border-b border-[#ebebeb]" id="location">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-2">
        Where you'll be
      </h3>
      <p className="text-sm md:text-base text-[#222222] font-medium mb-6">
        {listing.locationName}
      </p>

      {/* Styled Interactive Map Container */}
      <div className="relative w-full h-[360px] md:h-[440px] rounded-2xl overflow-hidden border border-[#dddddd] shadow-xs bg-[#e5e3df]">
        {/* Map Canvas / Simulated Cartography with real SVG roads and coastal topography */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${
          mapType === 'satellite' ? 'bg-[#2b3a2a]' : 'bg-[#e9ecef]'
        }`}>
          {/* Stylized Coastal Landscape */}
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="coastalWater" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 0 20 Q 10 10 20 20 T 40 20" fill="none" stroke="#90caf9" strokeWidth="1" opacity="0.4" />
              </pattern>
            </defs>

            {/* Arabian Sea on the West */}
            <rect x="0" y="0" width="28%" height="100%" fill="#a0c8f0" />
            <rect x="0" y="0" width="28%" height="100%" fill="url(#coastalWater)" />

            {/* Golden Sand Beach Strip */}
            <rect x="28%" y="0" width="5%" height="100%" fill="#faedcd" />

            {/* Land Mass */}
            <rect x="33%" y="0" width="67%" height="100%" fill={mapType === 'satellite' ? '#3d5a40' : '#f4f3ef'} />

            {/* Roads & Highways */}
            <path d="M 350 0 L 350 500" stroke={mapType === 'satellite' ? '#ffffff55' : '#ffffff'} strokeWidth="12" />
            <path d="M 350 0 L 350 500" stroke={mapType === 'satellite' ? '#ffffffaa' : '#fbd38d'} strokeWidth="6" />

            <path d="M 280 180 Q 400 240 600 210" stroke={mapType === 'satellite' ? '#ffffff55' : '#ffffff'} strokeWidth="10" fill="none" />
            <path d="M 280 180 Q 400 240 600 210" stroke={mapType === 'satellite' ? '#ffffff88' : '#fbd38d'} strokeWidth="5" fill="none" />

            <path d="M 350 300 L 700 380" stroke={mapType === 'satellite' ? '#ffffff55' : '#ffffff'} strokeWidth="8" fill="none" />
            <path d="M 350 300 L 700 380" stroke={mapType === 'satellite' ? '#ffffff88' : '#fbd38d'} strokeWidth="4" fill="none" />

            {/* Labels on Map */}
            <text x="5%" y="45%" fill="#1565c0" fontSize="13" fontWeight="bold" opacity="0.8" letterSpacing="1">
              ARABIAN SEA
            </text>
            <text x="30%" y="15%" fill="#8d6e63" fontSize="11" fontWeight="600" transform="rotate(90 300 80)">
              Candolim Beach
            </text>
            <text x="55%" y="30%" fill={mapType === 'satellite' ? '#ffffff' : '#4a5568'} fontSize="12" fontWeight="bold">
              Candolim Main Road
            </text>
            <text x="65%" y="65%" fill={mapType === 'satellite' ? '#ffffff' : '#718096'} fontSize="11">
              To Fort Aguada →
            </text>
          </svg>

          {/* Airbnb Pinpoint Radius Circle */}
          <div className="absolute top-1/2 left-[58%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
            {/* Shaded accuracy radius circle */}
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full bg-[#FF385C]/15 border-2 border-[#FF385C]/40 animate-pulse flex items-center justify-center">
              {/* Iconic Center Circle Marker */}
              <div className="w-12 h-12 bg-[#FF385C] rounded-full shadow-[0_4px_12px_rgba(255,56,92,0.4)] flex items-center justify-center text-white border-2 border-white">
                <svg className="w-6 h-6 fill-white" viewBox="0 0 32 32">
                  <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.572-3.394 8.806-8.722 8.806-3.036 0-5.719-1.393-7.509-3.774l-.269-.374-.269.374c-1.79 2.381-4.473 3.774-7.509 3.774-5.328 0-8.722-4.234-8.722-8.806 0-1.12.302-2.305.971-3.711l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C8.537 1.963 9.992 1 12 1zm0 2c-1.282 0-2.29.645-3.327 2.493l-.48 1.03c-1.928 3.78-6.07 12.456-7.042 14.724l-.136.331c-.571 1.206-.815 2.155-.815 3.016 0 3.633 2.656 6.806 6.722 6.806 2.492 0 4.745-1.189 6.273-3.238l.805-1.078.805 1.078c1.528 2.049 3.781 3.238 6.273 3.238 4.066 0 6.722-3.173 6.722-6.806 0-.861-.244-1.81-.815-3.016l-.136-.331c-.972-2.268-5.114-10.944-7.042-14.724l-.48-1.03C18.29 3.645 17.282 3 16 3zm0 13c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zm0 2c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 left-4 z-10 flex gap-2">
          <button
            onClick={() => setMapType(mapType === 'street' ? 'satellite' : 'street')}
            className="bg-white/95 backdrop-blur-xs text-[#222222] font-semibold text-xs px-3 py-1.5 rounded-lg shadow-sm border border-[#dddddd] hover:bg-white transition-colors"
          >
            {mapType === 'street' ? 'Satellite' : 'Map'}
          </button>
        </div>

        <div className="absolute bottom-4 right-4 z-10 flex flex-col bg-white rounded-lg shadow-md border border-[#dddddd] overflow-hidden">
          <button
            onClick={() => setZoomLevel((z) => Math.min(18, z + 1))}
            className="p-2 hover:bg-[#f7f7f7] border-b border-[#dddddd] transition-colors"
            title="Zoom in"
          >
            <Plus className="w-4 h-4 text-[#222222]" />
          </button>
          <button
            onClick={() => setZoomLevel((z) => Math.max(10, z - 1))}
            className="p-2 hover:bg-[#f7f7f7] transition-colors"
            title="Zoom out"
          >
            <Minus className="w-4 h-4 text-[#222222]" />
          </button>
        </div>

        {/* Bottom Banner */}
        <div className="absolute bottom-4 left-4 z-10 bg-white/95 backdrop-blur-xs px-3.5 py-1.5 rounded-lg border border-[#dddddd] shadow-sm text-xs font-medium text-[#222222]">
          Exact location provided after booking.
        </div>
      </div>

      {/* Neighborhood Guide & Distance Cards */}
      <div className="mt-8 space-y-4 text-sm text-[#222222] leading-relaxed">
        <h4 className="font-semibold text-base text-[#222222]">
          Candolim, North Goa
        </h4>
        <p className="text-[#484848]">
          Mirashya UG10 is peacefully tucked away in a quiet residential cul-de-sac just off the main Candolim-Calangute road. You enjoy calm, birdsong-filled mornings, while being only minutes away from Goa's finest beach cafes, sunset spots, supermarkets, and boutique dining.
        </p>

        {/* Key Attractions Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          <div className="p-3.5 rounded-xl border border-[#ebebeb] bg-[#fafafa]">
            <div className="font-semibold text-xs text-[#222222]">Candolim Beach</div>
            <div className="text-xs text-[#717171] mt-0.5">1.8 km (5 min)</div>
          </div>
          <div className="p-3.5 rounded-xl border border-[#ebebeb] bg-[#fafafa]">
            <div className="font-semibold text-xs text-[#222222]">Fort Aguada</div>
            <div className="text-xs text-[#717171] mt-0.5">4.2 km (10 min)</div>
          </div>
          <div className="p-3.5 rounded-xl border border-[#ebebeb] bg-[#fafafa]">
            <div className="font-semibold text-xs text-[#222222]">Fisherman's Cove</div>
            <div className="text-xs text-[#717171] mt-0.5">900m (3 min)</div>
          </div>
          <div className="p-3.5 rounded-xl border border-[#ebebeb] bg-[#fafafa]">
            <div className="font-semibold text-xs text-[#222222]">Mopa Airport (GOX)</div>
            <div className="text-xs text-[#717171] mt-0.5">31 km (45 min)</div>
          </div>
        </div>
      </div>
    </div>
  );
};
