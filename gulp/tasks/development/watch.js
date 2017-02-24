var gulp   = require('gulp');
var config = require('../../config').watch;

/**
 * Start browsersync task and then watch files for changes
 */
gulp.task('watch', ['browser-sync'], function() {
  gulp.watch(config.sass,      ['sass']);
});