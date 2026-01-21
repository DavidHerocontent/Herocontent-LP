/**
 * Landing Page (/landing)
 * 
 * This route provides direct access to the LandingPageContent.
 * The same content is currently also displayed at "/" for Meta Ads traffic.
 * 
 * See docs/PAGE_SWAP.md for configuration details.
 */

import { LandingPageContent } from "@/components/pages/landing-page-content"

export default function LandingPage() {
  return <LandingPageContent />
}
