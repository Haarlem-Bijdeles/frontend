import $script from 'scriptjs';
import settings from '../config';

$script(`https://www.google.com/recaptcha/api.js?render=${settings.GOOGLE_RECAPTCHA_API}`, () => {
  window.grecaptcha.ready(() => {
    window.grecaptcha
      .execute('6LfUDooUAAAAAHbVam35F30zBq8Az5i7P7GDtyJD', { action: 'contact' })
      .then((token) => {
        document.querySelector('input[name=recaptcha]').value = token;
      });
  });
});
