const menuToggler = document.querySelector(".navbar__menu-toggler");
const navList = document.querySelector(".navbar__nav");

menuToggler.addEventListener("click", () => {
  navList.classList.toggle("navbar__nav--show");
  menuToggler.classList.toggle("navbar__menu-toggler--close");
});

const box1 = document.querySelector(".product__icon-box-1");
const box2 = document.querySelector(".product__icon-box-2");
const box3 = document.querySelector(".product__icon-box-3");

const textBox1 = document.querySelector(".product__text-box-1");
const textBox2 = document.querySelector(".product__text-box-2");
const textBox3 = document.querySelector(".product__text-box-3");

const title1 = document.querySelector(".product__icon-title-1");
const title2 = document.querySelector(".product__icon-title-2");
const title3 = document.querySelector(".product__icon-title-3");

box1.addEventListener("click", () => {
  textBox2.classList.remove("product__text-box--active");
  textBox3.classList.remove("product__text-box--active");
  setTimeout(() => {
    textBox1.classList.add("product__text-box--active");
  }, 500);

  title2.classList.remove("product__icon-title--active");
  title3.classList.remove("product__icon-title--active");
  title1.classList.add("product__icon-title--active");
});
box2.addEventListener("click", () => {
  textBox1.classList.remove("product__text-box--active");
  textBox3.classList.remove("product__text-box--active");
  setTimeout(() => {
    textBox2.classList.add("product__text-box--active");
  }, 500);
  title1.classList.remove("product__icon-title--active");
  title3.classList.remove("product__icon-title--active");
  title2.classList.add("product__icon-title--active");
});
box3.addEventListener("click", () => {
  textBox1.classList.remove("product__text-box--active");
  textBox2.classList.remove("product__text-box--active");
  setTimeout(() => {
    textBox3.classList.add("product__text-box--active");
  }, 500);

  title1.classList.remove("product__icon-title--active");
  title2.classList.remove("product__icon-title--active");
  title3.classList.add("product__icon-title--active");
});

/////GOOGLE MAPS

var map;
window.initMap = function() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 54.349358, lng: 18.650376 },
    zoom: 15
  });
};
