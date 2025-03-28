// Select elements
const navLinks = document.querySelectorAll(".nav-link");
const mobileNav = document.querySelector(".container-fluid.block");

// Handle active link change
navLinks.forEach(link => {
  link.addEventListener("click", function () {
    navLinks.forEach(nav => nav.classList.remove("active")); // Remove active class
    this.classList.add("active"); // Add active class to clicked link
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu-container");
  const openBtn = document.querySelector("#open-nav-list"); // Add an "Open" button in your HTML
  const closeBtn = document.querySelector("#close-nav-list");

  openBtn.addEventListener("click", function () {
    menu.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    menu.classList.remove("show");
  });
});


let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", function () {
  let scrollTop = window.scrollY;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});


var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  loop: true,
  coverflowEffect: {
    rotate: 20,
    stretch: 1,
    depth: 100,
    modifier: 1,
    scale: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
