export default class FieldValidator {
  constructor(field) {
    this.field = field;
    this.bindEvents();
  }

  bindEvents() {
    this.field.addEventListener('blur', () => this.validate());
  }

  validate() {
    const error = this.getErrorMessage();
    // If there's an error, show it
    if (error) {
      // Add error class to field
      this.showErrorMessage(error);
      this.field.classList.add('error');
    } else {
      // Otherwise, remove any existing error message
      this.hideErrorMessage();
      this.field.classList.remove('error');
    }
    return !error;
  }

  showErrorMessage(error) {
    // Get field id or name
    const id = this.field.id || this.field.name;
    if (!id) return;

    // Check if error message field already exists
    // If not, create one
    let message = this.field.form.querySelector(`#error-for-${id}`);
    if (!message) {
      message = document.createElement('div');
      message.classList.add('error-message');
      message.id = `error-for-${id}`;
      this.field.parentNode.insertBefore(message, this.field.nextSibling);

      // If the field is a radio button or checkbox, insert error after the label
      let label;
      if (this.field.type === 'radio' || this.field.type === 'checkbox') {
        label = this.field.form.querySelector(`label[for="${id}"]`) || this.field.parentNode;
        if (label) {
          label.parentNode.insertBefore(message, label.nextSibling);
        }
      }

      // Otherwise, insert it after the field
      if (!label) {
        this.field.parentNode.insertBefore(message, this.field.nextSibling);
      }
    }
    message.innerHTML = error;
  }

  isValid() {
    return (this.getErrorMessage() === null);
  }

  hideErrorMessage() {
    // If the field is a radio button and part of a group, remove error
    // from all and get the last item in the group
    if (this.field.type === 'radio' && this.field.name) {
      const group = document.getElementsByName(this.field.name);
      if (group.length > 0) {
        for (let i = 0; i < group.length; i += 1) {
          // Only check fields in current form
          if (group[i].form !== this.field.form) continue;
          group[i].classList.remove('error');
        }
        this.field = group[group.length - 1];
      }
    }

    // Remove ARIA role from the field
    this.field.removeAttribute('aria-describedby');
    this.field.removeAttribute('aria-invalid');

    // Get field id or name
    const id = this.field.id || this.field.name;
    if (!id) return;

    // Check if an error message is in the DOM
    const message = this.field.form.querySelector(`#error-for-${id}`);
    if (!message) return;

    // If so, hide it
    message.innerHTML = '';
  }


  getErrorMessage() {
    // Don't validate submits, buttons, file and reset inputs, and disabled fields
    if (this.field.disabled
      || this.field.type === 'file'
      || this.field.type === 'reset'
      || this.field.type === 'submit'
      || this.field.type === 'button') return null;

    // Get validity
    const { validity, value } = this.field;
    const translations = window.formTranslations.field;
    const label = this.field.dataset.label.toLowerCase();

    // If valid, return null
    if (validity.valid) return null;

    // If not the right type
    if (validity.typeMismatch) {
      // Email
      if (this.field.type === 'email') return translations.typeMismatch.email;

      // URL
      if (this.field.type === 'url') return translations.typeMismatch.url;
    }

    // If too short
    if (validity.tooShort) return translations.tooShort.replace('%minLength%', this.field.getAttribute('minLength')).replace('%length%', value.length);

    // If too long
    if (validity.tooLong) return translations.tooLong.replace('%maxLength%', this.field.getAttribute('maxLength')).replace('%length%', value.length);

    // If number input isn't a number
    if (validity.badInput) return translations.badInput;

    // If a number value doesn't match the step interval
    if (validity.stepMismatch) return translations.stepMismatc;

    // If a number field is over the max
    if (validity.rangeOverflow) return translations.rangeOverflow.replace('%max%', this.field.getAttribute('max'));

    // If a number field is below the min
    if (validity.rangeUnderflow) return translations.rangeUnderflow.replace('%min%', this.field.getAttribute('min'));

    // If pattern doesn't match
    if (validity.patternMismatch) {
      // If pattern info is included, return custom error
      if (this.field.hasAttribute('title')) return this.field.getAttribute('title');

      // Otherwise, generic error
      return translations.patternMismatch;
    }

    // If field is required and empty
    if (validity.valueMissing) return translations.valueMissing.replace('%label%', label);


    // If all else fails, return a generic catchall error
    return translations.invalid;
  }
}

