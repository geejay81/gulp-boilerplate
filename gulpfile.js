var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: 'dist'
        },
    })
});

gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'))
        .pipe(browserSync.reload({
            stream: true
        }));
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
        .pipe(browserSync.reload({
            stream: true
        }))
);

gulp.task('html', function() {
    return gulp.src('*.html')
        .pipe(gulp.dest('./dist/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});

gulp.task('run', ['sass','css','babel','html']);

gulp.task('watch', ['browserSync'], function() {
    gulp.watch('./sass/*.sass', ['sass']);
    gulp.watch('./css/*.css', ['css']);
    gulp.watch('./js/*.js', ['babel']);
    gulp.watch('*.html', ['html'])
});

gulp.task('default', ['run','watch']);