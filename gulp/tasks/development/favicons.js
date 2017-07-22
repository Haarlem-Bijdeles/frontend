const gulp = require('gulp');
const fs = require('fs');
const realFavicon = require('gulp-real-favicon');
const config = require('../../config').favicons;

// Generate the icons. This task takes a few seconds to complete.
// You should run it at least once to create the icons. Then,
// you should run it whenever RealFaviconGenerator updates its
// package (see the check-for-favicon-update task below).
gulp.task('generate-favicons', function (done) {
  realFavicon.generateFavicon({
    masterPicture: config.icon,
    dest: config.dest,
    iconsPath: config.path,
    design: {
      ios: {
        pictureAspect: 'noChange',
        assets: {
          ios6AndPriorIcons: false,
          ios7AndLaterIcons: true,
          precomposedIcons: false,
          declareOnlyDefaultIcon: true,
        },
        appName: config.name,
      },
      desktopBrowser: {},
      windows: {
        pictureAspect: 'noChange',
        backgroundColor: config.colorWindows,
        onConflict: 'override',
        assets: {
          windows80Ie10Tile: false,
          windows10Ie11EdgeTiles: {
            small: false,
            medium: true,
            big: false,
            rectangle: false,
          },
        },
        appName: config.name,
      },
      androidChrome: {
        pictureAspect: 'noChange',
        themeColor: config.color,
        manifest: {
          name: 'Haarlem bij de les',
          display: 'browser',
          orientation: 'notSet',
          onConflict: 'override',
          declared: true,
        },
        assets: {
          legacyIcon: false,
          lowResolutionIcons: true,
        },
      },
      safariPinnedTab: {
        pictureAspect: 'blackAndWhite',
        threshold: 50.78125,
        themeColor: config.color,
      },
    },
    settings: {
      scalingAlgorithm: 'Mitchell',
      errorOnImageTooSmall: false,
    },
    markupFile: config.jsonFile,
  }, function() {
    done();
  });
});

// Inject the favicon markups in your HTML pages. You should run
// this task whenever you modify a page. You can keep this task
// as is or refactor your existing HTML pipeline.
gulp.task('inject-favicon-markups', function() {
  return gulp.src(config.templateSrc)
    .pipe(realFavicon.injectFaviconMarkups(JSON.parse(fs.readFileSync(config.jsonFile)).favicon.html_code))
    .pipe(gulp.dest(config.templateDest));
});

// Check for updates on RealFaviconGenerator (think: Apple has just
// released a new Touch icon along with the latest version of iOS).
// Run this task from time to time. Ideally, make it part of your
// continuous integration system.
gulp.task('check-for-favicon-update', function(done) {
  var currentVersion = JSON.parse(fs.readFileSync(config.jsonFile)).version;
  realFavicon.checkForUpdates(currentVersion, function(err) {
    if (err) {
      throw err;
    }
  });
});