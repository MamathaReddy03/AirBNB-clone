import React, { useState, useRef, useEffect } from 'react';
import { Star, Flag, ChevronDown, Plus, Minus, Gem, CheckCircle, X } from 'lucide-react';
import { ListingData, ReservationDetails } from '../types';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Tooltip } from './ui/tooltip';

interface BookingCardProps {
  listing: ListingData;
  reservation: ReservationDetails;
  onUpdateReservation: (details: Partial<ReservationDetails>) => void;
  onOpenReviews: () => void;
  onScrollToCalendar: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  listing,
  reservation,
  onUpdateReservation,
  onOpenReviews,
  onScrollToCalendar,
}) => {
  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const guestPickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (guestPickerRef.current && !guestPickerRef.current.contains(e.target as Node)) {
        setIsGuestPickerOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handler = () => setIsGuestPickerOpen(true);
    window.addEventListener('open-guest-picker', handler);
    return () => window.removeEventListener('open-guest-picker', handler);
  }, []);

  const formatDate = (date: Date | null, style: 'short' | 'full' = 'short') => {
    if (!date) return style === 'full' ? 'Add date' : '—';
    if (style === 'full') {
      return date.toLocaleDateString('en-US', { month: 'numeric', day: 'numeric', year: 'numeric' });
    }
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };

  const formatMonth = (date: Date | null) => {
    if (!date) return '';
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  };

  const calculateNights = () => {
    if (!reservation.checkIn || !reservation.checkOut) return 0;
    const diffTime = Math.abs(reservation.checkOut.getTime() - reservation.checkIn.getTime());
    return Math.max(1, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
  };

  const nights = calculateNights();
  const basePrice = listing.pricePerNight * nights;
  const cleaningFee = listing.cleaningFee;
  const serviceFee = Math.round(basePrice * listing.serviceFeePercent);
  const taxes = Math.round((basePrice + cleaningFee + serviceFee) * listing.taxesPercent);
  const total = basePrice + cleaningFee + serviceFee + taxes;
  const totalGuests = reservation.adults + reservation.children;

  return (
    <div className="sticky top-28">
      <Card className="overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.10)] border-[#e0e0e0]">

        {/* Top: price header with teal accent */}
        <div className="px-6 pt-6 pb-4">
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="font-display text-[28px] text-[#1a1a1a] leading-none">
                ₹{listing.pricePerNight.toLocaleString('en-IN')}
              </span>
              {listing.originalPricePerNight && (
                <span className="text-sm text-[#717171] line-through">
                  ₹{listing.originalPricePerNight.toLocaleString('en-IN')}
                </span>
              )}
              <span className="text-sm text-[#717171]">/ night</span>
            </div>

            <button
              onClick={onOpenReviews}
              className="flex items-center gap-1 text-xs font-semibold text-[#1a1a1a] hover:underline"
            >
              <Star className="w-3.5 h-3.5 fill-[#FF385C] text-[#FF385C]" aria-hidden="true" />
              <span>{listing.rating}</span>
              <span className="text-[#717171] ml-0.5">·</span>
              <span className="text-[#717171] underline">{listing.reviewCount}</span>
            </button>
          </div>

          {/* Teal date pills — distinctive vs standard input boxes */}
          <div className="grid grid-cols-2 gap-2.5 mt-5">
            <button
              onClick={onScrollToCalendar}
              className="date-pill text-left"
              aria-label={`Check-in date: ${formatDate(reservation.checkIn, 'full')}`}
            >
              <div className="date-pill-label">Check-in</div>
              <div className="date-pill-value">{formatDate(reservation.checkIn)}</div>
              {reservation.checkIn && (
                <div className="text-[10px] text-[#717171] mt-0.5">{formatMonth(reservation.checkIn)}</div>
              )}
            </button>

            <button
              onClick={onScrollToCalendar}
              className="date-pill text-left"
              aria-label={`Checkout date: ${formatDate(reservation.checkOut, 'full')}`}
            >
              <div className="date-pill-label">Checkout</div>
              <div className="date-pill-value">{formatDate(reservation.checkOut)}</div>
              {reservation.checkOut && (
                <div className="text-[10px] text-[#717171] mt-0.5">{formatMonth(reservation.checkOut)}</div>
              )}
            </button>
          </div>

          {/* Nights summary strip */}
          {reservation.checkIn && reservation.checkOut && (
            <div className="mt-3 flex items-center justify-between text-xs text-[#717171] bg-neutral-50 rounded-xl px-3 py-2 border border-neutral-100">
              <span>{nights} nights</span>
              <span className="font-semibold text-[#0D5C63]">
                ₹{basePrice.toLocaleString('en-IN')} total
              </span>
            </div>
          )}
        </div>

        <Separator />

        {/* Guests selector */}
        <div className="px-6 py-4 relative" ref={guestPickerRef}>
          <button
            onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
            className="w-full flex items-center justify-between group"
            aria-expanded={isGuestPickerOpen}
          >
            <div>
              <div className="text-[10px] font-bold tracking-wider text-[#717171] uppercase">Guests</div>
              <div className="text-sm text-[#1a1a1a] font-medium mt-0.5">
                {totalGuests} guest{totalGuests > 1 ? 's' : ''}
                {reservation.infants > 0 ? `, ${reservation.infants} infant${reservation.infants > 1 ? 's' : ''}` : ''}
              </div>
            </div>
            <ChevronDown
              className={`w-4 h-4 text-[#717171] group-hover:text-[#1a1a1a] transition-transform duration-200 ${
                isGuestPickerOpen ? 'rotate-180' : ''
              }`}
              aria-hidden="true"
            />
          </button>

          {isGuestPickerOpen && (
            <div className="absolute left-4 right-4 top-full mt-2 bg-white rounded-2xl shadow-[0_8px_24px_rgba(0,0,0,0.15)] border border-[#ebebeb] p-5 z-40 space-y-4 text-sm animate-in fade-in zoom-in-95 duration-150">
              {[
                { key: 'adults' as const, label: 'Adults', sub: 'Age 13+', min: 1, max: listing.guestCapacity - reservation.children },
                { key: 'children' as const, label: 'Children', sub: 'Ages 2–12', min: 0, max: listing.guestCapacity - reservation.adults },
                { key: 'infants' as const, label: 'Infants', sub: 'Under 2', min: 0, max: 2 },
              ].map(({ key, label, sub, min, max }) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-[#1a1a1a]">{label}</div>
                    <div className="text-xs text-[#717171]">{sub}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <button
                      disabled={reservation[key] <= min}
                      onClick={() => onUpdateReservation({ [key]: reservation[key] - 1 })}
                      aria-label={`Decrease ${label}`}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-[#1a1a1a] hover:text-[#1a1a1a] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    >
                      <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                    <span className="w-4 text-center font-medium text-[#1a1a1a] tabular-nums">
                      {reservation[key]}
                    </span>
                    <button
                      disabled={reservation[key] >= max}
                      onClick={() => onUpdateReservation({ [key]: reservation[key] + 1 })}
                      aria-label={`Increase ${label}`}
                      className="w-8 h-8 rounded-full border border-[#b0b0b0] flex items-center justify-center text-[#717171] hover:border-[#1a1a1a] hover:text-[#1a1a1a] disabled:opacity-30 disabled:pointer-events-none transition-colors"
                    >
                      <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </div>
              ))}
              <p className="pt-1 text-[11px] text-[#717171]">
                Maximum {listing.guestCapacity} guests, not including infants.
              </p>
              <div className="flex justify-end">
                <button
                  onClick={() => setIsGuestPickerOpen(false)}
                  className="font-semibold text-xs text-[#1a1a1a] underline hover:text-black py-1 px-2"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>

        <Separator />

        {/* CTA */}
        <div className="px-6 py-5">
          <button
            onClick={() => reservation.checkIn && reservation.checkOut && setShowSuccessModal(true)}
            disabled={!reservation.checkIn || !reservation.checkOut}
            aria-disabled={!reservation.checkIn || !reservation.checkOut}
            title={!reservation.checkIn || !reservation.checkOut ? 'Select dates to reserve' : undefined}
            className={`cta-pulse w-full py-4 px-6 rounded-2xl font-bold text-base text-white transition-all shadow-lg ${
              reservation.checkIn && reservation.checkOut
                ? 'bg-gradient-to-r from-[#E61E4D] via-[#E31C5F] to-[#D70466] hover:brightness-105 active:scale-[0.98]'
                : 'bg-[#ccc] cursor-not-allowed shadow-none'
            }`}
          >
            {reservation.checkIn && reservation.checkOut ? 'Reserve' : 'Select dates to reserve'}
          </button>
          <p className="text-center text-xs text-[#717171] mt-2.5">
            {reservation.checkIn && reservation.checkOut ? "You won't be charged yet" : 'Add check-in and checkout dates'}
          </p>
        </div>

        <Separator />

        {/* Price breakdown — only shown when dates are selected */}
        {reservation.checkIn && reservation.checkOut ? (
          <div className="px-6 py-5 space-y-3 text-sm text-[#1a1a1a]">
            {[
              { label: `₹${listing.pricePerNight.toLocaleString('en-IN')} × ${nights} nights`, value: basePrice, tip: 'Nightly rate × number of nights' },
              { label: 'Cleaning fee', value: cleaningFee, tip: 'One-time cleaning charge' },
              { label: 'Airbnb service fee', value: serviceFee, tip: 'Helps Airbnb run securely' },
              { label: 'Taxes', value: taxes, tip: 'Applicable local and state taxes' },
            ].map(({ label, value, tip }) => (
              <div key={label} className="flex items-center justify-between">
                <Tooltip content={tip}>
                  <span className="underline decoration-dotted underline-offset-2 cursor-help text-[#1a1a1a]">
                    {label}
                  </span>
                </Tooltip>
                <span className="tabular-nums">₹{value.toLocaleString('en-IN')}</span>
              </div>
            ))}

            <Separator />

            <div className="flex items-center justify-between font-bold text-[15px] pt-1">
              <span>Total including taxes</span>
              <span className="tabular-nums">₹{total.toLocaleString('en-IN')}</span>
            </div>
          </div>
        ) : (
          <div className="px-6 py-5 text-center text-sm text-[#717171]">
            <span>Add dates for exact pricing</span>
          </div>
        )}

        {/* Rare Find — sand bg */}
        <div className="mx-6 mb-6 p-4 rounded-2xl bg-[#FDF6EE] border border-amber-100 flex items-start gap-3">
          <Gem className="w-4 h-4 text-[#0D5C63] flex-shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-xs text-[#1a1a1a] leading-relaxed">
            <span className="font-semibold">Rare find.</span>{' '}
            Mirashya's place on Candolim is usually fully booked.
          </p>
        </div>

        <div className="px-6 pb-6 text-center">
          <button className="inline-flex items-center gap-1.5 text-xs text-[#717171] hover:text-[#1a1a1a] transition-colors">
            <Flag className="w-3 h-3" aria-hidden="true" />
            Report this listing
          </button>
        </div>
      </Card>

      {/* Reservation Confirmation Modal */}
      {showSuccessModal && (
        <div
          className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          aria-label="Reservation confirmation"
        >
          <div className="bg-white w-full max-w-md rounded-3xl p-7 shadow-2xl space-y-5 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between">
              <div className="w-11 h-11 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                <CheckCircle className="w-6 h-6" aria-hidden="true" />
              </div>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="p-2 rounded-full hover:bg-neutral-100 text-neutral-500"
                aria-label="Close confirmation"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            <div>
              <h3 className="font-display text-[24px] text-[#1a1a1a] leading-tight">
                Reservation request sent
              </h3>
              <p className="text-sm text-[#717171] mt-2 leading-relaxed">
                Your dates for <strong className="text-[#1a1a1a]">{listing.title}</strong> from{' '}
                {formatDate(reservation.checkIn, 'full')} to {formatDate(reservation.checkOut, 'full')}{' '}
                ({nights} nights) have been held.
              </p>
            </div>

            <div className="p-4 bg-[#FDF6EE] rounded-2xl space-y-2.5 text-sm">
              <div className="flex justify-between">
                <span className="text-[#717171]">Total</span>
                <span className="font-bold text-[#1a1a1a] tabular-nums">₹{total.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#717171]">Guests</span>
                <span>{totalGuests} guest{totalGuests > 1 ? 's' : ''}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#717171]">Host</span>
                <span>{listing.host.name} · Superhost</span>
              </div>
            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="w-full py-3.5 bg-[#1a1a1a] text-white rounded-2xl font-semibold text-sm hover:bg-black transition-colors"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
