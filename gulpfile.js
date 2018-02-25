var gulp = require('gulp');
var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('reactify', function() {
  return browserify({
    entries: './public/components/contact.jsx',
  }).transform(reactify)
    .bundle()
    .pipe(source('app.js'))
    .pipe(gulp.dest('public/build/js'))
});
