const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const minifycss = require('gulp-uglifycss');
const purgecss = require('gulp-purgecss')

gulp.task('sass', async function () {
        return gulp.src('./src/sass/*.scss')
            .pipe(sass().on('error', sass.logError))
            .pipe(purgecss({content: ['*.html']}))
            .pipe(gulp.dest('./src/css'));
    }
);

gulp.task('css', async function () {
        gulp.src('./src/css/*.css')
            .pipe(minifycss({
                "ugliComments": true
            }))
            .pipe(gulp.dest('./dist/'));
    }
);

gulp.task('run', gulp.series('sass', 'css'));

gulp.task('watch', async function () {
        gulp.watch(['./src/**/*.scss', './**/*.html'], gulp.series('sass'));
        gulp.watch('./src/**/*.css', gulp.series('css'));
    }
);

gulp.task('default', gulp.series('run', 'watch'));
