import { createApp } from './core/app.js';
import { router } from './core/router.js';
import { themeManager } from './core/theme.js';

// Initialize theme
themeManager.init();

// Initialize app
const app = createApp();
app.init();

// Initialize router
router.init();

// Add smooth scrolling
document.documentElement.style.scrollBehavior = 'smooth';

// Add loading animation
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 500);
    }
});