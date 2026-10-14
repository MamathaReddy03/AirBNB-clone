import React, { useState } from 'react';
import { ChevronRight, X, Clock, Users, Volume2, Shield, AlertTriangle } from 'lucide-react';
import { ListingData } from '../types';

interface ThingsToKnowProps {
  listing: ListingData;
}

export const ThingsToKnow: React.FC<ThingsToKnowProps> = ({ listing }) => {
  const [activeModal, setActiveModal] = useState<'rules' | 'safety' | 'cancellation' | null>(null);

  return (
    <div className="py-10">
      <h3 className="text-[22px] font-semibold text-[#222222] mb-6">
        Things to know
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1: House rules */}
        <div className="space-y-3">
          <h4 className="font-semibold text-base text-[#222222]">House rules</h4>
          <ul className="space-y-2.5 text-sm text-[#222222]">
            <li>Check-in: {listing.houseRules.checkIn}</li>
            <li>Checkout before {listing.houseRules.checkOut}</li>
            <li>{listing.houseRules.maxGuests} guests maximum</li>
          </ul>
          <button
            onClick={() => setActiveModal('rules')}
            className="flex items-center gap-1 font-semibold text-sm text-[#222222] underline hover:text-black pt-1"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Column 2: Safety & property */}
        <div className="space-y-3">
          <h4 className="font-semibold text-base text-[#222222]">Safety & property</h4>
          <ul className="space-y-2.5 text-sm text-[#222222]">
            <li>Carbon monoxide alarm not needed</li>
            <li>Smoke alarm installed</li>
            <li>Security camera/recording device</li>
          </ul>
          <button
            onClick={() => setActiveModal('safety')}
            className="flex items-center gap-1 font-semibold text-sm text-[#222222] underline hover:text-black pt-1"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Column 3: Cancellation policy */}
        <div className="space-y-3">
          <h4 className="font-semibold text-base text-[#222222]">Cancellation policy</h4>
          <p className="text-sm text-[#222222] leading-relaxed">
            {listing.cancellationPolicy.summary}
          </p>
          <button
            onClick={() => setActiveModal('cancellation')}
            className="flex items-center gap-1 font-semibold text-sm text-[#222222] underline hover:text-black pt-1"
          >
            <span>Show more</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* House Rules Modal */}
      {activeModal === 'rules' && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#ebebeb] pb-4">
              <h3 className="font-bold text-lg text-[#222222]">House rules</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-full hover:bg-[#f7f7f7] text-[#717171]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#717171]">
              You'll be staying in someone's home, so please treat it with care and respect.
            </p>
            <div className="space-y-3 pt-2">
              {listing.houseRules.rules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#222222] pb-2 border-b border-[#f7f7f7]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#222222] mt-2 flex-shrink-0" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Safety Modal */}
      {activeModal === 'safety' && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#ebebeb] pb-4">
              <h3 className="font-bold text-lg text-[#222222]">Safety & property</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-full hover:bg-[#f7f7f7] text-[#717171]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-[#717171]">
              Avoid surprises by looking over these important safety details about your Host's property.
            </p>
            <div className="space-y-3 pt-2">
              {listing.safetyRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#222222] pb-2 border-b border-[#f7f7f7]">
                  <Shield className="w-4 h-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Cancellation Modal */}
      {activeModal === 'cancellation' && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-xs">
          <div className="bg-white w-full max-w-lg rounded-2xl p-6 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between border-b border-[#ebebeb] pb-4">
              <h3 className="font-bold text-lg text-[#222222]">Cancellation policy</h3>
              <button
                onClick={() => setActiveModal(null)}
                className="p-1.5 rounded-full hover:bg-[#f7f7f7] text-[#717171]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-4 text-sm text-[#222222] leading-relaxed pt-2">
              <div className="p-4 bg-emerald-50 text-emerald-900 rounded-xl border border-emerald-200">
                <div className="font-bold text-sm">Full refund for 48 hours</div>
                <p className="text-xs mt-1 text-emerald-800">
                  After booking, cancel up to 48 hours before check-in for a 100% full refund of all charges and fees.
                </p>
              </div>
              <p className="text-xs text-[#717171]">
                {listing.cancellationPolicy.details}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
