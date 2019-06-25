class Products {
  constructor() {
    this.boxes = document.querySelectorAll(".product__icon-box");
    this.boxes = Array.from(this.boxes);
    this.events();
  }

  events() {
    this.boxes.forEach(el => {
      el.addEventListener("click", e => {
        let id = e.currentTarget.dataset.id;
        this.removeTextActive();
        setTimeout(() => {
          document
            .querySelector(`.product__text-box-${id}`)
            .classList.add("product__text-box--active");
        }, 500);
        this.removeIconActive();
        document
          .querySelector(`.product__icon-title-${id}`)
          .classList.add("product__icon-title--active");
      });
    });
  }
  removeTextActive() {
    let textBoxes = document.querySelectorAll(".product__text-box");

    textBoxes = Array.from(textBoxes);

    textBoxes.forEach(function(el) {
      el.classList.remove("product__text-box--active");
    });
  }
  removeIconActive() {
    let icons = document.querySelectorAll(".product__icon-title");

    icons = Array.from(icons);

    icons.forEach(function(el) {
      el.classList.remove("product__icon-title--active");
    });
  }
}

export default Products;
