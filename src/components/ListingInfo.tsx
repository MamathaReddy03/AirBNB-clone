import React, { useState } from 'react';
import { Star, Award, Bath, Laptop, Key, Calendar, Bed, Armchair, ChevronRight, X } from 'lucide-react';
import { ListingData } from '../types';
import { Badge } from './ui/badge';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface ListingInfoProps {
  listing: ListingData;
  onOpenReviews: () => void;
}

const HIGHLIGHTS = [
  {
    icon: <Bath className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />,
    title: 'Private whirlpool jacuzzi',
    desc: 'Exclusive indoor jacuzzi with soothing hydro-jets and ambient mood lighting.',
  },
  {
    icon: <Laptop className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />,
    title: 'Dedicated workspace · 100 Mbps WiFi',
    desc: 'Ergonomic desk, verified fiber internet — ideal for remote work.',
  },
  {
    icon: <Key className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />,
    title: 'Self check-in with smart lock',
    desc: 'Door keypad code sent before arrival. No waiting, no keys.',
  },
  {
    icon: <Calendar className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />,
    title: 'Free cancellation for 48 hours',
    desc: 'Full refund if plans change up to 48 hours before check-in.',
  },
];

export const ListingInfo: React.FC<ListingInfoProps> = ({ listing, onOpenReviews }) => {
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [isAirCoverModalOpen, setIsAirCoverModalOpen] = useState(false);

  return (
    <div className="space-y-10" id="photos">

      {/* Property Subtitle & Host */}
      <div className="flex items-start justify-between gap-4 pb-8 border-b border-[#ebebeb] reveal-section">
        <div className="space-y-2">
          <h2 className="text-[19px] font-semibold text-[#1a1a1a] leading-snug">
            {listing.subtitle}
          </h2>
          <ol className="flex flex-wrap items-center gap-1 text-sm text-[#717171]">
            <li>{listing.guestCapacity} guests</li>
            <li aria-hidden="true">·</li>
            <li>{listing.bedrooms} bedroom</li>
            <li aria-hidden="true">·</li>
            <li>{listing.beds} bed</li>
            <li aria-hidden="true">·</li>
            <li>{listing.baths} private bath</li>
          </ol>
          <div className="flex flex-wrap items-center gap-2 pt-0.5">
            <button
              onClick={onOpenReviews}
              className="flex items-center gap-1 text-sm font-semibold text-[#1a1a1a] hover:underline"
            >
              <Star className="w-3.5 h-3.5 fill-[#FF385C] text-[#FF385C]" aria-hidden="true" />
              <span>{listing.rating}</span>
              <span className="underline ml-0.5 font-normal text-[#717171]">
                ({listing.reviewCount} reviews)
              </span>
            </button>
            <span className="text-[#ddd]" aria-hidden="true">·</span>
            <Badge variant="coral">
              <Award className="w-3 h-3" aria-hidden="true" />
              Superhost
            </Badge>
            <span className="text-[#ddd]" aria-hidden="true">·</span>
            <span className="text-sm text-[#717171]">{listing.locationName}</span>
          </div>
        </div>

        <div className="relative flex-shrink-0">
          <Avatar size="lg" className="border-2 border-white shadow-md ring-2 ring-[#0D5C63]/10">
            <AvatarImage src={listing.host.avatar} alt={listing.host.name} />
            <AvatarFallback>{listing.host.name.slice(0, 2)}</AvatarFallback>
          </Avatar>
          {listing.host.isSuperhost && (
            <div
              className="absolute -bottom-1 -right-1 bg-[#FF385C] text-white p-1 rounded-full shadow-sm"
              title="Superhost"
              aria-label="Superhost badge"
            >
              <Award className="w-3 h-3" aria-hidden="true" />
            </div>
          )}
        </div>
      </div>

      {/* Guest Favorite — sand background, no box-shadow clutter */}
      <div className="reveal-fade rounded-2xl bg-[#FDF6EE] border border-amber-100 p-5 flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center border border-amber-100 flex-shrink-0">
            <Award className="w-5 h-5 text-[#FF385C]" aria-hidden="true" />
          </div>
          <div>
            <div className="font-semibold text-[15px] text-[#1a1a1a]">Guest favorite</div>
            <p className="text-xs text-[#717171] mt-0.5 leading-relaxed max-w-xs">
              One of the most loved homes on Airbnb, based on ratings, reviews, and reliability.
            </p>
          </div>
        </div>
        <div className="text-right flex-shrink-0 border-l border-amber-100 pl-5 hidden sm:block">
          <div className="font-display text-2xl text-[#1a1a1a] leading-none">{listing.rating}</div>
          <div className="flex items-center justify-end gap-0.5 mt-1.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-2.5 h-2.5 fill-[#FF385C] text-[#FF385C]" aria-hidden="true" />
            ))}
          </div>
          <div className="text-[10px] text-[#717171] mt-1">{listing.reviewCount} reviews</div>
        </div>
      </div>

      {/* Highlights — left-border accent strips */}
      <div className="space-y-6 pb-8 border-b border-[#ebebeb] reveal-stagger">
        {HIGHLIGHTS.map((item, i) => (
          <div key={i} className="highlight-strip flex items-start gap-4">
            <div className="mt-0.5 text-[#0D5C63] flex-shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-[15px] text-[#1a1a1a]">{item.title}</h3>
              <p className="text-sm text-[#717171] leading-relaxed mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* AirCover */}
      <div className="pb-8 border-b border-[#ebebeb] reveal-fade">
        <div className="flex items-center gap-1 mb-2.5">
          <span className="font-display text-xl text-[#FF385C]">air</span>
          <span className="font-display text-xl text-[#1a1a1a]">cover</span>
        </div>
        <p className="text-sm text-[#717171] leading-relaxed max-w-xl">
          Every booking includes free protection from Host cancellations, listing inaccuracies,
          and other issues like trouble checking in.
        </p>
        <button
          onClick={() => setIsAirCoverModalOpen(true)}
          className="mt-3 text-sm font-semibold text-[#1a1a1a] underline hover:text-black"
        >
          Learn more
        </button>
      </div>

      {/* About this space */}
      <div className="pb-8 border-b border-[#ebebeb] space-y-4 reveal-section">
        <h3 className="font-display text-[24px] text-[#1a1a1a]">About this space</h3>
        <p className="text-[15px] text-[#1a1a1a] leading-relaxed">
          {listing.description.intro}
        </p>
        <p className="text-sm text-[#717171] line-clamp-3 leading-relaxed whitespace-pre-line">
          {listing.description.theSpace}
        </p>
        <button
          onClick={() => setIsAboutModalOpen(true)}
          className="flex items-center gap-1 text-sm font-semibold text-[#1a1a1a] underline hover:text-black pt-1"
        >
          Show more
          <ChevronRight className="w-4 h-4" aria-hidden="true" />
        </button>
      </div>

      {/* Where you'll sleep */}
      <div className="pb-8 border-b border-[#ebebeb] reveal-section">
        <h3 className="font-display text-[24px] text-[#1a1a1a] mb-5">Where you'll sleep</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { Icon: Bed, room: 'Bedroom 1', detail: '1 king bed with luxury memory foam' },
            { Icon: Armchair, room: 'Living room', detail: '1 convertible sofa daybed' },
          ].map(({ Icon, room, detail }) => (
            <Card
              key={room}
              className="p-5 space-y-3 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <div className="p-2 w-fit rounded-xl bg-[#E8F4F5] text-[#0D5C63]">
                <Icon className="w-5 h-5 stroke-[1.5]" aria-hidden="true" />
              </div>
              <div>
                <h4 className="font-semibold text-[15px] text-[#1a1a1a]">{room}</h4>
                <p className="text-xs text-[#717171] mt-0.5">{detail}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* About Space Modal */}
      {isAboutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="About this space">
          <div className="bg-white w-full max-w-2xl rounded-2xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-[#ebebeb]">
              <button onClick={() => setIsAboutModalOpen(false)} className="p-2 -ml-2 rounded-full hover:bg-neutral-100" aria-label="Close modal">
                <X className="w-5 h-5 text-[#1a1a1a]" aria-hidden="true" />
              </button>
              <h3 className="font-display text-lg text-[#1a1a1a]">About this space</h3>
              <div className="w-8" />
            </div>
            <div className="p-6 overflow-y-auto space-y-6 text-sm md:text-base leading-relaxed">
              <div>
                <h4 className="font-display text-xl text-[#1a1a1a] mb-2">The Space</h4>
                <p className="whitespace-pre-line text-[#484848]">{listing.description.theSpace}</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-display text-xl text-[#1a1a1a] mb-2">Guest Access</h4>
                <p className="text-[#484848]">{listing.description.guestAccess}</p>
              </div>
              <Separator />
              <div>
                <h4 className="font-display text-xl text-[#1a1a1a] mb-2">Other Things to Note</h4>
                <p className="whitespace-pre-line text-[#484848]">{listing.description.otherNotes}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AirCover Modal */}
      {isAirCoverModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-label="AirCover protection details">
          <div className="bg-white w-full max-w-xl rounded-2xl max-h-[85vh] flex flex-col shadow-2xl animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between p-6 border-b border-[#ebebeb]">
              <button onClick={() => setIsAirCoverModalOpen(false)} className="p-2 -ml-2 rounded-full hover:bg-neutral-100" aria-label="Close AirCover modal">
                <X className="w-5 h-5 text-[#1a1a1a]" aria-hidden="true" />
              </button>
              <div className="flex items-center gap-0.5">
                <span className="font-display text-lg text-[#FF385C]">air</span>
                <span className="font-display text-lg text-[#1a1a1a]">cover</span>
              </div>
              <div className="w-8" />
            </div>
            <div className="p-6 overflow-y-auto space-y-5 text-sm">
              <p className="text-base font-medium text-[#1a1a1a]">
                AirCover is comprehensive protection included for free with every booking.
              </p>
              {[
                { title: 'Booking Protection Guarantee', desc: "If a Host cancels within 30 days of check-in, we'll find you a similar or better home, or refund you." },
                { title: 'Check-In Guarantee', desc: "Can't check in? We'll find you a similar or better home or give you a full refund." },
                { title: 'Get-What-You-Booked Guarantee', desc: "If the listing isn't as described, report it within 72 hours and we'll help." },
                { title: '24-hour Safety Line', desc: "Priority access to specially-trained safety agents, day or night." },
              ].map((item) => (
                <div key={item.title}>
                  <h4 className="font-semibold text-[#1a1a1a]">{item.title}</h4>
                  <p className="text-[#717171] mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
