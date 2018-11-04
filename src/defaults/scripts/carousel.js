import scrollTo from './helpers/scroll';
import Hammer from 'hammerjs';

/**
 * Caroussel
 * @export
 * @class Carousel
 */
export default class Carousel {
  constructor(carousel) {
    this.carousel = carousel;
    this.slides = this.carousel.querySelectorAll('.carousel__item');

    this.isAnimating = false;
    this.totalSlides = this.slides.length;
    this.bindEvents();
  }

  /**
   * Removes classes after animation has ended
   * @param {Object} event
   * @memberof Carousel
   */
  removeAnimateClasses(event) {
    if (event.propertyName !== 'transform') return;
    const slide = event.target;
    slide.classList.remove(
      'is-animating-in',
      'is-animating-out',
      'animate-left',
      'animate-right',
    );
    this.isAnimating = false;
  }

  /**
   * Animates the slide with the nextSlideIndex towards the passed direction
   * @param {string} direction
   * @param {number} nextSlideIndex
   * @memberof Carousel
   */
  gotoSlide(direction, nextSlideIndex) {
    if (this.isAnimating) return;
    this.isAnimating = true;

    const animateDirection =
      direction === 'left' ? 'animate-left' : 'animate-right';
    const thumbList = this.carousel.querySelector('.carousel__thumbs-list');

    const previousSlide = this.carousel.querySelector(
      '.carousel__item.is-active',
    );
    const previousThumb = this.carousel.querySelector(
      '.carousel__thumb-item.is-active',
    );
    const nextSlide = this.carousel.querySelector(
      `.carousel__item[data-slide="${nextSlideIndex}"]`,
    );
    const nextThumb = this.carousel.querySelector(
      `.carousel__thumb-item[data-slide="${nextSlideIndex}"]`,
    );

    // thumbs
    previousThumb.classList.remove('is-active');
    nextThumb.classList.add('is-active');

    // thumb is offscreen
    if (
      nextThumb.getBoundingClientRect().x +
        nextThumb.getBoundingClientRect().width >
        this.carousel.getBoundingClientRect().width ||
      nextThumb.getBoundingClientRect().x < 0
    ) {
      let offscreenWidth;
      if (nextThumb.getBoundingClientRect().x < 0) {
        offscreenWidth = nextThumb.getBoundingClientRect().x;
      } else {
        offscreenWidth =
          nextThumb.getBoundingClientRect().x +
          nextThumb.getBoundingClientRect().width -
          this.carousel.getBoundingClientRect().width;
      }

      const currentScroll = thumbList.scrollLeft;
      const thumbListPositionLeft = thumbList.getBoundingClientRect().left;
      const goToScroll = currentScroll + offscreenWidth - thumbListPositionLeft;

      scrollTo(thumbList, goToScroll, 300);
    }

    nextSlide.classList.add(animateDirection, 'is-active', 'is-animating-in');

    setTimeout(() => {
      nextSlide.classList.remove(animateDirection);

      previousSlide.classList.add(animateDirection, 'is-animating-out');
      previousSlide.classList.remove('is-active');
    }, 50);
  }

  /**
   * Calculates the current slide
   * @returns {number}
   * @memberof Carousel
   */
  getCurrentSlideIndex() {
    const currentSlide = this.carousel.querySelector(
      '.carousel__item.is-active',
    );
    return parseInt(currentSlide.dataset.slide, 0);
  }

  /**
   * Calculates the previous slide and calls the slideTo function
   * @memberof Carousel
   */
  gotoPreviousSlide() {
    let nextSlideIndex = this.getCurrentSlideIndex() - 1;
    if (nextSlideIndex === 0) nextSlideIndex = this.totalSlides;
    this.gotoSlide('right', nextSlideIndex);
  }

  /**
   * Calculates the next slide and calls the slideTo function
   * @memberof Carousel
   */
  gotoNextSlide() {
    let nextSlideIndex = this.getCurrentSlideIndex() + 1;
    if (nextSlideIndex > this.totalSlides) nextSlideIndex = 1;
    this.gotoSlide('left', nextSlideIndex);
  }

  /**
   * Binds the click and keypress events to the carouselbuttons and thumbs
   * @memberof Carousel
   */
  bindEvents() {
    const thumbs = this.carousel.querySelectorAll('.carousel__thumb-item');
    const images = this.carousel.querySelector('.carousel__images');
    const btnNavigatePrevious = this.carousel.querySelector(
      '.js-carousel-navigate-previous',
    );
    const btnNavigateNext = this.carousel.querySelector(
      '.js-carousel-navigate-next',
    );

    thumbs.forEach(thumb =>
      thumb.addEventListener('click', () => {
        const nextSlideIndex = parseInt(thumb.dataset.slide, 0);
        const previousSlide = this.carousel.querySelector(
          '.carousel__item.is-active',
        );

        const previousSlideIndex = parseInt(previousSlide.dataset.slide, 0);

        if (nextSlideIndex === previousSlideIndex) return;

        const direction =
          nextSlideIndex > previousSlideIndex ? 'left' : 'right';

        this.gotoSlide(direction, nextSlideIndex);
      }),
    );

    this.slides.forEach(slide => {
      slide.addEventListener('transitionend', event =>
        this.removeAnimateClasses(event),
      );
    });

    const mc = new Hammer(images);
    mc.get('pan').set({
      direction: Hammer.DIRECTION_ALL,
    });

    // initialise triggers
    mc.on('panleft', () => this.gotoNextSlide());
    mc.on('panright', () => this.gotoPreviousSlide());

    btnNavigatePrevious.addEventListener('click', () =>
      this.gotoPreviousSlide(),
    );
    btnNavigateNext.addEventListener('click', () => this.gotoNextSlide());

    document.addEventListener('keyup', event => {
      if (event.keyCode === 37) this.gotoPreviousSlide();
      if (event.keyCode === 39) this.gotoNextSlide();
    });
  }
}
