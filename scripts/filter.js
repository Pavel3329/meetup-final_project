
"use strict";

const typeFilter = document.querySelector("#type-filter");
const distanceFilter = document.querySelector("#distance-filter");
const categoryFilter = document.querySelector("#category-filter");
const dayFilter = document.querySelector("#day-filter");
const eventList = document.querySelector("#filtered-events");
const resultsCount = document.querySelector("#results-count");
const emptyMessage = document.querySelector("#empty-message");
const resetButton = document.querySelector("#reset-filters");

// Сравниваем календарные даты без перевода в UTC, чтобы день не смещался.
function dateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  }).format(date);
}

// Собираем уникальные дни из данных, чтобы не прописывать даты вручную в HTML.
function fillDayOptions() {
  const days = [
    ...new Set(eventsStore.map((event) => dateKey(event.date))),
  ].sort();
  days.forEach((day) => {
    const date = eventsStore.find((event) => dateKey(event.date) === day).date;
    const option = document.createElement("option");
    option.value = day;
    option.textContent = new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(date);
    dayFilter.append(option);
  });
}

// Создаём карточку через DOM на основе одного объекта мироприятия.
function makeCard(event) {
  const card = document.createElement("article");
  card.className = "event-card event-card--horizontal filter-event-card";

  const visual = document.createElement("div");
  visual.className = "event-card__visual";
  const image = document.createElement("img");
  image.className = "event-card__image";
  image.src = event.image;
  image.alt = event.title;
  image.loading = "lazy";
  visual.append(image);

  const content = document.createElement("div");
  content.className = "event-card__content";
  const time = document.createElement("time");
  time.className = "event-card__date";
  time.dateTime = dateKey(event.date);
  time.textContent = formatDate(event.date);
  const title = document.createElement("h2");
  title.className = "event-card__title";
  title.textContent = event.title;
  const category = document.createElement("p");
  category.className = "event-card__category";
  category.textContent =
    event.type === "offline"
      ? `${event.category} (${event.distance} km)`
      : event.category;
  content.append(time, title, category);

  if (event.type === "online") {
    const badge = document.createElement("span");
    badge.className = "filter-event-card__online";
    badge.textContent = "◉ Online Event";
    content.append(badge);
  }
  if (event.attendees !== undefined) {
    const attendees = document.createElement("p");
    attendees.className = "filter-event-card__attendees";
    attendees.textContent = `${event.attendees} attendees`;
    content.append(attendees);
  }
  card.append(visual, content);
  return card;
}

// Применяем все выбранные условия и обновляем список.
function updateEvents() {
  const type = typeFilter.value;
  const category = categoryFilter.value;
  const day = dayFilter.value;
  const distance = distanceFilter.value;

  // Для онлайн-мироприятий расстояние не применяется, поэтому блокируем фильтр.
  distanceFilter.disabled = type === "online";
  distanceFilter.parentElement.classList.toggle(
    "filter-controls__item--disabled",
    distanceFilter.disabled,
  );

  const filtered = eventsStore.filter((event) => {
    if (type && event.type !== type) return false;
    if (category && event.category !== category) return false;
    if (day && dateKey(event.date) !== day) return false;
    if (type !== "online" && distance) {
      if (event.type !== "offline" || event.distance > Number(distance))
        return false;
    }
    return true;
  });

  // Заменяем старые карточки новыми и синхронизируем счётчик результатов.
  eventList.replaceChildren(...filtered.map(makeCard));
  resultsCount.textContent = `${filtered.length} ${filtered.length === 1 ? "event" : "events"} found`;
  emptyMessage.hidden = filtered.length !== 0;
}

// Выбранное расстояние сохраняется и снова применяется при выходе из режима Online.
[typeFilter, distanceFilter, categoryFilter, dayFilter].forEach((filter) => {
  filter.addEventListener("change", updateEvents);
});
resetButton.addEventListener("click", () => {
  document.querySelector("#filter-form").reset();
  updateEvents();
});
fillDayOptions();
updateEvents();


// Стрелки прокручивают ту же строку, которую можно листать пальцем.
const filtersRow = document.querySelector("#filter-form");
const filtersPrev = document.querySelector("#filters-prev");
const filtersNext = document.querySelector("#filters-next");

// Отключаем стрелки на границах прокрутки.
function updateScrollButtons() {
  const maxScroll = filtersRow.scrollWidth - filtersRow.clientWidth;
  filtersPrev.disabled = filtersRow.scrollLeft <= 1;
  filtersNext.disabled = filtersRow.scrollLeft >= maxScroll - 1;
}

function scrollFilters(direction) {
  filtersRow.scrollBy({
    left: direction * Math.max(120, filtersRow.clientWidth * 0.65),
    behavior: "smooth",
  });
}

filtersPrev.addEventListener("click", () => scrollFilters(-1));
filtersNext.addEventListener("click", () => scrollFilters(1));
filtersRow.addEventListener("scroll", updateScrollButtons, { passive: true });
window.addEventListener("resize", updateScrollButtons);
updateScrollButtons();
