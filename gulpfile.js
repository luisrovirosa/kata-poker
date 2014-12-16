var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var watch = require('gulp-watch');


gulp.task('default', function(){
    gulp.src(['src/**', 'spec/**'])
        .pipe(watch(['src/**', 'spec/**'], function(){
            gulp.start('jasmine')
        }));
});

gulp.task('jasmine', function () {
    return gulp.src(['spec/*.js'])
        .pipe(jasmine({verbose:true}));
});
