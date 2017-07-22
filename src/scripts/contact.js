(() => {


  if (!document.querySelector('.js-contact-form')) return;

  const form = document.querySelector('.js-contact-form');
  const commentArea = form.querySelector('.js-message');
  const nameInput = form.querySelector('.js-name');
  const messageElement = document.querySelector('#feedback');

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
    let formData = {};

    if (window.FormData && false) {
      formData = new FormData(form);
    } else {
      formData = ({
        action: 'submit_ajax_form',
        formkey: form.querySelector('[name=formkey]').value,
        security: form.querySelector('[name=security]').value,
        name: form.querySelector('[name=name]').value,
        email: form.querySelector('[name=email]').value,
        message: form.querySelector('[name=message]').value,
      });

      let str = '';
      for (let key in formData) {
          if (str != '') {
              str += '&';
          }
          str += key + "=" + encodeURIComponent(formData[key]);
      }
      formData = str;
    }


    const xhr = new XMLHttpRequest();

    // save the comment in the database
    xhr.open('POST', site.ajaxurl, true);
    //xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {

    };

    xhr.onerror = function (error) {
      messageElement.className = 'message error';
      messageElement.innerHTML = 'There was an error posting the comment. Please try again.';
    };
    xhr.onprogress = function (evt) {
      messageElement.innerHTML = 'Uploading: ' + evt.loaded / evt.total * 100;
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
