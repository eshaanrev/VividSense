window.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline();

  tl.to(".intro-text", { opacity: 1, duration: 1, ease: "power2.out" }) // Fade in text
    .to(".intro-text", { opacity: 0, duration: 1 }) // Fade out text
    .to(".intro-overlay", { opacity: 0, duration: 1, ease: "power2.out" }) // Fade out background
    .set(".intro-overlay", { display: "none" }) // Remove overlay from layout
    .to(".content", { opacity: 1, duration: 1.5, ease: "power2.out" }); // Reveal main content
});
