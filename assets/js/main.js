// Testimonials Slider
$(".testimonials-slider").owlCarousel({
  items: 1,
  loop: true,
  margin: 30,
  dots: true,
  nav: true,
  autoplay: true,
  autoplayHoverPause: true,
  navText: [
    "<i class='bx bxs-left-arrow-alt'></i>",
    "<i class='bx bxs-right-arrow-alt'></i>",
  ],
});

// Partner Slider
$(".partner-slider").owlCarousel({
  loop: true,
  dots: false,
  margin: 30,
  nav: false,
  autoplay: true,
  autoplayHoverPause: true,
  responsive: {
    0: {
      items: 2,
    },
    576: {
      items: 3,
    },
    768: {
      items: 4,
    },
    1200: {
      items: 5,
    },
  },
});

let btnTrigger = document.getElementById("mobile-toggle");
let mobileMenu = document.getElementById("mobileMenu");

btnTrigger.addEventListener("click", function () {
  mobileMenu.classList.toggle("mobile-show");
});
