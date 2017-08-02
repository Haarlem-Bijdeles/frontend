/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');
const csso = require('gulp-csso');
const size = require('gulp-size');
const config = require('../../config');
const notify = require('gulp-notify');

const isProduction = !!util.env.production;

gulp.task('sass', function() {
  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', (err) => {
      notify().write(err);
    }))
    .pipe(!isProduction ? sourcemaps.write() : util.noop())
    .pipe(autoprefixer(config.autoprefixer))
    .pipe(isProduction ? csso() : util.noop())
    .pipe(gulp.dest(config.sass.dest))
    .pipe(size())
    .pipe(notify({ message: 'Styles task complete' }));
});
