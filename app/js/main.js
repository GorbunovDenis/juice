$(function () {
  /*scroll menu*/

  $('.header__menu a').on('click', function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate(
      {
        scrollTop: top,
      },
      1500,
    );
  });

  /* Reviews - slider */

  let slider = $('#reviewSlider');

  slider.slick({
    dots: true,
    fade: true,
    infinite: true,
    autoplay: false,
    prevArrow:
      '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"  width="30pt" height="30pt" viewBox="0 0 40 40" version="1.1"><g><path d="M 12.941406 20.007812 L 30.324219 2.628906 C 30.925781 2.027344 30.925781 1.050781 30.324219 0.449219 C 29.722656 -0.148438 28.746094 -0.148438 28.148438 0.449219 L 9.675781 18.921875 C 9.074219 19.523438 9.074219 20.496094 9.675781 21.097656 L 28.148438 39.566406 C 28.757812 40.160156 29.734375 40.140625 30.324219 39.53125 C 30.898438 38.933594 30.898438 37.988281 30.324219 37.390625 Z M 12.941406 20.007812 "/></g></svg></button > ',
    nextArrow:
      '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="30pt" height="30pt" viewBox="0 0 40 40" version="1.1"><g><path d="M 30.34375 18.902344 L 11.84375 0.453125 C 11.238281 -0.152344 10.257812 -0.152344 9.652344 0.457031 C 9.046875 1.0625 9.046875 2.042969 9.65625 2.648438 L 27.054688 20 L 9.652344 37.351562 C 9.046875 37.957031 9.046875 38.9375 9.652344 39.542969 C 9.953125 39.847656 10.351562 40 10.75 40 C 11.144531 40 11.542969 39.847656 11.84375 39.546875 L 30.34375 21.097656 C 30.636719 20.808594 30.800781 20.410156 30.800781 20 C 30.800781 19.589844 30.636719 19.195312 30.34375 18.902344 Z M 30.34375 18.902344 "/></g></svg></button>',
  });

  $('.products__content').slick({
    dots: true,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    waitForAnimate: false,
    prevArrow:
      '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg"  width="30pt" height="30pt" viewBox="0 0 40 40" version="1.1"><g><path d="M 12.941406 20.007812 L 30.324219 2.628906 C 30.925781 2.027344 30.925781 1.050781 30.324219 0.449219 C 29.722656 -0.148438 28.746094 -0.148438 28.148438 0.449219 L 9.675781 18.921875 C 9.074219 19.523438 9.074219 20.496094 9.675781 21.097656 L 28.148438 39.566406 C 28.757812 40.160156 29.734375 40.140625 30.324219 39.53125 C 30.898438 38.933594 30.898438 37.988281 30.324219 37.390625 Z M 12.941406 20.007812 "/></g></svg></button > ',
    nextArrow:
      '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="30pt" height="30pt" viewBox="0 0 40 40" version="1.1"><g><path d="M 30.34375 18.902344 L 11.84375 0.453125 C 11.238281 -0.152344 10.257812 -0.152344 9.652344 0.457031 C 9.046875 1.0625 9.046875 2.042969 9.65625 2.648438 L 27.054688 20 L 9.652344 37.351562 C 9.046875 37.957031 9.046875 38.9375 9.652344 39.542969 C 9.953125 39.847656 10.351562 40 10.75 40 C 11.144531 40 11.542969 39.847656 11.84375 39.546875 L 30.34375 21.097656 C 30.636719 20.808594 30.800781 20.410156 30.800781 20 C 30.800781 19.589844 30.636719 19.195312 30.34375 18.902344 Z M 30.34375 18.902344 "/></g></svg></button>',

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  });

  $('.products-card__num').styler();
});

/* Burger-menu */
$(document).ready(function () {
  $('.header__burger').click(function (event) {
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
  });
});
