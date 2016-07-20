var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var modernizr = require('modernizr');
var fs = require('fs');

gulp.task('build-modernizr', function(){
	modernizr.build({
		"minify": true,
		"options": [
			"setClasses"
		],
		"feature-detects": [
			"test/history"
		]
	}, function(result){
		fs.writeFile('./public/build/modernizr.js',result);
	});
});

gulp.task('build', function() {

	return browserify({
			entries: ['./src/main.js'],
			debug: true
		}).transform(babelify, {presets:['es2015','react'], extensions:['.js','.babel']})
		.bundle()
		.pipe(source('main.js'))
		.pipe(gulp.dest('./public/build/'));
});