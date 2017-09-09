var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

// Static Server + watching scss/html files
gulp.task('browser-sync', ['sass'], function () {

    browserSync.init({
        server: "./app"
    });
});

gulp.task('start', function () {
    nodemon({
        script: 'server.js'
        , ext: 'js html'
        , env: { 'NODE_ENV': 'development' }
    });
})

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function () {
    gulp.src('app/stylesheets/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css'))
        .pipe(browserSync.reload({ stream: true }))
});

//Watch task
gulp.task('watch', function () {
    gulp.watch('app/stylesheets/**/*.scss', ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('dev', ['watch', 'sass', 'browser-sync']);
