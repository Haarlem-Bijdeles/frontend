const merge = require('webpack-merge');

const BrotliPlugin = require('brotli-webpack-plugin');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  plugins: [
    new BrotliPlugin({
      test: /\.(js|css)$/,
    }),
  ],
});
