"use strict";

$(function () {
  /* slideShow */
  let nowPage = 0;
  let nextPage = 1;
  const slides = $('.mv__slideShow img');
  const fadeTime = 1500;
  const showTime = 3000;
  const slideShow = () => {
    nextPage = (nowPage + 1) % 3;
    slides.eq(nowPage).fadeOut(fadeTime);
    slides.eq(nextPage).fadeIn(fadeTime);
    nowPage = nextPage;
  };
  slides.hide();
  slides.eq(0).show();
  setInterval(slideShow, showTime);

  /* BackToTop */
  $('.backToTop').click(function () {
    $('html, body').animate(
      { scrollTop: 0 },
      { duration: 1000 },
      { easing: 'ease-in-out' }
    );
  });

    /* pageLink */
  let aboutLocate = $('#aboutLocate').offset().top;
    $('#about').click(function () {
    $(window).scrollTop(aboutLocate);
  });

});