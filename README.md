# Airbnb Listing Clone

A pixel-perfect, highly interactive clone of an Airbnb listing page ("Romantic Jacuzzi 1BHK Candolim | Mirashya UG10"). Built as a demonstration of modern frontend development, UI/UX fidelity, and AI-assisted workflows.

## 🚀 Features

- **Main Listing Page**: Pixel-perfect recreation of the Airbnb property layout, typography, and spacing.
- **Interactive Sticky Navigation**: Smooth-scrolling navigation bar with quick reserve shortcut that appears on scroll.
- **Photo Tour Overlay**: Full-screen scrollable gallery with categorized filter pills (Living room, Bedroom, Jacuzzi, etc.) and live counts.
- **Lightbox Viewer**: Immersive single-photo viewer with full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`), animated cross-fading, and a synchronized thumbnail carousel.
- **Interactive Components**: 
  - Dynamic Booking Card with date pricing and guest selector.
  - Interactive Map integration (Location Section).
  - Reviews section with rating breakdown bars.
- **Production-Scale Architecture**: Includes a system architecture blueprint for scaling a vacation-rental marketplace (see `ARCHITECTURE.md` and `architecture-diagram.svg`).

## 🛠 Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 8
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (`motion`)
- **Icons**: Lucide React

## 📦 Installation & Setup

1. **Navigate to the project directory** (if you haven't already):
   ```bash
   cd "AirBNB-Clone"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```
   The app will typically be available at `http://localhost:3000`.

## 📜 Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the app for production.
- `npm run preview`: Locally previews the production build.
- `npm run lint`: Runs TypeScript type checking without emitting files.

## 🤖 AI-Assisted Development

This project was developed utilizing advanced AI coding agents and structured workflows. The exact sequence of prompts and architectural planning can be found in `PROMPTS.md`. The specific AI configurations and rules are located within the `agents/` and `.agents/` directories.
