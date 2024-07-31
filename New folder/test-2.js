let videoIndex = 0;
const videos = ['../source/Dj_Night.mp4', 'dj-video2.mp4', 'dj-video3.mp4'];
const videoElement = document.getElementById('bg-video');

function changeVideo() {
    videoIndex = (videoIndex + 1) % videos.length;
    videoElement.src = videos[videoIndex];
    videoElement.play();
}

videoElement.addEventListener('ended', changeVideo);

// Sponsors scrolling animation
const sponsorLogos = document.getElementById('sponsor-logos');
let sponsorScrollIndex = 0;

function scrollSponsors() {
    const logos = sponsorLogos.children;
    const totalLogos = logos.length;
    if (totalLogos > 0) {
        logos[sponsorScrollIndex].style.opacity = 0;
        sponsorScrollIndex = (sponsorScrollIndex + 1) % totalLogos;
        logos[sponsorScrollIndex].style.opacity = 1;
    }
}

setInterval(scrollSponsors, 2000);

// Dynamically load sponsors (for demo purposes)
const sponsors = [
    'sponsor1.png',
    'sponsor2.png',
    'sponsor3.png',
    'sponsor4.png'
];

sponsors.forEach(sponsor => {
    const img = document.createElement('img');
    img.src = sponsor;
    img.alt = `Sponsor ${sponsor}`;
    sponsorLogos.appendChild(img);
});
document.addEventListener('DOMContentLoaded', function () {
    const testimonials = [
        {
            name: "Sristhi Palsra",
            text: "Club Twenty has been my launchpad for growth! From freshmen induction to Sports Utsav, each event taught me valuable skills. Grateful for the supportive seniors and unforgettable experiences.",
            image: "path/to/sristhi.jpg" // Add path to Sristhi's image
        },
        {
            name: "Nikunj Kansal",
            text: "Event planning mastery, teamwork, and resource management—Club Twenty is where I honed these skills. The Glow Run and Race for Grace exemplify the club's commitment to excellence. Proud team member!",
            image: "path/to/nikunj.jpg" // Add path to Nikunj's image
        },
        {
            name: "Sachin",
            text: "Seniors at Club Twenty are pillars of support. In my two years, I have not only gained friends but also leadership opportunities that have shaped my personal and professional journey profoundly. Proud team member!",
            image: "path/to/sachin.jpg" // Add path to Sachin's image
        }
    ];

    const testimonialsSlider = document.querySelector('.testimonials-slider');

    testimonials.forEach(testimonial => {
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimonial');

        testimonialDiv.innerHTML = `
            <img src="${testimonial.image}" alt="${testimonial.name}">
            <h3>${testimonial.name}</h3>
            <p>${testimonial.text}</p>
        `;

        testimonialsSlider.appendChild(testimonialDiv);
    });
});
