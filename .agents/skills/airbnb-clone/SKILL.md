---
name: airbnb-clone-parity
description: Orchestrates pixel-perfect Airbnb listing page recreation, photo tour, lightbox parity, and architecture documentation.
---

# Airbnb Listing Clone & Architectural Parity Skill

## Overview
This skill provides automated checks, visual specifications, and interaction workflows for building and verifying an exact replica of an Airbnb listing page with its two full-screen overlays:
1. **Screen 1: Listing Page**: Header, 5-photo Hero Gallery, Sticky Sub-Nav, Property Info, Amenities, Interactive Dual-Month Calendar, Sticky Pricing & Reservation Card, Full-Width Reviews with Rating Category Bars, Location Map, Host Profile, Things to Know, and Footer.
2. **Screen 2: Photo Tour**: Full-screen photo gallery opened from "Show all photos" or any hero image, featuring category filter pills (Living room, Bedroom, Jacuzzi & Bathroom, Kitchen, Outdoor, Exterior) and responsive image cards.
3. **Screen 3: Lightbox**: High-resolution single-photo viewer with navigation arrows, keyboard arrow navigation (← / → / Esc), counter, caption, and thumbnail carousel.

## Design Tokens & Fidelity Checklist
- **Primary Accent**: `#FF385C` (Airbnb Rausch)
- **Primary Text**: `#222222`
- **Secondary Text**: `#717171`
- **Borders & Dividers**: `#EBEBEB` and `#DDDDDD`
- **Backgrounds**: Pure white `#FFFFFF` with neutral `#F7F7F7` hover states
- **Typography**: Plus Jakarta Sans / Circular with tight letter-spacing
- **Border Radius**: 12px (`rounded-xl`) and 16px (`rounded-2xl`) for cards and hero collage
- **Transitions**: 200ms ease-out transitions for modals, hover states, and photo cross-fades
