var gulp = require('gulp'),
    watch = require('gulp-watch'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function() {

    browserSync.init({
        notify: false,
        server: {
            baseDir: "./"
        }
    });

    watch('./index.html', function() {
        browserSync.reload();
    });

    watch('./sass/**/*.scss', function() {
        gulp.start('cssInject');
    });

});

gulp.task('cssInject', ['styles'], function() {
    return gulp.src('./css/style.css')
        .pipe(browserSync.stream());
});