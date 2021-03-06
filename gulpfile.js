// Generated by CoffeeScript 1.12.7

/* Gulp File by Ivan Vinogradov for simplify-math project */
var coffee, gulp, mainfiles, mincss, minjs, pug, rename, stylus;

gulp = require('gulp');

stylus = require('gulp-stylus');

coffee = require('gulp-coffee');

mincss = require('gulp-csso');

pug = require('gulp-pug');

minjs = require('gulp-uglify');

rename = require('gulp-rename');

mainfiles = require('main-bower-files');

gulp.task('minjs', function() {
  gulp.src('./public/script.js').pipe(minjs()).on('error', function(err) {
    console.error('\n\n\n*** JS Compress Error occurred *** \n\n\n');
    console.log(err);
    return console.error('\n\n\n*** JS Compress Error backtrace ended *** \n\n\n');
  }).pipe(rename(function(file) {
    return file.basename += '.min';
  })).pipe(gulp.dest('./public'));
  return console.log("----===**  Compressing JS file  **===----");
});

gulp.task('mincss', function() {
  gulp.src('./public/stylesheet.css').pipe(mincss()).on('error', function(err) {
    console.error('\n\n\n*** CSS Compress Error occurred *** \n\n\n');
    console.log(err);
    return console.error('\n\n\n*** CSS Compress Error backtrace ended *** \n\n\n');
  }).pipe(rename(function(file) {
    return file.basename += '.min';
  })).pipe(gulp.dest('./public'));
  return console.log("----===**  Compressing CSS file  **===----");
});

gulp.task('coffee', function() {
  gulp.src('./source/script.coffee').pipe(coffee()).on('error', function(err) {
    console.error('\n\n*** COFFEE Compile Error occurred *** \n\n');
    console.log(err);
    return console.error('\n\n*** COFFEE Compile Error backtrace ended *** \n\n');
  }).pipe(gulp.dest('./public'));
  console.log("----===**  Compiling COFFEE file  **===----");
  return gulp.start('minjs');
});

gulp.task('stylus', function() {
  gulp.src('./source/stylesheet.styl').pipe(stylus()).on('error', function(err) {
    console.error('\n\n\n*** STYLUS Compile Error occurred *** \n\n\n');
    console.log(err);
    return console.error('\n\n\n*** STYLUS Compile Error backtrace ended *** \n\n\n');
  }).pipe(gulp.dest('./public'));
  console.log("----===**  Compiling STYLUS file  **===----");
  return gulp.start('mincss');
});

gulp.task('pug', function() {
  gulp.src('./source/index.pug').pipe(pug()).on('error', function(err) {
    console.error('\n\n\n*** PUG Compile Error occurred *** \n\n\n');
    console.log(err);
    return console.error('\n\n\n*** PUG Compile Error backtrace ended *** \n\n\n');
  }).pipe(gulp.dest('./public'));
  return console.log("----===**  Compiling PUG file  **===----");
});

gulp.task('mainfiles', function() {
  return gulp.src(mainfiles()).pipe(gulp.dest('./public/libs/'));
});

gulp.task('coffee:watch', function() {
  gulp.watch('./source/script.coffee', ['coffee']);
  return console.log("----===**  Watching to COFFEE file  **===----");
});

gulp.task('stylus:watch', function() {
  gulp.watch('./source/stylesheet.styl', ['stylus']);
  return console.log("----===**  Watching to STYLUS file  **===----");
});

gulp.task('pug:watch', function() {
  gulp.watch('./source/index.pug', ['pug']);
  return console.log("----===** Watching to PUG file  **===----");
});

gulp.task('minjs:watch', function() {
  gulp.watch('./public/script.js', ['minjs']);
  return console.log("----===** Watching to JS file **===----");
});

gulp.task('mincss:watch', function() {
  gulp.watch('./public/stylesheet.css', ['mincss']);
  return console.log("----===** Watching to CSS file **===----");
});

gulp.task('watch', function() {
  gulp.start('coffee:watch');
  gulp.start('stylus:watch');
  gulp.start('pug:watch');
  return console.log("----===**  WATCHING IS STARTED  **===----");
});

gulp.task('default', function() {
  gulp.start('watch');
  return console.log("----===**  GULP IS RUNNING  **===----");
});
