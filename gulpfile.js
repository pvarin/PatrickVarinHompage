var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('build', function() {
	return browserify({
			entries: ['./src/main.babel'],
			debug: true
		}).transform(babelify, {presets:['es2015','react'], extensions:['.babel']})
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./public/build/'));
});