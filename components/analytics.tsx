'use client'

import Script from 'next/script'
import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export function GoogleAnalytics() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

  // Only track on client side after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Track page views for Google Analytics
    if (mounted && typeof window !== 'undefined' && window.gtag && gaMeasurementId) {
      try {
        const url = pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : '')
        window.gtag('config', gaMeasurementId, {
          page_path: url,
        })
      } catch (error) {
        // Silently fail if there's an error during tracking
        console.error('GA4 tracking error:', error)
      }
    }
  }, [mounted, pathname, searchParams, gaMeasurementId])

  if (!gaMeasurementId) {
    return null
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaMeasurementId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}

// TypeScript declarations for window objects
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}
