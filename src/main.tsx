import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

// ── Scroll-reveal via IntersectionObserver ──
// Targets .reveal-section, .reveal-fade, .reveal-left, .reveal-stagger
// Adds .is-visible when element enters viewport.
// Skipped entirely if prefers-reduced-motion is set.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reducedMotion) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target); // fire once
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  );

  // Observe existing elements after initial paint
  const observe = () => {
    document
      .querySelectorAll('.reveal-section, .reveal-fade, .reveal-left, .reveal-stagger')
      .forEach((el) => observer.observe(el));
  };

  // Run after first render, then re-observe on DOM mutations (for async content).
  // ponytail: MutationObserver disconnected after 10s — enough for async sections to mount
  requestAnimationFrame(() => {
    observe();
    const mo = new MutationObserver(observe);
    mo.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => mo.disconnect(), 10_000);
  });
}
