import { createApolloFetch } from 'apollo-fetch'
import pkg from './package'
import splashscreens from './config/splashscreens'
import googleAnalytics from './config/googleAnalytics'
import manifest from './config/manifest'
import i18n from './config/i18n'
import apollo from './config/apollo'
import { apiUrl, siteUrl } from './config/siteDetails'

export default {
  target: 'static',
  modern: 'client',
  env: {
    baseUrl: siteUrl,
  },
  server: {
    port: 3333,
    host: '0.0.0.0',
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'nl',
    },
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
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black-translucent',
      },
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes',
      },
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
        href: apiUrl,
      },
    ],
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: 'var(--nuxt-loader-color)', height: '2px' },

  /*
   ** Global CSS
   */
  css: ['~/styles/base.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/axios',
    { src: '~/plugins/google-maps', mode: 'client' },
    { src: '~/plugins/vuelidate', mode: 'client' },
    { src: '~/plugins/vue-announcer.js', mode: 'client' },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/apollo',
    'nuxt-svg-loader',
    'nuxt-i18n',
  ],
  buildModules: ['@nuxtjs/google-analytics'],
  googleAnalytics,
  manifest,
  i18n,
  /*
   ** Build configuration
   */ build: {
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
    babel: {
      plugins: ['@babel/plugin-proposal-optional-chaining'],
    },
    loaders: {
      cssModules: {
        modules: {
          // this is where you can alter the generated class names:
          localIdentName: '[local]-[hash:base64:4]',
        },
      },
    },
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
    interval: 2000,
    concurrency: 5,
    async routes() {
      const uri = `${apiUrl}graphql`
      const query = `
        query GET_SITEMAP {
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

      const { posts } = result.data

      return posts.edges.map((url) => {
        return url.node.uri
      })
    },
  },

  apollo,
}
