export function toggleBurgerMenu () {
  const mobileMenu = document.querySelector ('.menu');

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
    }
  });
}
