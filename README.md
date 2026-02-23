# John’s Professional Services Website

This repository contains the source code for my professional services website.

The site is designed to provide a clear, approachable overview of my services, background, and capabilities, and to make it easy for potential clients to get in touch.

---

## Purpose

This website serves two primary purposes:

### 1. Client-facing presence
- Introduces my professional services and areas of focus  
- Builds trust through clarity and transparency  
- Provides a reliable way for visitors to contact me  

### 2. Demonstration of work
- Showcases the type of clean, practical websites I build for clients  
- Demonstrates my approach to structure, validation, and maintainability  
- Acts as a living example of my web development and problem-solving skills  

---

## Scope and Philosophy

The site is intentionally kept lightweight and focused:

- Clear messaging
- Simple, readable layout
- Fast load times
- Minimal dependencies
- Progressive enhancement over heavy frameworks

This reflects the kind of efficient, maintainable websites I aim to deliver for clients—favoring clarity and reliability over unnecessary complexity.

---

## Technology

- HTML
- CSS
- JavaScript
- TypeScript (server-side logic and type safety)
- Cloudflare Pages Functions
- Git & GitHub for version control

### Contact Form

The contact form is fully functional and production-ready:

- Submits to a server-side endpoint (`/api/contact`)
- Protected by Cloudflare Turnstile
- Server-side validation and allow-listing
- Honeypot-based spam protection
- Email delivery via Resend
- Consistent JSON responses for client-side UI handling

All sensitive operations and secrets are handled server-side.

---

## Project Status

**v1.1.0 has been released.**

The current version represents a stable, public-ready baseline:

- Core pages are complete
- Contact workflow is reliable and protected
- Validation and failure handling are in place

The project will continue to evolve incrementally. Future updates may include:

- Content or design refinements
- Accessibility improvements
- Logging, monitoring, or rate-limiting enhancements
- Additional features as needed

Each version is developed with an emphasis on learning, clarity, and long-term maintainability.

---

## Notes

This repository reflects an intentionally iterative approach.

Not everything is built at once, and not every feature is added prematurely.  
The goal is steady, understandable progress—both for the project itself and as a record of how I approach real-world development work.
