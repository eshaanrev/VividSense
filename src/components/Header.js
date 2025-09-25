export function Header() {
    return `
        <header class="header">
            <div class="container">
                <div class="header-content">
                    <div class="logo">
                        <a href="#home">
                            <span class="logo-text">VividSense</span>
                        </a>
                    </div>
                    
                    <nav class="nav">
                        <a href="#about" class="nav-link">About</a>
                        <a href="#products" class="nav-link">Products</a>
                        <a href="#technology" class="nav-link">Technology</a>
                        <a href="#impact" class="nav-link">Impact</a>
                        <a href="#timeline" class="nav-link">Timeline</a>
                        <a href="#team" class="nav-link">Team</a>
                        <a href="#contact" class="nav-link">Contact</a>
                    </nav>
                    
                    <div class="header-actions">
                        <button class="theme-toggle" aria-label="Toggle theme">
                            <i data-lucide="moon"></i>
                        </button>
                        <button class="mobile-menu-btn" aria-label="Open menu">
                            <i data-lucide="menu"></i>
                        </button>
                    </div>
                </div>
            </div>
            
            <div class="mobile-menu">
                <div class="mobile-menu-header">
                    <div class="logo">
                        <span class="logo-text">VividSense</span>
                    </div>
                    <button class="mobile-menu-close" aria-label="Close menu">
                        <i data-lucide="x"></i>
                    </button>
                </div>
                <nav class="mobile-nav">
                    <a href="#about" class="mobile-nav-link">About</a>
                    <a href="#products" class="mobile-nav-link">Products</a>
                    <a href="#technology" class="mobile-nav-link">Technology</a>
                    <a href="#impact" class="mobile-nav-link">Impact</a>
                    <a href="#timeline" class="mobile-nav-link">Timeline</a>
                    <a href="#team" class="mobile-nav-link">Team</a>
                    <a href="#contact" class="mobile-nav-link">Contact</a>
                </nav>
            </div>
        </header>
    `;
}