function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        alert(`Thank you for subscribing, ${name}!`);
        // Implement further subscription logic here
        this.reset();
    } else {
        alert('Please fill out both fields.');
    }
});
