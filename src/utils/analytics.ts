
// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views
export const trackPageView = (url: string, title?: string) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: url,
      page_title: title,
    });
  }
};

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true) => {
  trackEvent('form_submit', 'engagement', formName, success ? 1 : 0);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('click', 'engagement', `${buttonName}_${location}`);
};

// Track file downloads
export const trackDownload = (fileName: string, fileType: string) => {
  trackEvent('download', 'engagement', `${fileName}.${fileType}`);
};

// Track external link clicks
export const trackExternalLink = (url: string, linkText: string) => {
  trackEvent('click', 'external_link', `${linkText}_${url}`);
};

// Track user engagement time
export const trackEngagementTime = (timeSpent: number, pageName: string) => {
  trackEvent('engagement_time', 'user_behavior', pageName, Math.round(timeSpent));
};

// Track scroll depth
export const trackScrollDepth = (percentage: number, pageName: string) => {
  trackEvent('scroll', 'user_behavior', `${pageName}_${percentage}%`);
};
