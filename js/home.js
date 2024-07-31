let videoIndex = 0;
const videos = ['dj-video1.mp4', 'dj-video2.mp4', 'dj-video3.mp4'];
const videoElement = document.getElementById('bg-video');

function changeVideo() {
    videoIndex = (videoIndex + 1) % videos.length;
    videoElement.src = videos[videoIndex];
    videoElement.play();
}

videoElement.addEventListener('ended', changeVideo);
// JavaScript for dynamically loading testimonials
document.addEventListener('DOMContentLoaded', function() {
    var testimonials = [
        {
            name: "John Doe",
            text: "Sanguine Club is a fantastic community where I've learned so much!",
            photo: "../source/members/kalpana_negiwal.jpg"
        },
        {
            name: "Jane Smith",
            text: "The events are always well-organized and fun.",
            photo: "../source/members/kalpana_negiwal.jpg"
        },
        {
            name: "Michael Brown",
            text: "I've met some of my best friends through this club.",
            photo: "../source/members/kalpana_negiwal.jpg"
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

document.getElementById('contact-form-1').addEventListener('submit', function(event) {
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
// Sponsors section scrolling animation
document.addEventListener("DOMContentLoaded", function() {
    const sponsorLogos = document.getElementById('sponsor-logos');
    const sponsors = [
        '../source/Social_Media_Logo/Github-3.png',
        '../source/Social_Media_Logo/Github-3.png',
        '../source/Social_Media_Logo/Github-3.png',
     // Add more sponsors as needed
    ];

    function addSponsors() {
        console.log('Adding sponsors');  // Debugging
        sponsors.forEach(sponsor => {
            const img = document.createElement('img');
            img.src = sponsor;
            img.alt = 'Sponsor';
            img.onerror = () => console.error('Error loading image:', sponsor);  // Debugging
            sponsorLogos.appendChild(img);
        });
        if (sponsors.length > 3) {  // Adjust based on how many sponsors fit without scrolling
            sponsorLogos.classList.add('scrolling');
        }
    }

    addSponsors();
});
