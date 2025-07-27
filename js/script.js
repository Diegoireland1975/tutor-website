const mobileToggle = document.querySelector("#mobile-menu-toggle");
const mobileList = document.querySelector(".mobile-menu-list");

mobileToggle.addEventListener("click", (e) => {
  mobileList.classList.toggle("active");
});
