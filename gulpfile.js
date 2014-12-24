
var
  gulp = require('gulp'), 
  jshint = require('gulp-jshint'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  clean = require('gulp-clean'),
  bowerSrc = require('gulp-bower-src'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  wrap = require('gulp-wrap'),
  declare = require('gulp-declare'),  
  handlebars = require('gulp-handlebars');  

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
gulp.task('templates', function(){
  gulp.src('src/templates/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'WebAudioToolkit.templates',
      noRedeclare: true, // Avoid duplicate declarations
    }))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/'));
});
gulp.task('build-src', function () {
  gulp
    .src([
      './src/components/interact/interact.js',
      './src/components/jsplumb/dist/js/dom.jsPlumb-1.7.2.js',
      './src/components/handlebars/handlebars.runtime.js',
      './build/templates.js',
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
      './src/components/handlebars/handlebars.runtime.min.js',
      './build/templates.js',
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
  ['templates', 'minify-js','minify-css', 'build-src', 'build-min','copy-bower-components']
);