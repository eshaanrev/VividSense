// Modern interactive effects for VividSense website

// Smooth scroll with easing
document.addEventListener('DOMContentLoaded', function() {
    // Add floating animation to product images
    const productImages = document.querySelectorAll('.productimage');
    productImages.forEach(img => {
        img.classList.add('floating');
    });

    // Add glow effect to interactive elements
    const interactiveElements = document.querySelectorAll('.icon, .timeline-content, table tr');
    interactiveElements.forEach(el => {
        el.classList.add('glow-on-hover');
    });

    // Parallax effect for background elements
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const parallaxBg = document.querySelector('.parallax-bg');
        
        if (parallaxBg) {
            const yPos = -(scrolled * 0.5);
            parallaxBg.style.transform = `translateY(${yPos}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);

    // Enhanced cursor trail effect
    const cursor = document.createElement('div');
    cursor.className = 'cursor-trail';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0, 212, 255, 0.8) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX - 10 + 'px';
        cursor.style.top = e.clientY - 10 + 'px';
    });

    // Hide cursor trail on mobile
    if (window.innerWidth <= 768) {
        cursor.style.display = 'none';
    }

    // Add stagger animation to text elements
    const textElements = document.querySelectorAll('.text, .tinytext');
    textElements.forEach((el, index) => {
        el.style.animationDelay = `${index * 0.1}s`;
    });

    // Enhanced intersection observer with more dynamic effects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('hidden')) {
                    entry.target.classList.add('show');
                    
                    // Add extra effects for special elements
                    if (entry.target.classList.contains('heading')) {
                        setTimeout(() => {
                            entry.target.style.transform = 'translateY(0) scale(1.02)';
                            setTimeout(() => {
                                entry.target.style.transform = 'translateY(0) scale(1)';
                            }, 200);
                        }, 500);
                    }
                }
                if (entry.target.classList.contains('animate')) {
                    entry.target.classList.add('active');
                }
            } else {
                if (entry.target.classList.contains('hidden')) {
                    entry.target.classList.remove('show');
                }
                if (entry.target.classList.contains('animate')) {
                    entry.target.classList.remove('active');
                }
            }
        });
    }, observerOptions);

    // Observe elements
    const elements = document.querySelectorAll('.hidden, .animate');
    elements.forEach((el) => observer.observe(el));

    // Add magnetic effect to buttons and interactive elements
    const magneticElements = document.querySelectorAll('.menu-icon, #theme-switcher, .sidebar a');
    
    magneticElements.forEach(el => {
        el.addEventListener('mousemove', (e) => {
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            el.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        el.addEventListener('mouseleave', () => {
            el.style.transform = '';
        });
    });

    // Add ripple effect to clickable elements
    function createRipple(event) {
        const button = event.currentTarget;
        const circle = document.createElement('span');
        const diameter = Math.max(button.clientWidth, button.clientHeight);
        const radius = diameter / 2;

        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - button.offsetLeft - radius}px`;
        circle.style.top = `${event.clientY - button.offsetTop - radius}px`;
        circle.classList.add('ripple');

        const rippleCSS = `
            .ripple {
                position: absolute;
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 600ms linear;
                background-color: rgba(0, 212, 255, 0.3);
                pointer-events: none;
            }
            @keyframes ripple {
                to {
                    transform: scale(4);
                    opacity: 0;
                }
            }
        `;

        if (!document.querySelector('#ripple-styles')) {
            const style = document.createElement('style');
            style.id = 'ripple-styles';
            style.textContent = rippleCSS;
            document.head.appendChild(style);
        }

        const ripples = button.getElementsByClassName('ripple');
        if (ripples.length > 0) {
            ripples[0].remove();
        }

        button.appendChild(circle);
    }

    const rippleElements = document.querySelectorAll('.sidebar a, #theme-switcher, .menu-icon');
    rippleElements.forEach(el => {
        el.style.position = 'relative';
        el.style.overflow = 'hidden';
        el.addEventListener('click', createRipple);
    });

    // Add smooth reveal animation for page load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add loading animation
window.addEventListener('load', () => {
    const loadingOverlay = document.createElement('div');
    loadingOverlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #0a0a0a 0%, #111111 100%);
        z-index: 10000;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.5s ease;
    `;
    
    const loader = document.createElement('div');
    loader.style.cssText = `
        width: 50px;
        height: 50px;
        border: 3px solid rgba(0, 212, 255, 0.3);
        border-top: 3px solid #00d4ff;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    `;
    
    const spinCSS = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    
    const style = document.createElement('style');
    style.textContent = spinCSS;
    document.head.appendChild(style);
    
    loadingOverlay.appendChild(loader);
    document.body.appendChild(loadingOverlay);
    
    setTimeout(() => {
        loadingOverlay.style.opacity = '0';
        setTimeout(() => {
            loadingOverlay.remove();
        }, 500);
    }, 1000);
});