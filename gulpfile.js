var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('reactify', function() {
  return browserify({
    entries: 'public/components/address_book.jsx',
  }).transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/build/js'));
});

gulp.task('sass', function() {
  return gulp.src('public/scss/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('public/build/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/components/*.jsx', ['reactify']);
  gulp.watch('public/scss/*.scss', ['sass']);
});
