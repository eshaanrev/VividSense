export function Contact() {
    return `
        <section id="contact" class="contact">
            <div class="container">
                <div class="section-header fade-up">
                    <h2 class="section-title">Get in Touch</h2>
                    <p class="section-description">
                        Ready to learn more or get involved? We'd love to hear from you
                    </p>
                </div>
                
                <div class="contact-content">
                    <div class="contact-info fade-up">
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i data-lucide="mail"></i>
                            </div>
                            <h4>Email Us</h4>
                            <p>Get in touch for partnerships, support, or general inquiries</p>
                            <a href="mailto:hello@vividsense.org" class="contact-link">
                                hello@vividsense.org
                            </a>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i data-lucide="github"></i>
                            </div>
                            <h4>Open Source</h4>
                            <p>Explore our code and contribute to the project</p>
                            <a href="https://github.com/0825eshaan/vividsense" 
                               target="_blank" 
                               class="contact-link">
                                View on GitHub
                                <i data-lucide="external-link"></i>
                            </a>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-icon">
                                <i data-lucide="youtube"></i>
                            </div>
                            <h4>Watch & Learn</h4>
                            <p>See our products in action and learn more about our mission</p>
                            <a href="https://www.youtube.com/channel/UCce25dALBU-FBtp3x4Mviig" 
                               target="_blank" 
                               class="contact-link">
                                YouTube Channel
                                <i data-lucide="external-link"></i>
                            </a>
                        </div>
                    </div>
                    
                    <div class="contact-form-container fade-up">
                        <form class="contact-form">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" id="name" name="name" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" name="email" required>
                            </div>
                            
                            <div class="form-group">
                                <label for="subject">Subject</label>
                                <select id="subject" name="subject" required>
                                    <option value="">Select a topic</option>
                                    <option value="product">Product Inquiry</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="investment">Investment</option>
                                    <option value="support">Support</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            
                            <div class="form-group">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="5" required></textarea>
                            </div>
                            
                            <button type="submit" class="btn btn-primary">
                                Send Message
                                <i data-lucide="send"></i>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    `;
}