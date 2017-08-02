/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const config = require('../../config').scripts;
const util = require('gulp-util');
const uglify = require('gulp-uglify');
const size = require('gulp-size');

const isProduction = !!util.env.production;

gulp.task('scripts', () => {
  return gulp.src(config.src)
    .pipe(sourcemaps.init())
    .pipe(concat('functions.js'))
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(!isProduction ? sourcemaps.write() : util.noop())
    .pipe(isProduction ? uglify() : util.noop())
    .pipe(gulp.dest(config.dest))
    .pipe(size());
});
