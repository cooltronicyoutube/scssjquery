var gulp = require('gulp');
var concat = require('gulp-concat');
var sass = require('gulp-sass');

gulp.task('developer', ['sass:developer', 'concat:js', 'watch:developer']);
gulp.task('default', ['developer']); //default gulp as developer (executed by command 'gulp')
gulp.task('sass:developer', function() {
  gulp.src('public/scss/main.scss')
  .pipe(concat('styles.all.css'))
  .pipe(sass())
  .on('error', swallowError)
  .pipe(gulp.dest('public/dist'));
});

gulp.task('concat:js', function() {
  gulp.src('public/js/*.js')
  .pipe(concat('plugins.all.js'))
  .pipe(gulp.dest('public/dist'));
});

gulp.task('watch:developer', function() {
  gulp.watch('public/scss/**/*.scss', ['sass:developer']);
  gulp.watch('public/js/*.js', ['concat:js']);
});

function swallowError (error) {
  // If you want details of the error in the console
  console.log(error.toString())
  this.emit('end')
}
