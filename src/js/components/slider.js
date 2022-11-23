import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.latest__content', {
  // slidesPerView: 'auto',
  slidesPerView: 3,
  spaceBetween: 40,
  loop: true,

  navigation: {
    nextEl: '.latest__slider-btn--next',
    prevEl: '.latest__slider-btn--prev',
  },

});

