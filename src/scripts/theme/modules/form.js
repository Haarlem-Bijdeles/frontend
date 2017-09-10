(() => {

  if (!document.querySelector('.js-contact-form')) return;

  const form = document.querySelector('.js-contact-form');
  const commentArea = form.querySelector('.js-message');
  const nameInput = form.querySelector('.js-name');
  const messageElement = document.querySelector('#feedback');

  nameInput.addEventListener('invalid', (e) => {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity('Vul je naam in.');
    }
  });

  commentArea.addEventListener('invalid', (e) => {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity('Vul een bericht in.');
    }
  });

  commentArea.addEventListener('input', function(e) {
    e.target.setCustomValidity('');
  });

  // send form data with JavaScript
  form.addEventListener('submit', function(event) {

    const formData = new FormData();
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach((input) => {
      const name = input.getAttribute('name');
      const value = input.value;
      formData.append(name, value);
    });

    const xhr = new XMLHttpRequest();

    // save the comment in the database
    xhr.open('POST', site.ajax_url, true);

    xhr.onload = function () {

    };

    xhr.onerror = function (error) {
      messageElement.className = 'message error';
      messageElement.innerHTML = 'There was an error posting the comment. Please try again.';
    };
    xhr.onloadend = function (evt) {
      if (xhr.readyState === 4) {
        form.className = 'message success';
        form.innerHTML = xhr.response;
      }
    };

    xhr.send(formData);

    // always call preventDefault at the end, see: http://molily.de/javascript-failure/
    event.preventDefault();
  });
})();
