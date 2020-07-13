export function toggleBurgerMenu () {
  const mobileMenu = document.querySelector ('.menu');

  mobileMenu.classList.toggle ('flex');
  mobileMenu.classList.toggle ('hidden');

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

// let formFields = document.querySelectorAll ('.form__input');

//   setInputStatus ();

//   //   formContainer.addEventListener ('click', e => {
//   document.addEventListener ('click', e => {
//     setInputStatus ();
//     if (e.target.classList.contains ('form__input')) {
//       e.target.labels[0].classList.add ('form__label_active');
//     } else {
//       setInputStatus ();
//     }
//   });
