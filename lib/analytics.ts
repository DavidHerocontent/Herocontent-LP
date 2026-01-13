/**
 * Google Analytics 4 Event Tracking Utility
 * 
 * This utility provides functions to track custom events in GA4.
 * All events follow GA4 recommended event naming conventions.
 */

// Track a custom event in Google Analytics
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window === 'undefined') {
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
 */
export const trackLeadFormSubmit = (businessType?: string) => {
  if (typeof window === 'undefined') {
    return
  }
  trackEvent('lead_form_submit', {
    form_name: 'contact',
    business_type: businessType || 'unknown',
    page_path: window.location.pathname,
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

// TypeScript declaration for window.gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}
