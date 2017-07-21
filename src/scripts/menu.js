(() => {
  const button = document.querySelector('.menu__trigger');
  const menu = document.querySelector('.menu__list');
  const body = document.querySelector('body');

  button.addEventListener('click', () => {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('is-active', !expanded);
    body.classList.toggle('is-active', !expanded);
  });
})();
