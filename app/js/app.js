$(document).ready(function($) {
  $(".slider").slick({
    centerMode: false,
    draggable: false,
    arrows: true,
    autoplay: false,
    autoplaySpeed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true
  });
});
$(document).ready(function($) {
  $(".slider-for").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: ".slider-nav"
  });
});
$(document).ready(function($) {
  $(".slider-nav").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for",
    dots: false,
    centerMode: true,
    focusOnSelect: true
  });
  new Vue({
    el: "#likes",
    data: {
      counter: 0
    }
  });
});
