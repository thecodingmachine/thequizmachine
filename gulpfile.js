var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    serve = require('gulp-serve');

// Webpack
gulp.task('webpack', function() {
    return gulp.src('./src/app/app.js')
        .pipe(webpack(require('./webpack.config.js')))
        .pipe(gulp.dest('./dist'));
});

// Web Server
gulp.task('serve:web', serve({
    root: ['dist'],
    port: 2424
}));

// Watch
gulp.task('watch', function() {
    gulp.watch('./src/app/**/*', ['webpack'])
});

gulp.task('default', ['serve:web', 'webpack', 'watch']);
