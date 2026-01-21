# Page Swap Configuration

This document explains the current page configuration and how to switch between different landing page variants.

## Current Configuration

| URL Path | Content Displayed | Purpose |
|----------|------------------|---------|
| `/` | `LandingPageContent` | Meta Ads traffic (lead generation focused) |
| `/landing` | `LandingPageContent` | Direct access to landing page |

The root path (`/`) currently displays the **simplified landing page** optimized for Meta Ads traffic. This version features:
- "12 free posts" offer prominently in the hero section
- Simplified contact form (no business type dropdown)
- All CTAs lead to the contact form dialog
- Privacy policy checkbox in the form

## File Locations

| Component | File Path | Description |
|-----------|-----------|-------------|
| `LandingPageContent` | `components/pages/landing-page-content.tsx` | Simplified landing page for Meta Ads |
| `MainPageContent` | `components/pages/main-page-content.tsx` | Original full-featured main page |
| Root page | `app/page.tsx` | Thin wrapper that imports the content component |
| Landing page | `app/landing/page.tsx` | Thin wrapper for /landing route |

## How to Revert to Original Main Page

To restore the original main page at `/`, edit `app/page.tsx`:

### Current (Landing page at root):

```tsx
import { LandingPageContent } from "@/components/pages/landing-page-content"

export default function Home() {
  return <LandingPageContent />
}
```

### Reverted (Original main page at root):

```tsx
import { MainPageContent } from "@/components/pages/main-page-content"

export default function Home() {
  return <MainPageContent />
}
```

## Key Differences Between Page Variants

### LandingPageContent (Current at `/`)
- Hero section: "12 free posts" offer with showcase images
- Header: No login button, no WhatsApp button
- CTAs: All buttons open contact form dialog
- Contact form: Simple form with privacy policy checkbox, no business type dropdown
- Analytics tracking: `trackLeadFormOpen('landing_page')`

### MainPageContent (Original)
- Hero section: Photo + AI transformation visual with video output
- Header: WhatsApp button, Login button, "Try for free" links to `/registration`
- CTAs: Some link to `/registration`, some to contact form
- Contact form: Full form with business type dropdown
- Analytics tracking: `trackLeadFormOpen('main_page')`

## Why This Approach?

1. **Zero redirects**: Direct content rendering is optimal for Meta Ads (no speed penalty)
2. **Full code preservation**: Both page variants remain fully functional
3. **One-line revert**: Simply change the import statement
4. **Clean architecture**: Routing logic separated from page content
5. **Git-friendly**: Clear history of what changed and why

## Maintenance Notes

- Both `LandingPageContent` and `MainPageContent` are fully self-contained components
- Changes to shared UI (pricing, features, etc.) should be made in both components if desired
- Consider extracting shared sections to separate components if divergence becomes difficult to manage
