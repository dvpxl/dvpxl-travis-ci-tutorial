# travis-ci-tutorial

This is a simple travis-ci tutorial for beginners for your continuous integration.

This example includes creating builds for various node versions and runs a simple test files in your /test folder.   This builds for against the following node version and shown in the configuration file.
 
- node (latest)
- node (latest version 6)
- node (5.11)
- iojs

## Test
- Uses mocha for test framework.  To run following command:   
- %> gulp

## TODO:
More comprehensive gulfile.js for later tutorials.  

```
var gulp = require('gulp');
var mocha = require('gulp-mocha');
var nodemon = require('gulp-nodemon');
var jshint = require('gulp-jshint');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('develop', function () {
   nodemon({
     script: 'app.js',
     ext: 'html js',
     env: { 'NODE_ENV': 'development' }
   })
     .on('restart', function () {
       console.log('restarted!')
     })
});

gulp.task('test', function () {
    gulp.src('test/**/*.js')
        .pipe(mocha({
            reporter: 'nyan',
            clearRequireCache: true,
            ignoreLeaks: true
        }));
});



// Lint Tasks
// gulp.task('lint', function() {
//     return gulp.src(['public/js/*.js', 'routes/**/*.js'])
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// // Compile Our Sass
// gulp.task('sass', function() {
//     return gulp.src('sass/*.sass')
//         .pipe(sass())
//         .pipe(gulp.dest('public/css'));
// });

// Watch Files For Changes
// gulp.task('watch', function() {
//     gulp.watch('public/js/*.js', ['lint']);
//     gulp.watch(['routes/**/*.js', 'app.js', 'test/**/*.js'], ['lint', 'test']);
//     gulp.watch('sass/*.sass', ['sass']);
// });

// Default Task
gulp.task('default', ['test']);

 


 
