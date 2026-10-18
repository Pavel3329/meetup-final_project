"use strict";

// Данные карточек главной страницы
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
    isOnline: true,
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
    isOnline: true,
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

const onlineEvents = [
  {
    title: "Amazing On-Demand 15 Min Interviews with Top Coaches and Speakers",
    category: "Business (25 km)",
    date: "Thu, Mar 14 · 6:00 PM PDT",
    dateTime: "2024-03-14T18:00:00-07:00",
    attendees: 3,
    image: "./assets/images/online-interviews.png",
    isOnline: true,
  },
  {
    title: "Vision Pro Developers Online Meetup",
    category: "Technology",
    date: "Wed, Mar 13 · 7:00 PM PDT",
    dateTime: "2024-03-13T19:00:00-07:00",
    attendees: 51,
    image: "./assets/images/vision-pro.png",
    isOnline: true,
  },
  {
    title: "Significant Musical Moments",
    category: "Hobbies and Passions (10 km)",
    date: "Wed, Mar 13 · 6:00 PM PDT",
    dateTime: "2024-03-13T18:00:00-07:00",
    attendees: 16,
    image: "./assets/images/musical-moments.png",
    isOnline: true,
  },
  {
    title: "FREE Webinar : Introduction to Power BI",
    category: "Technology",
    date: "Thu, Mar 14 · 5:30 PM PDT",
    dateTime: "2024-03-14T17:30:00-07:00",
    attendees: 33,
    image: "./assets/images/power-bi.png",
    isOnline: true,
  },
];

// Создание HTML карточки мероприятия
function createEventCard(event) {
  return `
  <article class="event-card">
    <div class="event-card__visual">
      <img class="event-card__image" src="${event.image}" alt="${event.title}" width="272" height="153" loading="lazy">
      ${
        event.isOnline
          ? `
  <span class="event-card__badge">
    <svg
  width="16"
  height="16"
  viewBox="0 0 24 24"
  fill="currentColor"
  aria-hidden="true"
>
  <path d="M15 8.5V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1.5l6 3.5V5l-6 3.5Z"/>
</svg>
    Online Event
  </span>
`
          : ""
      }
    </div>
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

// Вывод карточек мероприятий на главной странице
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

function renderOnlineEvents() {
  const container = document.querySelector("#online-events");

  if (!container) return;

  container.innerHTML = onlineEvents.map(createEventCard).join("");
}

renderOnlineEvents();
