import FontFaceObserver from 'fontfaceobserver'
// glyphhanger --whitelist="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" --subset=OpenSans-Regular.ttf --formats=woff2,woff

const fontBasic = 'Open Sans Webfont Basic'
const fontBase = 'Open Sans Webfont'

const setRootFont = baseFontLoaded => {
  const stageLevel = baseFontLoaded ? 'fonts-stage-2' : 'fonts-stage-1'
  window.document.documentElement.classList.add(stageLevel)
}

if (sessionStorage.fontsLoadedCriticalFoftPreloadPolyfill) {
  setRootFont(true)
} else {
  const fontBasicObserver = new FontFaceObserver(fontBasic)

  Promise.all([fontBasicObserver.load()]).then(() => {
    setRootFont(false)
    const fontRegularObserver = new FontFaceObserver(fontBase)
    const fontBoldObserver = new FontFaceObserver(fontBase, {
      weight: 700,
    })
    Promise.all([fontRegularObserver.load(), fontBoldObserver.load()]).then(
      () => {
        setRootFont(true)
        // Optimization for Repeat Views
        sessionStorage.fontsLoadedCriticalFoftPreloadPolyfill = true
      },
    )
  })
}
