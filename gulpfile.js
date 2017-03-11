var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    minifycss = require('gulp-minify-css')，
    imagemin = require('gulp-imagemin');

gulp.task('scripts',function(){
    gulp.src('js/*.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('js/'));
});

gulp.task('styles',function(){
    gulp.src('css/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('minCSS'));
});

gulp.task('watch',function(){
    gulp.watch('js/*.js',['scripts']);
    gulp.watch('css/*.css',['styles']);
});

gulp.task('imagemin', function(){
    gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});

gulp.task('default',['scripts','styles','watch']);