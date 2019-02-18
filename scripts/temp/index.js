const menuToggler = document.querySelector(".navbar__menu-toggler");
const navList = document.querySelector(".navbar__nav");

menuToggler.addEventListener("click", () => {
  navList.classList.toggle("navbar__nav--show");
  menuToggler.classList.toggle("navbar__menu-toggler--close");
});
