import { siteUrl } from './siteDetails'

export default {
  defaultLocale: 'nl',
  lazy: true,
  seo: false,
  baseUrl: siteUrl,
  langDir: 'locales/',
  locales: [
    {
      name: 'Nederlands',
      code: 'nl',
      iso: 'nl-NL',
      file: 'nl.json',
    },
  ],
  vueI18nLoader: true,
  vueI18n: {
    dateTimeFormats: {
      nl: {
        short: {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        },
        long: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          weekday: 'short',
          hour: 'numeric',
          minute: 'numeric',
        },
      },
    },
  },
}
