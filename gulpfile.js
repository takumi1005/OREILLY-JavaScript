const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', function(done) {
  // Nodeのソース
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("dist"));
  // ブラウザのソース
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipe(gulp.dest("public/dist"));
  done();
});