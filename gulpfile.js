/*!
 * gulp
 * $ npm install gulp-ruby-sass gulp-autoprefixer gulp-cssnano gulp-jshint gulp-concat gulp-uglify gulp-imagemin gulp-notify gulp-rename gulp-livereload gulp-cache del --save-dev
 */

var gulp = require('gulp'),
  connect = require('gulp-connect');


// Scripts
gulp.task('scripts', function() {
  return gulp.src('./app/scripts/**/*.js')
    .pipe(jshint('.jshintrc'))
    .pipe(jshint.reporter('default'))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('dist/scripts'))
    .pipe(rename({ suffix: '.min' }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
    .pipe(notify({ message: 'Scripts task complete' }));
});


gulp.task('connect', function() {
  connect.server({
    root: 'app',
    livereload: true
  });
});
 
/* reload HTML */
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

/* reload CSS */
gulp.task('css', function () {
  gulp.src('./app/styles/*.css')
    .pipe(connect.reload());
});
 
gulp.task('watch', function () {
  // Watch HTML in app dir
  gulp.watch(['./app/*.html'], ['html']);

  // Watch CSS 
  gulp.watch(['./app/styles/*.css'], ['css']);

	// Watch .js files
	gulp.watch('./app/scripts/**/*.js', ['scripts']);
});
 
gulp.task('default', ['connect', 'watch']);












