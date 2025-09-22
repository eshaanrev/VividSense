const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*";

// Apply effect to all elements with the 'cypher' class
document.querySelectorAll(".cypher").forEach((element) => {
    element.dataset.value = element.innerText.trim(); // Store original text

    element.addEventListener("mouseover", (event) => {
        let iterations = 0;
        
        // Add glow effect
        event.target.style.textShadow = "0 0 10px rgba(0, 212, 255, 0.8)";
        event.target.style.color = "#00d4ff";
        
        const interval = setInterval(() => {
            event.target.innerText = event.target.dataset.value
                .split("")
                .map((letter, index) => {
                    if (index < iterations) {
                        return event.target.dataset.value[index]; // Reveal original text gradually
                    }
                    return letters[Math.floor(Math.random() * letters.length)];
                })
                .join("");

            if (iterations >= event.target.dataset.value.length) {
                clearInterval(interval);
                // Reset styles after animation
                setTimeout(() => {
                    event.target.style.textShadow = "";
                    event.target.style.color = "";
                }, 200);
            }

            iterations += 1 / 3; // Slightly faster reveal speed
        }, 25); // Faster animation
    });
    
    // Add mouse leave effect
    element.addEventListener("mouseleave", (event) => {
        event.target.style.textShadow = "";
        event.target.style.color = "";
    });
});