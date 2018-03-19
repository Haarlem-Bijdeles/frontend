import { validateForm, showFormError, removeFormError } from './form-validate';

export const submitAjaxForm = function(event) {
  event.preventDefault();

  this.classList.add('form--loading');

  removeFormError(this);

  if (!validateForm(this)) return;

  const formData = new FormData(this);
  const xhr = new XMLHttpRequest();

  // save the comment in the database
  xhr.open('POST', window.site.ajax_url, true);
  xhr.responseType = 'json';
  xhr.onload = () => {
      console.log(xhr.response);
    if (xhr.readyState === 4 && xhr.status === 200) {
      if (xhr.response.success) {
        this.classList.add('form--success');
        this.innerHTML = xhr.response.data;
      } else {
        showFormError(this, xhr.response.data);
      }
    } else {
      showFormError(this, 'Er ging iets mis bij het verzenden van het formulier. Probeer het nog eens.');
    }
  };

  xhr.onerror = error => {
      console.log(xhr.response);
    showFormError(this, 'Er ging iets mis bij het verzenden van het formulier. Probeer het nog eens.');
  };

  xhr.onloadend = event => {
    this.classList.remove('form--loading');
  };

  xhr.send(formData);
};
