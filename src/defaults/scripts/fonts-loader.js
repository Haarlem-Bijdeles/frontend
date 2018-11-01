import FontFaceObserver from 'fontfaceobserver';

export default class FontsLoader {
  constructor() {
    this.loadFonts();
  }

  loadFonts() {
    if (sessionStorage.criticalFoftDataUriFontsLoaded) {
      document.documentElement.classList.add('fonts-stage-2');
      return;
    }

    const fontBasic = new FontFaceObserver('Roboto Slab Basic');

    Promise.all([fontBasic.load()]).then(() => {
      document.documentElement.classList.add('fonts-stage-1');

      const fontRegular = new FontFaceObserver('Roboto Slab');
      const fontBold = new FontFaceObserver('Roboto Slab', {
        weight: 700,
      });

      Promise.all([fontRegular.load(), fontBold.load()]).then(() => {
        document.documentElement.classList.add('fonts-stage-2');

        // Optimization for Repeat Views
        sessionStorage.criticalFoftDataUriFontsLoaded = true;
      });
    });
  }
}
