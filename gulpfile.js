'use strict';

var gulp = require('gulp'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	sourcemaps = require('gulp-sourcemaps');

gulp.task('js', function() {
	var b = browserify({
			entries: './app/client/index.js',
			extensions: ['.jsx']
		})
		.transform('babelify', {
			presets: ['es2015', 'react']
		})
		.bundle()
		.pipe(source('app.js'))
		.pipe(buffer())
		.pipe(sourcemaps.init({loadMaps: true}))
		.pipe(sourcemaps.write('./'))
		.pipe(gulp.dest('./public/js'));
});
