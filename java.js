// Scroll to the Projects section
function scrollToProjects() {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
}

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert("Thank you for reaching out! We'll get back to you soon.");
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill in all the fields.");
    }
});
