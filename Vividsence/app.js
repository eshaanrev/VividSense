const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target.classList.contains('hidden')) {
                entry.target.classList.add('show'); // Action for .hidden elements
            }
            if (entry.target.classList.contains('animate')) {
                entry.target.classList.add('active'); // Action for .animate elements
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
}, { rootMargin: "0px 0px" });

// Select elements with different classes
const elements = document.querySelectorAll('.hidden, .animate');
elements.forEach((el) => observer.observe(el));
