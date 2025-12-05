document.getElementById("contactForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("form-status").innerText = 
        "Thank you! We will get back to you soon.";
    this.reset();
});
