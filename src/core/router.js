export const router = {
    init() {
        // Handle hash changes for single-page navigation
        window.addEventListener('hashchange', this.handleRoute.bind(this));
        window.addEventListener('load', this.handleRoute.bind(this));
    },

    handleRoute() {
        const hash = window.location.hash.slice(1);
        if (hash) {
            const target = document.getElementById(hash);
            if (target) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        }
    }
};