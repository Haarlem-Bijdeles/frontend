const FontFaceObserver = require('fontfaceobserver');

(() => {
  // Optimization for Repeat Views
  if (sessionStorage.criticalFoftDataUriFontsLoaded) {
    document.documentElement.className += ' fonts-stage-1 fonts-stage-2';
    return;
  }

  const fontBasic = new FontFaceObserver('Open Sans Webfont Basic');

  Promise.all([fontBasic.load()]).then(() => {
    document.documentElement.className += ' fonts-stage-1';

    const fontRegular = new FontFaceObserver('Open Sans Webfont');
    const fontBold = new FontFaceObserver('Open Sans Webfont', {
      weight: 700,
    });

    Promise.all([fontRegular.load(), fontBold.load()]).then(() => {
      document.documentElement.className += ' fonts-stage-2';

      // Optimization for Repeat Views
      sessionStorage.criticalFoftDataUriFontsLoaded = true;
    });
  });
})();
