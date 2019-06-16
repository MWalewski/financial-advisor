const menuToggler = document.querySelector(".navbar__menu-toggler");
const navList = document.querySelector(".navbar__nav");

menuToggler.addEventListener("click", () => {
  navList.classList.value.includes("navbar__nav--show")
    ? navList.classList.remove("navbar__nav--show")
    : navList.classList.add("navbar__nav--show");

  menuToggler.classList.value.includes("navbar__menu-toggler--close")
    ? menuToggler.classList.remove("navbar__menu-toggler--close")
    : menuToggler.classList.add("navbar__menu-toggler--close");
});

// PRODUCT SECTION

const boxes = document.querySelectorAll(".product__icon-box");

[].forEach.call(boxes, el => {
  el.addEventListener("click", e => {
    let id = e.currentTarget.dataset.id;

    removeTextActive();
    setTimeout(() => {
      document
        .querySelector(`.product__text-box-${id}`)
        .classList.add("product__text-box--active");
    }, 500);

    removeIconActive();
    document
      .querySelector(`.product__icon-title-${id}`)
      .classList.add("product__icon-title--active");
  });
});

function removeTextActive() {
  const textBoxes = document.querySelectorAll(".product__text-box");

  [].forEach.call(textBoxes, el => {
    el.classList.remove("product__text-box--active");
  });
}
function removeIconActive() {
  const icons = document.querySelectorAll(".product__icon-title");
  [].forEach.call(icons, el => {
    el.classList.remove("product__icon-title--active");
  });
}

//SMOOTH SCROLL

const navLinks = document.querySelectorAll("a.link");
const findOutMoreBtn = document.querySelector(".btn-primary");

[].forEach.call(navLinks, el => {
  el.addEventListener("click", navbarClick);
});

findOutMoreBtn.addEventListener("click", navbarClick);

function navbarClick() {
  smoothScroll(event);
  //close menu
  navList.classList.remove("navbar__nav--show");
  menuToggler.classList.remove("navbar__menu-toggler--close");
}

function smoothScroll(event) {
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
