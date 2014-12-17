var gulp = require('gulp');
var jasmine = require('gulp-jasmine');


gulp.task('default', ['jasmine', 'watch']);

gulp.task('watch', function(){
    gulp.watch(['src/**', 'spec/**'], ['jasmine']);
});

gulp.task('jasmine', function () {
    return gulp.src(['src/**', 'spec/*.js'])
        .pipe(jasmine({verbose:true, includeStackTrace: true}));
});
