var gulp = require('gulp'),
    sass = require('gulp-sass'),
    
    package = require('./package.json');




gulp.task('css', function () {
    return gulp.src('src/scss/style.scss')
    .pipe(sass({errLogToConsole: true}))
    
    
    .pipe(gulp.dest('app/assets/css'))
    
});




gulp.task('default', ['css'], function () {
    gulp.watch("src/scss/*/*.scss", ['css']);
  
});

