var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

// Static Server + watching scss/html files
gulp.task('browser-sync', ['sass'], function () {

    browserSync.init({
        server: "./app"
    });
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    gulp.src('app/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

//Watch task
gulp.task('watch', function () {
    gulp.watch('app/sass/**/*.scss', ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['watch', 'sass', 'browser-sync']);
