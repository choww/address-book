var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');

gulp.task('reactify', function() {
  return browserify({
    entries: 'public/src/components/index.js',
  }).transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/build/js'));
});

gulp.task('sass', function() {
  return gulp.src('public/src/scss/*.scss')
             .pipe(sass())
             .pipe(gulp.dest('public/build/css'));
});

gulp.task('watch', function() {
  gulp.watch('public/src/**/*.js*', ['reactify']);
  gulp.watch('public/src/scss/*.scss', ['sass']);
});
