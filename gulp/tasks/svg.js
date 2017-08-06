var gulp      = require('gulp');
var path 			= require('path');
var svgstore 	= require('gulp-svgstore');
var svgmin    = require('gulp-svgmin');
var inject    = require('gulp-inject');
var rename    = require('gulp-rename');
var config    = require('../config').svg;

gulp.task('svg', function () {
  var svgs = gulp
    .src(config.icons)
    .pipe(svgmin(function (file) {
        var prefix = path.basename(file.relative, path.extname(file.relative));
        return {
            plugins: [{
                cleanupIDs: {
                    prefix:      prefix + '-',
                    minify:      true,
                },
								removeTitle: true
            }]
        }
    }))
		.pipe(rename({
			prefix: 'icon-'
		}))
    .pipe(svgstore({
    	inlineSvg: true
    }));

    return gulp
        .src('./src/icons/template/icons.php')
        .pipe(inject(svgs, {
        	removeTags: true,
        	transform: function(filePath, file) {
						return file.contents.toString();
        	}
        }))
        .pipe(gulp.dest('./partials'));
});