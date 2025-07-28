// HAMBURGER MENU
const mobileToggle = document.querySelector("#mobile-menu-toggle");
const mobileList = document.querySelector(".mobile-menu-list");

mobileToggle.addEventListener("click", (e) => {
  mobileList.classList.toggle("active");
});

/* CHANGE BACKGROUND COLOR OF THE NAVBAR ON SCROLL */
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", (e) => {
  // navbar.style.opacity = Math.max(1 - scrollY / 300, 0.8);
  if (window.scrollY > 0) {
    navbar.classList.add("navbar-scroll");
  } else {
    navbar.classList.remove("navbar-scroll");
  }
});
