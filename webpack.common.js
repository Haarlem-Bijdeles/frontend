const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');

const PATHS = {
  assets: path.resolve(__dirname, 'assets'),
  src: path.resolve(__dirname, 'src'),
  defaults: path.resolve(__dirname, 'src/defaults'),
  theme: path.resolve(__dirname, 'src/theme'),
};

const settings = {
  host: 'localhost',
  port: 3001,
  proxy: 'http://adler.localhost/',
};

module.exports = {
  entry: {
    main: `${PATHS.theme}/scripts/functions.js`,
    contact: `${PATHS.theme}/scripts/contact.js`,
    assets: `${PATHS.theme}/scripts/assets.js`,
  },
  resolve: {
    alias: {
      defaults: `${PATHS.defaults}/`,
      style: `${PATHS.theme}/sass/`,
      favicons: `${PATHS.theme}/favicons/`,
      icons: `${PATHS.theme}/icons/`,
      images: `${PATHS.theme}/images/`,
    },
  },
  output: {
    filename: '[name].js',
    path: `${PATHS.assets}/scripts`,
  },
  stats: {
    children: false,
  },
  module: {
    rules: [
      // Run JS through Babel Loader before bundling it to `scripts.js`
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env'],
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        enforce: 'pre',
        options: {
          quiet: true,
          emitWarning: true,
          fix: true,
        },
      },
      {
        test: /\.scss$/,
        enforce: 'pre',
        loader: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                sourceMap: true,
              },
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: true,
                config: {
                  ctx: {
                    modules: true,
                    env: 'production',
                  },
                },
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: true,
              },
            },
          ],
        }),
      },
      {
        test: /\.(svg|png|ico|xml|json|webmanifest)$/,
        loader: 'file-loader',
        include: /favicons/,
        exclude: /images/,
        options: {
          name: '[name].[ext]',
          outputPath: './../favicons',
        },
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'file-loader',
        include: /fonts/,
        options: {
          name: '[name].[ext]',
          outputPath: './../fonts',
        },
      },
      {
        test: /\.png$/,
        loader: 'file-loader',
        include: /images/,
        options: {
          name: '[name].[ext]',
          outputPath: './../images',
        },
      },
      {
        test: /\.svg$/,
        exclude: /favicons/, // dit moet eigenlijk gewoon een regex worden
        use: [
          {
            loader: 'svg-sprite-loader',
            options: {
              symbolId: 'icon-[name]',
              extract: true,
              spriteFilename: './../icons/icons.svg',
            },
          },
          {
            loader: 'svgo-loader',
            options: {
              plugins: [
                { removeTitle: true },
                { convertColors: { shorthex: false } },
                { convertPathData: false },
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin([PATHS.assets]),
    new BrowserSyncPlugin(
      {
        host: settings.host,
        port: settings.port,
        proxy: settings.proxy,
        open: false,
        files: [`${PATHS.assets}/**/*`, './**/*.twig', './**/*.php'],
      },
      {
        reload: false,
      },
    ),
    new StyleLintPlugin({
      lintDirtyModulesOnly: true,
    }),
    new ExtractTextPlugin({
      filename: './../css/style.css',
    }),
    new SpriteLoaderPlugin({
      plainSprite: true,
    }),
    new HtmlCriticalPlugin({
      src: 'http://localhost:8080/',
      dest: `${PATHS.assets}/css/critical.css`,
      css: 'https://www.haarlembijdeles.nl/',
      minify: true,
      width: 1920,
      height: 1080,
    }),
  ],
};
