export function Hero() {
    return `
        <section id="home" class="hero">
            <div class="hero-background">
                <div class="hero-gradient"></div>
                <div class="hero-pattern"></div>
            </div>
            
            <div class="container">
                <div class="hero-content">
                    <div class="hero-text fade-up">
                        <h1 class="hero-title">
                            Empowering <span class="gradient-text">Accessibility</span>
                            <br>Through Innovation
                        </h1>
                        <p class="hero-description">
                            VividSense creates affordable, cutting-edge assistive technology products 
                            that enhance mobility and independence for the visually impaired community.
                        </p>
                        <div class="hero-actions">
                            <a href="#products" class="btn btn-primary">
                                Explore Products
                                <i data-lucide="arrow-right"></i>
                            </a>
                            <a href="#about" class="btn btn-secondary">
                                Learn More
                            </a>
                        </div>
                        <div class="hero-stats">
                            <div class="stat">
                                <div class="stat-number">$35</div>
                                <div class="stat-label">Starting Price</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">48%</div>
                                <div class="stat-label">Profit Margin</div>
                            </div>
                            <div class="stat">
                                <div class="stat-number">85%</div>
                                <div class="stat-label">Reinvested in R&D</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="hero-visual fade-up">
                        <div class="hero-image">
                            <img src="https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                 alt="Person using assistive technology" 
                                 class="hero-img">
                            <div class="hero-image-overlay">
                                <div class="floating-card">
                                    <i data-lucide="eye"></i>
                                    <span>Enhanced Vision</span>
                                </div>
                                <div class="floating-card">
                                    <i data-lucide="volume-2"></i>
                                    <span>Audio Feedback</span>
                                </div>
                                <div class="floating-card">
                                    <i data-lucide="zap"></i>
                                    <span>Real-time Detection</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}