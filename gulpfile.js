// Include gulp
var gulp = require('gulp');

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');
<<<<<<< HEAD
var concat = require('gulp-concat');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['app.js', 'routes/**/*.js', 'models/**/*.js', 'config/**/*.js', 'public/javascripts/**/*.js'])
=======
var env = require('gulp-env');

// Lint Task
gulp.task('lint', function() {
    return gulp.src(['app.js', 'routes/**/*.js', 'models/**/*.js'])
>>>>>>> aa854801459c1dd6be67a2fa312b5f48f91b6cd0
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('sass', function() {
<<<<<<< HEAD
    return gulp.src(['scss/*.scss'])
        .pipe(sass())
        .pipe(concat('style.css'))
=======
    return gulp.src('scss/*.scss')
        .pipe(sass())
>>>>>>> aa854801459c1dd6be67a2fa312b5f48f91b6cd0
        .pipe(gulp.dest('public/stylesheets'));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('nodemon', function (cb) {
  var started = false;
  return nodemon({
<<<<<<< HEAD
    script: 'bin/www'
  }).on('start', function () {
    // to avoid nodemon being started multiple times
    // thanks @matthisk
    if (!started) {
      cb();
      started = true;
    }
=======
    script: 'bin/www',
    ext: 'js jade html',
    env: {DEBUG: "guestbook:server"}
  }).on('restart', function () {
    console.log('restarted!');
>>>>>>> aa854801459c1dd6be67a2fa312b5f48f91b6cd0
  });
});

// Default Task
gulp.task('default', ['lint', 'sass', 'watch', 'nodemon']);
