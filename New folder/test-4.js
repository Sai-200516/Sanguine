document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Contact form submission
    document.getElementById('contact-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message!');
        this.reset();
    });

    // Subscribe form submission
    document.getElementById('subscribe-form').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for subscribing, ' + document.getElementById('subscribe-name').value + '!');
        this.reset();
    });

    // Add sample testimonials dynamically
    const testimonials = [
        { name: "John Doe", text: "Amazing club with great events!", photo: "../source/members/kalpana_negiwal.jpg" },
        { name: "Jane Smith", text: "Had an awesome time at the DJ Night!", photo: "jane.jpg" },
        { name: "Sam Wilson", text: "A wonderful community to be part of.", photo: "sam.jpg" },
        // Add more testimonials as needed
    ];
    const testimonialsSlider = document.querySelector('.testimonials-slider');
    testimonials.forEach(testimonial => {
        const div = document.createElement('div');
        div.classList.add('testimonial');
        div.innerHTML = `<img src="${testimonial.photo}" alt="${testimonial.name}"><p>${testimonial.text}</p><p>- ${testimonial.name}</p>`;
        testimonialsSlider.appendChild(div);
    });

    // Add sample sponsors dynamically
    const sponsors = [
        "sponsor1.png",
        "sponsor2.png",
        "sponsor3.png"
    ];
    const sponsorLogos = document.getElementById('sponsor-logos');
    sponsors.forEach(sponsor => {
        const img = document.createElement('img');
        img.src = sponsor;
        img.alt = `Sponsor Logo`;
        sponsorLogos.appendChild(img);
    });

    // Scroll buttons functionality
    const scrollAmount = 300;
    const leftButton = document.createElement('button');
    leftButton.classList.add('scroll-button', 'left');
    leftButton.innerHTML = '&larr;';
    testimonialsSlider.insertAdjacentElement('beforebegin', leftButton);

    const rightButton = document.createElement('button');
    rightButton.classList.add('scroll-button', 'right');
    rightButton.innerHTML = '&rarr;';
    testimonialsSlider.insertAdjacentElement('afterend', rightButton);

    leftButton.addEventListener('click', () => {
        testimonialsSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    });

    rightButton.addEventListener('click', () => {
        testimonialsSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    });
});
