export default class Accessibity {
  constructor() {
    // bind events
    this.skipContentLinks = document.querySelectorAll('.js-skip-content');
    this.tabClass = 'user-is-tabbing';
    window.addEventListener('keydown', event => this.handleFirstTab(event));
    this.setSkipLinks();
  }

  handleFirstTab(event) {
    if (event.keyCode === 9) {
      document.body.classList.add(this.tabClass);

      window.removeEventListener('keydown', this.handleFirstTab);
      window.addEventListener('mousedown', subEvent =>
        this.handleMouseDownOnce(subEvent));
    }
  }

  handleMouseDownOnce() {
    document.body.classList.remove(this.tabClass);

    window.removeEventListener('mousedown', subEvent =>
      this.handleMouseDownOnce(subEvent));
    window.addEventListener('keydown', this.handleFirstTab);
  }

  setSkipLinks() {
    this.skipContentLinks.forEach(item => item.setAttribute('tabindex', -1));
  }
}

new Accessibity();
