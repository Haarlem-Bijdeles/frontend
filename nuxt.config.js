import { createApolloFetch } from 'apollo-fetch'
import pkg from './package'
// import routes from './pages/index'
// const baseUrl = 'https://www.haarlembijdeles.nl/wp-json/'
const baseUrl = 'https://api.haarlembijdeles.michielkoning.nl/'

export default {
  mode: 'universal',
  env: {
    baseUrl,
  },
  /*
   ** Headers of the page
   */
  head: {
    htmlAttrs: {
      lang: 'nl',
    },
    title: pkg.name,
    titleTemplate: '%s | Haarlem bijdeles',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1, viewport-fit=cover',
      },
      { hid: 'description', name: 'description', content: pkg.description },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

      {
        href:
          'https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap',
        rel: 'stylesheet',
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
    '@nuxtjs/sitemap',
    'nuxt-svg-loader',
    '@nuxtjs/apollo',
    ['@nuxtjs/router', { path: '~/src/' }],
    'nuxt-i18n',
  ],
  i18n: {
    defaultLocale: 'nl',
    locales: [
      {
        name: 'Nederlands',
        code: 'nl',
        iso: 'nl-NL',
        file: 'nl.json',
      },
    ],
    lazy: true,
    langDir: 'locales/',
  },
  /*
   ** Axios module configuration
   */
  axios: {
    baseURL: baseUrl,
  },
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
    async routes() {
      // const response = await axios.get(
      //   `${baseUrl}wp-json/wp/v2/posts/?per_page=100`,
      // )
      // const posts = response.data.map(post => post.slug)
      // const response2 = await axios.get(
      //   `${baseUrl}wp-json/wp/v2/pages/?per_page=11`,
      // )
      // const pages = response2.data.map(page => page.slug)
      // const urls = [...pages]
      // return urls

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
  // sitemap: {
  //   hostname: 'https://www.haarlembijdeles.nl/',
  //   async routes() {
  //     const response = await axios.get(`${baseUrl}wp/v2/posts/?per_page=100`)
  //     return response.data.map(
  //       post => `https://www.haarlembijdeles.nl/${post.slug}`,
  //     )
  //   },
  // },
  apollo: {
    clientConfigs: {
      default: {
        // required
        httpEndpoint: `${baseUrl}graphql`,
      },
    },
  },
}
