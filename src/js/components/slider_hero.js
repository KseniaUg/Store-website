import Swiper, { Pagination} from 'swiper';

Swiper.use([Pagination]);

const swiper = new Swiper('.hero__swiper', {
  // slidesPerView: 'auto',
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },


});
