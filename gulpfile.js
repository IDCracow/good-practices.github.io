var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('sass', function () {
   gulp.src('./stylesheets/styles.sass')
	  .pipe(sass({indentedSyntax: true}))
	  .pipe(gulp.dest('./stylesheets'))
});

gulp.task('watch', function() {
	gulp.watch('./stylesheets/*.sass', [ 'sass' ]);
});

gulp.task('default', ['sass', 'watch']);
