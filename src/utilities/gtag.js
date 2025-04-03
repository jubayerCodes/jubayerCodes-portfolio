// lib/gtag.js
export const GA_TRACKING_ID = 'G-9XR6NSLP7X';

// Track page views
export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
        page_path: url,
    });
};

// Track specific events
export const event = ({ action, category, label, value }) => {
    window.gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
    });
};
