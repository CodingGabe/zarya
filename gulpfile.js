'use strict';

const gulp = require("gulp"),
      sass = require("gulp-sass"),
      autoprefixer = require("gulp-autoprefixer")

gulp.task('sass', function(){
    gulp.src("themes/zarya/static/sass/**/*.sass")
    .pipe(sass({
        outputStyle : "compressed"
    }))
    .pipe(autoprefixer({
        browsers : ["last 20 versions"]
    }))
    .pipe(gulp.dest("themes/zarya/static/css"))
})

// Watch asset folder for changes
gulp.task("watch", ["sass"], function () {
    gulp.watch("themes/zarya/static/sass/**/*", ["sass"])
})

// Set watch as default task
gulp.task("default", ["watch"])