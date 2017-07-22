const wordpress = './';
const assets = './assets/';
const src = `${assets}/src/`;
const url = 'http://localhost/wordpress/';
const liveUrl = 'https://haarlembijdeles.michielkoning.nl/';
const assetsUrl = `${liveUrl}/wp-content/themes/haarlembijdeles/assets/`;
const srcIcons = `${src}icons/`;
const packageSettings = './package.json';

const site = {
  name: 'Haarlem bij de les',
  color: '#da532c',
  description: '',
}

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
      `${srcIcons}facebook-rounded.svg`,
      `${srcIcons}twitter-rounded.svg`,
      `${srcIcons}linkedin-rounded.svg`,
      `${srcIcons}menu.svg`,
      `${srcIcons}check-rounded.svg`,
    ],
  },
  favicons: {
    icon: `${src}favicons/favicon.png`,
    jsonFile: `${src}favicons/faviconData.json`,
    dest: './assets/favicons/',
    path: `${assetsUrl}favicons/`,
    name: site.name,
    color: site.color,
    colorWindows: '#f85909',
    templateSrc: `${src}favicons/template/favicons.php`,
    templateDest: './partials',
  },
  watch: {
    scripts: `${src}scripts/**/*.js`,
    sass: `${src}sass/**/*.s+(a|c)ss`,
    svg: `${srcIcons}/**/*.svg`,
  },
  manifest: {
    lang: 'nl',
    shortName: site.name,
    name: site.name,
    description: site.description,
    theme_color: site.color,
    iconsPath: `${assetsUrl}favicons/`,
  },
};
