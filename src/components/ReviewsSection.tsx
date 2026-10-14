import React, { useState } from 'react';
import { Star } from 'lucide-react';
import { Review, ListingData } from '../types';
import { ReviewsModal } from './ReviewsModal';
import { Progress } from './ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Separator } from './ui/separator';

interface ReviewsSectionProps {
  listing: ListingData;
  reviews: Review[];
}

const RATING_CATEGORIES = [
  { label: 'Cleanliness', value: 5.0 },
  { label: 'Communication', value: 5.0 },
  { label: 'Accuracy', value: 4.9 },
  { label: 'Location', value: 4.8 },
  { label: 'Check-in', value: 5.0 },
  { label: 'Value', value: 4.9 },
];

export const ReviewsSection: React.FC<ReviewsSectionProps> = ({ listing, reviews }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const featuredReviews = reviews.slice(0, 6);

  return (
    <div className="py-10 border-b border-[#ebebeb]" id="reviews">
      {/* Big Score Header — DM Serif for the number */}
      <div className="flex items-baseline gap-3 mb-8">
        <Star className="w-5 h-5 fill-[#222222] text-[#222222] relative top-0.5" />
        <h3 className="font-display text-[28px] text-[#222222] leading-none">
          {listing.rating}
        </h3>
        <span className="text-[#717171] text-sm">
          · {listing.reviewCount} reviews
        </span>
      </div>

      {/* Ratings Breakdown — shadcn Progress with coral fill */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-3.5 mb-10">
        {RATING_CATEGORIES.map(({ label, value }) => (
          <div key={label} className="flex items-center justify-between gap-4">
            <span className="text-sm text-[#222222] w-28 shrink-0">{label}</span>
            <Progress
              value={(value / 5) * 100}
              className="flex-1 bg-neutral-200"
              indicatorClassName="bg-[#FF385C]"
            />
            <span className="text-xs font-semibold text-[#222222] w-7 text-right tabular-nums">
              {value.toFixed(1)}
            </span>
          </div>
        ))}
      </div>

      <Separator className="mb-10" />

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10 mb-8">
        {featuredReviews.map((rev) => (
          <div key={rev.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <Avatar size="md" className="border border-[#ebebeb]">
                <AvatarImage src={rev.authorAvatar} alt={rev.author} />
                <AvatarFallback>{rev.author.slice(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h4 className="font-semibold text-[15px] text-[#222222]">{rev.author}</h4>
                <div className="text-xs text-[#717171]">
                  {rev.authorLocation} · {rev.date}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-0.5">
              {[...Array(rev.rating)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-[#FF385C] text-[#FF385C]" />
              ))}
              {rev.stayDuration && (
                <span className="text-xs text-[#717171] ml-2">· {rev.stayDuration}</span>
              )}
            </div>

            <p className="text-sm text-[#222222] leading-relaxed line-clamp-4">
              {rev.comment}
            </p>
          </div>
        ))}
      </div>

      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 border border-[#222222] rounded-xl font-semibold text-sm text-[#222222] hover:bg-neutral-50 transition-colors"
      >
        Show all {listing.reviewCount} reviews
      </button>

      <ReviewsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        listing={listing}
        reviews={reviews}
      />
    </div>
  );
};
