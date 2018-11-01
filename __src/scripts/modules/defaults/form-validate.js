const hasError = field => {

  // Don't validate submits, buttons, file and reset inputs, and disabled fields
  if (field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') return;

  // Get validity
  const validity = field.validity;
  const label = field.dataset.label.toLowerCase();

  // If valid, return null
  if (validity.valid) return;

  // If field is required and empty
  if (validity.valueMissing) return `Vul uw ${label} in.`;

  // If not the right type
  if (validity.typeMismatch) {
    // Email
    if (field.type === 'email') return 'Vul een geldig e-mailadres in';

    // URL
    if (field.type === 'url') return 'Please enter a URL.';

  }

  // If too short
  if (validity.tooShort) return `Please lengthen this text to ${field.getAttribute('minLength')} characters or more. You are currently using ${field.value.length} characters.`;

  // If too long
  if (validity.tooLong) return `Please shorten this text to no more than ${field.getAttribute('maxLength')} characters. You are currently using ${field.value.length} characters.`;

  // If number input isn't a number
  if (validity.badInput) return 'Please enter a number.';

  // If a number value doesn't match the step interval
  if (validity.stepMismatch) return 'Please select a valid value.';

  // If a number field is over the max
  if (validity.rangeOverflow) return `Please select a value that is no more than ${field.getAttribute('max')}.`;

  // If a number field is below the min
  if (validity.rangeUnderflow) return `Please select a value that is no less than ${field.getAttribute('min')}.`;

  // If pattern doesn't match
  if (validity.patternMismatch) {

      // If pattern info is included, return custom error
      if (field.hasAttribute('title')) return field.getAttribute('title');

      // Otherwise, generic error
      return 'Please match the requested format.';

  }

  // If all else fails, return a generic catchall error
  return 'The value you entered for this field is invalid.';

};

// Show the error message
const showFieldError = (field, error) => {

  // Add error class to field
  field.classList.add('error');

  // Get field id or name
  const id = field.id || field.name;
  if (!id) return;

  // Check if error message field already exists
  // If not, create one
  let message = field.form.querySelector(`#error-for-${id}`);
  if (!message) {
    message = document.createElement('div');
    message.classList.add('error-message');
    message.id = `error-for-${id}`;
    field.parentNode.insertBefore( message, field.nextSibling );

    // If the field is a radio button or checkbox, insert error after the label
    let label;
    if (field.type === 'radio' || field.type ==='checkbox') {
      label = field.form.querySelector('label[for="' + id + '"]') || field.parentNode;
      if (label) {
        label.parentNode.insertBefore( message, label.nextSibling );
      }
    }

    // Otherwise, insert it after the field
    if (!label) {
      field.parentNode.insertBefore( message, field.nextSibling );
    }
  }

  // Add ARIA role to the field
  field.setAttribute('aria-describedby', `#error-for-${id}`);
  field.setAttribute('aria-invalid', true);

  // Update error message
  message.innerHTML = error;

  // Show error message
  message.style.display = 'block';
  message.style.visibility = 'visible';
};

// Remove the error message
const removeFieldError = field => {

  // Remove error class to field
  field.classList.remove('error');

  // If the field is a radio button and part of a group, remove error from all and get the last item in the group
  if (field.type === 'radio' && field.name) {
    let group = document.getElementsByName(field.name);
    if (group.length > 0) {
      for (let i = 0; i < group.length; i++) {
        // Only check fields in current form
        if (group[i].form !== field.form) continue;
        group[i].classList.remove('error');
      }
      field = group[group.length - 1];
    }
  }

  // Remove ARIA role from the field
  field.removeAttribute('aria-describedby');
  field.removeAttribute('aria-invalid');

  // Get field id or name
  var id = field.id || field.name;
  if (!id) return;

  // Check if an error message is in the DOM
  const message = field.form.querySelector(`#error-for-${id}`);
  if (!message) return;

  // If so, hide it
  message.innerHTML = '';
  message.style.display = 'none';
  message.style.visibility = 'hidden';
};

export const setupFormForValidation = form => {
  form.setAttribute('novalidate', true);
  const requiredFields = form.querySelectorAll('[required]');

  requiredFields.forEach(field => {
    field.addEventListener('blur', function(event) {

      const error = hasError(this);
      // If there's an error, show it
      if (error) {
        showFieldError(this, error);
        return;
      }

      // Otherwise, remove any existing error message
      removeFieldError(this);

    });
  });
};

export const showFormError = (form, messageText) => {
  let message = form.querySelector('.form-message');
  if (!message) {
    message = document.createElement('p');
    message.className = 'form-message';
    form.insertBefore( message, form.firstChild );
  }
  message.innerHTML = messageText;
};

export const removeFormError = form => {
  let message = form.querySelector('.form-message');
  if (message) message.innerHTML = '';
};

export const validateForm = form => {

  const requiredFields = form.querySelectorAll('[required]');

  let error, hasErrors;
  requiredFields.forEach(field => {
    const error = hasError(field);
    if (error) {
      showFieldError(field, error);
      if (!hasErrors) {
        hasErrors = field;
      }
    }
  });

  // If there are errrors, don't submit form and focus on first element with error
  if (hasErrors) {
    hasErrors.focus();
    showFormError(form, 'Niet alle velden zijn correct ingevuld.');
    return false;
  } else {
    removeFormError(form);
  }
  return true;
};
