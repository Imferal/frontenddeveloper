$ (function () {
  // $('.button-popup').click(modalOpen); // Открытие модального окна
  // $('.popup__close').click(modalClose); // Закрытие при нажатии на кнопку
  // $('.popup__fade').click(modalClose); // Закрытие при клике на оверлей
  // $('body').keydown(function(e) { // Закрытие при нажатии на ESC
  //   if (e.which == 27) {
  //     e.preventDefault(); // Отключаем стандартное поведение браузера (например, выход из полноэкранного режима)
  //     modalClose(e);
  //   }
  // });

  // Закрытие модального окна
  // function modalClose(e) {
  // Отключаем перезагрузку страницы
  // e.preventDefault();
  // Скрываем окно
  //   $('.popup__fade').css('display', 'none');
  //   $('.popup__container').fadeOut();
  //   $('.popup__overlay').removeClass('blurred');
  //   $('body').css('overflow-y', 'auto');
  //   $('.popup__overlay').css('padding-right', 0);
  // };

  // Открытие модального окна
  // function modalOpen(event) {
  // Отключаем перезагрузку страницы
  // event.preventDefault();
  //   $('.popup__fade').css('display', 'block'); // Показываем оверлей
  //   $('.popup__container').fadeIn(); // Показываем модальное окно
  //   $('.popup__container').css('display', 'flex');
  //   $('.popup__overlay').addClass('blurred');
  //   $('.js-first-input').focus(); // Фокус на первом поле формы
  //   scrollDisable();
  // };

  // Запрещаем скролл, убираем дёргание экрана
  // var scrollDisable = function() {
  //   var oldBodyOuterWidth = $('body').outerWidth(true);
  //   var oldScrollTop = $('html').scrollTop();
  //   newBodyOuterWidth = $('body').outerWidth(true);
  //   $('body').css('overflow-y', 'hidden');
  //   $('.popup__overlay').css('padding-right', (newBodyOuterWidth - oldBodyOuterWidth) + 'px');
  //   $('html').scrollTop(oldScrollTop);
  // };

  // Удержание TAB внутри формы
  // $('#last-element').keydown(function(e) {
  //   if (e.which == 9) { // Нажатие на TAB
  //     e.preventDefault(); // Прекращает стандартное поведение - переход далее по табиндексу
  //     $('.popup__close').focus(); // Возвращает фокус на первый инпут
  //   }
  // });

  // Загрузка файла
  // var input = document.getElementById('userAttachment');
  // var label = document.querySelector('.popup__file_span'),
  //   labelVal = label.innerHTML;
  // input.addEventListener('change', function(e) {
  //   var fileName = '';
  //   if (this.files && this.files.length > 1)
  //     fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
  //   else
  //     fileName = e.target.value.split('\\').pop();
  //   if (fileName)
  //     label.innerHTML = fileName;
  //   else
  //     label.innerHTML = labelVal;
  // });

  // Исправляем баг Firefox, не позволяющий брать file в фокус
  // input.addEventListener('focus', function() {
  //   input.classList.add('has-focus');
  // });
  // input.addEventListener('blur', function() {
  //   input.classList.remove('has-focus');
  // });

  // Добавляем метод "Телефон или почта"
  // $.validator.methods.email = function(value, element) {
  //   return this.optional(element) || /[a-z]+@[a-z]+\.[a-z]+/.test(value) ||
  //     /^(\+)?(\(\d{2,3}\) ?\d|\d)(([ \-]?\d)|( ?\(\d{2,3}\) ?)){5,12}\d$/.test(value);
  // }

  $ ('.form').validate ({
    rules: {
      field: {
        required: true,
        email: true,
      },
      terms: {
        required: true,
      },
    },
    submitHandler: function (form) {
      var formData = new FormData (form);

      $.ajax ({
        url: './mail.php',
        type: 'POST',
        data: formData,
        contentType: false,
        processData: false,
        success: function (data) {
          console.log ('success');
          window.location.href = '/thank-you.html ';
        },
      });
    },
    messages: {
      terms: {
        required: 'Необходимо принять условия',
      },
    },
  });

  // Очищаем плейсхолдер при фокусе
  // $('input,textarea').focus(function() {
  //   $(this).data('placeholder', $(this).attr('placeholder'))
  //   $(this).attr('placeholder', '');
  //   $(this).css('color', 'rgba(0, 0, 0, 1)');
  // });
  // Возвращаем плейсхолдер, если фокус убран
  // $('input,textarea').blur(function() {
  //   $(this).attr('placeholder', $(this).data('placeholder'));
  //   if (!$(this).val()) {
  //     $(this).css('color', 'rgba(0, 0, 0, .5)');
  //   }
  // });
});

jQuery.extend (jQuery.validator.messages, {
  required: 'Это поле обязательно для заполнения',
  // remote: "Please fix this field.",
  email: 'Пожалуйста, укажите номер телефона или email',
  // url: "Please enter a valid URL.",
  // date: "Please enter a valid date.",
  // dateISO: "Please enter a valid date (ISO).",
  // number: "Please enter a valid number.",
  // digits: "Please enter only digits.",
  // creditcard: "Please enter a valid credit card number.",
  // equalTo: "Please enter the same value again.",
  // accept: "Please enter a value with a valid extension.",
  // maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
  // minlength: jQuery.validator.format("Please enter at least {0} characters."),
  // rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
  // range: jQuery.validator.format("Please enter a value between {0} and {1}."),
  // max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
  // min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
