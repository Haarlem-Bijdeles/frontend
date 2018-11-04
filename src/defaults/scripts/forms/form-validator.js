import FieldValidator from './field-validator';

export default class FormValidator {
  constructor(form) {
    this.form = form;
    this.requiredFields = this.form.querySelectorAll('[required]');
    this.formFeedback = null;
    this.requiredFieldsValiders = Array.from(this.requiredFields).map(
      field => new FieldValidator(field),
    );
    this.form.setAttribute('novalidate', true);
    this.bindFieldEvents();
  }

  bindFieldEvents() {
    this.requiredFields.forEach(field => {
      field.addEventListener('blur', () => this.removeErrorOnBlurField());
    });
  }

  showError(text) {
    if (!this.formFeedback) {
      this.formFeedback = document.createElement('p');
      this.formFeedback.className = 'form-formFeedback';
      this.formFeedback.setAttribute('tabindex', -1);
      this.form.insertBefore(this.formFeedback, this.form.firstChild);
    }
    this.formFeedback.innerHTML = text;
    this.formFeedback.focus();
  }

  removeError() {
    if (this.formFeedback) this.formFeedback.innerHTML = '';
  }

  removeErrorOnBlurField() {
    // const isValid = this.requiredFieldsValiders.every(field => field.validate());
    // if (isValid) this.removeError();
  }

  validateFields() {
    // validate every field of the form
    const isValid = this.requiredFieldsValiders.map(field => field.validate());
    // return false when at least one field is not valid
    return !isValid.includes(false);
  }

  validate() {
    const isValid = this.validateFields();
    return new Promise(
      (resolve, reject) =>
        isValid
          ? resolve()
          : reject(Error(window.formTranslations.form.missingFields)),
    );
  }
}
