import { createApolloFetch } from 'apollo-fetch'
import pkg from './package'
import splashscreens from './config/splashscreens'
import googleAnalytics from './config/googleAnalytics'
import manifest from './config/manifest'
import i18n from './config/i18n'
import apollo from './config/apollo'
import sitemap from './config/sitemap'
import { apiUrl, siteUrl } from './config/siteDetails'

export default {
  mode: 'universal',
  env: {
    baseUrl: siteUrl,
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
      {
        rel: 'preload',
        href: '/fonts/OpenSans-Regular-Basic.woff2',
        as: 'font',
        type: 'font/woff2',
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
  plugins: [
    '~/plugins/axios',
    '~/plugins/google-maps',
    '~/plugins/vuelidate',
    { src: '~/plugins/fontsLoader', mode: 'client' },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/sitemap',
    '@nuxtjs/apollo',
    'nuxt-svg-loader',
    'nuxt-i18n',
  ],
  buildModules: ['@nuxtjs/google-analytics'],
  googleAnalytics,
  manifest,
  i18n,
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
      const uri = `${apiUrl}/graphql`

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

  apollo,
  sitemap,
}
