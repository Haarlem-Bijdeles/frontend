import { createApolloFetch } from 'apollo-fetch'
import pkg from './package'
// import routes from './pages/index'
// const baseUrl = 'https://www.haarlembijdeles.nl/wp-json/'
const baseUrl = 'https://api.haarlembijdeles.michielkoning.nl/'
import splashscreens from './config/splashscreens';

export default {
  mode: 'universal',
  env: {
    baseUrl: 'https://haarlembijdeles.michielkoning.nl/',
  },
  /*
   ** Headers of the page
   */
  head: {
    lang: 'nl',
    title: pkg.name,
    titleTemplate: '%s',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: pkg.description },
      {
        hid: 'og:description',
        name: 'og:description',
        content: pkg.description,
      },
    ],
    link: [
      ...splashscreens,
      {
        rel: 'dns-prefetch',
        href: '//www.google-analytics.com',
      },
      {
        rel: 'dns-prefetch',
        href: 'https://api.haarlembijdeles.michielkoning.nl',
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: ['~/styles/base.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/axios', '~/plugins/google-maps', '~/plugins/vuelidate'],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    'nuxt-svg-loader',
    '@nuxtjs/apollo',
    'nuxt-i18n',
  ],
  manifest: {
    name: 'Haarlem Bijdeles',
    background_color: '#f85909',
    theme_color: '#f85909',
    short_name: 'Haarlem Bijdeles',
  },
  i18n: {
    defaultLocale: 'nl',
    lazy: true,
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
  },
  /*
   ** Axios module configuration
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        })
      }
    },
    transpile: [/^vue2-google-maps($|\/)/],

    postcss: {
      plugins: {
        'postcss-mixins': {
          mixinsDir: './styles/mixins/',
        },
        'postcss-preset-env': {
          importFrom: ['./styles/media-queries/media-queries.css'],

          features: {
            'nesting-rules': true,
            'custom-media-queries': true,
            'media-query-ranges': true,
          },
        },
      },
    },
  },
  generate: {
    fallback: true,
    async routes() {
      const uri = `${baseUrl}/graphql`

      const query = `
        query GET_SITEMAP {
          pages(first: 100) {
            edges {
              node {
                uri
                childPages {
                  edges {
                    node {
                      uri
                    }
                  }
                }
              }
            }
          }
          posts(first:100) {
            edges {
              node {
                uri
              }
            }
          }
        }
      `

      const apolloFetch = createApolloFetch({ uri })
      const result = await apolloFetch({ query }) // all apolloFetch arguments are optional
      const { pages, posts } = result.data

      const sitemapPosts = posts.edges.map(item => {
        return `/wie-zijn-wij/blog/${item.node.uri}`
      })
      const sitemapPages = pages.edges.map(item => {
        const subItems = item.node.childPages.edges.map(subItem => {
          return subItem.node.uri
        })
        return [item.node.uri, ...subItems]
      })

      return [...sitemapPosts, ...[].concat(...sitemapPages)]
    },
  },

  apollo: {
    clientConfigs: {
      default: {
        // required
        httpEndpoint: `${baseUrl}graphql`,
      },
    },
  },
}
