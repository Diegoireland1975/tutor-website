// HAMBURGER MENU
const mobileToggle = document.querySelector("#mobile-menu-toggle");
const mobileList = document.querySelector(".mobile-menu-list");

mobileToggle.addEventListener("click", (e) => {
  mobileList.classList.toggle("active");
});

// REDUCE HEADER OPACITY ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", (e) => {
  navbar.style.opacity = Math.max(1 - scrollY / 300, 0.8);
});
