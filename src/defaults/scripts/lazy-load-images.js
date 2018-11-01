/**
 * LazyLoad images
 * @export
 * @class LazyLoad
 */
export default class LazyLoad {
  /**
   * Creates an instance of LazyLoad.
   * @param {object} image
   * @memberof LazyLoad
   */
  constructor(image) {
    this.image = image;
    this.addObserver();
  }

  /**
   * Updates the sources of the image based on data attributes
   * @memberof LazyLoad
   */
  updateImage() {
    this.image.src = this.image.dataset.src;
    this.image.srcset = this.image.dataset.srcset;
  }

  /**
   * Tests if the image is in the viewport based by IntersectionObserver
   * @memberof LazyLoad
   */
  addObserver() {
    if ('IntersectionObserver' in window && 'IntersectionObserverEntry' in window) {
      const lazyImageObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.updateImage();
            lazyImageObserver.unobserve(this.image);
          }
        });
      });
      lazyImageObserver.observe(this.image);
    } else {
      this.updateImage();
    }
  }
}

const lazyImages = document.querySelectorAll('img[data-srcset]');
lazyImages.forEach(image => new LazyLoad(image));
