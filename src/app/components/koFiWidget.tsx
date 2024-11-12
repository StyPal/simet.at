"use client"; // Ensure client-side rendering

import { useEffect } from 'react';

declare global {
    interface Window {
        kofiWidgetOverlay?: any;
    }
}

const KofiWidget = () => {
    useEffect(() => {
        // Function to update the Ko-fi widget with appropriate colors
        const updateKofiWidget = () => {
            const rootStyles = getComputedStyle(document.documentElement);

            // Define colors based on the theme
            const backgroundColor = rootStyles.getPropertyValue("--blue").trim();
            const textColor = rootStyles.getPropertyValue("--white").trim();

            // Set up the Ko-fi widget with the latest theme colors
            if (typeof window !== 'undefined' && window.kofiWidgetOverlay) {
                window.kofiWidgetOverlay.draw('simetmoritz', {
                    type: 'floating-chat',
                    'floating-chat.donateButton.text': 'Tip Me',
                    'floating-chat.donateButton.background-color': backgroundColor,
                    'floating-chat.donateButton.text-color': textColor,
                });
            }
        };

        // Load the external Ko-fi script
        const script = document.createElement('script');
        script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
        script.async = true;

        // Append the script to the document head
        document.head.appendChild(script);

        // Set up the Ko-fi widget initially once the script is loaded
        script.onload = () => updateKofiWidget();

        // Listen for dark mode changes and update the widget when it changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', updateKofiWidget);

        // Cleanup: remove script and event listener on component unmount
        return () => {
            document.head.removeChild(script);
            mediaQuery.removeEventListener('change', updateKofiWidget);
        };
    }, []);

    return null; // No visible content, so return null
};

export default KofiWidget;
