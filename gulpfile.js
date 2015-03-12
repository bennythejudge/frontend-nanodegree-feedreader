'use strict';

var gulp = require('gulp');
var serve = require('gulp-serve');
var browserSync = require('browser-sync');
var jshint = require('jshint');
var jshint = require('gulp-jshint');
var reload = browserSync.reload;

gulp.task('serve',function() {
    browserSync({
        server: "./"
    });
    gulp.watch("js/*.js").on('change', reload);
    gulp.watch("jasmine/spec/*.js").on('change', reload);
    gulp.watch("./*.html").on('change', reload);
    gulp.watch("css/*.css").on('change', reload);
});

// Lint JavaScript
gulp.task('jshint', function () {
  return gulp.src(['js/*.js','jasmine/spec/feedreader.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
});
