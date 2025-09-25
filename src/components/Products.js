export function Products() {
    return `
        <section id="products" class="products">
            <div class="container">
                <div class="section-header fade-up">
                    <h2 class="section-title">Our Products</h2>
                    <p class="section-description">
                        Innovative solutions designed with purpose and precision
                    </p>
                </div>
                
                <div class="products-content">
                    <div class="product-showcase fade-up">
                        <div class="product-image">
                            <img src="https://images.pexels.com/photos/8566464/pexels-photo-8566464.jpeg?auto=compress&cs=tinysrgb&w=800" 
                                 alt="The Surrounding Scanner" 
                                 class="product-img">
                            <div class="product-badge">
                                <span>Featured Product</span>
                            </div>
                        </div>
                        
                        <div class="product-info">
                            <h3 class="product-title">The Surrounding Scanner</h3>
                            <p class="product-subtitle">Awareness Made Accessible</p>
                            
                            <div class="product-description">
                                <p>
                                    A cost-effective solution for enhancing mobility and independence 
                                    of the visually impaired. Using advanced ultrasonic technology, 
                                    our glasses detect nearby obstacles and alert the wearer via 
                                    audio feedback.
                                </p>
                            </div>
                            
                            <div class="product-features">
                                <div class="feature-item">
                                    <i data-lucide="radio"></i>
                                    <span>Ultrasonic Detection</span>
                                </div>
                                <div class="feature-item">
                                    <i data-lucide="volume-2"></i>
                                    <span>Audio Feedback</span>
                                </div>
                                <div class="feature-item">
                                    <i data-lucide="battery"></i>
                                    <span>Long Battery Life</span>
                                </div>
                                <div class="feature-item">
                                    <i data-lucide="smartphone"></i>
                                    <span>Lightweight Design</span>
                                </div>
                            </div>
                            
                            <div class="product-pricing">
                                <div class="price">
                                    <span class="price-label">Starting from</span>
                                    <span class="price-amount">$35.00</span>
                                </div>
                                <div class="product-actions">
                                    <a href="#contact" class="btn btn-primary">
                                        Get Started
                                        <i data-lucide="arrow-right"></i>
                                    </a>
                                    <a href="#technology" class="btn btn-outline">
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="product-comparison fade-up">
                        <h4>How We Compare</h4>
                        <div class="comparison-table">
                            <div class="comparison-header">
                                <div class="comparison-cell"></div>
                                <div class="comparison-cell highlight">The Surrounding Scanner</div>
                                <div class="comparison-cell">Traditional Cane</div>
                                <div class="comparison-cell">Guide Dog</div>
                            </div>
                            
                            <div class="comparison-row">
                                <div class="comparison-cell label">Impact</div>
                                <div class="comparison-cell highlight">High</div>
                                <div class="comparison-cell">Low</div>
                                <div class="comparison-cell">Medium</div>
                            </div>
                            
                            <div class="comparison-row">
                                <div class="comparison-cell label">Price</div>
                                <div class="comparison-cell highlight">$35</div>
                                <div class="comparison-cell">~$70</div>
                                <div class="comparison-cell">~$2000/year</div>
                            </div>
                            
                            <div class="comparison-row">
                                <div class="comparison-cell label">Lifespan</div>
                                <div class="comparison-cell highlight">10 Years</div>
                                <div class="comparison-cell">2 Years</div>
                                <div class="comparison-cell">8 Years</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}