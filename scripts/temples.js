const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
  const isOpen = navMenu.classList.contains("open");
  menuToggle.textContent = isOpen ? "✕" : "☰";
  menuToggle.setAttribute("aria-expanded", isOpen);
});
