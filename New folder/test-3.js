const events = [
    {
        title: "Live Music Night",
        date: "2024-08-10",
        time: "8:00 PM",
        description: "Enjoy a night of live music with local bands and artists.",
        image: "../source/pexels-vishnurnair-1105666.jpg"
    },
    
    {
        title: "Past Event 1",
        date: "2024-07-01",
        time: "6:00 PM",
        description: "This is a past event.",
        image: "https://example.com/past-event-1.jpg"
    },
    {
        title: "Past Event 2",
        date: "2024-07-08",
        time: "7:00 PM",
        description: "This is another past event.",
        image: "https://example.com/past-event-2.jpg"
    }
];

const today = new Date().toISOString().split('T')[0];

const upcomingEventsContainer = document.getElementById('upcoming-events');
const pastEventsContainer = document.getElementById('past-events');

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
        </div>
    `;

    if (event.date >= today) {
        upcomingEventsContainer.appendChild(eventCard);
    } else {
        pastEventsContainer.appendChild(eventCard);
    }
});
