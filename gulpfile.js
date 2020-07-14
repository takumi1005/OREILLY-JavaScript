const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('defalut', function(){
  // Nodeのソース
  gulp.src("es6/**/*.js")
    .pipe(babel())
    .pipea(gulp.dest("dist"));
  // ブラウザのソース
  gulp.src("public/es6/**/*.js")
    .pipe(babel())
    .pipea(gulp.dest("public/dist"));
});