document.getElementById("contactForm").addEventListener("submit", async function(event) {
    event.preventDefault();
    
    let formData = new FormData(this);
    
    let response = await fetch("/contact", {
        method: "POST",
        body: formData
    });

    let result = await response.json();
    document.getElementById("responseMessage").innerText = result.message;
});

function learnMore() {
    alert("VividSense is an affordable assistive technology for the visually impaired.");
}
