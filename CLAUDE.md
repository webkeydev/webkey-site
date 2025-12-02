# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Vue 3 + Vite marketing website for Webkey, a remote Android device management application. The site is built using Vue 3 composition API with `<script setup>` syntax and Vue Router for navigation.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Architecture

### Application Entry Point
- `src/main.js` - Creates Vue app instance, registers router, and mounts to DOM
- `src/App.vue` - Root component containing only `<router-view />` wrapper
- `index.html` - HTML entry point

### Routing Structure
All routes are defined in `src/router/index.js` with:
- Standard page routes (e.g., `/pricing`, `/features`, `/about-us`)
- Article routes under `/views/articles/` (e.g., `/screen-mirroring-webkey`, `/premium-features`)
- Custom scroll behavior: smooth scrolling to hash anchors, restores saved position, or scrolls to top

### Component Organization

**Page Components** (`src/views/`)
- Main pages: HomePage, PricingPage, FeaturesPage, AboutUsPage, etc.
- Article pages in `views/articles/` subdirectory for knowledge base content
- Pages are route-level components imported directly in router

**Reusable Components** (`src/components/`)
- Layout: `AppHeader.vue`, `AppFooter.vue`
- Sections: `HeroSection.vue`, `CtaSection.vue`, `BusinessSection.vue`, etc.
- Templates: `ArticleTemplate.vue` - wrapper for article pages with hero, metadata, and content slot
- Feature-specific: `components/features/`, `components/pricing/`

**Header Navigation**
- Desktop navigation with submenu support (Partners dropdown)
- Mobile hamburger menu with state management
- Scroll detection to apply header styling changes
- External links to dashboard: `https://dashboard.webkeyapp.com/` (login) and `/registration` (signup)

### Static Assets
- `public/` - Static assets (images, logos, SVGs, fonts) served directly
- Logo referenced as `/logo.svg` from public directory
- Large hero/background images stored in public directory

## Key Patterns

**Vue 3 Composition API**
- All components use `<script setup>` syntax
- No Options API usage

**Router Links**
- Use `<router-link>` for internal navigation
- Use `<a>` tags for external links (dashboard) and routes with hash navigation

**Article Pages**
- Use `ArticleTemplate` component wrapper
- Pass props for title, date, heroImage, relatedArticles
- Content goes in default slot
