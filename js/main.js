var myCarousel = document.querySelector("#myCarousel");
var carousel = new bootstrap.Carousel(myCarousel);

// sticky
function stickyElement(e) {
  var header = document.querySelector(".default-header");
  header.classList.toggle("sticky", window.scrollY > 10);
}

window.addEventListener("scroll", stickyElement);

// $(document).ready(function () {
//   $(".icon").click(function () {
//     $(".icon").toggleClass("active");
//   });
// });

// function clickElement() {
//   var icon = document.querySelector(".icon");
//   icon.classList.toggle("active");
// }

window.addEventListener("click", clickElement);
// window.addEventListener("touchstart", clickElement);
