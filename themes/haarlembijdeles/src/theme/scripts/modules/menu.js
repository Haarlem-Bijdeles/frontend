const toggleMenu = () => {
  const button = document.querySelector('.js-trigger-menu');
  const menu = document.querySelector('.js-menu');
  const body = document.querySelector('body');

  const expanded = button.getAttribute('aria-expanded') === 'true';
  button.setAttribute('aria-expanded', String(!expanded));
  menu.classList.toggle('is-active', !expanded);
  body.classList.toggle('is-active', !expanded);
};

(() => {
  const button = document.querySelector('.js-trigger-menu');
  button.addEventListener('click', toggleMenu);
})();
