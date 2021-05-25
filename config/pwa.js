import { twitter } from './siteDetails'

const themeColor = '#f85909'

// PWA module configuration: https://go.nuxtjs.dev/pwa
export default {
  manifest: {
    background_color: themeColor,
    theme_color: themeColor,
    categories: ['education'],
    lang: 'nl',
    name: process.env.SITE_TITLE,
    orientation: 'portrait-primary',
    short_name: process.env.SITE_TITLE,
  },
  meta: {
    appleStatusBarStyle: 'black-translucent',
    mobileApp: true,
    mobileAppIOS: true,
    theme_color: themeColor,
    twitterCard: 'summary_large_image',
    viewport: 'width=device-width, initial-scale=1, viewport-fit=cover',
    twitterCreator: twitter,
    twitterSite: twitter,
  },
}
