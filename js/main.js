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

var swiper = new Swiper(".mySwiper-manu", {
  pagination: {
    el: ".swiper-pagination",
    // type: "progressbar",
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

function calculaIdade(dataNasc) {
  var dataAtual = new Date();
  var anoAtual = dataAtual.getFullYear();
  var anoNascParts = dataNasc.split("/");
  var diaNasc = anoNascParts[0];
  var mesNasc = anoNascParts[1];
  var anoNasc = anoNascParts[2];
  var idade = anoAtual - anoNasc;
  var mesAtual = dataAtual.getMonth() + 1;
  //Se mes atual for menor que o nascimento, nao fez aniversario ainda;
  if (mesAtual < mesNasc) {
    idade--;
  } else {
    //Se estiver no mes do nascimento, verificar o dia
    if (mesAtual == mesNasc) {
      if (new Date().getDate() < diaNasc) {
        //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
        idade--;
      }
    }
  }
  return idade;
}
// document.write(calculaIdade('25/03/1989'));
document.getElementById("idade").innerHTML = calculaIdade("25/03/1993");
