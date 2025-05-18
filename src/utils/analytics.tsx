
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Analytics event types
export type AnalyticsEvent = {
  category: string;
  action: string;
  label?: string;
  value?: number;
};

// Send pageview to Google Analytics
export const trackPageView = (path: string): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-MEASUREMENT_ID', {
      page_path: path,
    });
    console.log(`Analytics: Pageview tracked for ${path}`);
  }
};

// Send custom event to Google Analytics
export const trackEvent = (event: AnalyticsEvent): void => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value,
    });
    console.log(`Analytics: Event tracked - ${event.category}, ${event.action}, ${event.label}`);
  }
};

// React hook for automatic page view tracking
export const useAnalyticsTracking = (): void => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname + location.search);
  }, [location]);
};

// Analytics Provider component to automatically track page views
export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  useAnalyticsTracking();
  return <>{children}</>;
};

// Hook to track how far users scroll down a page
export const useScrollDepthTracking = (thresholds = [25, 50, 75, 100]): void => {
  useEffect(() => {
    let trackedThresholds: number[] = [];
    
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercentage = (scrollTop / docHeight) * 100;
      
      thresholds.forEach(threshold => {
        if (scrollPercentage >= threshold && !trackedThresholds.includes(threshold)) {
          trackEvent({
            category: 'Scroll Depth',
            action: 'Percentage',
            label: `Scrolled ${threshold}%`,
            value: threshold
          });
          trackedThresholds.push(threshold);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [thresholds]);
};
