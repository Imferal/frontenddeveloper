export function smoothScroll () {
  const anchors = document.querySelectorAll ('a[href*="#"]');

  for (let anchor of anchors) {
    // На каждую из найденных ссылок вешаем событие
    anchor.addEventListener ('click', function (e) {
      e.preventDefault ();
      // Находим цель перехода
      const blockID = anchor.getAttribute ('href');
      // Добавляем высоту шапки
      const fixedHeaderHeight = 30;
      // Вычисляем расстояние
      const top =
        document.querySelector ('' + blockID).offsetTop - fixedHeaderHeight;
      // Прокрутка до вычесленной точки, по левому краю, плавно
      window.scrollTo ({
        top,
        left: 0,
        behavior: 'smooth',
      });
    });
  }
}
