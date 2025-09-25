import { createApp } from './core/app.js';
import { router } from './core/router.js';
import { themeManager } from './core/theme.js';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize theme first
    themeManager.init();

    // Initialize app
    const app = createApp();
    app.init();

    // Initialize router
    router.init();

    // Add smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Initialize Lucide icons after everything is loaded
    if (window.lucide) {
        lucide.createIcons();
    }
});

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            if (loader.parentNode) {
                loader.remove();
            }
        }, 500);
    }
    
    // Re-initialize icons after page load
    setTimeout(() => {
        if (window.lucide) {
            lucide.createIcons();
        }
    }, 100);
});
