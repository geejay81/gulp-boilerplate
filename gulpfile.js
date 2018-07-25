var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var babel = require('gulp-babel');

gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});

gulp.task('css', function() {
    gulp.src('./css/*.css')
        .pipe(uglifycss({
            "uglyComments": true
        }))
        .pipe(gulp.dest('./dist/css/'))
});

gulp.task('babel', () =>
	gulp.src('./js/*.js')
		.pipe(babel({
			presets: ['env']
		}))
		.pipe(gulp.dest('./dist/js/'))
);

gulp.task('run', ['sass','css','babel']);

gulp.task('watch', function() {
    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('css/*.css', ['css']);
});

gulp.task('default', ['run','watch']);