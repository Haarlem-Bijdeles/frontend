const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

gulp.task('scripts', () => {
  return gulp.src('./src/scripts/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(concat('scripts.js'))
    .pipe(babel({
        presets: ['es2015']
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('./scripts'));
});