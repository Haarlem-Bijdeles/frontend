import FormValidator from './form-validator';

export default class FormSubmitAsync extends FormValidator {
  constructor(form) {
    super(form);
    this.buttons = this.form.querySelectorAll('[type=submit]');
    this.form.addEventListener('submit', event => this.submit(event));
  }

  activateButtons(enable) {
    this.buttons.forEach(button => {
      if (enable) {
        button.removeAttribute('disabled');
      } else {
        button.setAttribute('disabled', 'disabled');
      }
    });
  }

  setLoadingState(isLoading) {
    this.form.classList.toggle('form--loading', isLoading);
    this.activateButtons(!isLoading);
  }

  showFeedback(response) {
    if (response) {
      this.form.innerHTML = response;
      this.form.classList.add('form--success');
    } else {
      this.showError(window.formTranslations.form.submitError);
    }
  }

  submit(event) {
    this.setLoadingState(true);

    const url = this.form.getAttribute('action');
    const formData = new FormData(this.form);

    this.validate()
      .then(() =>
        fetch(url, {
          body: formData,
          method: 'POST',
        }),
      )
      .then(response => response.text())
      .then(response => this.showFeedback(response))
      .catch(error => this.showError(error.message))
      .finally(this.setLoadingState(false));
    event.preventDefault();
  }
}
