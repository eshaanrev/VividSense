window.addEventListener("DOMContentLoaded", () => {
  let tl = gsap.timeline();

  tl.to(".intro-text", { 
      opacity: 1, 
      duration: 1.5, 
      ease: "power3.out",
      y: 0,
      scale: 1
    }) // Fade in text with scale
    .to(".intro-text", { 
      opacity: 0, 
      duration: 1, 
      y: -50,
      scale: 0.9,
      ease: "power2.in"
    }) // Fade out text with movement
    .to(".intro-overlay", { 
      opacity: 0, 
      duration: 1.2, 
      ease: "power3.out",
      scale: 1.1
    }) // Fade out background with scale
    .set(".intro-overlay", { display: "none" }) // Remove overlay from layout
    .to(".content", { 
      opacity: 1, 
      duration: 2, 
      ease: "power3.out",
      y: 0
    }) // Reveal main content with smooth entrance
    .from(".title", {
      opacity: 0,
      y: 100,
      duration: 1.5,
      ease: "power3.out"
    }, "-=1.5") // Animate title entrance
    .from(".subtitle", {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    }, "-=1"); // Animate subtitle entrance
});
