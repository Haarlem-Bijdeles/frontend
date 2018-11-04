import animate from './helpers/animate';

/**
 * The
 * @export
 * @class Modal
 */
export default class Modal {
  constructor(modal) {
    this.modal = modal;
    this.modalId = this.modal.dataset.modalId;
    this.lastFocused = null;
    this.modalContent = modal.querySelector('.js-modal-content');

    this.closeAfterPressingEscapeKeyHandler = this.closeAfterPressingEscapeKey.bind(
      this,
    );
    this.focusRestrictHandler = this.focusRestrict.bind(this);

    this.bindEvents();
  }

  bindEvents() {
    const triggers = document.querySelectorAll(
      `.js-modal-trigger[data-modal-id=${this.modalId}]`,
    );
    triggers.forEach(btn =>
      btn.addEventListener('click', event => {
        this.open();
        event.preventDefault();
      }),
    );

    const btnClose = this.modal.querySelector('.js-modal-close');
    btnClose.addEventListener('click', () => this.close());

    this.modal.addEventListener(
      'click',
      event => {
        if (event.currentTarget === event.target) {
          this.close();
        }
      },
      false,
    );
  }

  open(callback) {
    document.body.classList.add('modal-is-active');

    this.lastFocused = document.activeElement;

    animate.in(this.modal);
    this.modal.setAttribute('aria-hidden', 'false');
    this.modalContent.setAttribute('tabindex', '0');
    this.modalContent.focus();

    this.bindDocumentKeyEvents();
    this.loadIFrame();
    this.swap();
    if (callback) {
      // callback.call();
    }
  }

  close() {
    document.body.classList.remove('modal-is-active');

    animate.out(this.modal);
    this.modal.setAttribute('aria-hidden', 'true');
    this.modalContent.setAttribute('tabindex', '-1');

    this.unbindDocumentKeyEvents();
    this.lastFocused.focus();
  }

  swap() {
    const firstChild = document.body.firstChild;
    document.body.insertBefore(this.modal, firstChild);
  }

  loadIFrame() {
    const iframe = this.modal.querySelector('iframe');
    if (!iframe) return;
    if (iframe.classList.contains('is-active')) return;
    iframe.src = iframe.dataset.src;
    iframe.classList.add('is-active');
    iframe.addEventListener('load', () => {
      iframe.classList.add('is-loaded');
    });
  }

  focusRestrict() {
    document.addEventListener(
      'focus',
      event => {
        if (!this.modalContent.contains(event.target)) {
          event.stopPropagation();
          this.modalContent.focus();
        }
      },
      true,
    );
  }

  closeAfterPressingEscapeKey(event) {
    if (event.keyCode === 27) this.close();
  }

  bindDocumentKeyEvents() {
    window.addEventListener('keypress', this.focusRestrictHandler);
    document.addEventListener('keyup', this.closeAfterPressingEscapeKeyHandler);
  }

  unbindDocumentKeyEvents() {
    window.removeEventListener('keypress', this.focusRestrictHandler);
    document.removeEventListener(
      'keyup',
      this.closeAfterPressingEscapeKeyHandler,
    );
  }
}
