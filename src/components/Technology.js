export function Technology() {
    return `
        <section id="technology" class="technology">
            <div class="container">
                <div class="section-header fade-up">
                    <h2 class="section-title">Technology & Innovation</h2>
                    <p class="section-description">
                        Precision engineering meets practical application
                    </p>
                </div>
                
                <div class="technology-content">
                    <div class="tech-overview fade-up">
                        <div class="tech-visual">
                            <div class="tech-diagram">
                                <div class="tech-component" data-component="sensor">
                                    <div class="component-icon">
                                        <i data-lucide="radio"></i>
                                    </div>
                                    <div class="component-label">Ultrasonic Sensor</div>
                                </div>
                                
                                <div class="tech-component" data-component="processor">
                                    <div class="component-icon">
                                        <i data-lucide="cpu"></i>
                                    </div>
                                    <div class="component-label">Arduino Processor</div>
                                </div>
                                
                                <div class="tech-component" data-component="speaker">
                                    <div class="component-icon">
                                        <i data-lucide="volume-2"></i>
                                    </div>
                                    <div class="component-label">Piezo Speaker</div>
                                </div>
                                
                                <div class="tech-component" data-component="battery">
                                    <div class="component-icon">
                                        <i data-lucide="battery"></i>
                                    </div>
                                    <div class="component-label">Power System</div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="tech-details">
                            <h3>How It Works</h3>
                            <div class="tech-steps">
                                <div class="tech-step">
                                    <div class="step-number">1</div>
                                    <div class="step-content">
                                        <h4>Detection</h4>
                                        <p>Ultrasonic sensor emits sound waves to detect obstacles within 60 inches</p>
                                    </div>
                                </div>
                                
                                <div class="tech-step">
                                    <div class="step-number">2</div>
                                    <div class="step-content">
                                        <h4>Processing</h4>
                                        <p>Arduino processes distance data and determines appropriate audio response</p>
                                    </div>
                                </div>
                                
                                <div class="tech-step">
                                    <div class="step-number">3</div>
                                    <div class="step-content">
                                        <h4>Feedback</h4>
                                        <p>Piezo speaker provides varying tones based on proximity to obstacles</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="tech-specs fade-up">
                        <h3>Technical Specifications</h3>
                        <div class="specs-grid">
                            <div class="spec-item">
                                <div class="spec-icon">
                                    <i data-lucide="ruler"></i>
                                </div>
                                <div class="spec-content">
                                    <h4>Detection Range</h4>
                                    <p>2-60 inches with 5 proximity zones</p>
                                </div>
                            </div>
                            
                            <div class="spec-item">
                                <div class="spec-icon">
                                    <i data-lucide="zap"></i>
                                </div>
                                <div class="spec-content">
                                    <h4>Response Time</h4>
                                    <p>Real-time feedback at 5-6 cycles per second</p>
                                </div>
                            </div>
                            
                            <div class="spec-item">
                                <div class="spec-icon">
                                    <i data-lucide="battery"></i>
                                </div>
                                <div class="spec-content">
                                    <h4>Battery Life</h4>
                                    <p>Extended usage with energy-efficient design</p>
                                </div>
                            </div>
                            
                            <div class="spec-item">
                                <div class="spec-icon">
                                    <i data-lucide="feather"></i>
                                </div>
                                <div class="spec-content">
                                    <h4>Weight</h4>
                                    <p>Lightweight and comfortable for all-day wear</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="future-tech fade-up">
                        <h3>Future Innovations</h3>
                        <div class="future-grid">
                            <div class="future-item">
                                <div class="future-icon">
                                    <i data-lucide="brain"></i>
                                </div>
                                <h4>AI Integration</h4>
                                <p>Object recognition and classification using Raspberry Pi 5</p>
                            </div>
                            
                            <div class="future-item">
                                <div class="future-icon">
                                    <i data-lucide="minimize-2"></i>
                                </div>
                                <h4>Miniaturization</h4>
                                <p>Smaller, more portable design for enhanced convenience</p>
                            </div>
                            
                            <div class="future-item">
                                <div class="future-icon">
                                    <i data-lucide="target"></i>
                                </div>
                                <h4>Enhanced Accuracy</h4>
                                <p>Improved distance tracking and object detection precision</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
}