# Meetup — учебный frontend-проект

**Русский** · [English](#english)

Адаптивный двухстраничный сайт по макету Figma, созданный для итогового проекта frontend-модуля. Реализован на HTML, CSS и JavaScript без фреймворков и сборщиков.

## Возможности

- Главная страница с мероприятиями, категориями, городами и информационными разделами.
- Страница `filterPage.html` с шестью мероприятиями из учебного задания.
- Совместная фильтрация по типу, категории, максимальному расстоянию и календарному дню.
- При выборе **Online** фильтр расстояния становится недоступным; прежний выбор сохраняется и снова применяется после смены типа.
- Сброс фильтров, количество найденных мероприятий и сообщение при отсутствии результатов.
- Адаптивная вёрстка, локальные SVG-иконки и статическая карта из макета.

## Технологии

HTML5, CSS3 (Flexbox, Grid, media queries), JavaScript (DOM, массивы, `filter()`, обработчики событий), Git и GitHub.

## Запуск

1. Откройте папку проекта в VS Code.
2. Запустите `main.html` через расширение **Live Server**.
3. Перейдите на страницу мероприятий кнопкой **Join Meetup**.

Установка пакетов не требуется. Для загрузки изображений мероприятий необходимо интернет-соединение.

## Структура

```text
├── main.html                 # Главная страница
├── filterPage.html           # Страница фильтрации
├── styles/
│   ├── common.css            # Общие стили и навигация
│   ├── main.css              # Разделы главной страницы и футер
│   ├── event-card.css        # Общие карточки мероприятий
│   └── filter.css            # Фильтры, список и карта
├── scripts/
│   ├── homeEvents.js         # Данные и карточки главной страницы
│   ├── eventsData.js         # Шесть объектов задания
│   └── filter.js             # Фильтрация и создание карточек
└── assets/
    ├── images/               # Изображения и статическая карта
    └── icons/                # SVG-иконки
```

## Макет и изображения

[Figma — Front-end project](https://www.figma.com/design/dWkhtgag438U7CW15rtFxx/Front-end-project--Copy-?node-id=0-1)

Скриншоты готовых страниц можно добавить в `docs/screenshots/` после финальной визуальной проверки. В README их следует подключать относительными ссылками, например `![Главная страница](docs/screenshots/home-desktop.png)`.

## Статус

Обе страницы реализованы. Продолжается финальная проверка адаптивности, доступности и соответствия макету.

---

## English

A responsive two-page Meetup-inspired website built for a frontend course final project using **HTML5, CSS3, and vanilla JavaScript**. No framework or build step is required.

### Features

- Responsive homepage with events, categories, cities, and editorial sections.
- Events page rendering six assignment-provided objects with combined filters for **type, category, maximum distance, and date**.
- Distance filtering is disabled for online events; the previous distance selection is preserved when switching back.
- Reset button, result count, empty-state message, and a static map preview from Figma.

### Run locally

Open the project in VS Code and launch `main.html` with **Live Server**. Select **Join Meetup** to navigate to the events page. An internet connection is needed for externally hosted event images.

### Project files

`main.html` and `filterPage.html` are the two pages; `styles/` contains shared and page-specific CSS; `scripts/homeEvents.js` handles homepage cards, `scripts/eventsData.js` stores the six events, and `scripts/filter.js` renders and filters the events list. Assets are stored in `assets/`.

### Design and status

[Figma design](https://www.figma.com/design/dWkhtgag438U7CW15rtFxx/Front-end-project--Copy-?node-id=0-1). Both pages are implemented; final responsive, accessibility, and visual checks remain in progress. Screenshots can be added after the final review.
