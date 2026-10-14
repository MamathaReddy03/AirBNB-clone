import { ListingData, Review } from '../types';

export const LISTING: ListingData = {
  id: 'mirashya-ug10-candolim',
  title: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10',
  subtitle: 'Entire serviced apartment in Candolim, India',
  locationName: 'Candolim, Goa, India',
  city: 'Candolim',
  state: 'Goa',
  country: 'India',
  coordinates: {
    lat: 15.5165,
    lng: 73.7634,
  },
  rating: 4.96,
  reviewCount: 48,
  isSuperhost: true,
  guestCapacity: 2,
  bedrooms: 1,
  beds: 1,
  baths: 1,
  pricePerNight: 3499,
  originalPricePerNight: 4299,
  cleaningFee: 800,
  serviceFeePercent: 0.14,
  taxesPercent: 0.12,
  description: {
    intro: 'Escape to our romantic haven nestled in the vibrant heart of Candolim, North Goa. Designed specifically for couples seeking an intimate getaway, this luxury 1BHK serviced apartment features a private in-bathroom whirlpool jacuzzi bathtub, mood ambient lighting, a plush king-sized bed, high-speed 100 Mbps fiber WiFi, and full society amenities including a sparkling swimming pool, fitness gym, and 24/7 gated security.',
    theSpace: `Welcome to Mirashya UG10! Located on the upper ground floor of a serene, resort-style gated community just 1.8 km from golden Candolim Beach.

• Private Whirlpool Jacuzzi: Unwind together in your exclusive, temperature-controlled jacuzzi bathtub equipped with therapeutic water jets and warm ambient LED backlighting.
• Master Bedroom: Fitted with an ultra-comfortable orthopedic king-size mattress, 400-thread-count Egyptian cotton linens, blackout curtains, split air-conditioning, and custom bedside reading lamps.
• Living Area: Features an elegant L-shaped lounge sofa, artisanal Goan wooden decor, and a 55-inch 4K Smart TV with active Netflix, Amazon Prime, and Disney+ subscriptions.
• Fully Equipped Kitchen: Includes an induction cooktop, Samsung microwave, double-door refrigerator, electric kettle, bread toaster, Kent RO water purifier, cookware, and wine glasses.
• Private Balcony: Step out to enjoy morning coffee or sunset cocktails with views of swaying coconut palms and the pool area.
• 100% Power Backup: Complete inverter backup ensures uninterrupted WiFi, lights, and fans during rare coastal power cuts.`,
    guestAccess: 'Guests have exclusive, private access to the entire 1BHK apartment and private jacuzzi. In addition, guests can freely use all community amenities including the shared outdoor swimming pool, fully equipped air-conditioned fitness center, landscaped walking gardens, and designated covered parking on the premises.',
    otherNotes: `• Daily housekeeping service is provided at a convenient time between 10:00 AM and 2:00 PM.
• Fresh bed linens and bath towels are refreshed every three days or upon request.
• Gated society with 24/7 security personnel and CCTV in common areas.
• Strictly a quiet community: No loud outdoor music after 10:00 PM to respect fellow residents.
• Beach towels are provided complimentary in your wardrobe!`
  },
  highlights: [
    {
      title: 'Private whirlpool jacuzzi',
      description: 'Relax in your exclusive indoor jacuzzi with soothing massage hydro-jets and mood lighting.',
      icon: 'bath'
    },
    {
      title: 'Dedicated workspace with 100 Mbps WiFi',
      description: 'A comfortable work desk with ergonomic chair and seamless high-speed fiber internet.',
      icon: 'laptop'
    },
    {
      title: 'Self check-in with smart lock',
      description: 'Check yourself in effortlessly anytime after 2:00 PM with your unique digital keypad code.',
      icon: 'key'
    },
    {
      title: 'Superhost with 100% response rate',
      description: 'Mirashya Homes has 4 years of hosting experience with 5-star verified hospitality.',
      icon: 'award'
    },
    {
      title: 'Free cancellation before check-in',
      description: 'Full refund if you cancel up to 48 hours before check-in date.',
      icon: 'calendar'
    }
  ],
  ratingsBreakdown: {
    cleanliness: 5.0,
    accuracy: 4.9,
    communication: 5.0,
    location: 4.8,
    checkIn: 5.0,
    value: 4.9
  },
  sleepingArrangements: [
    {
      id: 'bed-1',
      roomName: 'Bedroom 1',
      bedType: '1 king bed with luxury memory foam mattress',
      icon: 'bed'
    },
    {
      id: 'bed-2',
      roomName: 'Living room',
      bedType: '1 sofa bed (convertible daybed)',
      icon: 'sofa'
    }
  ],
  photos: [
    {
      id: 'p1',
      url: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&w=1600&q=85',
      caption: 'Living room - Elegant open-plan living lounge with 55" 4K Smart TV and plush seating',
      category: 'Living room'
    },
    {
      id: 'p2',
      url: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1200&q=85',
      caption: 'Bedroom - Romantic king suite with warm ambient lamps, Egyptian cotton linens and AC',
      category: 'Bedroom'
    },
    {
      id: 'p3',
      url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=85',
      caption: 'Private Jacuzzi - In-bathroom deep whirlpool bathtub with hydro-jets and bath salts',
      category: 'Jacuzzi & Bathroom'
    },
    {
      id: 'p4',
      url: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=85',
      caption: 'Kitchen - Modern modular kitchen with induction cooktop, microwave & refrigerator',
      category: 'Kitchen & Dining'
    },
    {
      id: 'p5',
      url: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?auto=format&fit=crop&w=1200&q=85',
      caption: 'Outdoor Pool - Resort-style swimming pool surrounded by tropical Goan palms',
      category: 'Outdoor & Pool'
    },
    {
      id: 'p6',
      url: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=85',
      caption: 'Living room - Cozy reading corner with sunlight, artisanal wooden accents and coffee table',
      category: 'Living room'
    },
    {
      id: 'p7',
      url: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=85',
      caption: 'Bedroom - Peaceful bedroom view showing wardrobe, vanity mirror and soft warm lighting',
      category: 'Bedroom'
    },
    {
      id: 'p8',
      url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85',
      caption: 'Jacuzzi & Bath - Detail of the relaxing whirlpool bath with aromatherapy candles',
      category: 'Jacuzzi & Bathroom'
    },
    {
      id: 'p9',
      url: 'https://images.unsplash.com/photo-1620626011761-996317b8d101?auto=format&fit=crop&w=1200&q=85',
      caption: 'Bathroom - Contemporary rainfall shower, glass partition and luxury vanity countertop',
      category: 'Jacuzzi & Bathroom'
    },
    {
      id: 'p10',
      url: 'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1200&q=85',
      caption: 'Kitchen & Dining - Breakfast bar counter with bar stools, wine glasses and cutlery set',
      category: 'Kitchen & Dining'
    },
    {
      id: 'p11',
      url: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=85',
      caption: 'Balcony - Private balcony with lounge chairs facing tranquil tropical gardens',
      category: 'Exterior & Society'
    },
    {
      id: 'p12',
      url: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=1200&q=85',
      caption: 'Outdoor & Pool - Sun deck with comfortable poolside loungers and clear azure waters',
      category: 'Outdoor & Pool'
    },
    {
      id: 'p13',
      url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85',
      caption: 'Society Gym - Air-conditioned fitness center equipped with cardio and weights',
      category: 'Exterior & Society'
    },
    {
      id: 'p14',
      url: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1200&q=85',
      caption: 'Living room - Spacious layout connecting the living lounge to the private dining alcove',
      category: 'Living room'
    },
    {
      id: 'p15',
      url: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&w=1200&q=85',
      caption: 'Bedroom - Close up of plush hypoallergenic pillows and soft linen bedding',
      category: 'Bedroom'
    },
    {
      id: 'p16',
      url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3?auto=format&fit=crop&w=1200&q=85',
      caption: 'Kitchen - Cookware, induction pans, knife block and stainless steel spice containers',
      category: 'Kitchen & Dining'
    },
    {
      id: 'p17',
      url: 'https://images.unsplash.com/photo-1584622781867-1c5c56910e53?auto=format&fit=crop&w=1200&q=85',
      caption: 'Bathroom - Fresh fluffy bath sheets, hand towels, and organic Ayurvedic toiletries',
      category: 'Jacuzzi & Bathroom'
    },
    {
      id: 'p18',
      url: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      caption: 'Living room - Dedicated workspace with ergonomic desk chair and ultra-fast 100 Mbps WiFi',
      category: 'Living room'
    },
    {
      id: 'p19',
      url: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=1200&q=85',
      caption: 'Exterior - Beautiful Spanish-Portuguese architecture of the gated Candolim residential complex',
      category: 'Exterior & Society'
    },
    {
      id: 'p20',
      url: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=85',
      caption: 'Outdoor - Evening ambient lighting across the manicured garden pathways',
      category: 'Exterior & Society'
    },
    {
      id: 'p21',
      url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=85',
      caption: 'Living room - Warm evening atmosphere with curated mood lighting and artwork',
      category: 'Living room'
    },
    {
      id: 'p22',
      url: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&w=1200&q=85',
      caption: 'Bedroom - Soft morning daylight streaming through sheer linen curtains',
      category: 'Bedroom'
    },
    {
      id: 'p23',
      url: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
      caption: 'Bathroom - Polished granite counter, illuminated mirror, and hairdryer provided',
      category: 'Jacuzzi & Bathroom'
    },
    {
      id: 'p24',
      url: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=85',
      caption: 'Outdoor & Pool - Overview of the tranquil pool deck at sunset',
      category: 'Outdoor & Pool'
    }
  ],
  amenities: [
    // Featured / Top Display
    { id: 'am-1', name: 'Private hot tub / jacuzzi', description: 'Available in bathroom, whirlpool jets', iconName: 'Bath', category: 'Bathroom', featured: true },
    { id: 'am-2', name: 'Fast wifi – 100 Mbps', description: 'Verified by speed test. Stream 4K video.', iconName: 'Wifi', category: 'Internet and office', featured: true },
    { id: 'am-3', name: 'Dedicated workspace', description: 'A table or desk with space for a laptop and a chair', iconName: 'Laptop', category: 'Internet and office', featured: true },
    { id: 'am-4', name: 'Shared outdoor pool – available all year', description: 'Open specific hours (7:00 AM – 8:00 PM)', iconName: 'Waves', category: 'Outdoor', featured: true },
    { id: 'am-5', name: 'Kitchen', description: 'Space where guests can cook their own meals', iconName: 'Utensils', category: 'Kitchen and dining', featured: true },
    { id: 'am-6', name: 'Free parking on premises', description: 'Dedicated covered parking space', iconName: 'Car', category: 'Parking and facilities', featured: true },
    { id: 'am-7', name: '55" HDTV with Netflix, Prime Video', description: 'Standard cable and streaming services', iconName: 'Tv', category: 'Entertainment', featured: true },
    { id: 'am-8', name: 'Air conditioning', description: 'Dual split ACs in bedroom and living room', iconName: 'Wind', category: 'Heating and cooling', featured: true },
    { id: 'am-9', name: 'Power backup (Inverter)', description: 'Runs lights, fans, and WiFi router continuously', iconName: 'Zap', category: 'Services', featured: true },
    { id: 'am-10', name: 'Private patio or balcony', description: 'Overlooking lush greenery and society pool', iconName: 'Sun', category: 'Outdoor', featured: true },

    // Additional categorized amenities
    { id: 'am-11', name: 'Hair dryer', iconName: 'Sparkles', category: 'Bathroom' },
    { id: 'am-12', name: 'Hot water', description: 'Continuous 24/7 solar + instant geyser', iconName: 'Flame', category: 'Bathroom' },
    { id: 'am-13', name: 'Shampoo, body wash & conditioner', iconName: 'Droplet', category: 'Bathroom' },
    { id: 'am-14', name: 'Bed linens & extra pillows', iconName: 'Layers', category: 'Bedroom and laundry' },
    { id: 'am-15', name: 'Clothing storage & hangers', iconName: 'Shirt', category: 'Bedroom and laundry' },
    { id: 'am-16', name: 'Iron & ironing board', iconName: 'Check', category: 'Bedroom and laundry' },
    { id: 'am-17', name: 'Room-darkening shades', iconName: 'Moon', category: 'Bedroom and laundry' },
    { id: 'am-18', name: 'Microwave', iconName: 'Maximize2', category: 'Kitchen and dining' },
    { id: 'am-19', name: 'Refrigerator with freezer', iconName: 'Box', category: 'Kitchen and dining' },
    { id: 'am-20', name: 'Induction cooktop', iconName: 'Flame', category: 'Kitchen and dining' },
    { id: 'am-21', name: 'Dishes, silverware & glassware', iconName: 'Coffee', category: 'Kitchen and dining' },
    { id: 'am-22', name: 'Electric kettle & tea maker', iconName: 'Coffee', category: 'Kitchen and dining' },
    { id: 'am-23', name: 'Toaster', iconName: 'Square', category: 'Kitchen and dining' },
    { id: 'am-24', name: 'RO Water purifier', description: 'Unlimited pure drinking water', iconName: 'Droplets', category: 'Kitchen and dining' },
    { id: 'am-25', name: 'Dining table', iconName: 'Grid', category: 'Kitchen and dining' },
    { id: 'am-26', name: 'Wine glasses', iconName: 'Wine', category: 'Kitchen and dining' },
    { id: 'am-27', name: 'Shared gym in building', description: 'Cardio equipment, dumbbells & bench', iconName: 'Dumbbell', category: 'Parking and facilities' },
    { id: 'am-28', name: 'Elevator in building', iconName: 'ArrowUpDown', category: 'Parking and facilities' },
    { id: 'am-29', name: 'Smoke alarm', iconName: 'AlertCircle', category: 'Home safety' },
    { id: 'am-30', name: 'Fire extinguisher', iconName: 'ShieldAlert', category: 'Home safety' },
    { id: 'am-31', name: 'First aid kit', iconName: 'HeartPulse', category: 'Home safety' },
    { id: 'am-32', name: '24/7 Security guard & gated entrance', iconName: 'ShieldCheck', category: 'Home safety' },
    { id: 'am-33', name: 'Exterior security cameras on property', description: 'In common corridors and gates only', iconName: 'Camera', category: 'Home safety' },
    { id: 'am-34', name: 'Self check-in with keypad', iconName: 'KeyRound', category: 'Services' },
    { id: 'am-35', name: 'Daily housekeeping', description: 'Available upon request', iconName: 'Brush', category: 'Services' },
    { id: 'am-36', name: 'Luggage drop-off allowed', description: 'For early arrival or late departure', iconName: 'Briefcase', category: 'Services' },
    { id: 'am-37', name: 'Long term stays allowed', description: 'Allow stay 28 days or more', iconName: 'CalendarCheck', category: 'Services' },
    { id: 'am-38', name: 'Beach essentials', description: 'Beach towels, umbrella, and beach mat', iconName: 'Umbrella', category: 'Location features' }
  ],
  host: {
    name: 'Mirashya Homes',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80',
    isSuperhost: true,
    yearsHosting: 4,
    rating: 4.96,
    reviewCount: 48,
    responseRate: 100,
    responseTime: 'within an hour',
    bio: 'Hi! We are Mirashya Homes, a premier hospitality team in Goa dedicated to creating unforgettable, luxurious holiday stays. We focus on cleanliness, prompt communication, and thoughtful details so you can truly unwind and enjoy the sunshine state.',
    coHosts: [
      { name: 'Rohit (Property Manager)', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80' },
      { name: 'Priya (Guest Concierge)', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80' }
    ],
    identityVerified: true
  },
  houseRules: {
    checkIn: '2:00 PM – 10:00 PM',
    checkOut: '11:00 AM',
    maxGuests: 2,
    quietHours: '10:00 PM – 8:00 AM',
    rules: [
      'Check-in after 2:00 PM',
      'Checkout before 11:00 AM',
      '2 guests maximum',
      'No pets allowed',
      'Quiet hours: 10:00 PM – 8:00 AM',
      'No parties, events or commercial photography',
      'Smoking is strictly prohibited inside the apartment (allowed on balcony only)',
      'Valid Government ID required for all guests prior to check-in'
    ]
  },
  safetyRules: [
    'Carbon monoxide alarm not needed (all-electric property)',
    'Smoke alarm installed',
    'Fire extinguisher on premises',
    'First aid kit available in kitchen cabinet',
    'CCTV security cameras in common building areas'
  ],
  cancellationPolicy: {
    summary: 'Free cancellation for 48 hours. Cancel up to 48 hours before check-in for a full refund.',
    details: 'Review the Host’s full cancellation policy which applies even if you cancel for illness or disruptions caused by COVID-19.'
  }
};

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    author: 'Aarav & Simran',
    authorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=200&q=80',
    authorLocation: 'Mumbai, India',
    rating: 5,
    date: 'February 2026',
    stayDuration: 'Stayed 4 nights',
    comment: 'Mirashya UG10 exceeded all our expectations! The private jacuzzi in the bathroom was an absolute dream after long days exploring North Goa beaches. The place was spotless, the bed was so comfortable, and Rohit was super responsive. Highly recommended for any couple visiting Candolim!'
  },
  {
    id: 'rev-2',
    author: 'Elena Rostova',
    authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    authorLocation: 'Berlin, Germany',
    rating: 5,
    date: 'January 2026',
    stayDuration: 'Stayed 1 week',
    comment: 'One of the best Airbnbs I have stayed at in India. The 100 Mbps WiFi was reliable enough for my remote video calls, and the kitchen had everything needed to make breakfast. The pool downstairs is clean and peaceful. Candolim beach is just 5 minutes away by scooter.'
  },
  {
    id: 'rev-3',
    author: 'Vikram Mehta',
    authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=200&q=80',
    authorLocation: 'Bengaluru, India',
    rating: 5,
    date: 'December 2025',
    stayDuration: 'Stayed 3 nights',
    comment: 'The jacuzzi tub with warm water and bubbles was magical! The apartment looks even better in person than the photos. Check-in with the smart keypad lock was effortless. We loved the proximity to top restaurants like Fisherman’s Cove and Calamari.'
  },
  {
    id: 'rev-4',
    author: 'Sophie & Marc',
    authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80',
    authorLocation: 'Lyon, France',
    rating: 5,
    date: 'November 2025',
    stayDuration: 'Stayed 5 nights',
    comment: 'Superhost status is truly well deserved! Sparkling clean, thoughtful amenities like beach towels, daily housekeeping, and total peace and quiet at night. We had the most romantic anniversary here.'
  },
  {
    id: 'rev-5',
    author: 'Ananya Sharma',
    authorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=200&q=80',
    authorLocation: 'New Delhi, India',
    rating: 5,
    date: 'October 2025',
    stayDuration: 'Stayed 2 nights',
    comment: 'Everything was pristine. The jacuzzi took less than 15 minutes to fill with hot water, the AC was ice cold, and the 55-inch smart TV was great for winding down with a movie. Will definitely be booking with Mirashya again!'
  },
  {
    id: 'rev-6',
    author: 'David Wilson',
    authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    authorLocation: 'London, UK',
    rating: 5,
    date: 'September 2025',
    stayDuration: 'Stayed 6 nights',
    comment: 'Exceptional stay. The security at the gate is friendly, the complex is quiet and lush, and the apartment is modern with great aesthetics. Candolim beach is an easy walk or 2-min tuktuk ride.'
  },
  {
    id: 'rev-7',
    author: 'Kavita Patel',
    authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    authorLocation: 'Ahmedabad, India',
    rating: 5,
    date: 'August 2025',
    stayDuration: 'Stayed 3 nights',
    comment: 'The jacuzzi made our monsoon Goa trip so cozy! Even with rainfall outside, having an indoor hot tub was so relaxing. The inverter backup was a huge relief during stormy weather.'
  },
  {
    id: 'rev-8',
    author: 'Rahul Sen',
    authorAvatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=200&q=80',
    authorLocation: 'Kolkata, India',
    rating: 5,
    date: 'July 2025',
    stayDuration: 'Stayed 4 nights',
    comment: 'Fantastic hospitality! The team arranged a scooter rental right at our arrival and gave great local tips for sunset spots. The apartment is top quality and great value.'
  }
];
