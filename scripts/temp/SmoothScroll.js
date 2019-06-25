class SmoothScroll {
  constructor() {
    this.navLinks = document.querySelectorAll("a.link");
    this.findOutMoreBtn = document.querySelector(".btn-primary");
    this.menuToggler = document.querySelector(".navbar__menu-toggler");
    this.navList = document.querySelector(".navbar__nav");
    this.events();
  }

  events() {
    this.findOutMoreBtn.addEventListener("click", this.navbarClick.bind(this));
    this.navLinks = Array.from(this.navLinks);
    this.navLinks.forEach(el => {
      el.addEventListener("click", this.navbarClick.bind(this));
    });
  }

  navbarClick() {
    this.smoothScroll(event);
    const navList = document.querySelector(".navbar__nav");
    this.menuToggler.classList.remove("navbar__menu-toggler--close");
    this.navList.classList.remove("navbar__nav--show");
  }

  smoothScroll(event) {
    event.preventDefault();
    const targetName = event.currentTarget.getAttribute("href");
    const targetPosition = document.querySelector(targetName).offsetTop - 50;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1500;
    let startTime = null;

    window.requestAnimationFrame(animation);

    function animation(currentTime) {
      if (!startTime) startTime = currentTime;
      const progres = currentTime - startTime;

      window.scrollTo(0, ease(progres, startPosition, distance, duration));
      if (progres < duration) window.requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t * t * t + b;
      t -= 2;
      return (-c / 2) * (t * t * t * t - 2) + b;
    }
  }
}

export default SmoothScroll;
