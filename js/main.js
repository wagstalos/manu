$(document).ready(function () {
  $(".icon").click(function () {
    $(".icon").toggleClass("active");
  });
      // plugin modalVideo
      // $(".js-video-button").modalVideo({
      //   youtube: {
      //     controls: 0,
      //     nocookie: true
      //   }
      // });
});
AOS.init();
// sticky
function stickyElement(e) {
  var header = document.querySelector(".default-header");
  header.classList.toggle("sticky", window.scrollY > 10);
}

window.addEventListener("scroll", stickyElement);

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 20,
  autoplay: {
    delay: 20000,
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

var swiper3 = new Swiper(".mySwiper-manu", {
  pagination: {
    el: ".swiper-pagination-manu",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.05,
      spaceBetween: 5,
    },
    1024: {
      slidesPerView: 2.2,
      spaceBetween: 10,
    },
  },
});

//news;
// function SubForm() {
//   $.ajax({
//     url: "https://api.apispreadsheets.com/data/16165/",
//     type: "post",
//     data: $("#myForm").serializeArray(),
//     success: function () {
//       alert("Email cadastrado com sucesso :)");
//     },
//     error: function () {
//       alert("Aconteceu um problema :(");
//     },
//   });
// }

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("sw.js")
    .then(function (registration) {
      // Registro realizado com sucesso (NOTA: Observe que declaro um arquivo chamado sw.js, ele é onde colocaremos as notações do nosso Service Workers)
      console.log(
        "O ServiceWorker foi registrado com escopo: ",
        registration.scope
      );
    })
    .catch(function (err) {
      // O registro falhou :(
      console.log("O registro do ServiceWorker falhou com o erro: ", err);
    });
}

if (window.Notification && Notification.permission !== "denied") {
  Notification.requestPermission(function (status) {
    // status is "granted", if accepted by user
    var n = new Notification("BLACK FRIDAY", {
      body: "Fique de olho na nossa promoção de BLACK FRIDAY!",
      icon: "img/icons/icon-72x72.png", // optional
    });
  });
}
