/**
 * Root Index Page (/)
 * 
 * CURRENT CONFIGURATION: Displays the LandingPageContent (simplified version for Meta Ads)
 * 
 * This is the entry point for Meta Ads traffic targeting "/".
 * The landing page content is optimized for lead generation with:
 * - "12 free posts" offer in hero section
 * - Simplified contact form (no business type dropdown)
 * - All CTAs lead to contact form dialog
 * 
 * TO REVERT TO ORIGINAL MAIN PAGE:
 * Change the import from LandingPageContent to MainPageContent:
 * 
 * import { MainPageContent } from "@/components/pages/main-page-content"
 * 
 * export default function Home() {
 *   return <MainPageContent />
 * }
 * 
 * See docs/PAGE_SWAP.md for more details.
 */

import { LandingPageContent } from "@/components/pages/landing-page-content"

export default function Home() {
  return <LandingPageContent />
}
