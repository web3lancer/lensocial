# Accessibility Checklist v1.0

This checklist is a living document to guide our team in building an accessible and inclusive product. It is based on the Web Content Accessibility Guidelines (WCAG) 2.1 AA standard. Every new feature should be reviewed against this checklist before shipping.

## Core Principles (POUR)

Our goal is to ensure our application is:

1.  **Perceivable:** Information and user interface components must be presentable to users in ways they can perceive.
2.  **Operable:** User interface components and navigation must be operable.
3.  **Understandable:** Information and the operation of the user interface must be understandable.
4.  **Robust:** Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

## Development Checklist

### Semantic HTML

-   [ ] Use landmark elements (`<main>`, `<nav>`, `<header>`, `<footer>`, etc.) to define page regions.
-   [ ] Use appropriate heading levels (`<h1>` through `<h6>`) to structure content.
-   [ ] Use `<label>` for all form inputs.
-   [ ] Use `<button>` for interactive elements that perform an action.
-   [ ] Use `<a>` with a valid `href` for navigation.

### Images & Media

-   [ ] All `<img>` elements must have a descriptive `alt` attribute. For decorative images, use `alt=""`.
-   [ ] Provide transcripts and captions for pre-recorded video content.
-   [ ] Avoid using images of text.

### Keyboard Navigation

-   [ ] All interactive elements are focusable and operable with a keyboard.
-   [ ] The focus order is logical and intuitive.
-   [ ] The currently focused element has a visible focus indicator.

### Color & Contrast

-   [ ] Text has a contrast ratio of at least 4.5:1 against its background.
-   [ ] UI components and graphical objects have a contrast ratio of at least 3:1.
-   [ ] Color is not the only means of conveying information.

### Dynamic Content & ARIA

-   [ ] Use ARIA roles and attributes to provide semantics for custom components (e.g., modals, tabs, menus).
-   [ ] Use `aria-live` regions to announce dynamic content changes to screen readers.
-   [ ] Ensure that all interactive controls are accessible to assistive technologies.

## Testing

-   [ ] **Automated Testing:** Run automated accessibility checks (e.g., using `axe-core`) in our CI pipeline.
-   [ ] **Manual Testing:**
    -   [ ] Test keyboard-only navigation.
    -   [ ] Test with a screen reader (e.g., VoiceOver, NVDA).
    -   [ ] Test in high-contrast mode.
    -   [ ] Test by resizing text up to 200%.

This checklist will be integrated into our development process, including design reviews and pull request templates.