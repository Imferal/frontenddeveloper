require ('../index.html'); // Просим WebPack Dev Server следить за index.html
import './style.scss'; // Импортируем стили

// Работа бургер-меню
import {toggleBurgerMenu} from './js/toggleBurgerMenu';
document.getElementById ('burger').addEventListener ('click', toggleBurgerMenu);

// Анимация формы
import {animateInput} from './js/animateInput';
animateInput ();

// Изменение высоты поля для ввода сообщения в зависимости от контента
import {autosizeTextarea} from './js/autosizeTextarea';
autosizeTextarea ();
