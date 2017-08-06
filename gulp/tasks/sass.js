/* eslint-disable import/no-extraneous-dependencies */

const gulp = require('gulp');
const plumber = require('gulp-plumber');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');
const csso = require('gulp-csso');
const size = require('gulp-size');
const notify = require('gulp-notify');
const config = require('../config');
const combineMq = require('gulp-combine-mq');
const banner = require('gulp-banner');
const pkg = require('../../package.json');

const comment = `/*
Theme Name: <%= pkg.name %>
Theme URI: <%= pkg.homepage %>
Author: <%= pkg.author.name %>
Author URI: <%= pkg.author.url %>
Description: <%= pkg.description %>
Version: <%= pkg.version %>
License: <%= pkg.license %>
*/`;

const isProduction = !!util.env.production;

gulp.task('sass', () => {
  return gulp.src(config.sass.src)
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', (err) => {
      notify().write(err);
    }))
    .pipe(!isProduction ? sourcemaps.write() : util.noop())
    .pipe(autoprefixer(config.autoprefixer))

    .pipe(isProduction ? combineMq() : util.noop())
    .pipe(isProduction ? csso() : util.noop())
    .pipe(banner(comment, {
      pkg,
    }))
    .pipe(gulp.dest(config.sass.dest))
    .pipe(size())
    .pipe(notify({ message: 'Styles task complete' }));
});
