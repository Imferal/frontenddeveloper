export function animateInput () {
  let formFields = document.querySelectorAll ('.form__input');

  setInputStatus ();

  //   formContainer.addEventListener ('click', e => {
  document.addEventListener ('click', e => {
    setInputStatus ();
    if (e.target.classList.contains ('form__input')) {
      e.target.labels[0].classList.add ('form__label_active');
    } else {
      setInputStatus ();
    }
  });

  function setInputStatus () {
    for (let elem of formFields) {
      elem.value === ''
        ? elem.labels[0].classList.remove ('form__label_active')
        : elem.labels[0].classList.add ('form__label_active');
    }
  }
}
