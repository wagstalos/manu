// var myCarousel = document.querySelector("#myCarousel");
// var carousel = new bootstrap.Carousel(myCarousel);

// sticky
function stickyElement(e) {
  var header = document.querySelector(".default-header");
  header.classList.toggle("sticky", window.scrollY > 10);
}

window.addEventListener("scroll", stickyElement);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 20,
  loop: false,
  loopFillGroupWithBlank: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      // enabled: false,
    },
  },
});

// $(document).ready(function () {
//   $(".icon").click(function () {
//     $(".icon").toggleClass("active");
//   });
// });

// function clickElement() {
//   var icon = document.querySelector(".icon");
//   icon.classList.toggle("active");
// }

// window.addEventListener("click", clickElement);
// window.addEventListener("touchstart", clickElement);
