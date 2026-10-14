# Code Quality & Standards

1. **TypeScript Strictness**: All interfaces, state props, event handlers, and data structures must be strictly typed without `any`.
2. **Accessibility (WCAG 2.1 AA)**:
   - All interactive controls (buttons, links, image thumbnails) must feature descriptive `aria-label` or `title` attributes.
   - Lightbox and overlay modals must capture keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).
   - Body scroll locking (`overflow: hidden`) must be applied when modals/overlays are active and cleaned up on unmount.
3. **Semantic HTML**:
   - Use `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<button>`, and `<h1>` to `<h3>` semantic hierarchies.
4. **Performance**:
   - Image loading strategy: Eager loading for hero collage above the fold, lazy loading for offscreen photo tour thumbnails.
   - Zero layout shift (CLS): Explicit dimensions or aspect ratio containers on all media.
