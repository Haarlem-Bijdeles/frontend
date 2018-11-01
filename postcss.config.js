const autoprefixer = require('autoprefixer');
const cssMqPacker = require('css-mqpacker');

module.exports = ctx => ({
  plugins: {
    autoprefixer: {
      grid: false,
    },
    //'css-mqpacker': true, //ctx.env === 'production',
  },
});
