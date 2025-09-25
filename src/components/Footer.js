export function Footer() {
    return `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-main">
                        <div class="footer-brand">
                            <div class="logo">
                                <span class="logo-text">VividSense</span>
                            </div>
                            <p class="footer-description">
                                Empowering accessibility through innovative, affordable assistive technology.
                            </p>
                            <div class="footer-social">
                                <a href="https://github.com/0825eshaan/vividsense" 
                                   target="_blank" 
                                   aria-label="GitHub">
                                    <i data-lucide="github"></i>
                                </a>
                                <a href="https://www.youtube.com/channel/UCce25dALBU-FBtp3x4Mviig" 
                                   target="_blank" 
                                   aria-label="YouTube">
                                    <i data-lucide="youtube"></i>
                                </a>
                                <a href="https://docs.google.com/presentation/d/1mtiMjMDU8-jYf_7-Orw9O-npHBNfqMqUWHXhsucdwM4/edit" 
                                   target="_blank" 
                                   aria-label="Presentation">
                                    <i data-lucide="presentation"></i>
                                </a>
                            </div>
                        </div>
                        
                        <div class="footer-links">
                            <div class="footer-column">
                                <h4>Product</h4>
                                <ul>
                                    <li><a href="#products">The Surrounding Scanner</a></li>
                                    <li><a href="#technology">Technology</a></li>
                                    <li><a href="#impact">Pricing</a></li>
                                    <li><a href="#contact">Support</a></li>
                                </ul>
                            </div>
                            
                            <div class="footer-column">
                                <h4>Company</h4>
                                <ul>
                                    <li><a href="#about">About Us</a></li>
                                    <li><a href="#timeline">Timeline</a></li>
                                    <li><a href="#team">Careers</a></li>
                                    <li><a href="#contact">Contact</a></li>
                                </ul>
                            </div>
                            
                            <div class="footer-column">
                                <h4>Resources</h4>
                                <ul>
                                    <li><a href="https://github.com/0825eshaan/vividsense" target="_blank">Open Source</a></li>
                                    <li><a href="https://www.tinkercad.com/things/8GJaLu0PdzS-the-surrounding-scanner-externals" target="_blank">3D Models</a></li>
                                    <li><a href="#technology">Documentation</a></li>
                                    <li><a href="#contact">Community</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div class="footer-bottom">
                        <div class="footer-copyright">
                            <p>&copy; 2025 VividSense. All rights reserved.</p>
                        </div>
                        <div class="footer-legal">
                            <a href="#privacy">Privacy Policy</a>
                            <a href="#terms">Terms of Service</a>
                            <a href="#accessibility">Accessibility</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;
}