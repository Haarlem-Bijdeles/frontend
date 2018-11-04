import FormSubmitAsync from 'defaults/scripts/forms/form-submit-async';

const forms = document.querySelectorAll('.js-ajax-form');
forms.forEach(form => new FormSubmitAsync(form));
