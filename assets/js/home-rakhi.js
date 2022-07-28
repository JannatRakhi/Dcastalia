// var photos = ["assets/images/dynamic/feature/Kunjochaya.jpg", "ssets/images/dynamic/feature/BISWAS AMROJURY.jpg", "assets/images/dynamic/feature/Mask Group 176.jpg"];
// document.querySelector

// function next() {

// }

// $('.cards-init').slick({
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 2000,
//   });

$(function () {
   $(".slider").slick({
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: false,
      prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-angle-left"></i></span>',
      nextArrow: '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
   });
});
