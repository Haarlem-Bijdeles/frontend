import animate from 'defaults/scripts/helpers/animate';

export default class MobileMenu {
  constructor(menu) {
    this.menu = menu;
    this.button = document.querySelector('.js-menu-trigger');
    this.doc = document.documentElement;
    this.bindEvents();
  }

  bindEvents() {
    this.button.addEventListener('click', () => this.toggle());
  }

  toggle() {
    const expanded = this.button.getAttribute('aria-expanded') === 'true';
    if (!expanded) {
      this.open();
    } else {
      this.close();
    }
  }

  hideAfterAnimation(event) {
    if (event.propertyName !== 'height') return;
    this.menu.classList.add('animation-ended');
  }

  open() {
    this.button.setAttribute('aria-expanded', true);
    this.doc.classList.add('menu-is-active');

    animate.in(this.menu);
    // this.menu.addEventListener('transitionend', event => this.hideAfterAnimation(event));
  }

  close() {
    this.button.setAttribute('aria-expanded', false);
    this.doc.classList.remove('menu-is-active');

    animate.out(this.menu);
  }
}
