// Initialize modules
// Importing specific gulp API functions lets us write them below as series() instead of gulp.series()
const { src, dest, watch, series, parallel } = require('gulp');

// For css (includes autoprefixer and cssnano)
const postcss = require('gulp-postcss');

const cssnano = require('cssnano'); // For minifying css files

// Html minifier
const htmlmin = require('gulp-htmlmin');

// For minifying js files
const terser = require('gulp-terser'); 

// image minimization
const image = require('gulp-image');




// File paths
const files = {
    cssPath: 'src/css/**/*.css',
    jsPath: 'src/js/**/*.js',
    htmlPath: '*.html',
    imagePath: 'img/*'  
}

// Sass task: compiles the style.scss file into style.css
function cssTask(){
    return src(files.cssPath)

        .pipe(postcss([ cssnano() ])) // PostCSS plugins
 
        .pipe(dest('dist')

    ); // put final CSS in dist folder
}

// JS task: uglifies JS files to script.js

function jsTask(){
    return src([
        files.jsPath
        
        ])
       .pipe(terser())
       .pipe(dest('dist'))
} 

function htmlTask(){
    return src([
        files.htmlPath
        ])
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist'));
}

// Image Min

function imageTask(){
    return src([
        files.imagePath
        
        ])
       .pipe(image())
       .pipe(dest('dist/img'))
}

// Watch task: watch SCSS and JS files for changes
// If any change, run scss and js tasks simultaneously
function watchTask(){
    watch([files.cssPath, files.jsPath, files.htmlPath],
        {interval: 1000, usePolling: true}, //Makes docker work
        series(
            parallel(cssTask, jsTask),
            htmlTask,
            imageTask

        )
    );
}

// Export the default Gulp task so it can be run
// Runs the scss and js tasks simultaneously
// then runs cacheBust, then watch task
exports.default = series(
    parallel(cssTask, jsTask),
    htmlTask,
    imageTask,
    watchTask
);

//  ***** NOTE: for running all of these: type only "gulp" at once ******
