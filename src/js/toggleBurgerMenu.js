export function toggleBurgerMenu () {
  const mobileMenu = document.querySelector ('.menu');
  const formButton = document.querySelector ('.header__button');

  mobileMenu.classList.toggle ('flex');
  mobileMenu.classList.toggle ('hidden');
  document.body.classList.toggle ('disable-scroll');

  mobileMenu.addEventListener ('click', e => {
    if (
      mobileMenu.classList.contains ('flex') &&
      e.target.classList.contains ('menu__link')
    ) {
      mobileMenu.classList.remove ('flex');
      mobileMenu.classList.add ('hidden');
      document.body.classList.remove ('disable-scroll');
    }
  });

  formButton.addEventListener ('click', e => {
    mobileMenu.classList.remove ('flex');
    mobileMenu.classList.add ('hidden');
    document.body.classList.remove ('disable-scroll');
  });
}
