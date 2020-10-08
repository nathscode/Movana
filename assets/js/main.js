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

// Accordion JS
$(".accordion > li:eq(0) .title").addClass("active").next().slideDown();
$(".accordion .title").click(function (j) {
  var dropDown = $(this).closest("li").find(".accordion-content");
  $(this)
    .closest(".accordion")
    .find(".accordion-content")
    .not(dropDown)
    .slideUp();
  if ($(this).hasClass("active")) {
    $(this).removeClass("active");
  } else {
    $(this).closest(".accordion").find(".title.active").removeClass("active");
    $(this).addClass("active");
  }
  dropDown.stop(false, true).slideToggle();
  j.preventDefault();
});

// Data table
$("#data-table").DataTable();

/*----------------------------
    wow js active
   ------------------------------ */
new WOW().init();

let btnTrigger = document.getElementById("mobile-toggle");
let mobileMenu = document.getElementById("mobileMenu");

btnTrigger.addEventListener("click", function () {
  mobileMenu.classList.toggle("mobile-show");
});

let step = "step1";

const step1 = document.getElementById("step1");
const step2 = document.getElementById("step2");
const step3 = document.getElementById("step3");
const step4 = document.getElementById("step4");

function next() {
  if (step === "step1") {
    step = "step2";
    step1.classList.remove("is-active");
    step1.classList.add("is-complete");
    step2.classList.add("is-active");
  } else if (step === "step2") {
    step = "step3";
    step2.classList.remove("is-active");
    step2.classList.add("is-complete");
    step3.classList.add("is-active");
  } else if (step === "step3") {
    step = "step4d";
    step3.classList.remove("is-active");
    step3.classList.add("is-complete");
    step4.classList.add("is-active");
  } else if (step === "step4d") {
    step = "complete";
    step4.classList.remove("is-active");
    step4.classList.add("is-complete");
  } else if (step === "complete") {
    step = "step1";
    step4.classList.remove("is-complete");
    step3.classList.remove("is-complete");
    step2.classList.remove("is-complete");
    step1.classList.remove("is-complete");
    step1.classList.add("is-active");
  }
}
