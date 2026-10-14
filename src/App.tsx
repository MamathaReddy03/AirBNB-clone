import React, { useState } from 'react';
import { LISTING, REVIEWS } from './data/listingData';
import { ReservationDetails } from './types';
import { Header } from './components/Header';
import { StickyNav } from './components/StickyNav';
import { HeroGallery } from './components/HeroGallery';
import { ListingInfo } from './components/ListingInfo';
import { AmenitiesSection } from './components/AmenitiesSection';
import { InteractiveCalendar } from './components/InteractiveCalendar';
import { BookingCard } from './components/BookingCard';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { HostSection } from './components/HostSection';
import { ThingsToKnow } from './components/ThingsToKnow';
import { PhotoTour } from './components/PhotoTour';
import { Lightbox } from './components/Lightbox';
import { ShareModal } from './components/ShareModal';
import { ArchitectureModal } from './components/ArchitectureModal';
import { Footer } from './components/Footer';

export default function App() {
  // Navigation & View States
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Modals & UI States
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isArchitectureOpen, setIsArchitectureOpen] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const [saveToastMessage, setSaveToastMessage] = useState<string | null>(null);

  // Reservation Details State (Default to 5 nights: Oct 18, 2026 - Oct 23, 2026)
  const [reservation, setReservation] = useState<ReservationDetails>({
    checkIn: new Date(2026, 9, 18),
    checkOut: new Date(2026, 9, 23),
    adults: 2,
    children: 0,
    infants: 0,
    pets: 0,
  });

  const handleUpdateReservation = (details: Partial<ReservationDetails>) => {
    setReservation((prev) => ({ ...prev, ...details }));
  };

  const handleSelectDates = (checkIn: Date | null, checkOut: Date | null) => {
    setReservation((prev) => ({
      ...prev,
      checkIn,
      checkOut,
    }));
  };

  const handleOpenPhotoIndex = (index: number) => {
    setLightboxIndex(index);
    setIsLightboxOpen(true);
  };

  const handleToggleSave = () => {
    setIsSaved((prev) => {
      const next = !prev;
      setSaveToastMessage(next ? 'Saved to your Wishlist!' : 'Removed from Wishlist');
      setTimeout(() => setSaveToastMessage(null), 2500);
      return next;
    });
  };

  const scrollToCalendar = () => {
    const el = document.getElementById('calendar');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openGuestPicker = () => {
    // Scroll to booking card and trigger guest picker via a custom event
    const el = document.getElementById('booking-card');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    window.dispatchEvent(new CustomEvent('open-guest-picker'));
  };

  const scrollToReviews = () => {
    const el = document.getElementById('reviews');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#222222]">
      {/* 1. Global Header */}
      <Header
        onOpenArchitecture={() => setIsArchitectureOpen(true)}
        onShare={() => setIsShareOpen(true)}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
        onScrollToCalendar={scrollToCalendar}
        onOpenGuestPicker={openGuestPicker}
      />

      {/* 2. Sticky Sub-Navigation */}
      <StickyNav
        listing={LISTING}
        onReserveClick={scrollToCalendar}
      />

      {/* Main Page Content */}
      <main className="flex-1 max-w-[1280px] mx-auto px-6 xl:px-10 w-full">
        {/* 3. Hero Gallery Section */}
        <HeroGallery
          photos={LISTING.photos}
          onOpenPhotoTour={() => setIsPhotoTourOpen(true)}
          onOpenPhotoIndex={handleOpenPhotoIndex}
          onShare={() => setIsShareOpen(true)}
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
        />

        {/* 4. Main Body: 2-Column Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-16 pt-8 pb-10">
          {/* Left Column (Property Details, Highlights, Amenities, Calendar) */}
          <div className="lg:col-span-7 xl:col-span-7 space-y-10">
            <ListingInfo
              listing={LISTING}
              onOpenReviews={scrollToReviews}
            />

            <AmenitiesSection
              amenities={LISTING.amenities}
            />

            <div id="calendar">
              <InteractiveCalendar
                checkIn={reservation.checkIn}
                checkOut={reservation.checkOut}
                onSelectDates={handleSelectDates}
              />
            </div>
          </div>

          {/* Right Column: Sticky Booking / Reservation Widget */}
          <div id="booking-card" className="lg:col-span-5 xl:col-span-5 relative">
            <BookingCard
              listing={LISTING}
              reservation={reservation}
              onUpdateReservation={handleUpdateReservation}
              onOpenReviews={scrollToReviews}
              onScrollToCalendar={scrollToCalendar}
            />
          </div>
        </div>

        {/* 5. Full Width Reviews Section */}
        <ReviewsSection
          listing={LISTING}
          reviews={REVIEWS}
        />

        {/* 6. Where you'll be (Location & Map) */}
        <LocationSection
          listing={LISTING}
        />

        {/* 7. Meet your Host */}
        <HostSection
          host={LISTING.host}
        />

        {/* 8. Things to Know */}
        <ThingsToKnow
          listing={LISTING}
        />
      </main>

      {/* 9. Global Footer */}
      <Footer />

      {/* --- OVERLAY SCREENS --- */}

      {/* Screen 2: Photo Tour (Full-screen photo gallery overlay) */}
      <PhotoTour
        photos={LISTING.photos}
        isOpen={isPhotoTourOpen}
        onClose={() => setIsPhotoTourOpen(false)}
        onSelectPhoto={(idx) => {
          setLightboxIndex(idx);
          setIsLightboxOpen(true);
        }}
        onShare={() => setIsShareOpen(true)}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
      />

      {/* Screen 3: Lightbox (Single-photo viewer with arrows & keyboard navigation) */}
      <Lightbox
        photos={LISTING.photos}
        currentIndex={lightboxIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(idx) => setLightboxIndex(idx)}
        onShare={() => setIsShareOpen(true)}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
      />

      {/* Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        listing={LISTING}
      />

      {/* Production-Scale Vacation Rental Marketplace Architecture Modal */}
      <ArchitectureModal
        isOpen={isArchitectureOpen}
        onClose={() => setIsArchitectureOpen(false)}
      />

      {/* Wishlist Toast Notification */}
      {saveToastMessage && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-[#222222] text-white px-5 py-3 rounded-full text-sm font-semibold shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-200">
          {saveToastMessage}
        </div>
      )}
    </div>
  );
}
