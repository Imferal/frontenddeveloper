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

// Конфигурация слайдера
var mySwiper = new Swiper ('.swiper-container', {
  autoplay: {
    delay: 5000,
    disableOnInteraction: true,
  },
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
});

/// Увеличение изображения по клику
const img = document.querySelectorAll ('.screenshot__img'),
  backPop = document.getElementById ('backPop'),
  bigImg = document.getElementById ('bigImg'),
  header = document.getElementById ('header');

for (let i = 0; i < img.length; i++) {
  img[i].setAttribute ('data-value', i);
}

[].forEach.call (img, el => {
  let src = el.getAttribute ('src');
  el.onclick = function () {
    backPop.style.display = 'block';
    backPop.classList.remove ('fadeOut');
    backPop.classList.add ('fadeIn');
    bigImg.setAttribute ('src', src);
    header.style.display = 'none';
    document.body.classList.add ('disable-scroll');
  };
});

backPop.onclick = function () {
  backPop.classList.add ('fadeOut');
  document.body.classList.remove ('disable-scroll');
  header.style.display = 'block';
  backPop.style.display = 'none';
};
