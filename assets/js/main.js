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
// Hero slider
$(".hero-slider").owlCarousel({
  items: 1,
  loop: true,
  margin: 0,
  nav: true,
  autoHeight: true,
  autoplay: true,
  autoplayHoverPause: true,
  dots: false,
  navText: [
    "<i class='bx bx-chevron-left'></i>",
    "<i class='bx bx-chevron-right'></i>",
  ],
});
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 120) {
    $(".site-nav").addClass("menu-shrink");
  } else {
    $(".site-nav").removeClass("menu-shrink");
  }
});
$(window).on("scroll", function () {
  if ($(this).scrollTop() > 0) {
    $(".go-top").addClass("active");
  } else {
    $(".go-top").removeClass("active");
  }
});
$(".go-top").on("click", function () {
  $("html, body").animate({ scrollTop: "0" }, 500);
});

let btnTrigger = document.getElementById("mobile-toggle");
let mobileMenu = document.getElementById("mobileMenu");

btnTrigger.addEventListener("click", function () {
  mobileMenu.classList.toggle("mobile-show");
});
