// JavaScript for dynamically loading testimonials
document.addEventListener('DOMContentLoaded', function() {
    var testimonials = [
        {
            name: "John Doe",
            text: "Sanguine Club is a fantastic community where I've learned so much!",
            photo: "john.jpg"
        },
        {
            name: "Jane Smith",
            text: "The events are always well-organized and fun.",
            photo: "jane.jpg"
        },
        {
            name: "Michael Brown",
            text: "I've met some of my best friends through this club.",
            photo: "michael.jpg"
        }
    ];

    var testimonialsContainer = document.querySelector('.testimonials-slider');
    testimonials.forEach(function(testimonial) {
        var testimonialElement = document.createElement('div');
        testimonialElement.className = 'testimonial';
        testimonialElement.innerHTML = `
            <img src="${testimonial.photo}" alt="${testimonial.name}">
            <h4>${testimonial.name}</h4>
            <p>"${testimonial.text}"</p>
        `;
        testimonialsContainer.appendChild(testimonialElement);
    });
});

// Basic form validation for subscribe and contact forms
document.getElementById('subscribe-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('subscribe-name').value;
    var email = document.getElementById('subscribe-email').value;
    if (name && email) {
        alert('Thank you for subscribing!');
    } else {
        alert('Please enter both name and email.');
    }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('contact-name').value;
    var email = document.getElementById('contact-email').value;
    var message = document.getElementById('contact-message').value;
    if (name && email && message) {
        alert('Your message has been sent!');
    } else {
        alert('Please fill out all fields.');
    }
});