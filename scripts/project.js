const projects = [
  {
    title: "Weather App",
    description: "A responsive weather forecast app using OpenWeather API.",
    image: "images/weather.jpg",
    link: "#",
  },
  {
    title: "To-Do List",
    description: "Manage daily tasks with this sleek to-do app.",
    image: "images/todo.jpg",
    link: "#",
  },
  {
    title: "Portfolio Site",
    description: "A personal website to showcase projects and skills.",
    image: "images/portfolio.jpg",
    link: "#",
  },
  {
    title: "Budget Tracker",
    description: "Track expenses and manage your finances easily.",
    image: "images/budget.jpg",
    link: "#",
  },
  {
    title: "Recipe Finder",
    description: "Search for delicious recipes by ingredient.",
    image: "images/recipe.jpg",
    link: "#",
  },
  {
    title: "Quiz App",
    description: "A fun quiz app with multiple categories.",
    image: "images/quiz.jpg",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A responsive weather forecast app using OpenWeather API.",
    image: "images/weather.jpg",
    link: "#",
  },
  {
    title: "To-Do List",
    description: "Manage daily tasks with this sleek to-do app.",
    image: "images/todo.jpg",
    link: "#",
  },
  {
    title: "Portfolio Site",
    description: "A personal website to showcase projects and skills.",
    image: "images/portfolio.jpg",
    link: "#",
  },
  {
    title: "Budget Tracker",
    description: "Track expenses and manage your finances easily.",
    image: "images/budget.jpg",
    link: "#",
  },
  {
    title: "Recipe Finder",
    description: "Search for delicious recipes by ingredient.",
    image: "images/recipe.jpg",
    link: "#",
  },
  {
    title: "Quiz App",
    description: "A fun quiz app with multiple categories.",
    image: "images/quiz.jpg",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A responsive weather forecast app using OpenWeather API.",
    image: "images/weather.jpg",
    link: "#",
  },
  {
    title: "To-Do List",
    description: "Manage daily tasks with this sleek to-do app.",
    image: "images/todo.jpg",
    link: "#",
  },
  {
    title: "Portfolio Site",
    description: "A personal website to showcase projects and skills.",
    image: "images/portfolio.jpg",
    link: "#",
  },
  {
    title: "Budget Tracker",
    description: "Track expenses and manage your finances easily.",
    image: "images/budget.jpg",
    link: "#",
  },
  {
    title: "Recipe Finder",
    description: "Search for delicious recipes by ingredient.",
    image: "images/recipe.jpg",
    link: "#",
  },
  {
    title: "Quiz App",
    description: "A fun quiz app with multiple categories.",
    image: "images/quiz.jpg",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A responsive weather forecast app using OpenWeather API.",
    image: "images/weather.jpg",
    link: "#",
  },
  {
    title: "To-Do List",
    description: "Manage daily tasks with this sleek to-do app.",
    image: "images/todo.jpg",
    link: "#",
  },
  {
    title: "Portfolio Site",
    description: "A personal website to showcase projects and skills.",
    image: "images/portfolio.jpg",
    link: "#",
  },
  {
    title: "Budget Tracker",
    description: "Track expenses and manage your finances easily.",
    image: "images/budget.jpg",
    link: "#",
  },
  {
    title: "Recipe Finder",
    description: "Search for delicious recipes by ingredient.",
    image: "images/recipe.jpg",
    link: "#",
  },
  {
    title: "Quiz App",
    description: "A fun quiz app with multiple categories.",
    image: "images/quiz.jpg",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A responsive weather forecast app using OpenWeather API.",
    image: "images/weather.jpg",
    link: "#",
  },
  {
    title: "To-Do List",
    description: "Manage daily tasks with this sleek to-do app.",
    image: "images/todo.jpg",
    link: "#",
  },
  {
    title: "Portfolio Site",
    description: "A personal website to showcase projects and skills.",
    image: "images/portfolio.jpg",
    link: "#",
  },
  {
    title: "Budget Tracker",
    description: "Track expenses and manage your finances easily.",
    image: "images/budget.jpg",
    link: "#",
  },
  {
    title: "Recipe Finder",
    description: "Search for delicious recipes by ingredient.",
    image: "images/recipe.jpg",
    link: "#",
  },
  {
    title: "Quiz App",
    description: "A fun quiz app with multiple categories.",
    image: "images/quiz.jpg",
    link: "#",
  },
  {
    title: "Weather App",
    description: "A responsive weather forecast app using OpenWeather API.",
    image: "images/weather.jpg",
    link: "#",
  },
  {
    title: "To-Do List",
    description: "Manage daily tasks with this sleek to-do app.",
    image: "images/todo.jpg",
    link: "#",
  },
  {
    title: "Portfolio Site",
    description: "A personal website to showcase projects and skills.",
    image: "images/portfolio.jpg",
    link: "#",
  },
  {
    title: "Budget Tracker",
    description: "Track expenses and manage your finances easily.",
    image: "images/budget.jpg",
    link: "#",
  },
  {
    title: "Recipe Finder",
    description: "Search for delicious recipes by ingredient.",
    image: "images/recipe.jpg",
    link: "#",
  },
  {
    title: "Quiz App",
    description: "A fun quiz app with multiple categories.",
    image: "images/quiz.jpg",
    link: "#",
  },
];

const container = document.getElementById("projectCards");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <button class="close-btn" onclick="event.stopPropagation(); collapseCard(this);">✖</button>
    <img src="${project.image}" alt="${project.title}" loading="lazy" />
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">Learn More</a>
  `;
  card.addEventListener("click", () => expandCard(card));
  container.appendChild(card);
});

function expandCard(card) {
  document.querySelectorAll(".card").forEach((c) => {
    if (c !== card) {
      c.classList.add("hidden");
    }
  });

  document.getElementById("mainContent").classList.add("expanded-view");
  card.classList.add("expanded");
}

function collapseCard(button) {
  const card = button.closest(".card");
  card.classList.remove("expanded");

  document.querySelectorAll(".card").forEach((c) => {
    c.classList.remove("hidden");
  });

  document.getElementById("mainContent").classList.remove("expanded-view");
}
