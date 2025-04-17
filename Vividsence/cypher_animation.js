const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";

// Apply effect to all elements with the 'cypher' class
document.querySelectorAll(".cypher").forEach((element) => {
    element.dataset.value = element.innerText.trim(); // Store original text

    element.addEventListener("mouseover", (event) => {
        let iterations = 0;
        
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
            }

            iterations += 1 / 4; // Adjusts reveal speed
        }, 30);
    });
});