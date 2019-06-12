const menuToggler = document.querySelector(".navbar__menu-toggler");
const navList = document.querySelector(".navbar__nav");

menuToggler.addEventListener("click", () => {
  navList.classList.toggle("navbar__nav--show");
  menuToggler.classList.toggle("navbar__menu-toggler--close");
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
