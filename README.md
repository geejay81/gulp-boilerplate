# Gulp Boilerplate Project

## Features of the project

- SASS files built to minified CSS

## Steps used to create this project

1. Install Gulp CLI
``` 
npm install gulp-cli -g
```
2. Change to the working directory (will need to change below to correct path)
```
cd gulp-boilerplate
```
3. Initiate project, and follow instructions
``` 
npm init
```
4. Install gulp in project and add to package.json as dev dependency
```
npm install gulp -D
```
5. Create the gulpfile.js
```
touch gulpfile.js
```
6. Install gulp-sass for building SASS files to CSS files
```
npm install gulp-sass --save-dev
```
7. Write gulpfile tasks
``` javascript
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    return gulp.src('./sass/*.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css'));
});
```
8. Run sass task to build SASS
```
gulp sass
```
9. Install gulp-uglifycss to minify css files
```
npm install gulp-uglifycss --save
```
10. Update gulpfile to add a task for minifying CSS files
``` javascript
var gulp = require('gulp');
var sass = require('gulp-sass');
var uglifycss = require('gulp-uglifycss');

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
        .pipe(gulp.dest('./dist/'))
});
```