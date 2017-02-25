'use strict';

var wordpress         = './';
var src               = './src/';
var url               = 'http://localhost/wordpress/'

module.exports = {
  browsersync: {
    development: {
      proxy: url,
      open: false,
      port: 9999,
      files: [
        './**/*.php',
        './**/*.css'
      ]
    }
  },
  sass: {
    src:  src + 'sass/**/*.s+(a|c)ss',
    dest: './',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true
    },
  },
  autoprefixer: {
    cascade: false,
    flexbox: 'no-2009'
  },
  sourcemaps: {
    includeContent: false,
    sourceRoot: src + 'scss'
  },
  watch: {
    sass:  src + 'sass/**/*.s+(a|c)ss'
  }
}