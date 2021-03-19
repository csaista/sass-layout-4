// const gulp = require('gulp');
// const sass = require('gulp-sass');
// const browserSync = require('browser-sync').create();
// const concat = require('gulp-concat');
// const concat_js = require('gulp-concat');
// //compile
// gulp.task('sass', function () {
//     //css file location
//     return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss',
//             './scss/**/*.scss'
//         ])

//         //pass that file through compiler
//         .pipe(sass())
//         //save css file location
//         .pipe(concat('style.css'))

//         .pipe(gulp.dest('./css'))

//         //stream changes to all browsers
//         .pipe(browserSync.stream());
// });

// gulp.task('js', function () {
//     return gulp.src(['node_modules/jquery/dist/jquery.js',
//             'node_modules/bootstrap/dist/js/bootstrap.min.js'])
//         .pipe(concat('index.js'))
//         .pipe(gulp.dest('./js'))
//         .pipe(browserSync.stream());

// });
// gulp.task('serve', gulp.series('sass', function () {
//     browserSync.init({
//         server: {
//             baseDir: './'
//         }

//     });
//     gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss',
//     './scss/**/*.scss'
//     ], gulp.series('sass'));
//     gulp.watch('./*.html').on('change', browserSync.reload);

// }));

// // gulp.task ('pack-css',function()
// // {
// //     return gulp.src(['./css/bootstrap.css','./css/owl-carousel.css'])
// //     .pipe(concat('style.css'))
// //     .pipe(gulp.dest('./css'));
// // });
// gulp.task('default', gulp.series('js', 'serve'));
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const concat = require('gulp-concat');
const concat_js = require('gulp-concat');
//compile
gulp.task('sass', function () {
    //css file location
    return gulp.src(['node_modules/bootstrap/scss/bootstrap.scss',
            'node_modules/owl.carousel/dist/assets/owl.carousel.css',
            'node_modules/owl.carousel/dist/assets/owl.theme.default.css',
             './scss/**/*.scss'
        ])

        //pass that file through compiler
        .pipe(sass())
        //save css file location
        .pipe(concat('style.css'))

        .pipe(gulp.dest('./css'))

        //stream changes to all browsers
        .pipe(browserSync.stream());
});

gulp.task('js', function () {
    return gulp.src(['node_modules/jquery/dist/jquery.js',
            'node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/owl.carousel/dist/owl.carousel.js',
            'js/carousel.js'])
        .pipe(concat('index.js'))
        .pipe(gulp.dest('./js'))
        .pipe(browserSync.stream());

});
gulp.task('serve', gulp.series('sass', function () {
    browserSync.init({
        server: {
            baseDir: './'
        }

    });
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss',
        './node_modules/owl.carousel/dist/assets/owl.carousel.css',
        './node_modules/owl.carousel/dist/assets/owl.carousel.theme.default.css',
        './scss/**/*.scss'
    ], gulp.series('sass'));
    gulp.watch('./*.html').on('change', browserSync.reload);

}));

// gulp.task ('pack-css',function()
// {
//     return gulp.src(['./css/bootstrap.css','./css/owl-carousel.css'])
//     .pipe(concat('style.css'))
//     .pipe(gulp.dest('./css'));
// });
gulp.task('default', gulp.series('js', 'serve'));
