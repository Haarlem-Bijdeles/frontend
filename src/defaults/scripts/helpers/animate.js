const hideAfterAnimation = (event) => {
  if (event.propertyName !== 'opacity') return;
  event.target.classList.remove('is-active');
  event.target.removeEventListener('transitionend', hideAfterAnimation);
};

module.exports = {
  in: (element) => {
    element.removeEventListener('transitionend', hideAfterAnimation);
    element.classList.add('is-active');
    setTimeout(() => element.classList.add('is-open'), 50);
  },
  out: (element) => {
    element.classList.remove('is-open');
    element.addEventListener('transitionend', hideAfterAnimation);
  },
};
