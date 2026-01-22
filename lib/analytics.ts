/**
 * Analytics Event Tracking Utility
 * 
 * This utility provides functions to track custom events in:
 * - Google Analytics 4 (GA4)
 * - Meta Pixel (Facebook)
 * 
 * All events follow platform-specific naming conventions.
 * Analytics only fire in production environment.
 */

const isProduction = process.env.NODE_ENV === 'production'

// Track a custom event in Google Analytics
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window === 'undefined' || !isProduction) {
    return
  }

  // Check if gtag is available
  if (window.gtag) {
    window.gtag('event', eventName, {
      ...parameters,
      // Add timestamp for debugging
      event_timestamp: new Date().toISOString(),
    })
  }
}

// Track a Meta Pixel event
export const trackMetaPixelEvent = (
  eventName: string,
  parameters?: Record<string, string | number>
) => {
  if (typeof window === 'undefined' || !isProduction) {
    return
  }

  if (window.fbq) {
    if (parameters) {
      window.fbq('track', eventName, parameters)
    } else {
      window.fbq('track', eventName)
    }
  }
}

// Specific event tracking functions for common actions

/**
 * Track when a lead form (contact dialog) is opened
 */
export const trackLeadFormOpen = (source?: string) => {
  if (typeof window === 'undefined') {
    return
  }
  trackEvent('lead_form_open', {
    form_name: 'contact',
    source: source || 'unknown',
    page_path: window.location.pathname,
  })
}

/**
 * Track when a lead form is successfully submitted
 * Fires both GA4 and Meta Pixel Lead events
 */
export const trackLeadFormSubmit = (businessType?: string) => {
  if (typeof window === 'undefined') {
    return
  }

  // Google Analytics event
  trackEvent('lead_form_submit', {
    form_name: 'contact',
    business_type: businessType || 'unknown',
    page_path: window.location.pathname,
  })

  // Meta Pixel Lead conversion
  trackMetaPixelEvent('Lead', {
    content_name: 'contact_form',
    content_category: businessType || 'landing',
  })
}

/**
 * Track when registration form page is viewed
 */
export const trackRegistrationFormOpen = () => {
  if (typeof window === 'undefined') {
    return
  }
  trackEvent('registration_form_open', {
    page_path: window.location.pathname,
  })
}

/**
 * Track when registration is completed successfully
 */
export const trackRegistrationComplete = (restaurantName?: string) => {
  if (typeof window === 'undefined') {
    return
  }
  trackEvent('registration_complete', {
    restaurant_name: restaurantName || 'unknown',
    page_path: window.location.pathname,
  })
}

// TypeScript declarations for analytics
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    fbq: (...args: any[]) => void
  }
}
