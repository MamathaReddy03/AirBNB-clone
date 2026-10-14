# Sequence of Prompts for AI-Assisted Development

This document records the exact sequence of prompts utilized in the AI-native workflow to develop the pixel-perfect Airbnb listing clone, photo tour, lightbox, and production-scale vacation-rental marketplace system architecture.

---

### Prompt 1: Requirement Decomposition & Architectural Scoping
> **Prompt:**
> "Analyze the PlayPower take-home assignment specification for the Airbnb listing clone: 'Romantic Jacuzzi 1BHK Candolim | Mirashya UG10' (Reference: https://airbnb-clone-umber-two.vercel.app).
> 1. Extract all required core views: (1) Main Listing Page, (2) Photo Tour overlay, and (3) Lightbox single-photo viewer.
> 2. Identify all interaction contracts: sticky sub-navigation, dual-month interactive calendar date range selection, dynamic pricing breakdown calculation, category filter pills in Photo Tour, and full keyboard navigation (←/→/Esc) in Lightbox.
> 3. Define non-functional constraints: desktop-only scope, zero TypeScript errors, WCAG 2.1 AA accessibility, and production architecture thinking."

---

### Prompt 2: Data Modeling & High-Resolution Asset Assembly
> **Prompt:**
> "Design a typed schema (`types.ts`) representing the complete domain of a luxury Airbnb listing:
> - `Photo`: id, url, category ('Living room', 'Bedroom', 'Jacuzzi & Bathroom', 'Kitchen & Dining', 'Outdoor & Pool', 'Exterior & Society'), and caption.
> - `Review`: author, avatar, date, rating, and review text.
> - `AmenityItem`: category, name, icon name, and description.
> - `HostInfo`: name, badge, response rate, avatar, and co-hosts.
> - `ListingData`: title, location, rating, review count, price per night, cleaning fee, service fee, and house rules.
> Assemble 24 authentic high-resolution Goa apartment photos, 48 reviews, and 38 categorized amenities matching the Candolim property."

---

### Prompt 3: Component-Driven Frontend Implementation & Interaction Engine
> **Prompt:**
> "Implement modular, accessible React components using Tailwind CSS v4 and Framer Motion:
> - `Header.tsx`: Brand logo SVG, search pill (Anywhere · Any week · Add guests), 'System Architecture' viewer trigger, and user profile popover.
> - `HeroGallery.tsx`: 5-photo responsive collage with 16px rounded borders, hover zoom transitions, and 'Show all 24 photos' button. Clicking any hero image or the button opens the Photo Tour overlay.
> - `StickyNav.tsx`: Smooth-scrolling navigation bar with tabs (Photos, Amenities, Reviews, Location) and quick reserve shortcut that appears on scroll.
> - `InteractiveCalendar.tsx`: 2-month calendar allowing check-in and checkout selection with range preview and clear button.
> - `BookingCard.tsx`: Sticky reservation widget with dynamic date pricing, guest selector popover (adults, children, infants, pets), price calculation table, and reservation confirmation modal.
> - `ReviewsSection.tsx`: Overall rating breakdown bars (Cleanliness 5.0, Accuracy 4.9, Check-in 5.0, Communication 5.0, Location 4.8, Value 4.9) and 2-column review cards.
> - `LocationSection.tsx`: Interactive Candolim Goa map with distance chips (Candolim Beach, Fort Aguada, Tito's Lane).
> - `HostSection.tsx` & `ThingsToKnow.tsx`: Superhost bio, safety details, house rules, and cancellation policies."

---

### Prompt 4: Screen 2 (Photo Tour) & Screen 3 (Lightbox) Parity
> **Prompt:**
> "Recreate the two overlay screens with pixel-level fidelity:
> - **Screen 2: Photo Tour (`PhotoTour.tsx`)**:
>   - Full-screen scrollable overlay with sticky header ('Back to listing', Share, Save).
>   - Category filter pill bar (All, Living room, Bedroom, Jacuzzi & Bathroom, Kitchen & Dining, Outdoor & Pool, Exterior & Society) with live counts.
>   - Clicking any photo in the tour opens Screen 3 (Lightbox).
> - **Screen 3: Lightbox (`Lightbox.tsx`)**:
>   - Dimmed black backdrop (95% opacity), top bar with close button, photo counter (`idx + 1 / 24`), Share, and Save.
>   - Keyboard navigation listeners for `ArrowLeft` (previous), `ArrowRight` (next), and `Escape` (close).
>   - Animated image cross-fading with Framer Motion and synchronized bottom thumbnail strip carousel."

---

### Prompt 5: Production-Scale Architecture Blueprint & Interactive Viewer
> **Prompt:**
> "Author a comprehensive production-scale vacation-rental marketplace system architecture for 150M+ MAU and 100k+ QPS:
> - Diagram all layers: Global Edge / Cloudflare CDN, Envoy API Gateway, Microservices mesh (Listing, Availability & Pricing, Booking Saga, Search & Discovery), and Storage tier.
> - Detail the sub-millisecond calendar availability strategy using Redis 365-bit bitfields (`GETBIT`/`BITFIELD`) and distributed locking (Redlock) to guarantee zero double-bookings.
> - Specify real-time geospatial search using Elasticsearch `geo_point` with Uber H3 spatial indexing and Kafka CDC (Debezium).
> - Implement an in-app interactive architecture modal (`ArchitectureModal.tsx`) with tabs for the visual topology, scaling strategy, and AI subagent configurations."
