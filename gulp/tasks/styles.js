var gulp        = require('gulp');
var sass        = require('gulp-sass');
var rename = require('gulp-rename');

gulp.task('styles', function() {
  return gulp.src('./sass/main.scss')
    .pipe(sass({includePaths: ['sass']}).on('error', function(errorInfo) {
          console.log(errorInfo.toString());
          this.emit('end');
      }))
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./css'));
});