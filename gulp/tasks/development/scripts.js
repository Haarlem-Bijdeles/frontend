const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const config = require('../../config').sass;

gulp.task('scripts', () => {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('functions.js'))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./scripts'));
});