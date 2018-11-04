const hasError = require('./../scripts/form-validate');

describe('formValidate', () => {
  it('Correct field', () => {
    const field = {
      validity: {
        valid: true,
      },
    };
    expect(hasError(field)).toBe(null);
  });

  it('Empty field', () => {
    const field = {
      dataset: {
        label: 'Naam veld',
      },
      validity: {
        valid: false,
        valueMissing: true,
      },
    };
    expect(hasError(field)).toBe('Vul uw naam veld in.');
  });

  it('Wrong emailadres', () => {
    const field = {
      type: 'email',
      validity: {
        valid: false,
        typeMismatch: true,
      },
    };
    expect(hasError(field)).toBe('Please enter an email address.');
  });

  it('Too short', () => {
    const field = {
      validity: {
        valid: false,
        tooShort: true,
      },
      getAttribute: () => 5,
      value: 'test',
    };
    expect(hasError(field)).toBe(
      `Please lengthen this text to ${field.getAttribute(
        'minLength',
      )} characters or more. You are currently using ${
        field.value.length
      } characters.`,
    );
  });

  it('Too long', () => {
    const field = {
      validity: {
        valid: false,
        tooLong: true,
      },
      getAttribute: () => 1,
      value: 'test',
    };
    expect(hasError(field)).toBe(
      `Please shorten this text to no more than ${field.getAttribute(
        'maxLength',
      )} characters. You are currently using ${field.value.length} characters.`,
    );
  });
});
