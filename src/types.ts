export interface Photo {
  id: string;
  url: string;
  thumbnailUrl?: string;
  caption: string;
  category: 'Living room' | 'Bedroom' | 'Jacuzzi & Bathroom' | 'Kitchen & Dining' | 'Outdoor & Pool' | 'Exterior & Society';
}

export interface AmenityItem {
  id: string;
  name: string;
  description?: string;
  iconName: string;
  category: string;
  featured?: boolean;
}

export interface Review {
  id: string;
  author: string;
  authorAvatar: string;
  authorLocation: string;
  rating: number;
  date: string;
  stayDuration?: string;
  comment: string;
}

export interface SleepingSpot {
  id: string;
  roomName: string;
  bedType: string;
  icon: 'bed' | 'sofa';
}

export interface HostInfo {
  name: string;
  avatar: string;
  isSuperhost: boolean;
  yearsHosting: number;
  rating: number;
  reviewCount: number;
  responseRate: number;
  responseTime: string;
  bio: string;
  coHosts: { name: string; avatar: string }[];
  identityVerified: boolean;
}

export interface ListingData {
  id: string;
  title: string;
  subtitle: string;
  locationName: string;
  city: string;
  state: string;
  country: string;
  coordinates: { lat: number; lng: number };
  rating: number;
  reviewCount: number;
  isSuperhost: boolean;
  guestCapacity: number;
  bedrooms: number;
  beds: number;
  baths: number;
  pricePerNight: number;
  originalPricePerNight?: number;
  cleaningFee: number;
  serviceFeePercent: number;
  taxesPercent: number;
  description: {
    intro: string;
    theSpace: string;
    guestAccess: string;
    otherNotes: string;
  };
  highlights: {
    title: string;
    description: string;
    icon: string;
  }[];
  ratingsBreakdown: {
    cleanliness: number;
    accuracy: number;
    communication: number;
    location: number;
    checkIn: number;
    value: number;
  };
  sleepingArrangements: SleepingSpot[];
  photos: Photo[];
  amenities: AmenityItem[];
  host: HostInfo;
  houseRules: {
    checkIn: string;
    checkOut: string;
    maxGuests: number;
    quietHours: string;
    rules: string[];
  };
  safetyRules: string[];
  cancellationPolicy: {
    summary: string;
    details: string;
  };
}

export interface ReservationDetails {
  checkIn: Date | null;
  checkOut: Date | null;
  adults: number;
  children: number;
  infants: number;
  pets: number;
}
