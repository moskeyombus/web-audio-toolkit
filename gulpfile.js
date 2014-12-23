
var
  gulp = require('gulp'), 
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  clean = require('gulp-clean'),
  bowerSrc = require('gulp-bower-src'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename');

// tasks
gulp.task('lint', function() {
  gulp.src(['./src/**/*.js', '!./src/components/**'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'));
});
gulp.task('clean', function() {
    gulp.src('./dist/*')
      .pipe(clean({force: true}));
});
gulp.task('minify-css', function() {
  var opts = {comments:true,spare:true};
  gulp.src(['./src/**/*.css', '!./src/components/**'])
    .pipe(minifyCSS(opts))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('minify-js', function() {
  gulp.src(['./src/*.js'])
    .pipe(rename('build.min.js'))
    .pipe(uglify({
      // inSourceMap:
      // outSourceMap: "web-audio-toolkit.js.map"
    }))
    .pipe(gulp.dest('./build/'));
});
gulp.task('build-src', function () {
  gulp
    .src([
      './src/components/interact/interact.js',
      './src/components/jsplumb/dist/js/dom.jsPlumb-1.7.2.js',
      './src/*.js'      
    ])
    .pipe(concat('web-audio-toolkit.js'))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('build-min', function () {
  gulp
    .src([
      './src/components/interact/interact.min.js',
      './src/components/jsplumb/dist/js/dom.jsPlumb-1.7.2-min.js',
      './build/build.min.js'      
    ])
    .pipe(concat('web-audio-toolkit.min.js'))
    .pipe(gulp.dest('./dist/'));
});
gulp.task('copy-bower-components', function () {
  bowerSrc()
    .pipe(gulp.dest('dist/lib'));
});

// default task
gulp.task('default',
  ['lint']
);
// build task
gulp.task('build',
  ['lint', 'minify-js','minify-css', 'build-src', 'build-min','copy-bower-components']
);