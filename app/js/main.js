$(function () {
  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src = "images/arrows-left.svg" alt="стрелка влево"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src = "images/arrows-right.svg" alt="стрелка вправо"></img>',
    asNavFor: '.slider-dots',
  });

  $('.slider-dots').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    asNavFor: '.header__slider',
  });

  $('.serf-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<img class="slider-arrows slider-arrows__left" src = "images/arrows-left.svg" alt="стрелка влево"></img>',
    nextArrow:
      '<img class="slider-arrows slider-arrows__right" src = "images/arrows-right.svg" alt="стрелка вправо"></img>',
  });
});
