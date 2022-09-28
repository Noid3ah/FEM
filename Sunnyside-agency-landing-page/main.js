const nav_nav = document.querySelector(".nav__list");
const burger_div = document.querySelector(".burger");

burger_div.addEventListener("click", () => {
  nav_nav.classList.toggle("nav--active");
});
