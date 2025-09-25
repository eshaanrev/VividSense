import { Header } from '../components/Header.js';
import { Hero } from '../components/Hero.js';
import { About } from '../components/About.js';
import { Products } from '../components/Products.js';
import { Technology } from '../components/Technology.js';
import { Impact } from '../components/Impact.js';
import { Timeline } from '../components/Timeline.js';
import { Team } from '../components/Team.js';
import { Contact } from '../components/Contact.js';
import { Footer } from '../components/Footer.js';

export function createApp() {
    return {
        init() {
            this.render();
            this.initializeComponents();
            this.setupIntersectionObserver();
        },

        render() {
            const app = document.getElementById('app');
            app.innerHTML = `
                <div class="loader">
                    <div class="loader-content">
                        <div class="loader-logo">VividSense</div>
                        <div class="loader-spinner"></div>
                    </div>
                </div>
                
                ${Header()}
                
                <main>
                    ${Hero()}
                    ${About()}
                    ${Products()}
                    ${Technology()}
                    ${Impact()}
                    ${Timeline()}
                    ${Team()}
                    ${Contact()}
                </main>
                
                ${Footer()}
            `;
        },

        initializeComponents() {
            // Initialize mobile menu
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            const mobileMenu = document.querySelector('.mobile-menu');
            const mobileMenuClose = document.querySelector('.mobile-menu-close');

            if (mobileMenuBtn && mobileMenu) {
                mobileMenuBtn.addEventListener('click', () => {
                    mobileMenu.classList.add('active');
                    document.body.style.overflow = 'hidden';
                });

                mobileMenuClose?.addEventListener('click', () => {
                    mobileMenu.classList.remove('active');
                    document.body.style.overflow = '';
                });

                // Close on link click
                mobileMenu.querySelectorAll('a').forEach(link => {
                    link.addEventListener('click', () => {
                        mobileMenu.classList.remove('active');
                        document.body.style.overflow = '';
                    });
                });
            }

            // Initialize smooth scrolling for navigation links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', (e) => {
                    e.preventDefault();
                    const target = document.querySelector(anchor.getAttribute('href'));
                    if (target) {
                        const headerHeight = document.querySelector('header').offsetHeight;
                        const targetPosition = target.offsetTop - headerHeight - 20;
                        
                        window.scrollTo({
                            top: targetPosition,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Initialize contact form
            const contactForm = document.querySelector('.contact-form');
            if (contactForm) {
                contactForm.addEventListener('submit', (e) => {
                    e.preventDefault();
                    // Handle form submission
                    const formData = new FormData(contactForm);
                    console.log('Form submitted:', Object.fromEntries(formData));
                    
                    // Show success message
                    const submitBtn = contactForm.querySelector('button[type="submit"]');
                    const originalText = submitBtn.textContent;
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.disabled = true;
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        contactForm.reset();
                    }, 3000);
                });
            }
        },

        setupIntersectionObserver() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, observerOptions);

            // Observe all elements with animation classes
            document.querySelectorAll('.fade-up, .fade-in, .slide-in-left, .slide-in-right').forEach(el => {
                observer.observe(el);
            });
        }
    };
}