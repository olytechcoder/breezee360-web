# Breezee360 Landing Page — PRD

## Original problem statement
Build a modern, high-converting landing page for **Breezee360**, a calm productivity + wellness mobile app.

Core philosophy: **"Productivity through well-being, not pressure."**

Daily rhythm system:
- Night → Motivation (3 quotes)
- Day → Action (tasks, time blocks)
- Week → Reflection (Weekly Wrap)

## User-confirmed choices
- Light + dark mode toggle
- Both "Join Waitlist" and "Download App" CTAs
- Soft minimal style (calm green gradients, whitespace)
- Working waitlist form → emails fans@breezee.uk via Resend
- Balanced emphasis across all sections

## Architecture
- **Frontend**: React 19 + CRA (craco) + Tailwind + shadcn/ui + sonner toasts
- **Backend**: FastAPI + Motor (Mongo) + Resend (transactional email)
- **DB**: MongoDB collection `waitlist` (idempotent on email)
- **Theme**: custom `ThemeProvider` toggling `dark` class on `<html>`
- **Fonts**: Fraunces (serif headlines) + Manrope (body)
- **Brand colors**: Surfie Green #0D7A5F (primary), Pale Sky #67727E (secondary), Athens Gray #F9FAFB (light bg), #071410 (dark bg)

## Implemented (Dec 2025)
- Hero with animated phone mockup (Night Fuel UI), inline waitlist form, App/Play Store CTAs, trust avatars
- Problem section (3 empathetic cards: burnout, inconsistency, tool overwhelm)
- Solution section with rhythm loop (Night/Day/Week)
- How It Works — 3 step cards (Night Fuel dark / Daily Action light / Weekly Wrap muted) with bullets
- Features bento (Nightly Quotes hero + Time-blocks, Energy check-ins, Wins Jar, Gentle recovery)
- Emotional Hook full-width zen-stones background with promise pills
- Testimonials grid (3 cards with Pexels/Unsplash avatars)
- Final CTA card with full waitlist form and store buttons
- Footer with privacy-first messaging, fans@breezee.uk mailto, sitemap columns
- Theme toggle (sun/moon)
- Sonner toasts for form feedback
- Backend: `POST /api/waitlist` (idempotent), `GET /api/waitlist/count`, `_send_admin_notification` via Resend
- All interactive elements expose `data-testid` hooks
- Backend (6 pytest cases) + frontend (24 checks) — 100% pass

## Resend status
- API key configured in `/app/backend/.env`
- Sender = `onboarding@resend.dev` (Resend sandbox)
- ⚠️ Live delivery to `fans@breezee.uk` requires verifying the `breezee.uk` domain at https://resend.com/domains, then updating `SENDER_EMAIL` to a verified address (e.g., `hello@breezee.uk`). Until then, submissions persist to MongoDB but the Resend API call returns "can only send to verified email" — by design we still return success.

## Backlog
### P0
- Verify breezee.uk domain in Resend so live notifications reach fans@breezee.uk

### P1
- Add a confirmation email TO the user (welcome / "you're in" auto-reply)
- FAQ section (currently a nav link without a target)
- Animated section reveals with framer-motion on scroll
- Privacy / Terms pages

### P2
- A/B test 3-5 hero headline variations
- Newsletter integration (ConvertKit/Mailchimp) for ongoing nurture
- Social meta / OG image
- Localization (start with EN-GB)

## Test credentials
N/A — no auth surface in this app.
