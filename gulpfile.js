var gulp = require('gulp');
var jasmine = require('gulp-jasmine');
var argv = require('yargs').argv;
var Poker = require('./src/Poker.js');


gulp.task('default', ['jasmine', 'watch']);

gulp.task('watch', function(){
    gulp.watch(['src/**', 'spec/**'], ['jasmine']);
});

gulp.task('jasmine', function () {
    return gulp.src(['src/**', 'spec/*.js'])
        .pipe(jasmine({verbose:true, includeStackTrace: true}));
});

gulp.task('play', function(){
    var poker = new Poker();
   console.log(poker.play(argv['cards']));
});
