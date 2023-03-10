let gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    babel = require('gulp-babel'),
    autoprefixer = require('gulp-autoprefixer');

gulp.task('scss', function(){
  return gulp.src('app/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({ browsers: ['last 8 versions'] }))
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('html', function(){
  return gulp.src('app/*.html')
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('script', function(){
  return gulp.src('app/js/**/*.js')
    .pipe(babel({ presets: ['@babel/preset-env'] }))
    .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "app/"
      }
  });
});

gulp.task('watch', function(){
  gulp.watch('app/scss/**/*.scss', gulp.parallel('scss'));
  gulp.watch('app/*.html', gulp.parallel('html'))
  gulp.watch('app/js/**/*.js', gulp.parallel('script'))
});

gulp.task('dev', gulp.parallel('browser-sync', 'watch'));