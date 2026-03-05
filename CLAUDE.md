# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static marketing website for MAKO Consult, a one-person B2B strategic marketing consultancy (Michael Makowiecki, Hamburg, Germany). The site is a credibility and conversion tool targeting senior B2B marketing leaders at European companies (20-200 employees).

**Status**: Pre-build phase. Content, brand assets, and briefs are complete. No framework or source code exists yet.

## Content & Language

- Bilingual: English (primary) + German (required for launch)
- 4 main pages: Home, Services, About, Contact
- Legal pages required: Imprint and Privacy Policy (both languages)
- Page content lives in `Content/` as Markdown files (e.g., `home-en.md`, `services-de.md`)
- Primary CTA across the site: book a free discovery call (Calendly)

## Brand & Design System

Refer to `design-brief.md` for full visual direction. Key specs:

- **Brand feel**: Precise. Warm. Confident. Premium European consultancy aesthetic.
- **Colors**: Ember Clay `#7D4948`, Solar Pulse `#EFDF49`, Steel Fog `#5D686D`, Graphite Core `#323232`, White, Black
- **Typography**: Glacial Indifference (headings, self-hosted files available), Montserrat (body/UI, Google Fonts, weights 300-700)
- **Logo**: SVGs in `Images/Logo/MAKOConsult/` — horizontal (primary), vertical, diamond-only (favicon). Each in dark/white/grey/yellow variants.

## Asset Locations

- `Images/Icons/` — 8 SVG icons: 4 service areas (Brand, Communication, Data, B2B) + 4 process steps (Discovery, Strategy, Delivery, Support)
- `Images/Logo/Clients/` — 10 client logos in B&W + Color SVG (Imperial Brands, Bacardi, Vodafone, Tchibo, etc.)
- `Images/Stock/` — Custom editorial-style stock photography
- `Images/profile_lnd.jpeg` — Professional portrait

## Integrations

- **Calendly**: Embed for booking discovery calls (primary conversion)
- **Formspree** (or equivalent): Contact form handling — no backend/database
- No CMS — purely static site

## Key Briefs

- `website-brief.md` — Full requirements, audience, page structure, tone guidance per page
- `design-brief.md` — Visual direction, brand kit, layout principles, responsive behavior
