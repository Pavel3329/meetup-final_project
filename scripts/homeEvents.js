"use strict";

// Events displayed on the homepage
const homeEvents = [
  {
    title: "Day Trading Idea and Strategy",
    category: "Business (5 km)",
    date: "Mon, Mar 18 · 7:00 PM PDT",
    dateTime: "2024-03-18T19:00:00-07:00",
    attendees: 1,
    image: "./assets/images/day-trading.png",
  },
  {
    title: "Let's Talk Networking: JPMorgan Chase in Palo Alto",
    category: "Business (25 km)",
    date: "Tue, Mar 19 · 5:00 PM PDT",
    dateTime: "2024-03-19T17:00:00-07:00",
    attendees: 41,
    image: "./assets/images/networking.png",
  },
  {
    title:
      "Tech Talks & Quiz: Next-Gen Database Solutions for Emerging Use Cases",
    category: "Technology",
    date: "Wed, Mar 13 · 6:00 PM PDT",
    dateTime: "2024-03-13T18:00:00-07:00",
    attendees: 40,
    image: "./assets/images/tech-talks.png",
  },
  {
    title: "INFORMS San Francisco Chapter In-Person Event",
    category: "Health and Wellbeing (50 km)",
    date: "Thu, Mar 28 · 5:00 PM PDT",
    dateTime: "2024-03-28T17:00:00-07:00",
    attendees: 41,
    image: "./assets/images/informs-event.png",
  },
  {
    title: "AI Wednesdays - Meet and Greet!",
    category: "Technology (5 km)",
    date: "Wed, Mar 13 · 6:30 PM PDT",
    dateTime: "2024-03-13T18:30:00-07:00",
    attendees: 29,
    image: "./assets/images/ai-wednesdays.png",
  },
  {
    title: "ROS By-The-Bay March 2024",
    category: "Social Activities",
    date: "Thu, Mar 21 · 6:00 PM PDT",
    dateTime: "2024-03-21T18:00:00-07:00",
    attendees: 51,
    image: "./assets/images/ros-by-the-bay.png",
  },
  {
    title: "Free Christian Singles' Dinner",
    category: "Hobbies and Passions (10 km)",
    date: "Fri, Mar 29 · 6:00 PM PDT",
    dateTime: "2024-03-29T18:00:00-07:00",
    attendees: 11,
    image: "./assets/images/singles-dinner.png",
  },
  {
    title: "In-person: Deep Dive into RAG Architectures (Food served)",
    category: "Hobbies and Passions (50 km)",
    date: "Thu, Mar 14 · 5:00 PM PDT",
    dateTime: "2024-03-14T17:00:00-07:00",
    attendees: 16,
    image: "./assets/images/rag-architectures.png",
  },
];

// Generate HTML for a single event card
function createEventCard(event) {
  return `
    <article class="event-card">
      <img
        class="event-card__image"
        src="${event.image}"
        alt="${event.title}"
        width="272"
        height="153"
        loading="lazy"
      >

      <div class="event-card__content">
        <h3 class="event-card__title">
          ${event.title}
        </h3>

        <p class="event-card__category">
          ${event.category}
        </p>

        <div class="event-card__date">
          <img
            src="./assets/icons/calendar.svg"
            alt=""
            width="20"
            height="20"
          >
          <time datetime="${event.dateTime}">
            ${event.date}
          </time>
        </div>

        <div class="event-card__details">
          <span class="event-card__detail">
            <img
              src="./assets/icons/attendees.svg"
              alt=""
              width="20"
              height="20"
            >
            ${event.attendees} going
          </span>

          <span class="event-card__detail">
            <img
              src="./assets/icons/ticket.svg"
              alt=""
              width="20"
              height="20"
            >
            Free
          </span>
        </div>
      </div>
    </article>
  `;
}

// Render all homepage events
function renderHomeEvents() {
  const container = document.querySelector("#home-events");
  const moreButton = document.querySelector("#home-events-more");

  if (!container) return;

  container.innerHTML = homeEvents.map(createEventCard).join("");

  if (!moreButton) return;

  const visibleCount = 5;
  const hiddenCount = Math.max(0, homeEvents.length - visibleCount);

  if (hiddenCount === 0) return;

  moreButton.hidden = false;
  moreButton.textContent = `Show ${hiddenCount} more events`;

  moreButton.addEventListener("click", () => {
    const isExpanded = container.classList.toggle("events-grid--expanded");

    moreButton.setAttribute("aria-expanded", String(isExpanded));

    moreButton.textContent = isExpanded
      ? "Show less"
      : `Show ${hiddenCount} more events`;
  });
}

renderHomeEvents();
