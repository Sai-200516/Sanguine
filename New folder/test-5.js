const events = [
    {
        title: "Live Music Night",
        date: "2024-08-10",
        time: "8:00 PM",
        description: "Enjoy a night of live music with local bands and artists.",
        image: "https://example.com/live-music.jpg",
        gallery: [
            "https://example.com/gallery/live-music-1.jpg",
            "https://example.com/gallery/live-music-2.jpg",
            "https://example.com/gallery/live-music-3.jpg"
        ]
    },
    {
        title: "Comedy Show",
        date: "2024-08-17",
        time: "7:00 PM",
        description: "Laugh out loud with some of the best stand-up comedians.",
        image: "https://example.com/comedy-show.jpg",
        gallery: [
            "https://example.com/gallery/comedy-show-1.jpg",
            "https://example.com/gallery/comedy-show-2.jpg",
            "https://example.com/gallery/comedy-show-3.jpg"
        ]
    },
    {
        title: "DJ Night",
        date: "2024-07-28",
        time: "1:03 AM",
        description: "Dance the night away with top DJs spinning the latest hits.",
        image: "https://example.com/dj-night.jpg",
        gallery: [
            "https://example.com/gallery/dj-night-1.jpg",
            "https://example.com/gallery/dj-night-2.jpg",
            "https://example.com/gallery/dj-night-3.jpg"
        ]
    },
    {
        title: "Wine Tasting",
        date: "2024-08-31",
        time: "6:00 PM",
        description: "Experience an evening of fine wines and gourmet appetizers.",
        image: "https://example.com/wine-tasting.jpg",
        gallery: [
            "https://example.com/gallery/wine-tasting-1.jpg",
            "https://example.com/gallery/wine-tasting-2.jpg",
            "https://example.com/gallery/wine-tasting-3.jpg"
        ]
    },
    {
        title: "Past Event 1",
        date: "2024-07-01",
        time: "6:00 PM",
        description: "This is a past event.",
        image: "../source/pexels-vishnurnair-1105666.jpg",
        gallery: [
            "../source/pexels-vishnurnair-1105666.jpg",
            "../source/pexels-vishnurnair-1105666.jpg",
            "../source/pexels-vishnurnair-1105666.jpg"
        ]
    },
    {
        title: "Past Event 2",
        date: "2024-07-08",
        time: "7:00 PM",
        description: "This is another past event.",
        image: "https://example.com/past-event-2.jpg",
        gallery: [
            "https://example.com/gallery/past-event-2-1.jpg",
            "https://example.com/gallery/past-event-2-2.jpg",
            "https://example.com/gallery/past-event-2-3.jpg"
        ]
    }
];

const today = new Date().toISOString().split('T')[0];

const upcomingEventsContainer = document.getElementById('upcoming-events');
const pastEventsContainer = document.getElementById('past-events');
const modal = document.getElementById('gallery-modal');
const modalContent = document.getElementById('modal-content');
const closeModal = document.getElementsByClassName('close')[0];

function openModal(gallery) {
    modalContent.innerHTML = gallery.map(image => `<img src="${image}" alt="Gallery Image">`).join('');
    modal.style.display = "block";
}

function closeModalFunction() {
    modal.style.display = "none";
}

closeModal.onclick = closeModalFunction;
window.onclick = function(event) {
    if (event.target == modal) {
        closeModalFunction();
    }
};

events.forEach(event => {
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card');
    eventCard.innerHTML = `
        <img src="${event.image}" alt="${event.title}">
        <div class="event-info">
            <h3>${event.title}</h3>
            <p>Date: ${new Date(event.date).toDateString()}</p>
            <p>Time: ${event.time}</p>
            <p>${event.description}</p>
            ${event.date < today ? `<a href="#" class="btn" onclick="openModal(${JSON.stringify(event.gallery)})">Gallery Photos</a>` : '<div id="countdown-' + event.title.split(' ').join('-') + '" class="countdown"></div><a href="#" class="btn">Register Now</a>'}
        </div>
    `;

    if (event.date >= today) {
        upcomingEventsContainer.appendChild(eventCard);
        // Set up countdown
        setupCountdown(event.date, `countdown-${event.title.split(' ').join('-')}`);
    } else {
        pastEventsContainer.appendChild(eventCard);
    }
});

document.addEventListener('click', function (e) {
    if (e.target && e.target.matches('.btn[data-gallery]')) {
        e.preventDefault();
        const gallery = JSON.parse(e.target.getAttribute('data-gallery'));
        openModal(gallery);
    }
});

function setupCountdown(eventDate, elementId) {
    const countdownElement = document.getElementById(elementId);
    const targetDate = new Date(eventDate).getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = targetDate - now;

        if (distance < 0) {
            countdownElement.innerHTML = "Event Started!";
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `
            <div>${days}<span>Days</span></div>
            <div>${hours}<span>Hours</span></div>
            <div>${minutes}<span>Minutes</span></div>
            <div>${seconds}<span>Seconds</span></div>
        `;
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);
}
