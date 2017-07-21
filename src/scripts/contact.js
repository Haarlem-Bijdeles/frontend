(() => {

  if (!document.querySelector('.js-contact-form')) return;

  const form = document.querySelector('.js-contact-form');
  const commentArea = form.querySelector('.js-message');
  const nameInput = form.querySelector('.js-name');
  const messageElement = document.querySelector('#feedback');

  commentArea.addEventListener('invalid', function (e) {
    e.target.setCustomValidity('');
    if (!e.target.validity.valid) {
      e.target.setCustomValidity('Vul een bericht in.');
    }
  });

  commentArea.addEventListener('input', function (e) {
    e.target.setCustomValidity('');
  });

  function autosize(){
    var el = this;
    setTimeout(function(){
      el.style.cssText = 'height:auto;';
      el.style.cssText = 'height:' + (el.scrollHeight  + 5 ) + 'px';
    },0);
  }

  commentArea.addEventListener('keydown', autosize);

  // send form data with JavaScript
  if (window.FormData) {
    form.addEventListener('submit', (event) => {
      var formData = new FormData(form);

      const commentValue = commentArea.value;
      const nameValue = nameInput.value;

      var xhr = new XMLHttpRequest();
      // save the comment in the database
      xhr.open('POST', site.ajaxurl, true);
      xhr.onload = function () {

      };

      xhr.onerror = function (error) {
        messageElement.className = 'message error';
        messageElement.textContent = 'There was an error posting the comment. Please try again.';
      };
      xhr.onprogress = function (evt) {
        messageElement.textContent = 'Uploading: ' + evt.loaded / evt.total * 100;
      };
      xhr.onloadend = function (evt) {
        messageElement.className = 'message success';
        messageElement.textContent = 'Your comment was posted sucessfully.';
      };

      xhr.send(formData);

      // always call preventDefault at the end, see: http://molily.de/javascript-failure/
      event.preventDefault();
    });
  };
})();
