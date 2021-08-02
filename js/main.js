// sticky
function stickyElement(e) {
  var header = document.querySelector(".default-header");
  header.classList.toggle("sticky", window.scrollY > 10);
}

window.addEventListener("scroll", stickyElement);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },

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
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
      // enabled: false,
    },
  },
});

//news;
function SubForm() {
  $.ajax({
    url: "https://api.apispreadsheets.com/data/16165/",
    type: "post",
    data: $("#myForm").serializeArray(),
    success: function () {
      alert("Email cadastrado com sucesso :)");
    },
    error: function () {
      alert("Aconteceu um problema :(");
    },
  });
}

// function SubForm() {
//   fetch("https://api.apispreadsheets.com/data/16165/", {
//     method: "POST",
//     body: JSON.stringify({ data: { emails: "" } }),
//   }).then((res) => {
//     if (res.status === 201) {
//       // SUCCESS
//       alert("sucesso");
//     } else {
//       // ERROR
//       alert("erro");
//     }
//   });
// }

$(document).ready(function () {
  $(".icon").click(function () {
    $(".icon").toggleClass("active");
  });
});

// function clickElement() {
//   var icon = document.querySelector(".icon");
//   icon.classList.toggle("active");
// }

// window.addEventListener("click", clickElement);
// window.addEventListener("touchstart", clickElement);
