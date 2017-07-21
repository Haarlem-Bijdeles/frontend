const wordpress = './';
const src = './src/';
const url = 'http://localhost/wordpress/';
const srcIcons = `${src}icons/`;

module.exports = {
  browsersync: {
    development: {
      proxy: url,
      open: false,
      port: 9999,
      files: [
        './scripts/functions.js',
        './**/*.php',
        './style.css',
      ],
    },
  },
  sass: {
    src: `${src}sass/**/*.s+(a|c)ss`,
    dest: './',
    options: {
      noCache: true,
      compass: false,
      bundleExec: true,
      sourcemap: true,
    },
  },
  autoprefixer: {
    cascade: false,
    flexbox: 'no-2009',
  },
  sourcemaps: {
    includeContent: false,
    sourceRoot: `${src}scss`,
  },
  svg: {
    icons: [
      `${srcIcons}bootstrap/facebook.svg`,
      `${srcIcons}bootstrap/twitter.svg`,
      `${srcIcons}menu.svg`,
      `${srcIcons}check-rounded.svg`,
    ],
  },
  watch: {
    scripts: `${src}scripts/**/*.js`,
    sass: `${src}sass/**/*.s+(a|c)ss`,
    svg: `${srcIcons}/**/*.svg`,
  },
};
