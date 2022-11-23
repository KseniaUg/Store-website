import Swiper, { Navigation } from 'swiper';

Swiper.use([Navigation]);

const swiper = new Swiper('.publications__content', {
  // slidesPerView: 'auto',
  slidesPerView: 4,
  spaceBetween: 10,
  loop: true,

  navigation: {
    nextEl: '.publications__slider-btn--next',
    prevEl: '.publications__slider-btn--prev',
  },

});
