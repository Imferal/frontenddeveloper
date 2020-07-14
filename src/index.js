require ('../index.html'); // Просим WebPack Dev Server следить за index.html
import './style.scss'; // Импортируем стили

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';
// import Swiper styles
import 'swiper/swiper.scss';

// Работа бургер-меню
import {toggleBurgerMenu} from './js/toggleBurgerMenu';
document.getElementById ('burger').addEventListener ('click', toggleBurgerMenu);

// Анимация формы
import {animateInput} from './js/animateInput';
animateInput ();

// Плавная прокрутка
import {smoothScroll} from './js/smoothScroll';
smoothScroll ();

// Изменение высоты поля для ввода сообщения в зависимости от контента
import {autosizeTextarea} from './js/autosizeTextarea';
autosizeTextarea ();

// init Swiper:
var mySwiper = new Swiper ('.swiper-container', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,
  navigation: {
    prevEl: '.slider__button_left',
    nextEl: '.slider__button_right',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: 'true',
  },
  //   breakpoints: {
  //     1280: {
  //       slidesPerView: 3,
  //       spaceBetween: 30,
  //     },

  //     768: {
  //       slidesPerView: 2,
  //       spaceBetween: 30,
  //     },

  //     320: {
  //       slidesPerView: 1,
  //     },
  //   },
});
