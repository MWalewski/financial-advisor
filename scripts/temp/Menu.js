class Menu {
  constructor() {
    this.menuToggler = document.querySelector(".navbar__menu-toggler");
    this.navList = document.querySelector(".navbar__nav");
    this.events();
  }

  toggleMenu() {
    this.navList.classList.value.includes("navbar__nav--show")
      ? this.navList.classList.remove("navbar__nav--show")
      : this.navList.classList.add("navbar__nav--show");

    this.menuToggler.classList.value.includes("navbar__menu-toggler--close")
      ? this.menuToggler.classList.remove("navbar__menu-toggler--close")
      : this.menuToggler.classList.add("navbar__menu-toggler--close");
  }

  events() {
    this.menuToggler.addEventListener("click", this.toggleMenu.bind(this));
  }
}

export default Menu;
