const getTemplate = () => {
  const translations = window.cookieWallTranslations;

  return `<div class="cookie-wall__wrapper">
    <div class="cookie-wall__text">${translations.text}
      <a href="${translations.url}" class="cookie-wall__link">${translations.pageTitle}</a>.
    </div>
    <button type="button" class="btn-primary btn-small js-approve-privacy">${translations.accept}</button>
  </div>`;
};

export default class CookieWall {
  constructor() {
    this.container = document.createElement('section');
    this.checkPrivacy();
  }

  removeContainer() {
    this.container.remove();
  }

  injectTemplate() {
    this.container.classList.add('cookie-wall');
    this.container.innerHTML = getTemplate();

    const button = this.container.querySelector('.js-approve-privacy');
    button.addEventListener('click', () => this.removeContainer());

    document.body.appendChild(this.container);
  }

  checkPrivacy() {
    if (!localStorage.getItem('cookie-wall')) {
      this.injectTemplate();
    }
    localStorage.setItem('cookie-wall', true);
  }
}

new CookieWall();
