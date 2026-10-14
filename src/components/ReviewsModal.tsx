import React, { useState } from 'react';
import { X, Search, Star } from 'lucide-react';
import { Review, ListingData } from '../types';

interface ReviewsModalProps {
  isOpen: boolean;
  onClose: () => void;
  listing: ListingData;
  reviews: Review[];
}

export const ReviewsModal: React.FC<ReviewsModalProps> = ({
  isOpen,
  onClose,
  listing,
  reviews,
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  if (!isOpen) return null;

  const filteredReviews = searchQuery.trim()
    ? reviews.filter(
        (r) =>
          r.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
          r.authorLocation.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : reviews;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-xs">
      <div className="bg-white w-full max-w-4xl rounded-2xl max-h-[90vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Top Bar */}
        <div className="p-5 border-b border-[#ebebeb] flex items-center justify-between">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded-full hover:bg-[#f7f7f7] transition-colors"
          >
            <X className="w-5 h-5 text-[#222222]" />
          </button>
          <div className="flex items-center gap-2 font-bold text-base text-[#222222]">
            <Star className="w-4 h-4 fill-[#222222] text-[#222222]" />
            <span>{listing.rating}</span>
            <span>·</span>
            <span>{listing.reviewCount} reviews</span>
          </div>
          <div className="w-8" />
        </div>

        {/* Modal Body: Split Layout */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-[#ebebeb]">
          {/* Left Column: Scores & Search */}
          <div className="md:col-span-5 p-6 space-y-6">
            <div>
              <div className="text-3xl font-extrabold text-[#222222] flex items-center gap-2">
                <Star className="w-6 h-6 fill-[#222222] text-[#222222]" />
                <span>{listing.rating}</span>
              </div>
              <p className="text-xs text-[#717171] mt-1 font-medium">Overall Guest Rating</p>
            </div>

            {/* Score Bars */}
            <div className="space-y-3 text-xs">
              <div className="flex items-center justify-between">
                <span className="text-[#222222]">Cleanliness</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1 bg-[#dddddd] rounded-full overflow-hidden">
                    <div className="h-full bg-[#222222] w-full" />
                  </div>
                  <span className="font-semibold text-[#222222] w-6 text-right">5.0</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#222222]">Accuracy</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1 bg-[#dddddd] rounded-full overflow-hidden">
                    <div className="h-full bg-[#222222] w-[98%]" />
                  </div>
                  <span className="font-semibold text-[#222222] w-6 text-right">4.9</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#222222]">Communication</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1 bg-[#dddddd] rounded-full overflow-hidden">
                    <div className="h-full bg-[#222222] w-full" />
                  </div>
                  <span className="font-semibold text-[#222222] w-6 text-right">5.0</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#222222]">Location</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1 bg-[#dddddd] rounded-full overflow-hidden">
                    <div className="h-full bg-[#222222] w-[96%]" />
                  </div>
                  <span className="font-semibold text-[#222222] w-6 text-right">4.8</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#222222]">Check-in</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1 bg-[#dddddd] rounded-full overflow-hidden">
                    <div className="h-full bg-[#222222] w-full" />
                  </div>
                  <span className="font-semibold text-[#222222] w-6 text-right">5.0</span>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-[#222222]">Value</span>
                <div className="flex items-center gap-2">
                  <div className="w-24 h-1 bg-[#dddddd] rounded-full overflow-hidden">
                    <div className="h-full bg-[#222222] w-[98%]" />
                  </div>
                  <span className="font-semibold text-[#222222] w-6 text-right">4.9</span>
                </div>
              </div>
            </div>

            {/* Search Input */}
            <div className="relative pt-2">
              <Search className="w-4 h-4 text-[#717171] absolute left-3 top-1/2 translate-y-1" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews"
                className="w-full pl-9 pr-4 py-2.5 rounded-full border border-[#dddddd] text-xs focus:outline-hidden focus:border-[#222222]"
              />
            </div>
          </div>

          {/* Right Column: Reviews List */}
          <div className="md:col-span-7 p-6 space-y-6">
            {filteredReviews.length === 0 ? (
              <div className="text-center py-12 text-sm text-[#717171]">
                No reviews found matching "{searchQuery}"
              </div>
            ) : (
              filteredReviews.map((rev) => (
                <div key={rev.id} className="pb-6 border-b border-[#f0f0f0] last:border-b-0 space-y-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={rev.authorAvatar}
                      alt={rev.author}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-sm text-[#222222]">{rev.author}</h4>
                      <div className="text-xs text-[#717171]">
                        {rev.authorLocation} · {rev.date}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#222222] text-[#222222]" />
                    ))}
                    {rev.stayDuration && (
                      <span className="text-xs text-[#717171] ml-2">· {rev.stayDuration}</span>
                    )}
                  </div>

                  <p className="text-sm text-[#222222] leading-relaxed">
                    {rev.comment}
                  </p>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
