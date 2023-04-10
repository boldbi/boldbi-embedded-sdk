'use strict';

var gulp = require('gulp');
var shelljs = require('shelljs');

gulp.task('es-lint', function (done) {
    shelljs.exec('npm run es-lint');
    done();
});

//gulp.task('lint', gulp.series('es-lint', 'html-lint', 'less-lint'));
gulp.task('lint', gulp.series('es-lint'));