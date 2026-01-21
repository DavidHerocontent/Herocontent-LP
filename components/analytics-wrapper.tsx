'use client'

import dynamic from 'next/dynamic'

const GoogleAnalytics = dynamic(
  () => import('@/components/analytics').then((mod) => ({ default: mod.GoogleAnalytics })),
  { ssr: false }
)

/**
 * Analytics Wrapper Component
 * 
 * Only loads Google Analytics in production environment to prevent
 * development traffic from polluting analytics data.
 */
export function AnalyticsWrapper() {
  // Skip analytics in development to avoid polluting data
  if (process.env.NODE_ENV !== 'production') {
    return null
  }
  
  return <GoogleAnalytics />
}
