import { setupFormForValidation }  from './defaults/form-validate';
import { submitAjaxForm } from './defaults/form-submit-ajax';

const forms = document.querySelectorAll('form');
forms.forEach(form => setupFormForValidation(form));

const ajaxForms = document.querySelectorAll('.js-ajax-form');
ajaxForms.forEach(form => form.addEventListener('submit', submitAjaxForm));
